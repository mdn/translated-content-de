---
title: "WebGLRenderingContext: frontFace() Methode"
short-title: frontFace()
slug: Web/API/WebGLRenderingContext/frontFace
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.frontFace()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt fest, ob Polygone vorder- oder rückseitig sind, indem eine Wicklungsrichtung eingestellt wird.

## Syntax

```js-nolint
frontFace(mode)
```

### Parameter

- `mode`
  - : Ein [GLenum](/de/docs/Web/API/WebGL_API/Types) Typ Wicklungsrichtung.
    Der Standardwert ist `gl.CCW`. Mögliche Werte:
    - `gl.CW`: Im Uhrzeigersinn.
    - `gl.CCW`: Gegen den Uhrzeigersinn.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.frontFace(gl.CW);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace)
