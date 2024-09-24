---
title: "WebGLRenderingContext: Methode getContextAttributes()"
short-title: getContextAttributes()
slug: Web/API/WebGLRenderingContext/getContextAttributes
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("WebGL")}}

Die Methode **`WebGLRenderingContext.getContextAttributes()`**
gibt ein `WebGLContextAttributes`-Objekt zurück, das die tatsächlichen Kontextparameter enthält. Sie gibt möglicherweise [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück, falls der Kontext verloren gegangen ist.

## Syntax

```js-nolint
getContextAttributes()
```

### Parameter

Keine.

### Rückgabewert

Ein `WebGLContextAttributes`-Objekt, das die tatsächlichen Kontextparameter enthält, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), falls der Kontext verloren gegangen ist.

## Beispiele

Bei dem folgenden {{HTMLElement("canvas")}}-Element

```html
<canvas id="canvas"></canvas>
```

und dem folgenden WebGL-Kontext

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.getContextAttributes();
```

gibt die Methode `getContextAttributes` ein Objekt zurück, das die auf diesem Kontext gesetzten Attribute beschreibt. Beispielsweise:

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

Die Kontextattribute können beim Erstellen des Kontexts mit der
{{domxref("HTMLCanvasElement.getContext()")}}-Methode festgelegt werden:

```js
canvas.getContext("webgl", { antialias: false, depth: false });
```

Siehe {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} für weitere Informationen
über die einzelnen Attribute.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement.getContext()")}}
- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}}
