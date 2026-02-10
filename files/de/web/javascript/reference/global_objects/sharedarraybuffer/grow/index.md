---
title: SharedArrayBuffer.prototype.grow()
short-title: grow()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Die **`grow()`**-Methode von {{jsxref("SharedArrayBuffer")}}-Instanzen vergrößert den `SharedArrayBuffer` auf die angegebene Größe in Bytes.

## Syntax

```js-nolint
grow(newLength)
```

### Parameter

- `newLength`
  - : Die neue Länge in Bytes, auf die der `SharedArrayBuffer` geändert werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `SharedArrayBuffer` nicht vergrößerbar ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `newLength` größer als das {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} des `SharedArrayBuffer` oder kleiner als das {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}} ist.

## Beschreibung

Die `grow()`-Methode vergrößert einen `SharedArrayBuffer` auf die durch den `newLength`-Parameter angegebene Größe, vorausgesetzt, der `SharedArrayBuffer` ist [vergrößerbar](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable) und die neue Größe ist kleiner oder gleich dem {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} des `SharedArrayBuffer`. Neue Bytes werden auf 0 gesetzt.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt von der Konsole oder einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nur definiert ist, wenn seine [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) erfüllt sind.

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
