---
title: "XRWebGLBinding: XRWebGLBinding() Konstruktor"
short-title: XRWebGLBinding()
slug: Web/API/XRWebGLBinding/XRWebGLBinding
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Der **`XRWebGLBinding()`** Konstruktor erstellt und
gibt ein neues {{domxref("XRWebGLBinding")}} Objekt zurück.

## Syntax

```js-nolint
new XRWebGLBinding(session, context)
```

### Parameter

- `session`
  - : Ein {{domxref("XRSession")}} Objekt, das die WebXR-Sitzung angibt, die mit dem WebGL-Kontext gerendert wird.
- `context`
  - : Ein {{domxref("WebGLRenderingContext")}} oder {{domxref("WebGL2RenderingContext")}}, das den WebGL-Zeichenkontext identifiziert, der zum Rendern der Szene für die angegebene WebXR-Sitzung verwendet werden soll.

### Rückgabewert

Ein neues {{domxref("XRWebGLBinding")}}.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das neue `XRWebGLBinding` aufgrund einer der folgenden Situationen nicht erstellt werden konnte:
    - Die durch `session` angegebene {{domxref("XRSession")}} wurde bereits beendet.
    - Der angegebene WebGL-Kontext, `context`, [wurde verloren](/de/docs/Web/API/WebGLRenderingContext/isContextLost#usage_notes) aus irgendeinem Grund, wie z.B. einem GPU-Wechsel oder -Reset.
    - Die angegebene `session` ist immersiv, aber der `context` ist
      nicht WebXR-kompatibel.

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

- {{domxref("WebGLRenderingContext.makeXRCompatible()")}}
