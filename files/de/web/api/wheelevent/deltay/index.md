---
title: "WheelEvent: deltaY-Eigenschaft"
short-title: deltaY
slug: Web/API/WheelEvent/deltaY
l10n:
  sourceCommit: 18b603d31ce0b840b1e9347c77e09ef376addbb4
---

{{APIRef("UI Events")}}

Die **`WheelEvent.deltaY`** schreibgeschützte Eigenschaft ist ein
`double`, das die vertikale Scroll-Menge in der
[`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode)-Einheit darstellt.

Sie müssen die `deltaMode`-Eigenschaft prüfen, um die Einheit des `deltaY`-Wertes zu bestimmen. Gehen Sie nicht davon aus, dass der `deltaY`-Wert in Pixeln angegeben ist. Einige Browser können aus Kompatibilitätsgründen unterschiedliche Einheiten für den `deltaY`-Wert zurückgeben, abhängig davon, ob auf `deltaMode` zugegriffen wurde, um Websites zu berücksichtigen, die die `deltaMode`-Eigenschaft nicht explizit prüfen.

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
