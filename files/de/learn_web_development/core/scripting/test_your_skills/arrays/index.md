---
title: "Testen Sie Ihre Fähigkeiten: Arrays"
short-title: "Test: Arrays"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Arrays
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unseren Artikel zu [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Nutzung von Fähigkeiten-Tests](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Interaktive Herausforderung

Zuerst präsentieren wir Ihnen eine unterhaltsame, interaktive Herausforderung zu Arrays, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Schauen Sie sich das eingebettete "Scrim" an und führen Sie die Aufgabe in der Zeitleiste (das kleine Geistersymbol) aus, indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das "Scrim" weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~05e" scrimtitle="Render images from an array" survey="true"></scrim-inline>

> [!NOTE]
> Diese Aufgabe ist in gewisser Weise ein ehrgeiziges Ziel, da sie JavaScript-Funktionen erfordert, die Sie im Kurs noch nicht ausdrücklich behandelt haben. Geben Sie Ihr Bestes und suchen Sie online nach Informationen zu allem, worüber Sie nicht sicher sind.

## Aufgabe 1

Diese Aufgabe bietet Ihnen grundlegende Übungen mit Arrays:

1. Erstellen Sie ein Array mit drei Elementen und speichern Sie es in einer Variablen namens `myArray`. Die Elemente können beliebig sein - wie wäre es mit Ihren Lieblingsessen oder -bands?
2. Ändern Sie als Nächstes die ersten beiden Elemente im Array mithilfe der Klammernotation und Zuweisung.
3. Fügen Sie schließlich ein neues Element am Anfang des Arrays hinzu.

<!-- Code shared across examples -->

```html hidden live-sample___arrays-1 live-sample___arrays-2 live-sample___arrays-3 live-sample___arrays-4
<section></section>
```

```css hidden live-sample___arrays-1 live-sample___arrays-2 live-sample___arrays-3 live-sample___arrays-4
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___arrays-1
// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);
```

{{ EmbedLiveSample("arrays-1", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
const myArray = ["cats", "dogs", "chickens"];

myArray[0] = "horses";
myArray[1] = "pigs";

myArray.unshift("crocodiles");

// Don't edit the code below here!
// ...
```

</details>

## Aufgabe 2

Kommen wir nun zu einer anderen Aufgabe. Hier erhalten Sie einen String, mit dem Sie arbeiten müssen.

Um die Aufgabe zu vervollständigen:

1. Konvertieren Sie den String in ein Array, indem Sie die `+` Zeichen dabei entfernen. Speichern Sie das Ergebnis in einer Variablen namens `myArray`.
2. Speichern Sie die Länge des Arrays in einer Variablen namens `arrayLength`.
3. Speichern Sie das letzte Element im Array in einer Variablen namens `lastItem`.

```js live-sample___arrays-2
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
const para2 = document.createElement("p");
para2.textContent = `The length of the array is ${arrayLength}.`;
const para3 = document.createElement("p");
para3.textContent = `The last item in the array is "${lastItem}".`;
section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);
```

{{ EmbedLiveSample("arrays-2", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

let myArray = myString.split("+");

let arrayLength = myArray.length;

let lastItem = myArray[arrayLength - 1];

// Don't edit the code below here!
// ...
```

</details>

## Aufgabe 3

Für diese Array-Aufgabe stellen wir Ihnen ein Start-Array zur Verfügung, und Sie arbeiten in gewisser Weise in die entgegengesetzte Richtung. Sie müssen:

1. Das letzte Element im Array entfernen.
2. Zwei neue Namen am Ende des Arrays hinzufügen.
3. Über jedes Element im Array iterieren und seine Indexnummer in Klammern nach dem Namen hinzufügen, zum Beispiel `Ryu (0)`. Beachten Sie, dass wir im Arrays-Artikel nicht lehren, wie man dies macht, also müssen Sie etwas recherchieren.
4. Schließlich die Array-Elemente in einem einzigen String mit dem Namen `myString` zusammenführen, mit einem Trennzeichen von `"-"`.

```js live-sample___arrays-3
const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);
```

{{ EmbedLiveSample("arrays-3", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

myArray.pop();

myArray.push("Zangief");
myArray.push("Ibuki");

myArray.forEach((element, index) => {
  const newElement = `${element} (${index})`;
  myArray[index] = newElement;
});

const myString = myArray.join(" - ");

// Don't edit the code below here!
// ...
```

</details>

## Aufgabe 4

Für diese Array-Aufgabe stellen wir Ihnen ein Start-Array mit den Namen einiger Vögel zur Verfügung.

Um die Aufgabe zu vervollständigen:

1. Finden Sie den Index des Elements `"Eagles"` und verwenden Sie ihn, um das Element `"Eagles"` zu entfernen.
2. Erstellen Sie aus diesem Array ein neues Array namens `eBirds`, das nur die Vögel aus dem Original-Array enthält, deren Namen mit dem Buchstaben „E“ beginnen. Beachten Sie, dass {{jsxref("String.prototype.startsWith()", "startsWith()")}} eine großartige Methode ist, um zu überprüfen, ob ein String mit einem bestimmten Zeichen beginnt.

Wenn es funktioniert, sollten Sie `"Emus,Egrets"` auf der Seite sehen.

```js live-sample___arrays-4
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);
```

{{ EmbedLiveSample("arrays-4", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

const eaglesIndex = birds.indexOf("Eagles");
birds.splice(eaglesIndex, 1);

function startsWithE(bird) {
  return bird.startsWith("E");
}
const eBirds = birds.filter(startsWithE);

// Don't edit the code below here!
// ...
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}
