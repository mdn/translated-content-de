---
title: in
slug: Web/JavaScript/Reference/Operators/in
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Operators")}}

Der **`in`** Operator gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt oder seiner Prototypkette vorhanden ist.

Der `in` Operator kann nicht verwendet werden, um Werte in anderen Sammlungen zu suchen. Um zu testen, ob ein bestimmter Wert in einem Array existiert, verwenden Sie {{jsxref("Array.prototype.includes()")}}. Für Sets verwenden Sie {{jsxref("Set.prototype.has()")}}.

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
  - : Ein String oder Symbol, das einen Eigenschaftsnamen repräsentiert (Nicht-Symbole werden zu [Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)). Kann auch ein [privater Eigenschaften-Identifikator](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sein.
- `object`
  - : Objekt, das überprüft werden soll, ob es (oder seine Prototypkette) die Eigenschaft mit dem angegebenen Namen (`prop`) enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `object` kein Objekt ist (d.h. ein primitiver Wert).

## Beschreibung

Der `in` Operator prüft, ob eine String- oder Symboleigenschaft in einem Objekt oder seiner Prototypkette vorhanden ist. Wenn Sie nur auf _nicht-geerbte_ Eigenschaften prüfen möchten, verwenden Sie {{jsxref("Object.hasOwn()")}}.

Eine Eigenschaft kann in einem Objekt vorhanden sein, aber den Wert `undefined` haben. Daher ist `"x" in obj` nicht dasselbe wie `obj.x !== undefined`. Um `in` nach dem Hinzufügen einer Eigenschaft `false` zurückgeben zu lassen, verwenden Sie den [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator anstelle davon, den Wert der Eigenschaft auf `undefined` zu setzen.

Sie können den `in` Operator auch verwenden, um zu überprüfen, ob ein bestimmtes [privates Klassenfeld oder eine Methode](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) in einem Objekt definiert wurde. Der Operator gibt `true` zurück, wenn die Eigenschaft definiert ist, und `false`, wenn nicht. Dies wird als ein _gebranntmarkter Check_ bezeichnet, da er `true` zurückgibt, wenn und nur wenn das Objekt mit diesem Klassenkonstruktor erstellt wurde, wodurch Sie sicher auf andere private Eigenschaften zugreifen können.

Dies ist eine spezielle Syntax — die linke Seite des `in` Operators ist ein Eigenschaften-Identifikator anstelle eines Ausdrucks, aber unzitiert (weil es sonst eine String-Eigenschaft wäre, keine private Eigenschaft).

Da der Zugriff auf private Eigenschaften von Objekten, die nicht zur aktuellen Klasse gehören, einen {{jsxref("TypeError")}} auslöst, anstatt `undefined` zurückzugeben, ermöglicht Ihnen diese Syntax, abzukürzen:

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

Es vermeidet auch allgemein die Notwendigkeit, Fehlerbehandlung zu betreiben, nur um auf eine möglicherweise nicht existierende private Eigenschaft zuzugreifen.

Der `in` Operator erfordert jedoch immer noch, dass die private Eigenschaft vorher in der umschließenden Klasse deklariert wird — ansonsten würde er einen {{jsxref("SyntaxError")}} auslösen ("Privates Feld '#x' muss in einer umschließenden Klasse deklariert werden"), denselben Fehler, den Sie erhalten, wenn Sie versuchen, auf eine nicht deklarierte private Eigenschaft zuzugreifen.

```js-nolint example-bad
class C {
  foo() {
    #x in this;
  }
}

new C().foo(); // SyntaxError: Private field '#x' must be declared in an enclosing class
```

## Beispiele

### Grundlegende Nutzung

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
const myCar = { make: "Honda", model: "Accord", year: 1998 };
"make" in myCar; // returns true
"model" in myCar; // returns true
```

Sie müssen auf der rechten Seite des `in` Operators ein Objekt angeben. Zum Beispiel können Sie eine mit dem `String` Konstruktor erstellte Zeichenkette angeben, aber keine Zeichenkettenliterale.

```js
const color1 = new String("green");
"length" in color1; // returns true

const color2 = "coral";
// generates an error (color2 is not a String object)
"length" in color2;
```

### Verwenden des in Operators mit gelöschten oder undefinierten Eigenschaften

Wenn Sie eine Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator löschen, gibt der `in` Operator für diese Eigenschaft `false` zurück.

```js
const myCar = { make: "Honda", model: "Accord", year: 1998 };
delete myCar.make;
"make" in myCar; // returns false

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
3 in trees; // returns false
```

Wenn Sie jedoch eine Eigenschaft auf {{jsxref("undefined")}} setzen, aber nicht löschen, gibt der `in` Operator für diese Eigenschaft wahr zurück.

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

Der `in` Operator wird für [leere Array-Plätze](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) `false` zurückgeben, selbst wenn der direkte Zugriff `undefined` ergibt.

```js
const empties = new Array(3);
empties[2]; // returns undefined
2 in empties; // returns false
```

Um dies zu vermeiden, stellen Sie sicher, dass ein neues Array immer mit Nicht-Leerwerten gefüllt ist oder nicht über die Enden des Arrays zu schreiben.

```js
const empties = new Array(3).fill(undefined);
2 in empties; // returns true
```

### Geerbte Eigenschaften

Der `in` Operator gibt `true` für Eigenschaften in der Prototypkette zurück. Dies kann unerwünscht sein, wenn Sie Objekte zur Speicherung arbiträrer Schlüssel-Wert-Paare verwenden.

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

Alternativ sollten Sie in Erwägung ziehen, ein [Null-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) oder eine {{jsxref("Map")}} zur Speicherung von `ages` zu verwenden, um andere Fehler zu vermeiden.

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

### Verwenden des in Operators zur Implementierung von gebrandmarkten Checks

Der folgende Codeausschnitt zeigt eine statische Funktion, die erkennt, ob ein Objekt mit dem `Person` Konstruktor erstellt wurde und daher andere Methoden sicher ausführen kann.

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

Es hilft, den folgenden Fall zu verhindern:

```js
const p2 = {};

p1.ageDifference(p2); // TypeError: Cannot read private member #age from an object whose class did not declare it
```

Ohne den `in` Operator müssten Sie einen `try...catch` Block verwenden, um zu überprüfen, ob das Objekt die private Eigenschaft hat.

Sie können dies auch als eine [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) Methode der Klasse implementieren, sodass Sie den [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Operator verwenden können, um denselben Check auszuführen (der standardmäßig nur das Vorhandensein von `Person.prototype` in der Prototypkette des Objekts überprüft).

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

Für weitere Beispiele, siehe [Private properties](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) und den [Klassen-Leitfaden](/de/docs/Web/JavaScript/Guide/Using_classes#private_fields).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Reflect.has()")}}
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
