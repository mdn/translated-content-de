---
title: "WheelEvent: deltaMode-Eigenschaft"
short-title: deltaMode
slug: Web/API/WheelEvent/deltaMode
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

Die **`WheelEvent.deltaMode`** schreibgeschützte Eigenschaft gibt ein
`unsigned long` zurück, das die Einheit des Delta-Wert-Scrollbetrags darstellt.
Erlaubte Werte sind:

| Konstante          | Wert   | Beschreibung                                  |
| ------------------ | ------ | -------------------------------------------- |
| `DOM_DELTA_PIXEL`  | `0x00` | Die Delta-Werte sind in Pixeln angegeben.    |
| `DOM_DELTA_LINE`   | `0x01` | Die Delta-Werte sind in Zeilen angegeben.    |
| `DOM_DELTA_PAGE`   | `0x02` | Die Delta-Werte sind in Seiten angegeben.    |

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

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
