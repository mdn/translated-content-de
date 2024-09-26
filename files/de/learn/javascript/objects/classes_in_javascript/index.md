---
title: Klassen in JavaScript
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

Im [letzten Artikel](/de/docs/Learn/JavaScript/Objects/Object-oriented_programming) führten wir einige grundlegende Konzepte der objektorientierten Programmierung (OOP) ein und diskutierten ein Beispiel, bei dem wir OOP-Prinzipien verwendeten, um Professoren und Studenten in einer Schule zu modellieren.

Wir sprachen auch darüber, wie es möglich ist, [Prototypen](/de/docs/Learn/JavaScript/Objects/Object_prototypes) und [Konstruktoren](/de/docs/Learn/JavaScript/Objects/Basics#introducing_constructors) zu verwenden, um ein solches Modell zu implementieren, und dass JavaScript auch Funktionen bietet, die den klassischen OOP-Konzepten näher kommen.

In diesem Artikel werden wir diese Funktionen durchgehen. Es ist wichtig zu beachten, dass die hier beschriebenen Funktionen keine neue Art sind, Objekte zu kombinieren: im Hintergrund verwenden sie immer noch Prototypen. Sie sind nur eine Möglichkeit, es einfacher zu machen, eine Prototypenkette einzurichten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS,
        Vertrautheit mit den Grundlagen von JavaScript (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >) und OOJS-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/Objects/Basics"
          >Einführung in Objekte</a
        >, <a href="/de/docs/Learn/JavaScript/Objects/Object_prototypes">Objektprototypen</a> und <a href="/de/docs/Learn/JavaScript/Objects/Object-oriented_programming">Objektorientierte Programmierung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie die in JavaScript bereitgestellten Funktionen verwendet werden, um "klassische" objektorientierte Programme zu implementieren.
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

Dies deklariert eine Klasse namens `Person`, mit:

- einer `name` Eigenschaft.
- einem Konstruktor, der einen `name` Parameter übernimmt, der verwendet wird, um die `name` Eigenschaft des neuen Objekts zu initialisieren.
- einer `introduceSelf()` Methode, die auf die Eigenschaften des Objekts über `this` zugreifen kann.

Die `name;` Deklaration ist optional: Sie könnten sie weglassen, und die Zeile `this.name = name;` im Konstruktor wird die `name` Eigenschaft vor der Initialisierung erstellen. Das explizite Auflisten von Eigenschaften in der Klassendeklaration kann jedoch dazu beitragen, dass Personen, die Ihren Code lesen, leichter erkennen, welche Eigenschaften Teil dieser Klasse sind.

Sie könnten die Eigenschaft auch mit einem Standardwert initialisieren, wenn Sie sie deklarieren, mit einer Zeile wie `name = '';`.

Der Konstruktor wird mit dem {{jsxref("Classes/constructor", "constructor")}}-Schlüsselwort definiert. Genau wie ein [Konstruktor außerhalb einer Klassendefinition](/de/docs/Learn/JavaScript/Objects/Basics#introducing_constructors), wird er:

- ein neues Objekt erstellen.
- `this` an das neue Objekt binden, sodass Sie in Ihrem Konstruktorcode auf `this` verweisen können.
- den Code im Konstruktor ausführen.
- das neue Objekt zurückgeben.

Angesichts des obigen Klassendeklarationscodes, können Sie eine neue `Person`-Instanz erstellen und verwenden wie folgt:

```js
const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles
```

Beachten Sie, dass wir den Konstruktor mit dem Namen der Klasse aufrufen, `Person` in diesem Beispiel.

### Konstruktoren weglassen

Wenn Sie keine spezielle Initialisierung vornehmen müssen, können Sie den Konstruktor weglassen und ein Standardkonstruktor wird für Sie generiert:

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

Basierend auf unserer `Person`-Klasse oben, definieren wir die `Professor`-Unterklasse.

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

Die `Professor`-Klasse fügt eine neue Eigenschaft `teaches` hinzu, also deklarieren wir diese.

Da wir `teaches` festlegen möchten, wenn ein neuer `Professor` erstellt wird, definieren wir einen Konstruktor, der die `name` und `teaches` als Argumente übernimmt. Das Erste, was dieser Konstruktor tut, ist, den Superklassen-Konstruktor mit {{jsxref("Operators/super", "super()")}} aufzurufen und den `name`-Parameter nach oben zu übergeben. Der Superklassen-Konstruktor kümmert sich darum, `name` festzulegen. Danach legt der `Professor`-Konstruktor die `teaches`-Eigenschaft fest.

> [!NOTE]
> Wenn eine Unterklasse eine eigene Initialisierung vornehmen muss, **muss** sie zuerst den Superklassen-Konstruktor mit `super()` aufrufen und dabei alle Parameter übergeben, die der Superklassen-Konstruktor erwartet.

Wir haben auch die `introduceSelf()` Methode von der Superklasse überschrieben und eine neue Methode `grade()` hinzugefügt, um eine Arbeit zu bewerten (unser Professor ist nicht sehr gut und vergibt einfach zufällige Noten für Arbeiten).

Mit dieser Deklaration können wir jetzt Professoren erstellen und verwenden:

```js
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
```

## Kapselung

Zum Schluss sehen wir, wie man Kapselung in JavaScript umsetzt. Im letzten Artikel diskutierten wir, wie wir möchten, dass die `year`-Eigenschaft von `Student` privat ist, um die Regeln für Bogenschießenklassen ändern zu können, ohne dass Code, der die `Student`-Klasse nutzt, kaputt geht.

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

In dieser Klassendeklaration ist `#year` eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties). Wir können ein `Student`-Objekt konstruieren, und es kann intern `#year` verwenden, aber wenn Code außerhalb der Klasse versucht, auf `#year` zuzugreifen, wirft der Browser einen Fehler aus:

```js
const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

summers.#year; // SyntaxError
```

> [!NOTE]
> Code, der in der Chrome Konsole ausgeführt wird, kann private Eigenschaften außerhalb der Klasse zugreifen. Dies ist eine nur DevTools betreffende Lockerung der JavaScript-Syntaxbeschränkung.

Private Daten-Eigenschaften müssen in der Klassendeklaration deklariert werden, und ihre Namen beginnen mit `#`.

### Private Methoden

Sie können sowohl private Methoden als auch private Dateneigenschaften haben. Genau wie private Dateneigenschaften beginnen ihre Namen mit `#` und sie können nur von den eigenen Methoden des Objekts aufgerufen werden:

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Objektorientiertes JavaScript](/de/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript).

## Zusammenfassung

In diesem Artikel haben wir die wichtigsten Werkzeuge durchgearbeitet, die in JavaScript für das Schreiben von objektorientierten Programmen verfügbar sind. Wir haben hier nicht alles behandelt, aber dies sollte ausreichen, um Ihnen den Einstieg zu erleichtern. Unser [Artikel über Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist ein guter Ort, um mehr zu erfahren.
{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}