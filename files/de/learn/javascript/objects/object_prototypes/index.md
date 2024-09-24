---
title: Objektprototypen
slug: Learn/JavaScript/Objects/Object_prototypes
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects")}}

Prototypen sind der Mechanismus, durch den JavaScript-Objekte Merkmale voneinander erben. In diesem Artikel erklären wir, was ein Prototyp ist, wie Prototypketten funktionieren und wie ein Prototyp für ein Objekt festgelegt werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Verständnis von JavaScript-Funktionen, Vertrautheit mit JavaScript-Grundlagen
        (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >), und OOJS-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/Objects/Basics"
          >Einführung in Objekte</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen der JavaScript-Objektprototypen, wie Prototypketten funktionieren
        und wie man den Prototyp eines Objekts setzt.
      </td>
    </tr>
  </tbody>
</table>

## Die Prototypkette

Versuchen Sie im Browser-Entwicklertool, ein Objektliteral zu erstellen:

```js
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
```

Dies ist ein Objekt mit einer Daten-Eigenschaft, `city`, und einer Methode, `greet()`. Wenn Sie den Namen des Objekts _gefolgt von einem Punkt_ in die Konsole eingeben, wie `myObject.`, wird die Konsole eine Liste aller Eigenschaften anzeigen, die diesem Objekt zur Verfügung stehen. Sie werden sehen, dass es zusätzlich zu `city` und `greet` viele andere Eigenschaften gibt!

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

Versuchen Sie, eine davon zuzugreifen:

```js
myObject.toString(); // "[object Object]"
```

Es funktioniert (auch wenn es nicht offensichtlich ist, was `toString()` tut).

Was sind diese zusätzlichen Eigenschaften und woher kommen sie?

Jedes Objekt in JavaScript hat eine eingebaute Eigenschaft, die als **Prototyp** bezeichnet wird. Der Prototyp selbst ist ein Objekt, sodass der Prototyp seinen eigenen Prototyp hat, wodurch eine sogenannte **Prototypkette** entsteht. Die Kette endet, wenn wir einen Prototyp erreichen, der `null` als seinen eigenen Prototyp hat.

> [!NOTE]
> Die Eigenschaft eines Objekts, die auf seinen Prototyp verweist, wird **nicht** `prototype` genannt. Ihr Name ist nicht standardisiert, aber in der Praxis verwenden alle Browser [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto). Die standardisierte Methode, um auf den Prototyp eines Objekts zuzugreifen, ist die {{jsxref("Object/getPrototypeOf", "Object.getPrototypeOf()")}} Methode.

Wenn Sie versuchen, auf eine Eigenschaft eines Objekts zuzugreifen: Wenn die Eigenschaft im Objekt selbst nicht gefunden werden kann, wird im Prototyp nach der Eigenschaft gesucht. Wenn die Eigenschaft weiterhin nicht gefunden werden kann, wird im Prototyp des Prototyps gesucht und so weiter, bis die Eigenschaft entweder gefunden wird oder das Ende der Kette erreicht ist, in diesem Fall wird `undefined` zurückgegeben.

Also, wenn wir `myObject.toString()` aufrufen, macht der Browser Folgendes:

- sucht `toString` in `myObject`
- kann es dort nicht finden, also sucht er im Prototyp-Objekt von `myObject` nach `toString`
- findet es dort und führt es aus.

Was ist der Prototyp für `myObject`? Um dies herauszufinden, können wir die Funktion `Object.getPrototypeOf()` verwenden:

```js
Object.getPrototypeOf(myObject); // Object { }
```

Dies ist ein Objekt namens `Object.prototype`, und es ist der grundlegendste Prototyp, den alle Objekte standardmäßig haben. Der Prototyp von `Object.prototype` ist `null`, sodass es am Ende der Prototypkette steht:

![Prototypkette für myObject](myobject-prototype-chain.svg)

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

Dieser Code erstellt ein `Date`-Objekt und geht dann die Prototypkette durch, wobei die Prototypen protokolliert werden. Es zeigt uns, dass der Prototyp von `myDate` ein `Date.prototype`-Objekt ist und der Prototyp _davon_ `Object.prototype` ist.

![Prototypkette für myDate](mydate-prototype-chain.svg)

Tatsächlich wird, wenn Sie vertraute Methoden wie `myDate2.getTime()` aufrufen, eine Methode aufgerufen, die auf `Date.prototype` definiert ist.

## Schatten von Eigenschaften

Was passiert, wenn Sie eine Eigenschaft in einem Objekt definieren, während eine Eigenschaft mit demselben Namen im Prototyp des Objekts definiert ist? Sehen wir mal:

```js
const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'
```

Dies sollte vorhersehbar sein, gegeben die Beschreibung der Prototypkette. Wenn wir `getTime()` aufrufen, sucht der Browser zuerst in `myDate` nach einer Eigenschaft mit diesem Namen und überprüft den Prototyp nur, wenn `myDate` sie nicht definiert. Wenn wir also `getTime()` zu `myDate` hinzufügen, wird die Version in `myDate` aufgerufen.

Dies wird als "Schatten" der Eigenschaft bezeichnet.

## Festlegen eines Prototyps

Es gibt verschiedene Möglichkeiten, den Prototyp eines Objekts in JavaScript festzulegen, und hier beschreiben wir zwei: `Object.create()` und Konstruktoren.

### Verwendung von Object.create

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

Hier erstellen wir ein Objekt `personPrototype`, das über eine `greet()`-Methode verfügt. Wir verwenden dann `Object.create()`, um ein neues Objekt mit `personPrototype` als seinem Prototyp zu erstellen. Jetzt können wir `greet()` auf dem neuen Objekt aufrufen, und der Prototyp liefert seine Implementierung.

### Verwendung eines Konstruktors

In JavaScript haben alle Funktionen eine Eigenschaft namens `prototype`. Wenn Sie eine Funktion als Konstruktor aufrufen, wird diese Eigenschaft als Prototyp des neu erstellten Objekts gesetzt (konventionell in der Eigenschaft `__proto__`).

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
// oder
// Person.prototype.greet = personPrototype.greet;
```

Hier erstellen wir:

- ein Objekt `personPrototype`, das eine `greet()`-Methode hat,
- eine `Person()`-Konstruktionsfunktion, die den Namen der zu erstellenden Person initialisiert.

Wir fügen dann die im `personPrototype` definierten Methoden der `prototype`-Eigenschaft der `Person`-Funktion hinzu, indem wir [Object.assign](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) verwenden.

Nach diesem Code erhalten Objekte, die mit `Person()` erstellt werden, `Person.prototype` als ihren Prototyp, der automatisch die `greet`-Methode enthält.

```js
const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
```

Dies erklärt auch, warum wir vorher gesagt haben, dass der Prototyp von `myDate` `Date.prototype` heißt: es ist die `prototype`-Eigenschaft des `Date` Konstruktors.

### Eigene Eigenschaften

Die Objekte, die wir mit dem obigen `Person`-Konstruktor erstellen, haben zwei Eigenschaften:

- eine `name`-Eigenschaft, die im Konstruktor gesetzt wird, sodass sie direkt auf `Person`-Objekten erscheint
- eine `greet()`-Methode, die im Prototyp gesetzt wird.

Es ist üblich, dieses Muster zu sehen, bei dem Methoden im Prototyp definiert werden, aber Dateneigenschaften im Konstruktor. Das liegt daran, dass Methoden normalerweise für jedes erstellte Objekt gleich sind, während wir oft möchten, dass jedes Objekt seinen eigenen Wert für seine Dateneigenschaften hat (wie hier, wo jede Person einen anderen Namen hat).

Eigenschaften, die direkt im Objekt definiert sind, wie `name` hier, werden als **eigene Eigenschaften** bezeichnet, und Sie können überprüfen, ob eine Eigenschaft eine eigene Eigenschaft ist, indem Sie die statische Methode {{jsxref("Object/hasOwn", "Object.hasOwn()")}} verwenden:

```js
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
```

> [!NOTE]
> Sie können hier auch die nicht-statische Methode {{jsxref("Object/hasOwnProperty", "Object.hasOwnProperty()")}} verwenden, aber wir empfehlen, `Object.hasOwn()` zu verwenden, wenn Sie können.

## Prototypen und Vererbung

Prototypen sind ein leistungsstarkes und sehr flexibles Merkmal von JavaScript, das es ermöglicht, Code wiederzuverwenden und Objekte zu kombinieren.

Insbesondere unterstützen sie eine Version von **Vererbung**. Vererbung ist ein Merkmal objektorientierter Programmiersprachen, das Programmierern ermöglicht, die Idee auszudrücken, dass einige Objekte in einem System spezialisiertere Versionen anderer Objekte sind.

Wenn wir zum Beispiel eine Schule modellieren, könnten wir _Professoren_ und _Studenten_ haben: sie sind beide _Menschen_ und haben daher einige gemeinsame Merkmale (zum Beispiel haben sie beide Namen), aber jeder könnte zusätzliche Merkmale hinzufügen (zum Beispiel haben Professoren ein Fach, das sie unterrichten) oder dasselbe Merkmal auf unterschiedliche Weise umsetzen. In einem OOP-System könnten wir sagen, dass Professoren und Studenten beide **von** Menschen erben.

Sie können sehen, wie in JavaScript, wenn `Professor`- und `Student`-Objekte `Person`-Prototypen haben können, sie dann die gemeinsamen Eigenschaften erben können, während sie die Eigenschaften hinzufügen und umdefinieren, die unterschiedlich sein müssen.

Im nächsten Artikel werden wir das Thema Vererbung zusammen mit den anderen Hauptmerkmalen objektorientierter Programmiersprachen diskutieren und sehen, wie JavaScript sie unterstützt.

## Zusammenfassung

Dieser Artikel hat die JavaScript-Objektprototypen behandelt, einschließlich wie Prototyp-Objektketten es Objekten ermöglichen, Merkmale voneinander zu erben, die Prototyp-Eigenschaft und wie sie verwendet werden kann, um Methoden zu Konstruktoren hinzuzufügen, sowie andere verwandte Themen.

Im nächsten Artikel werden wir uns die Konzepte ansehen, die der objektorientierten Programmierung zugrunde liegen.

{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects")}}
