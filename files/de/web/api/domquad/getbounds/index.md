---
title: "DOMQuad: getBounds()-Methode"
short-title: getBounds()
slug: Web/API/DOMQuad/getBounds
l10n:
  sourceCommit: 30c67624659d33887ea64cb8e08766fed55b2491
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die Methode [`DOMQuad`](/de/docs/Web/API/DOMQuad)
`getBounds()` gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt zurück, das das kleinste Rechteck darstellt, welches das `DOMQuad`-Objekt vollständig enthält.

## Syntax

```js-nolint
getBounds()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DOMRect`](/de/docs/Web/API/DOMRect) mit den Eigenschaften x, y, width und height, das die Begrenzungsbox für das `DOMQuad` basierend auf seinen Eckkoordinaten definiert.

## Beispiele

Dieses Beispiel erstellt ein [`DOMQuad`](/de/docs/Web/API/DOMQuad) mit vier Punkten und erhält dann sein Begrenzungsrechteck.

```js
const quad = new DOMQuad(
  { x: 40, y: 25 },
  { x: 180, y: 8 },
  { x: 210, y: 150 },
  { x: 10, y: 180 },
);

const quadBounds = quad.getBounds();
```

![Ein unregelmäßiges Viereck, dessen Seiten weder vertikal noch horizontal sind. Seine vier Ecken sind mit roten Kreisen markiert. Um dieses Viereck herum befindet sich ein gestricheltes Rechteck. Alle Seiten dieses Rechtecks sind vertikal oder horizontal und tangieren das Viereck.](./domquad.svg)

Die Abbildung zeigt ein unregelmäßiges Viereck, das durch ein [`DOMQuad`](/de/docs/Web/API/DOMQuad) dargestellt wird. Die vier rot gefärbten Kreise repräsentieren die [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Attribute `p1` bis `p4`. Das gestrichelte Rechteck repräsentiert das Begrenzungsrechteck, das von der `getBounds()`-Methode des [`DOMQuad`](/de/docs/Web/API/DOMQuad) zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
