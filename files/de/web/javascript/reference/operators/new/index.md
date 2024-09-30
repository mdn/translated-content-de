---
title: new
slug: Web/JavaScript/Reference/Operators/new
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{jsSidebar("Operators")}}

Der **`new`** Operator ermöglicht es Entwicklern, eine Instanz eines benutzerdefinierten Objekttyps oder eines der eingebauten Objekttypen zu erstellen, die eine Konstruktorfunktion haben.

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
  - : Eine Klasse oder Funktion, die den Typ der Objektinstanz spezifiziert. Der Ausdruck kann alles mit ausreichender [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) sein, einschließlich eines Identifikators, eines [Property-Zugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) oder eines anderen `new` Ausdrucks, aber [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist nicht erlaubt.
- `arg1`, `arg2`, …, `argN`
  - : Eine Liste von Werten, mit denen der `constructor` aufgerufen wird. `new Foo` ist äquivalent zu `new Foo()`, d. h. wenn keine Argumentenliste angegeben ist, wird `Foo` ohne Argumente aufgerufen.

## Beschreibung

Wenn eine Funktion mit dem **`new`** Schlüsselwort aufgerufen wird, wird die Funktion als Konstruktor verwendet. `new` führt folgende Aufgaben aus:

1. Erstellt ein leeres, einfaches JavaScript-Objekt. Um der Bequemlichkeit willen nennen wir es `newInstance`.
2. Verweist das [[Prototype]] von `newInstance` auf die `prototype` Eigenschaft der Konstruktorfunktion, wenn das `prototype` ein {{jsxref("Object")}} ist. Andernfalls bleibt `newInstance` als einfaches Objekt mit `Object.prototype` als [[Prototype]] bestehen.

   > [!NOTE]
   > Eigenschaften/Objekte, die zur `prototype` Eigenschaft der Konstruktorfunktion hinzugefügt werden, sind somit für alle Instanzen zugänglich, die von der Konstruktorfunktion erstellt wurden.

3. Führt die Konstruktorfunktion mit den gegebenen Argumenten aus und bindet `newInstance` als [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Kontext (d. h. alle Verweise auf `this` in der Konstruktorfunktion beziehen sich jetzt auf `newInstance`).
4. Wenn die Konstruktorfunktion einen [nicht-primitiven](/de/docs/Web/JavaScript/Data_structures#primitive_values) Wert zurückgibt, wird dieser Rückgabewert das Ergebnis des gesamten `new` Ausdrucks. Andernfalls, wenn die Konstruktorfunktion nichts zurückgibt oder einen primitiven Wert zurückgibt, wird stattdessen `newInstance` zurückgegeben. (Normalerweise geben Konstruktoren keinen Wert zurück, aber sie können dies tun, um den normalen Objekt-Erstellungsprozess zu überschreiben.)

[Klassen](/de/docs/Web/JavaScript/Reference/Classes) können nur mit dem `new` Operator instanziiert werden – der Versuch, eine Klasse ohne `new` aufzurufen, wird einen `TypeError` werfen.

Das Erstellen eines Objekts mit einer benutzerdefinierten Konstruktorfunktion erfordert zwei Schritte:

1. Definieren Sie den Objekttyp, indem Sie eine Funktion schreiben, die den Namen und die Eigenschaften des Objekts spezifiziert.
   Zum Beispiel könnte eine Konstruktorfunktion zur Erstellung eines Objekts `Foo` folgendermaßen aussehen:

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

Sie können einer zuvor definierten Objektinstanz jederzeit eine Eigenschaft hinzufügen. Zum Beispiel fügt die Anweisung `car1.color = "black"` die Eigenschaft `color` zu `car1` hinzu und weist ihr den Wert `"black"` zu.

Dies beeinflusst jedoch keine anderen Objekte. Um die neue Eigenschaft allen Objekten des gleichen Typs hinzuzufügen, müssen Sie die Eigenschaft zur `prototype` Eigenschaft des Konstruktors hinzufügen. Dadurch wird eine Eigenschaft definiert, die von allen mit dieser Funktion erstellten Objekten geteilt wird, anstatt von nur einer Instanz des Objekttyps. Der folgende Code fügt allen Objekten des Typs `Car` eine `color` Eigenschaft mit dem Wert `"original color"` hinzu und überschreibt diesen Wert dann mit dem String `"black"` nur im Instanzobjekt `car1`. Weitere Informationen finden Sie unter [Prototype](/de/docs/Learn/JavaScript/Objects/Object_prototypes).

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
> Während die Konstruktorfunktion wie jede reguläre Funktion aufgerufen werden kann (d. h. ohne den `new` Operator),
> wird in diesem Fall kein neues Objekt erstellt und der Wert von `this` ist ebenfalls anders.

Eine Funktion kann wissen, ob sie mit `new` aufgerufen wird, indem sie [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) prüft. `new.target` ist nur dann `undefined`, wenn die Funktion ohne `new` aufgerufen wird. Zum Beispiel können Sie eine Funktion haben, die sich anders verhält, wenn sie aufgerufen wird, im Vergleich zu wenn sie konstruiert wird:

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

Vor ES6, das [Klassen](/de/docs/Web/JavaScript/Reference/Classes) eingeführt hat, sind die meisten JavaScript-Built-ins sowohl aufrufbar als auch konstruierbar, obwohl viele von ihnen unterschiedliche Verhaltensweisen zeigen. Um einige zu nennen:

- [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array), [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error), und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) verhalten sich gleich, wenn sie als Funktion oder als Konstruktor aufgerufen werden.
- [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean), [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) und [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) zwingen ihr Argument beim Aufruf in den jeweiligen primitiven Typ, und geben Wrapper-Objekte zurück, wenn sie konstruiert werden.
- [`Date()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) gibt beim Aufruf einen String zurück, der das aktuelle Datum darstellt, was `new Date().toString()` entspricht.

Nach ES6 ist die Sprache strenger darüber, was Konstruktoren und was Funktionen sind. Zum Beispiel:

- [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) und [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) können nur ohne `new` aufgerufen werden. Der Versuch, sie zu konstruieren, wird einen `TypeError` werfen.
- [`Proxy`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) und [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) können nur mit `new` konstruiert werden. Der Versuch, sie aufzurufen, wird einen `TypeError` werfen.

## Beispiele

### Objekttyp und Objektinstanz

Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird, und Sie möchten, dass er Eigenschaften für Marke, Modell und Jahr hat.
Um dies zu tun, würden Sie die folgende Funktion schreiben:

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
Eigenschaften zu. Dann ist der Wert von `myCar.make` der String "Eagle",
`myCar.year` ist die ganze Zahl 1993, und so weiter.

Sie können eine beliebige Anzahl von `car` Objekten durch Aufrufe von `new` erstellen. Zum
Beispiel:

```js
const kensCar = new Car("Nissan", "300ZX", 1992);
```

### Objekteigenschaft, die selbst ein weiteres Objekt ist

Angenommen, Sie definieren ein Objekt namens `Person` wie folgt:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

Und dann instanziieren Sie zwei neue `Person` Objekte wie folgt:

```js
const rand = new Person("Rand McNally", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
```

Dann können Sie die Definition von `Car` um eine
`owner` Eigenschaft erweitern, die ein `Person` Objekt erfordert, wie folgt:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

Um die neuen Objekte zu instanziieren, verwenden Sie dann das folgende:

```js
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
```

Anstatt einen Literalstring oder eine ganze Zahl beim Erstellen der neuen Objekte zu übergeben, übergeben die
oben stehenden Anweisungen die Objekte `rand` und `ken` als
Parameter für die Eigentümer. Um den Namen des Eigentümers von `car2` herauszufinden, können Sie auf die folgende Eigenschaft zugreifen:

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
