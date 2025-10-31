---
title: "WebGL2RenderingContext: uniform[1234][uif][v]() Methode"
short-title: uniform[1234][uif][v]()
slug: Web/API/WebGL2RenderingContext/uniform
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.uniform[1234][uif][v]()`**-Methoden der [WebGL API](/de/docs/Web/API/WebGL_API) legen Werte für Uniform-Variablen fest.

Die Namen dieser Methoden werden gebildet durch:

- Die Anzahl der Komponenten in der Uniform-Variablen (1, 2, 3 oder 4).
- Den Typ der Uniform-Variablen (`i` für Integer, `f` für Float, `ui` für Unsigned Integer).
- Das Vorhandensein eines Vektor-Suffixes (`v`) für Vektortypen.

Sie können durch den regulären Ausdruck `uniform[1234](u?i|f)v?` übereinstimmen.

Die meisten dieser Signaturen sind vom [WebGL 1 API](/de/docs/Web/API/WebGLRenderingContext/uniform) geerbt. WebGL 2 fügt die Unsigned-Integer-Versionen sowie die zusätzlichen `srcOffset` und `srcLength` Parameter zu den Vektormethoden hinzu.

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
  - : Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekt, das die Position des zu ändernden Uniform-Attributs enthält.
- `data`, `v0`, `v1`, `v2`, `v3`
  - : Ein neuer Wert, der für die Uniform-Variable verwendet werden soll. Mögliche Typen:
    - Eine {{jsxref("Number")}} für Unsigned-Integer-Werte (Methoden mit `ui`), für Integer-Werte (Methoden mit `i`) oder für Floats (Methoden mit `f`).
    - Eine {{jsxref("Uint32Array")}} (oder ein {{jsxref("Array")}} von Unsigned-Integer-Zahlen) für Unsigned-Integer-Vektormethoden (Methoden mit `uiv`).
    - Eine {{jsxref("Int32Array")}} (oder ein {{jsxref("Array")}} von Integer-Zahlen) für Integer-Vektormethoden (Methoden mit `iv`).
    - Eine {{jsxref("Float32Array")}} (oder ein {{jsxref("Array")}} von Zahlen) für Gleitkomma-Vektormethoden (Methoden mit `fv`).
- `srcOffset` {{optional_inline}}
  - : Eine nicht-negative ganze Zahl, die den Index des ersten zu verwendenden Elements im `data` Array angibt. Standardmäßig `0`.
- `srcLength` {{optional_inline}}
  - : Eine nicht-negative ganze Zahl, die die Anzahl der im `data` Array zu verwendenden Elemente angibt. Standardmäßig `0`, was als `data.length - srcOffset` behandelt wird. `srcOffset + srcLength` muss kleiner oder gleich `data.length` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/de/docs/Web/API/WebGLRenderingContext/uniform)
