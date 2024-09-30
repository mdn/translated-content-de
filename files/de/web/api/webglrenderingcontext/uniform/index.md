---
title: "WebGLRenderingContext: uniform[1234][fi][v]() Methode"
short-title: uniform[1234][fi][v]()
slug: Web/API/WebGLRenderingContext/uniform
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.uniform[1234][fi][v]()`** Methoden der [WebGL API](/de/docs/Web/API/WebGL_API) legen Werte von Uniform-Variablen fest. Alle aktiven Uniform-Variablen, die in einem Programmobjekt definiert sind, werden auf 0 initialisiert, wenn das Programmobjekt erfolgreich verknüpft wird. Sie behalten die Werte bei, die ihnen durch einen Aufruf dieser Methode zugewiesen wurden, bis der nächste erfolgreiche Verknüpfungsvorgang am Programmobjekt erfolgt, wonach sie erneut auf 0 initialisiert werden.

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
  - : Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation) Objekt, das die Position des Uniform-Attributs enthält, das modifiziert werden soll.
- `value`, `v0`, `v1`, `v2`, `v3`

  - : Ein neuer Wert, der für die Uniform-Variable verwendet werden soll. Mögliche Typen:

    - Eine Fließkommazahl {{jsxref("Number")}} für Fließkommawerte (Methoden mit
      "f").
    - Eine Sequenz von Fließkommazahlen (z. B. ein {{jsxref("Float32Array")}} oder ein {{jsxref("Array")}} von Zahlen) für Fließkomma-Vektormethoden (Methoden mit "fv").
    - Eine Ganzzahl {{jsxref("Number")}} für ganzzahlige Werte (Methoden mit "i").
    - Ein {{jsxref("Int32Array")}} für ganzzahlige Vektormethoden (Methoden mit "iv").

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
