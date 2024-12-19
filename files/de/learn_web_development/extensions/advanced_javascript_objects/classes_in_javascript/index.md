---
title: Klassen in JavaScript
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

Im letzten Artikel haben wir einige grundlegende Konzepte der objektorientierten Programmierung (OOP) eingeführt und ein Beispiel diskutiert, bei dem wir OOP-Prinzipien verwendet haben, um Professoren und Studenten in einer Schule zu modellieren.

Wir haben auch darüber gesprochen, wie es möglich ist, [Prototypen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes) und [Konstruktoren](/de/docs/Learn_web_development/Core/Scripting/Object_basics#introducing_constructors) zu verwenden, um ein solches Modell zu implementieren, und dass JavaScript auch Funktionen bietet, die klassischen OOP-Konzepten näher kommen.

In diesem Artikel werden wir diese Funktionen durchgehen. Es ist wichtig zu beachten, dass die hier beschriebenen Funktionen keine neue Art der Kombination von Objekten darstellen: unter der Oberfläche verwenden sie immer noch Prototypen. Sie sind einfach eine Möglichkeit, es einfacher zu machen, eine Prototypenkette einzurichten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen von JavaScript
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Objektgrundlagen</a>) und objektorientierten JavaScript-Konzepten, die in den vorherigen Lektionen in diesem Modul behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erstellen von Klassen in JavaScript.</li>
          <li>Erstellen von Konstruktoren in JavaScript.</li>
          <li>Vererbung und Kapselung in JavaScript.</li>
        </ul>
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
- einem Konstruktor, der einen `name`-Parameter nimmt, um die `name`-Eigenschaft des neuen Objekts zu initialisieren.
- einer `introduceSelf()`-Methode, die auf die Eigenschaften des Objekts mithilfe von `this` verweisen kann.

Die `name;`-Deklaration ist optional: Sie könnten sie weglassen, und die Zeile `this.name = name;` im Konstruktor wird die `name`-Eigenschaft vor ihrer Initialisierung erstellen. Allerdings könnte das explizite Auflisten der Eigenschaften in der Klassendeklaration es für Personen, die Ihren Code lesen, erleichtern, zu sehen, welche Eigenschaften Teil dieser Klasse sind.

Sie könnten die Eigenschaft auch auf einen Standardwert initialisieren, wenn Sie sie deklarieren, mit einer Zeile wie `name = '';`.

Der Konstruktor wird mit dem {{jsxref("Classes/constructor", "constructor")}}-Schlüsselwort definiert. Genau wie ein [Konstruktor außerhalb einer Klassendefinition](/de/docs/Learn_web_development/Core/Scripting/Object_basics#introducing_constructors) wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie in Ihrem Konstruktionscode auf `this` verweisen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Angesichts des obigen Klassendeklarationscodes können Sie eine neue `Person`-Instanz so erstellen und verwenden:

```js
const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles
```

Beachten Sie, dass wir den Konstruktor mit dem Namen der Klasse, hier `Person`, aufrufen.

### Konstruktoren weglassen

Wenn Sie keine spezielle Initialisierung durchführen müssen, können Sie den Konstruktor weglassen, und ein Standardkonstruktor wird für Sie generiert:

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

Angenommen, wir haben unsere `Person`-Klasse oben definiert, lassen Sie uns die `Professor`-Unterklasse definieren.

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

Die Klasse `Professor` fügt eine neue Eigenschaft `teaches` hinzu, also deklarieren wir diese.

Da wir `teaches` setzen wollen, wenn ein neuer `Professor` erstellt wird, definieren wir einen Konstruktor, der `name` und `teaches` als Argumente nimmt. Das Erste, was dieser Konstruktor tut, ist, den Superklassen-Konstruktor mit {{jsxref("Operators/super", "super()")}} aufzurufen und den `name`-Parameter nach oben zu reichen. Der Superklassen-Konstruktor kümmert sich um das Setzen von `name`. Danach setzt der `Professor`-Konstruktor die `teaches`-Eigenschaft.

> [!NOTE]
> Wenn eine Unterklasse eigene Initialisierungen durchzuführen hat, **muss** sie zuerst den Superklassen-Konstruktor mit `super()` aufrufen und dabei alle Parameter übergeben, die der Superklassen-Konstruktor erwartet.

Wir haben auch die `introduceSelf()`-Methode aus der Superklasse überschrieben und eine neue Methode `grade()` hinzugefügt, um eine Arbeit zu benoten (unser Professor ist nicht besonders gut und vergibt einfach zufällige Noten für Arbeiten).

Mit dieser Deklaration können wir nun Professoren erstellen und verwenden:

```js
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
```

## Kapselung

Schließlich wollen wir sehen, wie man Kapselung in JavaScript implementiert. Im letzten Artikel haben wir diskutiert, wie wir die `year`-Eigenschaft von `Student` privat machen könnten, damit wir die Regeln für Bogenschießkurse ändern können, ohne dass bestehender Code, der die `Student`-Klasse verwendet, kaputtgeht.

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
> Code, der in der Chrome-Konsole ausgeführt wird, kann auf private Eigenschaften außerhalb der Klasse zugreifen. Dies ist eine nur für DevTools geltende Lockerung der JavaScript-Syntaxeinschränkung.

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

Sie haben das Ende dieses Artikels erreicht. Können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests durchführen, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Objektorientiertes JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills:_Object-oriented_JavaScript).

## Zusammenfassung

In diesem Artikel haben wir die wichtigsten Werkzeuge durchgearbeitet, die in JavaScript für das Schreiben objektorientierter Programme zur Verfügung stehen. Wir haben hier nicht alles abgedeckt, aber dies sollte ausreichen, um Ihnen den Einstieg zu erleichtern. Unser [Artikel über Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist ein guter Ausgangspunkt, um mehr zu lernen.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
