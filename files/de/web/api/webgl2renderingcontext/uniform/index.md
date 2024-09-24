---
title: "WebGL2RenderingContext: uniform[1234][uif][v]() Methode"
short-title: uniform[1234][uif][v]()
slug: Web/API/WebGL2RenderingContext/uniform
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.uniform[1234][uif][v]()`** Methoden der [WebGL API](/de/docs/Web/API/WebGL_API) legen Werte für Uniform-Variablen fest.

> **Note:** `ui` steht für _unsigned integer_, `i` für _integer_, `f` für _float_, und `v` für _vector_. Nicht alle Kombinationen sind gültig: `u` kann nicht mit `f` kombiniert werden. Siehe die Syntax-Tabelle unten. Äquivalenter Regex: `uniform[1234](u?i|f)v?`

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
  - : Ein {{domxref("WebGLUniformLocation")}} Objekt, das die Position des Uniform-Attributs enthält, das geändert werden soll.
- `data`, `v0`, `v1`, `v2`, `v3`

  - : Ein neuer Wert, der für die Uniform-Variable verwendet werden soll. Mögliche Typen:

    - Eine {{jsxref("Number")}} für unsigned integer Werte (Methoden mit `ui`), für integer Werte (Methoden mit `i`), oder für float Werte (Methoden mit `f`).
    - Eine {{jsxref("Uint32Array")}} für unsigned integer Vektormethoden (Methoden mit `uiv`).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.uniform()")}}
