---
title: "WheelEvent: deltaX-Eigenschaft"
short-title: deltaX
slug: Web/API/WheelEvent/deltaX
l10n:
  sourceCommit: 18b603d31ce0b840b1e9347c77e09ef376addbb4
---

{{APIRef("UI Events")}}

Die **`WheelEvent.deltaX`** Lese-Eigenschaft ist ein
`double`, das die horizontale Scrollmenge in der Einheit von
[`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) darstellt.

Sie müssen die `deltaMode`-Eigenschaft überprüfen, um die Einheit des `deltaX`-Wertes zu bestimmen. Gehen Sie nicht davon aus, dass der `deltaX`-Wert in Pixeln angegeben ist. Einige Browser können aus Kompatibilitätsgründen unterschiedliche Einheiten für den `deltaX`-Wert zurückgeben, abhängig davon, ob `deltaMode` abgerufen wurde, um Websites zu entsprechen, die die `deltaMode`-Eigenschaft nicht explizit überprüfen.

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
