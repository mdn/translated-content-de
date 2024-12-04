---
title: "WebGLRenderingContext: lineWidth()-Methode"
short-title: lineWidth()
slug: Web/API/WebGLRenderingContext/lineWidth
l10n:
  sourceCommit: 11752db034b7d6e0d69a2d04850766d73bb6bd4f
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.lineWidth()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt die Linienbreite von rasterisierten Linien fest.

## Syntax

```js-nolint
lineWidth(width)
```

### Parameter

- `width`
  - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der die Breite der rasterisierten Linien angibt. Standardwert: 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Festlegen der Linienbreite:

```js
gl.lineWidth(5);
```

Abrufen der Linienbreite:

```js
gl.getParameter(gl.LINE_WIDTH);
```

Abrufen des Bereichs verfügbarer Breiten. Gibt ein {{jsxref("Float32Array")}} zurück.

```js
gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)
