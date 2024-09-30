---
title: SharedArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`byteLength`** Zugriffseigenschaft von {{jsxref("SharedArrayBuffer")}}-Instanzen gibt die Länge (in Byte) dieses `SharedArrayBuffer` zurück.

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-bytelength.html", "shorter")}}

## Beschreibung

Die `byteLength`-Eigenschaft ist eine Zugriffseigenschaft, deren set-Zugriffsfunktionswert auf `undefined` gesetzt ist. Das bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des geteilten Arrays festgelegt und kann nicht geändert werden.

## Beispiele

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
