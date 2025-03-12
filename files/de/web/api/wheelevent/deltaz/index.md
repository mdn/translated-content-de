---
title: "WheelEvent: deltaZ-Eigenschaft"
short-title: deltaZ
slug: Web/API/WheelEvent/deltaZ
l10n:
  sourceCommit: 18b603d31ce0b840b1e9347c77e09ef376addbb4
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`WheelEvent.deltaZ`** ist ein `double`, das die Scrollmenge entlang der z-Achse in der Einheit [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) darstellt.

Sie müssen die Eigenschaft `deltaMode` überprüfen, um die Einheit des `deltaZ`-Werts zu bestimmen. Gehen Sie nicht davon aus, dass der `deltaZ`-Wert in Pixeln angegeben ist. Einige Browser können aus Kompatibilitätsgründen unterschiedliche Einheiten für den `deltaZ`-Wert zurückgeben, je nachdem, ob auf `deltaMode` zugegriffen wurde, um Websites zu unterstützen, die die Eigenschaft `deltaMode` nicht explizit überprüfen.

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
