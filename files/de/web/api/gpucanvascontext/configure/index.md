---
title: "GPUCanvasContext: configure()-Methode"
short-title: configure()
slug: Web/API/GPUCanvasContext/configure
l10n:
  sourceCommit: 46864cb727e633e083e531c42c666e039f5a8d17
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`configure()`**-Methode der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Schnittstelle konfiguriert den Kontext zur Verwendung beim Rendern mit einem gegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice). Beim Aufruf wird die Leinwand zunächst in transparentes Schwarz gelöscht.

## Syntax

```js-nolint
configure(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `alphaMode` {{optional_inline}}
      - : Ein enumerierter Wert, der die Wirkung angibt, die Alpha-Werte auf den Inhalt von Texturen haben, die von [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) zurückgegeben werden, wenn sie gelesen, angezeigt oder als Bildquelle verwendet werden. Mögliche Werte sind:
        - `opaque`: Alpha-Werte werden ignoriert — wenn eine Textur nicht bereits undurchsichtig ist, wird der Alpha-Kanal auf 1.0 gesetzt, wenn sie als Bildquelle oder auf dem Bildschirm angezeigt wird. Dies ist der Standardwert.
        - `premultiplied`: Farbwerte werden mit ihrem Alpha-Wert multipliziert. Zum Beispiel ist 100% Rot bei 50% Alpha `[0.5, 0, 0, 0.5]`.
    - `colorSpace` {{optional_inline}}
      - : Der Farbraum, mit dem Werte angezeigt werden sollen, die in Texturen geschrieben werden, die von `getCurrentTexture()` zurückgegeben werden. Mögliche Werte sind `srgb` (der Standard) und `display-p3`.
    - `device`
      - : Das [`GPUDevice`](/de/docs/Web/API/GPUDevice), von dem die Renderinformationen für den Kontext stammen werden.
    - `format`

      - : Das Format, das Texturen haben werden, die von `getCurrentTexture()` zurückgegeben werden. Dies kann `bgra8unorm`, `rgba8unorm` oder `rgba16float` sein. Das optimale Texturformat für das aktuelle System kann von [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) zurückgegeben werden. Es wird empfohlen, dieses zu verwenden — wenn Sie nicht das bevorzugte Format bei der Konfiguration des Leinwand-Kontextes verwenden, können Sie möglicherweise zusätzlichen Overhead inkassieren, je nach Plattform, wie etwa zusätzliche Texturkopien.

    - `toneMapping` {{optional_inline}}

      - : Ein Objekt, das Parameter angibt, die das Tonemapping für den Kontext definieren — wie der Inhalt der zugehörigen Texturen angezeigt werden soll. Dies ermöglicht es WebGPU, Farben heller als `white` (`#FFFFFF`) zu zeichnen. Mögliche Eigenschaften sind:
        - `mode` {{optional_inline}}
          - : Ein enumerierter Wert, der den Tonemapping-Modus für die Leinwand angibt. Mögliche Werte sind:
            - `standard`
              - : Der Standardwert. Beschränkt gerenderten Inhalt auf den Standard-Dynamikbereich (SDR) des Displays. Dieser Modus wird erreicht, indem alle Farbwerte im Farbraum des Bildschirms auf das Intervall `[0, 1]` geklammert werden.
            - `extended`
              - : Ermöglicht es, Inhalte im vollen Hochdynamikbereich (HDR) des Displays zu rendern, falls verfügbar. Der HDR-Modus erlaubt es, eine breitere Palette an Farben und Helligkeitsstufen anzuzeigen, mit präziseren Anweisungen, welche Farbe in jedem Fall angezeigt werden soll. Dieser Modus entspricht `"standard"` im `[0, 1]`-Bereich des Bildschirms. Clipping oder Projektion wird auf den erweiterten Dynamikbereich des Bildschirms aber nicht auf `[0, 1]` angewendet.

    - `usage` {{optional_inline}}

      - : {{Glossary("Bitwise_flags", "Bitweise Flags")}}, die die erlaubte Verwendung für Texturen angeben, die von `getCurrentTexture()` zurückgegeben werden. Mögliche Werte sind:

        - `GPUTextureUsage.COPY_SRC`: Die Textur kann als Quelle für einen Kopiervorgang verwendet werden, z.B. als Quellargument eines [`GPUCommandEncoder.copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer)-Aufrufs.
        - `GPUTextureUsage.COPY_DST`: Die Textur kann als Ziel eines Kopier-/Schreibvorgangs verwendet werden, z.B. als Zielargument eines [`GPUCommandEncoder.copyTextureToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToTexture)-Aufrufs.
        - `GPUTextureUsage.RENDER_ATTACHMENT`: Die Textur kann als Farb-Anhang in einem Renderpass verwendet werden, z.B. in einer Farbklemmansicht in einem [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf. `GPUTextureUsage.RENDER_ATTACHMENT` ist der Standard-`usage`, aber beachten Sie, dass es nicht automatisch hinzugefügt wird, wenn ein anderer Wert explizit gesetzt wird; in solchen Fällen müssen Sie ihn zusätzlich angeben.
        - `GPUTextureUsage.TEXTURE_BINDING`: Die Textur kann zur Verwendung als gesampelte Textur in einem Shader gebunden werden, z.B. in einem Bindegruppeneintrag in einem [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf.
        - `GPUTextureUsage.STORAGE_BINDING`: Die Textur kann zur Verwendung als Speichertextur in einem Shader gebunden werden, z.B. in einem Bindegruppeneintrag in einem [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf.

        Beachten Sie, dass mehrere mögliche Verwendungen unter Verwendung des [bitweisen ODER-Operators](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können. Zum Beispiel, `usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT`.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von Formaten, die Ansichten erstellt von Texturen verwenden können, die von `getCurrentTexture()` zurückgegeben werden. Siehe [Texture Formats](https://gpuweb.github.io/gpuweb/#texture-formats) für alle möglichen Werte.

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

### HDR `toneMapping`-Demos

Sehen Sie sich das [Particles (HDR)](https://webgpu.github.io/webgpu-samples/?sample=particles)-Beispiel und den [HDR support](https://ccameron-chromium.github.io/webgpu-hdr/example.html)-Test an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
