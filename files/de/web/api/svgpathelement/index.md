---
title: SVGPathElement
slug: Web/API/SVGPathElement
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die **`SVGPathElement`**-Schnittstelle entspricht dem {{SVGElement("path")}}-Element.

{{InheritanceDiagram}}

> [!NOTE]
> In SVG 2 wurden die Methoden `getPathSegAtLength()` und `createSVGPathSeg*` entfernt, und die Eigenschaft `pathLength` sowie die Methoden `getTotalLength()` und `getPointAtLength()` wurden in {{domxref("SVGGeometryElement")}} verschoben.

## Instanzeigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem übergeordneten Element, {{domxref("SVGGeometryElement")}}._

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrem übergeordneten Element, {{domxref("SVGGeometryElement")}}._

- {{domxref("SVGPathElement.getPathSegAtLength()")}} {{deprecated_inline}}
  - : Gibt einen nicht-signierten Long-Wert zurück, der den Index innerhalb der {{domxref("SVGAnimatedPathData.pathSegList", "pathSegList")}} repräsentiert und den Distanz-auf-einem-Pfad-Algorithmus des Benutzeragenten verwendet.
- {{domxref("SVGPathElement.createSVGPathSegClosePath()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegClosePath")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegMovetoAbs()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegMovetoAbs")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegMovetoRel()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegMovetoRel")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegLinetoAbs()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegLinetoAbs")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegLinetoRel()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegLinetoRel")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoCubicAbs()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegCurvetoCubicAbs")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoCubicRel()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegCurvetoCubicRel")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoQuadraticAbs()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegCurvetoQuadraticAbs")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoQuadraticRel()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegCurvetoQuadraticRel")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegArcAbs()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegArcAbs")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegArcRel()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegArcRel")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegLinetoHorizontalAbs()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegLinetoHorizontalAbs")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegLinetoHorizontalRel()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegLinetoHorizontalRel")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegLinetoVerticalAbs()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegLinetoVerticalAbs")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegLinetoVerticalRel()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegLinetoVerticalRel")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoCubicSmoothAbs()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegCurvetoCubicSmoothAbs")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoCubicSmoothRel()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegCurvetoCubicSmoothRel")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegCurvetoQuadraticSmoothAbs")}}-Objekt zurück.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothRel()")}} {{deprecated_inline}}
  - : Gibt ein eigenständiges, elternloses {{domxref("SVGPathSegCurvetoQuadraticSmoothRel")}}-Objekt zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("path")}} SVG-Element
