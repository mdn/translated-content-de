---
title: "WebGLRenderingContext: getSupportedExtensions()-Methode"
short-title: getSupportedExtensions()
slug: Web/API/WebGLRenderingContext/getSupportedExtensions
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getSupportedExtensions()`**-Methode gibt eine Liste aller unterstützten [WebGL](/de/docs/Web/API/WebGL_API)-Erweiterungen zurück.

## Syntax

```js-nolint
getSupportedExtensions()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von Zeichenfolgen mit allen unterstützten WebGL-Erweiterungen.

## Beispiele

```js
const canvas = document.getElementById("canvas");
gl = canvas.getContext("webgl");

const extensions = gl.getSupportedExtensions();
// Array [ 'ANGLE_instanced_arrays', 'EXT_blend_minmax', … ]
```

Siehe auch die [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)-Methode, um ein spezifisches Erweiterungsobjekt zu erhalten.

## WebGL-Erweiterungen

Erweiterungen für die WebGL-API sind im [WebGL Extension Registry](https://registry.khronos.org/webgl/extensions/) registriert. Sie sind auch in unserer [WebGL API Referenz](/de/docs/Web/API/WebGL_API#extensions) aufgeführt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [webglreport.com](https://webglreport.com/)
