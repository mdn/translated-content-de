---
title: "HIDConnectionEvent: HIDConnectionEvent() Konstruktor"
short-title: HIDConnectionEvent()
slug: Web/API/HIDConnectionEvent/HIDConnectionEvent
l10n:
  sourceCommit: 367b6392294e801f028be1657c5957fe11e6f6f7
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Der **`HIDConnectionEvent()`** Konstruktor erzeugt ein neues [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent) Objekt. Typischerweise wird dieser Konstruktor nicht verwendet, da Ereignisse erstellt werden, wenn sich der Verbindungsstatus eines Geräts ändert.

## Syntax

```js-nolint
new HIDConnectionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitive und Browser setzen ihn auf `connect` oder `disconnect`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `device`
      - : Die [`HIDDevice`](/de/docs/Web/API/HIDDevice) Instanz, die das verbundene oder getrennte Gerät repräsentiert.

### Rückgabewert

Ein neues [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
