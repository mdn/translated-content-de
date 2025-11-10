---
title: SharedArrayBuffer.prototype.maxByteLength
short-title: maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/maxByteLength
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`maxByteLength`** Zugriffs-Property von {{jsxref("SharedArrayBuffer")}}-Instanzen gibt die maximale Länge (in Bytes) zurück, auf die dieser `SharedArrayBuffer` wachsen kann.

## Beschreibung

Die `maxByteLength`-Property ist eine Zugriffs-Property, deren set-Zugriffsfunktions-Property `undefined` ist, was bedeutet, dass Sie diese Property nur lesen können. Der Wert wird festgelegt, wenn das gemeinsame Array erstellt wird, indem die `maxByteLength`-Option des {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}-Konstruktors gesetzt wird und kann nicht geändert werden.

Wenn dieser `SharedArrayBuffer` erstellt wurde, ohne einen `maxByteLength`-Wert anzugeben, gibt diese Property einen Wert zurück, der dem Wert des {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}} des `SharedArrayBuffer` entspricht.

## Beispiele

### Verwendung von maxByteLength

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes vergrößert werden kann, und geben dann seinen `maxByteLength` zurück:

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
