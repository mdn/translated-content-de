---
title: "USBDevice: releaseInterface() Methode"
short-title: releaseInterface()
slug: Web/API/USBDevice/releaseInterface
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`releaseInterface()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn ein beanspruchtes Interface aus dem exklusiven Zugriff freigegeben wird.

## Syntax

```js-nolint
releaseInterface(interfaceNumber)
```

### Parameter

- `interfaceNumber`
  - : Der gerätespezifische Index des aktuell beanspruchten Interfaces.

### Rückgabewert

Ein {{jsxref("promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
