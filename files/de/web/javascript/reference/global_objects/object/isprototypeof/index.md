---
title: Object.prototype.isPrototypeOf()
short-title: isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`isPrototypeOf()`** Methode von {{jsxref("Object")}} Instanzen prüft, ob dieses Objekt in der Prototypenkette eines anderen Objekts existiert.

> [!NOTE]
> `isPrototypeOf()` unterscheidet sich vom [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Operator. Im Ausdruck `object instanceof AFunction` wird die Prototypenkette von `object` gegen `AFunction.prototype` geprüft, nicht gegen `AFunction` selbst.

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
  - : Das Objekt, dessen Prototypenkette durchsucht wird.

### Rückgabewert

Ein Boolean, der angibt, ob das aufrufende Objekt (`this`) in der Prototypenkette von `object` liegt. Gibt direkt `false` zurück, wenn `object` kein Objekt ist (d.h. ein primitiver Wert).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `this` `null` oder `undefined` ist (weil es nicht [in ein Objekt konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion) werden kann).

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt alle außer [`null`-Prototyp Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `isPrototypeOf()` Methode. Diese Methode ermöglicht es Ihnen, zu überprüfen, ob das Objekt innerhalb der Prototypenkette eines anderen Objekts existiert. Wenn das als Parameter übergebene `object` kein Objekt ist (d.h. ein primitiver Wert), gibt die Methode direkt `false` zurück. Andernfalls wird der `this`-Wert [in ein Objekt konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion), und die Prototypenkette von `object` wird nach dem `this`-Wert durchsucht, bis das Ende der Kette erreicht oder der `this`-Wert gefunden wird.

## Beispiele

### Verwendung von isPrototypeOf()

Dieses Beispiel zeigt, dass `Baz.prototype`, `Bar.prototype`, `Foo.prototype` und `Object.prototype` in der Prototypenkette für das Objekt `baz` existieren:

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

Die `isPrototypeOf()` Methode — zusammen mit dem {{jsxref("Operators/instanceof", "instanceof")}} Operator — ist besonders nützlich, wenn Sie Code haben, der nur mit Objekten funktioniert, die von einer bestimmten Prototypenkette abstammen; z. B. um sicherzustellen, dass bestimmte Methoden oder Eigenschaften auf diesem Objekt vorhanden sind.

Zum Beispiel, um Code auszuführen, der nur sicher ist, wenn ein `baz` Objekt `Foo.prototype` in seiner Prototypenkette hat, können Sie folgendes tun:

```js
if (Foo.prototype.isPrototypeOf(baz)) {
  // do something safe
}
```

Allerdings impliziert die Existenz von `Foo.prototype` in `baz`'s Prototypenkette nicht, dass `baz` mit `Foo` als Konstruktor erstellt wurde. Zum Beispiel könnte `baz` direkt mit `Foo.prototype` als sein Prototyp zugewiesen worden sein. In diesem Fall würde Ihr Code beim Lesen [privater Felder](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) von `Foo` von `baz` dennoch fehlschlagen:

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

Das Gleiche gilt für [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof). Wenn Sie private Felder auf sichere Weise lesen müssen, bieten Sie stattdessen eine markengeprüfte Methode mit [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) an.

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
