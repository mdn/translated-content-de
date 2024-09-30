---
title: WebGLTransformFeedback
slug: Web/API/WebGLTransformFeedback
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Das **`WebGLTransformFeedback`**-Interface ist Teil der [WebGL 2](/de/docs/Web/API/WebGL_API) API und ermöglicht Transformations-Feedback, welches der Prozess ist, Primitive zu erfassen, die durch die Vertex-Verarbeitung erzeugt werden. Es erlaubt, den Post-Transformations-Rendering-Zustand eines Objekts zu bewahren und diese Daten mehrmals erneut einzureichen.

{{InheritanceDiagram}}

Beim Arbeiten mit `WebGLTransformFeedback`-Objekten sind die folgenden Methoden des [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) nützlich:

- [`WebGL2RenderingContext.createTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/createTransformFeedback)
- [`WebGL2RenderingContext.deleteTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/deleteTransformFeedback)
- [`WebGL2RenderingContext.isTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/isTransformFeedback)
- [`WebGL2RenderingContext.bindTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/bindTransformFeedback)
- [`WebGL2RenderingContext.beginTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/beginTransformFeedback)
- [`WebGL2RenderingContext.endTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/endTransformFeedback)
- [`WebGL2RenderingContext.pauseTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/pauseTransformFeedback)
- [`WebGL2RenderingContext.resumeTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/resumeTransformFeedback)
- [`WebGL2RenderingContext.transformFeedbackVaryings()`](/de/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings)
- [`WebGL2RenderingContext.getTransformFeedbackVarying()`](/de/docs/Web/API/WebGL2RenderingContext/getTransformFeedbackVarying)

## Beispiele

### Erstellen eines `WebGLTransformFeedback`-Objekts

In diesem Beispiel muss `gl` ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLTransformFeedback`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const transformFeedback = gl.createTransformFeedback();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
