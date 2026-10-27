const $=s=>document.querySelector(s);
const days=['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'];
function read(){try{return JSON.parse(localStorage.getItem('tischzeit'))||{}}catch{return {}}}
const state=read();
const prefs={exclude:'',servings:2,cuisine:'all',protein:'all',...state.prefs};
const recipeById=new Map(recipes.map(r=>[r.id,r]));
const clamp=n=>Math.max(1,Math.min(12,Math.round(Number(n)||2)));
prefs.servings=clamp(prefs.servings);
const portions=Object.fromEntries(Object.entries(state.portions||{}).filter(([id])=>recipeById.has(id)).map(([id,n])=>[id,clamp(n)]));
let favorites=(state.favorites||[]).filter(id=>recipeById.has(id));
let plan=Object.fromEntries(Object.entries(state.plan||{}).filter(([key,p])=>p&&recipeById.has(p.id)&&/^[0-6]-(Mittagessen|Abendessen)$/.test(key)).map(([key,p])=>[key,{id:p.id,servings:clamp(p.servings)}]));
let meal='Abendessen',view='discover',day=(new Date().getDay()+6)%7,offset=0,visible=9,openId=null;
const format=n=>new Intl.NumberFormat('de-CH',{maximumFractionDigits:2}).format(n);
const serving=id=>portions[id]||prefs.servings;
function save(){try{localStorage.setItem('tischzeit',JSON.stringify({version:2,prefs,favorites,plan,portions}))}catch{toast('Speichern ist in diesem Browser nicht möglich.')}}
function toast(t){$('#toast').textContent=t;$('#toast').style.display='block';clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>$('#toast').style.display='none',2800)}
function eligible(r){const excluded=prefs.exclude.toLocaleLowerCase('de').split(',').map(s=>s.trim()).filter(Boolean);return !excluded.some(e=>r.ingredients.some(i=>i.name.toLocaleLowerCase('de').includes(e)))}
function portionSelect(id){return `<select data-portions="${id}" aria-label="Personen für ${recipeById.get(id).name}">${Array.from({length:12},(_,i)=>`<option value="${i+1}" ${serving(id)===i+1?'selected':''}>${i+1} ${i===0?'Person':'Personen'}</option>`).join('')}</select>`}
function card(r,label='',planned=null){return `<article class="card"><div class="photo"><img src="${r.photo}" alt="${r.name} – Foto zum Originalrezept" loading="lazy"><span class="badge">${label||r.category}</span><button class="heart" data-fav="${r.id}" aria-pressed="${favorites.includes(r.id)}" aria-label="${favorites.includes(r.id)?'Aus Favoriten entfernen':'Als Favorit speichern'}">${favorites.includes(r.id)?'♥':'♡'}</button></div><div class="card-body"><h3>${r.name}</h3><p>${r.category} · ${r.cuisine}<br>Mit Rezeptquelle und passendem Originalfoto.</p><div class="meta"><span>◷ ca. ${r.time} Min. gesamt</span><label class="portion-label">♙ ${portionSelect(r.id)}</label></div>${planned?`<p class="planned-portions">Geplant für ${planned.servings} ${planned.servings===1?'Person':'Personen'}</p>`:''}<div class="card-bottom"><button class="recipe-open" data-open="${r.id}">Rezept ansehen ↗</button><button class="add" data-add="${r.id}">＋ ${days[day].slice(0,2)} planen</button></div></div></article>`}
function render(){$('#cards').classList.toggle('week-grid',view==='week');document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===view));$('#heading').textContent=view==='week'?'Deine Woche, ganz nach deinem Geschmack':view==='favorites'?'Deine liebsten Rezepte':'Mehr Ideen für deinen Geschmack';$('#daybar').innerHTML=days.map((d,i)=>`<button data-day="${i}" class="${i===day?'selected':''}">${d}${plan[i+'-'+meal]?' · ✓':''}</button>`).join('');$('#shopping').innerHTML='';$('#shuffle').hidden=view==='week';
 if(view==='week'){$('#cards').innerHTML=days.map((d,i)=>{const p=plan[i+'-'+meal],r=p&&recipeById.get(p.id);return r?`<div>${card(r,d,p)}<button class="outline remove-plan" data-remove="${i}">Aus ${d} entfernen</button></div>`:`<div class="empty"><h3>${d}</h3><p>Noch kein ${meal} geplant.</p><button class="outline" data-pick="${i}">Rezept auswählen →</button></div>`}).join('');$('#result').textContent='Dein gespeicherter Wochenplan · '+meal;renderShopping();return;}
 const q=$('#search').value.toLocaleLowerCase('de').trim();let list=recipes.filter(r=>r.meals.includes(meal)&&eligible(r)&&r.time<=+$('#time').value&&(!q||(r.name+' '+r.category+' '+r.ingredients.map(i=>i.name).join(' ')).toLocaleLowerCase('de').includes(q)));
 if(view==='favorites')list=list.filter(r=>favorites.includes(r.id));
 list.sort((a,b)=>{const score=r=>(r.cuisine===prefs.cuisine?2:0)+(r.category===prefs.protein?3:0);return score(b)-score(a)});
 const shift=offset%Math.max(1,list.length);list=[...list.slice(shift),...list.slice(0,shift)];
 $('#cards').innerHTML=list.length?list.slice(0,visible).map(r=>card(r)).join(''):'<div class="empty"><h3>Keine passenden Rezepte gefunden.</h3><p>Ändere die Suche, die Kochzeit oder deine Vorlieben.</p></div>';
 if(list.length>visible)$('#cards').innerHTML+=`<div class="show-more"><button class="outline" data-more="true">Weitere ${Math.min(9,list.length-visible)} Rezepte anzeigen ↓</button></div>`;
 $('#result').textContent=`${list.length} passende Gerichte mit Fleisch oder Fisch · ${meal} am ${days[day]}`;
}
function ingredientList(r,n){return r.ingredients.map(i=>`<li><strong>${format(i.qty*n/r.baseServings)} ${i.unit}</strong> ${i.name}</li>`).join('')}
function openRecipe(id){const r=recipeById.get(id);if(!r)return;openId=id;$('#detail').innerHTML=`<button class="close" aria-label="Schliessen">×</button><img class="detail-image" src="${r.photo}" alt="${r.name} – Originalrezeptfoto"><span class="eyebrow">${r.category.toUpperCase()} · CA. ${r.time} MINUTEN GESAMT</span><h2>${r.name}</h2><p>Eine vereinfachte deutsche Variante des Internetrezepts. Foto: TheMealDB, zum verlinkten Originalgericht.</p><div class="portion-control"><label for="recipe-portions">Für wie viele Personen?</label><span>${portionSelect(id)}</span></div><h3 id="ingredient-heading">Zutaten für ${serving(id)} ${serving(id)===1?'Person':'Personen'}</h3><ul class="ingredients" id="ingredient-list">${ingredientList(r,serving(id))}</ul><small>Aus dem Vorrat: Salz, Pfeffer und Wasser nach Bedarf. Bei halben Eiern: verquirlen und den entsprechenden Anteil verwenden. Die Garzeit bleibt beim Umrechnen ungefähr gleich; grössere Mengen portionsweise braten.</small><h3>So einfach geht’s</h3><ol class="steps">${r.steps.map(s=>`<li>${s}</li>`).join('')}</ol><a class="source-link" href="${r.source}" target="_blank" rel="noopener noreferrer">Originalrezept & Foto: ${r.originalName} · TheMealDB ↗</a><button class="primary" data-add="${r.id}">Für ${days[day]} einplanen · ${serving(id)} Personen</button>`;$('#detail [data-portions]').id='recipe-portions';if(!$('#detail').open)$('#detail').showModal();$('#detail .close').onclick=()=>{$('#detail').close();openId=null};}
function renderShopping(){const chosen=Object.values(plan),items=new Map();for(const p of chosen){const r=recipeById.get(p.id);for(const i of r.ingredients){const k=i.name+'|'+i.unit;items.set(k,(items.get(k)||0)+i.qty*p.servings/r.baseServings)}}$('#shopping').innerHTML=`<div class="shopping"><h2>Einkaufsliste für die ganze Woche</h2><p>${chosen.length} geplante Mahlzeiten · Mittag- und Abendessen · mit den jeweils gewählten Personenzahlen</p>${items.size?[...items].sort(([a],[b])=>a.localeCompare(b,'de')).map(([k,q])=>{const [name,unit]=k.split('|');return `<label><input type="checkbox"> ${format(q)} ${unit} ${name}</label>`}).join(''):'<p>Plane dein erstes Rezept, dann entsteht hier deine Einkaufsliste.</p>'}<small>Salz, Pfeffer und Wasser nach Bedarf ergänzen.</small></div>`}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 if(b.dataset.meal){meal=b.dataset.meal;visible=9;offset=0;document.querySelectorAll('[data-meal]').forEach(x=>x.classList.toggle('selected',x===b));render()}
 if(b.dataset.view){view=b.dataset.view;visible=9;render()}
 if(b.dataset.day!==undefined){day=+b.dataset.day;render()}
 if(b.dataset.open)openRecipe(b.dataset.open);
 if(b.dataset.fav){const id=b.dataset.fav;favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];save();render()}
 if(b.dataset.add){const id=b.dataset.add;plan[day+'-'+meal]={id,servings:serving(id)};save();render();toast(`Für ${days[day]} als ${meal} eingeplant · ${serving(id)} Personen ✓`)}
 if(b.dataset.remove!==undefined){delete plan[b.dataset.remove+'-'+meal];save();render()}
 if(b.dataset.pick!==undefined){day=+b.dataset.pick;view='discover';visible=9;render()}
 if(b.dataset.more){visible+=9;render()}
});
document.addEventListener('change',e=>{const id=e.target.dataset.portions;if(!id)return;portions[id]=clamp(e.target.value);for(const p of Object.values(plan))if(p.id===id)p.servings=portions[id];save();render();if(openId===id){const r=recipeById.get(id);$('#ingredient-list').innerHTML=ingredientList(r,serving(id));$('#ingredient-heading').textContent=`Zutaten für ${serving(id)} ${serving(id)===1?'Person':'Personen'}`;$('#detail [data-add]').textContent=`Für ${days[day]} einplanen · ${serving(id)} Personen`;}});
$('#shuffle').onclick=()=>{offset+=3;visible=9;render()};$('#search').oninput=()=>{visible=9;offset=0;render()};$('#time').onchange=()=>{visible=9;render()};
function showPrefs(){const f=$('#prefs');Object.keys(prefs).forEach(k=>{if(f.elements[k])f.elements[k].value=prefs[k]});$('#onboarding').showModal()}
$('#profile').onclick=showPrefs;$('#preferences').onclick=showPrefs;
$('#prefs').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);Object.assign(prefs,{exclude:String(f.get('exclude')||'').trim(),servings:clamp(f.get('servings')),cuisine:f.get('cuisine'),protein:f.get('protein')});for(const [key,p]of Object.entries(plan))if(!eligible(recipeById.get(p.id)))delete plan[key];save();$('#onboarding').close();visible=9;offset=0;render();toast('Deine Vorlieben sind gespeichert ✓')};
$('#detail').addEventListener('close',()=>openId=null);
render();if(!state.prefs)showPrefs();
