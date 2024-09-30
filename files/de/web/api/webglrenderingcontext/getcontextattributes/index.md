---
title: "WebGLRenderingContext: getContextAttributes()-Methode"
short-title: getContextAttributes()
slug: Web/API/WebGLRenderingContext/getContextAttributes
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getContextAttributes()`**-Methode gibt ein `WebGLContextAttributes`-Objekt zurück, das die tatsächlichen Kontextparameter enthält. Es kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgeben, wenn der Kontext verloren geht.

## Syntax

```js-nolint
getContextAttributes()
```

### Parameter

Keine.

### Rückgabewert

Ein `WebGLContextAttributes`-Objekt, das die tatsächlichen Kontextparameter enthält, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontext verloren geht.

## Beispiele

Angenommen, dieses {{HTMLElement("canvas")}}-Element

```html
<canvas id="canvas"></canvas>
```

und der folgende WebGL-Kontext

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.getContextAttributes();
```

Die `getContextAttributes`-Methode gibt ein Objekt zurück, das die für diesen Kontext festgelegten Attribute beschreibt, zum Beispiel:

```js
{
  alpha: true,
  antialias: true,
  depth: true,
  failIfMajorPerformanceCaveat: false,
  powerPreference: "default",
  premultipliedAlpha: true,
  preserveDrawingBuffer: false,
  stencil: false,
  desynchronized: false
}
```

Die Kontextattribute können beim Erstellen des Kontexts mit der [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)-Methode festgelegt werden:

```js
canvas.getContext("webgl", { antialias: false, depth: false });
```

Siehe [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) für weitere Informationen zu den einzelnen Attributen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes)
