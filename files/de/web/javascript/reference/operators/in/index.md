---
title: in
slug: Web/JavaScript/Reference/Operators/in
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{jsSidebar("Operators")}}

Der **`in`**-Operator gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt oder seiner Prototypenkette vorhanden ist.

Der `in`-Operator kann nicht verwendet werden, um nach Werten in anderen Sammlungen zu suchen. Um zu testen, ob ein bestimmter Wert in einem Array existiert, verwenden Sie {{jsxref("Array.prototype.includes()")}}. Für Sets verwenden Sie {{jsxref("Set.prototype.has()")}}.

{{EmbedInteractiveExample("pages/js/expressions-inoperator.html")}}

## Syntax

```js-nolint
prop in object
#prop in object
```

### Parameter

- `prop`
  - : Ein Zeichenfolgen- oder Symbolwert, der einen Eigenschaftsnamen darstellt (Nicht-Symbole werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)). Kann auch ein [privater Eigenschaftsbezeichner](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sein.
- `object`
  - : Objekt, in dem überprüft wird, ob es (oder seine Prototypenkette) die Eigenschaft mit dem spezifizierten Namen (`prop`) enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `object` kein Objekt ist (d. h. ein primitiver Wert).

## Beschreibung

Der `in`-Operator prüft, ob eine Zeichenfolgen- oder Symboleigenschaft in einem Objekt oder seiner Prototypenkette vorhanden ist. Wenn Sie nur auf _nicht vererbte_ Eigenschaften prüfen möchten, verwenden Sie stattdessen {{jsxref("Object.hasOwn()")}}.

Eine Eigenschaft kann in einem Objekt vorhanden sein, aber den Wert `undefined` haben. Daher ist `x in obj` nicht dasselbe wie `obj.x !== undefined`. Um `in` dazu zu bringen, nach dem Hinzufügen einer Eigenschaft `false` zurückzugeben, verwenden Sie den [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator anstelle davon, den Wert der Eigenschaft auf `undefined` zu setzen.

Sie können den `in`-Operator auch verwenden, um zu überprüfen, ob ein bestimmtes [privates Klassenfeld oder eine Methode](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) in einem Objekt definiert wurde. Der Operator gibt `true` zurück, wenn die Eigenschaft definiert ist, und `false`, wenn nicht. Dies wird als _branded check_ bezeichnet, da es `true` zurückgibt, wenn und nur wenn das Objekt mit diesem Klassenkonstruktor erstellt wurde, wonach Sie sicher auf andere private Eigenschaften zugreifen können.

Dies ist eine spezielle Syntax – die linke Seite des `in`-Operators ist ein Eigenschaftsbezeichner anstelle eines Ausdrucks, jedoch in Anführungszeichen (da es sonst eine String-Eigenschaft und keine private Eigenschaft ist).

Da das Zugreifen auf private Eigenschaften in Objekten, die nicht mit der aktuellen Klasse verwandt sind, einen {{jsxref("TypeError")}} statt `undefined` zurückgibt, ermöglicht diese Syntax, folgendes zu verkürzen:

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

Es vermeidet auch im Allgemeinen den Bedarf, mit Fehlerbehandlung umzugehen, nur um auf eine möglicherweise nicht vorhandene private Eigenschaft zuzugreifen.

Der `in`-Operator erfordert jedoch immer noch, dass die private Eigenschaft vorher in der umschließenden Klasse deklariert wurde – andernfalls würde er einen {{jsxref("SyntaxError")}} ("Private field '#x' must be declared in an enclosing class") auslösen, denselben, den Sie erhalten, wenn Sie versuchen, auf eine nicht deklarierte private Eigenschaft zuzugreifen.

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

Die folgenden Beispiele zeigen einige Verwendungen des `in`-Operators.

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

Sie müssen ein Objekt auf der rechten Seite des `in`-Operators angeben. Zum Beispiel können Sie einen String verwenden, der mit dem `String`-Konstruktor erstellt wurde, jedoch keinen String-Literal angeben.

```js
const color1 = new String("green");
"length" in color1; // returns true

const color2 = "coral";
// generates an error (color2 is not a String object)
"length" in color2;
```

### Verwendung des in-Operators mit gelöschten oder undefinierten Eigenschaften

Wenn Sie eine Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator löschen, gibt der `in`-Operator für diese Eigenschaft `false` zurück.

```js
const mycar = { make: "Honda", model: "Accord", year: 1998 };
delete mycar.make;
"make" in mycar; // returns false

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
3 in trees; // returns false
```

Wenn Sie eine Eigenschaft auf {{jsxref("undefined")}} setzen, sie jedoch nicht löschen, gibt der `in`-Operator `true` für diese Eigenschaft zurück.

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

Der `in`-Operator gibt `false` für [leere Array-Slots](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) zurück, selbst wenn der direkte Zugriff `undefined` zurückgibt.

```js
const empties = new Array(3);
empties[2]; // returns undefined
2 in empties; // returns false
```

Um dies zu vermeiden, stellen Sie sicher, dass ein neues Array immer mit nicht-leeren Werten gefüllt wird oder nicht über das Ende des Arrays hinaus geschrieben wird.

```js
const empties = new Array(3).fill(undefined);
2 in empties; // returns true
```

### Vererbte Eigenschaften

Der `in`-Operator gibt `true` für Eigenschaften in der Prototypenkette zurück. Dies kann unerwünscht sein, wenn Sie Objekte verwenden, um beliebige Schlüssel-Wert-Paare zu speichern.

```js example-bad
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

hasPerson("hasOwnProperty"); // true
```

Sie können {{jsxref("Object.hasOwn()")}} verwenden, um zu prüfen, ob das Objekt den Schlüssel besitzt.

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return Object.hasOwn(ages, name);
}

hasPerson("hasOwnProperty"); // false
```

Alternativ sollten Sie erwägen, ein [null-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) oder eine {{jsxref("Map")}} für die Speicherung von `ages` zu verwenden, um andere Fehler zu vermeiden.

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

### Verwendung des in-Operators zur Implementierung von Branded Checks

Der folgende Code-Ausschnitt demonstriert eine statische Funktion, die überprüft, ob ein Objekt mit dem `Person`-Konstruktor erstellt wurde und daher sicher andere Methoden ausführen kann.

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

Ohne den `in`-Operator müssten Sie einen `try...catch`-Block verwenden, um zu prüfen, ob das Objekt die private Eigenschaft hat.

Sie können dies auch als eine [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode der Klasse implementieren, sodass Sie den [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof)-Operator verwenden können, um dieselbe Überprüfung durchzuführen (die standardmäßig nur das Vorhandensein von `Person.prototype` in der Prototypenkette des Objekts überprüft).

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

Für weitere Beispiele siehe [Private properties](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) und den [Klassenleitfaden](/de/docs/Web/JavaScript/Guide/Using_classes#private_fields).

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
