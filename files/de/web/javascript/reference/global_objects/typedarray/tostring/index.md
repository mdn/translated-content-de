---
title: TypedArray.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toString
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("TypedArray")}} Instanzen gibt eine Zeichenfolge zurück, die das spezifizierte typisierte Array und dessen Elemente darstellt. Diese Methode folgt demselben Algorithmus wie {{jsxref("Array.prototype.toString()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-tostring.html", "shorter")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenfolge, die die Elemente des typisierten Arrays darstellt.

## Beschreibung

Siehe {{jsxref("Array.prototype.toString()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf typisierte Array-Instanzen aufgerufen werden.

## Beispiele

### Konvertierung eines typisierten Arrays in eine Zeichenfolge

```js
const uint8 = new Uint8Array([1, 2, 3]);
// Explicit conversion
console.log(uint8.toString()); // 1,2,3
// Implicit conversion
console.log(`${uint8}`); // 1,2,3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
