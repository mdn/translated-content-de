---
title: EXT_blend_minmax-Erweiterung
short-title: EXT_blend_minmax
slug: Web/API/EXT_blend_minmax
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`EXT_blend_minmax`**-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und erweitert die Möglichkeiten der Farbmischung um zwei neue Blend-Gleichungen: Sie verwenden jeweils die minimalen oder maximalen Farbkomponenten der Quell- und Zielfarben.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) steht die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig zur Verfügung. Die Konstanten in WebGL2 heißen `gl.MIN` und `gl.MAX`.

## Konstanten

Diese Erweiterung fügt zwei neue Konstanten hinzu, die in [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation) und [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) verwendet werden können:

- `ext.MIN_EXT`
  - : Erzeugt die minimalen Farbkomponenten der Quell- und Zielfarben.
- `ext.MAX_EXT`
  - : Erzeugt die maximalen Farbkomponenten der Quell- und Zielfarben.

## Beispiele

```js
const ext = gl.getExtension("EXT_blend_minmax");

gl.blendEquation(ext.MIN_EXT);
gl.blendEquation(ext.MAX_EXT);

gl.blendEquationSeparate(ext.MIN_EXT, ext.MAX_EXT);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation)
- [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate)
