---
title: "USBDevice: selectAlternateInterface() Methode"
short-title: selectAlternateInterface()
slug: Web/API/USBDevice/selectAlternateInterface
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`selectAlternateInterface()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn der angegebene alternative Endpunkt ausgewählt wurde.

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

Ein {{jsxref("promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
