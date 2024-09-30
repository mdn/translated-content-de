---
title: KHR_parallel_shader_compile Erweiterung
short-title: KHR_parallel_shader_compile
slug: Web/API/KHR_parallel_shader_compile
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`KHR_parallel_shader_compile`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht eine nicht-blockierende Abfrageoperation, sodass der Verfügbarkeitsstatus von Kompilation/Verlinkung (`COMPLETION_STATUS_KHR`) abgefragt werden kann, ohne dass potenziell Verzögerungen auftreten. Mit anderen Worten, Sie können den Status der Kompilierung Ihrer Shader abfragen, ohne den Ablauf zu blockieren.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie auch unter [Using Extensions](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

## Konstanten

- `ext.COMPLETION_STATUS_KHR`
  - : Ein GLenum.

## Beispiele

Aktivieren Sie die Erweiterung:

```js
const ext = gl.getExtension("KHR_parallel_shader_compile");
```

Im Allgemeinen gilt als Best Practice mit oder ohne die Erweiterung:

```js
// Assuming lists of `shaders` and `programs`:
for (const x of shaders) gl.compileShader(x); // Never check compile status unless subsequent linking fails.
for (const x of programs) gl.linkProgram(x);
```

Mit der Erweiterung können Anwendungen abfragen, ob Programme ohne Ruckeln verlinkt wurden, aber diese werden wahrscheinlich die gleiche Gesamtzeit zur Verlinkung benötigen:

```js
// Generator yielding a progress ratio [0.0, 1.0].
// Without the extension, this will jank and only check one program per generation.
function* linkingProgress(programs) {
  const ext = gl.getExtension("KHR_parallel_shader_compile");
  let todo = programs.slice();
  while (todo.length) {
    if (ext) {
      todo = todo.filter(
        (x) => !gl.getProgramParameter(x, ext.COMPLETION_STATUS_KHR),
      );
    } else {
      const x = todo.pop();
      gl.getProgramParameter(x, gl.LINK_STATUS);
    }
    if (!todo.length) return;
    yield 1.0 - todo.length / programs.length;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
