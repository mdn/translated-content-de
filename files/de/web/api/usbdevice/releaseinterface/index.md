---
title: "USBDevice: releaseInterface()-Methode"
short-title: releaseInterface()
slug: Web/API/USBDevice/releaseInterface
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`releaseInterface()`**-Methode des [`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn ein beanspruchtes Interface vom exklusiven Zugriff freigegeben wird.

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
