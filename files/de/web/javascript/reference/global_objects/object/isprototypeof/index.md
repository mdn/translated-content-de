---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`isPrototypeOf()`**-Methode von {{jsxref("Object")}}-Instanzen überprüft, ob dieses Objekt in der Prototyp-Kette eines anderen Objekts existiert.

> **Hinweis:** `isPrototypeOf()` unterscheidet sich vom [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof)-Operator. In dem Ausdruck `object instanceof AFunction` wird die Prototyp-Kette von `object` mit `AFunction.prototype` überprüft, nicht mit `AFunction` selbst.

{{InteractiveExample("JavaScript Demo: Object.prototype.isPrototypeOf()")}}

```js interactive-example
function Foo() {}
function Bar() {}

Bar.prototype = Object.create(Foo.prototype);

const bar = new Bar();

console.log(Foo.prototype.isPrototypeOf(bar));
// Expected output: true
console.log(Bar.prototype.isPrototypeOf(bar));
// Expected output: true
```

## Syntax

```js-nolint
isPrototypeOf(object)
```

### Parameter

- `object`
  - : Das Objekt, dessen Prototyp-Kette durchsucht wird.

### Rückgabewert

Ein Boolean, der angibt, ob das aufrufende Objekt (`this`) in der Prototyp-Kette des `object` liegt. Gibt direkt `false` zurück, wenn `object` kein Objekt ist (d.h. ein primitiver Wert).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `this` `null` oder `undefined` ist (da es nicht [in ein Objekt umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion) werden kann).

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (d. h. alle außer [Objekten mit null-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die Methode `isPrototypeOf()`. Diese Methode erlaubt es, zu überprüfen, ob ein Objekt in der Prototyp-Kette eines anderen Objekts existiert. Sollte das übergebene `object` kein Objekt (z. B. ein primitiver Wert) sein, gibt die Methode direkt `false` zurück. Andernfalls wird der Wert von `this` [in ein Objekt umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion), und die Prototyp-Kette von `object` wird durchsucht, bis entweder das Ende der Kette erreicht ist oder der `this`-Wert gefunden wurde.

## Beispiele

### Verwendung von isPrototypeOf()

Dieses Beispiel zeigt, dass `Baz.prototype`, `Bar.prototype`, `Foo.prototype` und `Object.prototype` in der Prototyp-Kette des Objekts `baz` existieren:

```js
class Foo {}
class Bar extends Foo {}
class Baz extends Bar {}

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

// prototype chains:
// foo: Foo --> Object
// bar: Bar --> Foo --> Object
// baz: Baz --> Bar --> Foo --> Object
console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Baz.prototype.isPrototypeOf(bar)); // false
console.log(Baz.prototype.isPrototypeOf(foo)); // false
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(foo)); // false
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(bar)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

Die Methode `isPrototypeOf()` — zusammen mit dem {{jsxref("Operators/instanceof", "instanceof")}}-Operator — ist besonders nützlich, wenn Sie Code haben, der nur mit Objekten funktioniert, die von einer bestimmten Prototyp-Kette abstammen, z. B., um sicherzustellen, dass bestimmte Methoden oder Eigenschaften auf diesem Objekt vorhanden sind.

Zum Beispiel, um Code auszuführen, der nur sicher ausgeführt werden kann, wenn ein `baz`-Objekt `Foo.prototype` in seiner Prototyp-Kette hat, können Sie Folgendes tun:

```js
if (Foo.prototype.isPrototypeOf(baz)) {
  // do something safe
}
```

Allerdings bedeutet das Vorhandensein von `Foo.prototype` in der Prototyp-Kette von `baz` nicht, dass `baz` mit `Foo` als Konstruktor erstellt wurde. Zum Beispiel könnte `baz` direkt mit `Foo.prototype` als Prototyp zugewiesen werden. In diesem Fall schlägt Ihr Code fehl, wenn Sie versuchen, [private Felder](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) von `Foo` über `baz` zu lesen:

```js
class Foo {
  #value = "foo";
  static getValue(x) {
    return x.#value;
  }
}

const baz = { __proto__: Foo.prototype };

if (Foo.prototype.isPrototypeOf(baz)) {
  console.log(Foo.getValue(baz)); // TypeError: Cannot read private member #value from an object whose class did not declare it
}
```

Das Gleiche gilt für [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof). Wenn Sie private Felder auf sichere Weise lesen müssen, sollten Sie stattdessen eine Markierungsprüfmethode mit [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) anbieten.

```js
class Foo {
  #value = "foo";
  static getValue(x) {
    return x.#value;
  }
  static isFoo(x) {
    return #value in x;
  }
}

const baz = { __proto__: Foo.prototype };

if (Foo.isFoo(baz)) {
  // Doesn't run, because baz is not a Foo
  console.log(Foo.getValue(baz));
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
