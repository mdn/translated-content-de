---
title: SharedArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/maxByteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`maxByteLength`** Zugriffseigenschaft von {{jsxref("SharedArrayBuffer")}}-Instanzen gibt die maximale Länge (in Bytes) zurück, zu der dieser `SharedArrayBuffer` wachsen kann.

## Beschreibung

Die `maxByteLength`-Eigenschaft ist eine Zugriffseigenschaft, deren Set-Accessorfunktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn das gemeinsame Array erstellt wird, und über die `maxByteLength`-Option des {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} Konstruktors eingestellt und kann nicht geändert werden.

Wenn dieser `SharedArrayBuffer` ohne Angabe eines `maxByteLength`-Werts erstellt wurde, gibt diese Eigenschaft einen Wert zurück, der dem Wert des {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}} des `SharedArrayBuffer` entspricht.

## Beispiele

### Verwendung von maxByteLength

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes erweiterbar ist, und geben dann seine `maxByteLength` zurück:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.maxByteLength; // 16
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("SharedArrayBuffer")}}
