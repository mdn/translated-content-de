---
title: "HIDConnectionEvent: HIDConnectionEvent() Konstruktor"
short-title: HIDConnectionEvent()
slug: Web/API/HIDConnectionEvent/HIDConnectionEvent
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Der **`HIDConnectionEvent()`** Konstruktor erstellt ein neues [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent)-Objekt. Typischerweise wird dieser Konstruktor nicht verwendet, da Ereignisse erstellt werden, wenn sich der Verbindungsstatus eines Geräts ändert.

## Syntax

```js-nolint
new HIDConnectionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er unterscheidet zwischen Groß- und Kleinschreibung und Browser setzen ihn auf `connect` oder `disconnect`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `device`
      - : Die [`HIDDevice`](/de/docs/Web/API/HIDDevice) Instanz, die das ein- oder ausgesteckte Gerät repräsentiert.

### Rückgabewert

Ein neues [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
