---
title: "WheelEvent: deltaY-Eigenschaft"
short-title: deltaY
slug: Web/API/WheelEvent/deltaY
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Die schreibgeschützte Eigenschaft **`WheelEvent.deltaY`** ist ein
`double`, das die vertikale Scrollmenge in der
Einheit des [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) darstellt.

Sie müssen die Eigenschaft `deltaMode` überprüfen, um die Einheit des `deltaY`-Werts zu bestimmen. Gehen Sie nicht davon aus, dass der `deltaY`-Wert in Pixeln angegeben wird. Einige Browser können aus Kompatibilitätsgründen unterschiedliche Einheiten für den `deltaY`-Wert zurückgeben, abhängig davon, ob der `deltaMode` abgerufen wurde, um Webseiten zu berücksichtigen, die die `deltaMode`-Eigenschaft nicht explizit überprüfen.

## Wert

Eine Zahl.

## Beispiele

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaY: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaY);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`wheel`](/de/docs/Web/API/Element/wheel_event)
- [`WheelEvent`](/de/docs/Web/API/WheelEvent)
