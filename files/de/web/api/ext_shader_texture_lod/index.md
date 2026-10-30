---
title: EXT_shader_texture_lod-Erweiterung
short-title: EXT_shader_texture_lod
slug: Web/API/EXT_shader_texture_lod
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`EXT_shader_texture_lod`**-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und fügt der OpenGL ES Shading Language zusätzliche Texturfunktionen hinzu, mit denen Entwickler die LOD ([Detailstufe](https://en.wikipedia.org/wiki/Level_of_detail)) im Shader explizit steuern können.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist ihre Funktionalität standardmäßig im WebGL2-Kontext verfügbar. Dafür ist GLSL `#version 300 es` erforderlich.

## Integrierte GLSL-Funktionen

Die folgenden neuen Funktionen können in GLSL-Shader-Code verwendet werden, wenn diese Erweiterung aktiviert ist:

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

Aktivieren der Erweiterungen:

```js
gl.getExtension("EXT_shader_texture_lod");
```

Shader-Code, der Artefakte beim zyklischen Umbrechen von Texturkoordinaten vermeidet:

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
