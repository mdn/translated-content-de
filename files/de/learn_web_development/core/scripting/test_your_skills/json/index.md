---
title: "Testen Sie Ihre Fähigkeiten: JSON"
short-title: "Test: JSON"
slug: Learn_web_development/Core/Scripting/Test_your_skills/JSON
l10n:
  sourceCommit: b36d59a0df933597c7d3b55e363f7a59e30d3ba3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Scripting/House_data_UI", "Learn_web_development/Core/Scripting")}}

Das Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unseren Artikel [Arbeiten mit JSON](/de/docs/Learn_web_development/Core/Scripting/JSON) verstanden haben.

> [!NOTE]
> Um Unterstützung zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Benutzerleitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## JSON 1

Die einzige Aufgabe in diesem Artikel betrifft den Zugriff auf JSON-Daten und deren Verwendung auf Ihrer Seite. JSON-Daten über einige Katzenmütter und ihre Kätzchen sind in [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) verfügbar. Das JSON wird als Textzeichenfolge in die Seite geladen und im `catString` Parameter der `displayCatInfo()` Funktion verfügbar gemacht.

Um die Aufgabe abzuschließen, füllen Sie die fehlenden Teile der `displayCatInfo()` Funktion aus, um Folgendes zu speichern:

- Die Namen der drei Katzenmütter, durch Kommas getrennt, in der Variablen `motherInfo`.
- Die Gesamtzahl der Kätzchen und wie viele davon männlich und weiblich sind, in der Variablen `kittenInfo`.

Die Werte dieser Variablen werden dann innerhalb von Absätzen auf dem Bildschirm ausgegeben.

Einige Hinweise/Fragen:

- Die JSON-Daten werden als Text innerhalb der `displayCatInfo()` Funktion bereitgestellt. Sie müssen sie in JSON parsen, bevor Sie irgendwelche Daten daraus extrahieren können.
- Sie werden wahrscheinlich eine äußere Schleife verwenden wollen, um durch die Katzen zu schleifen und ihre Namen der Zeichenfolgenvariable `motherInfo` hinzuzufügen, und eine innere Schleife, um durch alle Kätzchen zu schleifen, die Gesamtzahl aller/männlichen/weiblichen Kätzchen zu addieren und diese Details der Zeichenfolgenvariable `kittenInfo` hinzuzufügen.
- Der letzte Katzenmütter-Name sollte ein "und" davor haben und ein Punkt danach. Wie stellen Sie sicher, dass dies funktioniert, egal wie viele Katzen im JSON sind?
- Warum befinden sich die Zeilen `para1.textContent = motherInfo;` und `para2.textContent = kittenInfo;` innerhalb der `displayCatInfo()` Funktion und nicht am Ende des Skripts? Dies hat etwas mit asynchronem Code zu tun.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{ EmbedLiveSample("json-1", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html hidden live-sample___json-1 live-sample___json-1-finish
<p class="one"></p>
<p class="two"></p>
```

```css hidden live-sample___json-1 live-sample___json-1-finish
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

Die aktualisierte Ausgabe sollte wie folgt aussehen:

{{ EmbedLiveSample("json-1-finish", "100%", 80) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

```js hidden live-sample___json-1-finish
const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

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

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Scripting/House_data_UI", "Learn_web_development/Core/Scripting")}}
