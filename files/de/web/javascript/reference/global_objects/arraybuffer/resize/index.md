---
title: ArrayBuffer.prototype.resize()
short-title: resize()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`resize()`**-Methode von {{jsxref("ArrayBuffer")}}-Instanzen ändert die Größe des `ArrayBuffer` auf die angegebene Größe in Bytes.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.prototype.resize()")}}

```js interactive-example
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// Expected output: 8

buffer.resize(12);

console.log(buffer.byteLength);
// Expected output: 12
```

## Syntax

```js-nolint
resize(newLength)
```

### Parameter

- `newLength`
  - : Die neue Länge in Bytes, auf die der `ArrayBuffer` geändert werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `ArrayBuffer` getrennt ist oder nicht veränderbar ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `newLength` größer ist als die {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} des `ArrayBuffer`.

## Beschreibung

Die `resize()`-Methode ändert die Größe eines `ArrayBuffer` auf die durch den Parameter `newLength` angegebene Größe, vorausgesetzt, der `ArrayBuffer` ist [veränderbar](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable) und die neue Größe ist kleiner oder gleich der {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} des `ArrayBuffer`. Neue Bytes werden auf 0 initialisiert.

Beachten Sie, dass Sie `resize()` verwenden können, um einen `ArrayBuffer` sowohl zu verkleinern als auch zu vergrößern – es ist zulässig, dass `newLength` kleiner als die aktuelle {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des `ArrayBuffer` ist.

## Beispiele

### Verwenden von resize()

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes veränderbar ist. Dann prüfen wir seine `resizable`-Eigenschaft und ändern die Größe, wenn `resizable` `true` zurückgibt:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Buffer is resizable!");
  buffer.resize(12);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.resizable")}}
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
