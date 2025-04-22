---
title: OES_standard_derivatives-Erweiterung
short-title: OES_standard_derivatives
slug: Web/API/OES_standard_derivatives
l10n:
  sourceCommit: 469f97048247e0d738897cae20c695da6f1f738d
---

{{APIRef("WebGL")}}

Die **`OES_standard_derivatives`**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und fügt die GLSL-Derivatfunktionen `dFdx`, `dFdy` und `fwidth` hinzu.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar. In WebGL 2 ist die Konstante als `gl.FRAGMENT_SHADER_DERIVATIVE_HINT` verfügbar und erfordert GLSL `#version 300 es`.

## Konstanten

Diese Erweiterung stellt eine neue Konstante bereit, die in den Methoden [`hint()`](/de/docs/Web/API/WebGLRenderingContext/hint) und [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) verwendet werden kann.

- `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Genauigkeit der Derivationsberechnung für die eingebauten GLSL-Funktionen angibt: `dFdx`, `dFdy` und `fwidth`.

## Eingebaute GLSL-Funktionen

Die folgenden neuen Funktionen können im GLSL-Shader-Code verwendet werden, wenn diese Erweiterung aktiviert ist:

```c
genType dFdx(genType p)
genType dFdy(genType p)
genType fwidth(genType p)
```

- `dFdx()`
  - : Gibt die Ableitung in `x` unter Verwendung lokaler Differenzierung für das Eingabeargument `p` zurück.
- `dFdy()`
  - : Gibt die Ableitung in `y` unter Verwendung lokaler Differenzierung für das Eingabeargument `p` zurück.
- `fwidth()`
  - : Gibt die Summe der absoluten Ableitung in `x` und `y` unter Verwendung lokaler Differenzierung für das Eingabeargument `p` zurück. Das heißt, `abs(dFdx(p)) + abs(dFdy(p))`.

`dFdx()` und `dFdy()` werden häufig verwendet, um die Filterbreite abzuschätzen, die zur Antialiasing von prozeduralen Texturen verwendet wird.

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
