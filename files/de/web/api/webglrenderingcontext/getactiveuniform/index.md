---
title: "WebGLRenderingContext: getActiveUniform()-Methode"
short-title: getActiveUniform()
slug: Web/API/WebGLRenderingContext/getActiveUniform
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getActiveUniform()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt ein {{domxref("WebGLActiveInfo")}}-Objekt zurück, das die Größe, den Typ und den Namen eines Uniform-Attributs enthält. Sie wird im Allgemeinen genutzt, wenn unbekannte Uniforms abgefragt werden, entweder zum Debuggen oder zur generischen Bibliothekserstellung.

## Syntax

```js-nolint
getActiveUniform(program, index)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}, der das WebGL-Shader-Programm angibt, aus dem die Informationen über die Uniform-Variable erhalten werden sollen.
- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index des Uniform-Attributs angibt, das abgerufen werden soll. Dieser Wert ist ein Index von 0 bis N - 1, wie von {{domxref("WebGLRenderingContext.getProgramParameter", "gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)")}} zurückgegeben.

### Rückgabewert

Ein {{domxref("WebGLActiveInfo")}}-Objekt, das die Uniform beschreibt.

Das `type`-Attribut des Rückgabewerts wird einer der folgenden sein:

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
- Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}} sind zusätzlich die folgenden Werte möglich:

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

Wenn `gl.linkProgram` aufgerufen wird, erstellt WebGL eine Liste aktiver Uniforms. Dies sind mögliche Werte des `name`-Attributs der Rückgabewerte von `getActiveUniform`. WebGL generiert je nach erklärtem Typ der Uniform im Shader einen oder mehrere Einträge in der Liste:

- Einzelner Basistyp: Ein Eintrag mit dem Namen der Uniform. Z. B. `uniform vec4 a;` wird zu `a`.
- Array von Basistyp: Ein Eintrag mit dem Namen der Uniform, gefolgt von `[0]`. Z. B. `uniform vec4 b[];` wird zu `b[0]`.
- Strukt-Typ: Ein Eintrag für jedes Mitglied der Struktur. Z. B. `uniform struct { float foo; vec4 bar; } c;` wird zu `c.foo` und `c.bar`.
- Arrays von Strukturen oder Arrays: Jeder Eintrag des Arrays generiert eigene Einträge. Z. B. `uniform struct { float foo; vec4 bar; } d[2];` wird zu:

  - `d[0].foo`
  - `d[0].bar`
  - `d[1].foo`
  - `d[1].bar`

- Uniform-Blöcke: Ein Eintrag für jedes Mitglied. Falls der Uniform-Block einen Instanzennamen hat, wird der Blockname vorangestellt. Z. B. `uniform Block { float foo; };` wird zu `foo`, und `uniform Block { float bar; } e;` wird zu `e.bar`.

Das `size`-Attribut des Rückgabewerts entspricht der Länge des Arrays für Uniforms, die als Arrays deklariert sind. Andernfalls ist es 1 (dies schließt Interface-Blöcke ein, die mit Arrays instanziiert sind).

### Ausnahmen

- `gl.INVALID_VALUE` wird erzeugt, wenn das Programm {{domxref("WebGLProgram")}} ungültig ist (nicht verbunden, gelöscht, etc.).
- `gl.INVALID_VALUE` wird erzeugt, wenn der Index nicht im Bereich \[0, `gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)` - 1] liegt.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLActiveInfo")}}
- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
