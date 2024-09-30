---
title: Objektprototypen
slug: Learn/JavaScript/Objects/Object_prototypes
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects")}}

Prototypen sind der Mechanismus, durch den JavaScript-Objekte Funktionen voneinander erben. In diesem Artikel erklären wir, was ein Prototyp ist, wie Prototypketten funktionieren und wie ein Prototyp für ein Objekt gesetzt werden kann.

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
        >) und OOJS-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/Objects/Basics"
          >Einführung in Objekte</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis von JavaScript-Objektprototypen, wie Prototypketten funktionieren,
        und wie der Prototyp eines Objekts gesetzt werden kann.
      </td>
    </tr>
  </tbody>
</table>

## Die Prototypkette

Probieren Sie im Konsolenfenster des Browsers aus, ein Objekt wörtlich zu erstellen:

```js
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
```

Dies ist ein Objekt mit einer Dateneigenschaft, `city`, und einer Methode, `greet()`. Wenn Sie den Objektnamen _gefolgt von einem Punkt_ in die Konsole eingeben, wie `myObject.`, wird die Konsole eine Liste aller für dieses Objekt verfügbaren Eigenschaften anzeigen. Sie werden sehen, dass neben `city` und `greet` noch viele andere Eigenschaften vorhanden sind!

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

Es funktioniert (auch wenn nicht offensichtlich ist, was `toString()` tut).

Was sind diese zusätzlichen Eigenschaften, und woher kommen sie?

Jedes Objekt in JavaScript hat eine eingebaute Eigenschaft, die sein **Prototyp** genannt wird. Der Prototyp selbst ist ein Objekt, sodass der Prototyp einen eigenen Prototyp hat, was eine sogenannte **Prototypkette** bildet. Die Kette endet, wenn wir einen Prototyp erreichen, der `null` als eigenen Prototyp hat.

> [!NOTE]
> Die Eigenschaft eines Objekts, die auf seinen Prototyp verweist, wird **nicht** `prototype` genannt. Ihr Name ist nicht standardisiert, aber in der Praxis verwenden alle Browser [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto). Der standardisierte Weg, um auf den Prototyp eines Objekts zuzugreifen, ist die Methode {{jsxref("Object/getPrototypeOf", "Object.getPrototypeOf()")}}.

Wenn Sie versuchen, auf eine Eigenschaft eines Objekts zuzugreifen: Wenn die Eigenschaft nicht direkt im Objekt gefunden werden kann, wird im Prototyp nach der Eigenschaft gesucht. Wenn die Eigenschaft immer noch nicht gefunden wird, wird im Prototyp des Prototyps gesucht, und so weiter, bis entweder die Eigenschaft gefunden wird oder das Ende der Kette erreicht ist, in diesem Fall wird `undefined` zurückgegeben.

Wenn wir also `myObject.toString()` aufrufen, macht der Browser Folgendes:

- sucht nach `toString` in `myObject`
- kann es dort nicht finden, also sucht er im Prototypobjekt von `myObject` nach `toString`
- findet es dort und ruft es auf.

Was ist der Prototyp für `myObject`? Um das herauszufinden, können wir die Funktion `Object.getPrototypeOf()` verwenden:

```js
Object.getPrototypeOf(myObject); // Object { }
```

Dies ist ein Objekt namens `Object.prototype`, und es ist der grundlegendste Prototyp, den alle Objekte standardmäßig haben. Der Prototyp von `Object.prototype` ist `null`, sodass er am Ende der Prototypkette steht:

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

Dieser Code erstellt ein `Date`-Objekt und geht dann die Prototypkette nach oben, wobei die Prototypen protokolliert werden. Es zeigt uns, dass der Prototyp von `myDate` ein `Date.prototype`-Objekt ist und der Prototyp _davon_ `Object.prototype` ist.

![Prototypkette für myDate](mydate-prototype-chain.svg)

Tatsächlich rufen wir, wenn wir vertraute Methoden wie `myDate2.getTime()` verwenden, eine Methode auf, die in `Date.prototype` definiert ist.

## Überschattung von Eigenschaften

Was passiert, wenn Sie eine Eigenschaft in einem Objekt definieren, während eine Eigenschaft mit demselben Namen im Prototyp des Objekts definiert ist? Lassen Sie uns sehen:

```js
const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'
```

Dies sollte vorhersehbar sein, angesichts der Beschreibung der Prototypkette. Wenn wir `getTime()` aufrufen, sucht der Browser zuerst in `myDate` nach einer Eigenschaft mit diesem Namen und prüft nur den Prototyp, wenn `myDate` diese nicht definiert. Wenn wir also `getTime()` zu `myDate` hinzufügen, wird die Version in `myDate` aufgerufen.

Dies wird als "Überschattung" der Eigenschaft bezeichnet.

## Setzen eines Prototyps

Es gibt verschiedene Möglichkeiten, einen Prototyp für ein Objekt in JavaScript festzulegen, und hier beschreiben wir zwei: `Object.create()` und Konstruktoren.

### Verwendung von Object.create

Die Methode `Object.create()` erstellt ein neues Objekt und erlaubt es Ihnen, ein Objekt anzugeben, das als Prototyp des neuen Objekts verwendet wird.

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

In JavaScript haben alle Funktionen eine Eigenschaft namens `prototype`. Wenn Sie eine Funktion als Konstruktor aufrufen, wird diese Eigenschaft als Prototyp des neu konstruierten Objekts festgelegt (konventionell in der Eigenschaft namens `__proto__`).

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

- ein Objekt `personPrototype`, das eine `greet()`-Methode hat
- eine `Person()`-Konstruktionsfunktion, die den Namen der zu erstellenden Person initialisiert.

Wir legen dann die in `personPrototype` definierten Methoden auf die `prototype`-Eigenschaft der `Person`-Funktion mit [Object.assign](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

Nach diesem Code erhalten Objekte, die mit `Person()` erstellt werden, `Person.prototype` als Prototyp, der automatisch die `greet`-Methode enthält.

```js
const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
```

Dies erklärt auch, warum wir zuvor sagten, dass der Prototyp von `myDate` `Date.prototype` genannt wird: Es ist die `prototype`-Eigenschaft des `Date`-Konstruktors.

### Eigene Eigenschaften

Die Objekte, die wir mit dem `Person`-Konstruktor oben erstellen, haben zwei Eigenschaften:

- eine `name`-Eigenschaft, die im Konstruktor festgelegt ist, sodass sie direkt auf `Person`-Objekten erscheint
- eine `greet()`-Methode, die im Prototyp festgelegt ist.

Es ist üblich, dieses Muster zu sehen, bei dem Methoden im Prototyp definiert sind, aber Dateneigenschaften im Konstruktor definiert sind. Das liegt daran, dass Methoden normalerweise für jedes erstellte Objekt gleich sind, während wir oft möchten, dass jedes Objekt seinen eigenen Wert für seine Dateneigenschaften hat (genauso wie hier, wo jede Person einen anderen Namen hat).

Eigenschaften, die direkt im Objekt definiert sind, wie `name` hier, werden **eigene Eigenschaften** genannt, und Sie können überprüfen, ob eine Eigenschaft eine eigene Eigenschaft ist, indem Sie die statische Methode {{jsxref("Object/hasOwn", "Object.hasOwn()")}} verwenden:

```js
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
```

> [!NOTE]
> Sie können hier auch die nicht-statische Methode {{jsxref("Object/hasOwnProperty", "Object.hasOwnProperty()")}} verwenden, aber wir empfehlen, dass Sie `Object.hasOwn()` verwenden, wenn Sie können.

## Prototypen und Vererbung

Prototypen sind ein leistungsstarkes und sehr flexibles Feature von JavaScript, das es ermöglicht, Code wiederzuverwenden und Objekte zu kombinieren.

Insbesondere unterstützen sie eine Version von **Vererbung**. Vererbung ist ein Merkmal objektorientierter Programmiersprachen, das es Programmierern ermöglicht, die Vorstellung auszudrücken, dass einige Objekte in einem System spezialisiertere Versionen anderer Objekte sind.

Wenn wir zum Beispiel eine Schule modellieren, könnten wir _Professoren_ und _Studenten_ haben: Sie sind beide _Personen_ und haben daher einige gemeinsame Merkmale (zum Beispiel haben sie beide Namen), aber jeder könnte zusätzliche Merkmale hinzufügen (zum Beispiel haben Professoren ein Fach, das sie unterrichten), oder das gleiche Merkmal auf unterschiedliche Weise implementieren. In einem OOP-System könnten wir sagen, dass Professoren und Studenten beide von Personen **erben**.

Sie können sehen, wie in JavaScript, wenn `Professor`- und `Student`-Objekte `Person`-Prototypen haben können, sie die gemeinsamen Eigenschaften erben können, während sie diese Eigenschaften, die sich unterscheiden müssen, hinzufügen und neu definieren.

Im nächsten Artikel werden wir Vererbung zusammen mit den anderen Hauptmerkmalen objektorientierter Programmiersprachen besprechen und sehen, wie JavaScript sie unterstützt.

## Zusammenfassung

Dieser Artikel hat JavaScript-Objektprototypen behandelt, einschließlich wie Prototyp-Objektketten es Objekten ermöglichen, Funktionen voneinander zu erben, die Prototyp-Eigenschaft und wie sie verwendet werden kann, um Methoden zu Konstruktoren hinzuzufügen, und andere verwandte Themen.

Im nächsten Artikel betrachten wir die Konzepte, die objektorientierter Programmierung zugrunde liegen.

{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects")}}
