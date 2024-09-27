---
title: WebGLTransformFeedback
slug: Web/API/WebGLTransformFeedback
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{APIRef("WebGL")}}

Die **`WebGLTransformFeedback`**-Schnittstelle ist Teil der [WebGL 2](/de/docs/Web/API/WebGL_API) API und ermöglicht das Transform-Feedback, den Prozess der Erfassung von Primitiven, die durch die Vertex-Verarbeitung erzeugt werden. Sie erlaubt es, den Nach-Transformations-Renderzustand eines Objekts zu bewahren und diese Daten mehrfach erneut einzureichen.

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
