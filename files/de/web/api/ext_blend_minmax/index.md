---
title: EXT_blend_minmax Erweiterung
short-title: EXT_blend_minmax
slug: Web/API/EXT_blend_minmax
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_blend_minmax`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und erweitert die Blendfunktionen, indem sie zwei neue Blendgleichungen hinzufügt: die minimalen oder maximalen Farbkomponenten der Quell- und Ziel-Farben.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext) Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig verfügbar. Die Konstanten in WebGL2 sind `gl.MIN` und `gl.MAX`.

## Konstanten

Diese Erweiterung fügt zwei neue Konstanten hinzu, die in [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation) und [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) verwendet werden können:

- `ext.MIN_EXT`
  - : Erzeugt die minimalen Farbkomponenten der Quell- und Ziel-Farben.
- `ext.MAX_EXT`
  - : Erzeugt die maximalen Farbkomponenten der Quell- und Ziel-Farben.

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
