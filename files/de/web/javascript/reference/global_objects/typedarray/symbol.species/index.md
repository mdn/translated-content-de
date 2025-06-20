---
title: TypedArray[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Accessor-Eigenschaft **`TypedArray[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Methoden des typisierten Arrays zu konstruieren.

> [!WARNING]
> Das Vorhandensein von `[Symbol.species]` ermöglicht die Ausführung beliebigen Codes und kann Sicherheitslücken schaffen. Es macht auch bestimmte Optimierungen wesentlich schwieriger. Die Entwickler der Engines [untersuchen derzeit, ob sie dieses Feature entfernen sollen](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich darauf zu verlassen, wenn möglich.

## Syntax

```js-nolint
TypedArray[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Methoden des typisierten Arrays zu konstruieren, die neue typisierte Arrays erstellen.

## Beschreibung

Die Accessor-Eigenschaft `[Symbol.species]` gibt den Standardkonstruktor für [typisierte Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)-Objekte zurück. Unterklassige Konstruktoren können diese überschreiben, um die Zuweisung des Konstruktors zu ändern. Die Standardimplementierung ist im Wesentlichen:

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

Beim Aufrufen von Methoden des typisierten Arrays, die das bestehende Array nicht verändern, sondern eine neue Array-Instanz zurückgeben (zum Beispiel [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter) und [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map)), wird auf das `constructor[Symbol.species]` des Arrays zugegriffen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Methode des typisierten Arrays zu konstruieren.

Jedoch, im Gegensatz zu [`Array[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species), wird bei der Verwendung von `[Symbol.species]` zur Erstellung neuer typisierter Arrays die Sprache sicherstellen, dass das neu erstellte Array ein entsprechendes typisiertes Array ist und denselben Inhaltstyp wie das ursprüngliche Array hat — zum Beispiel können Sie kein {{jsxref("BigInt64Array")}} aus einem {{jsxref("Float64Array")}} erstellen oder ein nicht-BigInt-Array aus einem BigInt-Array erstellen. Dies führt zu einem {{jsxref("TypeError")}}.

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
> Aufgrund eines Fehlers sowohl in [SpiderMonkey](https://bugzil.la/1640194) als auch in V8 wird die Inhaltsübereinstimmung nicht überprüft. Nur Safari wird im zweiten Beispiel einen {{jsxref("TypeError")}} auslösen.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standard-Konstruktorfunktion zurück, die für jeden gegebenen [typisierten Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)-Konstruktor einen der typisierten Array-Konstruktoren selbst ist.

```js
Int8Array[Symbol.species]; // function Int8Array()
Uint8Array[Symbol.species]; // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `TypedArray`-Unterklasse, wie `MyTypedArray`, ist die Art von `MyTypedArray` der `MyTypedArray`-Konstruktor. Sie könnten dies jedoch überschreiben wollen, um ein übergeordnetes [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)-Objekt in Ihren Methoden der abgeleiteten Klasse zurückzugeben:

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
