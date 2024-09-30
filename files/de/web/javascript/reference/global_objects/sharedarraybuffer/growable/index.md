---
title: SharedArrayBuffer.prototype.growable
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable
l10n:
  sourceCommit: 509fde687ed349da8017a546f9cf094163f24844
---

{{JSRef}}

Die **`growable`** Accessoreigenschaft von Instanzen des {{jsxref("SharedArrayBuffer")}} gibt zurück, ob dieser `SharedArrayBuffer` erweiterbar ist oder nicht.

## Beschreibung

Die `growable`-Eigenschaft ist eine Accessoreigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn das Array erstellt wird. Wenn eine `maxByteLength`-Option im Konstruktor gesetzt wurde, wird `growable` `true` zurückgeben; andernfalls wird es `false` zurückgeben.

## Beispiele

### Verwendung von growable

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes erweiterbar ist, und prüfen dann seine `growable`-Eigenschaft, indem wir ihn erweitern, wenn `growable` `true` zurückgibt:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

if (buffer.growable) {
  console.log("SAB is growable!");
  buffer.grow(12);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
