---
title: in
slug: Web/JavaScript/Reference/Operators/in
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **`in`**-Operator gibt `true` zurück, wenn die angegebene Eigenschaft in dem angegebenen Objekt oder dessen Prototypen-Kette enthalten ist.

Der `in`-Operator kann nicht verwendet werden, um Werte in anderen Sammlungen zu durchsuchen. Um zu testen, ob ein bestimmter Wert in einem Array existiert, verwenden Sie {{jsxref("Array.prototype.includes()")}}. Für Sets verwenden Sie {{jsxref("Set.prototype.has()")}}.

{{InteractiveExample("JavaScript Demo: Expressions - in operator")}}

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
  - : Ein String oder Symbol, der einen Eigenschaftsnamen repräsentiert (Nicht-Symbole werden in [Strings konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)). Kann auch ein [Privater Eigenschaftsbezeichner](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sein.
- `object`
  - : Objekt, bei dem überprüft wird, ob es (oder dessen Prototypen-Kette) die Eigenschaft mit dem angegebenen Namen (`prop`) enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `object` kein Objekt ist (z. B. ein primitiver Wert).

## Beschreibung

Der `in`-Operator testet, ob eine String- oder Symbol-Eigenschaft in einem Objekt oder dessen Prototypen-Kette vorhanden ist. Möchten Sie nur _nicht geerbte_ Eigenschaften überprüfen, verwenden Sie stattdessen {{jsxref("Object.hasOwn()")}}.

Eine Eigenschaft kann in einem Objekt vorhanden sein, aber den Wert `undefined` haben. Daher ist `"x" in obj` nicht dasselbe wie `obj.x !== undefined`. Um zu bewirken, dass `in` nach Hinzufügen einer Eigenschaft `false` zurückgibt, verwenden Sie den [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator anstelle des Setzens des Wertes dieser Eigenschaft auf `undefined`.

Sie können den `in`-Operator auch verwenden, um zu prüfen, ob ein bestimmtes [privates Klassenfeld oder eine Methode](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) in einem Objekt definiert wurde. Der Operator gibt `true` zurück, wenn die Eigenschaft definiert ist, und `false` andernfalls. Dies wird als _Brandprüfung_ bezeichnet, da es `true` zurückgibt, wenn und nur wenn das Objekt mit diesem Klassenkonstruktor erstellt wurde, sodass Sie auch sicher auf andere private Eigenschaften zugreifen können.

Dies ist eine besondere Syntax – die linke Seite des `in`-Operators ist ein Eigenschaftsbezeichner anstelle eines Ausdrucks, jedoch unquoted (weil es sonst eine String-Eigenschaft und keine private Eigenschaft wäre).

Da der Zugriff auf private Eigenschaften von Objekten, die nicht mit der aktuellen Klasse verwandt sind, einen {{jsxref("TypeError")}} auslöst, anstatt `undefined` zurückzugeben, können Sie diese Syntax verwenden, um zu verkürzen:

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

Damit wird in der Regel vermieden, dass Fehlerbehandlung erforderlich ist, nur um auf eine möglicherweise nicht vorhandene private Eigenschaft zuzugreifen.

Jedoch erfordert der `in`-Operator dennoch, dass die private Eigenschaft vorher in der umschließenden Klasse deklariert wurde – andernfalls wird ein {{jsxref("SyntaxError")}} ("Private field '#x' must be declared in an enclosing class") ausgelöst, derselbe Fehler wie beim Versuch, auf eine nicht deklarierte private Eigenschaft zuzugreifen.

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

Die folgenden Beispiele zeigen einige Anwendungsfälle des `in`-Operators.

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

Sie müssen ein Objekt auf der rechten Seite des `in`-Operators angeben. Zum Beispiel können Sie einen mit dem `String`-Konstruktor erstellten String angeben, jedoch keinen String-Literal.

```js
const color1 = new String("green");
"length" in color1; // returns true

const color2 = "coral";
// generates an error (color2 is not a String object)
"length" in color2;
```

### Verwendung des in-Operators mit gelöschten oder undefined Bereichen

Wenn Sie eine Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator löschen, gibt der `in`-Operator für diese Eigenschaft `false` zurück.

```js
const myCar = { make: "Honda", model: "Accord", year: 1998 };
delete myCar.make;
"make" in myCar; // returns false

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
3 in trees; // returns false
```

Wenn Sie eine Eigenschaft auf {{jsxref("undefined")}} setzen, sie jedoch nicht löschen, gibt der `in`-Operator für diese Eigenschaft `true` zurück.

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

Der `in`-Operator gibt für [leere Array-Plätze](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) `false` zurück, selbst wenn der direkte Zugriff darauf `undefined` zurückgibt.

```js
const empties = new Array(3);
empties[2]; // returns undefined
2 in empties; // returns false
```

Um dies zu vermeiden, stellen Sie sicher, dass ein neues Array immer mit nicht-leeren Werten gefüllt wird oder nicht außerhalb der Array-Grenzen geschrieben wird.

```js
const empties = new Array(3).fill(undefined);
2 in empties; // returns true
```

### Geerbte Eigenschaften

Der `in`-Operator gibt `true` für Eigenschaften in der Prototypen-Kette zurück. Dies kann unerwünscht sein, wenn Sie Objekte verwenden, um beliebige Schlüssel-Wert-Paare zu speichern.

```js example-bad
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

hasPerson("hasOwnProperty"); // true
```

Sie können {{jsxref("Object.hasOwn()")}} verwenden, um zu überprüfen, ob das Objekt den Schlüssel besitzt.

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return Object.hasOwn(ages, name);
}

hasPerson("hasOwnProperty"); // false
```

Alternativ sollten Sie in Betracht ziehen, ein [Objekt mit null Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) oder eine {{jsxref("Map")}} zum Speichern von `ages` zu verwenden, um andere Fehler zu vermeiden.

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

### Verwendung des in-Operators zur Implementierung von Brandprüfungen

Der unten stehende Codeausschnitt demonstriert eine statische Funktion, die feststellt, ob ein Objekt mit dem `Person`-Konstruktor erstellt wurde und daher andere Methoden sicher ausführen kann.

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

Dies hilft, den folgenden Fall zu verhindern:

```js
const p2 = {};

p1.ageDifference(p2); // TypeError: Cannot read private member #age from an object whose class did not declare it
```

Ohne den `in`-Operator müssten Sie einen `try...catch`-Block verwenden, um zu überprüfen, ob das Objekt die private Eigenschaft besitzt.

Sie können dies auch als eine [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode der Klasse implementieren, sodass Sie den [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof)-Operator verwenden können, um dieselbe Prüfung durchzuführen (die standardmäßig nur das Vorhandensein von `Person.prototype` in der Prototypenkette des Objekts überprüft).

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

Weitere Beispiele finden Sie unter [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) und im [Klassen-Leitfaden](/de/docs/Web/JavaScript/Guide/Using_classes#private_fields).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Reflect.has()")}}
- [Enumerierbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
