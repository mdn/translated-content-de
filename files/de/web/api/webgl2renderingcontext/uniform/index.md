---
title: "WebGL2RenderingContext: Methode uniform[1234][uif][v]()"
short-title: uniform[1234][uif][v]()
slug: Web/API/WebGL2RenderingContext/uniform
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methoden **`WebGL2RenderingContext.uniform[1234][uif][v]()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) legen Werte von Uniform-Variablen fest.

Die Namen dieser Methoden setzen sich wie folgt zusammen:

- Die Anzahl der Komponenten der Uniform-Variablen (1, 2, 3 oder 4).
- Der Typ der Uniform-Variablen (`i` für Integer, `f` für Float, `ui` für vorzeichenlose Integer).
- Das Vorhandensein des Suffixes `v` für Vektortypen.

Sie lassen sich mit dem regulären Ausdruck `uniform[1234](u?i|f)v?` erfassen.

Die meisten dieser Signaturen werden von der [WebGL-1-API](/de/docs/Web/API/WebGLRenderingContext/uniform) geerbt. WebGL 2 ergänzt die Varianten für vorzeichenlose Integer sowie die zusätzlichen Parameter `srcOffset` und `srcLength` für die Vektormethoden.

## Syntax

```js-nolint
uniform1ui(location, v0)
uniform2ui(location, v0, v1)
uniform3ui(location, v0, v1, v2)
uniform4ui(location, v0, v1, v2, v3)

uniform1fv(location, data)
uniform1fv(location, data, srcOffset)
uniform1fv(location, data, srcOffset, srcLength)

uniform2fv(location, data)
uniform2fv(location, data, srcOffset)
uniform2fv(location, data, srcOffset, srcLength)

uniform3fv(location, data)
uniform3fv(location, data, srcOffset)
uniform3fv(location, data, srcOffset, srcLength)

uniform4fv(location, data)
uniform4fv(location, data, srcOffset)
uniform4fv(location, data, srcOffset, srcLength)

uniform1iv(location, data)
uniform1iv(location, data, srcOffset)
uniform1iv(location, data, srcOffset, srcLength)

uniform2iv(location, data)
uniform2iv(location, data, srcOffset)
uniform2iv(location, data, srcOffset, srcLength)

uniform3iv(location, data)
uniform3iv(location, data, srcOffset)
uniform3iv(location, data, srcOffset, srcLength)

uniform4iv(location, data)
uniform4iv(location, data, srcOffset)
uniform4iv(location, data, srcOffset, srcLength)

uniform1uiv(location, data)
uniform1uiv(location, data, srcOffset)
uniform1uiv(location, data, srcOffset, srcLength)

uniform2uiv(location, data)
uniform2uiv(location, data, srcOffset)
uniform2uiv(location, data, srcOffset, srcLength)

uniform3uiv(location, data)
uniform3uiv(location, data, srcOffset)
uniform3uiv(location, data, srcOffset, srcLength)

uniform4uiv(location, data)
uniform4uiv(location, data, srcOffset)
uniform4uiv(location, data, srcOffset, srcLength)
```

### Parameter

- `location`
  - : Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekt, das die Position der zu ändernden Uniform-Variablen enthält, oder `null`, um die Aktualisierung der Uniform-Variablen ohne Fehlermeldung zu ignorieren.
- `data`, `v0`, `v1`, `v2`, `v3`
  - : Ein neuer Wert für die Uniform-Variable. Mögliche Typen:
    - Ein {{jsxref("Number")}} für vorzeichenlose Ganzzahlwerte (Methoden mit `ui`), Ganzzahlwerte (Methoden mit `i`) oder Gleitkommawerte (Methoden mit `f`).
    - Ein {{jsxref("Uint32Array")}} (oder ein {{jsxref("Array")}} mit vorzeichenlosen Ganzzahlen) für Vektormethoden mit vorzeichenlosen Ganzzahlen (Methoden mit `uiv`).
    - Ein {{jsxref("Int32Array")}} (oder ein {{jsxref("Array")}} mit Ganzzahlen) für Vektormethoden mit Ganzzahlen (Methoden mit `iv`).
    - Ein {{jsxref("Float32Array")}} (oder ein {{jsxref("Array")}} mit Zahlen) für Vektormethoden mit Gleitkommazahlen (Methoden mit `fv`).
- `srcOffset` {{optional_inline}}
  - : Eine nicht negative Ganzzahl, die den Index des ersten zu verwendenden Elements im Array `data` angibt. Der Standardwert ist `0`.
- `srcLength` {{optional_inline}}
  - : Eine nicht negative Ganzzahl, die die Anzahl der zu verwendenden Elemente im Array `data` angibt. Der Standardwert ist `0`, was als `data.length - srcOffset` behandelt wird. `srcOffset + srcLength` muss kleiner oder gleich `data.length` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/de/docs/Web/API/WebGLRenderingContext/uniform)
