---
title: "Testen Sie Ihr Können: Arrays"
short-title: Arrays
slug: Learn_web_development/Core/Scripting/Test_your_skills/Arrays
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie unseren [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) Artikel verstanden haben.

> [!NOTE]
> Für die Aufgaben 1–4 können Sie Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
> Wenn Sie feststecken, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Interaktiver Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Arrays-Herausforderung, die von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home), erstellt wurde.

Sehen Sie sich die eingebettete Lektion an, und schließen Sie die Aufgabe auf der Zeitleiste (das kleine Geistersymbol) ab, indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie die Lektion fortsetzen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~05e" scrimtitle="Bilder aus einem Array rendern" survey="true"></scrim-inline>

> [!NOTE]
> Diese Aufgabe ist ein gewisses Stretch-Ziel, da sie sich auf JavaScript-Funktionen stützt, die Sie im Kurs noch nicht explizit behandelt haben. Geben Sie Ihr Bestes und suchen Sie online nach Informationen zu allem, worüber Sie sich nicht sicher sind.

## Aufgabe 1

Diese Aufgabe gibt Ihnen einige grundlegende Array-Übungen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie ein Array mit drei Elementen und speichern Sie es in einer Variablen namens `myArray`. Die Elemente können alles sein, was Sie wollen — wie wäre es mit Ihren Lieblingsspeisen oder -bands?
3. Ändern Sie dann die ersten beiden Elemente im Array mithilfe von Klammernotation und Zuweisung.
4. Fügen Sie schließlich ein neues Element am Anfang des Arrays hinzu.

> [!CALLOUT]
>
> Sie können auch [den Startpunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Reset_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

Kommen wir nun zu einer weiteren Aufgabe. Hier wird Ihnen ein String zur Bearbeitung bereitgestellt.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Konvertieren Sie den String in ein Array und entfernen Sie dabei die `+` Zeichen. Speichern Sie das Ergebnis in einer Variablen namens `myArray`.
3. Speichern Sie die Länge des Arrays in einer Variablen namens `arrayLength`.
4. Speichern Sie das letzte Element im Array in einer Variablen namens `lastItem`.

> [!CALLOUT]
>
> Sie können auch [den Startpunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Reset_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

Für diese Array-Aufgabe stellen wir Ihnen ein Anfangs-Array bereit, und Sie arbeiten in gewisser Weise in die entgegengesetzte Richtung. Sie müssen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Entfernen Sie das letzte Element im Array.
3. Fügen Sie zwei neue Namen am Ende des Arrays hinzu.
4. Durchlaufen Sie jedes Element im Array und fügen Sie die Indexnummer nach dem Namen in Klammern hinzu, zum Beispiel `Ryu (0)`. Beachten Sie, dass wir Ihnen im Arrays-Artikel nicht beibringen, wie man dies tut, also müssen Sie ein wenig recherchieren.
5. Verbinden Sie schließlich die Array-Elemente zu einem einzigen String namens `myString`, mit einem Trennzeichen von `"-"`.

> [!CALLOUT]
>
> Sie können auch [den Startpunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Reset_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

Für diese Array-Aufgabe stellen wir Ihnen ein Anfangs-Array mit den Namen einiger Vögel bereit.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Finden Sie den Index des Elements `"Eagles"`, und verwenden Sie diesen, um das Element `"Eagles"` zu entfernen.
3. Erstellen Sie ein neues Array aus diesem, genannt `eBirds`, das nur die Vögel aus dem Original-Array enthält, deren Namen mit dem Buchstaben "E" beginnen. Beachten Sie, dass {{jsxref("String.prototype.startsWith()", "startsWith()")}} ein großartiger Weg ist, um zu überprüfen, ob ein String mit einem bestimmten Zeichen beginnt.

Wenn es funktioniert, sollten Sie `"Emus,Egrets"` auf der Seite sehen.

> [!CALLOUT]
>
> Sie können auch [den Startpunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Reset_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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
