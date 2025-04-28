---
title: Klassen in JavaScript
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

Im letzten Artikel haben wir einige grundlegende Konzepte der objektorientierten Programmierung (OOP) vorgestellt und ein Beispiel besprochen, bei dem wir OOP-Prinzipien verwendet haben, um Professoren und Studenten in einer Schule zu modellieren.

Wir haben auch darüber gesprochen, wie es möglich ist, [Prototypen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes) und [Konstruktoren](/de/docs/Learn_web_development/Core/Scripting/Object_basics#introducing_constructors) zu verwenden, um ein solches Modell zu implementieren, und dass JavaScript auch Funktionen bietet, die eher den klassischen OOP-Konzepten entsprechen.

In diesem Artikel werden wir diese Funktionen durchgehen. Es ist wichtig zu beachten, dass die hier beschriebenen Funktionen keine neue Möglichkeit darstellen, Objekte zu kombinieren: Im Hintergrund verwenden sie immer noch Prototypen. Sie sind nur ein Mittel, um es leichter zu machen, eine Prototypenkette einzurichten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen von JavaScript
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Objektgrundlagen</a>) und objektorientierte JavaScript-Konzepte, die in den vorherigen Lektionen dieses Moduls behandelt wurden.
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

Sie können eine Klasse mit dem {{jsxref("Statements/class", "class")}} Schlüsselwort deklarieren. Hier ist eine Klassendeklaration für unser `Person` aus dem vorherigen Artikel:

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
- einem Konstruktor, der einen `name`-Parameter benötigt, der verwendet wird, um die `name`-Eigenschaft des neuen Objekts zu initialisieren
- einer `introduceSelf()`-Methode, die auf die Eigenschaften des Objekts mit `this` verweisen kann.

Die Deklaration `name;` ist optional: Sie könnten sie weglassen, und die Zeile `this.name = name;` im Konstruktor wird die `name`-Eigenschaft erstellen, bevor sie initialisiert wird. Allerdings kann es für Personen, die Ihren Code lesen, einfacher sein zu sehen, welche Eigenschaften Teil dieser Klasse sind, wenn die Eigenschaften explizit in der Klassendeklaration aufgelistet werden.

Sie könnten die Eigenschaft auch mit einem Standardwert initialisieren, wenn Sie sie deklarieren, mit einer Zeile wie `name = '';`.

Der Konstruktor wird mit dem {{jsxref("Classes/constructor", "constructor")}} Schlüsselwort definiert. Genau wie ein [Konstruktor außerhalb einer Klassendefinition](/de/docs/Learn_web_development/Core/Scripting/Object_basics#introducing_constructors) wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie in Ihrem Konstruktorcode auf `this` verweisen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Angesichts des oben stehenden Klassendeklarationscodes können Sie eine neue `Person`-Instanz wie folgt erstellen und verwenden:

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

Angesichts unserer `Person`-Klasse oben, definieren wir das `Professor`-Unterklasse.

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

Wir verwenden das {{jsxref("Classes/extends", "extends")}} Schlüsselwort, um zu sagen, dass diese Klasse von einer anderen Klasse erbt.

Die `Professor`-Klasse fügt eine neue Eigenschaft `teaches` hinzu, also deklarieren wir diese.

Da wir `teaches` setzen möchten, wenn ein neuer `Professor` erstellt wird, definieren wir einen Konstruktor, der `name` und `teaches` als Argumente nimmt. Das Erste, was dieser Konstruktor tut, ist, den Konstruktor der Superklasse mit {{jsxref("Operators/super", "super()")}} aufzurufen und den `name`-Parameter weiterzugeben. Der Konstruktor der Superklasse kümmert sich um das Setzen von `name`. Danach setzt der `Professor`-Konstruktor die `teaches`-Eigenschaft.

> [!NOTE]
> Wenn eine Unterklasse eigene Initialisierungen vornehmen muss, **muss** sie zuerst den Konstruktor der Superklasse mit `super()` aufrufen und alle Parameter übergeben, die der Konstruktor der Superklasse erwartet.

Wir haben auch die `introduceSelf()`-Methode der Superklasse überschrieben und eine neue Methode `grade()` hinzugefügt, um eine Arbeit zu bewerten (unser Professor ist nicht sehr gut und vergibt einfach zufällige Noten für Arbeiten).

Mit dieser Deklaration können wir nun Professoren erstellen und verwenden:

```js
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
```

## Kapselung

Schließlich wollen wir sehen, wie man Kapselung in JavaScript implementiert. Im letzten Artikel haben wir darüber gesprochen, dass wir die `year`-Eigenschaft von `Student` privat machen möchten, damit wir die Regeln über Bogenschießklassen ändern können, ohne dass dabei ein Code, der die `Student`-Klasse verwendet, kaputtgeht.

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
> Code, der in der Chrome-Konsole ausgeführt wird, kann auf private Eigenschaften außerhalb der Klasse zugreifen. Dies ist eine DevTools-spezifische Lockerung der JavaScript-Syntaxeinschränkung.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie sich diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Objektorientiertes JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript).

## Zusammenfassung

In diesem Artikel sind wir die wichtigsten Werkzeuge durchgegangen, die in JavaScript zum Schreiben objektorientierter Programme zur Verfügung stehen. Wir haben hier nicht alles abgedeckt, aber das sollte ausreichen, um Ihnen den Einstieg zu erleichtern. Unser [Artikel über Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist ein guter Ort, um mehr zu lernen.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
