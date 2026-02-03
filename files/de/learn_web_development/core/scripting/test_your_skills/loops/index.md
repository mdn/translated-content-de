---
title: "Testen Sie Ihre Fähigkeiten: Schleifen"
short-title: "Test: Schleifen"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Loops
l10n:
  sourceCommit: b36d59a0df933597c7d3b55e363f7a59e30d3ba3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unseren Artikel über das [Schleifen von Code](/de/docs/Learn_web_development/Core/Scripting/Loops) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu vervollständigen — wie zum Beispiel das Erstellen neuer HTML-Elemente, das Setzen ihres Textinhalts auf bestimmte Zeichenfolgen und das Einfügen in bestehende Elemente auf der Seite — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie haben einige Beispiele gesehen, in denen dies verwendet wird, und wir möchten, dass Sie etwas Nachforschung darüber betreiben, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Schleifen 1

In unserer ersten Schleifenaufgabe möchten wir, dass Sie eine grundlegende Schleife schreiben, die alle Elemente im bereitgestellten `myArray` durchläuft und sie innerhalb von Listenelementen ([`<li>`](/de/docs/Web/HTML/Reference/Elements/li)-Elementen) auf dem Bildschirm ausgibt. Sie sollten der bereitgestellten `list` hinzugefügt werden.

<!-- Code shared across examples -->

```html hidden live-sample___loops-1 live-sample___loops-2 live-sample___loops-3 live-sample___loops-1-finish live-sample___loops-2-finish live-sample___loops-3-finish
<section></section>
```

```css hidden live-sample___loops-1 live-sample___loops-2 live-sample___loops-3 live-sample___loops-1-finish live-sample___loops-2-finish live-sample___loops-3-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

Der Ausgangspunkt der Aufgabe sieht so aus (noch nichts wird angezeigt):

{{ EmbedLiveSample("loops-1", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```js live-sample___loops-1
const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");
const section = document.querySelector("section");
section.appendChild(list);

// Don't edit the code above here!

// Add your code here
```

Die aktualisierte Ausgabe sollte so aussehen:

{{ EmbedLiveSample("loops-1-finish", "100%", 150) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

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

```js hidden live-sample___loops-1-finish
const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");
const section = document.querySelector("section");
section.appendChild(list);

for (let item of myArray) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
}
```

</details>

## Schleifen 2

In dieser nächsten Aufgabe möchten wir, dass Sie ein einfaches Programm schreiben, das, basierend auf einem Namen, ein Array von {{Glossary("Object", "Objekten")}} mit Namen und Telefonnummern durchsucht und, wenn es den Namen findet, den Namen und die Telefonnummer in einem Absatz ausgibt.

Ihnen werden drei Variablen zur Verfügung gestellt:

- `name`: Enthält einen Namen, nach dem gesucht werden soll.
- `para`: Enthält eine Referenz zu einem Absatz, der verwendet wird, um die Ergebnisse zu berichten.
- `phonebook`: Enthält die Telefonbucheinträge, die durchsucht werden sollen.

> [!NOTE]
> Wenn Sie noch nicht über Objekte gelesen haben, keine Sorge! Für den Moment müssen Sie nur wissen, wie man ein Mitglied-Werte-Paar zugreift. Weitere Informationen zu Objekten finden Sie im Tutorial [JavaScript-Objekt Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics).

Um die Aufgabe abzuschließen:

1. Schreiben Sie eine Schleife, die das (`phonebook`) Array durchläuft und nach dem bereitgestellten `name` sucht. Sie sollten eine Art von Schleife verwenden, die Sie in der vorherigen Aufgabe nicht verwendet haben.
2. Wenn der `name` gefunden wird, schreiben Sie ihn und die zugehörige `number` in den `textContent` des bereitgestellten Absatzes (`para`), in der Form „&lt;name>'s number is &lt;number>“. Beenden Sie danach die Schleife, bevor sie ihren Lauf abgeschlossen hat.
3. Wenn keines der Objekte den `name` enthält, drucken Sie "Name not found in the phonebook" in den `textContent` des bereitgestellten Absatzes.

Der Ausgangspunkt der Aufgabe sieht so aus (noch nichts wird angezeigt):

{{ EmbedLiveSample("loops-2", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Ausgabe sollte so aussehen:

{{ EmbedLiveSample("loops-2-finish", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

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

```js hidden live-sample___loops-2-finish
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

In dieser letzten Aufgabe testen Sie jede Zahl von `500` bis `2`, um zu sehen, welche Primzahlen sind, indem Sie die bereitgestellte Testfunktion verwenden und die Primzahlen ausgeben.

Ihnen werden folgende Dinge zur Verfügung gestellt:

- `i`: Beginnt mit einem Wert von `500`; gedacht als Iterator.
- `para`: Enthält eine Referenz zu einem Absatz, der verwendet wird, um die Ergebnisse zu berichten.
- `isPrime()`: Eine Funktion, die, wenn eine Zahl übergeben wird, `true` zurückgibt, wenn es sich um eine Primzahl handelt, und `false`, wenn nicht.

Um die Aufgabe abzuschließen:

1. Schreiben Sie eine Schleife, die jede Zahl von `500` bis `2` durchläuft (1 zählt nicht als Primzahl), und die bereitgestellte `isPrime()` Funktion auf jede ausführt.
2. Für jede Zahl, die keine Primzahl ist, fahren Sie mit der nächsten Schleifeniteration fort. Für jede, die eine Primzahl _ist_, fügen Sie sie dem `textContent` des Absatzes zusammen mit einer Art von Trennzeichen hinzu.

Sie sollten eine Art von Schleife verwenden, die Sie in den vorherigen zwei Aufgaben noch nicht verwendet haben.

Der Ausgangspunkt der Aufgabe sieht so aus (noch nichts wird angezeigt):

{{ EmbedLiveSample("loops-3", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Ausgabe sollte so aussehen:

{{ EmbedLiveSample("loops-3-finish", "100%", 120) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

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

```js hidden live-sample___loops-3-finish
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

do {
  if (isPrime(i)) {
    para.textContent += `${i}, `;
  }
  i--;
} while (i > 1);

section.appendChild(para);
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
