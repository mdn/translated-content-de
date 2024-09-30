---
title: "GPURenderPassEncoder: setBlendConstant()-Methode"
short-title: setBlendConstant()
slug: Web/API/GPURenderPassEncoder/setBlendConstant
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setBlendConstant()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt die konstante Mischfarbe und Alphawerte, die mit den `"constant"`- und `"one-minus-constant"`-Mischfaktoren verwendet werden (wie im Deskriptor der Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) im `blend`-Eigenschaft gesetzt).

## Syntax

```js-nolint
setBlendConstant(color)
```

### Parameter

- `color`

  - : Ein Objekt oder Array, das die zu verwendende Farbe beim Mischen repräsentiert — die `r`, `g`, `b` und `a`-Komponenten werden als Gleitkommazahlen zwischen 0,0 und 1,0 dargestellt.

    Im Folgenden ein Objektbeispiel:

    ```js
    const color = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };
    ```

    Das äquivalente Array sähe so aus:

    ```js
    const color = [0.0, 0.5, 1.0, 1.0];
    ```

> [!NOTE]
> Wenn kein `setBlendConstant()`-Aufruf durchgeführt wird, ist der Standardwert für die Mischkonstante `(0, 0, 0, 0)` für jeden Rendering-Durchlauf.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

```js
// ...

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.setBlendConstant([1.0, 0.0, 0.0, 1.0]);
passEncoder.draw(3);

passEncoder.end();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
