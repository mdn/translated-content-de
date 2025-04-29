---
title: Klassen in JavaScript
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

Im letzten Artikel haben wir einige grundlegende Konzepte der objektorientierten Programmierung (OOP) eingeführt und ein Beispiel besprochen, bei dem wir OOP-Prinzipien benutzt haben, um Professoren und Studenten in einer Schule zu modellieren.

Wir haben auch darüber gesprochen, wie es möglich ist, [Prototypen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes) und [Konstruktoren](/de/docs/Learn_web_development/Core/Scripting/Object_basics#introducing_constructors) zu verwenden, um ein solches Modell zu implementieren, und dass JavaScript ebenfalls Funktionen bietet, die enger mit klassischen OOP-Konzepten übereinstimmen.

In diesem Artikel werden wir diese Funktionen durchgehen. Es ist wichtig zu beachten, dass die hier beschriebenen Funktionen keine neue Methode zur Kombination von Objekten darstellen: Im Hintergrund verwenden sie immer noch Prototypen. Sie sind lediglich eine Möglichkeit, eine Prototypen-Kette leichter einzurichten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen von JavaScript
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von Objekten</a>) und in vorherigen Lektionen dieses Moduls behandelte Konzepte der objektorientierten JavaScript-Programmierung.
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

Sie können eine Klasse mit dem {{jsxref("Statements/class", "class")}}-Schlüsselwort deklarieren. Hier ist eine Klassendeklaration für unseren `Person` aus dem vorherigen Artikel:

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

Dadurch wird eine Klasse namens `Person` deklariert, mit:

- einer `name`-Eigenschaft.
- einem Konstruktor, der einen `name`-Parameter übernimmt, welcher zur Initialisierung der `name`-Eigenschaft des neuen Objekts verwendet wird
- einer `introduceSelf()`-Methode, die über `this` auf die Eigenschaften des Objekts verweisen kann.

Die Deklaration `name;` ist optional: Sie könnten sie weglassen, und die Zeile `this.name = name;` im Konstruktor wird die `name`-Eigenschaft erzeugen, bevor sie initialisiert wird. Allerdings könnte das explizite Auflisten von Eigenschaften in der Klassendeklaration es Menschen, die Ihren Code lesen, erleichtern zu erkennen, welche Eigenschaften Teil dieser Klasse sind.

Sie könnten die Eigenschaft auch auf einen Standardwert initialisieren, wenn Sie sie deklarieren, mit einer Zeile wie `name = '';`.

Der Konstruktor wird mit dem {{jsxref("Classes/constructor", "constructor")}}-Schlüsselwort definiert. Genau wie ein [Konstruktor außerhalb einer Klassendefinition](/de/docs/Learn_web_development/Core/Scripting/Object_basics#introducing_constructors) wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie in Ihrem Konstruktor-Code auf `this` verweisen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Angesichts des obigen Klassendeklaration-Codes können Sie eine neue `Person`-Instanz wie folgt erstellen und verwenden:

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

Angesichts unserer `Person`-Klasse oben, definieren wir die `Professor`-Unterklasse.

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

Wir verwenden das Schlüsselwort {{jsxref("Classes/extends", "extends")}}, um zu sagen, dass diese Klasse von einer anderen Klasse erbt.

Die `Professor`-Klasse fügt eine neue Eigenschaft `teaches` hinzu, also deklarieren wir diese.

Da wir `teaches` setzen wollen, wenn ein neuer `Professor` erstellt wird, definieren wir einen Konstruktor, der `name` und `teaches` als Argumente nimmt. Das erste, was dieser Konstruktor tut, ist, den Oberklassenkonstruktor mit {{jsxref("Operators/super", "super()")}} aufzurufen und den `name`-Parameter nach oben zu übergeben. Der Oberklassenkonstruktor kümmert sich um das Setzen von `name`. Danach setzt der `Professor`-Konstruktor die `teaches`-Eigenschaft.

> [!NOTE]
> Wenn eine Unterklasse eigene Initialisierung durchführt, **muss** sie zuerst den Oberklassenkonstruktor mit `super()` aufrufen und die Parameter übergeben, die der Oberklassenkonstruktor erwartet.

Wir haben auch die `introduceSelf()`-Methode der Oberklasse überschrieben und eine neue Methode `grade()` hinzugefügt, um ein Papier zu benoten (unser Professor ist nicht sehr gut und vergibt einfach zufällige Noten für Arbeiten).

Mit dieser Deklaration können wir jetzt Professoren erstellen und verwenden:

```js
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
```

## Kapselung

Schließlich sehen wir uns an, wie man Kapselung in JavaScript implementiert. Im letzten Artikel haben wir besprochen, wie wir die `year`-Eigenschaft von `Student` privat machen möchten, sodass wir die Regeln für Bogenschießkurse ändern können, ohne dass wir Code, der die `Student`-Klasse verwendet, ändern müssen.

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
> Code, der in der Chrome-Konsole ausgeführt wird, kann auf private Eigenschaften außerhalb der Klasse zugreifen. Dies ist eine DevTools-exklusive Lockerung der JavaScript-Syntaxbeschränkung.

Private Dateneigenschaften müssen in der Klassendeklaration deklariert werden, und ihre Namen beginnen mit `#`.

### Private Methoden

Sie können private Methoden ebenso wie private Dateneigenschaften haben. Genau wie private Dateneigenschaften beginnen ihre Namen mit `#`, und sie können nur von den Methoden des Objekts selbst aufgerufen werden:

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests durchführen, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Objektorientiertes JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript).

## Zusammenfassung

In diesem Artikel haben wir die wichtigsten Werkzeuge durchlaufen, die in JavaScript zum Schreiben objektorientierter Programme verfügbar sind. Hier wurde nicht alles abgedeckt, aber dies sollte ausreichend sein, um Ihnen einen Einstieg zu geben. Unser [Artikel über Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist ein guter Ort, um mehr zu lernen.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
