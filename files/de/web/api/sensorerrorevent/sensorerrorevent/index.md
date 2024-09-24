---
title: "SensorErrorEvent: SensorErrorEvent() Konstruktor"
short-title: SensorErrorEvent()
slug: Web/API/SensorErrorEvent/SensorErrorEvent
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`SensorErrorEvent()`** Konstruktor
erstellt ein neues {{domxref("SensorErrorEvent")}} Objekt, das Informationen über
Fehler bereitstellt, die durch eine der auf {{domxref('Sensor')}} basierenden Schnittstellen ausgelöst werden.

## Syntax

```js-nolint
new SensorErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/kleinbuchstabenempfindlich und Browser setzen es immer auf `error`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `error`
      - : Ein {{domxref('DOMException')}} Objekt, das den Fehler beschreibt.

### Rückgabewert

Ein neues {{domxref("SensorErrorEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
