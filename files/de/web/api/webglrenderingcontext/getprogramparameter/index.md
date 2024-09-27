---
title: "WebGLRenderingContext: getProgramParameter() Methode"
short-title: getProgramParameter()
slug: Web/API/WebGLRenderingContext/getProgramParameter
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getProgramParameter()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) liefert Informationen über das
angegebene Programm zurück.

## Syntax

```js-nolint
getProgramParameter(program, pname)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), von dem die Parameterinformationen abgerufen werden sollen.
- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die abzufragenden Informationen spezifiziert. Mögliche Werte:

    - `gl.DELETE_STATUS`
      - : Gibt ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, das anzeigt,
        ob das Programm zur Löschung markiert ist.
    - `gl.LINK_STATUS`
      - : Gibt ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, das anzeigt,
        ob der letzte Link-Vorgang erfolgreich war.
    - `gl.VALIDATE_STATUS`
      - : Gibt ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, das anzeigt,
        ob der letzte Validierungsvorgang erfolgreich war.
    - `gl.ATTACHED_SHADERS`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die
        Anzahl der an ein Programm angehängten Shader angibt.
    - `gl.ACTIVE_ATTRIBUTES`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die
        Anzahl der aktiven Attributvariablen in einem Programm angibt.
    - `gl.ACTIVE_UNIFORMS`

      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die
        Anzahl der aktiven Uniform-Variablen in einem Programm angibt.

    Bei der Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}}
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.TRANSFORM_FEEDBACK_BUFFER_MODE`
      - : Gibt ein
        [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das den Puffer-Modus anzeigt, wenn Transform-Feedback
        aktiv ist. Kann `gl.SEPARATE_ATTRIBS` oder
        `gl.INTERLEAVED_ATTRIBS` sein.
    - `gl.TRANSFORM_FEEDBACK_VARYINGS`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types)
        zurück, das die Anzahl der in Transform-Feedback-Modus zu erfassenden
        Varying-Variablen angibt.
    - `gl.ACTIVE_UNIFORM_BLOCKS`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types)
        zurück, das die Anzahl der Uniform-Blöcke mit aktiven Uniforms angibt.

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

- [`WebGLRenderingContext.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter)
