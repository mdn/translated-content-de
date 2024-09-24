---
title: WebGLSync
slug: Web/API/WebGLSync
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{APIRef("WebGL")}}

Die **`WebGLSync`**-Schnittstelle ist Teil der [WebGL 2](/de/docs/Web/API/WebGL_API) API und wird verwendet, um Aktivitäten zwischen der GPU und der Anwendung zu synchronisieren.

{{InheritanceDiagram}}

Beim Arbeiten mit `WebGLSync`-Objekten sind die folgenden Methoden des {{domxref("WebGL2RenderingContext")}} nützlich:

- {{domxref("WebGL2RenderingContext.fenceSync()")}}
- {{domxref("WebGL2RenderingContext.deleteSync()")}}
- {{domxref("WebGL2RenderingContext.isSync()")}}
- {{domxref("WebGL2RenderingContext.clientWaitSync()")}}
- {{domxref("WebGL2RenderingContext.waitSync()")}}
- {{domxref("WebGL2RenderingContext.getSyncParameter()")}}

## Beispiele

### Erstellen eines `WebGLSync`-Objekts

In diesem Beispiel muss `gl` ein {{domxref("WebGL2RenderingContext")}} sein. `WebGLSync`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.finish()")}}
