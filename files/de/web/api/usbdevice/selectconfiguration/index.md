---
title: "USBDevice: selectConfiguration()-Methode"
short-title: selectConfiguration()
slug: Web/API/USBDevice/selectConfiguration
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`selectConfiguration()`**-Methode des
[`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn die angegebene Konfiguration ausgewählt ist.

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
