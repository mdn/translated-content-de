---
title: TypedArray.prototype.subarray()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`subarray()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt ein neues typisiertes Array zurück,
das im gleichen {{jsxref("ArrayBuffer")}}-Speicherbereich mit denselben Elementtypen wie dieses
typisierte Array liegt. Der Anfangsversatz ist **einschließlich** und der Endversatz
ist **ausschließlich**.

{{EmbedInteractiveExample("pages/js/typedarray-subarray.html")}}

## Syntax

```js-nolint
subarray()
subarray(begin)
subarray(begin, end)
```

### Parameter

- `begin` {{optional_inline}}
  - : Element, bei dem begonnen wird. Der Versatz ist einschließlich. Das gesamte Array wird in
    den neuen View einbezogen, wenn dieser Wert nicht angegeben wird.
- `end` {{optional_inline}}
  - : Element, bei dem geendet wird. Der Versatz ist ausschließlich. Wenn nicht angegeben, werden alle Elemente ab dem
    durch `begin` angegebenen bis zum Ende des Arrays in den neuen View einbezogen.

### Rückgabewert

Ein neues {{jsxref("TypedArray")}}-Objekt.

## Beschreibung

Der Bereich, der durch `begin` und `end` angegeben wird, wird auf den gültigen Indexbereich für das aktuelle Array begrenzt; wenn die berechnete Länge des
neuen Arrays negativ wäre, wird sie auf null begrenzt. Wenn entweder
`begin` oder `end` negativ ist, bezieht sich dies auf einen Index vom Ende des Arrays anstelle vom Anfang.

Beachten Sie auch, dass dies eine neue Ansicht auf den vorhandenen Puffer erstellt; Änderungen an den Inhalten des neuen
Objekts wirken sich auf das ursprüngliche Objekt und umgekehrt aus.

## Beispiele

### Verwendung der subarray()-Methode

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);

console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]

const sub = uint8.subarray(0, 4);

console.log(sub); // Uint8Array [ 1, 2, 3, 0 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.subarray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
