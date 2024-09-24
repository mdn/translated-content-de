---
title: "USBDevice: Methode selectConfiguration()"
short-title: selectConfiguration()
slug: Web/API/USBDevice/selectConfiguration
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`selectConfiguration()`**-Methode des
{{domxref("USBDevice")}}-Interfaces gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn die angegebene Konfiguration ausgewählt wird.

## Syntax

```js-nolint
selectConfiguration(configurationValue)
```

### Parameter

- `configurationValue`
  - : Die Nummer einer gerätespezifischen Konfiguration.

### Rückgabewert

Ein {{jsxref("promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
