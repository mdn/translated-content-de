---
title: "Testen Sie Ihre Fähigkeiten: JSON"
short-title: JSON
slug: Learn_web_development/Core/Scripting/Test_your_skills/JSON
l10n:
  sourceCommit: 449a2acf7d57948a55e4c8381d52da4360743402
---

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unseren Artikel [Arbeiten mit JSON](/de/docs/Learn_web_development/Core/Scripting/JSON) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Bei einem Fehler wird er im Ergebnispanel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## JSON 1

Die einzige Aufgabe in diesem Artikel besteht darin, auf JSON-Daten zuzugreifen und diese in Ihrer Seite zu verwenden. JSON-Daten über einige Katzenmütter und ihre Kätzchen stehen in [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) zur Verfügung. Das JSON wird als Textzeichenkette in die Seite geladen und im Parameter `catString` der Funktion `displayCatInfo()` bereitgestellt.

Um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Füllen Sie die fehlenden Teile der `displayCatInfo()`-Funktion aus, um zu speichern:
   - Die Namen der drei Katzenmütter, getrennt durch Kommas, in der Variablen `motherInfo`.
   - Die Gesamtzahl der Kätzchen sowie deren Anzahl an männlichen und weiblichen Kätzchen in der Variablen `kittenInfo`.

Die Werte dieser Variablen werden dann innerhalb von Absätzen auf dem Bildschirm angezeigt.

Einige Hinweise/Fragen:

- Die JSON-Daten werden innerhalb der Funktion `displayCatInfo()` als Text bereitgestellt. Sie müssen sie in JSON parsen, bevor Sie Daten daraus extrahieren können.
- Sie werden wahrscheinlich eine äußere Schleife verwenden wollen, um durch die Katzen zu schleifen und deren Namen zur Variablenzeichenkette `motherInfo` hinzuzufügen, und eine innere Schleife, um alle Kätzchen durchzugehen, die Gesamtzahl aller/männlichen/weiblichen Kätzchen zu addieren und diese Details zur Variablenzeichenkette `kittenInfo` hinzuzufügen.
- Der letzte Katzenmuttername sollte ein "und" davor haben und einen Punkt danach. Wie stellen Sie sicher, dass dies funktioniert, egal wie viele Katzen im JSON sind?
- Warum sind die Zeilen `para1.textContent = motherInfo;` und `para2.textContent = kittenInfo;` innerhalb der Funktion `displayCatInfo()` und nicht am Ende des Skripts? Dies hat etwas mit asynchronem Code zu tun.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/json1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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
