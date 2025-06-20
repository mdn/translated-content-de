---
title: ArrayBuffer.prototype.detached
short-title: detached
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`detached`** Accessor-Eigenschaft von {{jsxref("ArrayBuffer")}} Instanzen gibt einen booleschen Wert zurück, der angibt, ob dieser Puffer getrennt (übertragen) wurde oder nicht.

## Beschreibung

Die `detached` Eigenschaft ist eine Accessor-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass diese Eigenschaft nur gelesen werden kann. Der Wert ist `false`, wenn das `ArrayBuffer` zuerst erstellt wird. Der Wert wird `true`, wenn das `ArrayBuffer` [übertragen](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) wird, was die Instanz von ihrem zugrunde liegenden Speicher trennt. Sobald ein Puffer getrennt ist, ist er nicht mehr verwendbar.

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

- [Polyfill von `ArrayBuffer.prototype.detached` in `core-js`](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- [es-shims Polyfill von `ArrayBuffer.prototype.detached`](https://www.npmjs.com/package/arraybuffer.prototype.detached)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
