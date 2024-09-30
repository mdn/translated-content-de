---
title: Klassen in JavaScript
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

Im [letzten Artikel](/de/docs/Learn/JavaScript/Objects/Object-oriented_programming) haben wir einige grundlegende Konzepte der objektorientierten Programmierung (OOP) eingeführt und ein Beispiel diskutiert, in dem wir OOP-Prinzipien verwendeten, um Professoren und Studenten in einer Schule zu modellieren.

Wir haben auch darüber gesprochen, wie es möglich ist, [Prototypen](/de/docs/Learn/JavaScript/Objects/Object_prototypes) und [Konstruktoren](/de/docs/Learn/JavaScript/Objects/Basics#introducing_constructors) zu verwenden, um ein solches Modell zu implementieren, und dass JavaScript auch Funktionen bietet, die den klassischen OOP-Konzepten näher kommen.

In diesem Artikel werden wir diese Funktionen durchgehen. Es ist wichtig zu beachten, dass die hier beschriebenen Funktionen keine neue Art der Objekteverknüpfung darstellen: Im Hintergrund verwenden sie immer noch Prototypen. Sie sind nur eine Möglichkeit, das Einrichten einer Prototypenkette zu vereinfachen.

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
        >) und den Grundlagen von OOJS (siehe
        <a href="/de/docs/Learn/JavaScript/Objects/Basics"
          >Einführung in Objekte</a
        >, <a href="/de/docs/Learn/JavaScript/Objects/Object_prototypes">Objektprototypen</a> und <a href="/de/docs/Learn/JavaScript/Objects/Object-oriented_programming">Objektorientierte Programmierung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Zu verstehen, wie man die von JavaScript bereitgestellten Funktionen verwendet, um "klassische" objektorientierte Programme zu implementieren.
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
- einem Konstruktor, der einen `name`-Parameter entgegennimmt, der verwendet wird, um die `name`-Eigenschaft des neuen Objekts zu initialisieren
- einer `introduceSelf()`-Methode, die sich auf die Eigenschaften des Objekts mit `this` beziehen kann.

Die `name;`-Deklaration ist optional: Sie könnten sie weglassen, und die Zeile `this.name = name;` im Konstruktor wird die `name`-Eigenschaft erstellen, bevor sie initialisiert wird. Das explizite Auflisten von Eigenschaften in der Klassendeklaration kann jedoch für Personen, die Ihren Code lesen, erleichtern, zu sehen, welche Eigenschaften Teil dieser Klasse sind.

Sie könnten die Eigenschaft auch mit einem Standardwert initialisieren, wenn Sie sie deklarieren, mit einer Zeile wie `name = '';`.

Der Konstruktor wird mit dem {{jsxref("Classes/constructor", "constructor")}}-Schlüsselwort definiert. Genau wie ein [Konstruktor außerhalb einer Klassendefinition](/de/docs/Learn/JavaScript/Objects/Basics#introducing_constructors), wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie `this` in Ihrem Konstruktorcode referenzieren können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Angesichts des obigen Klassendeklarationscodes können Sie eine neue `Person`-Instanz so erstellen und verwenden:

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

Angesichts unserer `Person`-Klasse oben, lassen Sie uns die `Professor`-Unterklasse definieren.

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

Die `Professor`-Klasse fügt eine neue Eigenschaft `teaches` hinzu, deshalb deklarieren wir diese.

Da wir `teaches` setzen möchten, wenn ein neuer `Professor` erstellt wird, definieren wir einen Konstruktor, der `name` und `teaches` als Argumente entgegennimmt. Das Erste, was dieser Konstruktor tut, ist, den Superklassen-Konstruktor mit {{jsxref("Operators/super", "super()")}} aufzurufen und den `name`-Parameter nach oben zu übergeben. Der Superklassen-Konstruktor kümmert sich um das Setzen von `name`. Danach setzt der `Professor`-Konstruktor die `teaches`-Eigenschaft.

> [!NOTE]
> Wenn eine Unterklasse irgendeine eigene Initialisierung durchführt, **muss** sie zuerst den Superklassen-Konstruktor mit `super()` aufrufen und alle Parameter übergeben, die der Superklassen-Konstruktor erwartet.

Wir haben auch die `introduceSelf()`-Methode von der Superklasse überschrieben und eine neue Methode `grade()` hinzugefügt, um ein Papier zu benoten (unser Professor ist nicht sehr gut und weist einfach zufällige Noten zu).

Mit dieser Deklaration können wir jetzt Professoren erstellen und verwenden:

```js
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
```

## Kapselung

Schließlich wollen wir sehen, wie man in JavaScript eine Kapselung implementiert. Im letzten Artikel haben wir besprochen, wie wir die `year`-Eigenschaft von `Student` privat machen wollen, damit wir die Regeln zu den Bogenschießkursen ändern können, ohne dass der Code, der die `Student`-Klasse verwendet, beschädigt wird.

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

In dieser Klassendeklaration ist `#year` eine [private Dateneigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties). Wir können ein `Student`-Objekt konstruieren, und es kann `#year` intern verwenden, aber wenn der Code außerhalb des Objekts versucht, auf `#year` zuzugreifen, wirft der Browser einen Fehler:

```js
const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

summers.#year; // SyntaxError
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann private Eigenschaften außerhalb der Klasse aufrufen. Dies ist eine alleinige Lockerung der JavaScript-Syntaxbeschränkung in den Entwickler-Tools.

Private Dateneigenschaften müssen in der Klassendeklaration deklariert werden und ihre Namen beginnen mit `#`.

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

In diesem Artikel haben wir die wichtigsten Werkzeuge besprochen, die in JavaScript zum Schreiben objektorientierter Programme verfügbar sind. Wir haben nicht alles abgedeckt, aber dies sollte Ihnen den Einstieg erleichtern. Unser [Artikel zu Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist ein guter Ort, um mehr zu erfahren.
{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}
