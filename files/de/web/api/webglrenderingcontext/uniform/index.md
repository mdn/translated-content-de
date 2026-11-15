---
title: "WebGLRenderingContext: Methode uniform[1234][fi][v]()"
short-title: uniform[1234][fi][v]()
slug: Web/API/WebGLRenderingContext/uniform
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methoden **`WebGLRenderingContext.uniform[1234][fi][v]()`** der [WebGL API](/de/docs/Web/API/WebGL_API) legen die Werte von uniform-Variablen fest. Alle aktiven uniform-Variablen, die in einem Programmobjekt definiert sind, werden auf 0 initialisiert, wenn das Programmobjekt erfolgreich verknüpft wird. Die zugewiesenen Werte bleiben bis zur nächsten erfolgreichen Verknüpfung des Programmobjekts erhalten. Dann werden die Variablen erneut auf 0 initialisiert.

> [!NOTE]
> Viele der hier beschriebenen Funktionen haben erweiterte WebGL-2-Schnittstellen. Diese finden Sie unter [`WebGL2RenderingContext.uniform[1234][uif][v]()`](/de/docs/Web/API/WebGL2RenderingContext/uniform).

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
  - : Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekt, das die Position des zu ändernden uniform-Attributs enthält, oder `null`, um die Aktualisierung der uniform-Variablen ohne Fehlermeldung zu ignorieren.
- `value`, `v0`, `v1`, `v2`, `v3`
  - : Ein neuer Wert für die uniform-Variable. Mögliche Typen:
    - Ein {{jsxref("Number")}}-Wert mit Gleitkommazahl für Gleitkommawerte (Methoden mit „f“).
    - Eine Folge von Gleitkommazahlen (beispielsweise ein {{jsxref("Float32Array")}} oder ein {{jsxref("Array")}} mit Zahlen) für Gleitkomma-Vektormethoden (Methoden mit „fv“).
    - Ein ganzzahliger {{jsxref("Number")}}-Wert für Ganzzahlwerte (Methoden mit „i“).
    - Ein {{jsxref("Int32Array")}} für Ganzzahl-Vektormethoden (Methoden mit „iv“).

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
