---
title: in
slug: Web/JavaScript/Reference/Operators/in
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{jsSidebar("Operators")}}

Der **`in`** Operator gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt oder seiner Prototypenkette enthalten ist.

Der `in` Operator kann nicht verwendet werden, um nach Werten in anderen Sammlungen zu suchen. Um zu testen, ob ein bestimmter Wert in einem Array existiert, verwenden Sie {{jsxref("Array.prototype.includes()")}}. Für Mengen verwenden Sie {{jsxref("Set.prototype.has()")}}.

{{EmbedInteractiveExample("pages/js/expressions-inoperator.html")}}

## Syntax

```js-nolint
prop in object
#prop in object
```

### Parameter

- `prop`
  - : Ein String oder Symbol, das einen Eigenschaftsnamen repräsentiert (Nicht-Symbole werden in [Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)). Kann auch ein [privater Eigenschaftsbezeichner](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sein.
- `object`
  - : Objekt, das überprüft wird, ob es (oder seine Prototypenkette) die Eigenschaft mit dem angegebenen Namen (`prop`) enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `object` kein Objekt ist (d.h. ein primitiver Wert).

## Beschreibung

Der `in` Operator testet, ob eine String- oder Symboleigenschaft in einem Objekt oder seiner Prototypenkette vorhanden ist. Wenn Sie nur _nicht-geerbte_ Eigenschaften überprüfen möchten, verwenden Sie stattdessen {{jsxref("Object.hasOwn()")}}.

Eine Eigenschaft kann in einem Objekt vorhanden sein, aber den Wert `undefined` haben. Deshalb ist `x in obj` nicht dasselbe wie `obj.x !== undefined`. Um `in` nach dem Hinzufügen einer Eigenschaft `false` zurückgeben zu lassen, verwenden Sie den [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator, anstatt den Wert dieser Eigenschaft auf `undefined` zu setzen.

Sie können den `in` Operator auch verwenden, um zu überprüfen, ob ein bestimmtes [privates Klassenfeld oder Methode](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) in einem Objekt definiert wurde. Der Operator gibt `true` zurück, wenn die Eigenschaft definiert ist, und `false`, andernfalls. Dies ist bekannt als ein _gebrandter Check_, weil er nur dann `true` zurückgibt, wenn das Objekt mit diesem Klassenkonstruktor erstellt wurde, nach dem Sie auch sicher auf andere private Eigenschaften zugreifen können.

Dies ist eine spezielle Syntax — die linke Seite des `in` Operators ist ein Eigenschaftsbezeichner anstelle eines Ausdrucks, aber ohne Anführungszeichen (weil es sonst eine String-Eigenschaft wäre, nicht eine private Eigenschaft).

Da der Zugriff auf private Eigenschaften von Objekten, die nicht mit der aktuellen Klasse zusammenhängen, einen {{jsxref("TypeError")}} auslöst, anstatt `undefined` zurückzugeben, können Sie mit dieser Syntax:

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

verkürzen auf:

```js
class C {
  #x;
  static isC(obj) {
    return #x in obj;
  }
}
```

Es vermeidet auch allgemein die Notwendigkeit, sich mit Fehlerbehandlungen zu beschäftigen, nur um auf eine private Eigenschaft zuzugreifen, die möglicherweise nicht existiert.

Der `in` Operator erfordert jedoch, dass die private Eigenschaft zuvor in der eingeschlossenen Klasse deklariert wurde – andernfalls würde er einen {{jsxref("SyntaxError")}} auslösen ("Private field '#x' must be declared in an enclosing class"), derselbe Fehler, als wenn Sie versuchen, auf eine nicht deklarierte private Eigenschaft zuzugreifen.

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

Die folgenden Beispiele zeigen einige Anwendungen des `in` Operators.

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
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true
```

Sie müssen ein Objekt auf der rechten Seite des `in` Operators angeben. Zum Beispiel können Sie einen String angeben, der mit dem `String` Konstruktor erstellt wurde, aber Sie können keinen String-Literal angeben.

```js
const color1 = new String("green");
"length" in color1; // returns true

const color2 = "coral";
// generates an error (color2 is not a String object)
"length" in color2;
```

### Verwendung des in-Operators mit gelöschten oder undefinierten Eigenschaften

Wenn Sie eine Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator löschen, gibt der `in` Operator `false` für diese Eigenschaft zurück.

```js
const mycar = { make: "Honda", model: "Accord", year: 1998 };
delete mycar.make;
"make" in mycar; // returns false

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
3 in trees; // returns false
```

Wenn Sie eine Eigenschaft auf {{jsxref("undefined")}} setzen, sie aber nicht löschen, gibt der `in` Operator `true` für diese Eigenschaft zurück.

```js
const mycar = { make: "Honda", model: "Accord", year: 1998 };
mycar.make = undefined;
"make" in mycar; // returns true
```

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
3 in trees; // returns true
```

Der `in` Operator wird `false` für [leere Array-Slots](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) zurückgeben, auch wenn der direkte Zugriff darauf `undefined` zurückgibt.

```js
const empties = new Array(3);
empties[2]; // returns undefined
2 in empties; // returns false
```

Um dies zu vermeiden, stellen Sie sicher, dass ein neues Array immer mit nicht-leeren Werten gefüllt ist oder nicht über das Ende des Arrays hinausgeschrieben wird.

```js
const empties = new Array(3).fill(undefined);
2 in empties; // returns true
```

### Vererbte Eigenschaften

Der `in` Operator gibt `true` für Eigenschaften in der Prototypenkette zurück. Dies kann unerwünscht sein, wenn Sie Objekte verwenden, um beliebige Schlüssel-Wert-Paare zu speichern.

```js example-bad
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

hasPerson("hasOwnProperty"); // true
```

Sie können {{jsxref("Object.hasOwn()")}} verwenden, um zu überprüfen, ob das Objekt den Schlüssel hat.

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return Object.hasOwn(ages, name);
}

hasPerson("hasOwnProperty"); // false
```

Alternativ sollten Sie in Betracht ziehen, ein [null Prototype-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) oder eine {{jsxref("Map")}} zum Speichern von `ages` zu verwenden, um andere Fehler zu vermeiden.

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

### Verwendung des in-Operators zur Implementierung von gebrandeten Checks

Das folgende Code-Fragment demonstriert eine statische Funktion, die angibt, ob ein Objekt mit dem `Person` Konstruktor erstellt wurde und daher andere Methoden sicher ausführen kann.

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

Es hilft, den folgenden Fall zu vermeiden:

```js
const p2 = {};

p1.ageDifference(p2); // TypeError: Cannot read private member #age from an object whose class did not declare it
```

Ohne den `in` Operator müssten Sie einen `try...catch` Block verwenden, um zu überprüfen, ob das Objekt die private Eigenschaft hat.

Sie können dies auch als [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) Methode der Klasse implementieren, damit Sie den [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Operator verwenden können, um dieselbe Überprüfung durchzuführen (die standardmäßig nur das Vorhandensein von `Person.prototype` in der Prototypenkette des Objekts überprüft).

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

Für weitere Beispiele siehe [Private properties](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) und den [Klassen-Leitfaden](/de/docs/Web/JavaScript/Guide/Using_classes#private_fields).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Reflect.has()")}}
- [Enumerability and ownership of properties](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
