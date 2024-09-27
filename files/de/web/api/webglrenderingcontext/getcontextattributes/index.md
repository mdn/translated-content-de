---
title: "WebGLRenderingContext: getContextAttributes() Methode"
short-title: getContextAttributes()
slug: Web/API/WebGLRenderingContext/getContextAttributes
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getContextAttributes()`**-Methode gibt ein `WebGLContextAttributes`-Objekt zurück, das die tatsächlichen Kontextparameter enthält. Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgeben, wenn der Kontext verloren gegangen ist.

## Syntax

```js-nolint
getContextAttributes()
```

### Parameter

Keine.

### Rückgabewert

Ein `WebGLContextAttributes`-Objekt, das die tatsächlichen Kontextparameter enthält, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontext verloren gegangen ist.

## Beispiele

Angenommen, es gibt dieses {{HTMLElement("canvas")}}-Element

```html
<canvas id="canvas"></canvas>
```

und diesen WebGL-Kontext

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.getContextAttributes();
```

die `getContextAttributes`-Methode gibt ein Objekt zurück, das die auf diesem Kontext festgelegten Attribute beschreibt, zum Beispiel:

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

Die Kontextattribute können bei der Erstellung des Kontexts mittels der [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)-Methode festgelegt werden:

```js
canvas.getContext("webgl", { antialias: false, depth: false });
```

Weitere Informationen zu den einzelnen Attributen finden Sie unter [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes)
