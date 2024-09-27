---
title: SharedArrayBuffer.prototype.grow()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow
l10n:
  sourceCommit: 509fde687ed349da8017a546f9cf094163f24844
---

{{JSRef}}

Die **`grow()`** Methode von {{jsxref("SharedArrayBuffer")}}-Instanzen vergrößert den `SharedArrayBuffer` auf die angegebene Größe in Bytes.

## Syntax

```js-nolint
grow(newLength)
```

### Parameter

- `newLength`
  - : Die neue Länge, in Bytes, auf die der `SharedArrayBuffer` vergrößert werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `SharedArrayBuffer` nicht vergrößerbar ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `newLength` größer als die {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} des `SharedArrayBuffer` ist oder kleiner als die {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}} ist.

## Beschreibung

Die `grow()` Methode vergrößert einen `SharedArrayBuffer` auf die durch den `newLength` Parameter angegebene Größe, vorausgesetzt, dass der `SharedArrayBuffer` [vergrößerbar](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable) ist und die neue Größe kleiner oder gleich der {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} des `SharedArrayBuffer` ist. Neue Bytes werden auf 0 initialisiert.

## Beispiele

### Verwendung von grow()

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes vergrößert werden kann, überprüfen dann seine {{jsxref("SharedArrayBuffer/growable", "growable")}}-Eigenschaft und vergrößern ihn, wenn `growable` `true` zurückgibt:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

if (buffer.growable) {
  console.log("SAB is growable!");
  buffer.grow(12);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
