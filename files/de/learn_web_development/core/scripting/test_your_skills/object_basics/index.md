---
title: "Testen Sie Ihr Wissen: Grundlagen der Objekte"
short-title: Objects
slug: Learn_web_development/Core/Scripting/Test_your_skills/Object_basics
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel dieses Kompetenztests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unseren Artikel zu den [Grundlagen der JavaScript-Objekte](/de/docs/Learn_web_development/Core/Scripting/Object_basics) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie bitte unser [Testen Sie Ihr Wissen](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Grundlagen der Objekte 1

In dieser Aufgabe wird Ihnen ein Objektliteral bereitgestellt, und wir möchten, dass Sie daran arbeiten.

Um die Aufgabe abzuschließen:

1. Speichern Sie den Wert der `name`-Eigenschaft in der Variable `catName`, unter Verwendung von Klammernotation.
2. Führen Sie die `greeting()`-Methode unter Verwendung der Punktnotation aus (es wird die Begrüßung in der Konsole protokollieren).
3. Aktualisieren Sie den Wert der `color`-Eigenschaft auf `black`.

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
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

## Grundlagen der Objekte 2

In unserer nächsten Aufgabe möchten wir, dass Sie versuchen, Ihr eigenes Objektliteral zu erstellen, das eine Ihrer Lieblingsbands repräsentiert.

Um die Aufgabe abzuschließen:

1. Erstellen Sie ein Objektliteral namens `band`, das die folgenden Eigenschaften enthält:
   - `name`: Ein String, der den Namen der Band repräsentiert.
   - `nationality`: Ein String, der das Land repräsentiert, aus dem die Band stammt.
   - `genre`: Welche Art von Musik die Band spielt.
   - `members`: Eine Zahl, die die Anzahl der Mitglieder der Band darstellt.
   - `formed`: Eine Zahl, die das Jahr darstellt, in dem die Band gegründet wurde.
   - `split`: Eine Zahl, die das Jahr darstellt, in dem die Band sich aufgelöst hat, oder `false`, wenn sie noch zusammen sind.
   - `albums`: Ein Array, das die von der Band veröffentlichten Alben darstellt. Jedes Array-Element sollte ein Objekt mit den folgenden Mitgliedern enthalten:
     - `name`: Ein String, der den Namen des Albums repräsentiert.
     - `released`: Eine Zahl, die das Jahr darstellt, in dem das Album veröffentlicht wurde.
       > [!NOTE]
       > Fügen Sie mindestens zwei Alben in das `albums`-Array ein.
2. Schreiben Sie einen String in die Variable `bandInfo`, der eine kurze Biografie enthält, in der ihr Name, ihre Nationalität, die aktiven Jahre, ihr Stil und der Titel sowie das Veröffentlichungsdatum ihres ersten Albums enthalten sind.

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

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

## Grundlagen der Objekte 3

In dieser Aufgabe möchten wir, dass Sie zum `cat`-Objektliteral aus den Grundlagen der Objekte 1 zurückkehren.

Um die Aufgabe abzuschließen:

1. Schreiben Sie die `greeting()`-Methode so um, dass sie `"Hello, said Bertie the Cymric."` in der Konsole des Browsers protokolliert, jedoch so, dass sie bei _jedem_ Katzenobjekt derselben Struktur funktioniert, unabhängig von seinem Namen oder seiner Rasse.
2. Schreiben Sie Ihr eigenes Objekt namens `cat2`, das dieselbe Struktur und `greeting()`-Methode hat, jedoch einen anderen `name`, `breed` und `color`.
3. Rufen Sie beide `greeting()`-Methoden auf, um zu überprüfen, ob sie passende Grüße in der Konsole protokollieren.

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

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

## Grundlagen der Objekte 4

In dem Code, den Sie für Aufgabe 3 geschrieben haben, sind die `greeting()`-Methode und die Eigenschaften zweimal definiert, einmal für jede Katze. Dies ist nicht ideal: insbesondere verstößt es gegen ein Prinzip in der Programmierung namens [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) oder "Don't Repeat Yourself". In dieser Aufgabe möchten wir, dass Sie den Code verbessern, sodass die Objektelemente nur einmal definiert werden.

Um die Aufgabe abzuschließen:

1. Erstellen Sie eine JavaScript-Klasse, die Katzeninstanzen definiert.
2. Verwenden Sie Ihre Klasse zusammen mit dem `new` Schlüsselwort, um die Instanzen `cat` und `cat2` zu erstellen.

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

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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
