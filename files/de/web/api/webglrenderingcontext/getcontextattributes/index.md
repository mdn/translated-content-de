---
title: "WebGLRenderingContext: getContextAttributes() Methode"
short-title: getContextAttributes()
slug: Web/API/WebGLRenderingContext/getContextAttributes
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getContextAttributes()`**-Methode
gibt ein `WebGLContextAttributes`-Objekt zurück, das die tatsächlichen Kontextparameter enthält. Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgeben, wenn der Kontext verloren geht.

## Syntax

```js-nolint
getContextAttributes()
```

### Parameter

Keine.

### Rückgabewert

Ein `WebGLContextAttributes`-Objekt, das die tatsächlichen Kontextparameter enthält, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontext verloren geht.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}}-Element

```html
<canvas id="canvas"></canvas>
```

und dieser WebGL-Kontext

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.getContextAttributes();
```

Die `getContextAttributes`-Methode gibt ein Objekt zurück, das die auf diesen Kontext gesetzten Attribute beschreibt, zum Beispiel:

```json
{
  "alpha": true,
  "antialias": true,
  "depth": true,
  "failIfMajorPerformanceCaveat": false,
  "powerPreference": "default",
  "premultipliedAlpha": true,
  "preserveDrawingBuffer": false,
  "stencil": false,
  "desynchronized": false
}
```

Die Kontextattribute können beim Erstellen des Kontexts mit der
[`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)-Methode gesetzt werden:

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
