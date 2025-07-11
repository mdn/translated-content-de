---
title: "Testen Sie Ihre Fähigkeiten: Objektgrundlagen"
short-title: Objects
slug: Learn_web_development/Core/Scripting/Test_your_skills/Object_basics
l10n:
  sourceCommit: 53ed5fbd3a7d323ef0629f68c41be8a1ed15c885
---

Das Ziel dieses Fähigkeits-Tests ist es, zu prüfen, ob Sie unseren Artikel zu den [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite ausprobieren oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/).
> Wenn es einen Fehler in Ihrem Code gibt, wird er im Ergebnisfeld auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Objektgrundlagen 1

In dieser Aufgabe wird Ihnen ein Objektliteral zur Verfügung gestellt, und wir möchten, dass Sie daran arbeiten.

Um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Speichern Sie den Wert der `name`-Eigenschaft in der Variablen `catName` mit der Klammernotation.
3. Führen Sie die Methode `greeting()` mittels Punktnotation aus (es wird die Begrüßung in die Konsole protokolliert).
4. Aktualisieren Sie den Wert der `color`-Eigenschaft auf `black`.

> [!CALLOUT]
>
> Sie können auch den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Liveausgabe ansehen.

<!-- Code shared across examples -->

```html hidden live-sample___objects-1 live-sample___objects-2 live-sample___objects-3 live-sample___objects-4
<section></section>
```

```css hidden live-sample___objects-1 live-sample___objects-2 live-sample___objects-3 live-sample___objects-4
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___objects-1
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("objects-1", "100%", 60) }}

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
// ...
// Don't edit the code above here!

const catName = cat["name"];
cat.greeting();
cat.color = "black";

// Don't edit the code below here!
// ...
```

</details>

## Objektgrundlagen 2

In unserer nächsten Aufgabe möchten wir, dass Sie versuchen, Ihr eigenes Objektliteral zu erstellen, das eine Ihrer Lieblingsbands darstellt.

Um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie ein Objektliteral namens `band`, das die folgenden Eigenschaften enthält:
   - `name`: Ein String, der den Bandnamen darstellt.
   - `nationality`: Ein String, der das Land darstellt, aus dem die Band kommt.
   - `genre`: Welche Art von Musik die Band spielt.
   - `members`: Eine Zahl, die die Anzahl der Mitglieder der Band darstellt.
   - `formed`: Eine Zahl, die das Jahr darstellt, in dem die Band gegründet wurde.
   - `split`: Eine Zahl, die das Jahr darstellt, in dem sich die Band aufgelöst hat, oder `false`, wenn sie noch zusammen sind.
   - `albums`: Ein Array, das die von der Band veröffentlichten Alben darstellt. Jedes Array-Element sollte ein Objekt enthalten mit den folgenden Mitgliedern:
     - `name`: Ein String, der den Namen des Albums darstellt.
     - `released`: Eine Zahl, die das Jahr darstellt, in dem das Album veröffentlicht wurde.
       > [!NOTE]
       > Fügen Sie mindestens zwei Alben im `albums`-Array ein.
3. Schreiben Sie einen String in die Variable `bandInfo`, der eine kurze Biografie enthält, die deren Namen, Nationalität, aktive Jahre und Stil beschreibt und den Titel und das Erscheinungsjahr ihres ersten Albums angibt.

> [!CALLOUT]
>
> Sie können auch den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics2-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Liveausgabe ansehen.

```js live-sample___objects-2
let bandInfo;

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
```

{{ EmbedLiveSample("objects-2", "100%", 60) }}

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
// ...
// Don't edit the code above here!

const band = {
  name: "Black Sabbath",
  nationality: "British",
  genre: "heavy metal",
  members: 4,
  formed: 1968,
  split: 2025,
  albums: [
    {
      name: "Black Sabbath",
      released: 1970,
    },
    {
      name: "Paranoid",
      released: 1970,
    },
    {
      name: "Master of Reality",
      released: 1971,
    },
    {
      name: "Vol. 4",
      released: 1972,
    },
  ],
};

bandInfo = `The ${band.nationality} ${band.genre} band ${band.name} were active between ${band.formed} and ${band.split}. Their first album, ${band.albums[0].name}, was released in ${band.albums[0].released}.`;

// Don't edit the code below here!
// ...
```

</details>

## Objektgrundlagen 3

In dieser Aufgabe möchten wir, dass Sie zum `cat`-Objektliteral aus Objektgrundlagen 1 zurückkehren.

Um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie die `greeting()`-Methode so um, dass sie `"Hello, said Bertie the Cymric."` in die Browser-Konsole protokolliert, jedoch so, dass es für _jedes_ Katzenobjekt derselben Struktur funktioniert, unabhängig von seinem Namen oder seiner Rasse.
3. Schreiben Sie Ihr eigenes Objekt namens `cat2`, das dieselbe Struktur und eine `greeting()`-Methode hat, jedoch einen anderen `name`, `breed` und `color`.
4. Rufen Sie beide `greeting()`-Methoden auf, um zu überprüfen, ob sie geeignete Begrüßungen in die Konsole protokollieren.

> [!CALLOUT]
>
> Sie können auch den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics3-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Liveausgabe ansehen.

```js live-sample___objects-3
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("objects-3", "100%", 60) }}

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
// ...
// Don't edit the code above here!

const cat2 = {
  name: "Elfie",
  breed: "Aphrodite Giant",
  color: "ginger",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

cat.greeting();
cat2.greeting();
```

</details>

## Objektgrundlagen 4

Im Code, den Sie für Aufgabe 3 geschrieben haben, sind die `greeting()`-Methode und die Eigenschaften zweimal definiert, einmal für jede Katze. Das ist nicht ideal: Insbesondere verletzt es ein Prinzip in der Programmierung, das als [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) oder "Don't Repeat Yourself" bezeichnet wird. In dieser Aufgabe möchten wir, dass Sie den Code verbessern, sodass die Objektelemente nur einmal definiert werden.

Um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie eine JavaScript-Klasse, die Katzeninstanzen definiert.
3. Verwenden Sie Ihre Klasse zusammen mit dem `new`-Schlüsselwort, um die `cat`- und `cat2`-Instanzen zu erstellen.

> [!CALLOUT]
>
> Sie können auch den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics4-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Liveausgabe ansehen.

```js live-sample___objects-4
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

const cat2 = {
  name: "Elfie",
  breed: "Aphrodite Giant",
  color: "ginger",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

// Don't edit the code below here!

cat.greeting();
cat2.greeting();
```

{{ EmbedLiveSample("objects-4", "100%", 60) }}

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
class Cat {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }
  greeting() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

const cat = new Cat("Bertie", "Cymric", "white");
const cat2 = new Cat("Elfie", "Aphrodite Giant", "ginger");

// Don't edit the code below here!
// ...
```

</details>
