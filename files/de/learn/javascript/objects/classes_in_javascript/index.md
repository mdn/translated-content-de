---
title: Klassen in JavaScript
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

Im [letzten Artikel](/de/docs/Learn/JavaScript/Objects/Object-oriented_programming) haben wir einige grundlegende Konzepte der objektorientierten Programmierung (OOP) eingeführt und ein Beispiel besprochen, bei dem wir OOP-Prinzipien verwenden, um Professoren und Studenten in einer Schule zu modellieren.

Wir haben auch darüber gesprochen, wie es möglich ist, [Prototypen](/de/docs/Learn/JavaScript/Objects/Object_prototypes) und [Konstruktoren](/de/docs/Learn/JavaScript/Objects/Basics#introducing_constructors) zu verwenden, um ein solches Modell zu implementieren, und dass JavaScript auch Funktionen bietet, die klassischen OOP-Konzepten näher kommen.

In diesem Artikel werden wir diese Funktionen durchgehen. Es ist wichtig zu beachten, dass die hier beschriebenen Funktionen kein neuer Weg zur Kombination von Objekten sind: Im Hintergrund verwenden sie immer noch Prototypen. Sie sind nur eine Möglichkeit, die Erstellung einer Prototypenkette zu erleichtern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS,
        Vertrautheit mit den JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >) und OOJS-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/Objects/Basics"
          >Einführung in Objekte</a
        >, <a href="/de/docs/Learn/JavaScript/Objects/Object_prototypes">Objektprototypen</a>, und <a href="/de/docs/Learn/JavaScript/Objects/Object-oriented_programming">Objektorientierte Programmierung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man die von JavaScript bereitgestellten Funktionen verwendet, um "klassische" objektorientierte Programme zu implementieren.
      </td>
    </tr>
  </tbody>
<table>

## Klassen und Konstruktoren

Sie können eine Klasse mit dem {{jsxref("Statements/class", "class")}}-Schlüsselwort deklarieren. Hier ist eine Klassendeklaration für unsere `Person` aus dem vorherigen Artikel:

```js
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
```

Dies deklariert eine Klasse namens `Person` mit:

- einer `name`-Eigenschaft.
- einem Konstruktor, der einen `name`-Parameter übernimmt, der zur Initialisierung der `name`-Eigenschaft des neuen Objekts verwendet wird
- einer Methode `introduceSelf()`, die auf die Eigenschaften des Objekts mit `this` verweisen kann.

Die `name;`-Deklaration ist optional: Sie könnten sie weglassen, und die Zeile `this.name = name;` im Konstruktor würde die `name`-Eigenschaft erstellen, bevor sie initialisiert wird. Das explizite Auflisten der Eigenschaften in der Klassendeklaration könnte es jedoch den Lesern Ihres Codes erleichtern, zu sehen, welche Eigenschaften Teil dieser Klasse sind.

Sie könnten die Eigenschaft auch mit einem Standardwert deklarieren, mit einer Zeile wie `name = '';`.

Der Konstruktor wird mit dem {{jsxref("Classes/constructor", "constructor")}}-Schlüsselwort definiert. Genau wie ein [Konstruktor außerhalb einer Klassendefinition](/de/docs/Learn/JavaScript/Objects/Basics#introducing_constructors) wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie in Ihrem Konstruktorkodex auf `this` verweisen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Mit dem obigen Klassendeklarationscode können Sie eine neue `Person`-Instanz erstellen und verwenden:

```js
const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles
```

Beachten Sie, dass wir den Konstruktor mit dem Namen der Klasse aufrufen, in diesem Beispiel `Person`.

### Konstruktoren weglassen

Wenn Sie keine spezielle Initialisierung benötigen, können Sie den Konstruktor weglassen, und ein Standardkonstruktor wird für Sie generiert:

```js
class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'
```

## Vererbung

Gegeben unserer `Person`-Klasse oben, definieren wir jetzt die `Professor`-Unterklasse.

```js
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}
```

Wir verwenden das {{jsxref("Classes/extends", "extends")}}-Schlüsselwort, um zu sagen, dass diese Klasse von einer anderen Klasse erbt.

Die `Professor`-Klasse fügt eine neue Eigenschaft `teaches` hinzu, daher deklarieren wir diese.

Da wir `teaches` setzen möchten, wenn ein neuer `Professor` erstellt wird, definieren wir einen Konstruktor, der `name` und `teaches` als Argumente übernimmt. Das Erste, was dieser Konstruktor tut, ist, den Superklassen-Konstruktor mit {{jsxref("Operators/super", "super()")}} aufzurufen und den `name`-Parameter weiterzugeben. Der Superklassen-Konstruktor kümmert sich darum, `name` zu setzen. Danach setzt der `Professor`-Konstruktor die `teaches`-Eigenschaft.

> [!NOTE]
> Wenn eine Unterklasse eine eigene Initialisierung durchführen muss, **muss** sie zuerst den Superklassen-Konstruktor mit `super()` aufrufen und alle Parameter weitergeben, die der Superklassen-Konstruktor erwartet.

Wir haben auch die `introduceSelf()`-Methode aus der Superklasse überschrieben und eine neue Methode `grade()` hinzugefügt, um eine Arbeit zu bewerten (unser Professor ist nicht sehr gut und vergibt einfach zufällige Noten).

Mit dieser Deklaration können wir nun Professoren erstellen und verwenden:

```js
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
```

## Kapselung

Schließlich wollen wir sehen, wie man Kapselung in JavaScript implementiert. Im letzten Artikel haben wir besprochen, dass wir die `year`-Eigenschaft von `Student` privat machen möchten, sodass wir die Regeln für Bogenschießklassen ändern können, ohne dass Code, der die `Student`-Klasse verwendet, beschädigt wird.

Hier ist eine Deklaration der `Student`-Klasse, die genau das tut:

```js
class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}
```

In dieser Klassendeklaration ist `#year` eine [private Dateneigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties). Wir können ein `Student`-Objekt konstruieren, und es kann `#year` intern verwenden, aber wenn Code außerhalb des Objekts versucht, auf `#year` zuzugreifen, wirft der Browser einen Fehler:

```js
const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

summers.#year; // SyntaxError
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann private Eigenschaften außerhalb der Klasse zugreifen. Dies ist eine DevTools-exklusive Lockerung der JavaScript-Syntaxbeschränkung.

Private Dateneigenschaften müssen in der Klassendeklaration deklariert werden, und ihre Namen beginnen mit `#`.

### Private Methoden

Sie können sowohl private Methoden als auch private Dateneigenschaften haben. Genau wie private Dateneigenschaften beginnen ihre Namen mit `#`, und sie können nur von den eigenen Methoden des Objekts aufgerufen werden:

```js
class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

myExample.#somePrivateMethod(); // SyntaxError
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Objektorientiertes JavaScript](/de/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript).

## Zusammenfassung

In diesem Artikel haben wir die wichtigsten Werkzeuge durchgegangen, die in JavaScript zum Schreiben objektorientierter Programme verfügbar sind. Wir haben hier nicht alles abgedeckt, aber das sollte ausreichen, um Ihnen den Einstieg zu erleichtern. Unser [Artikel über Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist ein guter Ort, um mehr zu lernen.
{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}
