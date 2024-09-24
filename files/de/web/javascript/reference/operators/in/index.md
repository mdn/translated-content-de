---
title: in
slug: Web/JavaScript/Reference/Operators/in
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{jsSidebar("Operators")}}

Der **`in`**-Operator gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt oder in seiner Prototypkette vorhanden ist.

Der `in`-Operator kann nicht verwendet werden, um nach Werten in anderen Sammlungen zu suchen. Um zu testen, ob ein bestimmter Wert in einem Array existiert, verwenden Sie {{jsxref("Array.prototype.includes()")}}. Für Mengen verwenden Sie {{jsxref("Set.prototype.has()")}}.

{{EmbedInteractiveExample("pages/js/expressions-inoperator.html")}}

## Syntax

```js-nolint
prop in object
#prop in object
```

### Parameter

- `prop`
  - : Ein String oder Symbol, das einen Eigenschaftsnamen repräsentiert (Nicht-Symbole werden zu [Strings gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)). Kann auch ein [privater Eigenschaftsbezeichner](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sein.
- `object`
  - : Objekt, das geprüft wird, ob es (oder seine Prototypkette) die Eigenschaft mit dem angegebenen Namen (`prop`) enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `object` kein Objekt ist (d.h. ein primitiver Wert).

## Beschreibung

Der `in`-Operator prüft, ob eine String- oder Symbol-Eigenschaft in einem Objekt oder seiner Prototypkette vorhanden ist. Wenn Sie nur _nicht geerbte_ Eigenschaften überprüfen möchten, verwenden Sie stattdessen {{jsxref("Object.hasOwn()")}}.

Eine Eigenschaft kann im Objekt vorhanden sein, aber den Wert `undefined` haben. Daher ist `x in obj` nicht das gleiche wie `obj.x !== undefined`. Um `in` dazu zu bringen, `false` zurückzugeben, nachdem eine Eigenschaft hinzugefügt wurde, verwenden Sie den [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator, anstatt den Wert dieser Eigenschaft auf `undefined` zu setzen.

Sie können den `in`-Operator auch verwenden, um zu prüfen, ob ein bestimmtes [privates Klassenfeld oder eine Methode](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) in einem Objekt definiert wurde. Der Operator gibt `true` zurück, wenn die Eigenschaft definiert ist, und `false` andernfalls. Dies ist als _gebrannter Check_ bekannt, da er nur dann `true` zurückgibt, wenn das Objekt mit diesem Klassenkonstruktor erstellt wurde, wonach Sie sicher auf andere private Eigenschaften zugreifen können.

Dies ist eine spezielle Syntax — die linke Seite des `in`-Operators ist ein Eigenschaftsbezeichner anstelle eines Ausdrucks, aber unzitiert (weil es sonst eine String-Eigenschaft und keine private Eigenschaft ist).

Da der Zugriff auf private Eigenschaften von Objekten, die nicht in die aktuelle Klasse gehören, einen {{jsxref("TypeError")}} auslöst, anstatt `undefined` zurückzugeben, ermöglicht Ihnen diese Syntax, Folgendes zu verkürzen:

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

Es vermeidet auch generell die Notwendigkeit, Fehlerbehandlung nur zu behandeln, um auf eine möglicherweise nicht vorhandene private Eigenschaft zuzugreifen.

Der `in`-Operator erfordert jedoch immer noch, dass die private Eigenschaft vorher in der umgebenden Klasse deklariert wurde, ansonsten würde er einen {{jsxref("SyntaxError")}} auslösen ("Privatfeld '#x' muss in einer umgebenden Klasse deklariert werden"), derselbe, der ausgelöst wird, wenn Sie versuchen, auf eine nicht deklarierte private Eigenschaft zuzugreifen.

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
0 in trees; // gibt true zurück
3 in trees; // gibt true zurück
6 in trees; // gibt false zurück
"bay" in trees; // gibt false zurück (Sie müssen die Indexnummer angeben, nicht den Wert an diesem Index)
"length" in trees; // gibt true zurück (length ist eine Array-Eigenschaft)
Symbol.iterator in trees; // gibt true zurück

// Vordefinierte Objekte
"PI" in Math; // gibt true zurück

// Benutzerdefinierte Objekte
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // gibt true zurück
"model" in mycar; // gibt true zurück
```

Sie müssen ein Objekt auf der rechten Seite des `in`-Operators angeben. Beispielsweise können Sie einen mit dem `String`-Konstruktor erstellten String angeben, aber keinen String-Literal.

```js
const color1 = new String("green");
"length" in color1; // gibt true zurück

const color2 = "coral";
// erzeugt einen Fehler (color2 ist kein String-Objekt)
"length" in color2;
```

### Verwendung des in-Operators mit gelöschten oder undefinierten Eigenschaften

Wenn Sie eine Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator löschen, gibt der `in`-Operator für diese Eigenschaft `false` zurück.

```js
const mycar = { make: "Honda", model: "Accord", year: 1998 };
delete mycar.make;
"make" in mycar; // gibt false zurück

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
3 in trees; // gibt false zurück
```

Wenn Sie eine Eigenschaft auf {{jsxref("undefined")}} setzen, aber nicht löschen, gibt der `in`-Operator für diese Eigenschaft `true` zurück.

```js
const mycar = { make: "Honda", model: "Accord", year: 1998 };
mycar.make = undefined;
"make" in mycar; // gibt true zurück
```

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
3 in trees; // gibt true zurück
```

Der `in`-Operator gibt `false` für [leere Array-Slots](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) zurück, selbst wenn der direkte Zugriff `undefined` ergibt.

```js
const empties = new Array(3);
empties[2]; // gibt undefined zurück
2 in empties; // gibt false zurück
```

Um dies zu vermeiden, stellen Sie sicher, dass ein neues Array immer mit nicht-leeren Werten gefüllt ist oder nicht auf Indizes hinter dem Ende des Arrays schreiben.

```js
const empties = new Array(3).fill(undefined);
2 in empties; // gibt true zurück
```

### Geerbte Eigenschaften

Der `in`-Operator gibt `true` für Eigenschaften in der Prototypkette zurück. Dies kann unerwünscht sein, wenn Sie Objekte zur Speicherung beliebiger Schlüssel-Wert-Paare verwenden.

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

Alternativ sollten Sie überlegen, ein [Null-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) oder eine {{jsxref("Map")}} für die Speicherung von `ages` zu verwenden, um weitere Fehler zu vermeiden.

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

### Verwendung des in-Operators zur Implementierung gebrandeter Prüfungen

Der folgende Codeausschnitt demonstriert eine statische Funktion, die angibt, ob ein Objekt mit dem `Person`-Konstruktor erstellt wurde und daher andere Methoden sicher ausführen kann.

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

Sie können dies auch als [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode der Klasse implementieren, sodass Sie den [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof)-Operator verwenden können, um die gleiche Überprüfung auszuführen (die standardmäßig nur auf das Vorhandensein von `Person.prototype` in der Prototypkette des Objekts prüft).

```js
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  static [Symbol.hasInstance](o) {
    // Testen von `this`, um Fehlermeldungen zu vermeiden bei
    // Aufruf von `instanceof SubclassOfPerson`
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

Weitere Beispiele finden Sie unter [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) und im [Klassenhandbuch](/de/docs/Web/JavaScript/Guide/Using_classes#private_fields).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Reflect.has()")}}
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
