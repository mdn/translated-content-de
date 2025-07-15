---
title: "Testen Sie Ihre Fähigkeiten: Schleifen"
short-title: Loops
slug: Learn_web_development/Core/Scripting/Test_your_skills/Loops
l10n:
  sourceCommit: 449a2acf7d57948a55e4c8381d52da4360743402
---

Das Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie unseren [Looping Code](/de/docs/Learn_web_development/Core/Scripting/Loops) Artikel verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern von Ihnen, etwas {{Glossary("DOM", "DOM")}} Manipulationscode zu schreiben, um sie zu vervollständigen — wie z.B. neue HTML-Elemente zu erstellen, deren Textinhalte auf bestimmte Zeichenfolgenwerte zu setzen und sie in bestehende Elemente auf der Seite zu verschachteln — alles via JavaScript.

Wir haben dies noch nicht explizit in diesem Kurs gelehrt, aber Sie werden einige Beispiele gesehen haben, die dies verwenden, und wir möchten, dass Sie etwas Recherche darüber betreiben, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [DOM Scripting Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Schleifen 1

In unserer ersten Schleifen-Aufgabe möchten wir, dass Sie eine grundlegende Schleife erstellen.

Um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die durch alle Elemente im bereitgestellten `myArray` iteriert und sie auf dem Bildschirm innerhalb von Listenelementen ([`<li>`](/de/docs/Web/HTML/Reference/Elements/li)) ausgibt. Sie sollten an die bereitgestellte `list` angehängt werden.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

<!-- Code shared across examples -->

```html hidden live-sample___loops-1 live-sample___loops-2 live-sample___loops-3
<section></section>
```

```css hidden live-sample___loops-1 live-sample___loops-2 live-sample___loops-3
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___loops-1
const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");
const section = document.querySelector("section");
section.appendChild(list);

// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("loops-1", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges JavaScript sollte etwa so aussehen:

```js
// ...
// Don't edit the code above here!

for (let item of myArray) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
}
```

</details>

## Schleifen 2

In dieser nächsten Aufgabe möchten wir, dass Sie ein einfaches Programm schreiben, das, gegeben ein Name, in einem Array von {{Glossary("Object", "Objekten")}} mit Namen und Telefonnummern sucht und, wenn es den Namen findet, den Namen und die Telefonnummer in einem Absatz ausgibt.

Es werden Ihnen drei Variablen zur Verfügung gestellt:

- `name`: Enthält einen Namen, nach dem gesucht werden soll.
- `para`: Enthält einen Verweis auf einen Absatz, der verwendet wird, um die Ergebnisse zu berichten.
- `phonebook`: Enthält die Telefonbucheinträge, die durchsucht werden sollen.

> [!NOTE]
> Wenn Sie noch nichts über Objekte gelesen haben, machen Sie sich keine Sorgen! Für jetzt müssen Sie nur wissen, wie man auf ein Member-Wert-Paar zugreift. Sie können über Objekte im [JavaScript Objekt Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) Tutorial nachlesen.

Um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die durch das (`phonebook`) Array iteriert und nach dem bereitgestellten `name` sucht. Sie sollten eine Art von Schleife verwenden, die Sie in der vorherigen Aufgabe noch nicht verwendet haben.
3. Wenn der `name` gefunden wird, schreiben Sie ihn und die zugehörige `nummer` in das `textContent` des bereitgestellten Absatzes (`para`), in der Form "\<name>'s number is \<number>." Anschließend beenden Sie die Schleife, bevor sie ihren Lauf abgeschlossen hat.
4. Wenn keines der Objekte den `name` enthält, drucken Sie "Name not found in the phonebook" in das `textContent` des bereitgestellten Absatzes.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

```js live-sample___loops-2
const name = "Mustafa";
const para = document.createElement("p");

const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];

const section = document.querySelector("section");
section.appendChild(para);

// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("loops-2", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges JavaScript sollte etwa so aussehen:

```js
// ...
// Don't edit the code above here!

for (let i = 0; i < phonebook.length; i++) {
  if (phonebook[i].name === name) {
    para.textContent = `${phonebook[i].name}'s number is ${phonebook[i].number}.`;
    break;
  }

  if (i === phonebook.length - 1) {
    para.textContent = "Name not found in the phonebook";
  }
}
```

</details>

## Schleifen 3

In dieser letzten Aufgabe werden Sie jede Zahl von `500` bis `2` testen, um zu sehen, welche Primzahlen sind, indem Sie die bereitgestellte Testfunktion verwenden und die Primzahlen ausdrucken.

Ihnen wird Folgendes bereitgestellt:

- `i`: Beginnt mit einem Wert von `500`; vorgesehen, um als Iterator verwendet zu werden.
- `para`: Enthält einen Verweis auf einen Absatz, der verwendet wird, um die Ergebnisse zu berichten.
- `isPrime()`: Eine Funktion, die bei Übergabe einer Zahl `true` zurückgibt, wenn die Zahl eine Primzahl ist, und `false`, wenn nicht.

Um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten. Sie sollten eine Art von Schleife verwenden, die Sie in den vorherigen beiden Aufgaben noch nicht verwendet haben.
2. Schreiben Sie eine Schleife, die durch jede Zahl von `500` bis `2` (1 wird nicht als Primzahl gezählt) iteriert und die bereitgestellte `isPrime()` Funktion auf jede anwendet.
3. Für jede Zahl, die keine Primzahl ist, fahren Sie mit der nächsten Schleifeniteration fort. Für jede, die eine Primzahl _ist_, fügen Sie sie dem `textContent` des Absatzes zusammen mit einer Art Separator hinzu.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

```js live-sample___loops-3
let i = 500;
const para = document.createElement("p");
const section = document.querySelector("section");
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

section.appendChild(para);
```

{{ EmbedLiveSample("loops-3", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges JavaScript sollte etwa so aussehen:

```js
// ...
// Don't edit the code above here!

do {
  if (isPrime(i)) {
    para.textContent += `${i}, `;
  }
  i--;
} while (i > 1);

// Don't edit the code below here!
// ...
```

</details>
