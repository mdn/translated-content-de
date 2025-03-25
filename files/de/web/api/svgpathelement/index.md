---
title: SVGPathElement
slug: Web/API/SVGPathElement
l10n:
  sourceCommit: ea24a70e5c5e3b474d683e9b0dcb8807aaba82f3
---

{{APIRef("SVG")}}

Das **`SVGPathElement`** Interface entspricht dem {{SVGElement("path")}} Element.

{{InheritanceDiagram}}

> [!NOTE]
> In SVG 2 wurden die Methoden `getPathSegAtLength()` und `createSVGPathSeg*` entfernt und die Eigenschaft `pathLength` sowie die Methoden `getTotalLength()` und `getPointAtLength()` zum [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement) verschoben.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

- [`SVGPathElement.pathLength`](/de/docs/Web/API/SVGPathElement/pathLength) {{ReadOnlyInline}}
  - : Diese Eigenschaft spiegelt das Attribut {{SVGAttr("pathLength")}} wider.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

- [`SVGPathElement.getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData)
  - : Gibt die Sequenz von Pfadsegmenten zurück, die den Pfaddaten entspricht, und normalisiert optional die Werte und Segmenttypen.
- [`SVGPathElement.getPointAtLength()`](/de/docs/Web/API/SVGPathElement/getPointAtLength)
  - : Gibt den Punkt an einer gegebenen Distanz entlang des Pfades zurück.
- [`SVGPathElement.getTotalLength()`](/de/docs/Web/API/SVGPathElement/getTotalLength)
  - : Gibt den vom Benutzeragenten berechneten Wert für die Gesamtlänge des Pfades in Benutzereinheiten zurück.
- [`SVGPathElement.setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData)
  - : Setzt die Sequenz der Pfadsegmente als neue Pfaddaten.

### Veraltete Methoden

- [`SVGPathElement.getPathSegAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegAtLength) {{deprecated_inline}}
  - : Gibt eine nicht negative ganze Zahl zurück, die den Index innerhalb der [`pathSegList`](/de/docs/Web/API/SVGAnimatedPathData/pathSegList) darstellt, unter Verwendung des Distanz-entlang-eines-Pfades-Algorithmus des Benutzeragenten.
- [`SVGPathElement.createSVGPathSegClosePath()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegClosePath) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegClosePath`](/de/docs/Web/API/SVGPathSegClosePath) Objekt zurück.
- [`SVGPathElement.createSVGPathSegMovetoAbs()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegMovetoAbs) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegMovetoAbs`](/de/docs/Web/API/SVGPathSegMovetoAbs) Objekt zurück.
- [`SVGPathElement.createSVGPathSegMovetoRel()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegMovetoRel) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegMovetoRel`](/de/docs/Web/API/SVGPathSegMovetoRel) Objekt zurück.
- [`SVGPathElement.createSVGPathSegLinetoAbs()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegLinetoAbs) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegLinetoAbs`](/de/docs/Web/API/SVGPathSegLinetoAbs) Objekt zurück.
- [`SVGPathElement.createSVGPathSegLinetoRel()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegLinetoRel) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegLinetoRel`](/de/docs/Web/API/SVGPathSegLinetoRel) Objekt zurück.
- [`SVGPathElement.createSVGPathSegCurvetoCubicAbs()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegCurvetoCubicAbs) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegCurvetoCubicAbs`](/de/docs/Web/API/SVGPathSegCurvetoCubicAbs) Objekt zurück.
- [`SVGPathElement.createSVGPathSegCurvetoCubicRel()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegCurvetoCubicRel) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegCurvetoCubicRel`](/de/docs/Web/API/SVGPathSegCurvetoCubicRel) Objekt zurück.
- [`SVGPathElement.createSVGPathSegCurvetoQuadraticAbs()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegCurvetoQuadraticAbs) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegCurvetoQuadraticAbs`](/de/docs/Web/API/SVGPathSegCurvetoQuadraticAbs) Objekt zurück.
- [`SVGPathElement.createSVGPathSegCurvetoQuadraticRel()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegCurvetoQuadraticRel) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegCurvetoQuadraticRel`](/de/docs/Web/API/SVGPathSegCurvetoQuadraticRel) Objekt zurück.
- [`SVGPathElement.createSVGPathSegArcAbs()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegArcAbs) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegArcAbs`](/de/docs/Web/API/SVGPathSegArcAbs) Objekt zurück.
- [`SVGPathElement.createSVGPathSegArcRel()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegArcRel) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegArcRel`](/de/docs/Web/API/SVGPathSegArcRel) Objekt zurück.
- [`SVGPathElement.createSVGPathSegLinetoHorizontalAbs()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegLinetoHorizontalAbs) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegLinetoHorizontalAbs`](/de/docs/Web/API/SVGPathSegLinetoHorizontalAbs) Objekt zurück.
- [`SVGPathElement.createSVGPathSegLinetoHorizontalRel()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegLinetoHorizontalRel) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegLinetoHorizontalRel`](/de/docs/Web/API/SVGPathSegLinetoHorizontalRel) Objekt zurück.
- [`SVGPathElement.createSVGPathSegLinetoVerticalAbs()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegLinetoVerticalAbs) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegLinetoVerticalAbs`](/de/docs/Web/API/SVGPathSegLinetoVerticalAbs) Objekt zurück.
- [`SVGPathElement.createSVGPathSegLinetoVerticalRel()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegLinetoVerticalRel) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegLinetoVerticalRel`](/de/docs/Web/API/SVGPathSegLinetoVerticalRel) Objekt zurück.
- [`SVGPathElement.createSVGPathSegCurvetoCubicSmoothAbs()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegCurvetoCubicSmoothAbs) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegCurvetoCubicSmoothAbs`](/de/docs/Web/API/SVGPathSegCurvetoCubicSmoothAbs) Objekt zurück.
- [`SVGPathElement.createSVGPathSegCurvetoCubicSmoothRel()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegCurvetoCubicSmoothRel) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegCurvetoCubicSmoothRel`](/de/docs/Web/API/SVGPathSegCurvetoCubicSmoothRel) Objekt zurück.
- [`SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegCurvetoQuadraticSmoothAbs) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegCurvetoQuadraticSmoothAbs`](/de/docs/Web/API/SVGPathSegCurvetoQuadraticSmoothAbs) Objekt zurück.
- [`SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothRel()`](/de/docs/Web/API/SVGPathElement/createSVGPathSegCurvetoQuadraticSmoothRel) {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses [`SVGPathSegCurvetoQuadraticSmoothRel`](/de/docs/Web/API/SVGPathSegCurvetoQuadraticSmoothRel) Objekt zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("path")}} SVG-Element
