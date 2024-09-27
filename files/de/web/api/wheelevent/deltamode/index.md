---
title: "WheelEvent: deltaMode Eigenschaft"
short-title: deltaMode
slug: Web/API/WheelEvent/deltaMode
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`WheelEvent.deltaMode`** gibt ein
`unsigned long` zurück, das die Einheit der Delta-Werte für den Scroll-Betrag darstellt.
Erlaubte Werte sind:

| Konstante         | Wert   | Beschreibung                              |
| ----------------- | ------ | ----------------------------------------- |
| `DOM_DELTA_PIXEL` | `0x00` | Die Delta-Werte sind in Pixel angegeben.  |
| `DOM_DELTA_LINE`  | `0x01` | Die Delta-Werte sind in Zeilen angegeben. |
| `DOM_DELTA_PAGE`  | `0x02` | Die Delta-Werte sind in Seiten angegeben. |

## Wert

Ein `unsigned long`.

## Beispiele

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaX: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaMode);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`wheel`](/de/docs/Web/API/Element/wheel_event)
- [`WheelEvent`](/de/docs/Web/API/WheelEvent)
