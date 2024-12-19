---
title: Objektprototypen
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

Prototypen sind der Mechanismus, durch den JavaScript-Objekte Eigenschaften voneinander erben. In diesem Artikel erklären wir, was ein Prototyp ist, wie Prototypketten funktionieren und wie ein Prototyp für ein Objekt festgelegt werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen von JavaScript
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Objektgrundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die JavaScript-Prototypkette.</li>
          <li>Das Konzept der Abschattung von Eigenschaften.</li>
          <li>Setzen von Prototypen.</li>
          <li>Die Konzepte von Prototypen und Vererbung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die Prototypkette

Versuchen Sie im Konsolenfenster des Browsers, ein Objektliteral zu erstellen:

```js
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
```

Dies ist ein Objekt mit einer Dateneigenschaft, `city`, und einer Methode, `greet()`. Wenn Sie den Namen des Objekts _gefolgt von einem Punkt_ in die Konsole eingeben, wie `myObject.`, wird die Konsole eine Liste aller für dieses Objekt verfügbaren Eigenschaften anzeigen. Sie werden sehen, dass neben `city` und `greet` viele andere Eigenschaften verfügbar sind!

```plain
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
```

Versuchen Sie, auf eine davon zuzugreifen:

```js
myObject.toString(); // "[object Object]"
```

Es funktioniert (auch wenn nicht offensichtlich ist, was `toString()` tut).

Was sind diese zusätzlichen Eigenschaften, und woher kommen sie?

Jedes Objekt in JavaScript hat eine eingebaute Eigenschaft, die als sein **Prototyp** bezeichnet wird. Der Prototyp selbst ist ein Objekt, daher hat auch der Prototyp einen eigenen Prototyp, wodurch eine sogenannte **Prototypkette** entsteht. Die Kette endet, wenn wir einen Prototyp erreichen, der `null` als seinen eigenen Prototyp hat.

> [!NOTE]
> Die Eigenschaft eines Objekts, die auf seinen Prototyp verweist, heißt **nicht** `prototype`. Ihr Name ist nicht standardisiert, aber in der Praxis verwenden alle Browser [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto). Der standardmäßige Weg, um auf den Prototyp eines Objekts zuzugreifen, ist die Methode {{jsxref("Object/getPrototypeOf", "Object.getPrototypeOf()")}}.

Wenn Sie versuchen, auf eine Eigenschaft eines Objekts zuzugreifen: Wenn die Eigenschaft im Objekt selbst nicht gefunden werden kann, wird der Prototyp nach der Eigenschaft durchsucht. Wenn die Eigenschaft immer noch nicht gefunden werden kann, wird der Prototyp des Prototyps durchsucht, und so weiter, bis die Eigenschaft entweder gefunden wird oder das Ende der Kette erreicht ist, in welchem Fall `undefined` zurückgegeben wird.

Wenn wir also `myObject.toString()` aufrufen, geht der Browser folgendermaßen vor:

- sucht `toString` in `myObject`
- kann es dort nicht finden, also wird im Prototypobjekt von `myObject` nach `toString` gesucht
- findet es dort und ruft es auf.

Was ist der Prototyp von `myObject`? Um das herauszufinden, können wir die Funktion `Object.getPrototypeOf()` verwenden:

```js
Object.getPrototypeOf(myObject); // Object { }
```

Dies ist ein Objekt namens `Object.prototype`, und es ist der grundlegendste Prototyp, den alle Objekte standardmäßig haben. Der Prototyp von `Object.prototype` ist `null`, daher befindet es sich am Ende der Prototypkette:

![Prototype chain for myObject](myobject-prototype-chain.svg)

Der Prototyp eines Objekts ist nicht immer `Object.prototype`. Versuchen Sie dies:

```js
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null
```

Dieser Code erstellt ein `Date`-Objekt und geht dann die Prototypkette hoch und protokolliert die Prototypen. Es zeigt uns, dass der Prototyp von `myDate` ein `Date.prototype`-Objekt ist und der Prototyp _davon_ `Object.prototype` ist.

![Prototype chain for myDate](mydate-prototype-chain.svg)

Tatsächlich, wenn Sie bekannte Methoden wie `myDate2.getTime()` aufrufen, rufen Sie eine Methode auf, die auf `Date.prototype` definiert ist.

## Abschattung von Eigenschaften

Was passiert, wenn Sie eine Eigenschaft in einem Objekt definieren, während eine Eigenschaft mit demselben Namen im Prototyp des Objekts definiert ist? Schauen wir uns das an:

```js
const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'
```

Dies sollte vorhersehbar sein, angesichts der Beschreibung der Prototypkette. Wenn wir `getTime()` aufrufen, sucht der Browser zuerst in `myDate` nach einer Eigenschaft mit diesem Namen und überprüft den Prototyp erst, wenn `myDate` sie nicht definiert. Wenn wir also `getTime()` zu `myDate` hinzufügen, wird die Version in `myDate` aufgerufen.

Dies wird als "Abschattung" der Eigenschaft bezeichnet.

## Festlegen eines Prototyps

Es gibt verschiedene Möglichkeiten, einen Prototyp eines Objekts in JavaScript festzulegen. Hier werden wir zwei beschreiben: `Object.create()` und Konstruktoren.

### Verwendet `Object.create`

Die Methode `Object.create()` erstellt ein neues Objekt und ermöglicht Ihnen, ein Objekt anzugeben, das als Prototyp des neuen Objekts verwendet wird.

Hier ist ein Beispiel:

```js
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
```

Hier erstellen wir ein Objekt `personPrototype`, das eine Methode `greet()` hat. Danach verwenden wir `Object.create()`, um ein neues Objekt mit `personPrototype` als seinen Prototyp zu erstellen. Jetzt können wir `greet()` für das neue Objekt aufrufen, und der Prototyp liefert seine Implementierung.

### Verwenden eines Konstruktors

In JavaScript haben alle Funktionen eine Eigenschaft namens `prototype`. Wenn Sie eine Funktion als Konstruktor aufrufen, wird diese Eigenschaft als Prototyp des neu konstruierten Objekts festgelegt (konventionell, in der Eigenschaft namens `__proto__`).

Wenn wir also den `prototype` eines Konstruktors festlegen, können wir sicherstellen, dass alle mit diesem Konstruktor erstellten Objekte diesen Prototyp erhalten:

```js
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;
```

Hier erstellen wir:

- ein Objekt `personPrototype`, das eine Methode `greet()` hat
- eine Konstruktorfunktion `Person()`, die den Namen der zu erstellenden Person initialisiert.

Wir legen dann die in `personPrototype` definierten Methoden auf der `prototype`-Eigenschaft der `Person`-Funktion mithilfe von [`Object.assign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) fest.

Nach diesem Code erhalten alle mit `Person()` erstellten Objekte `Person.prototype` als ihren Prototyp, der die `greet`-Methode automatisch enthält.

```js
const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
```

Dies erklärt auch, warum wir zuvor sagten, dass der Prototyp von `myDate` `Date.prototype` genannt wird: es ist die `prototype`-Eigenschaft des `Date`-Konstruktors.

### Eigene Eigenschaften

Die Objekte, die wir mit dem oben genannten `Person`-Konstruktor erstellen, haben zwei Eigenschaften:

- eine `name`-Eigenschaft, die im Konstruktor festgelegt ist und daher direkt auf `Person`-Objekten erscheint
- eine `greet()`-Methode, die im Prototyp festgelegt ist.

Es ist üblich, dieses Muster zu sehen, bei dem Methoden auf dem Prototyp definiert sind, aber Dateneigenschaften im Konstruktor. Das liegt daran, dass Methoden normalerweise für jedes erstellte Objekt gleich sind, während wir oft möchten, dass jedes Objekt seinen eigenen Wert für seine Dateneigenschaften hat (genau wie hier, wo jede Person einen anderen Namen hat).

Eigenschaften, die direkt im Objekt definiert sind, wie `name` hier, werden als **eigene Eigenschaften** bezeichnet, und Sie können überprüfen, ob eine Eigenschaft eine eigene Eigenschaft ist, indem Sie die statische Methode {{jsxref("Object/hasOwn", "Object.hasOwn()")}} verwenden:

```js
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
```

> [!NOTE]
> Sie können hier auch die nicht-statische Methode {{jsxref("Object/hasOwnProperty", "Object.hasOwnProperty()")}} verwenden, aber wir empfehlen die Verwendung von `Object.hasOwn()`, wenn Sie können.

## Prototypen und Vererbung

Prototypen sind ein leistungsstarkes und sehr flexibles Merkmal von JavaScript, das es ermöglicht, Code wiederzuverwenden und Objekte zu kombinieren.

Insbesondere unterstützen sie eine Version der **Vererbung**. Vererbung ist ein Merkmal von objektorientierten Programmiersprachen, das es Programmierern ermöglicht, die Idee auszudrücken, dass einige Objekte in einem System spezialisiertere Versionen anderer Objekte sind.

Wenn wir zum Beispiel eine Schule modellieren, könnten wir _Professoren_ und _Studenten_ haben: Sie sind beide _Personen_ und haben daher einige gemeinsame Merkmale (zum Beispiel haben beide einen Namen), aber jeder könnte zusätzliche Merkmale haben (zum Beispiel haben Professoren ein Fach, das sie lehren) oder möglicherweise dieselbe Funktion auf unterschiedliche Weise implementieren. In einem OOP-System könnten wir sagen, dass Professoren und Studenten beide **von** Personen erben.

Sie können sehen, wie in JavaScript, wenn `Professor`- und `Student`-Objekte `Person`-Prototypen haben können, sie die gemeinsamen Eigenschaften erben können, während sie diese Eigenschaften hinzufügen und neu definieren, die unterschiedlich sein müssen.

Im nächsten Artikel werden wir die Vererbung zusammen mit den anderen Hauptmerkmalen der objektorientierten Programmiersprachen behandeln und sehen, wie JavaScript sie unterstützt.

## Zusammenfassung

Dieser Artikel hat JavaScript-Objektprototypen behandelt, einschließlich wie Prototypketten es Objekten ermöglichen, Eigenschaften voneinander zu erben, die Prototyp-Eigenschaft und wie sie verwendet werden kann, um Methoden zu Konstruktoren hinzuzufügen, und andere verwandte Themen.

Im nächsten Artikel werden wir die Konzepte hinter der objektorientierten Programmierung betrachten.

{{NextMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
