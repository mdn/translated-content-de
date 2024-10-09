---
title: "USBDevice: forget()-Methode"
short-title: forget()
slug: Web/API/USBDevice/forget
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`forget()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle ausstehenden Operationen abgebrochen sind, alle offenen Schnittstellen freigegeben wurden, die Gerätesitzung beendet ist und die Berechtigung zurückgesetzt wurde.

## Syntax

```js-nolint
forget()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, sobald die Zugriffsberechtigung für das Gerät widerrufen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
