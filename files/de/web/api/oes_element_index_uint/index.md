---
title: OES_element_index_uint Erweiterung
short-title: OES_element_index_uint
slug: Web/API/OES_element_index_uint
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebGL")}}

Die **`OES_element_index_uint`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und fügt Unterstützung für `gl.UNSIGNED_INT`-Typen zu {{domxref("WebGLRenderingContext.drawElements()")}} hinzu.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Für weitere Informationen sehen Sie auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar.

## Erweiterte Methoden

Diese Erweiterung erweitert {{domxref("WebGLRenderingContext.drawElements()")}}:

- Der `type`-Parameter akzeptiert nun `gl.UNSIGNED_INT`.

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
