---
title: Object.prototype.isPrototypeOf()
short-title: isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Die **`isPrototypeOf()`**-Methode von {{jsxref("Object")}} Instanzen prüft, ob dieses Objekt in der Prototypkette eines anderen Objekts existiert.

> [!NOTE] > `isPrototypeOf()` unterscheidet sich vom [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Operator. Im Ausdruck `object instanceof AFunction` wird die Prototypkette von `object` gegen `AFunction.prototype` überprüft, nicht gegen `AFunction` selbst.

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

Ein boolean, der angibt, ob das aufrufende Objekt (`this`) in der Prototypenkette von `object` liegt. Gibt direkt `false` zurück, wenn `object` kein Objekt ist (d.h. ein primitiver Wert).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `this` `null` oder `undefined` ist (da es nicht in ein [Konvertierung zu einem Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion) konvertiert werden kann).

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer [Objekte mit null-Prototypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `isPrototypeOf()`-Methode. Diese Methode ermöglicht es Ihnen zu überprüfen, ob das Objekt innerhalb der Prototypenkette eines anderen Objekts existiert. Wenn das als Parameter übergebene `object` kein Objekt ist (d.h. ein primitiver Wert), gibt die Methode direkt `false` zurück. Andernfalls wird der `this`-Wert in ein [Objekt konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion), und die Prototypenkette von `object` wird nach dem `this`-Wert durchsucht, bis das Ende der Kette erreicht ist oder der `this`-Wert gefunden wird.

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

Die `isPrototypeOf()`-Methode — zusammen mit dem {{jsxref("Operators/instanceof", "instanceof")}}-Operator — ist besonders nützlich, wenn Ihr Code nur mit Objekten funktioniert, die von einer spezifischen Prototypenkette abstammen; z.B. um sicherzustellen, dass bestimmte Methoden oder Eigenschaften auf diesem Objekt vorhanden sind.

Zum Beispiel, um Code auszuführen, der nur sicher ist, wenn ein `baz`-Objekt `Foo.prototype` in seiner Prototypenkette hat, können Sie Folgendes tun:

```js
if (Foo.prototype.isPrototypeOf(baz)) {
  // do something safe
}
```

Jedoch impliziert das Vorhandensein von `Foo.prototype` in `baz`'s Prototypenkette nicht, dass `baz` mit `Foo` als Konstruktor erstellt wurde. Zum Beispiel könnte `baz` direkt mit `Foo.prototype` als Prototyp zugewiesen werden. In diesem Fall, wenn Ihr Code [private Felder](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) von `Foo` aus `baz` liest, würde dies immer noch fehlschlagen:

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

Das Gleiche gilt für [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof). Wenn Sie private Felder auf eine sichere Weise lesen müssen, bieten Sie eine gebrandete Prüfmethode mit [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) an.

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
