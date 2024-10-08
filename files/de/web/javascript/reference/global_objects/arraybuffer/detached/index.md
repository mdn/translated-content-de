---
title: ArrayBuffer.prototype.detached
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached
l10n:
  sourceCommit: a0b5c6af9c854702d15ec800b529064fb7d297db
---

{{JSRef}}

Die **`detached`** Accessor-Eigenschaft von {{jsxref("ArrayBuffer")}} Instanzen gibt einen booleschen Wert zurück, der angibt, ob dieser Puffer abgetrennt (übertragen) wurde oder nicht.

## Beschreibung

Die `detached`-Eigenschaft ist eine Accessor-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert ist `false`, wenn der `ArrayBuffer` zuerst erstellt wird. Der Wert wird `true`, wenn der `ArrayBuffer` [übertragen](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) wird, wodurch die Instanz von ihrem zugrunde liegenden Speicher getrennt wird. Sobald ein Puffer abgetrennt ist, ist er nicht mehr verwendbar.

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
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
