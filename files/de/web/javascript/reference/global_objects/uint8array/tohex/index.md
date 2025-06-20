---
title: Uint8Array.prototype.toHex()
short-title: toHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/toHex
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toHex()`**-Methode von {{jsxref("Uint8Array")}}-Instanzen gibt einen hex-codierten String zurück, der auf den Daten in diesem `Uint8Array`-Objekt basiert.

Diese Methode erstellt Strings aus einem Byte-Array. Um einzelne Zahlen in Hex zu konvertieren, verwenden Sie die {{jsxref("Number.prototype.toString()")}}-Methode mit `radix` auf `16` gesetzt.

## Syntax

```js-nolint
toHex()
```

### Parameter

Keine.

### Rückgabewert

Ein hex-codierter String, der die Daten im `Uint8Array` darstellt.

## Beispiele

### Binäre Daten kodieren

Dieses Beispiel kodiert Daten von einem `Uint8Array` in einen Hex-String.

```js
const uint8Array = new Uint8Array([202, 254, 208, 13]);
console.log(uint8Array.toHex()); // "cafed00d"

const data = new Uint8Array([255, 0, 0, 0, 255, 0, 0, 0, 255]);
for (let i = 0; i < data.length; i += 3) {
  console.log(data.slice(i, i + 3).toHex());
}
// "ff0000"
// "00ff00"
// "00ff00"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Uint8Array.prototype.toHex` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims polyfill von `Uint8Array.prototype.toHex`](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromHex()")}}
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
- {{jsxref("Number.prototype.toString()")}}
