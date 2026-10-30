---
title: OES_standard_derivatives-Erweiterung
short-title: OES_standard_derivatives
slug: Web/API/OES_standard_derivatives
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`OES_standard_derivatives`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und fügt die GLSL-Ableitungsfunktionen `dFdx`, `dFdy` und `fwidth` hinzu.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist ihre Funktionalität standardmäßig im WebGL2-Kontext verfügbar. In WebGL 2 ist die Konstante als `gl.FRAGMENT_SHADER_DERIVATIVE_HINT` verfügbar; dafür ist GLSL `#version 300 es` erforderlich.

## Konstanten

Diese Erweiterung stellt eine neue Konstante bereit, die in den Methoden [`hint()`](/de/docs/Web/API/WebGLRenderingContext/hint) und [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) verwendet werden kann.

- `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Genauigkeit der Ableitungsberechnung für die integrierten GLSL-Funktionen `dFdx`, `dFdy` und `fwidth` angibt.

## Integrierte GLSL-Funktionen

Die folgenden neuen Funktionen können im GLSL-Shader-Code verwendet werden, wenn diese Erweiterung aktiviert ist:

```c
genType dFdx(genType p)
genType dFdy(genType p)
genType fwidth(genType p)
```

- `dFdx()`
  - : Gibt die Ableitung in `x` für das Eingabeargument `p` zurück, berechnet durch lokale Differenzenbildung.
- `dFdy()`
  - : Gibt die Ableitung in `y` für das Eingabeargument `p` zurück, berechnet durch lokale Differenzenbildung.
- `fwidth()`
  - : Gibt die Summe der Beträge der Ableitungen in `x` und `y` für das Eingabeargument `p` zurück, berechnet durch lokale Differenzenbildung. Das entspricht `abs(dFdx(p)) + abs(dFdy(p))`.

`dFdx()` und `dFdy()` werden häufig verwendet, um die Filterbreite für das Anti-Aliasing prozeduraler Texturen zu schätzen.

## Beispiele

Aktivieren der Erweiterungen:

```js
gl.getExtension("OES_standard_derivatives");
gl.getExtension("EXT_shader_texture_lod");
```

Shader-Code, der Artefakte beim Umbrechen von Texturkoordinaten vermeidet:

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
