---
title: "XRWebGLBinding: XRWebGLBinding() Konstruktor"
short-title: XRWebGLBinding()
slug: Web/API/XRWebGLBinding/XRWebGLBinding
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Der **`XRWebGLBinding()`** Konstruktor erstellt und
gibt ein neues [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding)-Objekt zurück.

## Syntax

```js-nolint
new XRWebGLBinding(session, context)
```

### Parameter

- `session`
  - : Ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt, das die WebXR-Sitzung spezifiziert, die unter Verwendung des WebGL-Kontexts gerendert wird.
- `context`
  - : Ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) oder [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext), der den WebGL-Zeichnungskontext identifiziert, der zum Rendern der Szene für die angegebene WebXR-Sitzung verwendet wird.

### Rückgabewert

Ein neues [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das neue `XRWebGLBinding` aufgrund einer der folgenden Situationen nicht erstellt werden konnte:
    - Die durch `session` angegebene [`XRSession`](/de/docs/Web/API/XRSession) wurde bereits gestoppt.
    - Der angegebene WebGL-Kontext, `context`, [ist verloren gegangen](/de/docs/Web/API/WebGLRenderingContext/isContextLost#usage_notes), etwa durch einen GPU-Wechsel oder -Reset.
    - Die angegebene `session` ist immersiv, aber der `context` ist nicht WebXR-kompatibel.

## Beispiele

```js
const canvasElement = document.querySelector(".output-canvas");
const gl = canvasElement.getContext("webgl");
const xrSession = await navigator.xr.requestSession("immersive-vr");
await gl.makeXRCompatible();

const glBinding = new XRWebGLBinding(xrSession, gl);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible)
