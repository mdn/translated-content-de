---
title: in
slug: Web/JavaScript/Reference/Operators/in
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **`in`**-Operator gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt oder in dessen Prototypenkette vorhanden ist.

Der `in`-Operator kann nicht verwendet werden, um in anderen Sammlungen nach Werten zu suchen. Um zu prüfen, ob ein bestimmter Wert in einem Array vorhanden ist, verwenden Sie {{jsxref("Array.prototype.includes()")}}. Verwenden Sie für Sets {{jsxref("Set.prototype.has()")}}.

{{InteractiveExample("JavaScript Demo: in operator")}}

```js interactive-example
const car = { make: "Honda", model: "Accord", year: 1998 };

console.log("make" in car);
// Expected output: true

delete car.make;
if ("make" in car === false) {
  car.make = "Suzuki";
}

console.log(car.make);
// Expected output: "Suzuki"
```

## Syntax

```js-nolint
prop in object
#prop in object
```

### Parameter

- `prop`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 9 (relationale Operatoren). Sein Wert wird in einen Eigenschaftsschlüssel umgewandelt (einen [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) oder ein Symbol).
- `#prop`
  - : Ein [Bezeichner für ein privates Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), der in einer umschließenden Klasse deklariert ist.
- `object`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 10 (bitweise Verschiebung), der zu dem zu prüfenden Objekt ausgewertet wird.

### Rückgabewert

Ein boolescher Wert, der angibt, ob `object` die angegebene Eigenschaft direkt oder über seine Prototypenkette besitzt. Die Form `#prop in object` prüft, ob `object` selbst das angegebene private Element besitzt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `object` kein Objekt ist (also ein primitiver Wert).

## Beschreibung

Der `in`-Operator prüft, ob eine String- oder Symbol-Eigenschaft in einem Objekt oder dessen Prototypenkette vorhanden ist. Wenn Sie nur _nicht geerbte_ Eigenschaften prüfen möchten, verwenden Sie stattdessen {{jsxref("Object.hasOwn()")}}.

Eine Eigenschaft kann in einem Objekt vorhanden sein und dennoch den Wert `undefined` haben. Daher ist `"x" in obj` nicht gleichbedeutend mit `obj.x !== undefined`. Damit `in` nach dem Hinzufügen einer Eigenschaft `false` zurückgibt, verwenden Sie den Operator [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete), statt den Wert der Eigenschaft auf `undefined` zu setzen.

Sie können den `in`-Operator auch verwenden, um zu prüfen, ob ein bestimmtes [privates Klassenfeld oder eine private Methode](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) in einem Objekt definiert ist. Der Operator gibt `true` zurück, wenn das private Element definiert ist, andernfalls `false`. Dies wird als _Branded Check_ bezeichnet: Er gibt genau dann `true` zurück, wenn das Objekt mit dem Konstruktor dieser Klasse erstellt wurde. Anschließend können Sie auch auf andere private Elemente sicher zugreifen.

Dies ist eine spezielle Syntax: Auf der linken Seite des `in`-Operators steht ein Eigenschaftsbezeichner statt eines Ausdrucks, und er steht nicht in Anführungszeichen (sonst wäre er eine String-Eigenschaft und kein privates Element).

Da der Zugriff auf private Elemente bei Objekten, die nicht zur aktuellen Klasse gehören, einen {{jsxref("TypeError")}} auslöst, statt `undefined` zurückzugeben, können Sie mit dieser Syntax Folgendes verkürzen:

```js
class C {
  #x;
  static isC(obj) {
    try {
      obj.#x;
      return true;
    } catch {
      return false;
    }
  }
}
```

Zu:

```js
class C {
  #x;
  static isC(obj) {
    return #x in obj;
  }
}
```

Im Allgemeinen entfällt damit auch die Notwendigkeit einer Fehlerbehandlung, nur um auf ein möglicherweise nicht vorhandenes privates Element zuzugreifen.

Der `in`-Operator setzt allerdings weiterhin voraus, dass das private Element zuvor in der umschließenden Klasse deklariert wurde. Andernfalls wird derselbe {{jsxref("SyntaxError")}} ausgelöst wie beim Zugriff auf ein nicht deklariertes privates Element („Private field '#x' must be declared in an enclosing class“).

```js-nolint example-bad
class C {
  foo() {
    #x in this;
  }
}

new C().foo(); // SyntaxError: Private field '#x' must be declared in an enclosing class
```

## Beispiele

### Grundlegende Verwendung

Die folgenden Beispiele zeigen einige Verwendungsmöglichkeiten des `in`-Operators.

```js
// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)
Symbol.iterator in trees; // returns true

// Predefined objects
"PI" in Math; // returns true

// Custom objects
const myCar = { make: "Honda", model: "Accord", year: 1998 };
"make" in myCar; // returns true
"model" in myCar; // returns true
```

Auf der rechten Seite des `in`-Operators müssen Sie ein Objekt angeben. Beispielsweise können Sie einen mit dem `String`-Konstruktor erstellten String angeben, aber kein String-Literal.

```js
const color1 = new String("green");
"length" in color1; // returns true

const color2 = "coral";
// generates an error (color2 is not a String object)
"length" in color2;
```

### Verwendung des in-Operators mit gelöschten oder undefinierten Eigenschaften

Wenn Sie eine Eigenschaft mit dem Operator [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) löschen, gibt der `in`-Operator für diese Eigenschaft `false` zurück.

```js
const myCar = { make: "Honda", model: "Accord", year: 1998 };
delete myCar.make;
"make" in myCar; // returns false

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
3 in trees; // returns false
```

Wenn Sie eine Eigenschaft auf {{jsxref("undefined")}} setzen, sie aber nicht löschen, gibt der `in`-Operator für diese Eigenschaft `true` zurück.

```js
const myCar = { make: "Honda", model: "Accord", year: 1998 };
myCar.make = undefined;
"make" in myCar; // returns true
```

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
3 in trees; // returns true
```

Der `in`-Operator gibt für [leere Array-Positionen](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) `false` zurück, auch wenn ein direkter Zugriff darauf `undefined` ergibt.

```js
const empties = new Array(3);
empties[2]; // returns undefined
2 in empties; // returns false
```

Um dies zu vermeiden, stellen Sie sicher, dass ein neues Array stets mit Werten befüllt wird und Sie nicht auf Indizes jenseits des Array-Endes schreiben.

```js
const empties = new Array(3).fill(undefined);
2 in empties; // returns true
```

### Geerbte Eigenschaften

Der `in`-Operator gibt auch für Eigenschaften in der Prototypenkette `true` zurück. Das kann unerwünscht sein, wenn Sie Objekte zum Speichern beliebiger Schlüssel-Wert-Paare verwenden.

```js example-bad
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

hasPerson("hasOwnProperty"); // true
```

Mit {{jsxref("Object.hasOwn()")}} können Sie prüfen, ob das Objekt den Schlüssel selbst besitzt.

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return Object.hasOwn(ages, name);
}

hasPerson("hasOwnProperty"); // false
```

Alternativ sollten Sie erwägen, zum Speichern von `ages` ein [Objekt mit Null-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) oder eine {{jsxref("Map")}} zu verwenden, um andere Fehler zu vermeiden.

```js example-good
const ages = new Map([
  ["alice", 18],
  ["bob", 27],
]);

function hasPerson(name) {
  return ages.has(name);
}

hasPerson("hasOwnProperty"); // false
```

### Verwendung des in-Operators für Branded Checks

Der folgende Codeausschnitt zeigt eine statische Funktion, die feststellt, ob ein Objekt mit dem `Person`-Konstruktor erstellt wurde und daher andere Methoden sicher ausgeführt werden können.

```js
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  static isPerson(o) {
    return #age in o;
  }
  ageDifference(other) {
    return this.#age - other.#age;
  }
}

const p1 = new Person(20);
const p2 = new Person(30);
console.log(p1.ageDifference(p2)); // -10
console.log(Person.isPerson(p1)); // true

if (Person.isPerson(p1) && Person.isPerson(p2)) {
  console.log(p1.ageDifference(p2)); // -10
}
```

So lässt sich der folgende Fall vermeiden:

```js
const p2 = {};

p1.ageDifference(p2); // TypeError: Cannot read private member #age from an object whose class did not declare it
```

Ohne den `in`-Operator müssten Sie einen `try...catch`-Block verwenden, um zu prüfen, ob das Objekt das private Element besitzt.

Sie können diese Prüfung auch als [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode der Klasse implementieren. Dann können Sie den Operator [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) für dieselbe Prüfung verwenden. Standardmäßig prüft dieser lediglich, ob `Person.prototype` in der Prototypenkette des Objekts vorkommt.

```js
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  static [Symbol.hasInstance](o) {
    // Testing `this` to prevent false-positives when
    // calling `instanceof SubclassOfPerson`
    return this === Person && #age in o;
  }
  ageDifference(other) {
    return this.#age - other.#age;
  }
}

const p1 = new Person(20);
const p2 = new Person(30);

if (p1 instanceof Person && p2 instanceof Person) {
  console.log(p1.ageDifference(p2)); // -10
}
```

Weitere Beispiele finden Sie unter [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) und im [Leitfaden zu Klassen](/de/docs/Web/JavaScript/Guide/Using_classes#private_fields).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Reflect.has()")}}
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
