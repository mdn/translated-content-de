---
title: "GPUCanvasContext: configure()-Methode"
short-title: configure()
slug: Web/API/GPUCanvasContext/configure
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`configure()`**-Methode des [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Interfaces konfiguriert den Kontext zur Nutzung mit einem gegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) für das Rendering. Beim Aufruf wird die Leinwand zunächst auf transparentes Schwarz gelöscht.

## Syntax

```js-nolint
configure(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `alphaMode` {{optional_inline}}
      - : Ein enumerierter Wert, der den Effekt festlegt, den Alpha-Werte auf den Inhalt von Texturen haben, die von [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) zurückgegeben werden, wenn sie gelesen, angezeigt oder als Bildquelle verwendet werden. Mögliche Werte sind:
        - `opaque`: Alpha-Werte werden ignoriert — falls eine Textur nicht bereits opak ist, wird der Alpha-Kanal auf 1.0 gesetzt, wenn sie als Bildquelle verwendet oder auf dem Bildschirm angezeigt wird. Dies ist der Standardwert.
        - `premultiplied`: Farbwerte werden mit ihrem Alpha-Wert multipliziert. Zum Beispiel sind 100% Rot bei 50% Alpha `[0.5, 0, 0, 0.5]`.
    - `colorSpace` {{optional_inline}}
      - : Der Farbraum, mit dem Werte, die in Texturen geschrieben werden, die von `getCurrentTexture()` zurückgegeben werden, angezeigt werden sollten. Mögliche Werte sind `srgb` (der Standard) und `display-p3`.
    - `device`
      - : Das [`GPUDevice`](/de/docs/Web/API/GPUDevice), von dem die Renderinformationen für den Kontext kommen.
    - `format`

      - : Das Format, das Texturen haben werden, die von `getCurrentTexture()` zurückgegeben werden. Dies kann `bgra8unorm`, `rgba8unorm` oder `rgba16float` sein. Das optimale Leinwandtexturformat für das aktuelle System kann von [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) zurückgegeben werden. Es wird empfohlen, dies zu verwenden — wenn Sie das bevorzugte Format beim Konfigurieren des Leinwandkontexts nicht verwenden, können zusätzliche Overheads entstehen, wie zusätzliche Texturkopien, je nach Plattform.

    - `toneMapping` {{optional_inline}}

      - : Ein Objekt, das Parameter spezifiziert, die das Tone-Mapping für den Kontext definieren — wie der Inhalt der zugeordneten Texturen angezeigt werden soll. Dies ermöglicht es WebGPU, Farben heller als `white` (`#FFFFFF`) zu zeichnen. Mögliche Eigenschaften sind:
        - `mode` {{optional_inline}}
          - : Ein enumerierter Wert, der den Tone-Mapping-Modus für die Leinwand spezifiziert. Mögliche Werte sind:
            - `standard`
              - : Der Standardwert. Beschränkt gerenderten Inhalt auf den Standard Dynamic Range (SDR) des Displays. Dieser Modus wird erreicht, indem alle Farbwerte im Farbraum des Bildschirms auf das `[0, 1]`-Intervall geklammert werden.
            - `extended`
              - : Ermöglicht es, Inhalt im vollen High Dynamic Range (HDR) des Displays zu rendern, wo verfügbar. HDR-Modus ermöglicht eine breitere Palette von Farben und Helligkeitsstufen mit präziseren Anweisungen, welche Farbe in jedem Fall angezeigt werden soll. Dieser Modus entspricht `"standard"` im `[0, 1]`-Bereich des Bildschirms. Klammert oder projiziert wird in den erweiterten Dynamikbereich des Bildschirms, aber nicht `[0, 1]`.

    - `usage` {{optional_inline}}

      - : {{Glossary("Bitwise_flags", "Bitweise Flags")}}, die die erlaubte Verwendung für Texturen angeben, die von `getCurrentTexture()` zurückgegeben werden. Mögliche Werte sind:

        - `GPUTextureUsage.COPY_SRC`: Die Textur kann als Quelle einer Kopieroperation verwendet werden, zum Beispiel das source-Argument eines [`GPUCommandEncoder.copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer)-Aufrufs.
        - `GPUTextureUsage.COPY_DST`: Die Textur kann als Ziel einer Kopier-/Schreiboperation verwendet werden, zum Beispiel das destination-Argument eines [`GPUCommandEncoder.copyTextureToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToTexture)-Aufrufs.
        - `GPUTextureUsage.RENDER_ATTACHMENT`: Die Textur kann als Farbanhang in einem Renderdurchgang verwendet werden, zum Beispiel in einer Farbansicht in einem [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf. `GPUTextureUsage.RENDER_ATTACHMENT` ist der Standardwert für `usage`, aber beachten Sie, dass es nicht automatisch enthalten ist, wenn ein anderer Wert explizit gesetzt wird; in solchen Fällen müssen Sie es zusätzlich einschließen.
        - `GPUTextureUsage.TEXTURE_BINDING`: Die Textur kann als abgetastete Textur in einem Shader gebunden werden, zum Beispiel in einem Bind Group Entry in einem [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf.
        - `GPUTextureUsage.STORAGE_BINDING`: Die Textur kann als Speichertextur in einem Shader gebunden werden, zum Beispiel in einem Bind Group Entry in einem [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf.

        Beachten Sie, dass mehrere mögliche Verwendungen mithilfe des [Bitweise-ODER-Operators](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) spezifiziert werden können. Zum Beispiel: `usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT`.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von Formaten, die Ansichten verwenden können, die aus Texturen erstellt wurden, die von `getCurrentTexture()` zurückgegeben werden. Siehe [Texture Formats](https://gpuweb.github.io/gpuweb/#texture-formats) für alle möglichen Werte.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Grundlegende Verwendung

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

### HDR `toneMapping`-Demos

Sehen Sie sich das [Particles (HDR)](https://webgpu.github.io/webgpu-samples/?sample=particles)-Beispiel und den [HDR support](https://ccameron-chromium.github.io/webgpu-hdr/example.html)-Test an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
