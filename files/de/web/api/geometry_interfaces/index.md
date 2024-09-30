---
title: Geometry interfaces
slug: Web/API/Geometry_interfaces
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{DefaultAPISidebar("Geometry Interfaces")}}

**Geometrie-Interfaces** ist ein CSS-Modul, das Schnittstellen für die Arbeit mit 3D- und 2D-Grafiken bietet – insbesondere für die Arbeit mit Punkten, Rechtecken, Vierecken und [Transformationsmatrizen](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#transformation_matrices) (für Operationen, die Grafiken verschieben/bewegen, skalieren, drehen, verzerren/scheren/neigen und umkehren, sowie zum Multiplizieren/Verketten und zum Invertieren/Rückgängigmachen dieser Operationen).

Als Webentwickler verwenden Sie die Geometrie-Interfaces nicht immer direkt, sondern nutzen andere Funktionen, die im Hintergrund auf ihnen basieren: Teile von [CSS Transforms](/de/docs/Web/CSS/CSS_transforms), die [Canvas API](/de/docs/Web/API/Canvas_API), die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) und (direkter) [`VideoFrame.visibleRect`](/de/docs/Web/API/VideoFrame/visibleRect), [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) und [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Schnittstellen

- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
  - : Repräsentiert eine [Transformationsmatrix](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#transformation_matrices) für Operationen, die Grafiken verschieben/bewegen, skalieren, drehen, verzerren/scheren/neigen und umkehren, sowie zum Multiplizieren/Verketten und zum Invertieren/Rückgängigmachen dieser Operationen.
- [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)
  - : Schreibgeschützte Version von [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).
- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
  - : Repräsentiert einen 2D- oder 3D-Punkt in einem Koordinatensystem; es enthält Werte für die Koordinaten in bis zu drei Dimensionen sowie einen optionalen Perspektivenwert.
- [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)
  - : Schreibgeschützte Version von [`DOMPoint`](/de/docs/Web/API/DOMPoint).
- [`DOMQuad`](/de/docs/Web/API/DOMQuad)
  - : Repräsentiert eine Sammlung von vier [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekten, die die Ecken eines [Vierecks](https://en.wikipedia.org/wiki/Quadrilateral) definieren.
- [`DOMRect`](/de/docs/Web/API/DOMRect)
  - : Repräsentiert die Größe und Position eines Rechtecks.
- [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)
  - : Schreibgeschützte Version von [`DOMRect`](/de/docs/Web/API/DOMRect).

## Beispiele

Die Artikel [`Path2D.addPath()`](/de/docs/Web/API/Path2D/addPath) und [`CanvasPattern.setTransform()`](/de/docs/Web/API/CanvasPattern/setTransform) enthalten Beispiele, die einige der Geometrie-Interfaces verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Path2D.addPath()`](/de/docs/Web/API/Path2D/addPath)
- [`CanvasPattern.setTransform()`](/de/docs/Web/API/CanvasPattern/setTransform)
- [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform)
- [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
- [`CSSTransformValue.toMatrix()`](/de/docs/Web/API/CSSTransformValue/toMatrix)
- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
- [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects)
- [`VideoFrame.visibleRect`](/de/docs/Web/API/VideoFrame/visibleRect)
- [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)
- [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)
