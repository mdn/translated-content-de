---
title: "USBConnectionEvent: USBConnectionEvent() Konstruktor"
short-title: USBConnectionEvent()
slug: Web/API/USBConnectionEvent/USBConnectionEvent
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Der **`USBConnectionEvent()`** Konstruktor erstellt ein neues {{domxref("USBConnectionEvent")}}-Objekt. Dieser Konstruktor wird typischerweise nicht verwendet; er wird vom Browser als Reaktion auf das Verbinden und Trennen eines USB-Geräts erstellt.

## Syntax

```js-nolint
new USBConnectionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist zwischen Groß- und Kleinschreibung unterscheidend, und Browser setzen ihn auf `connect` oder `disconnect`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `device`
      - : Ein {{domxref("USBDevice")}}, das das verbundene oder getrennte USB-Gerät darstellt.

### Rückgabewert

Ein neues {{domxref("USBConnectionEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
