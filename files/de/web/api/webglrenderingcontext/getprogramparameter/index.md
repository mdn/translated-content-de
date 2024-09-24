---
title: "WebGLRenderingContext: Methode getProgramParameter()"
short-title: getProgramParameter()
slug: Web/API/WebGLRenderingContext/getProgramParameter
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die Methode **`WebGLRenderingContext.getProgramParameter()`** der [WebGL API](/de/docs/Web/API/WebGL_API) gibt Informationen über das angegebene Programm zurück.

## Syntax

```js-nolint
getProgramParameter(program, pname)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}, von dem die Parameterinformationen abgerufen werden.
- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das die abzufragenden Informationen spezifiziert. Mögliche Werte sind:

    - `gl.DELETE_STATUS`
      - : Gibt einen {{domxref("WebGL_API/Types", "GLboolean")}} zurück, der angibt, ob das Programm zur Löschung markiert ist.
    - `gl.LINK_STATUS`
      - : Gibt einen {{domxref("WebGL_API/Types", "GLboolean")}} zurück, der angibt, ob der letzte Linkvorgang erfolgreich war.
    - `gl.VALIDATE_STATUS`
      - : Gibt einen {{domxref("WebGL_API/Types", "GLboolean")}} zurück, der angibt, ob der letzte Validierungsvorgang erfolgreich war.
    - `gl.ATTACHED_SHADERS`
      - : Gibt einen {{domxref("WebGL_API/Types", "GLint")}} zurück, der die Anzahl der an ein Programm angehängten Shader angibt.
    - `gl.ACTIVE_ATTRIBUTES`
      - : Gibt einen {{domxref("WebGL_API/Types", "GLint")}} zurück, der die Anzahl der aktiven Attributvariablen in einem Programm angibt.
    - `gl.ACTIVE_UNIFORMS`

      - : Gibt einen {{domxref("WebGL_API/Types", "GLint")}} zurück, der die Anzahl der aktiven Uniformvariablen in einem Programm angibt.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}} stehen zusätzlich die folgenden Werte zur Verfügung:

    - `gl.TRANSFORM_FEEDBACK_BUFFER_MODE`
      - : Gibt ein
        {{domxref("WebGL_API/Types", "GLenum")}} zurück, das den Puffer-Modus angibt, wenn Transform-Feedback aktiv ist. Kann `gl.SEPARATE_ATTRIBS` oder
        `gl.INTERLEAVED_ATTRIBS` sein.
    - `gl.TRANSFORM_FEEDBACK_VARYINGS`
      - : Gibt einen {{domxref("WebGL_API/Types", "GLint")}}
        zurück, der die Anzahl der bei Transform-Feedback zu erfassenden Variablen angibt.
    - `gl.ACTIVE_UNIFORM_BLOCKS`
      - : Gibt einen {{domxref("WebGL_API/Types", "GLint")}}
        zurück, der die Anzahl der Uniform-Blöcke mit aktiven Uniformen angibt.

### Rückgabewert

Gibt die angeforderten Programminformationen zurück (wie mit `pname` angegeben).

## Beispiele

```js
gl.getProgramParameter(program, gl.DELETE_STATUS);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
