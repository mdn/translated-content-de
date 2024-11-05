---
title: Uint8Array.prototype.toHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/toHex
l10n:
  sourceCommit: 087a73e18e2818c1cc6b9955218c614c44e612a0
---

{{JSRef}}

Die Methode **`toHex()`** von {{jsxref("Uint8Array")}}-Instanzen gibt einen hexadezimal kodierten String basierend auf den Daten in diesem `Uint8Array`-Objekt zurück.

Diese Methode erstellt Zeichenketten aus einem Byte-Array. Um einzelne Zahlen in Hexadezimalzahlen umzuwandeln, verwenden Sie stattdessen die Methode {{jsxref("Number.prototype.toString()")}} mit dem `radix` auf `16` gesetzt.

## Syntax

```js-nolint
toHex()
```

### Parameter

Keine.

### Rückgabewert

Ein hexadezimal kodierter String, der die Daten im `Uint8Array` darstellt.

## Beispiele

### Binärdaten kodieren

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

- [Polyfill von `Uint8Array.toHex` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromHex()")}}
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
- {{jsxref("Number.prototype.toString()")}}
