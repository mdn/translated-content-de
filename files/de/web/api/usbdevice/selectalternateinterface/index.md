---
title: "USBDevice: selectAlternateInterface()-Methode"
short-title: selectAlternateInterface()
slug: Web/API/USBDevice/selectAlternateInterface
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`selectAlternateInterface()`**-Methode des [`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der angegebene alternative Endpunkt ausgewählt wurde.

## Syntax

```js-nolint
selectAlternateInterface(interfaceNumber, alternateSetting)
```

### Parameter

- `interfaceNumber`
  - : Der Index einer der vom Gerät unterstützten Schnittstellen. Schnittstellen sind gerätespezifisch.
- `alternateSetting`
  - : Die Konfiguration der ausgewählten Schnittstelle.

### Rückgabewert

Ein {{jsxref("Promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
