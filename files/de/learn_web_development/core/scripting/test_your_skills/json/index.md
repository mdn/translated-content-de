---
title: "Testen Sie Ihre Fähigkeiten: JSON"
short-title: "Test: JSON"
slug: Learn_web_development/Core/Scripting/Test_your_skills/JSON
l10n:
  sourceCommit: c2f988ec9ef7b7f50ee013ebe77a8aec3777a3aa
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Scripting/House_data_UI", "Learn_web_development/Core/Scripting")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, einzuschätzen, ob Sie unseren Artikel [Arbeiten mit JSON](/de/docs/Learn_web_development/Core/Scripting/JSON) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt mit uns aufnehmen.

## JSON 1

Die einzige Aufgabe in diesem Artikel betrifft den Zugriff auf JSON-Daten und deren Nutzung auf Ihrer Seite. JSON-Daten über einige Mutterkatzen und ihre Kätzchen sind in [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) verfügbar. Das JSON wird als Textzeichenfolge in die Seite geladen und im `catString`-Parameter der `displayCatInfo()`-Funktion verfügbar gemacht.

Um die Aufgabe zu vervollständigen, füllen Sie die fehlenden Teile der `displayCatInfo()`-Funktion aus, um zu speichern:

- Die Namen der drei Mutterkatzen, durch Kommas getrennt, in der Variablen `motherInfo`.
- Die Gesamtzahl der Kätzchen, sowie wie viele männlich und weiblich sind, in der Variablen `kittenInfo`.

Die Werte dieser Variablen werden dann innerhalb von Absätzen auf dem Bildschirm angezeigt.

Einige Hinweise/Fragen:

- Die JSON-Daten werden als Text innerhalb der `displayCatInfo()`-Funktion bereitgestellt. Sie müssen sie in JSON parsen, bevor Sie Daten daraus extrahieren können.
- Wahrscheinlich möchten Sie eine äußere Schleife verwenden, um durch die Katzen zu iterieren und ihre Namen zur `motherInfo`-Variablen hinzu zu fügen, und eine innere Schleife, um durch alle Kätzchen zu iterieren, die Gesamtzahl der männlichen/weiblichen Kätzchen zu summieren und diese Details zur `kittenInfo`-Variablen hinzuzufügen.
- Der letzte Mutterkatzenname sollte ein "und" davor haben und einen Punkt danach. Wie stellen Sie sicher, dass dies funktioniert, egal wie viele Katzen im JSON sind?
- Warum befinden sich die Zeilen `para1.textContent = motherInfo;` und `para2.textContent = kittenInfo;` innerhalb der `displayCatInfo()`-Funktion und nicht am Ende des Skripts? Dies hat mit asynchronem Code zu tun.

```html hidden live-sample___json-1
<p class="one"></p>
<p class="two"></p>
```

```css hidden live-sample___json-1
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

```js live-sample___json-1
const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

// Don't edit the code above here!

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here

  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
```

{{ EmbedLiveSample("json-1", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
// ...
// Don't edit the code above here!

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  const cats = JSON.parse(catString);

  for (let i = 0; i < cats.length; i++) {
    for (const kitten of cats[i].kittens) {
      total++;
      if (kitten.gender === "m") {
        male++;
      }
    }

    if (i < cats.length - 1) {
      motherInfo += `${cats[i].name}, `;
    } else {
      motherInfo += `and ${cats[i].name}.`;
    }
  }

  kittenInfo = `There are ${total} kittens in total, ${male} males and ${
    total - male
  } females.`;

  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Scripting/House_data_UI", "Learn_web_development/Core/Scripting")}}
