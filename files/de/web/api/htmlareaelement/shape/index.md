---
title: "HTMLAreaElement: shape-Eigenschaft"
short-title: shape
slug: Web/API/HTMLAreaElement/shape
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`shape`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle gibt die Form eines Bereichs einer Bildkarte an. Sie spiegelt das [`shape`](/de/docs/Web/HTML/Reference/Elements/area#shape)-Attribut des {{htmlelement("area")}}-Elements wider.

## Wert

Ein String; `rect`, `circle` oder `poly`.

## Beispiele

```js
const areaElement = document.getElementById("imageMapArea");
console.log(areaElement.shape);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAreaElement.coords`](/de/docs/Web/API/HTMLAreaElement/coords)
- [`HTMLAreaElement.alt`](/de/docs/Web/API/HTMLAreaElement/alt)
- [`HTMLMapElement`](/de/docs/Web/API/HTMLMapElement)
- {{HTMLElement("area")}}
- {{HTMLElement("map")}}
- {{HTMLElement("a")}}
