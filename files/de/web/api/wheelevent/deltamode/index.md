---
title: "WheelEvent: deltaMode-Eigenschaft"
short-title: deltaMode
slug: Web/API/WheelEvent/deltaMode
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Die schreibgeschützte Eigenschaft **`WheelEvent.deltaMode`** gibt ein `unsigned long` zurück, das die Einheit der Delta-Werte für das Scrollen angibt. Erlaubte Werte sind:

| Konstante         | Wert   | Beschreibung                              |
| ----------------- | ------ | ----------------------------------------- |
| `DOM_DELTA_PIXEL` | `0x00` | Die Delta-Werte sind in Pixeln angegeben. |
| `DOM_DELTA_LINE`  | `0x01` | Die Delta-Werte sind in Zeilen angegeben. |
| `DOM_DELTA_PAGE`  | `0x02` | Die Delta-Werte sind in Seiten angegeben. |

Sie müssen die Eigenschaft `deltaMode` abfragen, um die Einheit der `deltaX`-, `deltaY`- und `deltaZ`-Werte zu bestimmen. Gehen Sie nicht davon aus, dass diese Werte in Pixeln angegeben sind. Einige Browser können aus Kompatibilitätsgründen verschiedene Einheiten für die `delta*`-Werte zurückgeben, abhängig davon, ob `deltaMode` abgefragt wurde, um Websites gerecht zu werden, die die `deltaMode`-Eigenschaft nicht explizit überprüfen.

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
