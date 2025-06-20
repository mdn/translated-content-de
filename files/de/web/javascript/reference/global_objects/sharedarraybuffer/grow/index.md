---
title: SharedArrayBuffer.prototype.grow()
short-title: grow()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`grow()`** Methode von {{jsxref("SharedArrayBuffer")}} Instanzen erweitert den `SharedArrayBuffer` auf die angegebene Größe in Bytes.

## Syntax

```js-nolint
grow(newLength)
```

### Parameter

- `newLength`
  - : Die neue Länge, in Bytes, auf die der `SharedArrayBuffer` erweitert werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `SharedArrayBuffer` nicht erweiterbar ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `newLength` größer ist als die {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} des `SharedArrayBuffer` oder kleiner als die {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}}.

## Beschreibung

Die `grow()` Methode erweitert einen `SharedArrayBuffer` auf die Größe, die durch den Parameter `newLength` angegeben wird, vorausgesetzt, der `SharedArrayBuffer` ist [erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable) und die neue Größe ist kleiner oder gleich der {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} des `SharedArrayBuffer`. Neue Bytes werden auf 0 initialisiert.

## Beispiele

### Verwendung von grow()

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Byte erweiterbar ist, und überprüfen dann seine {{jsxref("SharedArrayBuffer/growable", "growable")}} Eigenschaft, um ihn zu erweitern, wenn `growable` `true` zurückgibt:

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
