---
title: new
slug: Web/JavaScript/Reference/Operators/new
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator **`new`** ermöglicht es, eine Instanz eines benutzerdefinierten Objekttyps oder eines der integrierten Objekttypen mit einer Konstruktorfunktion zu erstellen.

{{InteractiveExample("JavaScript Demo: new operator")}}

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
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 17 (Zugriff und Aufruf). Wenn die Argumentliste weggelassen wird, ist auch die Priorität 16 (`new` ohne Argumente) zulässig. Das Ergebnis muss ein Konstruktor sein. Üblicherweise handelt es sich um einen Bezeichner, einen [Property-Zugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) oder einen Funktions- bzw. Klassenliteral-Ausdruck (das {{Glossary("IIFE", "IIFE")}}-Muster). [Optional Chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) und Funktionsaufrufe sind nicht zulässig: `new x?.y()` ist ein Syntaxfehler, während `new x()()` als `(new x())()` interpretiert wird. Sie können die Ausdrücke explizit als `new (x?.y)()` und `new (x())()` klammern, um das Problem zu umgehen.
- `arg1`, `arg2`, …, `argN`
  - : Jedes Argument kann ein [Spread-Argument](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung) sein. `new Foo` entspricht `new Foo()`: Wird keine Argumentliste angegeben, wird `Foo` ohne Argumente aufgerufen.

### Rückgabewert

Das von `constructor` zurückgegebene Objekt oder die neu erstellte Instanz, falls `constructor` kein Objekt zurückgibt.

## Beschreibung

Wenn eine Funktion mit dem Schlüsselwort **`new`** aufgerufen wird, wird sie als Konstruktor verwendet. `new` führt dabei Folgendes aus:

1. Es erstellt ein leeres, gewöhnliches JavaScript-Objekt. Der Einfachheit halber nennen wir es `newInstance`.
2. Es setzt das [[Prototype]] von `newInstance` auf die `prototype`-Property der Konstruktorfunktion, sofern `prototype` ein {{jsxref("Object")}} ist. Andernfalls bleibt `newInstance` ein gewöhnliches Objekt mit `Object.prototype` als [[Prototype]].

   > [!NOTE]
   > Properties und Objekte, die der `prototype`-Property der Konstruktorfunktion hinzugefügt werden, sind daher für alle mit dieser Konstruktorfunktion erstellten Instanzen zugänglich.

3. Es führt die Konstruktorfunktion mit den angegebenen Argumenten aus und bindet `newInstance` als [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Kontext. Dadurch beziehen sich alle Verweise auf `this` in der Konstruktorfunktion auf `newInstance`.
4. Wenn die Konstruktorfunktion einen [nicht-primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) zurückgibt, wird dieser Rückgabewert zum Ergebnis des gesamten `new`-Ausdrucks. Gibt die Konstruktorfunktion dagegen nichts oder einen primitiven Wert zurück, wird stattdessen `newInstance` zurückgegeben. (Normalerweise geben Konstruktoren keinen Wert zurück, sie können dies aber tun, um die übliche Objekterstellung zu überschreiben.)

[Klassen](/de/docs/Web/JavaScript/Reference/Classes) können nur mit dem Operator `new` instanziiert werden. Der Versuch, eine Klasse ohne `new` aufzurufen, löst einen `TypeError` aus.

Um ein Objekt mit einer benutzerdefinierten Konstruktorfunktion zu erstellen, sind zwei Schritte erforderlich:

1. Definieren Sie den Objekttyp, indem Sie eine Funktion schreiben, die seinen Namen und seine Properties festlegt.
   Eine Konstruktorfunktion zum Erstellen eines Objekts `Foo` könnte beispielsweise so aussehen:

   ```js
   function Foo(bar1, bar2) {
     this.bar1 = bar1;
     this.bar2 = bar2;
   }
   ```

2. Erstellen Sie mit `new` eine Instanz des Objekts.

   ```js
   const myFoo = new Foo("Bar 1", 2021);
   ```

> [!NOTE]
> Ein Objekt kann eine Property besitzen, die selbst ein anderes Objekt ist. Siehe die Beispiele unten.

Sie können einer bereits definierten Objektinstanz jederzeit eine Property hinzufügen. Beispielsweise fügt die Anweisung `car1.color = "black"` dem Objekt `car1` die Property `color` hinzu und weist ihr den Wert `"black"` zu.

Dies wirkt sich jedoch nicht auf andere Objekte aus. Um die neue Property allen Objekten desselben Typs hinzuzufügen, müssen Sie sie der `prototype`-Property des Konstruktors hinzufügen. Dadurch definieren Sie eine Property, die alle mit dieser Funktion erstellten Objekte gemeinsam nutzen, statt nur eine einzelne Instanz des Objekttyps. Der folgende Code fügt allen Objekten vom Typ `Car` eine `color`-Property mit dem Wert `"original color"` hinzu und überschreibt diesen Wert anschließend nur in der Objektinstanz `car1` mit der Zeichenfolge `"black"`. Weitere Informationen finden Sie unter [prototype](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes).

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
> Die Konstruktorfunktion kann wie jede gewöhnliche Funktion aufgerufen werden (also ohne den Operator `new`).
> In diesem Fall wird jedoch kein neues Objekt erstellt, und auch der Wert von `this` ist ein anderer.

Eine Funktion kann anhand von [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) feststellen, ob sie mit `new` aufgerufen wurde. `new.target` ist nur dann `undefined`, wenn die Funktion ohne `new` aufgerufen wird. Sie können beispielsweise eine Funktion erstellen, die sich bei einem gewöhnlichen Aufruf anders verhält als bei einem Aufruf als Konstruktor:

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

Vor ES6, mit dem [Klassen](/de/docs/Web/JavaScript/Reference/Classes) eingeführt wurden, konnten die meisten integrierten JavaScript-Funktionen sowohl als Funktionen aufgerufen als auch als Konstruktoren verwendet werden, obwohl viele dabei unterschiedliches Verhalten zeigen. Einige Beispiele:

- [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array), [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) verhalten sich bei einem Aufruf als Funktion genauso wie bei einem Aufruf als Konstruktor.
- [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean), [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) und [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) wandeln ihr Argument bei einem Funktionsaufruf in den jeweiligen primitiven Typ um und geben bei einem Aufruf als Konstruktor Wrapper-Objekte zurück.
- [`Date()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) gibt bei einem Funktionsaufruf eine Zeichenfolge zurück, die das aktuelle Datum darstellt. Dies entspricht `new Date().toString()`.

Seit ES6 unterscheidet die Sprache strenger zwischen Konstruktoren und Funktionen. Zum Beispiel:

- [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) und [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) können nur ohne `new` aufgerufen werden. Der Versuch, sie als Konstruktoren zu verwenden, löst einen `TypeError` aus.
- [`Proxy`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) und [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) können nur mit `new` als Konstruktoren verwendet werden. Der Versuch, sie ohne `new` aufzurufen, löst einen `TypeError` aus.

## Beispiele

### Objekttyp und Objektinstanz

Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Dieser Objekttyp soll `Car` heißen und Properties für Hersteller, Modell und Baujahr besitzen. Dazu schreiben Sie die folgende Funktion:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Nun können Sie wie folgt ein Objekt namens `myCar` erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Diese Anweisung erstellt `myCar` und weist seinen Properties die angegebenen Werte zu. Anschließend ist der Wert von `myCar.make` die Zeichenfolge „Eagle“, `myCar.year` ist die Ganzzahl 1993 und so weiter.

Sie können durch Aufrufe mit `new` beliebig viele `car`-Objekte erstellen. Zum Beispiel:

```js
const kensCar = new Car("Nissan", "300ZX", 1992);
```

### Objekt-Property, die selbst ein anderes Objekt ist

Angenommen, Sie definieren ein Objekt namens `Person` wie folgt:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

Anschließend instanziieren Sie zwei neue `Person`-Objekte:

```js
const rand = new Person("Rand McNally", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
```

Nun können Sie die Definition von `Car` so ändern, dass sie eine `owner`-Property enthält, die ein `Person`-Objekt entgegennimmt:

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

Anstatt beim Erstellen der neuen Objekte eine Zeichenfolge oder Ganzzahl als Literal zu übergeben, übergeben die obigen Anweisungen die Objekte `rand` und `ken` als Parameter für die Eigentümer. Um den Namen des Eigentümers von `car2` zu ermitteln, können Sie auf die folgende Property zugreifen:

```js
car2.owner.name;
```

### `new` mit Klassen verwenden

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
