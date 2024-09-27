---
title: WebGLSync
slug: Web/API/WebGLSync
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{APIRef("WebGL")}}

Die **`WebGLSync`**-Schnittstelle ist Teil der [WebGL 2](/de/docs/Web/API/WebGL_API) API und wird verwendet, um Aktivitäten zwischen der GPU und der Anwendung zu synchronisieren.

{{InheritanceDiagram}}

Bei der Arbeit mit `WebGLSync`-Objekten sind die folgenden Methoden des [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) nützlich:

- [`WebGL2RenderingContext.fenceSync()`](/de/docs/Web/API/WebGL2RenderingContext/fenceSync)
- [`WebGL2RenderingContext.deleteSync()`](/de/docs/Web/API/WebGL2RenderingContext/deleteSync)
- [`WebGL2RenderingContext.isSync()`](/de/docs/Web/API/WebGL2RenderingContext/isSync)
- [`WebGL2RenderingContext.clientWaitSync()`](/de/docs/Web/API/WebGL2RenderingContext/clientWaitSync)
- [`WebGL2RenderingContext.waitSync()`](/de/docs/Web/API/WebGL2RenderingContext/waitSync)
- [`WebGL2RenderingContext.getSyncParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getSyncParameter)

## Beispiele

### Erstellen eines `WebGLSync`-Objekts

In diesem Beispiel muss `gl` ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLSync`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.finish()`](/de/docs/Web/API/WebGLRenderingContext/finish)
