---
title: "GPUCanvasContext: configure()-Methode"
short-title: configure()
slug: Web/API/GPUCanvasContext/configure
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`configure()`**-Methode der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Schnittstelle konfiguriert den Kontext zur Nutzung für das Rendering mit einem gegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice). Beim Aufruf wird das Canvas zunächst auf transparentes Schwarz gelöscht.

## Syntax

```js-nolint
configure(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `alphaMode` {{optional_inline}}
      - : Ein enumerierter Wert, der den Effekt von Alpha-Werten auf den Inhalt von Texturen, die von [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) zurückgegeben werden, beim Lesen, Anzeigen oder als Bildquelle genutzt, spezifiziert. Mögliche Werte sind:
        - `opaque`: Alpha-Werte werden ignoriert — wenn eine Textur nicht bereits opak ist, wird der Alpha-Kanal auf 1.0 gesetzt, wenn sie als Bildquelle genutzt oder auf dem Bildschirm angezeigt wird. Dies ist der Standardwert.
        - `premultiplied`: Farbwerte werden mit ihrem Alpha-Wert vorvervielfacht. Zum Beispiel ist 100% Rot bei 50% Alpha `[0.5, 0, 0, 0.5]`.
    - `colorSpace` {{optional_inline}}
      - : Der Farbraum, mit dem Werte, die in Texturen geschrieben werden, die von `getCurrentTexture()` zurückgegeben werden, angezeigt werden sollten. Mögliche Werte sind `srgb` (der Standard) und `display-p3`.
    - `device`
      - : Das [`GPUDevice`](/de/docs/Web/API/GPUDevice), von dem die Rendering-Informationen für den Kontext stammen werden.
    - `format`
      - : Das Format, das Texturen haben, die von `getCurrentTexture()` zurückgegeben werden. Dies kann `bgra8unorm`, `rgba8unorm` oder `rgba16float` sein. Das optimale Canvas-Texturformat für das aktuelle System kann von [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) zurückgegeben werden. Die Verwendung dessen wird empfohlen — wenn Sie nicht das bevorzugte Format beim Konfigurieren des Canvas-Kontexts verwenden, können Sie zusätzlichen Overhead verursachen, wie zusätzliche Texturkopien, je nach Plattform.
    - `usage` {{optional_inline}}

      - : [Bitweise Flaggen](/de/docs/Glossary/Bitwise_flags), die die erlaubte Nutzung für Texturen spezifizieren, die von `getCurrentTexture()` zurückgegeben werden. Mögliche Werte sind:

        - `GPUTextureUsage.COPY_SRC`: Die Textur kann als Quelle einer Kopieroperation verwendet werden, zum Beispiel das Quellargument eines [`GPUCommandEncoder.copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer)-Aufrufs.
        - `GPUTextureUsage.COPY_DST`: Die Textur kann als Ziel einer Kopier-/Schreiboperation verwendet werden, zum Beispiel das Zielargument eines [`GPUCommandEncoder.copyTextureToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToTexture)-Aufrufs.
        - `GPUTextureUsage.RENDER_ATTACHMENT`: Die Textur kann als Farb-Anhang in einem Render-Pass verwendet werden, zum Beispiel in einer Farb-Anhang-Ansicht in einem [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf. `GPUTextureUsage.RENDER_ATTACHMENT` ist der Standard-`usage`, aber beachten Sie, dass es nicht automatisch enthalten ist, wenn ein anderer Wert explizit gesetzt wird; in solchen Fällen müssen Sie es zusätzlich einbeziehen.
        - `GPUTextureUsage.TEXTURE_BINDING`: Die Textur kann zur Verwendung als gesampelte Textur in einem Shader gebunden werden, zum Beispiel in einem Eintrag einer Bind-Gruppe in einem [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf.
        - `GPUTextureUsage.STORAGE_BINDING`: Die Textur kann zur Verwendung als Speichertextur in einem Shader gebunden werden, zum Beispiel in einem Eintrag einer Bind-Gruppe in einem [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf.

        Beachten Sie, dass mehrere mögliche Nutzungen unter Verwendung des [bitweisen ODER-Operators](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können. Zum Beispiel `usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT`.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von Formaten, die von Texturen erstellte Ansichten, die von `getCurrentTexture()` zurückgegeben werden, verwenden können. Siehe [Texturformate](https://gpuweb.github.io/gpuweb/#texture-formats) für alle möglichen Werte.

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
