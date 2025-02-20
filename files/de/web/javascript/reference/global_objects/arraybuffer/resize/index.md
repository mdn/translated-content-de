---
title: ArrayBuffer.prototype.resize()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`resize()`** von {{jsxref("ArrayBuffer")}}-Instanzen ändert die Größe des `ArrayBuffer` auf die angegebene Größe in Byte.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.resize()")}}

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
  - : Die neue Länge in Byte, auf die der `ArrayBuffer` geändert werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `ArrayBuffer` gelöst ist oder nicht änderbar ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `newLength` größer ist als die {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} des `ArrayBuffer`.

## Beschreibung

Die Methode `resize()` ändert die Größe eines `ArrayBuffer` auf die durch den Parameter `newLength` angegebene Größe, vorausgesetzt, der `ArrayBuffer` ist [resizable](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable) (änderbar) und die neue Größe ist kleiner oder gleich der {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} des `ArrayBuffer`. Neue Bytes werden mit 0 initialisiert.

Beachten Sie, dass Sie `resize()` sowohl verwenden können, um einen `ArrayBuffer` zu verkleinern als auch zu vergrößern — es ist zulässig, dass `newLength` kleiner ist als die aktuelle {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des `ArrayBuffer`.

## Beispiele

### Verwendung von resize()

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Byte erweiterbar ist. Anschließend überprüfen wir seine `resizable`-Eigenschaft und ändern die Größe, falls `resizable` den Wert `true` zurückgibt:

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
