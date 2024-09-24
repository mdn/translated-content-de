---
title: "WebGLRenderingContext: depthRange()-Methode"
short-title: depthRange()
slug: Web/API/WebGLRenderingContext/depthRange
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.depthRange()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) spezifiziert die Zuordnung des Tiefenbereichs von normalisierten Gerätekoordinaten zu Fenster- oder Viewport-Koordinaten.

## Syntax

```js-nolint
depthRange(zNear, zFar)
```

### Parameter

- `zNear`
  - : Ein {{domxref("WebGL_API/Types", "GLclampf")}}, der die Zuordnung der Nah-Ebene zu Fenster- oder Viewport-Koordinaten angibt. Wird auf den Bereich 0 bis 1 begrenzt und muss kleiner oder gleich `zFar` sein. Der Standardwert ist 0.
- `zFar`
  - : Ein {{domxref("WebGL_API/Types", "GLclampf")}}, der die Zuordnung der Fern-Ebene zu Fenster- oder Viewport-Koordinaten angibt. Wird auf den Bereich 0 bis 1 begrenzt. Der Standardwert ist 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.depthRange(0.2, 0.6);
```

Um den aktuellen Tiefenbereich zu überprüfen, fragen Sie die `DEPTH_RANGE`-Konstante ab, die ein {{jsxref("Float32Array")}} zurückgibt.

```js
gl.getParameter(gl.DEPTH_RANGE);
// Float32Array[0.2, 0.6]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.viewport()")}}
- {{domxref("WebGLRenderingContext.depthFunc()")}}
