---
title: TypedArray.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toString
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt einen String zurück, der das angegebene typisierte Array und seine Elemente darstellt. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.toString()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-tostring.html", "shorter")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die Elemente des typisierten Arrays darstellt.

## Beschreibung

Für weitere Details siehe {{jsxref("Array.prototype.toString()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Konvertierung eines typisierten Arrays in einen String

```js
const uint8 = new Uint8Array([1, 2, 3]);
// Explizite Konvertierung
console.log(uint8.toString()); // 1,2,3
// Implizite Konvertierung
console.log(`${uint8}`); // 1,2,3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Anleitung
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
