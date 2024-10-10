---
title: Klassen in JavaScript
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
l10n:
  sourceCommit: 5266f2d3d58b6a07731e4c12c18108a3023fc960
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

Im [letzten Artikel](/de/docs/Learn/JavaScript/Objects/Object-oriented_programming) haben wir einige grundlegende Konzepte der objektorientierten Programmierung (OOP) eingeführt und ein Beispiel besprochen, bei dem wir OOP-Prinzipien verwendet haben, um Professoren und Studenten in einer Schule zu modellieren.

Wir haben auch darüber gesprochen, wie es möglich ist, [Prototypen](/de/docs/Learn/JavaScript/Objects/Object_prototypes) und [Konstruktoren](/de/docs/Learn/JavaScript/Objects/Basics#introducing_constructors) zu verwenden, um ein solches Modell zu implementieren, und dass JavaScript auch Funktionen bietet, die klassischen OOP-Konzepten näher kommen.

In diesem Artikel werden wir diese Funktionen durchgehen. Es ist wichtig zu beachten, dass die hier beschriebenen Funktionen keine neue Art der Kombination von Objekten darstellen: Unter der Haube verwenden sie immer noch Prototypen. Sie sind lediglich eine Möglichkeit, die Einrichtung von Prototypenketten zu erleichtern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML und CSS,
        Vertrautheit mit den Grundlagen von JavaScript (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >) und den Grundlagen der objektorientierten Programmierung in JavaScript (siehe
        <a href="/de/docs/Learn/JavaScript/Objects/Basics"
          >Einführung in Objekte</a
        >, <a href="/de/docs/Learn/JavaScript/Objects/Object_prototypes">Objektprototypen</a> und <a href="/de/docs/Learn/JavaScript/Objects/Object-oriented_programming">Objektorientierte Programmierung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie man die von JavaScript bereitgestellten Funktionen verwendet, um "klassische" objektorientierte Programme zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

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

- einer `name`-Eigenschaft.
- einem Konstruktor, der einen `name`-Parameter übernimmt, welcher verwendet wird, um die `name`-Eigenschaft des neuen Objekts zu initialisieren
- einer Methode `introduceSelf()`, die auf die Eigenschaften des Objekts mit `this` verweisen kann.

Die `name;`-Deklaration ist optional: Sie könnten sie weglassen, und die Zeile `this.name = name;` im Konstruktor wird die `name`-Eigenschaft vor der Initialisierung erstellen. Das explizite Auflisten von Eigenschaften in der Klassendeklaration kann es jedoch für Personen, die Ihren Code lesen, einfacher machen zu sehen, welche Eigenschaften Teil dieser Klasse sind.

Sie könnten die Eigenschaft auch mit einem Standardwert initialisieren, wenn Sie sie deklarieren, mit einer Zeile wie `name = '';`.

Der Konstruktor wird mit dem {{jsxref("Classes/constructor", "constructor")}}-Schlüsselwort definiert. Genau wie ein [Konstruktor außerhalb einer Klassendefinition](/de/docs/Learn/JavaScript/Objects/Basics#introducing_constructors) wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie in Ihrem Konstruktorcode auf `this` verweisen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Anhand des obigen Klassendeklarationscodes können Sie eine neue `Person`-Instanz wie folgt erstellen und verwenden:

```js
const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles
```

Beachten Sie, dass wir den Konstruktor mit dem Namen der Klasse, `Person` in diesem Beispiel, aufrufen.

### Konstruktoren auslassen

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

Basierend auf unserer `Person`-Klasse oben, definieren wir die Unterklasse `Professor`.

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

Wir verwenden das {{jsxref("Classes/extends", "extends")}}-Schlüsselwort, um anzugeben, dass diese Klasse von einer anderen Klasse erbt.

Die `Professor`-Klasse fügt eine neue Eigenschaft `teaches` hinzu, also deklarieren wir das.

Da wir `teaches` festlegen möchten, wenn ein neuer `Professor` erstellt wird, definieren wir einen Konstruktor, der `name` und `teaches` als Argumente annimmt. Das Erste, was dieser Konstruktor tut, ist, den Superklassen-Konstruktor mit {{jsxref("Operators/super", "super()")}} aufzurufen und dabei den `name`-Parameter weiterzugeben. Der Superklassen-Konstruktor kümmert sich um die Festlegung von `name`. Danach setzt der `Professor`-Konstruktor die `teaches`-Eigenschaft.

> [!NOTE]
> Wenn eine Unterklasse eine eigene Initialisierung durchführt, **muss** sie zuerst den Superklassen-Konstruktor mit `super()` aufrufen, um etwaige Parameter weiterzugeben, die der Superklassen-Konstruktor erwartet.

Wir haben auch die Methode `introduceSelf()` von der Superklasse überschrieben und eine neue Methode `grade()` hinzugefügt, um eine Arbeit zu bewerten (unser Professor ist nicht sehr gut und vergibt zufällige Noten für Arbeiten).

Mit dieser Deklaration können wir jetzt Professoren erstellen und verwenden:

```js
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
```

## Kapselung

Schließlich wollen wir untersuchen, wie die Kapselung in JavaScript implementiert werden kann. Im letzten Artikel haben wir besprochen, dass wir die Eigenschaft `year` der `Student`-Klasse privat machen möchten, damit wir die Regeln für Bogenschießkurse ändern können, ohne dass dabei Code bricht, der die `Student`-Klasse verwendet.

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

In dieser Klassendeklaration ist `#year` eine [private Daten-Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties). Wir können ein `Student`-Objekt erstellen und intern `#year` verwenden, aber wenn Code außerhalb des Objekts versucht, auf `#year` zuzugreifen, gibt der Browser einen Fehler aus:

```js
const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

summers.#year; // SyntaxError
```

> [!NOTE]
> Im Chrome-Konsolenmodus ausgeführter Code kann auf private Eigenschaften außerhalb der Klasse zugreifen. Dies ist eine nur auf DevTools beschränkte Lockerung der JavaScript-Syntax-Beschränkung.

Private Dateneigenschaften müssen in der Klassendeklaration deklariert werden, und ihre Namen beginnen mit `#`.

### Private Methoden

Man kann sowohl private Methoden als auch private Dateneigenschaften haben. Genau wie bei privaten Dateneigenschaften beginnen ihre Namen mit `#`, und sie können nur von den Methoden des Objekts selbst aufgerufen werden:

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

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Es gibt einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Objektorientiertes JavaScript](/de/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript).

## Zusammenfassung

In diesem Artikel haben wir die wichtigsten Werkzeuge durchgearbeitet, die JavaScript zur Verfügung stellt, um objektorientierte Programme zu schreiben. Wir haben nicht alles hier abgedeckt, aber das sollte ausreichen, um Ihnen den Einstieg zu erleichtern. Unser [Artikel über Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist eine gute Anlaufstelle, um mehr zu erfahren.
{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}
