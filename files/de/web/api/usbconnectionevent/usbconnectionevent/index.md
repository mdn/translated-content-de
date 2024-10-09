---
title: "USBConnectionEvent: USBConnectionEvent()-Konstruktor"
short-title: USBConnectionEvent()
slug: Web/API/USBConnectionEvent/USBConnectionEvent
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`USBConnectionEvent()`**-Konstruktor erstellt ein neues [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent)-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet, da er vom Browser als Reaktion auf das Verbinden und Trennen eines USB-Geräts erstellt wird.

## Syntax

```js-nolint
new USBConnectionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitive und Browser setzen es auf `connect` oder `disconnect`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `device`
      - : Ein [`USBDevice`](/de/docs/Web/API/USBDevice), das das verbundene oder getrennte USB-Gerät repräsentiert.

### Rückgabewert

Ein neues [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
