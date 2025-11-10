---
title: EXT_shader_texture_lod-Erweiterung
short-title: EXT_shader_texture_lod
slug: Web/API/EXT_shader_texture_lod
l10n:
  sourceCommit: 469f97048247e0d738897cae20c695da6f1f738d
---

{{APIRef("WebGL")}}

Die **`EXT_shader_texture_lod`**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und fügt der OpenGL ES Shading Language zusätzliche Texturfunktionen hinzu, die dem Shader-Entwickler explizite Kontrolle über den LOD ([Level of detail](https://en.wikipedia.org/wiki/Level_of_detail)) geben.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar. Es erfordert GLSL `#version 300 es`.

## Eingebaute GLSL-Funktionen

Die folgenden neuen Funktionen können im GLSL-Shader-Code verwendet werden, wenn diese Erweiterung aktiviert ist:

```c
vec4 texture2DLodEXT(sampler2D sampler, vec2 coord, float lod)
vec4 texture2DProjLodEXT(sampler2D sampler, vec3 coord, float lod)
vec4 texture2DProjLodEXT(sampler2D sampler, vec4 coord, float lod)
vec4 textureCubeLodEXT(samplerCube sampler, vec3 coord, float lod)
vec4 texture2DGradEXT(sampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy)
vec4 texture2DProjGradEXT(sampler2D sampler, vec3 P, vec2 dPdx, vec2 dPdy)
vec4 texture2DProjGradEXT(sampler2D sampler, vec4 P, vec2 dPdx, vec2 dPdy)
vec4 textureCubeGradEXT(samplerCube sampler, vec3 P, vec3 dPdx, vec3 dPdy)
```

## Beispiele

Aktivierung der Erweiterungen:

```js
gl.getExtension("EXT_shader_texture_lod");
```

Shader-Code, der Artefakte beim Umwickeln von Texturkoordinaten vermeidet:

```html
<script type="x-shader/x-fragment">
  #extension GL_EXT_shader_texture_lod : enable
  #extension GL_OES_standard_derivatives : enable

  uniform sampler2D myTexture;
  varying vec2 texCoord;

  void main(){
    gl_FragColor = texture2DGradEXT(myTexture, mod(texCoord, vec2(0.1, 0.5)),
                                    dFdx(texCoord), dFdy(texCoord));
  }
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`OES_standard_derivatives`](/de/docs/Web/API/OES_standard_derivatives)
