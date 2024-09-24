---
title: KHR_parallel_shader_compile Erweiterung
short-title: KHR_parallel_shader_compile
slug: Web/API/KHR_parallel_shader_compile
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`KHR_parallel_shader_compile`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht einen nicht-blockierenden Abfragevorgang, sodass die Verfügbarkeit des Kompilier-/Verknüpfungsstatus (`COMPLETION_STATUS_KHR`) abgefragt werden kann, ohne dass möglicherweise Verzögerungen auftreten. Mit anderen Worten, Sie können den Status Ihrer Shader-Kompilierung überprüfen, ohne die Laufzeit zu blockieren.

WebGL-Erweiterungen sind über die {{domxref("WebGLRenderingContext.getExtension()")}}-Methode verfügbar. Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Konstanten

- `ext.COMPLETION_STATUS_KHR`
  - : Ein GLenum.

## Beispiele

Aktivieren Sie die Erweiterung:

```js
const ext = gl.getExtension("KHR_parallel_shader_compile");
```

Im Allgemeinen gilt folgende bewährte Praxis, unabhängig davon, ob die Erweiterung verwendet wird:

```js
// Angenommene Listen von `shaders` und `programs`:
for (const x of shaders) gl.compileShader(x); // Überprüfen Sie niemals den Kompilierstatus, es sei denn, die anschließende Verknüpfung schlägt fehl.
for (const x of programs) gl.linkProgram(x);
```

Mit der Erweiterung könnten Anwendungen überprüfen, ob Programme ohne Ruckeln verknüpft wurden, aber diese benötigen wahrscheinlich die gleiche Gesamtzeit für die Verknüpfung:

```js
// Generator, der ein Fortschrittsverhältnis [0.0, 1.0] zurückgibt.
// Ohne die Erweiterung wird dies ruckeln und nur ein Programm pro Generation überprüfen.
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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
