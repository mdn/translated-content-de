---
title: "WheelEvent: deltaMode-Eigenschaft"
short-title: deltaMode
slug: Web/API/WheelEvent/deltaMode
l10n:
  sourceCommit: 18b603d31ce0b840b1e9347c77e09ef376addbb4
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`WheelEvent.deltaMode`** gibt ein `unsigned long` zurück, welches die Einheit der Scrollmengen-Deltawerte darstellt. Zulässige Werte sind:

| Konstante         | Wert   | Beschreibung                             |
| ----------------- | ------ | ---------------------------------------- |
| `DOM_DELTA_PIXEL` | `0x00` | Die Deltawerte sind in Pixel angegeben.  |
| `DOM_DELTA_LINE`  | `0x01` | Die Deltawerte sind in Zeilen angegeben. |
| `DOM_DELTA_PAGE`  | `0x02` | Die Deltawerte sind in Seiten angegeben. |

Sie müssen die Eigenschaft `deltaMode` überprüfen, um die Einheit der Werte `deltaX`, `deltaY` und `deltaZ` zu bestimmen. Gehen Sie nicht davon aus, dass diese Werte in Pixel angegeben sind. Einige Browser könnten aus Kompatibilitätsgründen unterschiedliche Einheiten für die `delta*` Werte zurückgeben, je nachdem, ob `deltaMode` abgerufen wurde, um Webseiten zu unterstützen, die die `deltaMode`-Eigenschaft nicht explizit überprüfen.

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
