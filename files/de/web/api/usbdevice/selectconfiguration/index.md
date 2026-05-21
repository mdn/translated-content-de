---
title: "USBDevice: selectConfiguration()-Methode"
short-title: selectConfiguration()
slug: Web/API/USBDevice/selectConfiguration
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`selectConfiguration()`**-Methode des
[`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn die angegebene Konfiguration ausgewählt wird.

## Syntax

```js-nolint
selectConfiguration(configurationValue)
```

### Parameter

- `configurationValue`
  - : Die Nummer einer gerätespezifischen Konfiguration.

### Rückgabewert

Ein {{jsxref("Promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
