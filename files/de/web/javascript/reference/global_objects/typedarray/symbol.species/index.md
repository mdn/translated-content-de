---
title: TypedArray[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`TypedArray[Symbol.species]`** statische Accessor-Eigenschaft gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Methoden für typisierte Arrays zu konstruieren.

> [!WARNING]
> Das Vorhandensein von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Es erschwert auch bestimmte Optimierungen erheblich. Die Entwickler der Engines [untersuchen, ob diese Funktion entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es nach Möglichkeit, sich darauf zu verlassen.

## Syntax

```js-nolint
TypedArray[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf den `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Methoden für typisierte Arrays zu konstruieren, die neue typisierte Arrays erstellen.

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft gibt den Standardkonstruktor für [typisierte Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) Objekte zurück. Konstruktoren von Unterklassen können ihn überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetische Implementierung zur Veranschaulichung
class TypedArray {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen standardmäßig auch den Konstruktor selbst zurückgeben.

```js
class SubTypedArray extends Int8Array {}
SubTypedArray[Symbol.species] === SubTypedArray; // true
```

Beim Aufrufen von Methoden für typisierte Arrays, die das bestehende Array nicht verändern, sondern eine neue Array-Instanz zurückgeben (zum Beispiel [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter) und [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map)), wird der `constructor[Symbol.species]` des Arrays verwendet. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Methode für typisierte Arrays zu konstruieren.

Im Gegensatz zu [`Array[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) stellt die Sprache jedoch beim Erstellen neuer typisierter Arrays sicher, dass das neu erstellte Array ein korrektes typisiertes Array ist und denselben Inhaltstyp wie das ursprüngliche Array hat — zum Beispiel können Sie kein {{jsxref("BigInt64Array")}} aus einem {{jsxref("Float64Array")}} erstellen oder ein Array ohne BigInts aus einem BigInt-Array erstellen. Ein solcher Vorgang führt zu einem {{jsxref("TypeError")}}.

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

Die `[Symbol.species]` Eigenschaft gibt die Standardkonstruktorfunktion zurück, die bei jedem gegebenen [typisierten Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)-Konstruktor eine der Konstruktorfunktionen für typisierte Arrays selbst ist.

```js
Int8Array[Symbol.species]; // function Int8Array()
Uint8Array[Symbol.species]; // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `TypedArray`-Unterklasse, wie `MyTypedArray`, ist die `MyTypedArray`-Species der `MyTypedArray`-Konstruktor. Es kann jedoch sein, dass Sie dies überschreiben möchten, um in Ihren abgeleiteten Klassenmethoden ein übergeordnetes [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)-Objekt zurückzugeben:

```js
class MyTypedArray extends Uint8Array {
  // Überschreiben der MyTypedArray-Species zum übergeordneten Uint8Array-Konstruktor
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
