---
title: new
slug: Web/JavaScript/Reference/Operators/new
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **`new`** Operator ermöglicht es Entwicklern, eine Instanz eines benutzerdefinierten Objekttyps oder eines eingebauten Objekttyps zu erstellen, der eine Konstruktorfunktion hat.

{{InteractiveExample("JavaScript Demo: Expressions - new operator")}}

```js interactive-example
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Eagle", "Talon TSi", 1993);

console.log(car1.make);
// Expected output: "Eagle"
```

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
  - : Eine Klasse oder Funktion, die den Typ der Objektinstanz spezifiziert. Der Ausdruck kann alles mit ausreichender [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) sein, einschließlich eines Bezeichners, eines [Eigenschaftszugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) oder eines anderen `new`-Ausdrucks, aber [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist nicht erlaubt.
- `arg1`, `arg2`, …, `argN`
  - : Eine Liste von Werten, mit denen der `constructor` aufgerufen wird. `new Foo` ist gleichwertig mit `new Foo()`, d.h. wenn keine Argumentliste angegeben ist, wird `Foo` ohne Argumente aufgerufen.

## Beschreibung

Wenn eine Funktion mit dem **`new`**-Schlüsselwort aufgerufen wird, wird die Funktion als Konstruktor verwendet. `new` führt die folgenden Schritte aus:

1. Erstellt ein leeres, einfaches JavaScript-Objekt. Der Einfachheit halber nennen wir es `newInstance`.
2. Zeigt `newInstance`s [[Prototype]] auf die `prototype`-Eigenschaft der Konstruktorfunktion, wenn das `prototype` ein {{jsxref("Object")}} ist. Andernfalls bleibt `newInstance` ein einfaches Objekt mit `Object.prototype` als [[Prototype]].

   > [!NOTE]
   > Eigenschaften/Objekte, die zur `prototype`-Eigenschaft der Konstruktorfunktion hinzugefügt werden, sind dadurch für alle Instanzen zugänglich, die von der Konstruktorfunktion erstellt werden.

3. Führt die Konstruktorfunktion mit den gegebenen Argumenten aus und bindet `newInstance` als [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Kontext (d.h. alle Verweise auf `this` in der Konstruktorfunktion beziehen sich jetzt auf `newInstance`).
4. Wenn die Konstruktorfunktion einen [Nicht-Primitivwert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) zurückgibt, wird dieser Rückgabewert das Ergebnis des gesamten `new`-Ausdrucks. Andernfalls, wenn die Konstruktorfunktion nichts zurückgibt oder einen primitiven Wert zurückgibt, wird `newInstance` stattdessen zurückgegeben. (Normalerweise geben Konstruktoren keinen Wert zurück, aber sie können dies tun, um den normalen Objekterstellungsprozess zu überschreiben.)

[Klassen](/de/docs/Web/JavaScript/Reference/Classes) können nur mit dem `new`-Operator instanziiert werden — der Versuch, eine Klasse ohne `new` aufzurufen, wird einen `TypeError` auslösen.

Um ein Objekt mit einer benutzerdefinierten Konstruktorfunktion zu erstellen, sind zwei Schritte erforderlich:

1. Definieren Sie den Objekttyp, indem Sie eine Funktion schreiben, die seinen Namen und seine Eigenschaften angibt.
   Beispielsweise könnte eine Konstruktorfunktion, um ein Objekt `Foo` zu erstellen, so aussehen:

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
> Ein Objekt kann eine Eigenschaft haben, die selbst ein anderes Objekt ist. Siehe die Beispiele unten.

Sie können jederzeit eine Eigenschaft zu einer zuvor definierten Objektinstanz hinzufügen. Beispielsweise fügt die Anweisung `car1.color = "black"` eine Eigenschaft `color` zu `car1` hinzu und weist ihr den Wert `"black"` zu.

Dies hat jedoch keine Auswirkungen auf andere Objekte. Um die neue Eigenschaft zu allen Objekten desselben Typs hinzuzufügen, müssen Sie die Eigenschaft zur `prototype`-Eigenschaft des Konstruktors hinzufügen. Dadurch wird eine Eigenschaft definiert, die von allen Objekten geteilt wird, die mit dieser Funktion erstellt wurden, anstatt nur von einer Instanz des Objekttyps. Der folgende Code fügt allen Objekten des Typs `Car` eine `color`-Eigenschaft mit dem Wert `"original color"` hinzu und überschreibt diesen Wert dann nur in der Instanz `car1` mit der Zeichenkette `"black"`. Für weitere Informationen siehe [prototype](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes).

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
> Während die Konstruktorfunktion wie jede normale Funktion (d.h. ohne den `new`-Operator) aufgerufen werden kann,
> wird in diesem Fall kein neues Objekt erstellt und der Wert von `this` ist ebenfalls unterschiedlich.

Eine Funktion kann wissen, ob sie mit `new` aufgerufen wird, indem sie [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) überprüft. `new.target` ist nur `undefined`, wenn die Funktion ohne `new` aufgerufen wird. Beispielsweise können Sie eine Funktion haben, die sich unterschiedlich verhält, je nachdem ob sie aufgerufen oder konstruiert wird:

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

Vor ES6, das [Klassen](/de/docs/Web/JavaScript/Reference/Classes) einführte, waren die meisten eingebauten JavaScripts sowohl aufrufbar als auch konstruierbar, obwohl viele von ihnen unterschiedliche Verhaltensweisen zeigten. Um ein paar zu nennen:

- [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array), [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) verhalten sich gleich, wenn sie als Funktion oder Konstruktor aufgerufen werden.
- [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean), [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) und [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) wandeln ihr Argument in den entsprechenden primitiven Typ um, wenn sie aufgerufen werden, und geben Wrapper-Objekte zurück, wenn sie konstruiert werden.
- [`Date()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) gibt eine Zeichenkette zurück, die das aktuelle Datum darstellt, wenn es aufgerufen wird, gleichbedeutend mit `new Date().toString()`.

Nach ES6 ist die Sprache strenger darüber, welche Konstruktoren und welche Funktionen sind. Zum Beispiel:

- [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) und [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) können nur ohne `new` aufgerufen werden. Der Versuch, sie zu konstruieren, wird einen `TypeError` auslösen.
- [`Proxy`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) und [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) können nur mit `new` konstruiert werden. Der Versuch, sie aufzurufen, wird einen `TypeError` auslösen.

## Beispiele

### Objekttyp und Objektinstanz

Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird und Eigenschaften für Marke, Modell und Jahr haben soll. Dazu würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Jetzt können Sie ein Objekt namens `myCar` wie folgt erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Diese Anweisung erstellt `myCar` und weist ihm die angegebenen Werte für seine Eigenschaften zu. Der Wert von `myCar.make` ist dann die Zeichenkette "Eagle", `myCar.year` ist die Ganzzahl 1993 und so weiter.

Sie können eine beliebige Anzahl von `car`-Objekten durch Aufrufe von `new` erstellen. Zum Beispiel:

```js
const kensCar = new Car("Nissan", "300ZX", 1992);
```

### Objekteigenschaft, die selbst ein anderes Objekt ist

Angenommen, Sie definieren ein Objekt namens `Person` wie folgt:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

Und dann instanziieren Sie zwei neue `Person`-Objekte wie folgt:

```js
const rand = new Person("Rand McNally", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
```

Dann können Sie die Definition von `Car` um eine `owner`-Eigenschaft erweitern, die ein `Person`-Objekt annimmt, wie folgt:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

Um die neuen Objekte zu instanziieren, verwenden Sie dann folgendes:

```js
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
```

Anstatt einen literalen Zeichenketten- oder Ganzzahlwert beim Erstellen der neuen Objekte zu übergeben, übergeben die obigen Anweisungen die Objekte `rand` und `ken` als Parameter für die Besitzer. Um den Namen des Besitzers von `car2` herauszufinden, können Sie auf die folgende Eigenschaft zugreifen:

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
