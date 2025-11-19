---
title: "GPUCanvasContext: configure() Methode"
short-title: configure()
slug: Web/API/GPUCanvasContext/configure
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`configure()`**-Methode der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Schnittstelle konfiguriert den Kontext zur Verwendung für das Rendering mit einem angegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice). Beim Aufruf wird die Leinwand zunächst auf transparentes Schwarz gelöscht.

## Syntax

```js-nolint
configure(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `alphaMode` {{optional_inline}}
      - : Ein enumerierter Wert, der die Wirkung von Alphawerten auf den Inhalt von Texturen, die von [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) zurückgegeben werden, spezifiziert, wenn diese gelesen, angezeigt oder als Bildquelle verwendet werden. Mögliche Werte sind:
        - `opaque`: Alphawerte werden ignoriert – wenn eine Textur nicht bereits undurchsichtig ist, wird der Alphakanal auf 1,0 gesetzt, wenn sie als Bildquelle verwendet oder auf dem Bildschirm angezeigt wird. Dies ist der Standardwert.
        - `premultiplied`: Farbwerte werden durch ihren Alphawert vorgemischt. Zum Beispiel sind 100% Rot bei 50% Alpha `[0.5, 0, 0, 0.5]`.
    - `colorSpace` {{optional_inline}}
      - : Der Farbraum, mit dem Werte, die in Texturen geschrieben werden, die von `getCurrentTexture()` zurückgegeben werden, angezeigt werden sollten. Mögliche Werte sind `srgb` (der Standard) und `display-p3`.
    - `device`
      - : Das [`GPUDevice`](/de/docs/Web/API/GPUDevice), von dem die Renderinformationen für den Kontext stammen.
    - `format`
      - : Das Format, das Texturen haben, die von `getCurrentTexture()` zurückgegeben werden. Dies kann `bgra8unorm`, `rgba8unorm` oder `rgba16float` sein. Das optimale Canvas-Texturformat für das aktuelle System kann von [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) zurückgegeben werden. Die Verwendung davon wird empfohlen – wenn Sie das bevorzugte Format beim Konfigurieren des Canvas-Kontexts nicht verwenden, kann zusätzlicher Overhead entstehen, wie zusätzliche Texturkopien, abhängig von der Plattform.

    - `toneMapping` {{optional_inline}}
      - : Ein Objekt, das Parameter spezifiziert, die das Tone Mapping für den Kontext definieren – wie der Inhalt der zugeordneten Texturen angezeigt werden soll. Dies ermöglicht es WebGPU, Farben heller als `weiß` (`#FFFFFF`) zu zeichnen. Mögliche Eigenschaften sind:
        - `mode` {{optional_inline}}
          - : Ein enumerierter Wert, der den Tone Mapping-Modus für das Canvas spezifiziert. Mögliche Werte umfassen:
            - `standard`
              - : Der Standardwert. Beschränkt den gerenderten Inhalt auf den Standarddynamikbereich (SDR) des Displays. Dieser Modus wird erreicht, indem alle Farbwerte im Farbraum des Bildschirms auf das `[0, 1]`-Intervall begrenzt werden.
            - `extended`
              - : Erlaubt das Rendern von Inhalten im vollen High Dynamic Range (HDR) des Displays, wo verfügbar. HDR-Modus erlaubt es, einen größeren Bereich von Farben und Helligkeitsstufen anzuzeigen, mit präziseren Anweisungen, welche Farbe in jedem Fall angezeigt werden soll. Dieser Modus entspricht `"standard"` im `[0, 1]`-Bereich des Bildschirms. Das Begrenzen oder Projizieren erfolgt auf den erweiterten Dynamikbereich des Bildschirms, aber nicht auf `[0, 1]`.

    - `usage` {{optional_inline}}
      - : {{Glossary("Bitwise_flags", "Bitweise Flags")}}, die die erlaubte Verwendung für Texturen, die von `getCurrentTexture()` zurückgegeben werden, spezifizieren. Mögliche Werte sind:
        - `GPUTextureUsage.COPY_SRC`: Die Textur kann als Quelle einer Kopieroperation verwendet werden, zum Beispiel das source-Argument eines Aufrufs von [`GPUCommandEncoder.copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer).
        - `GPUTextureUsage.COPY_DST`: Die Textur kann als Ziel einer Kopier-/Schreiboperation verwendet werden, zum Beispiel das destination-Argument eines Aufrufs von [`GPUCommandEncoder.copyTextureToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToTexture).
        - `GPUTextureUsage.RENDER_ATTACHMENT`: Die Textur kann als Farbanhang in einem Render-Pass verwendet werden, zum Beispiel in einer Farbansicht in einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass). `GPUTextureUsage.RENDER_ATTACHMENT` ist die Standard-`usage`, aber beachten Sie, dass sie nicht automatisch enthalten ist, wenn ein anderer Wert explizit gesetzt wird; in solchen Fällen müssen Sie sie zusätzlich aufnehmen.
        - `GPUTextureUsage.TEXTURE_BINDING`: Die Textur kann zur Verwendung als abgetastete Textur in einem Shader gebunden werden, zum Beispiel in einem Bindungsgruppeneintrag in einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup).
        - `GPUTextureUsage.STORAGE_BINDING`: Die Textur kann zur Verwendung als Speichertextur in einem Shader gebunden werden, zum Beispiel in einem Bindungsgruppeneintrag in einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup).

        Beachten Sie, dass mehrere mögliche Nutzungen mithilfe des [bitweisen Oder-Operators](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) spezifiziert werden können. Zum Beispiel `usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT`.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von Formaten, die Ansichten, die aus Texturen erstellt wurden, die von `getCurrentTexture()` zurückgegeben werden, verwenden dürfen. Siehe [Texturformate](https://gpuweb.github.io/gpuweb/#texture-formats) für alle möglichen Werte.

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

### HDR `toneMapping` Demos

Sehen Sie das [Particles (HDR)](https://webgpu.github.io/webgpu-samples/?sample=particles) Beispiel und den [HDR-Support](https://ccameron-chromium.github.io/webgpu-hdr/example.html) Test.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
