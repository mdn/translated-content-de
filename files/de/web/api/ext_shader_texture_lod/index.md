---
title: EXT_shader_texture_lod Erweiterung
short-title: EXT_shader_texture_lod
slug: Web/API/EXT_shader_texture_lod
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_shader_texture_lod`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und fügt der OpenGL ES Shading Language zusätzliche Textur-Funktionen hinzu, die dem Shader-Autor eine explizite Kontrolle über das LOD ([Level of Detail](https://en.wikipedia.org/wiki/Level_of_detail)) bieten.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar. Sie erfordert GLSL `#version 300 es`.

## Eingebaute GLSL-Funktionen

Die folgenden neuen Funktionen können in GLSL-Shader-Code verwendet werden, wenn diese Erweiterung aktiviert ist:

```cpp
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

Shader-Code, der Artefakte vermeidet, wenn Texturkoordinaten umwickelt werden:

```html
<script type="x-shader/x-fragment">
  #extension GL_EXT_shader_texture_lod : enable
  #extension GL_OES_standard_derivatives : enable

  uniform sampler2D myTexture;
  varying vec2 texcoord;

  void main(){
    gl_FragColor = texture2DGradEXT(myTexture, mod(texcoord, vec2(0.1, 0.5)),
                                    dFdx(texcoord), dFdy(texcoord));
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
