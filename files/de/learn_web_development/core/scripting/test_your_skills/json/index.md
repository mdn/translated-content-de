---
title: "Testen Sie Ihre Fähigkeiten: JSON"
short-title: JSON
slug: Learn_web_development/Core/Scripting/Test_your_skills/JSON
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen einzuschätzen, ob Sie unseren [Working with JSON](/de/docs/Learn_web_development/Core/Scripting/JSON)-Artikel verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills)-Nutzungsleitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## JSON 1

Die einzige Aufgabe in diesem Artikel betrifft den Zugriff auf JSON-Daten und deren Nutzung auf Ihrer Seite. JSON-Daten über einige Mutterkatzen und ihre Kätzchen sind in [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) verfügbar. Das JSON wird als Textzeichenfolge in die Seite geladen und im `catString`-Parameter der Funktion `displayCatInfo()` verfügbar gemacht.

Um die Aufgabe zu vervollständigen, füllen Sie die fehlenden Teile der Funktion `displayCatInfo()` aus, um zu speichern:

- Die Namen der drei Mutterkatzen, getrennt durch Kommas, in der Variable `motherInfo`.
- Die Gesamtanzahl der Kätzchen und wie viele davon männlich und weiblich sind, in der Variable `kittenInfo`.

Die Werte dieser Variablen werden dann innerhalb von Absätzen auf dem Bildschirm ausgegeben.

Einige Hinweise/Fragen:

- Die JSON-Daten werden als Text innerhalb der Funktion `displayCatInfo()` bereitgestellt. Sie müssen sie in JSON parsen, bevor Sie irgendwelche Daten daraus extrahieren können.
- Sie werden wahrscheinlich eine äußere Schleife verwenden wollen, um durch die Katzen zu schleifen und ihre Namen dem `motherInfo`-Variablen-String hinzuzufügen, und eine innere Schleife, um durch alle Kätzchen zu schleifen, die Gesamtzahl der Kätzchen/männlich/weiblich zu summieren und diese Details dem `kittenInfo`-Variablen-String hinzuzufügen.
- Der letzte Mutterkatzenname sollte ein "und" davor haben und einen Punkt danach. Wie stellen Sie sicher, dass dies funktioniert, egal wie viele Katzen im JSON sind?
- Warum stehen die Zeilen `para1.textContent = motherInfo;` und `para2.textContent = kittenInfo;` innerhalb der Funktion `displayCatInfo()` und nicht am Ende des Skripts? Das hat etwas mit asynchronem Code zu tun.

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

</details>
