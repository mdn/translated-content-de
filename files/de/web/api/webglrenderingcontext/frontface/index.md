---
title: "WebGLRenderingContext: frontFace() Methode"
short-title: frontFace()
slug: Web/API/WebGLRenderingContext/frontFace
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.frontFace()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt an, ob Polygone vorne oder hinten sind, indem eine Wicklungsorientierung festgelegt wird.

## Syntax

```js-nolint
frontFace(mode)
```

### Parameter

- `mode`

  - : Ein [GLenum](/de/docs/Web/API/WebGL_API/Types) Typ der Wicklungsorientierung.
    Der Standardwert ist `gl.CCW`. Mögliche Werte:

    - `gl.CW`: Uhrzeigersinn-Wicklung.
    - `gl.CCW`: Gegen den Uhrzeigersinn-Wicklung.

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
