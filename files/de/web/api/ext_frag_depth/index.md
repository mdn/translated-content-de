---
title: EXT_frag_depth-Erweiterung
short-title: EXT_frag_depth
slug: Web/API/EXT_frag_depth
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`EXT_frag_depth`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, einen Tiefenwert für ein Fragment innerhalb des Fragment-Shaders festzulegen.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur in [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexten verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) steht die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig zur Verfügung. Sie erfordert GLSL `#version 300 es`.

## Beispiele

Aktivieren Sie die Erweiterung:

```js
gl.getExtension("EXT_frag_depth");
```

Nun können Sie mit der Ausgabevariablen `gl_FragDepthEXT` einen Tiefenwert für ein Fragment innerhalb des Fragment-Shaders festlegen:

```html
<script type="x-shader/x-fragment">
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    gl_FragDepthEXT = 0.5;
  }
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
