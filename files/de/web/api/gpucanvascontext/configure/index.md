---
title: "GPUCanvasContext: configure() Methode"
short-title: configure()
slug: Web/API/GPUCanvasContext/configure
l10n:
  sourceCommit: ca6a51e5335df951c1d5b71593f84811697f4ce6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`configure()`**-Methode der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Schnittstelle konfiguriert den Kontext zur Verwendung mit einem gegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) für das Rendering. Bei Aufruf wird die Leinwand zunächst auf transparentes Schwarz gelöscht.

## Syntax

```js-nolint
configure(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `alphaMode` {{optional_inline}}
      - : Ein enumerierter Wert, der den Effekt angibt, den Alphawerte auf den Inhalt von Texturen haben, die von [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) zurückgegeben werden, wenn sie gelesen, angezeigt oder als Bildquelle verwendet werden. Mögliche Werte sind:
        - `opaque`: Alphawerte werden ignoriert — wenn eine Textur nicht bereits undurchsichtig ist, wird der Alphakanal auf 1.0 gesetzt, wenn sie als Bildquelle verwendet oder auf dem Bildschirm angezeigt wird. Dies ist der Standardwert.
        - `premultiplied`: Farbwerte werden mit ihrem Alphawert multipliziert. Zum Beispiel ist 100% Rot bei 50% Alpha `[0.5, 0, 0, 0.5]`.
    - `colorSpace` {{optional_inline}}
      - : Der Farbraum, mit dem die in Texturen geschriebenen Werte dargestellt werden sollten, die von `getCurrentTexture()` zurückgegeben werden. Mögliche Werte sind `srgb` (der Standard) und `display-p3`.
    - `device`
      - : Das [`GPUDevice`](/de/docs/Web/API/GPUDevice), aus dem die Rendering-Informationen für den Kontext stammen.
    - `format`

      - : Das Format, das die Texturen haben werden, die von `getCurrentTexture()` zurückgegeben werden. Dies kann `bgra8unorm`, `rgba8unorm` oder `rgba16float` sein. Das optimale Leinwand-Texturformat für das aktuelle System kann von [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) zurückgegeben werden. Es wird empfohlen, dieses zu verwenden — wenn Sie nicht das bevorzugte Format bei der Konfiguration des Leinwandkontextes verwenden, kann zusätzlicher Aufwand entstehen, wie z.B. zusätzliche Texturkopien, abhängig von der Plattform.

    - `toneMapping` {{optional_inline}}

      - : Ein Objekt, das Parameter angibt, die das Tone Mapping für den Kontext definieren — wie die Inhalte der zugehörigen Texturen angezeigt werden sollen. Dies erlaubt es WebGPU, Farben heller als `weiß` (`#FFFFFF`) zu zeichnen. Mögliche Eigenschaften sind:
        - `mode` {{optional_inline}}
          - : Ein enumerierter Wert, der den Tone Mapping Modus für die Leinwand angibt. Mögliche Werte umfassen:
            - `standard`
              - : Der Standardwert. Beschränkt den gerenderten Inhalt auf den Standard-Dynamikbereich (SDR) des Displays. Dieser Modus wird erreicht, indem alle Farbwerte im Farbraum des Bildschirms auf das Intervall `[0, 1]` geklemmt werden.
            - `extended`
              - : Erlaubt es, Inhalte im gesamten hohen Dynamikbereich (HDR) des Displays darzustellen, wenn verfügbar. Der HDR-Modus erlaubt eine größere Farbpalette und Helligkeitsstufen mit präziseren Anweisungen, welche Farbe in jedem Fall dargestellt werden soll. Dieser Modus entspricht `"standard"` im `[0, 1]`-Bereich des Bildschirms. Clamping oder Projektion wird auf den erweiterten Dynamikbereich des Bildschirms durchgeführt, aber nicht auf `[0, 1]`.

    - `usage` {{optional_inline}}

      - : {{Glossary("Bitwise_flags", "Bitweise Flags")}}, die die erlaubte Nutzung für Texturen angeben, die von `getCurrentTexture()` zurückgegeben werden. Mögliche Werte sind:

        - `GPUTextureUsage.COPY_SRC`: Die Textur kann als Quelle einer Kopieroperation verwendet werden, z.B. als Quellargument eines Aufrufs von [`GPUCommandEncoder.copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer).
        - `GPUTextureUsage.COPY_DST`: Die Textur kann als Ziel einer Kopier-/Schreiboperation verwendet werden, z.B. als Zielargument eines Aufrufs von [`GPUCommandEncoder.copyTextureToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToTexture).
        - `GPUTextureUsage.RENDER_ATTACHMENT`: Die Textur kann als Farbanhang in einem Render-Pass verwendet werden, z.B. in einer Farbanhangsansicht in einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass). `GPUTextureUsage.RENDER_ATTACHMENT` ist die Standard-`usage`, aber beachten Sie, dass es nicht automatisch eingeschlossen wird, wenn ein anderer Wert explizit eingestellt ist; in solchen Fällen müssen Sie es zusätzlich einbeziehen.
        - `GPUTextureUsage.TEXTURE_BINDING`: Die Textur kann zur Nutzung als abgetastete Textur in einem Shader gebunden werden, z.B. in einem Bindegruppen-Eintrag in einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup).
        - `GPUTextureUsage.STORAGE_BINDING`: Die Textur kann zur Nutzung als Speichertextur in einem Shader gebunden werden, z.B. in einem Bindegruppen-Eintrag in einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup).

        Beachten Sie, dass mehrere mögliche Nutzungen mit dem [bitweisen Oder-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können. Zum Beispiel `usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT`.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von Formaten, die Ansichten verwenden können, die von Texturen erstellt wurden, die von `getCurrentTexture()` zurückgegeben werden. Siehe [Texturformate](https://gpuweb.github.io/gpuweb/#texture-formats) für alle möglichen Werte.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Grundlegende Verwendung

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

### HDR-`toneMapping`-Demos

Siehe das [Partikel (HDR)](https://webgpu.github.io/webgpu-samples/?sample=particles)-Beispiel und den [HDR-Unterstützung](https://ccameron-chromium.github.io/webgpu-hdr/example.html)-Test.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
