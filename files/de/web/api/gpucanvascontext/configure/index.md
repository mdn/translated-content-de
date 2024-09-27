---
title: "GPUCanvasContext: configure() Methode"
short-title: configure()
slug: Web/API/GPUCanvasContext/configure
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`configure()`**-Methode der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Schnittstelle konfiguriert den Kontext, der für das Rendering mit einem gegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) verwendet wird. Bei Aufruf wird das Canvas zunächst in transparentes Schwarz gelöscht.

## Syntax

```js-nolint
configure(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `alphaMode` {{optional_inline}}
      - : Ein enumerierter Wert, der den Effekt spezifiziert, den Alpha-Werte auf den Inhalt von Texturen haben, die von [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) zurückgegeben werden, wenn sie gelesen, angezeigt oder als Bildquelle verwendet werden. Mögliche Werte sind:
        - `opaque`: Alpha-Werte werden ignoriert — wenn eine Textur noch nicht undurchsichtig ist, wird der Alphakanal auf 1.0 gesetzt, wenn sie als Bildquelle verwendet oder auf dem Bildschirm angezeigt wird. Dies ist der Standardwert.
        - `premultiplied`: Farbwerte werden mit ihrem Alphawert multipliziert. Zum Beispiel sind 100% Rot bei 50% Alpha `[0.5, 0, 0, 0.5]`.
    - `colorSpace` {{optional_inline}}
      - : Der Farbraum, mit dem die in Texturen geschriebenen Werte angezeigt werden sollten, die von `getCurrentTexture()` zurückgegeben werden. Mögliche Werte sind `srgb` (der Standard) und `display-p3`.
    - `device`
      - : Das [`GPUDevice`](/de/docs/Web/API/GPUDevice), von dem die Rendering-Informationen für den Kontext kommen.
    - `format`
      - : Das Format, das die von `getCurrentTexture()` zurückgegebenen Texturen haben werden. Dies kann `bgra8unorm`, `rgba8unorm` oder `rgba16float` sein. Das optimale Canvas-Texturformat für das aktuelle System kann von [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) zurückgegeben werden. Es wird empfohlen, dies zu verwenden — wenn Sie das bevorzugte Format nicht verwenden, wenn Sie den Canvas-Kontext konfigurieren, können zusätzliche Überheadkosten entstehen, wie z.B. zusätzliche Texturkopien, abhängig von der Plattform.
    - `usage` {{optional_inline}}

      - : [Bitweise Flags](/de/docs/Glossary/Bitwise_flags), die die zulässige Verwendung für Texturen spezifizieren, die von `getCurrentTexture()` zurückgegeben werden. Mögliche Werte sind:

        - `GPUTextureUsage.COPY_SRC`: Die Textur kann als Quelle einer Kopieroperation verwendet werden, beispielsweise als Quellargument eines [`GPUCommandEncoder.copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer)-Aufrufs.
        - `GPUTextureUsage.COPY_DST`: Die Textur kann als Ziel einer Kopier-/Schreiboperation verwendet werden, beispielsweise als Zielargument eines [`GPUCommandEncoder.copyTextureToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToTexture)-Aufrufs.
        - `GPUTextureUsage.RENDER_ATTACHMENT`: Die Textur kann als Farbanhang in einem Renderpass verwendet werden, beispielsweise in einer Farbanhang-Ansicht in einem [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf. `GPUTextureUsage.RENDER_ATTACHMENT` ist die Standardverwendung, aber beachten Sie, dass es nicht automatisch eingeschlossen wird, wenn ein anderer Wert explizit gesetzt wird; in solchen Fällen müssen Sie ihn zusätzlich einbeziehen.
        - `GPUTextureUsage.TEXTURE_BINDING`: Die Textur kann gebunden werden, um als abgetastete Textur in einem Shader verwendet zu werden, beispielsweise in einem Bind-Group-Eintrag in einem [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf.
        - `GPUTextureUsage.STORAGE_BINDING`: Die Textur kann gebunden werden, um als Speichertextur in einem Shader verwendet zu werden, beispielsweise in einem Bind-Group-Eintrag in einem [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf.

        Beachten Sie, dass mehrere mögliche Nutzungen mit dem [bitweisen ODER-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können. Zum Beispiel `usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT`.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von Formaten, die Ansichten verwenden können, die aus Texturen erstellt werden, die von `getCurrentTexture()` zurückgegeben werden. Siehe [Texturformate](https://gpuweb.github.io/gpuweb/#texture-formats) für alle möglichen Werte.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
