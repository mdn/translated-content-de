---
title: SharedArrayBuffer.prototype.grow()
short-title: grow()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`grow()`**-Methode von {{jsxref("SharedArrayBuffer")}}-Instanzen vergrößert den `SharedArrayBuffer` auf die angegebene Größe in Bytes.

## Syntax

```js-nolint
grow(newLength)
```

### Parameter

- `newLength`
  - : Die neue Länge in Bytes, auf die der `SharedArrayBuffer` vergrößert werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `SharedArrayBuffer` nicht vergrößert werden kann.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `newLength` größer ist als die {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} des `SharedArrayBuffer` oder kleiner als die {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}}.

## Beschreibung

Die `grow()`-Methode vergrößert einen `SharedArrayBuffer` auf die Größe, die durch den `newLength`-Parameter angegeben ist, vorausgesetzt, dass der `SharedArrayBuffer` [vergrößerbar](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable) ist und die neue Größe kleiner oder gleich der {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} des `SharedArrayBuffer` ist. Neue Bytes werden auf 0 gesetzt.

## Beispiele

### Verwendung von grow()

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes vergrößerbar ist, überprüfen dann seine {{jsxref("SharedArrayBuffer/growable", "growable")}}-Eigenschaft und vergrößern ihn, wenn `growable` `true` zurückgibt:

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
