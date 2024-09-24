---
title: "WebGLRenderingContext: lineWidth()-Methode"
short-title: lineWidth()
slug: Web/API/WebGLRenderingContext/lineWidth
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.lineWidth()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt die Linienbreite von gerasterten Linien fest.

> [!WARNING]
> Die WebGL-Spezifikation, basierend auf den OpenGL ES 2.0/3.0 Spezifikationen, weist darauf hin, dass die minimale und maximale Breite für eine Linie implementierungsabhängig ist. Die maximale Mindestbreite darf 1,0 sein. Die minimale Höchstbreite darf ebenfalls 1,0 sein. Aufgrund dieser implementierungsabhängigen Grenzen wird nicht empfohlen, andere Linienbreiten als 1,0 zu verwenden, da es keine Garantie gibt, dass der Browser eines Benutzers eine andere Breite anzeigen wird.
>
> Stand Januar 2017 unterstützen die meisten Implementierungen von WebGL nur ein Minimum von 1 und ein Maximum von 1, da die zugrunde liegende Technologie diese gleichen Grenzen hat.

## Syntax

```js-nolint
lineWidth(width)
```

### Parameter

- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLfloat")}}, das die Breite der gerasterten Linien angibt. Standardwert: 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Setzen der Linienbreite:

```js
gl.lineWidth(5);
```

Abrufen der Linienbreite:

```js
gl.getParameter(gl.LINE_WIDTH);
```

Abrufen des Bereichs der verfügbaren Breiten. Gibt ein {{jsxref("Float32Array")}} zurück.

```js
gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext")}}
