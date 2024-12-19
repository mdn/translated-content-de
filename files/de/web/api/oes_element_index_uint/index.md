---
title: OES_element_index_uint Erweiterung
short-title: OES_element_index_uint
slug: Web/API/OES_element_index_uint
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebGL")}}

Die **`OES_element_index_uint`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und fügt Unterstützung für den `gl.UNSIGNED_INT` Typ in [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) hinzu.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext) Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig verfügbar.

## Erweiterte Methoden

Diese Erweiterung erweitert [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements):

- Der `type` Parameter akzeptiert nun `gl.UNSIGNED_INT`.

## Beispiele

```js
const ext = gl.getExtension("OES_element_index_uint");

gl.drawElements(gl.POINTS, 8, gl.UNSIGNED_INT, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
