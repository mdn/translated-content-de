---
title: ArrayBuffer.prototype.detached
short-title: detached
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die **`detached`**-Accessor-Eigenschaft von {{jsxref("ArrayBuffer")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob dieser Puffer abgetrennt (übertragen) wurde.

## Beschreibung

Die `detached`-Eigenschaft ist eine Accessor-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist. Sie können diese Eigenschaft daher nur lesen. Beim Erstellen des `ArrayBuffer` ist der Wert `false`. Er wird zu `true`, wenn der `ArrayBuffer` [übertragen](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) wird. Dabei wird die Instanz von ihrem zugrunde liegenden Speicher abgetrennt. Sobald ein Puffer abgetrennt ist, kann er nicht mehr verwendet werden.

## Beispiele

### Verwendung von detached

```js
const buffer = new ArrayBuffer(8);
console.log(buffer.detached); // false
const newBuffer = buffer.transfer();
console.log(buffer.detached); // true
console.log(newBuffer.detached); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `ArrayBuffer.prototype.detached` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [es-shims-Polyfill für `ArrayBuffer.prototype.detached`](https://www.npmjs.com/package/arraybuffer.prototype.detached)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
