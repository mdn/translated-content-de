---
title: KHR_parallel_shader_compile-Erweiterung
short-title: KHR_parallel_shader_compile
slug: Web/API/KHR_parallel_shader_compile
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`KHR_parallel_shader_compile`**-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht eine nicht blockierende Statusabfrage. So lässt sich die Verfügbarkeit des Komilierungs- und Verknüpfungsstatus (`COMPLETION_STATUS_KHR`) abfragen, ohne möglicherweise Wartezeiten zu verursachen. Anders ausgedrückt: Sie können den Kompilierungsstatus Ihrer Shader prüfen, ohne die Ausführung zu blockieren.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

## Konstanten

- `ext.COMPLETION_STATUS_KHR`
  - : Ein GLenum.

## Beispiele

Aktivieren Sie die Erweiterung:

```js
const ext = gl.getExtension("KHR_parallel_shader_compile");
```

Im Allgemeinen empfiehlt sich mit oder ohne die Erweiterung folgendes Vorgehen:

```js
// Assuming lists of `shaders` and `programs`:
for (const x of shaders) gl.compileShader(x); // Never check compile status unless subsequent linking fails.
for (const x of programs) gl.linkProgram(x);
```

Mit der Erweiterung können Anwendungen ohne Ruckler abfragen, ob Programme verknüpft wurden. Die gesamte verstrichene Zeit für die Verknüpfung bleibt dabei jedoch wahrscheinlich gleich:

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
