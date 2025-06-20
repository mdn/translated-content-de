---
title: SharedArrayBuffer.prototype.growable
short-title: growable
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`growable`** Zugriffs-Eigenschaft von {{jsxref("SharedArrayBuffer")}}-Instanzen gibt zurück, ob dieser `SharedArrayBuffer` erweiterbar ist oder nicht.

## Beschreibung

Die `growable`-Eigenschaft ist eine Zugriffs-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn das Array erstellt wird. Wenn im Konstruktor eine `maxByteLength`-Option gesetzt wurde, gibt `growable` `true` zurück; andernfalls gibt es `false` zurück.

## Beispiele

### Verwendung von growable

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der bis zu einer maximalen Länge von 16 Byte erweiterbar ist, überprüfen dann seine `growable`-Eigenschaft und erweitern ihn, wenn `growable` `true` zurückgibt:

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
