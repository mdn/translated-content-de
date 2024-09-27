---
title: Objekt-Prototypen
slug: Learn/JavaScript/Objects/Object_prototypes
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects")}}

Prototypen sind der Mechanismus, durch den JavaScript-Objekte Funktionen voneinander erben. In diesem Artikel erklären wir, was ein Prototyp ist, wie Prototyp-Ketten funktionieren und wie ein Prototyp für ein Objekt festgelegt werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Verstehen von JavaScript-Funktionen, Vertrautheit mit den Grundlagen von JavaScript
        (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >) und OOJS-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/Objects/Basics"
          >Einführung in Objekte</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis von JavaScript-Objektprototypen, wie Prototyp-Ketten funktionieren und wie der Prototyp eines Objekts festgelegt werden kann.
      </td>
    </tr>
  </tbody>
</table>

## Die Prototyp-Kette

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

Dies ist ein Objekt mit einer Dateneigenschaft, `city`, und einer Methode, `greet()`. Wenn Sie den Namen des Objekts _gefolgt von einem Punkt_ in die Konsole eingeben, wie `myObject.`, dann wird die Konsole eine Liste aller Eigenschaften anzeigen, die diesem Objekt zur Verfügung stehen. Sie werden sehen, dass es neben `city` und `greet` noch viele andere Eigenschaften gibt!

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

Versuchen Sie, auf eine dieser Eigenschaften zuzugreifen:

```js
myObject.toString(); // "[object Object]"
```

Es funktioniert (auch wenn nicht offensichtlich ist, was `toString()` macht).

Was sind diese zusätzlichen Eigenschaften und woher kommen sie?

Jedes Objekt in JavaScript hat eine eingebaute Eigenschaft, die als **Prototyp** bezeichnet wird. Der Prototyp ist selbst ein Objekt, sodass der Prototyp seinen eigenen Prototyp hat, was als **Prototyp-Kette** bezeichnet wird. Die Kette endet, wenn wir einen Prototyp erreichen, der `null` für seinen eigenen Prototyp hat.

> [!NOTE]
> Die Eigenschaft eines Objekts, die auf seinen Prototyp zeigt, wird **nicht** `prototype` genannt. Ihr Name ist nicht standardisiert, aber in der Praxis verwenden alle Browser [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto). Der standardisierte Weg, um auf den Prototyp eines Objekts zuzugreifen, ist die Methode {{jsxref("Object/getPrototypeOf", "Object.getPrototypeOf()")}}.

Wenn Sie versuchen, auf eine Eigenschaft eines Objekts zuzugreifen: Wenn die Eigenschaft im Objekt selbst nicht gefunden werden kann, wird im Prototyp nach der Eigenschaft gesucht. Wenn die Eigenschaft immer noch nicht gefunden werden kann, wird im Prototyp des Prototyps gesucht, und so weiter, bis entweder die Eigenschaft gefunden wird oder das Ende der Kette erreicht ist, in diesem Fall wird `undefined` zurückgegeben.

Wenn wir also `myObject.toString()` aufrufen, sucht der Browser:

- nach `toString` in `myObject`
- kann es dort nicht finden, also sucht er im Prototyp-Objekt von `myObject` nach `toString`
- findet es dort und ruft es auf.

Was ist der Prototyp für `myObject`? Um dies herauszufinden, können wir die Funktion `Object.getPrototypeOf()` verwenden:

```js
Object.getPrototypeOf(myObject); // Object { }
```

Dies ist ein Objekt namens `Object.prototype`, und es ist der grundlegendste Prototyp, den alle Objekte standardmäßig haben. Der Prototyp von `Object.prototype` ist `null`, also ist es das Ende der Prototyp-Kette:

![Prototype chain for myObject](myobject-prototype-chain.svg)

Der Prototyp eines Objekts ist nicht immer `Object.prototype`. Versuchen Sie folgendes:

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

Dieser Code erstellt ein `Date`-Objekt und durchläuft dann die Prototyp-Kette, wobei die Prototypen protokolliert werden. Er zeigt uns, dass der Prototyp von `myDate` ein `Date.prototype`-Objekt ist und dass der Prototyp _davon_ `Object.prototype` ist.

![Prototype chain for myDate](mydate-prototype-chain.svg)

Tatsächlich rufen Sie, wenn Sie vertraute Methoden wie `myDate2.getTime()` aufrufen, eine Methode auf, die auf `Date.prototype` definiert ist.

## Überschattende Eigenschaften

Was passiert, wenn Sie eine Eigenschaft in einem Objekt definieren, wenn im Prototyp des Objekts eine Eigenschaft mit demselben Namen definiert ist? Schauen wir uns das an:

```js
const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'
```

Dies sollte vorhersehbar sein, wenn man die Beschreibung der Prototyp-Kette kennt. Wenn wir `getTime()` aufrufen, sucht der Browser zuerst in `myDate` nach einer Eigenschaft mit diesem Namen und prüft nur den Prototyp, wenn `myDate` sie nicht definiert. Wenn wir `getTime()` zu `myDate` hinzufügen, wird also die Version in `myDate` aufgerufen.

Dies wird als "Schatten" der Eigenschaft bezeichnet.

## Einen Prototyp festlegen

Es gibt verschiedene Möglichkeiten, den Prototyp eines Objekts in JavaScript festzulegen, und hier werden wir zwei beschreiben: `Object.create()` und Konstruktoren.

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

In JavaScript haben alle Funktionen eine Eigenschaft namens `prototype`. Wenn Sie eine Funktion als Konstruktor aufrufen, wird diese Eigenschaft als Prototyp des neu konstruierten Objekts festgelegt (der Konvention nach in der Eigenschaft namens `__proto__`).

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

- ein Objekt `personPrototype`, das eine `greet()`-Methode hat,
- eine `Person()`-Konstruktorfunktion, die den Namen der zu erstellenden Person initialisiert.

Wir übertragen dann die in `personPrototype` definierten Methoden auf die `prototype`-Eigenschaft der `Person`-Funktion mit [Object.assign](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

Nach diesem Code erhalten mit `Person()` erstellte Objekte `Person.prototype` als ihren Prototyp, der automatisch die `greet`-Methode enthält.

```js
const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
```

Das erklärt auch, warum wir früher gesagt haben, dass der Prototyp von `myDate` `Date.prototype` genannt wird: Es ist die `prototype`-Eigenschaft des `Date`-Konstruktors.

### Eigene Eigenschaften

Die Objekte, die wir mit dem oben genannten `Person`-Konstruktor erstellen, haben zwei Eigenschaften:

- eine `name`-Eigenschaft, die im Konstruktor festgelegt wird und somit direkt auf `Person`-Objekten erscheint,
- eine `greet()`-Methode, die im Prototyp festgelegt ist.

Es ist üblich, dieses Muster zu sehen, bei dem Methoden im Prototyp definiert sind, aber Dateneigenschaften im Konstruktor. Das liegt daran, dass Methoden in der Regel für jedes Objekt, das wir erstellen, gleich sind, während wir oft wollen, dass jedes Objekt seinen eigenen Wert für seine Dateneigenschaften hat (genau wie hier, wo jede Person einen anderen Namen hat).

Eigenschaften, die direkt im Objekt definiert sind, wie `name` hier, werden als **eigene Eigenschaften** bezeichnet, und Sie können überprüfen, ob eine Eigenschaft eine eigene Eigenschaft ist, indem Sie die statische Methode {{jsxref("Object/hasOwn", "Object.hasOwn()")}} verwenden:

```js
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
```

> [!NOTE]
> Sie können hier auch die nicht-statische Methode {{jsxref("Object/hasOwnProperty", "Object.hasOwnProperty()")}} verwenden, aber wir empfehlen, `Object.hasOwn()` zu verwenden, wenn Sie können.

## Prototypen und Vererbung

Prototypen sind ein leistungsfähiges und sehr flexibles Merkmal von JavaScript, das es ermöglicht, Code wiederzuverwenden und Objekte zu kombinieren.

Insbesondere unterstützen sie eine Version von **Vererbung**. Vererbung ist ein Merkmal von objektorientierten Programmiersprachen, das es Programmierern ermöglicht, die Idee auszudrücken, dass einige Objekte in einem System spezialisierte Versionen anderer Objekte sind.

Zum Beispiel, wenn wir eine Schule modellieren, könnten wir _Professoren_ und _Studenten_ haben: Sie sind beide _Menschen_, haben also einige gemeinsame Merkmale (zum Beispiel haben sie beide Namen), aber jeder könnte zusätzliche Merkmale hinzufügen (zum Beispiel haben Professoren ein Fach, das sie lehren), oder könnte dasselbe Merkmal auf unterschiedliche Weise implementieren. In einem OOP-System könnten wir sagen, dass Professoren und Studenten beide von Menschen **erben**.

Sie können sehen, wie in JavaScript, wenn `Professor`- und `Student`-Objekte `Person`-Prototypen haben können, dann können sie die gemeinsamen Eigenschaften erben, während sie die Eigenschaften, die sich unterscheiden müssen, hinzufügen und neu definieren.

Im nächsten Artikel werden wir die Vererbung zusammen mit den anderen Hauptmerkmalen objektorientierter Programmiersprachen besprechen und sehen, wie JavaScript sie unterstützt.

## Zusammenfassung

Dieser Artikel hat JavaScript-Objektprototypen behandelt, einschließlich wie Prototyp-Objektketten es Objekten ermöglichen, Funktionen voneinander zu erben, die Prototyp-Eigenschaft und wie sie verwendet werden kann, um Methoden zu Konstruktoren hinzuzufügen, und andere verwandte Themen.

Im nächsten Artikel werden wir uns die Konzepte ansehen, die objektorientierte Programmierung zugrunde liegen.

{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects")}}
