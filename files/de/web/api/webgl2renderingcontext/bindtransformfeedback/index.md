---
title: "WebGL2RenderingContext: bindTransformFeedback() Methode"
short-title: bindTransformFeedback()
slug: Web/API/WebGL2RenderingContext/bindTransformFeedback
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.bindTransformFeedback()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet ein
übergebenes [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt an den aktuellen GL-Zustand.

## Syntax

```js-nolint
bindTransformFeedback(target, transformFeedback)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel (Bindepunkt) angibt. Muss
    `gl.TRANSFORM_FEEDBACK` sein.
- `transformFeedback`
  - : Ein [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt, das gebunden werden soll.

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
