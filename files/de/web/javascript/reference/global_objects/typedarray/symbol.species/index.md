---
title: TypedArray[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`TypedArray[Symbol.species]`** statische Accessor-Eigenschaft gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Methoden des typisierten Arrays zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung beliebigen Codes und kann Sicherheitslücken schaffen. Außerdem erschwert sie bestimmte Optimierungen erheblich. Die Implementierer von Engines untersuchen, [ob dieses Feature entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es nach Möglichkeit, sich darauf zu stützen.

## Syntax

```js-nolint
TypedArray[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Methoden des typisierten Arrays zu konstruieren, die neue typisierte Arrays erzeugen.

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft gibt den Standardkonstruktor für [typisierte Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) Objekte zurück. Unterklassenkonstruktoren können ihn überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetical underlying implementation for illustration
class TypedArray {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen standardmäßig ebenfalls den Konstruktor selbst zurückgeben.

```js
class SubTypedArray extends Int8Array {}
SubTypedArray[Symbol.species] === SubTypedArray; // true
```

Beim Aufrufen von Methoden des typisierten Arrays, die das vorhandene Array nicht verändern, sondern eine neue Array-Instanz zurückgeben (zum Beispiel [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter) und [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map)), wird der `constructor[Symbol.species]` des Arrays abgerufen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Methode des typisierten Arrays zu konstruieren.

Im Gegensatz zu [`Array[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) stellen Sie bei der Verwendung von `[Symbol.species]` zur Erstellung neuer typisierter Arrays sicher, dass das neu erstellte Array ein korrekt typisiertes Array ist und denselben Inhaltstyp wie das ursprüngliche Array hat — zum Beispiel kann man kein {{jsxref("BigInt64Array")}} aus einem {{jsxref("Float64Array")}} erstellen oder ein Nicht-BigInt-Array aus einem BigInt-Array erstellen. Andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

```js
class BadArray extends Int8Array {
  static get [Symbol.species]() {
    return Array;
  }
}
new BadArray(1).map(() => 0); // TypeError: Method %TypedArray%.prototype.map called on incompatible receiver [object Array]

class BadArray2 extends Int8Array {
  static get [Symbol.species]() {
    return BigInt64Array;
  }
}
new BadArray2(1).map(() => 0n); // TypeError: TypedArray.prototype.map constructed typed array of different content type from |this|
```

> [!NOTE]
> Aufgrund eines Fehlers in sowohl [SpiderMonkey](https://bugzil.la/1640194) als auch V8 wird die Inhaltsübereinstimmung nicht überprüft. Nur Safari wird in dem zweiten Beispiel einen {{jsxref("TypeError")}} werfen.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktorfunktion zurück, die für einen gegebenen [typisierten Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) Konstruktor eine der typisierten Array-Konstruktoren selbst ist.

```js
Int8Array[Symbol.species]; // function Int8Array()
Uint8Array[Symbol.species]; // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `TypedArray`-Unterklasse, wie `MyTypedArray`, ist die Art von `MyTypedArray` der `MyTypedArray`-Konstruktor. Sie könnten dies jedoch überschreiben wollen, um in Ihren abgeleiteten Klassenmethoden ein übergeordnetes [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)-Objekt zurückzugeben:

```js
class MyTypedArray extends Uint8Array {
  // Overwrite MyTypedArray species to the parent Uint8Array constructor
  static get [Symbol.species]() {
    return Uint8Array;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("TypedArray")}}
- {{jsxref("Symbol.species")}}
