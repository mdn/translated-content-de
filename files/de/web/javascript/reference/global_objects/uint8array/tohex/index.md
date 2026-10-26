---
title: Uint8Array.prototype.toHex()
short-title: toHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/toHex
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toHex()`** von {{jsxref("Uint8Array")}}-Instanzen gibt eine hexadezimal codierte Zeichenfolge zurück, die auf den Daten in diesem `Uint8Array`-Objekt basiert.

Diese Methode erstellt Zeichenfolgen aus einem Byte-Array. Um einzelne Zahlen in eine Hexadezimaldarstellung umzuwandeln, verwenden Sie stattdessen die Methode {{jsxref("Number.prototype.toString()")}} mit dem Wert `16` für `radix`.

## Syntax

```js-nolint
toHex()
```

### Parameter

Keine.

### Rückgabewert

Eine hexadezimal codierte Zeichenfolge, die die Daten im `Uint8Array` darstellt.

## Beispiele

### Binärdaten codieren

Dieses Beispiel codiert Daten aus einem `Uint8Array` als hexadezimale Zeichenfolge.

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

- [Polyfill für `Uint8Array.prototype.toHex` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [es-shims-Polyfill für `Uint8Array.prototype.toHex`](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromHex()")}}
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
- {{jsxref("Number.prototype.toString()")}}
