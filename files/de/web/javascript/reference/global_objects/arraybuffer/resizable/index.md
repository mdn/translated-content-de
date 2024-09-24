---
title: ArrayBuffer.prototype.resizable
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`resizable`** Zugriffseigenschaft von {{jsxref("ArrayBuffer")}}-Instanzen gibt an, ob dieser Array-Puffer veränderbar ist oder nicht.

{{EmbedInteractiveExample("pages/js/arraybuffer-resizable.html")}}

## Beschreibung

Die Eigenschaft `resizable` ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn das Array erstellt wird. Wenn die Option `maxByteLength` im Konstruktor gesetzt wurde, wird `resizable` `true` zurückgeben; andernfalls wird `false` zurückgegeben.

## Beispiele

### Verwendung von resizable

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes veränderbar ist, überprüfen dann seine `resizable`-Eigenschaft und ändern die Größe, wenn `resizable` `true` zurückgibt:

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
