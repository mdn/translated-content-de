---
title: "Testen Sie Ihre Fähigkeiten: Schleifen"
short-title: Loops
slug: Learn_web_development/Core/Scripting/Test_your_skills/Loops
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unseren Artikel [Code-Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## DOM-Manipulation: als nützlich erachtet

Einige der untenstehenden Fragen erfordern von Ihnen, dass Sie ein wenig {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu vervollständigen — wie zum Beispiel das Erstellen neuer HTML-Elemente, das Setzen ihrer Textinhalte auf bestimmte Zeichenfolgenwerte und das Einfügen dieser in vorhandene Elemente auf der Seite — alles über JavaScript.

Wir haben dies bisher im Kurs nicht ausdrücklich gelehrt, aber Sie werden einige Beispiele gesehen haben, die es verwenden, und wir möchten, dass Sie einige Nachforschungen anstellen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [Einstieg in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Schleifen 1

In unserer ersten Schleifenaufgabe möchten wir, dass Sie eine grundlegende Schleife schreiben, die durch alle Elemente im bereitgestellten `myArray` iteriert und diese auf dem Bildschirm innerhalb von Listenelementen ([`<li>`](/de/docs/Web/HTML/Reference/Elements/li)-Elementen) ausgibt. Diese sollten an die bereitgestellte `list` angehängt werden.

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
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

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

In dieser nächsten Aufgabe möchten wir, dass Sie ein einfaches Programm schreiben, das, gegebenenfalls einem Namen, ein Array von {{Glossary("Object", "Objekten")}} durchsucht, die Namen und Telefonnummern enthalten, und wenn es den Namen findet, gibt es den Namen und die Telefonnummer in einem Absatz aus.

Sie erhalten drei Variablen, um zu beginnen:

- `name`: Enthält einen zu suchenden Namen.
- `para`: Enthält einen Verweis auf einen Absatz, der verwendet wird, um die Ergebnisse zu melden.
- `phonebook`: Enthält die Telefonbuch-Einträge, die durchsucht werden sollen.

> [!NOTE]
> Wenn Sie noch nichts über Objekte gelesen haben, machen Sie sich keine Sorgen! Vorerst müssen Sie nur wissen, wie Sie auf ein Mitglied-Wert-Paar zugreifen. Sie können sich im [JavaScript-Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) Tutorial über Objekte informieren.

Um die Aufgabe abzuschließen:

1. Schreiben Sie eine Schleife, die durch das (`phonebook`)-Array iteriert und nach dem bereitgestellten `name` sucht. Sie sollten eine Art Schleife verwenden, die Sie in der vorherigen Aufgabe nicht verwendet haben.
2. Wenn der `name` gefunden wird, schreiben Sie ihn und die zugehörige `number` in das `textContent` des bereitgestellten Absatzes (`para`), in der Form "Der Name von &lt;name> ist &lt;number>." Beenden Sie danach die Schleife, bevor sie vollständig durchlaufen ist.
3. Wenn keines der Objekte den `name` enthält, drucken Sie "Name nicht im Telefonbuch gefunden" in das `textContent` des bereitgestellten Absatzes.

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
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

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

In dieser letzten Aufgabe werden Sie jede Zahl von `500` bis `2` testen, um zu sehen, welche Primzahlen sind, mit der bereitgestellten Testfunktion, und die Primzahlen ausgeben.

Ihnen werden folgende Informationen zur Verfügung gestellt:

- `i`: Beginnt mit einem Wert von `500`; soll als Iterator verwendet werden.
- `para`: Enthält einen Verweis auf einen Absatz, der verwendet wird, um die Ergebnisse zu melden.
- `isPrime()`: Eine Funktion, die, wenn sie eine Zahl erhält, `true` zurückgibt, wenn die Zahl eine Primzahl ist, und `false`, wenn nicht.

Um die Aufgabe abzuschließen:

1. Schreiben Sie eine Schleife, die jede Zahl von `500` bis `2` durchläuft (1 wird nicht als Primzahl gezählt), und die bereitgestellte `isPrime()`-Funktion für jede ausführt.
2. Für jede Zahl, die keine Primzahl ist, fahren Sie mit der nächsten Schleifeniteration fort. Für jede, die _eine_ Primzahl ist, fügen Sie sie dem `textContent` des Absatzes mit einer Art Trennzeichen hinzu.

Sie sollten eine Art Schleife verwenden, die Sie in den vorherigen zwei Aufgaben nicht verwendet haben.

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
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

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
