---
title: "USBDevice: releaseInterface() Methode"
short-title: releaseInterface()
slug: Web/API/USBDevice/releaseInterface
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`releaseInterface()`**-Methode der {{domxref("USBDevice")}}-Schnittstelle gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn eine beanspruchte Schnittstelle aus dem exklusiven Zugriff freigegeben wird.

## Syntax

```js-nolint
releaseInterface(interfaceNumber)
```

### Parameter

- `interfaceNumber`
  - : Der gerätespezifische Index der aktuell beanspruchten Schnittstelle.

### Rückgabewert

Ein {{jsxref("promise")}}.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
