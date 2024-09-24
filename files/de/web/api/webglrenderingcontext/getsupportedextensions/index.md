---
title: "WebGLRenderingContext: Methode getSupportedExtensions()"
short-title: getSupportedExtensions()
slug: Web/API/WebGLRenderingContext/getSupportedExtensions
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getSupportedExtensions()`**-Methode
gibt eine Liste aller unterstützten [WebGL](/de/docs/Web/API/WebGL_API)
Erweiterungen zurück.

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

Siehe auch die {{domxref("WebGLRenderingContext.getExtension()")}}-Methode, um ein
bestimmtes Erweiterungsobjekt zu erhalten.

## WebGL-Erweiterungen

Erweiterungen für die WebGL-API sind im [WebGL Extension Registry](https://registry.khronos.org/webgl/extensions/) registriert. Sie sind auch [hier](/de/docs/Web/API/WebGL_API#extensions) aufgelistet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
- [webglreport.com](https://webglreport.com/)
