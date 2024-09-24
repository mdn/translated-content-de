---
title: "USBDevice: selectAlternateInterface()-Methode"
short-title: selectAlternateInterface()
slug: Web/API/USBDevice/selectAlternateInterface
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`selectAlternateInterface()`**-Methode der
{{domxref("USBDevice")}}-Schnittstelle gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn der angegebene alternative Endpunkt ausgewählt wird.

## Syntax

```js-nolint
selectAlternateInterface(interfaceNumber, alternateSetting)
```

### Parameter

- `interfaceNumber`
  - : Der Index einer der von dem Gerät unterstützten Schnittstellen. Schnittstellen
    sind gerätespezifisch.
- `alternateSetting`
  - : Die Konfiguration der ausgewählten Schnittstelle.

### Rückgabewert

Ein {{jsxref("promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
