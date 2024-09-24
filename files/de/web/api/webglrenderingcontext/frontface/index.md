---
title: "WebGLRenderingContext: frontFace() Methode"
short-title: frontFace()
slug: Web/API/WebGLRenderingContext/frontFace
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.frontFace()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt fest, ob Polygone vorder- oder rückseitig sind, indem sie eine Windungsrichtung bestimmt.

## Syntax

```js-nolint
frontFace(mode)
```

### Parameter

- `mode`

  - : Ein [GLenum](/de/docs/Web/API/WebGL_API/Types) Typ für die Windungsrichtung.
    Der Standardwert ist `gl.CCW`. Mögliche Werte:

    - `gl.CW`: Uhrzeigersinn-Windung.
    - `gl.CCW`: Gegen den Uhrzeigersinn-Windung.

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

- {{domxref("WebGLRenderingContext.cullFace()")}}
