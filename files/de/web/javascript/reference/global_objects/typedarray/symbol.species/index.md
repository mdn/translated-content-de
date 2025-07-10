---
title: TypedArray[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Accessor-Eigenschaft **`TypedArray[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Methoden des typisierten Arrays zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Außerdem erschwert es bestimmte Optimierungen erheblich. Entwickler von Engines untersuchen, [ob dieses Feature entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie, sich darauf zu verlassen, wenn möglich.

## Syntax

```js-nolint
TypedArray[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Methoden des typisierten Arrays zu konstruieren, die neue typisierte Arrays erstellen.

## Beschreibung

Die Accessor-Eigenschaft `[Symbol.species]` gibt den Standardkonstruktor für [typisierte Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)-Objekte zurück. Konstruktoren von Unterklassen können diese überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetical underlying implementation for illustration
class TypedArray {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` abgeleiteter Unterklassen standardmäßig auch den Konstruktor selbst zurückgeben.

```js
class SubTypedArray extends Int8Array {}
SubTypedArray[Symbol.species] === SubTypedArray; // true
```

Beim Aufrufen von Methoden des typisierten Arrays, die das vorhandene Array nicht ändern, sondern eine neue Array-Instanz zurückgeben (zum Beispiel [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter) und [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map)), wird der `constructor[Symbol.species]` des Arrays aufgerufen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Methode des typisierten Arrays zu konstruieren.

Anders als bei [`Array[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) stellt die Sprache jedoch sicher, dass das neu erstellte Array ein korrektes typisiertes Array ist und denselben Inhaltstyp wie das Originalarray hat, wenn `[Symbol.species]` zum Erstellen neuer typisierter Arrays verwendet wird — zum Beispiel können Sie kein {{jsxref("BigInt64Array")}} aus einem {{jsxref("Float64Array")}} erstellen oder ein nicht-BigInt-Array aus einem BigInt-Array. Dies würde einen {{jsxref("TypeError")}} auslösen.

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
> Aufgrund eines Bugs in sowohl [SpiderMonkey](https://bugzil.la/1640194) als auch V8 wird der Inhaltstyp-Abgleich nicht überprüft. Nur Safari wird im zweiten Beispiel einen {{jsxref("TypeError")}} auslösen.

## Beispiele

### Species in gewöhnlichen Objekten

Die Eigenschaft `[Symbol.species]` gibt die Standardkonstruktorfunktion zurück, die für einen gegebenen [typisierten Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)-Konstruktor eine der Konstruktoren des typisierten Arrays selbst ist.

```js
Int8Array[Symbol.species]; // function Int8Array()
Uint8Array[Symbol.species]; // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `TypedArray`-Unterklasse, wie etwa `MyTypedArray`, ist die `MyTypedArray`-Spezies der `MyTypedArray`-Konstruktor. Sie möchten jedoch möglicherweise dies überschreiben, um in Ihren abgeleiteten Klassenmethoden ein übergeordnetes [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)-Objekt zurückzugeben:

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
