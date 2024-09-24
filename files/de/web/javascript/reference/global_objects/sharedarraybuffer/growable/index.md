---
title: SharedArrayBuffer.prototype.growable
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable
l10n:
  sourceCommit: 509fde687ed349da8017a546f9cf094163f24844
---

{{JSRef}}

Die **`growable`** Zugriffsproperty von {{jsxref("SharedArrayBuffer")}} Instanzen gibt an, ob dieser `SharedArrayBuffer` vergrößert werden kann oder nicht.

## Beschreibung

Die `growable` Eigenschaft ist eine Zugriffsproperty, deren Set-Zugriffsfunktions `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn das Array erstellt wird. Wenn im Konstruktor eine `maxByteLength`-Option festgelegt wurde, gibt `growable` `true` zurück; andernfalls `false`.

## Beispiele

### Verwendung von growable

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Byte vergrößerbar ist, und überprüfen dann seine `growable` Eigenschaft, um ihn zu vergrößern, falls `growable` `true` zurückgibt:

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
