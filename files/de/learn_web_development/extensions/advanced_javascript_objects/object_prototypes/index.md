---
title: Objektprototypen
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

Prototypen sind der Mechanismus, durch den JavaScript-Objekte Funktionen voneinander erben. In diesem Artikel erklären wir, was ein Prototyp ist, wie Prototypketten funktionieren und wie ein Prototyp für ein Objekt festgelegt werden kann.

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
          <li>Das Konzept der Überschattung von Eigenschaften.</li>
          <li>Festlegen von Prototypen.</li>
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

Dies ist ein Objekt mit einer Dateneigenschaft, `city`, und einer Methode, `greet()`. Wenn Sie den Objektnamen _gefolgt von einem Punkt_ in die Konsole eingeben, wie `myObject.`, dann wird die Konsole eine Liste aller für dieses Objekt verfügbaren Eigenschaften aufrufen. Sie werden sehen, dass es neben `city` und `greet` viele andere Eigenschaften gibt!

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

Versuchen Sie, auf eine von ihnen zuzugreifen:

```js
myObject.toString(); // "[object Object]"
```

Es funktioniert (auch wenn nicht sofort ersichtlich ist, was `toString()` tut).

Was sind diese zusätzlichen Eigenschaften und woher kommen sie?

Jedes Objekt in JavaScript hat eine eingebaute Eigenschaft, die als sein **Prototyp** bezeichnet wird. Der Prototyp ist selbst ein Objekt, sodass der Prototyp seinen eigenen Prototyp hat und eine sogenannte **Prototypenkette** bildet. Die Kette endet, wenn wir einen Prototyp erreichen, der `null` für seinen eigenen Prototyp hat.

> [!NOTE]
> Die Eigenschaft eines Objekts, die auf seinen Prototyp verweist, wird **nicht** `prototype` genannt. Ihr Name ist nicht standardisiert, aber in der Praxis verwenden alle Browser [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto). Die standardmäßige Methode, um auf den Prototyp eines Objekts zuzugreifen, ist die {{jsxref("Object/getPrototypeOf", "Object.getPrototypeOf()")}}-Methode.

Wenn Sie versuchen, auf eine Eigenschaft eines Objekts zuzugreifen: Wenn die Eigenschaft im Objekt selbst nicht gefunden werden kann, wird im Prototyp nach der Eigenschaft gesucht. Wenn die Eigenschaft immer noch nicht gefunden werden kann, wird im Prototyp des Prototyps gesucht, und so weiter, bis entweder die Eigenschaft gefunden wird, oder das Ende der Kette erreicht ist, in welchem Fall `undefined` zurückgegeben wird.

Wenn wir also `myObject.toString()` aufrufen, macht der Browser Folgendes:

- sucht nach `toString` in `myObject`
- kann ihn dort nicht finden, also wird im Prototyp-Objekt von `myObject` nach `toString` gesucht
- findet ihn dort und ruft ihn auf.

Was ist der Prototyp von `myObject`? Um das herauszufinden, können wir die Funktion `Object.getPrototypeOf()` verwenden:

```js
Object.getPrototypeOf(myObject); // Object { }
```

Dies ist ein Objekt namens `Object.prototype`, und es ist der grundlegendste Prototyp, den alle Objekte standardmäßig haben. Der Prototyp von `Object.prototype` ist `null`, daher befindet es sich am Ende der Prototypenkette:

![Prototypenkette für myObject](myobject-prototype-chain.svg)

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

Dieser Code erstellt ein `Date`-Objekt und geht dann die Prototypenkette entlang und protokolliert die Prototypen. Er zeigt uns, dass der Prototyp von `myDate` ein `Date.prototype`-Objekt ist, und der Prototyp davon ist `Object.prototype`.

![Prototypenkette für myDate](mydate-prototype-chain.svg)

Tatsächlich rufen Sie bei bekannten Methoden wie `myDate2.getTime()` eine Methode auf, die auf `Date.prototype` definiert ist.

## Überschattung von Eigenschaften

Was passiert, wenn Sie eine Eigenschaft in einem Objekt definieren, während eine Eigenschaft mit demselben Namen im Prototyp des Objekts definiert ist? Sehen wir uns das an:

```js
const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'
```

Dies sollte vorhersagbar sein, angesichts der Beschreibung der Prototypenkette. Wenn wir `getTime()` aufrufen, sucht der Browser zunächst in `myDate` nach einer Eigenschaft mit diesem Namen und prüft nur im Prototyp, wenn `myDate` sie nicht definiert hat. Wenn wir also `getTime()` zu `myDate` hinzufügen, wird die Version in `myDate` aufgerufen.

Dies wird als "Überschattung" der Eigenschaft bezeichnet.

## Festlegen eines Prototyps

Es gibt verschiedene Möglichkeiten, den Prototyp eines Objekts in JavaScript festzulegen, und hier beschreiben wir zwei: `Object.create()` und Konstruktoren.

### Verwendung von Object.create

Die Methode `Object.create()` erstellt ein neues Objekt und ermöglicht es Ihnen, ein Objekt anzugeben, das als Prototyp des neuen Objekts verwendet wird.

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

Hier erstellen wir ein Objekt `personPrototype`, das eine `greet()`-Methode hat. Wir verwenden dann `Object.create()`, um ein neues Objekt mit `personPrototype` als Prototyp zu erstellen. Jetzt können wir `greet()` auf dem neuen Objekt aufrufen, und der Prototyp liefert seine Implementierung.

### Verwendung eines Konstruktors

In JavaScript haben alle Funktionen eine Eigenschaft namens `prototype`. Wenn Sie eine Funktion als Konstruktor aufrufen, wird diese Eigenschaft als Prototyp des neu konstruierten Objekts festgelegt (standardmäßig in der Eigenschaft namens `__proto__`).

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

- Ein Objekt `personPrototype`, das eine `greet()`-Methode hat
- Eine `Person()` Konstruktorfunktion, die den Namen der zu erstellenden Person initialisiert.

Wir legen dann die in `personPrototype` definierten Methoden auf die `prototype`-Eigenschaft der `Person`-Funktion, indem wir [`Object.assign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) verwenden.

Nach diesem Code erhalten Objekte, die mit `Person()` erstellt wurden, `Person.prototype` als ihren Prototyp, der automatisch die `greet`-Methode enthält.

```js
const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
```

Dies erklärt auch, warum wir zuvor gesagt haben, dass der Prototyp von `myDate` `Date.prototype` genannt wird: es ist die `prototype`-Eigenschaft des `Date` Konstruktors.

### Eigene Eigenschaften

Die Objekte, die wir mit dem `Person`-Konstruktor oben erstellen, haben zwei Eigenschaften:

- eine `name`-Eigenschaft, die im Konstruktor festgelegt wird, sodass sie direkt auf `Person`-Objekten erscheint
- eine `greet()`-Methode, die im Prototyp gesetzt wird.

Es ist üblich, dieses Muster zu sehen, bei dem Methoden im Prototyp definiert werden, während Dateneigenschaften im Konstruktor definiert werden. Das liegt daran, dass Methoden normalerweise für jedes erstellte Objekt gleich sind, während wir oft möchten, dass jedes Objekt seinen eigenen Wert für seine Dateneigenschaften hat (genau wie hier, wo jede Person einen anderen Namen hat).

Eigenschaften, die direkt im Objekt definiert sind, wie hier `name`, werden als **eigene Eigenschaften** bezeichnet, und Sie können überprüfen, ob eine Eigenschaft eine eigene Eigenschaft ist, indem Sie die statische Methode {{jsxref("Object/hasOwn", "Object.hasOwn()")}} verwenden:

```js
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
```

> [!NOTE]
> Sie können hier auch die nicht-statische Methode {{jsxref("Object/hasOwnProperty", "Object.hasOwnProperty()")}} verwenden, aber wir empfehlen, `Object.hasOwn()` zu verwenden, wenn Sie können.

## Prototypen und Vererbung

Prototypen sind ein leistungsfähiges und sehr flexibles Merkmal von JavaScript, das es ermöglicht, Code wiederzuverwenden und Objekte zu kombinieren.

Insbesondere unterstützen sie eine Version von **Vererbung**. Vererbung ist ein Merkmal von objektorientierten Programmiersprachen, das es Programmierern ermöglicht, die Idee auszudrücken, dass einige Objekte in einem System spezialisiertere Versionen anderer Objekte sind.

Beispielsweise, wenn wir eine Schule modellieren, könnten wir _Professoren_ und _Studenten_ haben: Sie sind beide _Menschen_, haben also einige gemeinsame Merkmale (zum Beispiel haben sie beide Namen), aber jeder könnte zusätzliche Merkmale hinzufügen (zum Beispiel haben Professoren ein Fach, das sie unterrichten), oder könnte dasselbe Merkmal auf unterschiedliche Weise implementieren. In einem OOP-System könnten wir sagen, dass Professoren und Studenten beide **vom** Menschen **erben**.

Sie können sehen, wie in JavaScript, wenn `Professor` und `Student`-Objekte `Person`-Prototypen haben können, sie die gemeinsamen Eigenschaften erben können, während sie diese Eigenschaften, die sich unterscheiden müssen, hinzufügen und neu definieren.

Im nächsten Artikel werden wir über Vererbung sowie über die anderen Hauptmerkmale von objektorientierten Programmiersprachen diskutieren und sehen, wie JavaScript sie unterstützt.

## Zusammenfassung

Dieser Artikel hat JavaScript-Objektprototypen behandelt, einschließlich wie Prototypobjektketten es Objekten ermöglichen, Funktionen voneinander zu erben, die Prototyp-Eigenschaft und wie sie verwendet werden kann, um Methoden zu Konstruktoren hinzuzufügen, und andere verwandte Themen.

Im nächsten Artikel werden wir die Konzepte erörtern, die der objektorientierten Programmierung zugrunde liegen.

{{NextMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
