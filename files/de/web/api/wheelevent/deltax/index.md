---
title: "WheelEvent: deltaX-Eigenschaft"
short-title: deltaX
slug: Web/API/WheelEvent/deltaX
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Die **`WheelEvent.deltaX`**-Eigenschaft ist eine
schreibgeschützte Eigenschaft vom Typ `double`, die den horizontalen Bildlaufbetrag in der
[`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode)-Einheit darstellt.

Es ist notwendig, die `deltaMode`-Eigenschaft zu überprüfen, um die Einheit des `deltaX`-Wertes zu bestimmen. Gehen Sie nicht davon aus, dass der `deltaX`-Wert in Pixeln angegeben ist. Einige Browser können aus Kompatibilitätsgründen unterschiedliche Einheiten für den `deltaX`-Wert zurückgeben, abhängig davon, ob `deltaMode` aufgerufen wurde, um Websites zu unterstützen, die die `deltaMode`-Eigenschaft nicht explizit überprüfen.

## Wert

Eine Zahl.

## Beispiele

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaX: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaX);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`wheel`](/de/docs/Web/API/Element/wheel_event)
- [`WheelEvent`](/de/docs/Web/API/WheelEvent)
