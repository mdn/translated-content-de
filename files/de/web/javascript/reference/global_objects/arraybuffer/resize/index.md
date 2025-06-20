---
title: ArrayBuffer.prototype.resize()
short-title: resize()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

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
  - : Wird ausgelöst, wenn der `ArrayBuffer` getrennt oder nicht änderbar ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `newLength` größer ist als die {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} des `ArrayBuffer`.

## Beschreibung

Die `resize()`-Methode ändert die Größe eines `ArrayBuffer` auf die durch den Parameter `newLength` angegebene Größe, vorausgesetzt, dass der `ArrayBuffer` [änderbar](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable) ist und die neue Größe kleiner oder gleich der {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} des `ArrayBuffer` ist. Neue Bytes werden auf 0 initialisiert.

Beachten Sie, dass Sie `resize()` sowohl zum Verkleinern als auch zum Vergrößern eines `ArrayBuffer` verwenden können – es ist zulässig, dass `newLength` kleiner als das aktuelle {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des `ArrayBuffer` ist.

## Beispiele

### Verwendung von resize()

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes anpassbar ist, überprüfen dann seine `resizable`-Eigenschaft und ändern die Größe, wenn `resizable` `true` zurückgibt:

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
