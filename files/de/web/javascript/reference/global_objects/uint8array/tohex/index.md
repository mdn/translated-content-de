---
title: Uint8Array.prototype.toHex()
short-title: toHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/toHex
l10n:
  sourceCommit: ac71221e1987611d58450dbee82642c83285c5a0
---

Die **`toHex()`**-Methode von {{jsxref("Uint8Array")}}-Instanzen gibt einen hex-kodierten String basierend auf den Daten in diesem `Uint8Array`-Objekt zurück.

Diese Methode erstellt Strings aus einem Bytearray. Um einzelne Zahlen in Hexadezimalzahlen zu konvertieren, verwenden Sie stattdessen die Methode {{jsxref("Number.prototype.toString()")}} mit `radix` auf `16` gesetzt.

## Syntax

```js-nolint
toHex()
```

### Parameter

Keine.

### Rückgabewert

Ein hex-kodierter String, der die Daten im `Uint8Array` darstellt.

## Beispiele

### Binärdaten kodieren

Dieses Beispiel kodiert Daten aus einem `Uint8Array` in einen hex-String.

```js
const uint8Array = new Uint8Array([202, 254, 208, 13]);
console.log(uint8Array.toHex()); // "cafed00d"

const data = new Uint8Array([255, 0, 0, 0, 255, 0, 0, 0, 255]);
for (let i = 0; i < data.length; i += 3) {
  console.log(data.slice(i, i + 3).toHex());
}
// "ff0000"
// "00ff00"
// "0000ff"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Uint8Array.prototype.toHex` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims Polyfill von `Uint8Array.prototype.toHex`](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromHex()")}}
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
- {{jsxref("Number.prototype.toString()")}}
