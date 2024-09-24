---
title: Geometrie-Schnittstellen
slug: Web/API/Geometry_interfaces
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{DefaultAPISidebar("Geometry Interfaces")}}

**Geometrie-Schnittstellen** ist ein CSS-Modul, das Schnittstellen für die Arbeit mit 3D- und 2D-Grafiken bereitstellt — insbesondere für die Arbeit mit Punkten, Rechtecken, Vierecken und [Transformationsmatrizen](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#transformation_matrices) (für Operationen, die Grafiken übersetzen/bewegen, skalieren, drehen, schrägstellen/scherfen/neigen und spiegeln, sowie für das Multiplizieren/Verketten und das Invertieren/Rückgängig machen dieser Operationen).

Als Webentwickler nutzen Sie die Geometrie-Schnittstellen nicht immer direkt, sondern verwenden andere Funktionen, die im Hintergrund auf sie zurückgreifen: Teile von [CSS Transforms](/de/docs/Web/CSS/CSS_transforms), die [Canvas API](/de/docs/Web/API/Canvas_API), die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) und (direkter) {{domxref('VideoFrame.visibleRect')}}, {{domxref('Element.getClientRects()')}} und {{domxref('Element.getBoundingClientRect()')}}.

## Schnittstellen

- {{domxref('DOMMatrix')}}
  - : Repräsentiert eine [Transformationsmatrix](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#transformation_matrices), für Operationen, die Grafiken übersetzen/bewegen, skalieren, drehen, schrägstellen/scherfen/neigen und spiegeln, sowie für das Multiplizieren/Verketten und das Invertieren/Rückgängig machen dieser Operationen.
- {{domxref('DOMMatrixReadOnly')}}
  - : Schreibgeschützte Version von {{domxref('DOMMatrix')}}.
- {{domxref('DOMPoint')}}
  - : Repräsentiert einen 2D- oder 3D-Punkt in einem Koordinatensystem; es enthält Werte für die Koordinaten in bis zu drei Dimensionen sowie einen optionalen Perspektivwert.
- {{domxref('DOMPointReadOnly')}}
  - : Schreibgeschützte Version von {{domxref('DOMPoint')}}.
- {{domxref('DOMQuad')}}
  - : Repräsentiert eine Sammlung von vier {{domxref('DOMPoint')}} Objekten, die die Ecken eines [Vierecks](https://en.wikipedia.org/wiki/Quadrilateral) definieren.
- {{domxref('DOMRect')}}
  - : Repräsentiert die Größe und Position eines Rechtecks.
- {{domxref('DOMRectReadOnly')}}
  - : Schreibgeschützte Version von {{domxref('DOMRect')}}.

## Beispiele

Die Artikel {{domxref('Path2D.addPath()')}} und {{domxref('CanvasPattern.setTransform()')}} enthalten Beispiele, die einige der Geometrie-Schnittstellen verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref('Path2D.addPath()')}}
- {{domxref('CanvasPattern.setTransform()')}}
- {{domxref('CanvasRenderingContext2D.getTransform()')}}
- {{domxref('CanvasRenderingContext2D.setTransform()')}}
- {{domxref('CSSTransformValue.toMatrix()')}}
- {{domxref('CSSTransformComponent.toMatrix()')}}
- {{domxref('Element.getBoundingClientRect()')}}
- {{domxref('Element.getClientRects()')}}
- {{domxref('VideoFrame.visibleRect')}}
- {{domxref('XRLightEstimate')}}
- {{domxref('XRRigidTransform')}}
