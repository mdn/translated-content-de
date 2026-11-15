---
title: "WebGLRenderingContext: Methode deleteShader()"
short-title: deleteShader()
slug: Web/API/WebGLRenderingContext/deleteShader
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.deleteShader()`** der [WebGL API](/de/docs/Web/API/WebGL_API) markiert ein bestimmtes [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt zum Löschen. Es wird gelöscht, sobald der Shader nicht mehr verwendet wird. Die Methode hat keine Wirkung, wenn der Shader bereits gelöscht wurde. Ein [`WebGLShader`](/de/docs/Web/API/WebGLShader) wird außerdem automatisch zum Löschen markiert, wenn er durch den Garbage Collector zerstört wird.

## Syntax

```js-nolint
deleteShader(shader)
```

### Parameter

- `shader`
  - : Das zu löschende [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt. Die Übergabe von `null` hat keine Wirkung.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Shader löschen

```js
gl.deleteShader(shader);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
- [`WebGLRenderingContext.getAttachedShaders()`](/de/docs/Web/API/WebGLRenderingContext/getAttachedShaders)
