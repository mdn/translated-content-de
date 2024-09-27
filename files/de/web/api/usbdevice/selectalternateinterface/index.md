---
title: "USBDevice: selectAlternateInterface() Methode"
short-title: selectAlternateInterface()
slug: Web/API/USBDevice/selectAlternateInterface
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`selectAlternateInterface()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn das angegebene alternative Endpunkt ausgewählt wurde.

## Syntax

```js-nolint
selectAlternateInterface(interfaceNumber, alternateSetting)
```

### Parameter

- `interfaceNumber`
  - : Der Index einer der Schnittstellen, die vom Gerät unterstützt werden. Schnittstellen sind gerätespezifisch.
- `alternateSetting`
  - : Die Konfiguration der ausgewählten Schnittstelle.

### Rückgabewert

Ein {{jsxref("promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
