---
title: "WebGLRenderingContext: getActiveUniform()-Methode"
short-title: getActiveUniform()
slug: Web/API/WebGLRenderingContext/getActiveUniform
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getActiveUniform()`**-Methode des [WebGL API](/de/docs/Web/API/WebGL_API) gibt ein [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)-Objekt zurück, das Größe, Typ und Namen eines Uniform-Attributs enthält. Sie wird im Allgemeinen verwendet, wenn unbekannte Uniforms abgefragt werden sollen, entweder zu Debugging-Zwecken oder zur Erstellung generischer Bibliotheken.

## Syntax

```js-nolint
getActiveUniform(program, index)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das das WebGL-Shader-Programm angibt, aus dem die Informationen der Uniform-Variable abgerufen werden sollen.
- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des abzurufenden Uniform-Attributs angibt. Dieser Wert ist ein Index von 0 bis N - 1, wie er von [`gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter) zurückgegeben wird.

### Rückgabewert

Ein [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)-Objekt, das die Uniform beschreibt.

Das `type`-Attribut des Rückgabewertes wird einer der folgenden Werte sein:

- `gl.FLOAT`
- `gl.FLOAT_VEC2`
- `gl.FLOAT_VEC3`
- `gl.FLOAT_VEC4`
- `gl.INT`
- `gl.INT_VEC2`
- `gl.INT_VEC3`
- `gl.INT_VEC4`
- `gl.BOOL`
- `gl.BOOL_VEC2`
- `gl.BOOL_VEC3`
- `gl.BOOL_VEC4`
- `gl.FLOAT_MAT2`
- `gl.FLOAT_MAT3`
- `gl.FLOAT_MAT4`
- `gl.SAMPLER_2D`
- `gl.SAMPLER_CUBE`
- Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}} sind zusätzlich die folgenden Werte möglich:

  - `gl.UNSIGNED_INT`
  - `gl.UNSIGNED_INT_VEC2`
  - `gl.UNSIGNED_INT_VEC3`
  - `gl.UNSIGNED_INT_VEC4`
  - `gl.FLOAT_MAT2x3`
  - `gl.FLOAT_MAT2x4`
  - `gl.FLOAT_MAT3x2`
  - `gl.FLOAT_MAT3x4`
  - `gl.FLOAT_MAT4x2`
  - `gl.FLOAT_MAT4x3`
  - `gl.SAMPLER_3D`
  - `gl.SAMPLER_2D_SHADOW`
  - `gl.SAMPLER_2D_ARRAY`
  - `gl.SAMPLER_2D_ARRAY_SHADOW`
  - `gl.SAMPLER_CUBE_SHADOW`
  - `gl.INT_SAMPLER_2D`
  - `gl.INT_SAMPLER_3D`
  - `gl.INT_SAMPLER_CUBE`
  - `gl.INT_SAMPLER_2D_ARRAY`
  - `gl.UNSIGNED_INT_SAMPLER_2D`
  - `gl.UNSIGNED_INT_SAMPLER_3D`
  - `gl.UNSIGNED_INT_SAMPLER_CUBE`
  - `gl.UNSIGNED_INT_SAMPLER_2D_ARRAY`

Wenn `gl.linkProgram` aufgerufen wird, erstellt WebGL eine Liste aktiver Uniforms. Dies sind mögliche Werte des `name`-Attributs von Rückgabewerten von `getActiveUniform`. WebGL generiert je nach deklariertem Typ der Uniform im Shader einen oder mehrere Einträge in der Liste:

- Einzelner Basistyp: ein Eintrag mit dem Namen der Uniform. Z.B. `uniform vec4 a;` wird zu `a`.
- Array von Basistypen: ein Eintrag mit dem Namen der Uniform, der mit `[0]` suffigiert wird. Z.B. `uniform vec4 b[];` wird zu `b[0]`.
- Strukturtip: ein Eintrag für jedes Mitglied der Struktur. Z.B. `uniform struct { float foo; vec4 bar; } c;` wird zu `c.foo` und `c.bar`.
- Arrays von Strukturen oder Arrays: jeder Eintrag des Arrays erzeugt eigene Einträge. Z.B. `uniform struct { float foo; vec4 bar; } d[2];` wird zu:

  - `d[0].foo`
  - `d[0].bar`
  - `d[1].foo`
  - `d[1].bar`

- Uniform-Blöcke: ein Eintrag für jedes Mitglied. Wenn der Uniform-Block einen Instanznamen hat, wird der Blockname vorangestellt. Z.B. `uniform Block { float foo; };` wird zu `foo`, und `uniform Block { float bar; } e;` wird zu `e.bar`.

Das `size`-Attribut des Rückgabewertes entspricht der Länge des Arrays für als Arrays deklarierte Uniforms. Andernfalls beträgt es 1 (dies schließt instanzierte Blöcke mit Arrays ein).

### Ausnahmen

- `gl.INVALID_VALUE` wird generiert, wenn das Programm [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ungültig ist (nicht verlinkt, gelöscht, etc.).
- `gl.INVALID_VALUE` wird generiert, wenn der Index nicht im Bereich \[0, `gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)` - 1] liegt.

## Beispiele

```js
const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
for (let i = 0; i < numUniforms; ++i) {
  const info = gl.getActiveUniform(program, i);
  console.log("name:", info.name, "type:", info.type, "size:", info.size);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)
- [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)
