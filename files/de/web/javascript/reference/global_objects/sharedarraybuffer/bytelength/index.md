---
title: SharedArrayBuffer.prototype.byteLength
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Die Zugriffseigenschaft **`byteLength`** von {{jsxref("SharedArrayBuffer")}}-Instanzen gibt die Länge (in Bytes) dieses `SharedArrayBuffer` zurück.

## Beschreibung

Die `byteLength`-Eigenschaft ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist. Das bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn das geteilte Array erstellt wird und kann nicht geändert werden.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt in der Konsole oder einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nur definiert ist, wenn seine [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) erfüllt sind.

### Verwendung von byteLength

```js
const sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("SharedArrayBuffer")}}
