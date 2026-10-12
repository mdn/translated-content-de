---
title: "GPUCanvasContext: configure()-Methode"
short-title: configure()
slug: Web/API/GPUCanvasContext/configure
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`configure()`**-Methode der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Schnittstelle konfiguriert den Kontext für das Rendering mit einem bestimmten [`GPUDevice`](/de/docs/Web/API/GPUDevice). Beim Aufruf wird das Canvas zunächst auf transparentes Schwarz zurückgesetzt.

## Syntax

```js-nolint
configure(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `alphaMode` {{optional_inline}}
      - : Ein Aufzählungswert, der festlegt, wie sich Alphawerte auf den Inhalt von Texturen auswirken, die von [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) zurückgegeben werden, wenn diese gelesen, angezeigt oder als Bildquelle verwendet werden. Mögliche Werte sind:
        - `opaque`: Alphawerte werden ignoriert. Wenn eine Textur nicht bereits opak ist, wird der Alphakanal auf 1.0 gesetzt, wenn sie als Bildquelle verwendet oder auf dem Bildschirm angezeigt wird. Dies ist der Standardwert.
        - `premultiplied`: Farbwerte werden mit ihrem Alphawert vormultipliziert. Beispielsweise entspricht 100 % Rot bei einem Alphawert von 50 % dem Wert `[0.5, 0, 0, 0.5]`.
    - `colorSpace` {{optional_inline}}
      - : Der Farbraum, in dem Werte angezeigt werden sollen, die in von `getCurrentTexture()` zurückgegebene Texturen geschrieben wurden. Mögliche Werte sind `srgb` (der Standardwert) und `display-p3`.
    - `device`
      - : Das [`GPUDevice`](/de/docs/Web/API/GPUDevice), von dem die Rendering-Informationen für den Kontext stammen.
    - `format`
      - : Das Format der von `getCurrentTexture()` zurückgegebenen Texturen. Es kann `bgra8unorm`, `rgba8unorm` oder `rgba16float` sein. Das optimale Canvas-Texturformat für das aktuelle System kann mit [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) ermittelt werden. Es wird empfohlen, dieses Format zu verwenden. Wenn Sie beim Konfigurieren des Canvas nicht das bevorzugte Format verwenden, kann je nach Plattform zusätzlicher Aufwand entstehen, beispielsweise durch zusätzliche Texturkopien.

    - `toneMapping` {{optional_inline}}
      - : Ein Objekt mit Parametern, die das Tone Mapping für den Kontext festlegen, also wie der Inhalt der zugehörigen Texturen angezeigt werden soll. Dadurch kann WebGPU Farben darstellen, die heller als `white` (`#FFFFFF`) sind. Mögliche Eigenschaften sind:
        - `mode` {{optional_inline}}
          - : Ein Aufzählungswert, der den Tone-Mapping-Modus für das Canvas festlegt. Mögliche Werte sind:
            - `standard`
              - : Der Standardwert. Beschränkt die gerenderten Inhalte auf den Standard Dynamic Range (SDR) des Bildschirms. Dazu werden alle Farbwerte im Farbraum des Bildschirms auf das Intervall `[0, 1]` begrenzt.
            - `extended`
              - : Ermöglicht, sofern verfügbar, das Rendern von Inhalten im vollen High Dynamic Range (HDR) des Bildschirms. Im HDR-Modus kann ein größerer Bereich von Farben und Helligkeitsstufen mit präziseren Angaben dazu angezeigt werden, welche Farbe jeweils dargestellt werden soll. Im Bereich `[0, 1]` des Bildschirms entspricht dieser Modus `"standard"`. Die Werte werden auf den erweiterten Dynamikbereich des Bildschirms begrenzt oder in diesen projiziert, jedoch nicht auf `[0, 1]`.

    - `usage` {{optional_inline}}
      - : {{Glossary("Bitwise_flags", "Bitweise Flags")}}, die die zulässige Verwendung der von `getCurrentTexture()` zurückgegebenen Texturen festlegen. Mögliche Werte sind:
        - `GPUTextureUsage.COPY_SRC`: Die Textur kann als Quelle eines Kopiervorgangs verwendet werden, beispielsweise als Quellargument bei einem Aufruf von [`GPUCommandEncoder.copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer).
        - `GPUTextureUsage.COPY_DST`: Die Textur kann als Ziel eines Kopier- oder Schreibvorgangs verwendet werden, beispielsweise als Zielargument bei einem Aufruf von [`GPUCommandEncoder.copyTextureToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToTexture).
        - `GPUTextureUsage.RENDER_ATTACHMENT`: Die Textur kann als Color Attachment in einem Render Pass verwendet werden, beispielsweise in einer Color-Attachment-View bei einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass). `GPUTextureUsage.RENDER_ATTACHMENT` ist der Standardwert für `usage`. Beachten Sie jedoch, dass dieser Wert nicht automatisch enthalten ist, wenn ausdrücklich ein anderer Wert festgelegt wird. In diesem Fall müssen Sie ihn zusätzlich angeben.
        - `GPUTextureUsage.TEXTURE_BINDING`: Die Textur kann zur Verwendung als Sampled Texture in einem Shader gebunden werden, beispielsweise in einem Bind-Group-Eintrag bei einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup).
        - `GPUTextureUsage.STORAGE_BINDING`: Die Textur kann zur Verwendung als Storage Texture in einem Shader gebunden werden, beispielsweise in einem Bind-Group-Eintrag bei einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup).

        Beachten Sie, dass mehrere Verwendungsarten mit dem [bitweisen ODER-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können. Beispiel: `usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT`.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von Formaten, die Views verwenden dürfen, die aus von `getCurrentTexture()` zurückgegebenen Texturen erstellt wurden. Alle möglichen Werte finden Sie unter [Texturformate](https://gpuweb.github.io/gpuweb/#texture-formats).

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `usage` das Bit `TRANSIENT_ATTACHMENT` enthält.

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

Sehen Sie sich das Beispiel [Particles (HDR)](https://webgpu.github.io/webgpu-samples/?sample=particles) und den Test zur [HDR-Unterstützung](https://ccameron-chromium.github.io/webgpu-hdr/example.html) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
