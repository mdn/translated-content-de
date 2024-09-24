---
title: "USBDevice: forget()-Methode"
short-title: forget()
slug: Web/API/USBDevice/forget
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`forget()`** Methode der Schnittstelle {{domxref("USBDevice")}} gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle ausstehenden Vorgänge abgebrochen sind, alle offenen Schnittstellen freigegeben sind, die Sitzung des Geräts beendet ist und die Berechtigung zurückgesetzt wurde.

## Syntax

```js-nolint
forget()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, sobald die Zugriffsberechtigung für das Gerät widerrufen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
