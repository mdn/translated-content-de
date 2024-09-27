---
title: SharedArrayBuffer.prototype.growable
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable
l10n:
  sourceCommit: 509fde687ed349da8017a546f9cf094163f24844
---

{{JSRef}}

Die **`growable`** Accessor-Eigenschaft von {{jsxref("SharedArrayBuffer")}}-Instanzen gibt an, ob dieser `SharedArrayBuffer` erweiterbar ist oder nicht.

## Beschreibung

Die `growable`-Eigenschaft ist eine Accessor-Eigenschaft, deren set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des Arrays festgelegt. Wenn eine `maxByteLength`-Option im Konstruktor gesetzt wurde, gibt `growable` `true` zurück; wenn nicht, wird `false` zurückgegeben.

## Beispiele

### Verwendung von growable

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der bis zu einer maximalen Länge von 16 Bytes erweiterbar ist, und prüfen anschließend seine `growable`-Eigenschaft, um ihn zu erweitern, falls `growable` `true` zurückgibt:

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
