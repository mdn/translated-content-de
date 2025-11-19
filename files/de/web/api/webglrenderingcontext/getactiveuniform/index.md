---
title: "WebGLRenderingContext: getActiveUniform() Methode"
short-title: getActiveUniform()
slug: Web/API/WebGLRenderingContext/getActiveUniform
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getActiveUniform()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt ein [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)-Objekt zurück, das Größe, Typ und Namen eines Uniform-Attributs enthält. Sie wird im Allgemeinen verwendet, wenn unbekannte Uniforms abgefragt werden, sei es für Debugging oder die Erstellung generischer Bibliotheken.

## Syntax

```js-nolint
getActiveUniform(program, index)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das das WebGL-Shader-Programm angibt, von dem die Informationen über die Uniform-Variable abgerufen werden sollen.
- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des Uniform-Attributs angibt, das abgerufen werden soll. Dieser Wert ist ein Index von 0 bis N - 1, wie zurückgegeben von [`gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter).

### Rückgabewert

Ein [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)-Objekt, das das Uniform beschreibt.

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
- Beim Verwenden eines [WebGL 2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte möglich:
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

Wenn `gl.linkProgram` aufgerufen wird, erstellt WebGL eine Liste von aktiven Uniforms. Dies sind mögliche Werte des `name`-Attributs der Rückgabewerte von `getActiveUniform`. WebGL generiert einen oder mehrere Einträge in der Liste abhängig von dem im Shader deklarierten Typ des Uniform:

- Einzelner Basistyp: ein Eintrag mit dem Namen des Uniforms. Z.B. `uniform vec4 a;` ergibt `a`.
- Array eines Basistyps: ein Eintrag mit dem Namen des Uniforms, gefolgt von `[0]`. Z.B. `uniform vec4 b[];` ergibt `b[0]`.
- Strukt-Typ: ein Eintrag für jedes Mitglied der Struktur. Z.B. `uniform struct { float foo; vec4 bar; } c;` ergibt `c.foo` und `c.bar`.
- Arrays von Strukturen oder Arrays: jeder Eintrag im Array erzeugt eigene Einträge. Z.B. `uniform struct { float foo; vec4 bar; } d[2];` ergibt:
  - `d[0].foo`
  - `d[0].bar`
  - `d[1].foo`
  - `d[1].bar`

- Uniform-Blöcke: ein Eintrag für jedes Mitglied. Wenn der Uniform-Block einen Instanznamen hat, wird der Blockname vorangestellt. Z.B. `uniform Block { float foo; };` ergibt `foo`, und `uniform Block { float bar; } e;` ergibt `e.bar`.

Das `size`-Attribut des Rückgabewerts entspricht der Länge des Arrays für Uniforms, die als Arrays deklariert sind. Andernfalls ist es 1 (dies schließt Interface-Blöcke ein, die mit Arrays instanziiert sind).

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
