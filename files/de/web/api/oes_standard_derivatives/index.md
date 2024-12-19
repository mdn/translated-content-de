---
title: OES_standard_derivatives-Erweiterung
short-title: OES_standard_derivatives
slug: Web/API/OES_standard_derivatives
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("WebGL")}}

Die **`OES_standard_derivatives`**-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und fügt die GLSL-Ableitungsfunktionen `dFdx`, `dFdy` und `fwidth` hinzu.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie auch unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig verfügbar. In WebGL 2 ist die Konstante als `gl.FRAGMENT_SHADER_DERIVATIVE_HINT` verfügbar, und sie erfordert GLSL `#version 300 es`.

## Konstanten

Diese Erweiterung stellt eine neue Konstante bereit, die in den Methoden [`hint()`](/de/docs/Web/API/WebGLRenderingContext/hint) und [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) verwendet werden kann.

- `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Genauigkeit der Ableitungsberechnung für die eingebauten GLSL-Funktionen `dFdx`, `dFdy` und `fwidth` angibt.

## Eingebaute GLSL-Funktionen

Die folgenden neuen Funktionen können im GLSL-Shadercode verwendet werden, wenn diese Erweiterung aktiviert ist:

```cpp
genType dFdx(genType p)
genType dFdy(genType p)
genType fwidth(genType p)
```

- `dFdx()`
  - : Gibt die Ableitung in `x` zurück, wobei lokale Differenzierung für das Eingabeargument `p` verwendet wird.
- `dFdy()`
  - : Gibt die Ableitung in `y` zurück, wobei lokale Differenzierung für das Eingabeargument `p` verwendet wird.
- `fwidth()`
  - : Gibt die Summe der absoluten Ableitung in `x` und `y` zurück, wobei lokale Differenzierung für das Eingabeargument `p` verwendet wird. Das heißt, `abs(dFdx(p)) + abs(dFdy(p))`.

`dFdx()` und `dFdy()` werden häufig verwendet, um die Filterbreite abzuschätzen, die zur Kantenglättung prozeduraler Texturen genutzt wird.

## Beispiele

Aktivieren der Erweiterungen:

```js
gl.getExtension("OES_standard_derivatives");
gl.getExtension("EXT_shader_texture_lod");
```

Shader-Code, der Artefakte vermeidet, wenn Texturkoordinaten umgebrochen werden:

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
- [`EXT_shader_texture_lod`](/de/docs/Web/API/EXT_shader_texture_lod)
