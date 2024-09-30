---
title: "SensorErrorEvent: SensorErrorEvent() Konstruktor"
short-title: SensorErrorEvent()
slug: Web/API/SensorErrorEvent/SensorErrorEvent
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`SensorErrorEvent()`**-Konstruktor
erstellt ein neues [`SensorErrorEvent`](/de/docs/Web/API/SensorErrorEvent)-Objekt, das Informationen über
Fehler bereitstellt, die von einer der auf [`Sensor`](/de/docs/Web/API/Sensor) basierenden Schnittstellen ausgelöst wurden.

## Syntax

```js-nolint
new SensorErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/kleinschreibungssensitiv und Browser setzen ihn immer auf `error`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `error`
      - : Ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, welches den Fehler beschreibt.

### Rückgabewert

Ein neues [`SensorErrorEvent`](/de/docs/Web/API/SensorErrorEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
