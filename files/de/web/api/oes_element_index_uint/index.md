---
title: OES_element_index_uint-Erweiterung
short-title: OES_element_index_uint
slug: Web/API/OES_element_index_uint
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`OES_element_index_uint`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht die Verwendung von `gl.UNSIGNED_INT` als Typ in [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements).

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist ihre Funktionalität standardmäßig im WebGL2-Kontext verfügbar.

## Erweiterte Methoden

Diese Erweiterung erweitert [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements):

- Der Parameter `type` akzeptiert nun auch `gl.UNSIGNED_INT`.

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
