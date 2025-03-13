---
title: ArrayBuffer.prototype.resizable
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`resizable`** Zugriffs-Eigenschaft von {{jsxref("ArrayBuffer")}}-Instanzen gibt zurück, ob dieser ArrayBuffer größenveränderbar ist oder nicht.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.prototype.resizable")}}

```js interactive-example
const buffer1 = new ArrayBuffer(8, { maxByteLength: 16 });
const buffer2 = new ArrayBuffer(8);

console.log(buffer1.resizable);
// Expected output: true

console.log(buffer2.resizable);
// Expected output: false
```

## Beschreibung

Die `resizable`-Eigenschaft ist eine Zugriffs-Eigenschaft, deren set-Zugriffs-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn der Array konstruiert wird. Wenn die `maxByteLength`-Option im Konstruktor gesetzt wurde, wird `resizable` `true` zurückgeben; wenn nicht, wird `false` zurückgegeben.

## Beispiele

### Verwendung von resizable

In diesem Beispiel erstellen wir einen 8-Byte-Buffer, der auf eine maximale Länge von 16 Bytes vergrößert werden kann, prüfen dann seine `resizable`-Eigenschaft und ändern seine Größe, wenn `resizable` `true` zurückgibt:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Buffer is resizable!");
  buffer.resize(12);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
- {{jsxref("ArrayBuffer.prototype.resize()")}}
