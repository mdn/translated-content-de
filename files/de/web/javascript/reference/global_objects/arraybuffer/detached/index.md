---
title: ArrayBuffer.prototype.detached
short-title: detached
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`detached`** Zugriffseigenschaft von {{jsxref("ArrayBuffer")}} Instanzen gibt einen booleschen Wert zurück, der angibt, ob dieser Puffer getrennt (übertragen) wurde oder nicht.

## Beschreibung

Die `detached`-Eigenschaft ist eine Zugriffseigenschaft, deren set-Zugriffsfunktionswert `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert ist `false`, wenn der `ArrayBuffer` zuerst erstellt wird. Der Wert wird `true`, wenn der `ArrayBuffer` [übertragen](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) wird, wodurch die Instanz von ihrem zugrunde liegenden Speicher getrennt wird. Sobald ein Puffer getrennt ist, ist er nicht mehr verwendbar.

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
