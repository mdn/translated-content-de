---
title: "GPUCanvasContext: configure() Methode"
short-title: configure()
slug: Web/API/GPUCanvasContext/configure
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`configure()`**-Methode der {{domxref("GPUCanvasContext")}}-Schnittstelle konfiguriert den Kontext zur Nutzung für das Rendering mit einem gegebenen {{domxref("GPUDevice")}}. Beim Aufruf wird die Leinwand zunächst auf transparentes Schwarz gelöscht.

## Syntax

```js-nolint
configure(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `alphaMode` {{optional_inline}}
      - : Ein enumerierter Wert, der den Effekt spezifiziert, den Alphawerte auf den Inhalt der von {{domxref("GPUCanvasContext.getCurrentTexture()", "getCurrentTexture()")}} zurückgegebenen Texturen beim Lesen, Anzeigen oder Verwenden als Bildquelle haben. Mögliche Werte sind:
        - `opaque`: Alphawerte werden ignoriert – wenn eine Textur noch nicht undurchsichtig ist, wird der Alphakanal auf 1.0 gesetzt, wenn sie als Bildquelle verwendet oder auf dem Bildschirm angezeigt wird. Dies ist der Standardwert.
        - `premultiplied`: Farbwerte werden mit ihrem Alphawert multipliziert. Zum Beispiel sind 100% Rot bei 50% Alpha `[0.5, 0, 0, 0.5]`.
    - `colorSpace` {{optional_inline}}
      - : Der Farbraum, mit dem die Werte angezeigt werden sollen, die in von `getCurrentTexture()` zurückgegebene Texturen geschrieben wurden. Mögliche Werte sind `srgb` (der Standard) und `display-p3`.
    - `device`
      - : Das {{domxref("GPUDevice")}}, von dem die Rendering-Informationen für den Kontext stammen werden.
    - `format`
      - : Das Format, das die von `getCurrentTexture()` zurückgegebenen Texturen haben werden. Dies kann `bgra8unorm`, `rgba8unorm` oder `rgba16float` sein. Das optimale Leinwandtexturformat für das aktuelle System kann von {{domxref("GPU.getPreferredCanvasFormat()")}} zurückgegeben werden. Es wird empfohlen, dieses zu verwenden – wenn Sie das bevorzugte Format beim Konfigurieren des Leinwandkontexts nicht verwenden, können zusätzliche Overheads wie zusätzliche Texturkopien auftreten, abhängig von der Plattform.
    - `usage` {{optional_inline}}

      - : {{glossary("Bitwise flags")}}, die die erlaubte Nutzung für von `getCurrentTexture()` zurückgegebene Texturen angeben. Mögliche Werte sind:

        - `GPUTextureUsage.COPY_SRC`: Die Textur kann als Quelle einer Kopieroperation verwendet werden, beispielsweise als source-Argument eines {{domxref("GPUCommandEncoder.copyTextureToBuffer()")}}-Aufrufs.
        - `GPUTextureUsage.COPY_DST`: Die Textur kann als Ziel einer Kopier-/Schreiboperation verwendet werden, beispielsweise als Ziel-Argument eines {{domxref("GPUCommandEncoder.copyTextureToTexture()")}}-Aufrufs.
        - `GPUTextureUsage.RENDER_ATTACHMENT`: Die Textur kann als Farbanhang in einem Render-Pass verwendet werden, beispielsweise in einem Farbanhangs-View in einem {{domxref("GPUCommandEncoder.beginRenderPass()")}}-Aufruf. `GPUTextureUsage.RENDER_ATTACHMENT` ist der Standard-`usage`, wird jedoch nicht automatisch hinzugefügt, wenn explizit ein anderer Wert gesetzt wird; in solchen Fällen müssen Sie ihn zusätzlich einschließen.
        - `GPUTextureUsage.TEXTURE_BINDING`: Die Textur kann gebunden werden, um als gesampelte Textur in einem Shader verwendet zu werden, beispielsweise in einem Bind-Group-Eintrag in einem {{domxref("GPUDevice.createBindGroup()")}}-Aufruf.
        - `GPUTextureUsage.STORAGE_BINDING`: Die Textur kann gebunden werden, um als Speichert-Textur in einem Shader verwendet zu werden, beispielsweise in einem Bind-Group-Eintrag in einem {{domxref("GPUDevice.createBindGroup()")}}-Aufruf.

        Beachten Sie, dass mehrere mögliche Nutzungen unter Verwendung des [bitweisen OR-Operators](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können. Beispielsweise `usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT`.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von Formaten, die von Texturen zurückgegebene Ansichten `getCurrentTexture()` verwenden dürfen. Sehen Sie [Texture Formats](https://gpuweb.github.io/gpuweb/#texture-formats) für alle möglichen Werte.

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
