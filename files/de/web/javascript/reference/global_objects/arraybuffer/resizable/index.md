---
title: ArrayBuffer.prototype.resizable
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die Zugriffseigenschaft **`resizable`** der {{jsxref("ArrayBuffer")}}-Instanzen gibt an, ob dieser ArrayBuffer in der Größe verändert werden kann oder nicht.

{{EmbedInteractiveExample("pages/js/arraybuffer-resizable.html")}}

## Beschreibung

Die `resizable`-Eigenschaft ist eine Zugriffseigenschaft, deren set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des Arrays festgelegt. Wenn die Option `maxByteLength` im Konstruktor gesetzt wurde, wird `resizable` `true` zurückgeben; andernfalls wird es `false` zurückgeben.

## Beispiele

### Verwendung von resizable

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes anpassbar ist, und prüfen dann seine `resizable`-Eigenschaft, um ihn zu vergrößern, falls `resizable` `true` zurückgibt:

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
