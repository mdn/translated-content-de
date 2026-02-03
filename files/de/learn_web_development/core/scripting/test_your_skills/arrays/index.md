---
title: "Testen Sie Ihre Fähigkeiten: Arrays"
short-title: "Test: Arrays"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Arrays
l10n:
  sourceCommit: b36d59a0df933597c7d3b55e363f7a59e30d3ba3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unseren [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) Artikel verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zur Nutzung von Fähigkeitstests](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Interaktive Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Array-Herausforderung, die von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds) [Scrimba](https://scrimba.com/home) erstellt wurde.

Sehen Sie sich den eingebetteten Scrim an und erledigen Sie die Aufgabe auf der Zeitleiste (das kleine Geister-Symbol), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Anschauen des Scrims fortsetzen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<mdn-scrim-inline url="https://scrimba.com/learn-javascript-c0v/~05e" scrimtitle="Bilder aus einem Array rendern" survey="true"></mdn-scrim-inline>

> [!NOTE]
> Diese Aufgabe ist ein gewisses Stretch-Goal, da sie auf JavaScript-Funktionen basiert, die Sie im Kurs bisher noch nicht explizit behandelt haben. Geben Sie Ihr Bestes und suchen Sie online nach Informationen zu allem, bei dem Sie sich nicht sicher sind.

## Arrays 1

Diese Aufgabe vermittelt Ihnen einige grundlegende Praxis mit Arrays:

1. Erstellen Sie ein Array mit drei Elementen und speichern Sie es in einer Variable namens `myArray`. Die Elemente können alles sein, was Sie möchten — wie wäre es mit Ihren Lieblingsspeisen oder Bands?
2. Als Nächstes ändern Sie die ersten beiden Elemente im Array mit Hilfe der Klammernotation und Zuweisung.
3. Fügen Sie schließlich ein neues Element am Anfang des Arrays hinzu.

<!-- Code shared across examples -->

```html hidden live-sample___arrays-1 live-sample___arrays-2 live-sample___arrays-3 live-sample___arrays-4 live-sample___arrays-1-finish live-sample___arrays-2-finish live-sample___arrays-3-finish live-sample___arrays-4-finish
<section></section>
```

```css hidden live-sample___arrays-1 live-sample___arrays-2 live-sample___arrays-3 live-sample___arrays-4 live-sample___arrays-1-finish live-sample___arrays-2-finish live-sample___arrays-3-finish live-sample___arrays-4-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus (es wird noch nichts angezeigt):

{{ EmbedLiveSample("arrays-1", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```js live-sample___arrays-1
// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);
```

Die aktualisierte Ausgabe sollte wie folgt aussehen:

{{ EmbedLiveSample("arrays-1-finish", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ähnlich wie folgt aussehen:

```js
const myArray = ["cats", "dogs", "chickens"];

myArray[0] = "horses";
myArray[1] = "pigs";

myArray.unshift("crocodiles");

// Don't edit the code below here!
// ...
```

```js hidden live-sample___arrays-1-finish
const myArray = ["cats", "dogs", "chickens"];

myArray[0] = "horses";
myArray[1] = "pigs";

myArray.unshift("crocodiles");

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);
```

</details>

## Arrays 2

Lassen Sie uns nun mit einer weiteren Aufgabe fortfahren. Hier wird Ihnen ein String zur Verfügung gestellt, mit dem Sie arbeiten sollen.

Um die Aufgabe zu erfüllen:

1. Konvertieren Sie den String in ein Array und entfernen Sie dabei die `+`-Zeichen. Speichern Sie das Ergebnis in einer Variablen namens `myArray`.
2. Speichern Sie die Länge des Arrays in einer Variablen namens `arrayLength`.
3. Speichern Sie das letzte Element im Array in einer Variablen namens `lastItem`.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus (es wird noch nichts angezeigt):

{{ EmbedLiveSample("arrays-2", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Ausgabe sollte wie folgt aussehen:

{{ EmbedLiveSample("arrays-2-finish", "100%", 100) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ähnlich wie folgt aussehen:

```js
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

let myArray = myString.split("+");

let arrayLength = myArray.length;

let lastItem = myArray[arrayLength - 1];

// Don't edit the code below here!
// ...
```

```js hidden live-sample___arrays-2-finish
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
let myArray = myString.split("+");
let arrayLength = myArray.length;
let lastItem = myArray[arrayLength - 1];

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

</details>

## Arrays 3

Für diese Array-Aufgabe stellen wir Ihnen ein Ausgangs-Array zur Verfügung, und Sie arbeiten in gewisser Weise in die entgegengesetzte Richtung. Sie müssen:

1. Entfernen Sie das letzte Element im Array.
2. Fügen Sie dem Ende des Arrays zwei neue Namen hinzu.
3. Iterieren Sie über jedes Element im Array und fügen Sie hinter dem Namen die Indexnummer in Klammern hinzu, zum Beispiel `Ryu (0)`. Beachten Sie, dass wir Ihnen im Array-Artikel nicht beibringen, wie man dies macht, also müssen Sie ein wenig recherchieren.
4. Verbinden Sie schließlich die Array-Elemente zu einem einzelnen String namens `myString` mit einem Trennzeichen von `"-"`.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus (es wird noch nichts angezeigt):

{{ EmbedLiveSample("arrays-3", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Ausgabe sollte wie folgt aussehen:

{{ EmbedLiveSample("arrays-3-finish", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ähnlich wie folgt aussehen:

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

```js hidden live-sample___arrays-3-finish
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

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);
```

</details>

## Arrays 4

Für diese Array-Aufgabe stellen wir Ihnen ein Ausgangs-Array mit den Namen einiger Vögel zur Verfügung.

Um die Aufgabe zu erfüllen:

1. Finden Sie den Index des Elements `"Eagles"` und verwenden Sie diesen, um das Element `"Eagles"` zu entfernen.
2. Erstellen Sie aus diesem ein neues Array namens `eBirds`, das nur Vögel aus dem ursprünglichen Array enthält, deren Namen mit dem Buchstaben „E“ beginnen. Beachten Sie, dass {{jsxref("String.prototype.startsWith()", "startsWith()")}} eine großartige Möglichkeit ist, zu überprüfen, ob ein String mit einem bestimmten Zeichen beginnt.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus (es wird noch nichts angezeigt):

{{ EmbedLiveSample("arrays-4", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```js live-sample___arrays-4
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);
```

Die aktualisierte Ausgabe sollte wie folgt aussehen:

{{ EmbedLiveSample("arrays-4-finish", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ähnlich wie folgt aussehen:

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

```js hidden live-sample___arrays-4-finish
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

const eaglesIndex = birds.indexOf("Eagles");
birds.splice(eaglesIndex, 1);

function startsWithE(bird) {
  return bird.startsWith("E");
}
const eBirds = birds.filter(startsWithE);

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}
