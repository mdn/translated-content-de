---
title: Klassen in JavaScript
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

Im letzten Artikel haben wir einige grundlegende Konzepte der objektorientierten Programmierung (OOP) eingeführt und ein Beispiel besprochen, in dem wir OOP-Prinzipien genutzt haben, um Professoren und Studenten in einer Schule zu modellieren.

Wir haben auch darüber gesprochen, wie es möglich ist, [Prototypen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes) und [Konstruktoren](/de/docs/Learn_web_development/Core/Scripting/Object_basics#introducing_constructors) zu verwenden, um ein solches Modell zu implementieren, und dass JavaScript auch Funktionen bietet, die eher den klassischen OOP-Konzepten entsprechen.

In diesem Artikel werden wir diese Funktionen durchgehen. Es ist wichtig zu bedenken, dass die hier beschriebenen Funktionen keine neue Methode zur Kombination von Objekten darstellen: im Hintergrund verwenden sie immer noch Prototypen. Sie sind lediglich eine Möglichkeit, das Einrichten einer Prototyp-Kette zu erleichtern.

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
          <li>Klassen in JavaScript erstellen.</li>
          <li>Konstruktoren in JavaScript erstellen.</li>
          <li>Vererbung und Kapselung in JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Klassen und Konstruktoren

Sie können eine Klasse mit dem Schlüsselwort {{jsxref("Statements/class", "class")}} deklarieren. Hier ist eine Klassendeklaration für unsere `Person` aus dem vorherigen Artikel:

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
- einem Konstruktor, der einen `name`-Parameter akzeptiert, der verwendet wird, um die `name`-Eigenschaft des neuen Objekts zu initialisieren.
- einer `introduceSelf()`-Methode, die auf die Eigenschaften des Objekts mit `this` verweisen kann.

Die Erklärung `name;` ist optional: Sie können sie weglassen, und die Zeile `this.name = name;` im Konstruktor wird die `name`-Eigenschaft erstellen, bevor sie initialisiert wird. Das explizite Auflisten von Eigenschaften in der Klassendeklaration kann es jedoch einfacher machen, die Eigenschaften zu erkennen, die Teil dieser Klasse sind.

Sie könnten die Eigenschaft auch mit einem Standardwert initialisieren, wenn Sie sie deklarieren, mit einer Zeile wie `name = '';`.

Der Konstruktor wird mit dem Schlüsselwort {{jsxref("Classes/constructor", "constructor")}} definiert. Genau wie ein [Konstruktor außerhalb einer Klassendefinition](/de/docs/Learn_web_development/Core/Scripting/Object_basics#introducing_constructors) wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie im Konstruktorcode auf `this` verweisen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Angesichts des obigen Klassendeklarationscodes können Sie eine neue `Person`-Instanz wie folgt erstellen und verwenden:

```js
const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles
```

Beachten Sie, dass wir den Konstruktor mit dem Namen der Klasse aufrufen, in diesem Beispiel `Person`.

### Konstruktoren weglassen

Wenn Sie keine spezielle Initialisierung benötigen, können Sie den Konstruktor weglassen, und es wird ein Standardkonstruktor für Sie generiert:

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

Angesichts unserer oben beschriebenen `Person`-Klasse, lassen Sie uns die `Professor`-Unterklasse definieren.

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

Wir verwenden das Schlüsselwort {{jsxref("Classes/extends", "extends")}}, um auszudrücken, dass diese Klasse von einer anderen Klasse erbt.

Die `Professor`-Klasse fügt eine neue Eigenschaft `teaches` hinzu, daher deklarieren wir diese.

Da wir `teaches` setzen möchten, wenn ein neuer `Professor` erstellt wird, definieren wir einen Konstruktor, der `name` und `teaches` als Argumente nimmt. Das erste, was dieser Konstruktor tut, ist den Konstruktor der Superklasse mit {{jsxref("Operators/super", "super()")}} aufzurufen und den `name`-Parameter weiterzugeben. Der Konstruktor der Superklasse kümmert sich um das Setzen von `name`. Danach setzt der `Professor`-Konstruktor die `teaches`-Eigenschaft.

> [!NOTE]
> Wenn eine Unterklasse ihre eigene Initialisierung durchzuführen hat, **muss** sie zuerst den Konstruktor der Superklasse mit `super()` aufrufen und dabei alle Parameter übergeben, die der Konstruktor der Superklasse erwartet.

Wir haben auch die Methode `introduceSelf()` der Superklasse überschrieben und eine neue Methode `grade()` hinzugefügt, um eine Arbeit zu benoten (unser Professor ist nicht sehr gut und weist den Arbeiten zufällige Noten zu).

Mit dieser Deklaration können wir jetzt Professoren erstellen und verwenden:

```js
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
```

## Kapselung

Schließlich wollen wir sehen, wie man Kapselung in JavaScript implementiert. Im letzten Artikel haben wir diskutiert, wie wir die Eigenschaft `year` von `Student` privat machen möchten, damit wir die Regeln für Bogenschießenklassen ändern können, ohne den Code zu brechen, der die `Student`-Klasse verwendet.

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

In dieser Klassendeklaration ist `#year` ein [privates Feld](/de/docs/Web/JavaScript/Reference/Classes/Private_elements). Wir können ein `Student`-Objekt konstruieren, und es kann `#year` intern verwenden, aber wenn Code außerhalb des Objekts versucht, auf `#year` zuzugreifen, löst der Browser einen Fehler aus:

```js
const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

summers.#year; // SyntaxError
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann auf private Elemente außerhalb der Klasse zugreifen. Dies ist eine Lockerung der JavaScript-Syntaxbeschränkung, die nur in den DevTools gilt.

Private Felder müssen in der Klassendeklaration angegeben werden und ihre Namen beginnen mit `#`.

### Private Methoden

Sie können sowohl private Methoden als auch private Felder haben. Genau wie private Felder beginnen die Namen privater Methoden mit `#`, und sie können nur von den eigenen Methoden des Objekts aufgerufen werden:

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Objektorientiertes JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript).

## Zusammenfassung

In diesem Artikel haben wir die wichtigsten Werkzeuge durchgearbeitet, die in JavaScript zur Verfügung stehen, um objektorientierte Programme zu schreiben. Wir haben hier nicht alles abgedeckt, aber das sollte ausreichen, um Ihnen einen Start zu ermöglichen. Unser [Artikel über Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist ein guter Ort, um mehr zu erfahren.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
