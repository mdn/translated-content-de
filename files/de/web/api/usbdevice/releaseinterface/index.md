---
title: "USBDevice: releaseInterface()-Methode"
short-title: releaseInterface()
slug: Web/API/USBDevice/releaseInterface
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`releaseInterface()`**-Methode des
[`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn ein beanspruchtes Interface von exklusivem Zugriff freigegeben wird.

## Syntax

```js-nolint
releaseInterface(interfaceNumber)
```

### Parameter

- `interfaceNumber`
  - : Der gerätespezifische Index des derzeit beanspruchten Interfaces.

### Rückgabewert

Ein {{jsxref("Promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
