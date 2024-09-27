---
title: "USBConnectionEvent: USBConnectionEvent() Konstruktor"
short-title: USBConnectionEvent()
slug: Web/API/USBConnectionEvent/USBConnectionEvent
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Der **`USBConnectionEvent()`**-Konstruktor erstellt ein neues [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent)-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet, er wird vom Browser als Reaktion auf das Anschließen und Trennen eines USB-Geräts erstellt.

## Syntax

```js-nolint
new USBConnectionEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert mit dem Namen des Ereignisses. Er ist case-sensitiv und Browser setzen ihn auf `connect` oder `disconnect`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften enthalten kann:
    - `device`
      - : Ein [`USBDevice`](/de/docs/Web/API/USBDevice), das das USB-Gerät repräsentiert, das angeschlossen oder getrennt wird.

### Rückgabewert

Ein neues [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
