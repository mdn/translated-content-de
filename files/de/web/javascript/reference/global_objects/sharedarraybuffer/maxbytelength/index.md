---
title: SharedArrayBuffer.prototype.maxByteLength
short-title: maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/maxByteLength
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`maxByteLength`** Zugriffs-Eigenschaft von {{jsxref("SharedArrayBuffer")}} Instanzen gibt die maximale Länge (in Bytes) zurück, auf die dieser `SharedArrayBuffer` erweitert werden kann.

## Beschreibung

Die `maxByteLength` Eigenschaft ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn das Shared-Array erstellt wird. Dies geschieht über die `maxByteLength` Option des {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} Konstruktors und kann nicht geändert werden.

Wenn dieser `SharedArrayBuffer` ohne Angabe eines `maxByteLength` Werts erstellt wurde, liefert diese Eigenschaft einen Wert, der dem Wert der {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}} des `SharedArrayBuffer` entspricht.

## Beispiele

### Verwendung von maxByteLength

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes erweiterbar ist, und geben dann dessen `maxByteLength` zurück:

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
