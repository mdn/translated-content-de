---
title: EXT_blend_minmax Erweiterung
short-title: EXT_blend_minmax
slug: Web/API/EXT_blend_minmax
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_blend_minmax`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und erweitert die Mischfähigkeiten, indem sie zwei neue Mischgleichungen hinzufügt: die minimalen oder maximalen Farbkomponenten der Quell- und Zielfarben.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}-Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar. Die Konstanten in WebGL2 sind `gl.MIN` und `gl.MAX`.

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
