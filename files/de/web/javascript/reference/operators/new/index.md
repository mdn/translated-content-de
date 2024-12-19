---
title: new
slug: Web/JavaScript/Reference/Operators/new
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jsSidebar("Operators")}}

Der **`new`** Operator ermöglicht Entwicklern das Erstellen einer Instanz eines benutzerdefinierten Objekttyps oder eines der eingebauten Objekttypen, die eine Konstruktormethode haben.

{{EmbedInteractiveExample("pages/js/expressions-newoperator.html")}}

## Syntax

```js-nolint
new constructor
new constructor()
new constructor(arg1)
new constructor(arg1, arg2)
new constructor(arg1, arg2, /* …, */ argN)
```

### Parameter

- `constructor`
  - : Eine Klasse oder Funktion, die den Typ der Objektinstanz angibt. Der Ausdruck kann alles sein, was über ausreichende [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) verfügt, einschließlich einer Identifizierung, eines [Eigenschaftszugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) oder eines anderen `new` Ausdrucks, aber [optional chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist nicht erlaubt.
- `arg1`, `arg2`, …, `argN`
  - : Eine Liste von Werten, mit denen der `constructor` aufgerufen wird. `new Foo` ist äquivalent zu `new Foo()`, d. h. wenn keine Argumentliste angegeben ist, wird `Foo` ohne Argumente aufgerufen.

## Beschreibung

Wenn eine Funktion mit dem Schlüsselwort **`new`** aufgerufen wird, wird die Funktion als Konstruktor verwendet. `new` führt die folgenden Schritte aus:

1. Erstellt ein leeres, einfaches JavaScript-Objekt. Der Einfachheit halber nennen wir es `newInstance`.
2. Setzt das [[Prototype]] von `newInstance` auf die `prototype` Eigenschaft der Konstruktormethode, falls das `prototype` ein {{jsxref("Object")}} ist. Andernfalls bleibt `newInstance` ein einfaches Objekt mit `Object.prototype` als [[Prototype]].

   > [!NOTE]
   > Eigenschaften/Objekte, die der `prototype` Eigenschaft der Konstruktormethode hinzugefügt werden, sind daher für alle Instanzen zugänglich, die aus der Konstruktormethode erstellt werden.

3. Führt die Konstruktormethode mit den angegebenen Argumenten aus, wobei `newInstance` als [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Kontext gebunden wird (d. h. alle Verweise auf `this` in der Konstruktormethode beziehen sich jetzt auf `newInstance`).
4. Wenn die Konstruktormethode einen [nicht-primitiven Wert](/de/docs/Web/JavaScript/Data_structures#primitive_values) zurückgibt, wird dieser Rückgabewert das Ergebnis des gesamten `new` Ausdrucks. Andernfalls, wenn die Konstruktormethode nichts oder einen primitiven Wert zurückgibt, wird `newInstance` stattdessen zurückgegeben. (Normalerweise geben Konstruktoren keinen Wert zurück, aber sie können dies tun, um den normalen Objekt-Erstellungsprozess zu überschreiben.)

[Klassen](/de/docs/Web/JavaScript/Reference/Classes) können nur mit dem `new` Operator instanziiert werden — der Versuch, eine Klasse ohne `new` aufzurufen, wird einen `TypeError` werfen.

Das Erstellen eines Objekts mit einer benutzerdefinierten Konstruktormethode erfordert zwei Schritte:

1. Definieren Sie den Objekttyp, indem Sie eine Funktion schreiben, die seinen Namen und seine Eigenschaften festlegt.
   Zum Beispiel könnte eine Konstruktormethode, um ein Objekt `Foo` zu erstellen, wie folgt aussehen:

   ```js
   function Foo(bar1, bar2) {
     this.bar1 = bar1;
     this.bar2 = bar2;
   }
   ```

2. Erstellen Sie eine Instanz des Objekts mit `new`.

   ```js
   const myFoo = new Foo("Bar 1", 2021);
   ```

> [!NOTE]
> Ein Objekt kann eine Eigenschaft haben, die selbst ein weiteres Objekt ist. Siehe die Beispiele unten.

Sie können einem zuvor definierten Objekt immer eine Eigenschaft hinzufügen. Zum Beispiel fügt die Anweisung `car1.color = "black"` dem `car1` eine Eigenschaft `color` hinzu und weist ihr den Wert `"black"` zu.

Dies wirkt sich jedoch nicht auf andere Objekte aus. Um die neue Eigenschaft zu allen Objekten desselben Typs hinzuzufügen, müssen Sie sie der `prototype` Eigenschaft des Konstruktors hinzufügen. Dies definiert eine Eigenschaft, die von allen Objekten gemeinsam genutzt wird, die mit dieser Funktion erstellt wurden, anstatt nur von einer Instanz des Objekttyps. Der folgende Code fügt allen Objekten des Typs `Car` eine `color` Eigenschaft mit dem Wert `"original color"` hinzu und überschreibt diesen Wert dann nur in der Instanz `car1` mit dem Wert `"black"`. Weitere Informationen finden Sie unter [Prototype](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes).

```js
function Car() {}
const car1 = new Car();
const car2 = new Car();

console.log(car1.color); // undefined

Car.prototype.color = "original color";
console.log(car1.color); // 'original color'

car1.color = "black";
console.log(car1.color); // 'black'

console.log(Object.getPrototypeOf(car1).color); // 'original color'
console.log(Object.getPrototypeOf(car2).color); // 'original color'
console.log(car1.color); // 'black'
console.log(car2.color); // 'original color'
```

> [!NOTE]
> Während die Konstruktormethode wie jede reguläre Funktion aufgerufen werden kann (d. h. ohne den `new` Operator),
> wird in diesem Fall kein neues Objekt erstellt und der Wert von `this` ist ebenfalls anders.

Eine Funktion kann wissen, ob sie mit `new` aufgerufen wird, indem sie [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) überprüft. `new.target` ist nur `undefined`, wenn die Funktion ohne `new` aufgerufen wird. Zum Beispiel können Sie eine Funktion haben, die unterschiedlich verhält, wenn sie aufgerufen wird versus wenn sie konstruiert wird:

```js
function Car(color) {
  if (!new.target) {
    // Called as function.
    return `${color} car`;
  }
  // Called with new.
  this.color = color;
}

const a = Car("red"); // a is "red car"
const b = new Car("red"); // b is `Car { color: "red" }`
```

Vor ES6, das [Klassen](/de/docs/Web/JavaScript/Reference/Classes) eingeführt hat, sind die meisten eingebauten JavaScript-Objekte sowohl aufrufbar als auch konstruierbar, obwohl viele von ihnen unterschiedliche Verhaltensweisen zeigen. Um einige zu nennen:

- [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array), [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) verhalten sich gleich, wenn sie als Funktion oder als Konstruktor aufgerufen werden.
- [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean), [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) und [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) wandeln ihr Argument in den jeweiligen primitiven Typ um, wenn sie aufgerufen werden, und geben Wrapper-Objekte zurück, wenn sie konstruiert werden.
- [`Date()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) gibt eine Zeichenkette zurück, die das aktuelle Datum darstellt, wenn sie aufgerufen wird, äquivalent zu `new Date().toString()`.

Nach ES6 ist die Sprache strikter darin, welche Konstruktoren und welche Funktionen sind. Zum Beispiel:

- [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) und [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) können nur ohne `new` aufgerufen werden. Der Versuch, sie zu konstruieren, wird einen `TypeError` werfen.
- [`Proxy`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) und [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) können nur mit `new` konstruiert werden. Der Versuch, sie aufzurufen, wird einen `TypeError` werfen.

## Beispiele

### Objekttyp und Objektinstanz

Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp
`Car` genannt wird, und dass er Eigenschaften für Marke, Modell und Baujahr hat.
Dazu würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Nun können Sie ein Objekt namens `myCar` wie folgt erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Diese Anweisung erstellt `myCar` und weist ihm die angegebenen Werte für seine
Eigenschaften zu. Dann ist der Wert von `myCar.make` die Zeichenfolge "Eagle",
`myCar.year` ist die ganze Zahl 1993 usw.

Sie können eine beliebige Anzahl von `car` Objekten durch Aufrufe von `new` erstellen. Zum
Beispiel:

```js
const kensCar = new Car("Nissan", "300ZX", 1992);
```

### Objekteigenschaften, die selbst ein weiteres Objekt sind

Angenommen, Sie definieren ein Objekt namens `Person` wie folgt:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

Und instanziieren dann zwei neue `Person` Objekte wie folgt:

```js
const rand = new Person("Rand McNally", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
```

Dann können Sie die Definition von `Car` um eine
Eigenschaft `owner` erweitern, die ein `Person` Objekt übernimmt, wie folgt:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

Um die neuen Objekte zu instanziieren, verwenden Sie dann Folgendes:

```js
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
```

Anstatt beim Erstellen der neuen Objekte einen literalen Zeichenfolgen- oder ganzzahligen Wert zu übergeben, übergeben die
obigen Anweisungen die Objekte `rand` und `ken` als die
Parameter für die Besitzer. Um den Namen des Besitzers von `car2` herauszufinden, können Sie
die folgende Eigenschaft abrufen:

```js
car2.owner.name;
```

### Verwendung von `new` mit Klassen

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p = new Person("Caroline");
p.greet(); // Hello, my name is Caroline
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Function")}}
- {{jsxref("Reflect.construct()")}}
- {{jsxref("Object")}}
