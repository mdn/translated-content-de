---
title: EXT_blend_minmax-Erweiterung
short-title: EXT_blend_minmax
slug: Web/API/EXT_blend_minmax
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_blend_minmax`**-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und erweitert die Blending-Fähigkeiten durch Hinzufügen von zwei neuen Blend-Gleichungen: die minimalen oder maximalen Farbkomponenten der Quell- und Ziel-Farben.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Für weitere Informationen siehe auch [Verwenden von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}-Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig verfügbar. Die Konstanten in WebGL2 sind `gl.MIN` und `gl.MAX`.

## Konstanten

Diese Erweiterung fügt zwei neue Konstanten hinzu, die in {{domxref("WebGLRenderingContext.blendEquation()")}} und {{domxref("WebGLRenderingContext.blendEquationSeparate()")}} verwendet werden können:

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.blendEquation()")}}
- {{domxref("WebGLRenderingContext.blendEquationSeparate()")}}
