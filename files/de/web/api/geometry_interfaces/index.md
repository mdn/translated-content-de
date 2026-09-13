---
title: Geometry interfaces
slug: Web/API/Geometry_interfaces
l10n:
  sourceCommit: e8979460dbee67d29e4fc12edb431b1ad7b9d1e5
---

{{DefaultAPISidebar("Geometry Interfaces")}}

**Geometrieschnittstellen** sind ein CSS-Modul, das Schnittstellen für die Arbeit mit 3D- und 2D-Grafiken bereitstellt — insbesondere für die Arbeit mit Punkten, Rechtecken, Vierecken und [Transformationsmatrizen](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#transformation_matrices) (für Operationen zum Verschieben, Skalieren, Drehen, Scheren/Neigen und Spiegeln von Grafiken sowie zum Multiplizieren/Verketten und Invertieren/Rückgängigmachen dieser Operationen).

Als Webentwickler verwenden Sie die Geometrieschnittstellen nicht immer direkt, sondern stattdessen andere Funktionen, die sie im Hintergrund verwenden: Teile von [CSS Transforms](/de/docs/Web/CSS/Guides/Transforms), die [Canvas API](/de/docs/Web/API/Canvas_API), die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) und (direkter) [`VideoFrame.visibleRect`](/de/docs/Web/API/VideoFrame/visibleRect), [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) und [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

> [!NOTE]
> Die Geometrieschnittstellen sind für andere Web-APIs wie die oben aufgeführten vorgesehen und nicht als allgemeine Bibliothek für lineare Algebra. Die Transformationsmethoden, wie etwa [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint), dienen der Bequemlichkeit und können aufgrund internen Overheads deutlich langsamer sein als entsprechendes handgeschriebenes JavaScript. Erstellen Sie für rechenintensiven Code Profile verschiedener Ansätze und erwägen Sie, einfache JavaScript-Objekte oder Arrays für Zwischenberechnungen zu verwenden.

## Schnittstellen

- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
  - : Repräsentiert eine [Transformationsmatrix](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#transformation_matrices) für Operationen zum Verschieben, Skalieren, Drehen, Scheren/Neigen und Spiegeln von Grafiken sowie zum Multiplizieren/Verketten und Invertieren/Rückgängigmachen dieser Operationen.
- [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)
  - : Schreibgeschützte Version von [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).
- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
  - : Repräsentiert einen 2D- oder 3D-Punkt in einem Koordinatensystem; er enthält Werte für die Koordinaten in bis zu drei Dimensionen sowie einen optionalen Perspektivwert.
- [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)
  - : Schreibgeschützte Version von [`DOMPoint`](/de/docs/Web/API/DOMPoint).
- [`DOMQuad`](/de/docs/Web/API/DOMQuad)
  - : Repräsentiert eine Sammlung von vier [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekten, die die Ecken eines [Vierecks](https://en.wikipedia.org/wiki/Quadrilateral) definieren.
- [`DOMRect`](/de/docs/Web/API/DOMRect)
  - : Repräsentiert die Größe und Position eines Rechtecks.
- [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)
  - : Schreibgeschützte Version von [`DOMRect`](/de/docs/Web/API/DOMRect).

## Beispiele

Die Artikel zu [`Path2D.addPath()`](/de/docs/Web/API/Path2D/addPath) und [`CanvasPattern.setTransform()`](/de/docs/Web/API/CanvasPattern/setTransform) enthalten Beispiele, die einige der Geometrieschnittstellen verwenden.

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
