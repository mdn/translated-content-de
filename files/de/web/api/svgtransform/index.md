---
title: SVGTransform
slug: Web/API/SVGTransform
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("SVG")}}

Die **`SVGTransform`**-Schnittstelle repräsentiert eine der einzelnen Transformationen innerhalb einer [`SVGTransformList`](/de/docs/Web/API/SVGTransformList). Ein `SVGTransform`-Objekt entspricht somit einer einzelnen Komponente (z. B. `scale(…)` oder `matrix(…)`) innerhalb eines {{ SVGAttr("transform") }}-Attributs.

Ein `SVGTransform`-Objekt kann als schreibgeschützt festgelegt werden. Versuche, das Objekt zu ändern, lösen dann eine Ausnahme aus.

## Instanzeigenschaften

- [`type`](/de/docs/Web/API/SVGTransform/type) {{ReadOnlyInline}}
  - : Der Typ des Werts, angegeben durch eine der auf dieser Schnittstelle definierten `SVG_TRANSFORM_*`-Konstanten.
- [`angle`](/de/docs/Web/API/SVGTransform/angle) {{ReadOnlyInline}}
  - : Der Winkel als Gleitkommawert. Eine Hilfseigenschaft für `SVG_TRANSFORM_ROTATE`, `SVG_TRANSFORM_SKEWX` und `SVG_TRANSFORM_SKEWY`. Bei `SVG_TRANSFORM_MATRIX`, `SVG_TRANSFORM_TRANSLATE` und `SVG_TRANSFORM_SCALE` ist `angle` gleich null.
- [`matrix`](/de/docs/Web/API/SVGTransform/matrix) {{ReadOnlyInline}}
  - : Die Matrix als [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), die diese Transformation darstellt. Das Matrixobjekt ist live: Änderungen am `SVGTransform`-Objekt spiegeln sich unmittelbar im Matrixobjekt wider und umgekehrt. Wird das Matrixobjekt direkt geändert (d.h. ohne die Methoden der `SVGTransform`-Schnittstelle zu verwenden), ändert sich der Typ von `SVGTransform` zu `SVG_TRANSFORM_MATRIX`.

## Instanzmethoden

- [`setMatrix()`](/de/docs/Web/API/SVGTransform/setMatrix)
  - : Setzt den Transformationstyp auf `SVG_TRANSFORM_MATRIX`. Der Parameter `matrix` definiert die neue Transformation. Beachten Sie, dass die Werte aus dem Parameter `matrix` kopiert werden.
- [`setTranslate()`](/de/docs/Web/API/SVGTransform/setTranslate)
  - : Setzt den Transformationstyp auf `SVG_TRANSFORM_TRANSLATE`. Die Parameter `tx` und `ty` definieren die Verschiebungsbeträge.
- [`setScale()`](/de/docs/Web/API/SVGTransform/setScale)
  - : Setzt den Transformationstyp auf `SVG_TRANSFORM_SCALE`. Die Parameter `sx` und `sy` definieren die Skalierungsfaktoren.
- [`setRotate()`](/de/docs/Web/API/SVGTransform/setRotate)
  - : Setzt den Transformationstyp auf `SVG_TRANSFORM_ROTATE`. Der Parameter `angle` definiert den Drehwinkel, und die Parameter `cx` und `cy` definieren das optionale Drehzentrum.
- [`setSkewX()`](/de/docs/Web/API/SVGTransform/setSkewX)
  - : Setzt den Transformationstyp auf `SVG_TRANSFORM_SKEWX`. Der Parameter `angle` definiert den Scherungswinkel.
- [`setSkewY()`](/de/docs/Web/API/SVGTransform/setSkewY)
  - : Setzt den Transformationstyp auf `SVG_TRANSFORM_SKEWY`. Der Parameter `angle` definiert den Scherungswinkel.

## Statische Eigenschaften

- `SVG_TRANSFORM_UNKNOWN` (0)
  - : Der Einheitentyp gehört nicht zu den vordefinierten Einheitentypen. Es ist unzulässig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ umzustellen.
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
