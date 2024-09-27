---
title: "WebGLRenderingContext: getUniform() Methode"
short-title: getUniform()
slug: Web/API/WebGLRenderingContext/getUniform
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getUniform()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt den Wert einer Uniform-Variablen an einer bestimmten Position zurück.

## Syntax

```js-nolint
getUniform(program, location)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das das Uniform-Attribut enthält.
- `location`
  - : Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation) Objekt, das die Position des abzurufenden Uniform-Attributs enthält.

### Rückgabewert

Der zurückgegebene Typ hängt vom Uniform-Typ ab:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Uniform-Typ</th>
      <th scope="col">Zurückgegebener Typ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">Nur WebGL 1</th>
    </tr>
    <tr>
      <td><code>boolean</code></td>
      <td>[`GLBoolean`](/de/docs/Web/API/WebGL_API/Types)</td>
    </tr>
    <tr>
      <td><code>int</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
    </tr>
    <tr>
      <td><code>float</code></td>
      <td>[`GLfloat`](/de/docs/Web/API/WebGL_API/Types)</td>
    </tr>
    <tr>
      <td><code>vec2</code></td>
      <td>{{jsxref("Float32Array")}} (mit 2 Elementen)</td>
    </tr>
    <tr>
      <td><code>ivec2</code></td>
      <td>{{jsxref("Int32Array")}} (mit 2 Elementen)</td>
    </tr>
    <tr>
      <td><code>bvec2</code></td>
      <td>
        {{jsxref("Array")}} von
        [`GLBoolean`](/de/docs/Web/API/WebGL_API/Types) (mit 2
        Elementen)
      </td>
    </tr>
    <tr>
      <td><code>vec3</code></td>
      <td>{{jsxref("Float32Array")}} (mit 3 Elementen)</td>
    </tr>
    <tr>
      <td><code>ivec3</code></td>
      <td>{{jsxref("Int32Array")}} (mit 3 Elementen)</td>
    </tr>
    <tr>
      <td><code>bvec3</code></td>
      <td>
        {{jsxref("Array")}} von
        [`GLBoolean`](/de/docs/Web/API/WebGL_API/Types) (mit 3
        Elementen)
      </td>
    </tr>
    <tr>
      <td><code>vec4</code></td>
      <td>{{jsxref("Float32Array")}} (mit 4 Elementen)</td>
    </tr>
    <tr>
      <td><code>ivec4</code></td>
      <td>{{jsxref("Int32Array")}} (mit 4 Elementen)</td>
    </tr>
    <tr>
      <td><code>bvec4</code></td>
      <td>
        {{jsxref("Array")}} von
        [`GLBoolean`](/de/docs/Web/API/WebGL_API/Types) (mit 4
        Elementen)
      </td>
    </tr>
    <tr>
      <td><code>mat2</code></td>
      <td>{{jsxref("Float32Array")}} (mit 4 Elementen)</td>
    </tr>
    <tr>
      <td><code>mat3</code></td>
      <td>{{jsxref("Float32Array")}} (mit 9 Elementen)</td>
    </tr>
    <tr>
      <td><code>mat4</code></td>
      <td>{{jsxref("Float32Array")}} (mit 16 Elementen)</td>
    </tr>
    <tr>
      <td><code>sampler2D</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
    </tr>
    <tr>
      <td><code>samplerCube</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
    </tr>
    <tr>
      <th colspan="2">Zusätzlich verfügbar in WebGL 2</th>
    </tr>
    <tr>
      <td><code>uint</code></td>
      <td>[`GLuint`](/de/docs/Web/API/WebGL_API/Types)</td>
    </tr>
    <tr>
      <td><code>uvec2</code></td>
      <td>{{jsxref("Uint32Array")}} (mit 2 Elementen)</td>
    </tr>
    <tr>
      <td><code>uvec3</code></td>
      <td>{{jsxref("Uint32Array")}} (mit 3 Elementen)</td>
    </tr>
    <tr>
      <td><code>uvec4</code></td>
      <td>{{jsxref("Uint32Array")}} (mit 4 Elementen)</td>
    </tr>
    <tr>
      <td><code>mat2x3</code></td>
      <td>{{jsxref("Float32Array")}} (mit 6 Elementen)</td>
    </tr>
    <tr>
      <td><code>mat2x4</code></td>
      <td>{{jsxref("Float32Array")}} (mit 8 Elementen)</td>
    </tr>
    <tr>
      <td><code>mat3x2</code></td>
      <td>{{jsxref("Float32Array")}} (mit 6 Elementen)</td>
    </tr>
    <tr>
      <td><code>mat3x4</code></td>
      <td>{{jsxref("Float32Array")}} (mit 12 Elementen)</td>
    </tr>
    <tr>
      <td><code>mat4x2</code></td>
      <td>{{jsxref("Float32Array")}} (mit 8 Elementen)</td>
    </tr>
    <tr>
      <td><code>mat4x3</code></td>
      <td>{{jsxref("Float32Array")}} (mit 12 Elementen)</td>
    </tr>
    <tr>
      <td>jeder Sampler-Typ</td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
    </tr>
  </tbody>
</table>

## Beispiele

```js
const loc = gl.getUniformLocation(program, "u_foobar");
gl.getUniform(program, loc);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)
- [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform)
