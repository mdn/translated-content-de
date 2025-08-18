---
title: "Testen Sie Ihr Wissen: Objektgrundlagen"
short-title: "Test: Objekte"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Object_basics
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}

Ziel dieses Tests ist es, Ihnen zu helfen, einzuschätzen, ob Sie unseren Artikel über die [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zu Testen Sie Ihr Wissen](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Objektgrundlagen 1

In dieser Aufgabe wird Ihnen ein Objektliteral zur Verfügung gestellt, und wir möchten, dass Sie einige Arbeiten daran durchführen.

Um die Aufgabe abzuschließen:

1. Speichern Sie den Wert der `name`-Eigenschaft in der Variablen `catName`, indem Sie die Klammernotation verwenden.
2. Führen Sie die Methode `greeting()` mit Punktnotation aus (sie wird die Begrüßung in die Konsole loggen).
3. Aktualisieren Sie den Wert der `color`-Eigenschaft auf `black`.

<!-- Code wird über Beispiele hinweg geteilt -->

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

<!-- Beispiel-spezifischer Code -->

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
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

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

In unserer nächsten Aufgabe möchten wir, dass Sie versuchen, ein eigenes Objektliteral zu erstellen, um eine Ihrer Lieblingsbands darzustellen.

Um die Aufgabe abzuschließen:

1. Erstellen Sie ein Objektliteral mit dem Namen `band`, das die folgenden Eigenschaften enthält:
   - `name`: Ein String, der den Namen der Band repräsentiert.
   - `nationality`: Ein String, der das Land angibt, aus dem die Band stammt.
   - `genre`: Welche Art von Musik die Band spielt.
   - `members`: Eine Zahl, die die Anzahl der Mitglieder der Band repräsentiert.
   - `formed`: Eine Zahl, die das Jahr repräsentiert, in dem die Band gegründet wurde.
   - `split`: Eine Zahl, die das Jahr repräsentiert, in dem sich die Band auflöste, oder `false`, wenn sie noch zusammen sind.
   - `albums`: Ein Array, das die von der Band veröffentlichten Alben repräsentiert. Jedes Array-Element sollte ein Objekt enthalten, das die folgenden Mitglieder enthält:
     - `name`: Ein String, der den Namen des Albums repräsentiert.
     - `released`: Eine Zahl, die das Jahr repräsentiert, in dem das Album veröffentlicht wurde.
       > [!NOTE]
       > Fügen Sie mindestens zwei Alben im `albums`-Array ein.
2. Schreiben Sie einen String in die Variable `bandInfo`, der eine kurze Biografie mit ihrem Namen, ihrer Nationalität, der aktiven Zeit und dem Stil sowie dem Titel und dem Veröffentlichungsdatum ihres ersten Albums enthält.

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
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

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

In dieser Aufgabe möchten wir, dass Sie zum Objektliteral `cat` aus Objektgrundlagen 1 zurückkehren.

Um die Aufgabe abzuschließen:

1. Schreiben Sie die Methode `greeting()` um, damit sie `"Hello, said Bertie the Cymric."` in die Konsole des Browsers schreibt, jedoch auf eine Weise, die für _jede_ Katze mit derselben Struktur funktioniert, unabhängig von ihrem Namen oder ihrer Rasse.
2. Schreiben Sie ein eigenes Objekt mit dem Namen `cat2`, das dieselbe Struktur und Methode `greeting()` hat, aber einen anderen `name`, `breed` und `color`.
3. Rufen Sie beide `greeting()`-Methoden auf, um zu prüfen, ob sie geeignete Grüße in die Konsole schreiben.

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
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

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

In dem von Ihnen für Aufgabe 3 geschriebenen Code sind die Methode `greeting()` und die Eigenschaften zweimal definiert, einmal für jede Katze. Das ist nicht ideal: Speziell verletzt es ein Prinzip in der Programmierung, genannt [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) oder "Don't Repeat Yourself". In dieser Aufgabe möchten wir, dass Sie den Code verbessern, sodass die Objekteigenschaften nur einmal definiert sind.

Um die Aufgabe abzuschließen:

1. Erstellen Sie eine JavaScript-Klasse, die Katzeninstanzen definiert.
2. Verwenden Sie Ihre Klasse zusammen mit dem `new`-Schlüsselwort, um die `cat`- und `cat2`-Instanzen zu erstellen.

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
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

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

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}
