---
title: "Testen Sie Ihre Fähigkeiten: Objektgrundlagen"
short-title: "Test: Objekte"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Object_basics
l10n:
  sourceCommit: b36d59a0df933597c7d3b55e363f7a59e30d3ba3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}

Der Zweck dieses Fähigkeitentests besteht darin, Ihnen zu helfen, zu bewerten, ob Sie unseren Artikel [JavaScript Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Objektgrundlagen 1

In dieser Aufgabe wird Ihnen ein Objektliteral bereitgestellt, und wir möchten, dass Sie daran arbeiten.

Um die Aufgabe abzuschließen:

1. Speichern Sie den Wert der `name` Eigenschaft in der Variablen `catName` unter Verwendung der Klammernotation.
2. Führen Sie die Methode `greeting()` mit der Punktnotation aus (sie wird die Begrüßung in die Konsole ausgeben).
3. Aktualisieren Sie den Wert der `color` Eigenschaft auf `black`.

<!-- Code shared across examples -->

```html hidden live-sample___objects-1 live-sample___objects-2 live-sample___objects-3 live-sample___objects-4 live-sample___objects-1-finish live-sample___objects-2-finish live-sample___objects-4-finish
<section></section>
```

```css hidden live-sample___objects-1 live-sample___objects-2 live-sample___objects-3 live-sample___objects-4 live-sample___objects-1-finish live-sample___objects-2-finish live-sample___objects-4-finish
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

{{ EmbedLiveSample("objects-1", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Ausgabe sollte folgendermaßen aussehen:

{{ EmbedLiveSample("objects-1-finish", "100%", 80) }}

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

```js hidden live-sample___objects-1-finish
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

const catName = cat["name"];
cat.greeting();
cat.color = "black";

const section = document.querySelector("section");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

## Objektgrundlagen 2

In unserer nächsten Aufgabe möchten wir, dass Sie ein eigenes Objektliteral erstellen, um eine Ihrer Lieblingsbands darzustellen.

Um die Aufgabe abzuschließen:

1. Erstellen Sie ein Objektliteral namens `band`, das die folgenden Eigenschaften enthält:
   - `name`: Ein String, der den Namen der Band darstellt.
   - `nationality`: Ein String, der das Land darstellt, aus dem die Band stammt.
   - `genre`: Welche Art von Musik die Band spielt.
   - `members`: Eine Zahl, die die Anzahl der Mitglieder der Band darstellt.
   - `formed`: Eine Zahl, die das Jahr darstellt, in dem die Band gegründet wurde.
   - `split`: Eine Zahl, die das Jahr darstellt, in dem die Band sich aufgelöst hat, oder `false`, wenn sie noch zusammen sind.
   - `albums`: Ein Array, das die von der Band veröffentlichten Alben darstellt. Jedes Array-Element sollte ein Objekt enthalten, das die folgenden Mitglieder enthält:
     - `name`: Ein String, der den Namen des Albums darstellt.
     - `released`: Eine Zahl, die das Jahr darstellt, in dem das Album veröffentlicht wurde.
       > [!NOTE]
       > Fügen Sie mindestens zwei Alben im `albums` Array hinzu.
2. Schreiben Sie einen String in die Variable `bandInfo`, der eine kleine Biografie enthält, die ihren Namen, ihre Nationalität, ihre aktiven Jahre und ihren Stil sowie den Titel und das Veröffentlichungsdatum ihres ersten Albums beschreibt.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus (es wird noch nichts angezeigt):

{{ EmbedLiveSample("objects-2", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Ausgabe sollte in etwa so aussehen:

{{ EmbedLiveSample("objects-2-finish", "100%", 60) }}

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

```js hidden live-sample___objects-2-finish
let bandInfo;

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

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
```

</details>

## Objektgrundlagen 3

In dieser Aufgabe möchten wir, dass Sie zum `cat` Objektliteral aus den Objektgrundlagen 1 zurückkehren.

Um die Aufgabe abzuschließen:

1. Schreiben Sie die Methode `greeting()` so um, dass sie die Nachricht `"Hello, said Bertie the Cymric."` in die Browserkonsole ausgibt, jedoch auf eine Weise, die für _jedes_ Katzenobjekt derselben Struktur funktioniert, unabhängig von seinem Namen oder seiner Rasse.
2. Schreiben Sie Ihr eigenes Objekt namens `cat2`, das die gleiche Struktur und `greeting()` Methode hat, jedoch mit einem anderen `name`, `breed` und `color`.
3. Rufen Sie beide `greeting()` Methoden auf, um zu prüfen, ob sie geeignete Begrüßungen in die Konsole ausgeben.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus (es wird nichts angezeigt):

{{ EmbedLiveSample("objects-3", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Wir haben keinen fertigen Inhalt für diese Aufgabe bereitgestellt, da nichts in das DOM ausgegeben wird. Die Ausgabe wird alles in die Konsole geloggt.

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

```js hidden
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
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

cat.greeting();
cat2.greeting();
```

</details>

## Objektgrundlagen 4

In dem Code, den Sie für Aufgabe 3 geschrieben haben, sind die `greeting()` Methode und die Eigenschaften zweimal definiert, einmal für jede Katze. Dies ist nicht ideal: Es verstößt gegen ein Prinzip der Programmierung namens [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) oder "Don't Repeat Yourself" (Wiederholen Sie sich nicht). In dieser Aufgabe möchten wir, dass Sie den Code so verbessern, dass die Objekteigenschaften nur einmal definiert werden.

Um die Aufgabe abzuschließen:

1. Erstellen Sie eine JavaScript-Klasse, die Katzeninstanzen definiert
2. Verwenden Sie Ihre Klasse zusammen mit dem `new` Schlüsselwort, um die `cat` und `cat2` Instanzen zu erstellen.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus (es wird nichts angezeigt):

{{ EmbedLiveSample("objects-4", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Wir haben keinen fertigen Inhalt für diese Aufgabe bereitgestellt, da nichts in das DOM ausgegeben wird. Die Ausgabe wird alles in die Konsole geloggt.

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
