---
title: "HIDConnectionEvent: HIDConnectionEvent() Konstruktor"
short-title: HIDConnectionEvent()
slug: Web/API/HIDConnectionEvent/HIDConnectionEvent
l10n:
  sourceCommit: 367b6392294e801f028be1657c5957fe11e6f6f7
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Der **`HIDConnectionEvent()`** Konstruktor erstellt ein neues {{domxref("HIDConnectionEvent")}} Objekt. Normalerweise wird dieser Konstruktor nicht verwendet, da Ereignisse erstellt werden, wenn sich der Verbindungsstatus eines Geräts ändert.

## Syntax

```js-nolint
new HIDConnectionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/klein-schreibungssensitiv und wird von Browsern auf `connect` oder `disconnect` gesetzt.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `device`
      - : Die {{domxref("HIDDevice")}} Instanz, die das verbundene oder getrennte Gerät darstellt.

### Rückgabewert

Ein neues {{domxref("HIDConnectionEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}