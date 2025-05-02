---
title: SVGTransform
slug: Web/API/SVGTransform
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die **`SVGTransform`**-Schnittstelle spiegelt eine der Komponenten-Transformationen innerhalb einer [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) wider; ein `SVGTransform`-Objekt entspricht also einer einzelnen Komponente (z.B. `scale(…)` oder `matrix(…)`) innerhalb eines {{ SVGAttr("transform") }}-Attributs.

Ein `SVGTransform`-Objekt kann als read-only bezeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, eine Ausnahme auslösen.

## Instanz-Eigenschaften

- [`type`](/de/docs/Web/API/SVGTransform/type)
  - : Der Typ des Wertes, wie durch eine der `SVG_TRANSFORM_*`-Konstanten, die in dieser Schnittstelle definiert sind, angegeben.
- [`angle`](/de/docs/Web/API/SVGTransform/angle)
  - : Der Winkel als Gleitkommawert. Ein praktisches Attribut für `SVG_TRANSFORM_ROTATE`, `SVG_TRANSFORM_SKEWX` und `SVG_TRANSFORM_SKEWY`. Für `SVG_TRANSFORM_MATRIX`, `SVG_TRANSFORM_TRANSLATE` und `SVG_TRANSFORM_SCALE` wird `angle` null sein.
- [`matrix`](/de/docs/Web/API/SVGTransform/matrix)
  - : Die Matrix als [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), die diese Transformation darstellt. Das Matrix-Objekt ist aktiv, was bedeutet, dass Änderungen am `SVGTransform`-Objekt sofort im Matrix-Objekt widergespiegelt werden und umgekehrt. Falls das Matrix-Objekt direkt geändert wird (d.h. ohne Verwendung der Methoden der `SVGTransform`-Schnittstelle selbst), ändert sich der Typ des `SVGTransform` zu `SVG_TRANSFORM_MATRIX`.

## Instanz-Methoden

- [`setMatrix()`](/de/docs/Web/API/SVGTransform/setMatrix)
  - : Setzt den Umwandlungstyp auf `SVG_TRANSFORM_MATRIX`, wobei die Parameter-Matrix die neue Transformation definiert. Beachten Sie, dass die Werte aus dem Parameter `matrix` kopiert werden.
- [`setTranslate()`](/de/docs/Web/API/SVGTransform/setTranslate)
  - : Setzt den Umwandlungstyp auf `SVG_TRANSFORM_TRANSLATE`, wobei die Parameter `tx` und `ty` die Übersetzungsbeträge definieren.
- [`setScale()`](/de/docs/Web/API/SVGTransform/setScale)
  - : Setzt den Umwandlungstyp auf `SVG_TRANSFORM_SCALE`, wobei die Parameter `sx` und `sy` die Skalierungsbeträge definieren.
- [`setRotate()`](/de/docs/Web/API/SVGTransform/setRotate)
  - : Setzt den Umwandlungstyp auf `SVG_TRANSFORM_ROTATE`, wobei der Parameter `angle` den Rotationswinkel definiert und die Parameter `cx` und `cy` das optionale Zentrum der Rotation bestimmen.
- [`setSkewX()`](/de/docs/Web/API/SVGTransform/setSkewX)
  - : Setzt den Umwandlungstyp auf `SVG_TRANSFORM_SKEWX`, wobei der Parameter `angle` die Menge der Scherung definiert.
- [`setSkewY()`](/de/docs/Web/API/SVGTransform/setSkewY)
  - : Setzt den Umwandlungstyp auf `SVG_TRANSFORM_SKEWY`, wobei der Parameter `angle` die Menge der Scherung definiert.

## Statische Eigenschaften

- `SVG_TRANSFORM_UNKNOWN` (0)
  - : Der Einheitentyp gehört nicht zu den vordefinierten Einheitentypen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ umzustellen.
- `SVG_TRANSFORM_MATRIX` (1)
  - : Eine `matrix(…)`-Transformation.
- `SVG_TRANSFORM_TRANSLATE` (2)
  - : Eine `translate(…)`-Transformation.
- `SVG_TRANSFORM_SCALE` (3)
  - : Eine `scale(…)`-Transformation.
- `SVG_TRANSFORM_ROTATE` (4)
  - : Eine `rotate(…)`-Transformation.
- `SVG_TRANSFORM_SKEWX` (5)
  - : Eine `skewx(…)`-Transformation.
- `SVG_TRANSFORM_SKEWY` (6)
  - : Eine `skewy(…)`-Transformation.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
