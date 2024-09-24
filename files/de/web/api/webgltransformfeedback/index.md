---
title: WebGLTransformFeedback
slug: Web/API/WebGLTransformFeedback
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{APIRef("WebGL")}}

Das **`WebGLTransformFeedback`**-Interface gehört zur [WebGL 2](/de/docs/Web/API/WebGL_API) API und ermöglicht das Transform-Feedback, den Prozess der Erfassung von Primitiven, die durch die Vertex-Verarbeitung erzeugt werden. Es erlaubt, den Nach-Transformations-Rendering-Zustand eines Objekts zu bewahren und diese Daten mehrfach erneut einzureichen.

{{InheritanceDiagram}}

Beim Arbeiten mit `WebGLTransformFeedback`-Objekten sind die folgenden Methoden des {{domxref("WebGL2RenderingContext")}} nützlich:

- {{domxref("WebGL2RenderingContext.createTransformFeedback()")}}
- {{domxref("WebGL2RenderingContext.deleteTransformFeedback()")}}
- {{domxref("WebGL2RenderingContext.isTransformFeedback()")}}
- {{domxref("WebGL2RenderingContext.bindTransformFeedback()")}}
- {{domxref("WebGL2RenderingContext.beginTransformFeedback()")}}
- {{domxref("WebGL2RenderingContext.endTransformFeedback()")}}
- {{domxref("WebGL2RenderingContext.pauseTransformFeedback()")}}
- {{domxref("WebGL2RenderingContext.resumeTransformFeedback()")}}
- {{domxref("WebGL2RenderingContext.transformFeedbackVaryings()")}}
- {{domxref("WebGL2RenderingContext.getTransformFeedbackVarying()")}}

## Beispiele

### Erstellen eines `WebGLTransformFeedback`-Objekts

In diesem Beispiel muss `gl` ein {{domxref("WebGL2RenderingContext")}} sein. `WebGLTransformFeedback`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const transformFeedback = gl.createTransformFeedback();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
