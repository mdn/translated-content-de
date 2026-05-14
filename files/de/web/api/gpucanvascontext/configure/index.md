---
title: "GPUCanvasContext: Methode configure()"
short-title: configure()
slug: Web/API/GPUCanvasContext/configure
l10n:
  sourceCommit: e5909a8f548695b72649ce32216c8fada21479c9
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`configure()`**-Methode der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Schnittstelle konfiguriert den Kontext zur Verwendung für das Rendering mit einem gegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice). Beim Aufruf wird das Canvas zunächst auf transparentes Schwarz geleert.

## Syntax

```js-nolint
configure(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `alphaMode` {{optional_inline}}
      - : Ein enumerierter Wert, der den Effekt angibt, den Alpha-Werte auf den Inhalt der von [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) zurückgegebenen Texturen beim Lesen, Anzeigen oder Verwenden als Bildquelle haben werden. Mögliche Werte sind:
        - `opaque`: Alpha-Werte werden ignoriert — wenn eine Textur noch nicht opak ist, wird der Alpha-Kanal auf 1,0 gelöscht, wenn sie als Bildquelle verwendet oder auf dem Bildschirm angezeigt wird. Dies ist der Standardwert.
        - `premultiplied`: Farbwerte werden mit ihrem Alpha-Wert multipliziert. Zum Beispiel sind 100 % Rot bei 50 % Alpha `[0.5, 0, 0, 0.5]`.
    - `colorSpace` {{optional_inline}}
      - : Der Farbraum, mit dem Werte in Texturen, die von `getCurrentTexture()` zurückgegeben werden, angezeigt werden sollen. Mögliche Werte sind `srgb` (der Standardwert) und `display-p3`.
    - `device`
      - : Das [`GPUDevice`](/de/docs/Web/API/GPUDevice), das die Rendering-Informationen für den Kontext liefert.
    - `format`
      - : Das Format, das Texturen haben werden, die von `getCurrentTexture()` zurückgegeben werden. Dies kann `bgra8unorm`, `rgba8unorm` oder `rgba16float` sein. Das optimale Canvas-Texturformat für das aktuelle System kann von [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) zurückgegeben werden. Es wird empfohlen, dieses zu verwenden — wenn Sie das bevorzugte Format beim Konfigurieren des Canvas-Kontexts nicht verwenden, können zusätzliche Overheads auftreten, z. B. zusätzliche Texturkopien, je nach Plattform.

    - `toneMapping` {{optional_inline}}
      - : Ein Objekt, das Parameter spezifiziert, die das Tone Mapping für den Kontext definieren — wie der Inhalt der zugehörigen Texturen angezeigt werden soll. Dies ermöglicht es WebGPU, Farben heller als `white` (`#FFFFFF`) zu zeichnen. Mögliche Eigenschaften sind:
        - `mode` {{optional_inline}}
          - : Ein enumerierter Wert, der den Tone-Mapping-Modus für das Canvas angibt. Mögliche Werte sind:
            - `standard`
              - : Der Standardwert. Beschränkt den gerenderten Inhalt auf den Standard-Dynamikbereich (SDR) des Displays. Dieser Modus wird erreicht, indem alle Farbwerte im Farbraum des Bildschirms auf das Intervall `[0, 1]` eingeschränkt werden.
            - `extended`
              - : Ermöglicht das Rendern von Inhalten im gesamten Hochdynamikbereich (HDR) des Displays, sofern verfügbar. Der HDR-Modus erlaubt, eine größere Bandbreite an Farben und Helligkeitsebenen anzuzeigen, mit präziseren Anweisungen, welche Farbe in jedem Fall angezeigt werden soll. Dieser Modus entspricht `"standard"` im `[0, 1]`-Bereich des Bildschirms. Die Einschränkung oder Projektion erfolgt auf den erweiterten Dynamikbereich des Bildschirms, jedoch nicht auf `[0, 1]`.

    - `usage` {{optional_inline}}
      - : {{Glossary("Bitwise_flags", "Bitweise Flags")}} zur Angabe der erlaubten Nutzung für Texturen, die von `getCurrentTexture()` zurückgegeben werden. Mögliche Werte sind:
        - `GPUTextureUsage.COPY_SRC`: Die Textur kann als Quelle einer Kopieroperation verwendet werden, beispielsweise als Argument `source` eines Aufrufs von [`GPUCommandEncoder.copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer).
        - `GPUTextureUsage.COPY_DST`: Die Textur kann als Ziel einer Kopier-/Schreiboperation verwendet werden, beispielsweise als Argument `destination` eines Aufrufs von [`GPUCommandEncoder.copyTextureToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToTexture).
        - `GPUTextureUsage.RENDER_ATTACHMENT`: Die Textur kann als Farbanhang in einem Renderpass verwendet werden, beispielsweise in einer Farbanhangansicht in einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass). `GPUTextureUsage.RENDER_ATTACHMENT` ist der Standardwert für `usage`, aber beachten Sie, dass dieser nicht automatisch enthalten ist, wenn ein anderer Wert explizit gesetzt wird; in solchen Fällen müssen Sie ihn zusätzlich einbeziehen.
        - `GPUTextureUsage.TEXTURE_BINDING`: Die Textur kann für die Verwendung als abgetastete Textur in einem Shader gebunden werden, beispielsweise in einem Bindgruppeeintrag in einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup).
        - `GPUTextureUsage.STORAGE_BINDING`: Die Textur kann für die Verwendung als Speicherungstextur in einem Shader gebunden werden, beispielsweise in einem Bindgruppeeintrag in einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup).

        Beachten Sie, dass mehrere mögliche Nutzungen unter Verwendung des [bitweisen OR-Operators](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) spezifiziert werden können. Zum Beispiel `usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT`.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von Formaten, welches Formate enthält, die Ansichten von Texturen, die von `getCurrentTexture()` zurückgegeben werden, verwenden dürfen. Siehe [Texture Formats](https://gpuweb.github.io/gpuweb/#texture-formats) für alle möglichen Werte.

### Rückgabewert

Kein (`undefined`).

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn `usage` das `TRANSIENT_ATTACHMENT`-Bit enthält.

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

### HDR-`toneMapping`-Demos

Siehe das Beispiel [Particles (HDR)](https://webgpu.github.io/webgpu-samples/?sample=particles) und den Test [HDR support](https://ccameron-chromium.github.io/webgpu-hdr/example.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
