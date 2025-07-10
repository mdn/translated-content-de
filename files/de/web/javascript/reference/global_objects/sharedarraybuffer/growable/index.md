---
title: SharedArrayBuffer.prototype.growable
short-title: growable
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`growable`** Zugriffs-Eigenschaft von {{jsxref("SharedArrayBuffer")}}-Instanzen gibt an, ob dieser `SharedArrayBuffer` erweiterbar ist oder nicht.

## Beschreibung

Die `growable`-Eigenschaft ist eine Zugriffs-Eigenschaft, deren set-Zugriffs-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn das Array erstellt wird. Wenn eine `maxByteLength`-Option im Konstruktor festgelegt wurde, gibt `growable` `true` zurück; wenn nicht, gibt es `false` zurück.

## Beispiele

### Verwendung von growable

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes erweiterbar ist, und prüfen dann seine `growable`-Eigenschaft, um ihn zu erweitern, wenn `growable` `true` zurückgibt:

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
