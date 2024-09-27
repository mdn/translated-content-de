---
title: "WebGLRenderingContext: uniform[1234][fi][v]() Methode"
short-title: uniform[1234][fi][v]()
slug: Web/API/WebGLRenderingContext/uniform
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.uniform[1234][fi][v]()`** Methoden des [WebGL API](/de/docs/Web/API/WebGL_API) legen Werte für Uniform-Variablen fest. Alle aktiven Uniform-Variablen, die in einem Program-Objekt definiert sind, werden bei erfolgreicher Verknüpfung des Program-Objekts auf 0 initialisiert. Sie behalten die Werte, die ihnen durch einen Aufruf dieser Methode zugewiesen wurden, bis der nächste erfolgreiche Verknüpfungsvorgang am Program-Objekt erfolgt, woraufhin sie erneut auf 0 initialisiert werden.

> [!NOTE]
> Viele der hier beschriebenen Funktionen haben erweiterte WebGL 2 Schnittstellen, die unter
> [`WebGL2RenderingContext.uniform[1234][uif][v]()`](/de/docs/Web/API/WebGL2RenderingContext/uniform) zu finden sind.

## Syntax

```js-nolint
uniform1f(location, v0)
uniform1fv(location, value)
uniform1i(location, v0)
uniform1iv(location, value)

uniform2f(location, v0, v1)
uniform2fv(location, value)
uniform2i(location, v0, v1)
uniform2iv(location, value)

uniform3f(location, v0, v1, v2)
uniform3fv(location, value)
uniform3i(location, v0, v1, v2)
uniform3iv(location, value)

uniform4f(location, v0, v1, v2, v3)
uniform4fv(location, value)
uniform4i(location, v0, v1, v2, v3)
uniform4iv(location, value)
```

### Parameter

- `location`
  - : Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation) Objekt, das die Position des zu ändernden Uniform-Attributs enthält.
- `value`, `v0`, `v1`, `v2`, `v3`

  - : Ein neuer Wert, der für die Uniform-Variable verwendet werden soll. Mögliche Typen:

    - Eine Gleitkommazahl {{jsxref("Number")}} für Gleitkommawerte (Methoden mit "f").
    - Eine Sequenz von Gleitkommazahlen (zum Beispiel ein {{jsxref("Float32Array")}} oder ein {{jsxref("Array")}} von Zahlen) für Gleitkomma-Vektormethoden (Methoden mit "fv").
    - Eine Ganzzahl {{jsxref("Number")}} für Ganzzahlwerte (Methoden mit "i").
    - Ein {{jsxref("Int32Array")}} für Ganzzahl-Vektormethoden (Methoden mit "iv").

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.uniform1f(u_alpha, 0.8);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.uniformMatrix()`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)
