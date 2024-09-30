---
title: TypedArray[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Accessor-Eigenschaft **`TypedArray[Symbol.species]`** gibt den Konstruktor zurück, der zum Erstellen von Rückgabewerten aus Methoden von typisierten Arrays verwendet wird.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Sie erschwert auch bestimmte Optimierungen erheblich. Die Implementierer von Engines [untersuchen, ob dieses Feature entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es nach Möglichkeit, sich darauf zu verlassen.

## Syntax

```js-nolint
TypedArray[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte aus Methoden von typisierten Arrays zu erstellen, die neue typisierte Arrays erzeugen.

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

Beim Aufrufen von Methoden für typisierte Arrays, die das bestehende Array nicht ändern, sondern eine neue Array-Instanz zurückgeben (zum Beispiel [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter) und [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map)), wird der `constructor[Symbol.species]` des Arrays aufgerufen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Methode des typisierten Arrays zu konstruieren.

Im Gegensatz zu [`Array[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) stellt die Sprache jedoch sicher, dass das neu erstellte Array ein richtig typisiertes Array ist und denselben Inhaltstyp wie das Originalarray hat — zum Beispiel kann man kein {{jsxref("BigInt64Array")}} von einem {{jsxref("Float64Array")}} erstellen oder ein nicht-BigInt-Array von einem BigInt-Array erstellen. Der Versuch, dies zu tun, führt zu einem {{jsxref("TypeError")}}.

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
> Aufgrund eines Fehlers in sowohl [SpiderMonkey](https://bugzil.la/1640194) als auch V8 wird die Übereinstimmung des Inhaltstyps nicht überprüft. Nur Safari wird im zweiten Beispiel einen {{jsxref("TypeError")}} auslösen.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]` Eigenschaft gibt die Standardkonstruktorfunktion zurück, die für jeden gegebenen [typisierten Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) Konstruktor eine der typisierten Array-Konstruktoren selbst ist.

```js
Int8Array[Symbol.species]; // function Int8Array()
Uint8Array[Symbol.species]; // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten Unterklasse von `TypedArray`, wie `MyTypedArray`, ist die Species von `MyTypedArray` der `MyTypedArray` Konstruktor. Sie möchten dies jedoch möglicherweise überschreiben, um ein übergeordnetes [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) Objekt in Ihren Methoden der abgeleiteten Klasse zurückzugeben:

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
