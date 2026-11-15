---
title: "WebGL2RenderingContext: Methode bindTransformFeedback()"
short-title: bindTransformFeedback()
slug: Web/API/WebGL2RenderingContext/bindTransformFeedback
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.bindTransformFeedback()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet ein übergebenes [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt an den aktuellen GL-Zustand.

## Syntax

```js-nolint
bindTransformFeedback(target, transformFeedback)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel (den Bindungspunkt) angibt. Muss `gl.TRANSFORM_FEEDBACK` sein.
- `transformFeedback`
  - : Ein [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt, das gebunden werden soll, oder `null`, um das standardmäßige Transform-Feedback-Objekt zu binden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const transformFeedback = gl.createTransformFeedback();
gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)
