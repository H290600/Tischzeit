// Internetquellen und zugehörige Rezeptfotos: TheMealDB. Eigene vereinfachte deutsche Varianten, Basismengen jeweils für 2 Personen.
const recipes = [
  {
    "id": "meal-52770",
    "name": "Spaghetti Bolognese",
    "time": 45,
    "cuisine": "Italienisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Rindfleisch",
    "photo": "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    "source": "https://www.themealdb.com/meal/52770",
    "originalName": "Spaghetti Bolognese",
    "desc": "Einfach erklärte Variante von Spaghetti Bolognese.",
    "ingredients": [
      {
        "qty": 250,
        "unit": "g",
        "name": "Rindshackfleisch"
      },
      {
        "qty": 200,
        "unit": "g",
        "name": "Spaghetti"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Zwiebel"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 80,
        "unit": "g",
        "name": "Champignons"
      },
      {
        "qty": 400,
        "unit": "g",
        "name": "gehackte Tomaten"
      },
      {
        "qty": 100,
        "unit": "ml",
        "name": "Rindsbouillon"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Tomatenmark"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Olivenöl"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Oregano"
      },
      {
        "qty": 25,
        "unit": "g",
        "name": "Parmesan"
      }
    ],
    "steps": [
      "Zwiebel und Knoblauch schälen und fein schneiden. Pilze putzen und würfeln.",
      "Öl erhitzen. Zwiebel 3 Minuten dünsten. Hackfleisch zugeben und krümelig durchbraten. Knoblauch, Pilze und Tomatenmark 2 Minuten mitbraten.",
      "Tomaten, Bouillon und Oregano dazugeben. 30 Minuten bei kleiner Hitze köcheln lassen und ab und zu umrühren. Mit Salz und Pfeffer abschmecken.",
      "Spaghetti nach Packungsangabe in Salzwasser kochen. Abgiessen, mit Sauce mischen und Parmesan darüberreiben."
    ]
  },
  {
    "id": "meal-52773",
    "name": "Honig-Teriyaki-Lachs mit Reis",
    "time": 25,
    "cuisine": "Asiatisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Fisch & Meeresfrüchte",
    "photo": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
    "source": "https://www.themealdb.com/meal/52773",
    "originalName": "Honey Teriyaki Salmon",
    "desc": "Einfach erklärte Variante von Honey Teriyaki Salmon.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Lachsfilet"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Reis"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Sojasauce"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Honig"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Reisessig"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Olivenöl"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Sesam"
      }
    ],
    "steps": [
      "Reis nach Packungsangabe kochen. Sojasauce, Honig und Reisessig verrühren.",
      "Öl in einer Pfanne bei mittlerer Hitze erwärmen. Lachs je Seite etwa 4 Minuten braten.",
      "Sauce zugeben und 2–3 Minuten sanft einkochen. Der Fisch soll innen gar sein und sich leicht in Lamellen teilen. Mit Sesam und Reis servieren."
    ]
  },
  {
    "id": "meal-52802",
    "name": "Fischauflauf mit Kartoffelhaube",
    "time": 65,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Fisch & Meeresfrüchte",
    "photo": "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
    "source": "https://www.themealdb.com/meal/52802",
    "originalName": "Fish pie",
    "desc": "Einfach erklärte Variante von Fish pie.",
    "ingredients": [
      {
        "qty": 500,
        "unit": "g",
        "name": "Kartoffeln"
      },
      {
        "qty": 300,
        "unit": "g",
        "name": "weisses Fischfilet"
      },
      {
        "qty": 100,
        "unit": "g",
        "name": "geschälte rohe Crevetten"
      },
      {
        "qty": 1,
        "unit": "Stange",
        "name": "Lauch"
      },
      {
        "qty": 250,
        "unit": "ml",
        "name": "Milch"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Mehl"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Butter"
      },
      {
        "qty": 30,
        "unit": "g",
        "name": "Gruyère"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Zitronensaft"
      }
    ],
    "steps": [
      "Kartoffeln schälen, würfeln und in Wasser 20 Minuten weich kochen. Lauch waschen und fein schneiden. Ofen auf 190 °C Ober-/Unterhitze vorheizen.",
      "Butter schmelzen, Lauch 5 Minuten dünsten. Mehl einrühren und Milch nach und nach dazugeben. 3 Minuten rühren, bis die Sauce leicht dick wird. Mit Zitrone, Salz und Pfeffer würzen.",
      "Fisch auf Gräten prüfen, würfeln und mit Crevetten in eine Auflaufform geben. Sauce darübergiessen.",
      "Kartoffeln abgiessen, stampfen und darüberverteilen. Käse darüberreiben. 30–35 Minuten backen, bis Fisch und Crevetten durchgegart sind."
    ]
  },
  {
    "id": "meal-52806",
    "name": "Tandoori-Poulet",
    "time": 95,
    "cuisine": "Asiatisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Poulet",
    "photo": "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
    "source": "https://www.themealdb.com/meal/52806",
    "originalName": "Tandoori chicken",
    "desc": "Einfach erklärte Variante von Tandoori chicken.",
    "ingredients": [
      {
        "qty": 350,
        "unit": "g",
        "name": "Poulet-Oberschenkelfilet"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Naturjoghurt"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Zitronensaft"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 10,
        "unit": "g",
        "name": "Ingwer"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Paprikapulver"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Garam Masala"
      },
      {
        "qty": 0.5,
        "unit": "TL",
        "name": "Kreuzkümmel"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Öl"
      },
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Naanbrot"
      }
    ],
    "steps": [
      "Knoblauch und Ingwer schälen und reiben. Mit Joghurt, Zitronensaft und Gewürzen verrühren.",
      "Poulet darin wenden und abgedeckt mindestens 60 Minuten im Kühlschrank marinieren. Diese Zeit ist in der Gesamtzeit enthalten.",
      "Ofen auf 220 °C Ober-/Unterhitze vorheizen. Poulet in eine Form legen, mit Öl beträufeln und 25–30 Minuten backen. Im Kern muss es 75 °C erreichen.",
      "Naanbrot nach Packungsangabe erwärmen und dazu servieren."
    ]
  },
  {
    "id": "meal-52819",
    "name": "Fisch-Tacos mit Avocado",
    "time": 25,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Fisch & Meeresfrüchte",
    "photo": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
    "source": "https://www.themealdb.com/meal/52819",
    "originalName": "Cajun spiced fish tacos",
    "desc": "Einfach erklärte Variante von Cajun spiced fish tacos.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "weisses Fischfilet"
      },
      {
        "qty": 4,
        "unit": "Stück",
        "name": "kleine Weizentortillas"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Avocado"
      },
      {
        "qty": 80,
        "unit": "g",
        "name": "Blattsalat"
      },
      {
        "qty": 100,
        "unit": "g",
        "name": "Tomatensalsa"
      },
      {
        "qty": 80,
        "unit": "g",
        "name": "Sauerrahm"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Cajun-Gewürz"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Zitronensaft"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Öl"
      }
    ],
    "steps": [
      "Salat waschen und schneiden. Avocado halbieren, entsteinen und in Scheiben schneiden. Sauerrahm mit Zitronensaft verrühren.",
      "Fisch auf Gräten prüfen und mit Cajun-Gewürz einreiben. In Öl bei mittlerer Hitze etwa 8–10 Minuten durchbraten, einmal wenden.",
      "Tortillas in einer trockenen Pfanne kurz erwärmen. Mit Salat, Avocado, Salsa und Fischstücken füllen. Sauerrahmsauce daraufgeben."
    ]
  },
  {
    "id": "meal-52820",
    "name": "Knuspriges Katsu-Poulet mit Curry",
    "time": 45,
    "cuisine": "Asiatisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Poulet",
    "photo": "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
    "source": "https://www.themealdb.com/meal/52820",
    "originalName": "Katsu Chicken curry",
    "desc": "Einfach erklärte Variante von Katsu Chicken curry.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Pouletbrust"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Reis"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Ei"
      },
      {
        "qty": 40,
        "unit": "g",
        "name": "Paniermehl"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Mehl"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Karotte"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Zwiebel"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 300,
        "unit": "ml",
        "name": "Pouletbouillon"
      },
      {
        "qty": 2,
        "unit": "TL",
        "name": "Currypulver"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Honig"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Sojasauce"
      },
      {
        "qty": 4,
        "unit": "EL",
        "name": "Öl"
      }
    ],
    "steps": [
      "Zwiebel, Knoblauch und Karotte schälen und klein schneiden. In einem Viertel des Öls 8 Minuten dünsten. Die Hälfte des Mehls und Curry einrühren.",
      "Bouillon langsam einrühren. Honig und Sojasauce dazugeben. 20 Minuten köcheln lassen, dann pürieren. Reis nach Packungsangabe kochen.",
      "Poulet zwischen Backpapier auf etwa 1 cm flach klopfen. Nacheinander im restlichen Mehl, verquirltem Ei und Paniermehl wenden.",
      "Im übrigen Öl bei mittlerer Hitze je Seite 5–6 Minuten braten. Erst servieren, wenn das Poulet im Kern 75 °C erreicht hat. Mit Reis und Sauce anrichten."
    ]
  },
  {
    "id": "meal-52823",
    "name": "Lachs-Crevetten-Risotto",
    "time": 40,
    "cuisine": "Italienisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Fisch & Meeresfrüchte",
    "photo": "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
    "source": "https://www.themealdb.com/meal/52823",
    "originalName": "Salmon Prawn Risotto",
    "desc": "Einfach erklärte Variante von Salmon Prawn Risotto.",
    "ingredients": [
      {
        "qty": 160,
        "unit": "g",
        "name": "Risottoreis"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Lachsfilet"
      },
      {
        "qty": 120,
        "unit": "g",
        "name": "geschälte rohe Crevetten"
      },
      {
        "qty": 100,
        "unit": "g",
        "name": "grüne Spargeln"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Zwiebel"
      },
      {
        "qty": 650,
        "unit": "ml",
        "name": "Gemüsebouillon"
      },
      {
        "qty": 20,
        "unit": "g",
        "name": "Butter"
      },
      {
        "qty": 25,
        "unit": "g",
        "name": "Parmesan"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Zitronensaft"
      }
    ],
    "steps": [
      "Zwiebel schälen und würfeln. Spargelenden abschneiden und Stangen in Stücke schneiden. Bouillon erhitzen.",
      "Die Hälfte der Butter schmelzen. Zwiebel 3 Minuten dünsten, Reis 1 Minute mitrühren. Bouillon schöpflöffelweise dazugeben und häufig rühren.",
      "Nach 15 Minuten Spargel zugeben. Weitere 5–10 Minuten kochen, bis der Reis weich mit leichtem Biss ist.",
      "Lachs würfeln. In einer zweiten Pfanne mit restlicher Butter und Crevetten 6–8 Minuten vollständig garen. Mit Parmesan und Zitrone vorsichtig unter den Reis heben."
    ]
  },
  {
    "id": "meal-52834",
    "name": "Rindsgeschnetzeltes Stroganoff",
    "time": 30,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Rindfleisch",
    "photo": "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
    "source": "https://www.themealdb.com/meal/52834",
    "originalName": "Beef stroganoff",
    "desc": "Einfach erklärte Variante von Beef stroganoff.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Rindsgeschnetzeltes"
      },
      {
        "qty": 200,
        "unit": "g",
        "name": "Champignons"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Zwiebel"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 100,
        "unit": "g",
        "name": "Crème fraîche"
      },
      {
        "qty": 100,
        "unit": "ml",
        "name": "Rindsbouillon"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Senf"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Mehl"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Öl"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Reis"
      }
    ],
    "steps": [
      "Reis nach Packungsangabe kochen. Zwiebel und Knoblauch schälen, fein schneiden. Pilze putzen und in Scheiben schneiden.",
      "Öl erhitzen. Fleisch in kleinen Portionen rundum braten, herausnehmen. Zwiebel, Knoblauch und Pilze in derselben Pfanne 7 Minuten braten.",
      "Mehl einrühren. Bouillon, Crème fraîche und Senf dazugeben. 5 Minuten köcheln lassen. Fleisch zurückgeben, erhitzen und abschmecken. Mit Reis servieren."
    ]
  },
  {
    "id": "meal-52844",
    "name": "Lasagne mit Rindshackfleisch",
    "time": 65,
    "cuisine": "Italienisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Rindfleisch",
    "photo": "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
    "source": "https://www.themealdb.com/meal/52844",
    "originalName": "Lasagne",
    "desc": "Einfach erklärte Variante von Lasagne.",
    "ingredients": [
      {
        "qty": 250,
        "unit": "g",
        "name": "Rindshackfleisch"
      },
      {
        "qty": 50,
        "unit": "g",
        "name": "Speckwürfel"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Zwiebel"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Karotte"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 400,
        "unit": "g",
        "name": "gehackte Tomaten"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Tomatenmark"
      },
      {
        "qty": 120,
        "unit": "g",
        "name": "Lasagneblätter ohne Vorkochen"
      },
      {
        "qty": 200,
        "unit": "g",
        "name": "Crème fraîche"
      },
      {
        "qty": 100,
        "unit": "g",
        "name": "Mozzarella"
      },
      {
        "qty": 25,
        "unit": "g",
        "name": "Parmesan"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Olivenöl"
      }
    ],
    "steps": [
      "Zwiebel, Knoblauch und Karotte schälen und fein schneiden. In Öl mit Speck 5 Minuten braten. Hackfleisch zugeben und vollständig krümelig braten.",
      "Tomatenmark und Tomaten zugeben. Mit etwas Wasser 20 Minuten köcheln lassen. Mit Salz und Pfeffer würzen. Ofen auf 200 °C Ober-/Unterhitze vorheizen.",
      "Abwechselnd Fleischsauce und Lasagneblätter in eine kleine Auflaufform schichten. Crème fraîche mit etwas Wasser glatt rühren und daraufverteilen.",
      "Mozzarella und Parmesan darübergeben. Etwa 30 Minuten backen, bis die Nudeln weich sind. Vor dem Schneiden 5 Minuten ruhen lassen."
    ]
  },
  {
    "id": "meal-52850",
    "name": "Poulet-Couscous mit Aprikosen",
    "time": 25,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Poulet",
    "photo": "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
    "source": "https://www.themealdb.com/meal/52850",
    "originalName": "Chicken Couscous",
    "desc": "Einfach erklärte Variante von Chicken Couscous.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Pouletbrust"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Couscous"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Kichererbsen, abgetropft"
      },
      {
        "qty": 50,
        "unit": "g",
        "name": "getrocknete Aprikosen"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Zwiebel"
      },
      {
        "qty": 200,
        "unit": "ml",
        "name": "Pouletbouillon"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Harissa"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Olivenöl"
      }
    ],
    "steps": [
      "Zwiebel schälen und fein schneiden. Aprikosen würfeln. Kichererbsen abspülen. Poulet auf separatem Brett würfeln.",
      "Öl erhitzen. Zwiebel und Poulet 8–10 Minuten braten, bis das Fleisch durchgegart ist. Harissa einrühren.",
      "Aprikosen, Kichererbsen, Couscous und heisse Bouillon dazugeben. Vom Herd nehmen und abgedeckt nach Couscous-Packungsangabe quellen lassen.",
      "Mit einer Gabel lockern. Bei Bedarf etwas heisses Wasser ergänzen und abschmecken."
    ]
  },
  {
    "id": "meal-52852",
    "name": "Thunfisch-Kartoffel-Salat",
    "time": 35,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Fisch & Meeresfrüchte",
    "photo": "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg",
    "source": "https://www.themealdb.com/meal/52852",
    "originalName": "Tuna Nicoise",
    "desc": "Einfach erklärte Variante von Tuna Nicoise.",
    "ingredients": [
      {
        "qty": 400,
        "unit": "g",
        "name": "Kartoffeln"
      },
      {
        "qty": 200,
        "unit": "g",
        "name": "Thunfisch aus der Dose, abgetropft"
      },
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Eier"
      },
      {
        "qty": 80,
        "unit": "g",
        "name": "Babyspinat"
      },
      {
        "qty": 0.5,
        "unit": "Stück",
        "name": "rote Zwiebel"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Kapern"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Olivenöl"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Rotweinessig"
      }
    ],
    "steps": [
      "Ofen auf 200 °C Ober-/Unterhitze vorheizen. Kartoffeln waschen und klein würfeln. Mit der Hälfte des Öls mischen und 25–30 Minuten weich backen.",
      "Eier in Wasser 9 Minuten kochen, kalt abschrecken, schälen und vierteln. Spinat waschen. Zwiebel schälen und fein schneiden.",
      "Übriges Öl mit Essig, Kapern, Salz und Pfeffer verrühren. Kartoffeln, Thunfisch, Spinat und Zwiebel mischen. Eier darauflegen."
    ]
  },
  {
    "id": "meal-52904",
    "name": "Rindsschmortopf Bourguignon",
    "time": 200,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Rindfleisch",
    "photo": "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
    "source": "https://www.themealdb.com/meal/52904",
    "originalName": "Beef Bourguignon",
    "desc": "Einfach erklärte Variante von Beef Bourguignon.",
    "ingredients": [
      {
        "qty": 400,
        "unit": "g",
        "name": "Rindsschmorfleisch"
      },
      {
        "qty": 60,
        "unit": "g",
        "name": "Speckwürfel"
      },
      {
        "qty": 200,
        "unit": "g",
        "name": "Champignons"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Schalotten"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 300,
        "unit": "ml",
        "name": "Rotwein"
      },
      {
        "qty": 200,
        "unit": "ml",
        "name": "Rindsbouillon"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Tomatenmark"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Lorbeerblatt"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Thymian"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Öl"
      },
      {
        "qty": 400,
        "unit": "g",
        "name": "Kartoffeln"
      }
    ],
    "steps": [
      "Schalotten und Knoblauch schälen. Pilze putzen, Fleisch würfeln. Ofen auf 150 °C Ober-/Unterhitze vorheizen.",
      "Fleisch in Öl portionsweise kräftig anbraten und herausnehmen. Speck, Schalotten und Pilze 5 Minuten braten. Knoblauch und Tomatenmark kurz mitbraten.",
      "Fleisch, Wein, Bouillon, Lorbeer und Thymian in den ofenfesten Topf geben. Aufkochen und zugedeckt im Ofen etwa 3 Stunden weich schmoren. Gelegentlich Flüssigkeit prüfen.",
      "Kartoffeln schälen und in Salzwasser 20 Minuten weich kochen. Lorbeer entfernen. Sauce abschmecken und mit Kartoffeln servieren."
    ]
  },
  {
    "id": "meal-52920",
    "name": "Poulet Marengo mit Pilzen",
    "time": 55,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Poulet",
    "photo": "https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg",
    "source": "https://www.themealdb.com/meal/52920",
    "originalName": "Chicken Marengo",
    "desc": "Einfach erklärte Variante von Chicken Marengo.",
    "ingredients": [
      {
        "qty": 4,
        "unit": "Stück",
        "name": "Pouletunterschenkel"
      },
      {
        "qty": 200,
        "unit": "g",
        "name": "Champignons"
      },
      {
        "qty": 400,
        "unit": "g",
        "name": "passierte Tomaten"
      },
      {
        "qty": 50,
        "unit": "g",
        "name": "schwarze Oliven"
      },
      {
        "qty": 100,
        "unit": "ml",
        "name": "Pouletbouillon"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Olivenöl"
      },
      {
        "qty": 160,
        "unit": "g",
        "name": "Pasta"
      }
    ],
    "steps": [
      "Pilze putzen und halbieren. Öl im Topf erhitzen. Poulet rundum 5 Minuten anbraten. Pilze zugeben und kurz mitbraten.",
      "Tomaten, Bouillon und Oliven dazugeben. Zugedeckt etwa 40 Minuten sanft schmoren. Gelegentlich umrühren.",
      "Pasta nach Packungsangabe kochen. Poulet an der dicksten Stelle prüfen: mindestens 75 °C, ohne den Knochen zu berühren. Sauce abschmecken und alles servieren."
    ]
  },
  {
    "id": "meal-52934",
    "name": "Baskische Poulet-Reispfanne",
    "time": 75,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Poulet",
    "photo": "https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg",
    "source": "https://www.themealdb.com/meal/52934",
    "originalName": "Chicken Basquaise",
    "desc": "Einfach erklärte Variante von Chicken Basquaise.",
    "ingredients": [
      {
        "qty": 350,
        "unit": "g",
        "name": "Poulet-Oberschenkelfilet"
      },
      {
        "qty": 80,
        "unit": "g",
        "name": "Chorizo"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Basmatireis"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "rote Peperoni"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Zwiebel"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 30,
        "unit": "g",
        "name": "getrocknete Tomaten"
      },
      {
        "qty": 350,
        "unit": "ml",
        "name": "Pouletbouillon"
      },
      {
        "qty": 40,
        "unit": "g",
        "name": "schwarze Oliven"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Paprikapulver"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Olivenöl"
      }
    ],
    "steps": [
      "Ofen auf 180 °C Ober-/Unterhitze vorheizen. Gemüse und Knoblauch putzen und klein schneiden. Chorizo in Scheiben schneiden.",
      "Poulet in Öl rundum anbraten und herausnehmen. Zwiebel und Peperoni 8 Minuten braten. Chorizo, Knoblauch und getrocknete Tomaten zugeben.",
      "Reis und Paprika kurz mitrühren, Bouillon angiessen. Alles in einen ofenfesten Topf geben. Poulet und Oliven darauflegen.",
      "Zugedeckt 45–50 Minuten backen. Reis soll weich und Poulet im Kern mindestens 75 °C heiss sein. Bei Bedarf etwas heisses Wasser nachgiessen."
    ]
  },
  {
    "id": "meal-52945",
    "name": "Kung-Pao-Poulet mit Erdnüssen",
    "time": 45,
    "cuisine": "Asiatisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Poulet",
    "photo": "https://www.themealdb.com/images/media/meals/1525872624.jpg",
    "source": "https://www.themealdb.com/meal/52945",
    "originalName": "Kung Pao Chicken",
    "desc": "Einfach erklärte Variante von Kung Pao Chicken.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Pouletbrust"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Reis"
      },
      {
        "qty": 40,
        "unit": "g",
        "name": "Erdnüsse"
      },
      {
        "qty": 3,
        "unit": "Stück",
        "name": "Frühlingszwiebeln"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Sojasauce"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Reisessig"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Zucker"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Maisstärke"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Sesamöl"
      },
      {
        "qty": 0.5,
        "unit": "TL",
        "name": "Chiliflocken"
      }
    ],
    "steps": [
      "Poulet würfeln. Mit der Hälfte der Sojasauce und Stärke mischen und 20 Minuten im Kühlschrank marinieren. Reis nach Packungsangabe kochen.",
      "Frühlingszwiebeln waschen, Knoblauch schälen und beides klein schneiden. Restliche Sojasauce mit Essig, Zucker und etwas Wasser mischen.",
      "Poulet in Sesamöl 8–10 Minuten vollständig durchbraten. Knoblauch, Frühlingszwiebeln, Erdnüsse und Chili 2 Minuten mitbraten.",
      "Sauce angiessen und kurz einkochen lassen. Mit Reis servieren."
    ]
  },
  {
    "id": "meal-52949",
    "name": "Schweinefleisch süss-sauer",
    "time": 40,
    "cuisine": "Asiatisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Schweinefleisch",
    "photo": "https://www.themealdb.com/images/media/meals/1529442316.jpg",
    "source": "https://www.themealdb.com/meal/52949",
    "originalName": "Sweet and Sour Pork",
    "desc": "Einfach erklärte Variante von Sweet and Sour Pork.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Schweinsfilet"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Reis"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Ei"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Maisstärke"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Sojasauce"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Tomatenmark"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Reisessig"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Zucker"
      },
      {
        "qty": 3,
        "unit": "EL",
        "name": "Öl"
      }
    ],
    "steps": [
      "Fleisch in dünne Streifen schneiden. Ei verquirlen, die Hälfte der Stärke und Sojasauce einrühren. Fleisch darin 15 Minuten im Kühlschrank marinieren.",
      "Reis nach Packungsangabe kochen. Tomatenmark, Essig, Zucker, restliche Stärke und etwas Wasser glatt rühren.",
      "Öl in einer Pfanne erhitzen. Fleisch portionsweise 6–8 Minuten vollständig durchbraten.",
      "Sauce dazugeben und unter Rühren aufkochen, bis sie glänzt und bindet. Bei Bedarf mit Wasser verdünnen. Mit Reis servieren."
    ]
  },
  {
    "id": "meal-52950",
    "name": "Szechuan-Rind mit Gemüse",
    "time": 30,
    "cuisine": "Asiatisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Rindfleisch",
    "photo": "https://www.themealdb.com/images/media/meals/1529443236.jpg",
    "source": "https://www.themealdb.com/meal/52950",
    "originalName": "Szechuan Beef",
    "desc": "Einfach erklärte Variante von Szechuan Beef.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Rindsgeschnetzeltes"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Karotte"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "grüne Peperoni"
      },
      {
        "qty": 1,
        "unit": "Stange",
        "name": "Stangensellerie"
      },
      {
        "qty": 100,
        "unit": "g",
        "name": "Champignons"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 10,
        "unit": "g",
        "name": "Ingwer"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Maisstärke"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Austernsauce"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Chilisauce"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Öl"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Reis"
      }
    ],
    "steps": [
      "Reis nach Packungsangabe kochen. Gemüse waschen, putzen und in dünne Streifen schneiden. Ingwer und Knoblauch schälen und fein schneiden.",
      "Fleisch mit Stärke mischen. Im heissen Öl portionsweise rundum braten, herausnehmen.",
      "Gemüse 5–7 Minuten braten. Ingwer und Knoblauch kurz mitbraten. Austern- und Chilisauce mit etwas Wasser dazugeben.",
      "Fleisch zurückgeben und alles 2–3 Minuten erhitzen. Mit Reis anrichten."
    ]
  },
  {
    "id": "meal-52952",
    "name": "Gebratene Nudeln mit Rind",
    "time": 25,
    "cuisine": "Asiatisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Rindfleisch",
    "photo": "https://www.themealdb.com/images/media/meals/1529444830.jpg",
    "source": "https://www.themealdb.com/meal/52952",
    "originalName": "Beef Lo Mein",
    "desc": "Einfach erklärte Variante von Beef Lo Mein.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Rindsgeschnetzeltes"
      },
      {
        "qty": 180,
        "unit": "g",
        "name": "Eiernudeln"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Karotte"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Peperoni"
      },
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Frühlingszwiebeln"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Sojasauce"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Austernsauce"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Öl"
      }
    ],
    "steps": [
      "Nudeln nach Packungsangabe garen und abgiessen. Gemüse putzen und in feine Streifen schneiden. Knoblauch schälen und hacken.",
      "Fleisch im heissen Öl portionsweise rundum anbraten und herausnehmen.",
      "Gemüse 5 Minuten braten. Knoblauch kurz mitbraten. Nudeln, Fleisch und beide Saucen dazugeben.",
      "Alles 2–3 Minuten unter Wenden kräftig erhitzen. Bei Bedarf etwas Wasser zugeben."
    ]
  },
  {
    "id": "meal-52959",
    "name": "Ofenlachs mit Fenchel und Tomaten",
    "time": 40,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Fisch & Meeresfrüchte",
    "photo": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    "source": "https://www.themealdb.com/meal/52959",
    "originalName": "Baked salmon with fennel & tomatoes",
    "desc": "Einfach erklärte Variante von Baked salmon with fennel & tomatoes.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Lachsfilet"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Fenchelknolle"
      },
      {
        "qty": 200,
        "unit": "g",
        "name": "Cherrytomaten"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Zitronensaft"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Olivenöl"
      },
      {
        "qty": 400,
        "unit": "g",
        "name": "Kartoffeln"
      }
    ],
    "steps": [
      "Ofen auf 200 °C Ober-/Unterhitze vorheizen. Kartoffeln waschen, klein würfeln und mit der Hälfte des Öls auf einem Blech verteilen. 15 Minuten vorbacken.",
      "Fenchel waschen und in dünne Streifen schneiden. Mit Tomaten und restlichem Öl zu den Kartoffeln geben. Weitere 10 Minuten backen.",
      "Lachs auf Gräten prüfen und auf das Gemüse legen. Mit Zitronensaft beträufeln, salzen und pfeffern.",
      "Weitere 12–15 Minuten backen, bis der Fisch innen gar ist und die Kartoffeln weich sind."
    ]
  },
  {
    "id": "meal-52960",
    "name": "Lachs-Avocado-Salat",
    "time": 25,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Fisch & Meeresfrüchte",
    "photo": "https://www.themealdb.com/images/media/meals/1549542994.jpg",
    "source": "https://www.themealdb.com/meal/52960",
    "originalName": "Salmon Avocado Salad",
    "desc": "Einfach erklärte Variante von Salmon Avocado Salad.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Lachsfilet"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Avocado"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Blattsalat"
      },
      {
        "qty": 0.5,
        "unit": "Stück",
        "name": "Gurke"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Zitronensaft"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Olivenöl"
      },
      {
        "qty": 2,
        "unit": "Scheiben",
        "name": "Brot"
      }
    ],
    "steps": [
      "Salat und Gurke waschen und schneiden. Avocado halbieren, entsteinen und würfeln.",
      "Die Hälfte des Öls in einer Pfanne erwärmen. Lachs je Seite 4–5 Minuten vollständig gar braten.",
      "Restliches Öl, Zitrone, Salz und Pfeffer verrühren. Mit Salat, Gurke und Avocado mischen.",
      "Lachs in Stücke teilen und darauflegen. Brot dazu servieren."
    ]
  },
  {
    "id": "meal-52982",
    "name": "Spaghetti Carbonara mit Speck",
    "time": 25,
    "cuisine": "Italienisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Rindfleisch",
    "photo": "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    "source": "https://www.themealdb.com/meal/52982",
    "originalName": "Spaghetti alla Carbonara",
    "desc": "Einfach erklärte Variante von Spaghetti alla Carbonara.",
    "ingredients": [
      {
        "qty": 200,
        "unit": "g",
        "name": "Spaghetti"
      },
      {
        "qty": 100,
        "unit": "g",
        "name": "Pancetta oder Speckwürfel"
      },
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Eier"
      },
      {
        "qty": 50,
        "unit": "g",
        "name": "Parmesan"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      }
    ],
    "steps": [
      "Spaghetti nach Packungsangabe in Salzwasser kochen. Eine Tasse Kochwasser aufheben.",
      "Speck in einer Pfanne ohne zusätzliches Öl 5–7 Minuten knusprig braten. Geschälten, angedrückten Knoblauch kurz mitbraten und wieder entfernen.",
      "Eier und geriebenen Parmesan verquirlen und pfeffern. Pasta zum Speck geben, Pfanne vom Herd nehmen.",
      "Eimischung zügig unterrühren, mit wenig Kochwasser cremig rühren. Nicht kochen lassen. Sofort servieren. Für empfindliche Personen pasteurisierte Eier verwenden."
    ]
  },
  {
    "id": "meal-52994",
    "name": "Schweinskotelett mit Apfel und Ofengemüse",
    "time": 40,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Schweinefleisch",
    "photo": "https://www.themealdb.com/images/media/meals/h3ijwo1581013377.jpg",
    "source": "https://www.themealdb.com/meal/52994",
    "originalName": "Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini",
    "desc": "Einfach erklärte Variante von Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini.",
    "ingredients": [
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Schweinskoteletts ohne Knochen"
      },
      {
        "qty": 400,
        "unit": "g",
        "name": "Süsskartoffeln"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Zucchetti"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Apfel"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 100,
        "unit": "ml",
        "name": "Pouletbouillon"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Zucker"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Butter"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Öl"
      }
    ],
    "steps": [
      "Ofen auf 220 °C Ober-/Unterhitze vorheizen. Süsskartoffeln schälen und klein würfeln. Mit der Hälfte des Öls mischen und 15 Minuten backen.",
      "Zucchetti waschen und schneiden, zum Blech geben und weitere 15 Minuten backen. Apfel entkernen und in Spalten schneiden. Knoblauch schälen und hacken.",
      "Koteletts würzen. In restlichem Öl je Seite etwa 5 Minuten vollständig gar braten und warm stellen.",
      "Butter in derselben Pfanne schmelzen. Apfel und Knoblauch kurz braten. Bouillon und Zucker zugeben und 5 Minuten einkochen. Mit Fleisch und Gemüse servieren."
    ]
  },
  {
    "id": "meal-52995",
    "name": "BBQ-Hackfleisch-Burger",
    "time": 35,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Schweinefleisch",
    "photo": "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
    "source": "https://www.themealdb.com/meal/52995",
    "originalName": "BBQ Pork Sloppy Joes",
    "desc": "Einfach erklärte Variante von BBQ Pork Sloppy Joes.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Schweinshackfleisch"
      },
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Burgerbrötchen"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "rote Zwiebel"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 3,
        "unit": "EL",
        "name": "BBQ-Sauce"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Ketchup"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Limettensaft"
      },
      {
        "qty": 400,
        "unit": "g",
        "name": "Kartoffeln"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Öl"
      }
    ],
    "steps": [
      "Ofen auf 220 °C Ober-/Unterhitze vorheizen. Kartoffeln waschen, in Spalten schneiden und mit der Hälfte des Öls und Salz mischen. 25–30 Minuten backen.",
      "Zwiebel und Knoblauch schälen. Die Hälfte der Zwiebel in dünne Ringe schneiden und mit Limettensaft mischen. Rest fein würfeln.",
      "Gewürfelte Zwiebel und Knoblauch in restlichem Öl dünsten. Hackfleisch zugeben und vollständig krümelig durchbraten.",
      "BBQ-Sauce und Ketchup unterrühren, 3 Minuten erhitzen. Brötchen rösten und mit Fleisch und Zwiebelringen füllen. Kartoffelspalten dazu servieren."
    ]
  },
  {
    "id": "meal-53009",
    "name": "Zitronen-Lammspiesse im Fladenbrot",
    "time": 150,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Lamm",
    "photo": "https://www.themealdb.com/images/media/meals/rjhf741585564676.jpg",
    "source": "https://www.themealdb.com/meal/53009",
    "originalName": "Lamb and Lemon Souvlaki",
    "desc": "Einfach erklärte Variante von Lamb and Lemon Souvlaki.",
    "ingredients": [
      {
        "qty": 350,
        "unit": "g",
        "name": "Lammfleisch aus der Keule"
      },
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Pitabrötchen"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Olivenöl"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Zitronensaft"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Dill"
      },
      {
        "qty": 100,
        "unit": "g",
        "name": "Tzatziki"
      }
    ],
    "steps": [
      "Knoblauch schälen und fein hacken. Mit Öl, Zitronensaft und Dill verrühren. Lamm würfeln und darin zugedeckt 2 Stunden im Kühlschrank marinieren.",
      "Fleisch auf Metallspiesse stecken. Holzspiesse vorher mindestens 30 Minuten wässern.",
      "In einer Grillpfanne bei mittlerer bis hoher Hitze 10–12 Minuten rundum gar braten. Rohe Marinade nicht zum fertigen Fleisch geben.",
      "Pitabrötchen erwärmen und mit Fleisch und Tzatziki füllen. Die Marinierzeit ist in der Gesamtzeit enthalten."
    ]
  },
  {
    "id": "meal-53010",
    "name": "Lammburger mit Tzatziki",
    "time": 30,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Lamm",
    "photo": "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg",
    "source": "https://www.themealdb.com/meal/53010",
    "originalName": "Lamb Tzatziki Burgers",
    "desc": "Einfach erklärte Variante von Lamb Tzatziki Burgers.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Lammhackfleisch"
      },
      {
        "qty": 25,
        "unit": "g",
        "name": "Bulgur"
      },
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Burgerbrötchen"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "griechischer Joghurt"
      },
      {
        "qty": 0.5,
        "unit": "Stück",
        "name": "Gurke"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Kreuzkümmel"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Paprikapulver"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Olivenöl"
      }
    ],
    "steps": [
      "Bulgur nach Packungsangabe garen und gut abtropfen lassen. Gurke waschen, raspeln und ausdrücken. Knoblauch schälen und fein reiben.",
      "Joghurt mit Gurke und der Hälfte des Knoblauchs mischen. Mit Salz abschmecken.",
      "Hackfleisch mit Bulgur, Gewürzen und restlichem Knoblauch mischen. Pro Person einen flachen Burger formen.",
      "In Öl je Seite etwa 5–6 Minuten braten, bis das Hackfleisch vollständig durchgegart ist. Brötchen rösten und mit Burgern und Tzatziki füllen."
    ]
  },
  {
    "id": "meal-53032",
    "name": "Tonkatsu – japanisches Schweinsschnitzel",
    "time": 30,
    "cuisine": "Asiatisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Schweinefleisch",
    "photo": "https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg",
    "source": "https://www.themealdb.com/meal/53032",
    "originalName": "Tonkatsu pork",
    "desc": "Einfach erklärte Variante von Tonkatsu pork.",
    "ingredients": [
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Schweinsschnitzel"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Ei"
      },
      {
        "qty": 40,
        "unit": "g",
        "name": "Mehl"
      },
      {
        "qty": 70,
        "unit": "g",
        "name": "Panko-Paniermehl"
      },
      {
        "qty": 5,
        "unit": "EL",
        "name": "Öl"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Ketchup"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Worcestersauce"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Austernsauce"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Zucker"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Reis"
      }
    ],
    "steps": [
      "Reis nach Packungsangabe kochen. Fleisch zwischen Backpapier auf etwa 1 cm Dicke klopfen und würzen.",
      "Mehl, verquirltes Ei und Panko in drei Teller geben. Fleisch nacheinander darin wenden.",
      "Öl in einer Pfanne bei mittlerer Hitze erhitzen. Schnitzel je Seite etwa 4–5 Minuten goldbraun und vollständig gar braten. Auf Küchenpapier abtropfen lassen.",
      "Ketchup, Worcestersauce, Austernsauce und Zucker verrühren. Schnitzel in Streifen schneiden und mit Sauce und Reis anrichten."
    ]
  },
  {
    "id": "meal-53085",
    "name": "Poulet-Halloumi-Burger",
    "time": 25,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Poulet",
    "photo": "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg",
    "source": "https://www.themealdb.com/meal/53085",
    "originalName": "15-minute chicken & halloumi burgers",
    "desc": "Einfach erklärte Variante von 15-minute chicken & halloumi burgers.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Pouletbrust"
      },
      {
        "qty": 120,
        "unit": "g",
        "name": "Halloumi"
      },
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Burgerbrötchen"
      },
      {
        "qty": 100,
        "unit": "g",
        "name": "Weisskohl"
      },
      {
        "qty": 4,
        "unit": "Blätter",
        "name": "Blattsalat"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Mayonnaise"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Zitronensaft"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Chilisauce"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Öl"
      }
    ],
    "steps": [
      "Kohl und Salat waschen. Kohl fein schneiden, mit Mayonnaise und der Hälfte des Zitronensafts mischen.",
      "Poulet auf etwa 1 cm flach klopfen. In Öl bei mittlerer Hitze je Seite 5–6 Minuten braten, bis im Kern 75 °C erreicht sind. Mit Chilisauce und restlicher Zitrone wenden.",
      "Halloumi in Scheiben schneiden und in einer zweiten Pfanne je Seite 2 Minuten goldbraun braten. Brötchen kurz rösten.",
      "Brötchen mit Salat, Poulet, Halloumi und Kohlsalat füllen."
    ]
  },
  {
    "id": "meal-53099",
    "name": "Rindsburger mit Randen",
    "time": 25,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Rindfleisch",
    "photo": "https://www.themealdb.com/images/media/meals/44bzep1761848278.jpg",
    "source": "https://www.themealdb.com/meal/53099",
    "originalName": "Aussie Burgers",
    "desc": "Einfach erklärte Variante von Aussie Burgers.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Rindshackfleisch"
      },
      {
        "qty": 2,
        "unit": "Stück",
        "name": "kleine Naanbrote"
      },
      {
        "qty": 100,
        "unit": "g",
        "name": "gekochte Randen"
      },
      {
        "qty": 40,
        "unit": "g",
        "name": "Rucola"
      },
      {
        "qty": 80,
        "unit": "g",
        "name": "Sauerrahm-Kräuterdip"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Öl"
      }
    ],
    "steps": [
      "Rucola waschen und trocken schütteln. Gekochte Randen in dünne Scheiben schneiden.",
      "Hackfleisch mit Salz und Pfeffer mischen und pro Person einen flachen Burger formen.",
      "Öl in einer Pfanne erhitzen. Burger je Seite etwa 5 Minuten braten, bis das Hackfleisch innen vollständig durchgegart ist.",
      "Naanbrote kurz rösten, aufschneiden und mit Rucola, Burger, Randen und Kräuterdip füllen."
    ]
  },
  {
    "id": "meal-53110",
    "name": "Honig-Senf-Pouletschenkel",
    "time": 80,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Poulet",
    "photo": "https://www.themealdb.com/images/media/meals/cj56fs1762340001.jpg",
    "source": "https://www.themealdb.com/meal/53110",
    "originalName": "Sticky Chicken",
    "desc": "Einfach erklärte Variante von Sticky Chicken.",
    "ingredients": [
      {
        "qty": 4,
        "unit": "Stück",
        "name": "Pouletunterschenkel"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Sojasauce"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Honig"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Olivenöl"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Tomatenmark"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Dijonsenf"
      },
      {
        "qty": 400,
        "unit": "g",
        "name": "Kartoffeln"
      }
    ],
    "steps": [
      "Sojasauce, Honig, Öl, Tomatenmark und Senf verrühren. Poulet damit bestreichen und 30 Minuten abgedeckt im Kühlschrank marinieren.",
      "Ofen auf 200 °C Ober-/Unterhitze vorheizen. Kartoffeln waschen, klein würfeln und in eine Auflaufform geben. Poulet darauflegen.",
      "40–45 Minuten backen und die Schenkel einmal wenden. Falls die Oberfläche zu dunkel wird, locker abdecken.",
      "Poulet an der dicksten Stelle ohne Knochenkontakt prüfen: mindestens 75 °C. Kartoffeln müssen weich sein. Die Marinierzeit ist enthalten."
    ]
  },
  {
    "id": "meal-53143",
    "name": "Spanisches Poulet mit Chorizo und Bohnen",
    "time": 65,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Poulet",
    "photo": "https://www.themealdb.com/images/media/meals/kzxflc1763194887.jpg",
    "source": "https://www.themealdb.com/meal/53143",
    "originalName": "Easy Spanish chicken",
    "desc": "Einfach erklärte Variante von Easy Spanish chicken.",
    "ingredients": [
      {
        "qty": 4,
        "unit": "Stück",
        "name": "Pouletunterschenkel"
      },
      {
        "qty": 75,
        "unit": "g",
        "name": "Chorizo"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Zwiebel"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Peperoni"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 400,
        "unit": "g",
        "name": "gehackte Tomaten"
      },
      {
        "qty": 200,
        "unit": "g",
        "name": "weisse Bohnen, abgetropft"
      },
      {
        "qty": 50,
        "unit": "g",
        "name": "grüne Oliven"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "geräuchertes Paprikapulver"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Olivenöl"
      }
    ],
    "steps": [
      "Ofen auf 200 °C Ober-/Unterhitze vorheizen. Zwiebel und Knoblauch schälen und hacken. Peperoni waschen, entkernen und würfeln. Chorizo schneiden.",
      "Zwiebel, Peperoni und Chorizo in Öl 10 Minuten braten. Knoblauch und Paprika kurz mitrühren.",
      "Tomaten, abgespülte Bohnen und Oliven dazugeben. In eine ofenfeste Form geben. Poulet darauflegen und würzen.",
      "Etwa 40–45 Minuten backen, bis das Poulet im Kern mindestens 75 °C erreicht."
    ]
  },
  {
    "id": "meal-53197",
    "name": "Schweinefleisch-Erdnuss-Curry",
    "time": 35,
    "cuisine": "Asiatisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Schweinefleisch",
    "photo": "https://www.themealdb.com/images/media/meals/snmtd61763426568.jpg",
    "source": "https://www.themealdb.com/meal/53197",
    "originalName": "Thai pork & peanut curry",
    "desc": "Einfach erklärte Variante von Thai pork & peanut curry.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Schweinsfilet"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Jasminreis"
      },
      {
        "qty": 200,
        "unit": "ml",
        "name": "Kokosmilch"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Erdnussbutter"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "rote Thai-Currypaste"
      },
      {
        "qty": 100,
        "unit": "g",
        "name": "Babymais"
      },
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Frühlingszwiebeln"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Sojasauce"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Zucker"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Limettensaft"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Öl"
      }
    ],
    "steps": [
      "Reis nach Packungsangabe kochen. Frühlingszwiebeln waschen und schneiden. Schweinsfilet in dünne Scheiben schneiden.",
      "Zwiebeln und Fleisch in Öl 5 Minuten braten. Currypaste und Erdnussbutter kurz einrühren.",
      "Kokosmilch, etwas Wasser, Sojasauce und Zucker zugeben. 15 Minuten sanft köcheln lassen.",
      "Babymais dazugeben und 3–5 Minuten weitergaren. Fleisch muss vollständig gar sein. Mit Limettensaft abschmecken und zu Reis servieren."
    ]
  },
  {
    "id": "meal-53199",
    "name": "Thai-Rind mit Basilikum",
    "time": 20,
    "cuisine": "Asiatisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Rindfleisch",
    "photo": "https://www.themealdb.com/images/media/meals/kyuxew1763479470.jpg",
    "source": "https://www.themealdb.com/meal/53199",
    "originalName": "Thai beef stir-fry",
    "desc": "Einfach erklärte Variante von Thai beef stir-fry.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Rindsgeschnetzeltes"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Reis"
      },
      {
        "qty": 0.5,
        "unit": "Stück",
        "name": "rote Chilischote"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Austernsauce"
      },
      {
        "qty": 10,
        "unit": "g",
        "name": "Basilikum"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Öl"
      }
    ],
    "steps": [
      "Reis nach Packungsangabe kochen. Chili waschen, nach Wunsch entkernen und klein schneiden. Basilikum waschen.",
      "Öl in einer grossen Pfanne erhitzen. Fleisch portionsweise mit Chili 3–5 Minuten kräftig braten.",
      "Austernsauce und etwas Wasser zugeben und 1 Minute erhitzen. Basilikum kurz unterheben. Mit Reis servieren."
    ]
  },
  {
    "id": "meal-53367",
    "name": "Gebratener Reis mit Poulet und Ei",
    "time": 30,
    "cuisine": "Asiatisch",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Poulet",
    "photo": "https://www.themealdb.com/images/media/meals/wuyd2h1765655837.jpg",
    "source": "https://www.themealdb.com/meal/53367",
    "originalName": "Chicken Fried Rice",
    "desc": "Einfach erklärte Variante von Chicken Fried Rice.",
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "Pouletbrust"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Reis"
      },
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Eier"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Karotte"
      },
      {
        "qty": 80,
        "unit": "g",
        "name": "Erbsen"
      },
      {
        "qty": 2,
        "unit": "Stück",
        "name": "Frühlingszwiebeln"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 10,
        "unit": "g",
        "name": "Ingwer"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Sojasauce"
      },
      {
        "qty": 2,
        "unit": "EL",
        "name": "Öl"
      }
    ],
    "steps": [
      "Reis nach Packungsangabe kochen und auf einem grossen Teller kurz ausdampfen lassen. Gemüse putzen und klein schneiden. Ingwer und Knoblauch schälen und hacken.",
      "Eier verquirlen. In einem Viertel des Öls als Rührei vollständig stocken lassen und herausnehmen.",
      "Poulet klein würfeln. In der Hälfte des Öls 8–10 Minuten vollständig gar braten und herausnehmen.",
      "Im restlichen Öl Karotte, Erbsen, Zwiebeln, Knoblauch und Ingwer 4 Minuten braten. Reis, Ei, Poulet und Sojasauce dazugeben und unter Rühren dampfend heiss erhitzen. Sofort servieren."
    ]
  },
  {
    "id": "meal-53530",
    "name": "Poulet in cremiger Senfsauce",
    "time": 65,
    "cuisine": "Alltagsküche",
    "meals": [
      "Mittagessen",
      "Abendessen"
    ],
    "baseServings": 2,
    "category": "Poulet",
    "photo": "https://www.themealdb.com/images/media/meals/4htbtm1783803558.jpg",
    "source": "https://www.themealdb.com/meal/53530",
    "originalName": "Creamy Mustard Chicken",
    "desc": "Einfach erklärte Variante von Creamy Mustard Chicken.",
    "ingredients": [
      {
        "qty": 4,
        "unit": "Stück",
        "name": "Pouletunterschenkel"
      },
      {
        "qty": 1,
        "unit": "Stück",
        "name": "Zwiebel"
      },
      {
        "qty": 1,
        "unit": "Zehe",
        "name": "Knoblauch"
      },
      {
        "qty": 200,
        "unit": "ml",
        "name": "Pouletbouillon"
      },
      {
        "qty": 100,
        "unit": "ml",
        "name": "Rahm"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Senf"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Honig"
      },
      {
        "qty": 1,
        "unit": "TL",
        "name": "Paprikapulver"
      },
      {
        "qty": 1,
        "unit": "EL",
        "name": "Olivenöl"
      },
      {
        "qty": 150,
        "unit": "g",
        "name": "Reis"
      }
    ],
    "steps": [
      "Poulet mit Paprika, Salz und Pfeffer würzen. In Öl rundum etwa 8 Minuten anbraten und herausnehmen.",
      "Zwiebel und Knoblauch schälen, fein schneiden und in derselben Pfanne 3 Minuten dünsten.",
      "Bouillon, Rahm, Senf und Honig einrühren. Poulet zurückgeben und zugedeckt 40–45 Minuten sanft schmoren.",
      "Reis nach Packungsangabe kochen. Poulet muss im Kern ohne Knochenkontakt mindestens 75 °C erreichen. Sauce abschmecken und dazu servieren."
    ]
  }
];
