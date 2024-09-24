---
title: EXT_frag_depth Erweiterung
short-title: EXT_frag_depth
slug: Web/API/EXT_frag_depth
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_frag_depth`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht es, einen Tiefenwert eines Fragments innerhalb des Fragment-Shader festzulegen.

WebGL-Erweiterungen sind mit der Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig verfügbar. Es erfordert GLSL `#version 300 es`.

## Beispiele

Aktivieren Sie die Erweiterung:

```js
gl.getExtension("EXT_frag_depth");
```

Nun ist die Ausgabeveriable `gl_FragDepthEXT` verfügbar, um einen Tiefenwert eines Fragments innerhalb des Fragment-Shader festzulegen:

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
