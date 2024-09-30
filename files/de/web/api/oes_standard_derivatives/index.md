---
title: OES_standard_derivatives Erweiterung
short-title: OES_standard_derivatives
slug: Web/API/OES_standard_derivatives
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebGL")}}

Die **`OES_standard_derivatives`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und fügt die GLSL-Ableitungsfunktionen `dFdx`, `dFdy` und `fwidth` hinzu.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig verfügbar. In WebGL 2 ist die Konstante als `gl.FRAGMENT_SHADER_DERIVATIVE_HINT` verfügbar und erfordert GLSL `#version 300 es`.

## Konstanten

Diese Erweiterung stellt eine neue Konstante bereit, die in den Methoden [`hint()`](/de/docs/Web/API/WebGLRenderingContext/hint) und [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) verwendet werden kann.

- `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Genauigkeit der Ableitungsberechnung für die GLSL-eingebauten Funktionen `dFdx`, `dFdy` und `fwidth` angibt.

## Eingebaute GLSL-Funktionen

Die folgenden neuen Funktionen können im GLSL-Shader-Code verwendet werden, wenn diese Erweiterung aktiviert ist:

```cpp
genType dFdx(genType)
genType dFdy(genType)
genType fwidth(genType)
```

## Beispiele

Aktivierung der Erweiterungen:

```js
gl.getExtension("OES_standard_derivatives");
gl.getExtension("EXT_shader_texture_lod");
```

Shader-Code, der Artefakte beim Umwickeln von Texturkoordinaten vermeidet:

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
- [`EXT_shader_texture_lod`](/de/docs/Web/API/EXT_shader_texture_lod)
