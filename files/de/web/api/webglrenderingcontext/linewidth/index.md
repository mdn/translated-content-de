---
title: "WebGLRenderingContext: lineWidth() Methode"
short-title: lineWidth()
slug: Web/API/WebGLRenderingContext/lineWidth
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.lineWidth()`** Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) setzt die Linienbreite von rasterisierten Linien.

> [!WARNING]
> Die WebGL-Spezifikation, die auf den OpenGL ES 2.0/3.0 Spezifikationen basiert, weist darauf hin, dass die minimale und maximale Breite für eine Linie von der Implementierung definiert ist. Die maximal zulässige Mindestbreite darf 1,0 betragen. Die minimal zulässige Maximalbreite darf ebenfalls 1,0 betragen. Aufgrund dieser implementierungsdefinierten Grenzen wird nicht empfohlen, andere Linienbreiten als 1,0 zu verwenden, da es keine Garantie gibt, dass ein Benutzer-Browser jede andere Breite korrekt darstellt.
>
> Stand Januar 2017 unterstützen die meisten Implementierungen von WebGL nur ein Minimum von 1 und ein Maximum von 1, da die zu Grunde liegende Technologie diese gleichen Grenzen aufweist.

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

Setzen der Linienbreite:

```js
gl.lineWidth(5);
```

Abrufen der Linienbreite:

```js
gl.getParameter(gl.LINE_WIDTH);
```

Abrufen der Bandbreite der verfügbaren Breiten. Gibt ein {{jsxref("Float32Array")}} zurück.

```js
gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)
