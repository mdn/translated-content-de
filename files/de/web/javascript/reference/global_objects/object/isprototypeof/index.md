---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die **`isPrototypeOf()`** Methode von {{jsxref("Object")}} Instanzen überprüft, ob dieses Objekt in der Prototypen-Kette eines anderen Objekts existiert.

> **Note:** `isPrototypeOf()` unterscheidet sich vom [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Operator. Im Ausdruck `object instanceof AFunction` wird die Prototypen-Kette von `object` gegen `AFunction.prototype` geprüft, nicht gegen `AFunction` selbst.

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
  - : Das Objekt, dessen Prototypen-Kette durchsucht wird.

### Rückgabewert

Ein Boolean, der angibt, ob das aufrufende Objekt (`this`) in der Prototypen-Kette von `object` liegt. Gibt direkt `false` zurück, wenn `object` kein Objekt ist (d. h. ein primitiver Wert).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `this` `null` oder `undefined` ist (weil es nicht [in ein Objekt konvertiert werden kann](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion)).

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer [null-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `isPrototypeOf()` Methode. Diese Methode ermöglicht es, zu überprüfen, ob das Objekt innerhalb der Prototypen-Kette eines anderen Objekts existiert. Wenn das als Parameter übergebene `object` kein Objekt ist (d. h. ein primitiver Wert), gibt die Methode direkt `false` zurück. Andernfalls wird der `this`-Wert [in ein Objekt konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion), und die Prototypen-Kette des `object` wird nach dem `this`-Wert durchsucht, bis das Ende der Kette erreicht ist oder der `this`-Wert gefunden wird.

## Beispiele

### Verwendung von isPrototypeOf()

Dieses Beispiel zeigt, dass `Baz.prototype`, `Bar.prototype`, `Foo.prototype` und `Object.prototype` in der Prototypen-Kette für das Objekt `baz` existieren:

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

Die `isPrototypeOf()` Methode — zusammen mit dem {{jsxref("Operators/instanceof", "instanceof")}} Operator — ist besonders nützlich, wenn Sie Code haben, der nur mit Objekten funktionieren kann, die von einer bestimmten Prototypen-Kette abstammen; z. B. um sicherzustellen, dass bestimmte Methoden oder Eigenschaften auf diesem Objekt vorhanden sind.

Zum Beispiel, um Code auszuführen, der nur sicher ist, wenn ein `baz` Objekt `Foo.prototype` in seiner Prototypen-Kette hat, können Sie dies tun:

```js
if (Foo.prototype.isPrototypeOf(baz)) {
  // do something safe
}
```

Jedoch bedeutet das Vorhandensein von `Foo.prototype` in `baz`'s Prototypen-Kette nicht, dass `baz` unter Verwendung von `Foo` als Konstruktor erstellt wurde. Zum Beispiel könnte `baz` direkt mit `Foo.prototype` als sein Prototyp zugewiesen worden sein. In diesem Fall, wenn Ihr Code [private Felder](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) von `Foo` aus `baz` liest, würde dies immer noch fehlschlagen:

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

Dasselbe gilt für [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof). Wenn Sie private Felder auf sichere Weise lesen müssen, bieten Sie eine gebrandete Prüfmethode mit [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) an.

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
- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
