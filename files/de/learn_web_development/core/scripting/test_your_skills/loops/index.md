---
title: "Testen Sie Ihre Fähigkeiten: Schleifen"
short-title: "Test: Schleifen"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Loops
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

Das Ziel dieses Fähigkeitentests ist es, Ihnen zu helfen, einzuschätzen, ob Sie unseren Artikel [Schleifen im Code](/de/docs/Learn_web_development/Core/Scripting/Loops) verstanden haben.

> [!NOTE]
> Um Hilfe zu bekommen, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Gebrauchsanweisung. Sie können auch über eine unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt zu uns aufnehmen.

## DOM-Manipulation: als nützlich erachtet

Einige der folgenden Fragen erfordern von Ihnen, etwas {{Glossary("DOM", "DOM")}}-Manipulationscode zu schreiben, um sie abzuschließen — wie das Erstellen neuer HTML-Elemente, das Setzen ihrer Textinhalte auf bestimmte Zeichenfolgenwerte und das Einbetten dieser in bestehende Elemente auf der Seite — alles über JavaScript.

Wir haben dies noch nicht ausdrücklich im Kurs gelehrt, aber Sie haben einige Beispiele gesehen, die davon Gebrauch machen. Wir möchten, dass Sie etwas recherchieren, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Schleifen 1

Bei unserer ersten Schleifenaufgabe möchten wir, dass Sie eine grundlegende Schleife schreiben, die alle Elemente im bereitgestellten `myArray` durchläuft und diese auf dem Bildschirm innerhalb von Listenelementen ([`<li>`](/de/docs/Web/HTML/Reference/Elements/li)-Elemente) ausgibt. Diese sollten an die bereitgestellte `list` angehängt werden.

<!-- Code, der über Beispiele geteilt wird -->

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

<!-- Beispiel-spezifischer Code -->

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

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

Bei dieser nächsten Aufgabe möchten wir, dass Sie ein einfaches Programm schreiben, das, gegebenenfalls einen Namen, ein Array von {{Glossary("Object", "Objekten")}} durchsucht, das Namen und Telefonnummern enthält, und wenn es den Namen findet, den Namen und die Telefonnummer in einen Absatz ausgibt.

Sie erhalten drei Variablen, mit denen Sie beginnen können:

- `name`: Enthält den zu suchenden Namen.
- `para`: Enthält eine Referenz zu einem Absatz, der verwendet wird, um die Ergebnisse zu berichten.
- `phonebook`: Enthält die Telefonbucheinträge, die durchsucht werden sollen.

> [!NOTE]
> Wenn Sie noch nicht über Objekte gelesen haben, machen Sie sich keine Sorgen! Alles, was Sie vorerst wissen müssen, ist, wie Sie auf ein Mitglied-Wert-Paar zugreifen. Sie können sich im [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) Tutorial darüber informieren.

Um die Aufgabe zu vervollständigen:

1. Schreiben Sie eine Schleife, die das (`phonebook`) Array durchläuft und nach dem bereitgestellten `name` sucht. Sie sollten einen Schleifentyp verwenden, den Sie in der vorherigen Aufgabe noch nicht benutzt haben.
2. Wenn der `name` gefunden wird, schreiben Sie ihn und die dazugehörige `number` in das `textContent` des bereitgestellten Absatzes (`para`), in der Form "&lt;name>'s number is &lt;number>." Danach beenden Sie die Schleife, bevor sie vollständig durchlaufen ist.
3. Wenn keines der Objekte den `name` enthält, drucken Sie "Name not found in the phonebook" in das `textContent` des bereitgestellten Absatzes.

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

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

In dieser letzten Aufgabe werden Sie jede Zahl von `500` bis `2` testen, um herauszufinden, welche davon Primzahlen sind, indem Sie die bereitgestellte Testfunktion verwenden und die Primzahlen ausgeben.

Ihnen wird Folgendes bereitgestellt:

- `i`: Startet mit einem Wert von `500`; soll als Iterator verwendet werden.
- `para`: Enthält eine Referenz zu einem Absatz, der verwendet wird, um die Ergebnisse zu berichten.
- `isPrime()`: Eine Funktion, die, wenn ihr eine Zahl übergeben wird, `true` zurückgibt, wenn die Zahl eine Primzahl ist, und `false` wenn nicht.

Um die Aufgabe zu vervollständigen:

1. Schreiben Sie eine Schleife, die jede Zahl von `500` bis `2` durchläuft (1 wird nicht als Primzahl gezählt), und führen Sie die bereitgestellte `isPrime()` Funktion für jede von ihnen aus.
2. Für jede Zahl, die keine Primzahl ist, fahren Sie mit der nächsten Schleifeniteration fort. Für jede, die _eine_ Primzahl ist, fügen Sie sie dem `textContent` des Absatzes zusammen mit einer Art Trennzeichen hinzu.

Sie sollten einen Schleifentyp verwenden, den Sie in den vorherigen beiden Aufgaben noch nicht benutzt haben.

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

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
