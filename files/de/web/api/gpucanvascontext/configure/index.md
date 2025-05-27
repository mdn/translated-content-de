---
title: "GPUCanvasContext: configure()-Methode"
short-title: configure()
slug: Web/API/GPUCanvasContext/configure
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`configure()`**-Methode der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Schnittstelle konfiguriert den Kontext zur Verwendung für das Rendering mit einem gegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice). Beim Aufruf wird die Leinwand zunächst in transparentes Schwarz gelöscht.

## Syntax

```js-nolint
configure(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `alphaMode` {{optional_inline}}
      - : Ein enumerierter Wert, der den Effekt angibt, den Alphawerte auf den Inhalt von Texturen haben, die von [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) zurückgegeben, angezeigt oder als Bildquelle verwendet werden. Mögliche Werte sind:
        - `opaque`: Alphawerte werden ignoriert — wenn eine Textur noch nicht opak ist, wird der Alphakanal auf 1.0 gesetzt, wenn sie als Bildquelle verwendet oder auf dem Bildschirm angezeigt wird. Dies ist der Standardwert.
        - `premultiplied`: Farbwerte sind mit ihrem Alphawert vorkompliziert. Beispielsweise ist 100% Rot bei 50% Alpha `[0.5, 0, 0, 0.5]`.
    - `colorSpace` {{optional_inline}}
      - : Der Farbraum, der für die Anzeige von in Texturen geschriebenen Werten verwendet werden soll, die von `getCurrentTexture()` zurückgegeben werden. Mögliche Werte sind `srgb` (der Standard) und `display-p3`.
    - `device`
      - : Das [`GPUDevice`](/de/docs/Web/API/GPUDevice), von dem die Rendering-Informationen für den Kontext stammen.
    - `format`

      - : Das Format, das die Texturen haben werden, die von `getCurrentTexture()` zurückgegeben werden. Dies kann `bgra8unorm`, `rgba8unorm` oder `rgba16float` sein. Das optimale Leinwand-Texturformat für das aktuelle System kann von [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) zurückgegeben werden. Es wird empfohlen, dieses zu verwenden — wenn Sie das bevorzugte Format nicht verwenden, wenn Sie den Leinwandkontext konfigurieren, können zusätzliche Overheads entstehen, wie zusätzliche Texturkopien, abhängig von der Plattform.

    - `toneMapping` {{optional_inline}}

      - : Ein Objekt, das Parameter spezifiziert, die die Tonzuordnung des Kontexts definieren — wie der Inhalt der zugehörigen Texturen angezeigt werden soll. Dies ermöglicht es WebGPU, Farben heller als `weiß` (`#FFFFFF`) zu zeichnen. Mögliche Eigenschaften sind:
        - `mode` {{optional_inline}}
          - : Ein enumerierter Wert, der den Tonzuordnungsmodus für die Leinwand spezifiziert. Mögliche Werte umfassen:
            - `standard`
              - : Der Standardwert. Beschränkt den gerenderten Inhalt auf den Standard-Dynamikumfang (SDR) des Displays. Dieser Modus wird erreicht, indem alle Farbwerte im Farbraum des Bildschirms auf das Intervall `[0, 1]` beschränkt werden.
            - `extended`
              - : Erlaubt es, Inhalt im vollen Hochdynamikumfang (HDR) des Displays zu rendern, wo verfügbar. HDR-Modus erlaubt es, einen größeren Bereich an Farben und Helligkeitsstufen anzuzeigen, mit präziseren Anweisungen, welche Farbe in jedem Fall angezeigt werden soll. Dieser Modus entspricht `"standard"` im `[0, 1]` Bereich des Bildschirms. Das Begrenzen oder Projektieren erfolgt auf den erweiterten Dynamikbereich des Bildschirms, jedoch nicht auf `[0, 1]`.

    - `usage` {{optional_inline}}

      - : {{Glossary("Bitwise_flags", "Bitweise Flags")}}, die die zulässige Verwendung für Texturen angeben, die von `getCurrentTexture()` zurückgegeben werden. Mögliche Werte sind:

        - `GPUTextureUsage.COPY_SRC`: Die Textur kann als Quelle einer Kopieroperation verwendet werden, zum Beispiel das Quell-Argument eines Aufrufs von [`GPUCommandEncoder.copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer).
        - `GPUTextureUsage.COPY_DST`: Die Textur kann als Ziel einer Kopier-/Schreiboperation verwendet werden, zum Beispiel das Ziel-Argument eines Aufrufs von [`GPUCommandEncoder.copyTextureToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToTexture).
        - `GPUTextureUsage.RENDER_ATTACHMENT`: Die Textur kann als Farbanhang in einem Render-Durchgang verwendet werden, zum Beispiel in einer Farbanhangsansicht in einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass). `GPUTextureUsage.RENDER_ATTACHMENT` ist das Standard-`usage`, beachten Sie jedoch, dass dies nicht automatisch enthalten ist, wenn ein anderer Wert explizit gesetzt wird; in solchen Fällen müssen Sie es zusätzlich einschließen.
        - `GPUTextureUsage.TEXTURE_BINDING`: Die Textur kann gebunden werden, um als abgetastete Textur in einem Shader verwendet zu werden, zum Beispiel in einem Bindgruppen-Eintrag in einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup).
        - `GPUTextureUsage.STORAGE_BINDING`: Die Textur kann gebunden werden, um als Speichertextur in einem Shader verwendet zu werden, zum Beispiel in einem Bindgruppen-Eintrag in einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup).

        Beachten Sie, dass mehrere mögliche Verwendungen mit dem [bitweisen ODER-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können. Zum Beispiel `usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT`.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von Formaten, die Ansichten verwenden können, die aus Texturen erstellt wurden, die von `getCurrentTexture()` zurückgegeben werden. Alle möglichen Werte finden Sie unter [Texture Formats](https://gpuweb.github.io/gpuweb/#texture-formats).

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

Siehe das [Particles (HDR)](https://webgpu.github.io/webgpu-samples/?sample=particles) Beispiel und den [HDR support](https://ccameron-chromium.github.io/webgpu-hdr/example.html) Test.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
