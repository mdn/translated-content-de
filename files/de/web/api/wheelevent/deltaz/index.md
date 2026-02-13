---
title: "WheelEvent: deltaZ-Eigenschaft"
short-title: deltaZ
slug: Web/API/WheelEvent/deltaZ
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Die schreibgeschützte Eigenschaft **`WheelEvent.deltaZ`** ist ein
`double`, das die Scrollmenge entlang der z-Achse im
[`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode)-Einheit darstellt.

Sie müssen die Eigenschaft `deltaMode` überprüfen, um die Einheit des `deltaZ`-Wertes zu bestimmen. Gehen Sie nicht davon aus, dass der `deltaZ`-Wert in Pixel angegeben ist. Einige Browser können aus Kompatibilitätsgründen je nach Zugriff auf `deltaMode` unterschiedliche Einheiten für den `deltaZ`-Wert zurückgeben, um Websites gerecht zu werden, die die `deltaMode`-Eigenschaft nicht explizit überprüfen.

## Wert

Eine Zahl.

## Beispiele

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaZ: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaZ);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`wheel`](/de/docs/Web/API/Element/wheel_event)
- [`WheelEvent`](/de/docs/Web/API/WheelEvent)
