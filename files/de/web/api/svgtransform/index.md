---
title: SVGTransform
slug: Web/API/SVGTransform
l10n:
  sourceCommit: f8bffed375ced0dce47ee084d805e69b631a9bbb
---

{{APIRef("SVG")}}

Das **`SVGTransform`**-Interface spiegelt eine der Komponenten-Transformationen innerhalb einer [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) wider; daher entspricht ein `SVGTransform`-Objekt einer einzelnen Komponente (z.B. `scale(…)` oder `matrix(…)`) innerhalb eines {{ SVGAttr("transform") }}-Attributs.

Ein `SVGTransform`-Objekt kann als schreibgeschützt bezeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

## Instanz-Eigenschaften

- [`type`](/de/docs/Web/API/SVGTransform/type)

  - : Der Typ des Wertes, wie er durch eine der `SVG_TRANSFORM_*` Konstanten definiert ist, die in diesem Interface festgelegt sind.

- [`angle`](/de/docs/Web/API/SVGTransform/angle)

  - : Der Winkel als Gleitkommawert. Ein Komfortattribut für `SVG_TRANSFORM_ROTATE`, `SVG_TRANSFORM_SKEWX` und `SVG_TRANSFORM_SKEWY`. Bei `SVG_TRANSFORM_MATRIX`, `SVG_TRANSFORM_TRANSLATE` und `SVG_TRANSFORM_SCALE` wird `angle` null sein.

- [`matrix`](/de/docs/Web/API/SVGTransform/matrix)
  - : Die Matrix als [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), die diese Transformation darstellt. Das Matrixobjekt ist live, was bedeutet, dass alle Änderungen am `SVGTransform`-Objekt sofort im Matrixobjekt widergespiegelt werden und umgekehrt. Falls das Matrixobjekt direkt geändert wird (d.h. ohne die Methoden des `SVGTransform`-Interfaces zu verwenden), ändert sich der Typ des `SVGTransform` zu `SVG_TRANSFORM_MATRIX`.

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Einheitentyp ist nicht einer der vordefinierten Einheitentypen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert zu diesem Typ zu wechseln.
      </td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_MATRIX</code></td>
      <td>1</td>
      <td>Eine <code>matrix(…)</code>-Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_TRANSLATE</code></td>
      <td>2</td>
      <td>Eine <code>translate(…)</code>-Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SCALE</code></td>
      <td>3</td>
      <td>Eine <code>scale(…)</code>-Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_ROTATE</code></td>
      <td>4</td>
      <td>Eine <code>rotate(…)</code>-Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SKEWX</code></td>
      <td>5</td>
      <td>Eine <code>skewx(…)</code>-Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SKEWY</code></td>
      <td>6</td>
      <td>Eine <code>skewy(…)</code>-Transformation</td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

- [`setMatrix()`](/de/docs/Web/API/SVGTransform/setMatrix)
  - : Setzt den Transformationstyp auf `SVG_TRANSFORM_MATRIX`, wobei die Parameter der Matrix die neue Transformation definieren. Beachten Sie, dass die Werte aus dem Matrix-Parameter kopiert werden.
- [`setTranslate()`](/de/docs/Web/API/SVGTransform/setTranslate)
  - : Setzt den Transformationstyp auf `SVG_TRANSFORM_TRANSLATE`, wobei die Parameter `tx` und `ty` die Beträge der Verschiebung definieren.
- [`setScale()`](/de/docs/Web/API/SVGTransform/setScale)
  - : Setzt den Transformationstyp auf `SVG_TRANSFORM_SCALE`, wobei die Parameter `sx` und `sy` die Skalierungsbeträge definieren.
- [`setRotate()`](/de/docs/Web/API/SVGTransform/setRotate)
  - : Setzt den Transformationstyp auf `SVG_TRANSFORM_ROTATE`, wobei der Parameter `angle` den Rotationswinkel definiert und die Parameter `cx` und `cy` das optionale Rotationszentrum definieren.
- [`setSkewX()`](/de/docs/Web/API/SVGTransform/setSkewX)
  - : Setzt den Transformationstyp auf `SVG_TRANSFORM_SKEWX`, wobei der Parameter `angle` das Maß der Verzerrung definiert.
- [`setSkewY()`](/de/docs/Web/API/SVGTransform/setSkewY)
  - : Setzt den Transformationstyp auf `SVG_TRANSFORM_SKEWY`, wobei der Parameter `angle` das Maß der Verzerrung definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
