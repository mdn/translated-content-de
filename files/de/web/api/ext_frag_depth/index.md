---
title: EXT_frag_depth Erweiterung
short-title: EXT_frag_depth
slug: Web/API/EXT_frag_depth
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("WebGL")}}

Die **`EXT_frag_depth`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, einen Tiefenwert eines Fragments innerhalb des Fragment-Shader festzulegen.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Using Extensions](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext) Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig verfügbar. Es erfordert GLSL `#version 300 es`.

## Beispiele

Aktivieren der Erweiterung:

```js
gl.getExtension("EXT_frag_depth");
```

Nun steht die Ausgabenvariable `gl_FragDepthEXT` zur Verfügung, um einen Tiefenwert eines Fragments innerhalb des Fragment-Shader festzulegen:

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
