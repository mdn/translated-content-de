---
title: "GPUTexture: createView()-Methode"
short-title: createView()
slug: Web/API/GPUTexture/createView
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createView()`**-Methode der {{domxref("GPUTexture")}}-Schnittstelle erstellt eine {{domxref("GPUTextureView")}}, die eine bestimmte Ansicht der `GPUTexture` darstellt.

## Syntax

```js-nolint
createView()
createView(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `arrayLayerCount` {{optional_inline}}

      - : Eine Zahl, die definiert, wie viele Array-Schichten für die Ansicht zugänglich sind, beginnend mit dem Wert `baseArrayLayer`.

        Wenn `arrayLayerCount` weggelassen wird, erhält es folgenden Wert:

        - Wenn `dimension` `"1d"`, `"2d"` oder `"3d"` ist, ist `arrayLayerCount` 1.
        - Wenn `dimension` `"cube"` ist, ist `arrayLayerCount` 6.
        - Wenn `dimension` `"2d-array"` oder `"cube-array"` ist, ist `arrayLayerCount` {{domxref("GPUTexture.depthOrArrayLayers")}} - `baseArrayLayer`.

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, welcher Aspekt(e) der Textur für die Texturansicht zugänglich sind. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats sind für die Ansicht zugänglich, was je nach Format alle oder beliebige von Farbe, Tiefe und Schablone bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist für die Ansicht zugänglich.
        - `"stencil-only"`
          - : Nur der Schablonen-Aspekt eines Tiefen- und Schablonenformats ist für die Ansicht zugänglich.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `baseArrayLayer` {{optional_inline}}
      - : Eine Zahl, die den Index der ersten Array-Schicht angibt, die für die Ansicht zugänglich ist. Wenn weggelassen, nimmt `baseArrayLayer` den Wert 0 an.
    - `baseMipLevel` {{optional_inline}}
      - : Eine Zahl, die die erste (detaillierteste) Mipmap-Ebene repräsentiert, die für die Ansicht zugänglich ist. Wenn weggelassen, nimmt `baseMipLevel` den Wert 0 an.
    - `dimension` {{optional_inline}}

      - : Ein enumerierter Wert, der das Format angibt, in dem die Textur betrachtet wird. Mögliche Werte sind:

        - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
        - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild betrachtet.
        - `"2d-array"`: Die Textur wird als Array von zweidimensionalen Bildern betrachtet.
        - `"cube"`: Die Textur wird als Würfelkarte betrachtet. Die Ansicht hat 6 Array-Schichten, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Seiten des Würfels entsprechen. Die Abtastung erfolgt nahtlos über die Flächen der Würfelkarte hinweg.
        - `"cube-array"`: Die Textur wird als kompaktes Array von N Würfelkarten betrachtet, jede mit 6 Array-Schichten entsprechend den `[+X, -X, +Y, -Y, +Z, -Z]`-Seiten des Würfels. Die Abtastung erfolgt nahtlos über die Flächen der Würfelkarten hinweg.
        - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

        Wenn `dimension` weggelassen wird, erhält es folgenden Wert:

        - Wenn {{domxref("GPUTexture.dimension")}} `"1d"` ist, ist `dimension` `"1d"`.
        - Wenn {{domxref("GPUTexture.dimension")}} `"2d"` ist und {{domxref("GPUTexture.depthOrArrayLayers")}} 1 ist, ist `dimension` `"2d"`.
        - Wenn {{domxref("GPUTexture.dimension")}} `"2d"` ist und {{domxref("GPUTexture.depthOrArrayLayers")}} größer als 1 ist, ist `dimension` `"2d-array"`.
        - Wenn {{domxref("GPUTexture.dimension")}} `"3d"` ist, ist `dimension` `"3d"`.

    - `format` {{optional_inline}}

      - : Ein enumerierter Wert, der das Format der Texturansicht angibt. Siehe den Abschnitt [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

        Wenn `format` weggelassen wird, erhält es folgenden Wert:

        - Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist und {{domxref("GPUTexture.format")}} ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, wird `format` auf das entsprechende [aspect-specific format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) gesetzt.
        - Andernfalls wird es auf {{domxref("GPUTexture.format")}} gesetzt.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}

      - : Eine Zahl, die angibt, wie viele Mipmap-Ebenen für die Ansicht zugänglich sind, beginnend mit dem Wert `baseMipLevel`.

        Wenn `mipLevelCount` weggelassen wird, erhält es den Wert von {{domxref("GPUTexture.mipLevelCount")}} - `baseMipLevel`.

### Rückgabewert

Eine Instanz des Objekts {{domxref("GPUTextureView")}}.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createView()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und ein ungültiges {{domxref("GPUTextureView")}}-Objekt zurückgegeben:

- Wenn `aspect` `"all"` ist, ist `format` gleich {{domxref("GPUTexture.format")}} oder einem der `viewFormats`, die in der ursprünglichen {{domxref("GPUDevice.createTexture()")}}-Beschreibungsobjekt angegeben wurden.
- Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist, ist `format` gleich dem entsprechenden [aspect-specific format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) des [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- `mipLevelCount` ist größer als 0.
- `mipLevelCount` + `baseMipLevel` ist kleiner oder gleich {{domxref("GPUTexture.mipLevelCount")}}.
- `arrayLayerCount` ist größer als 0.
- `arrayLayerCount` + `baseArrayLayer` ist kleiner oder gleich {{domxref("GPUTexture.depthOrArrayLayers")}}, wenn {{domxref("GPUTexture.dimension")}} `"2d"` ist, oder kleiner oder gleich 1, wenn {{domxref("GPUTexture.dimension")}} `"1d"` oder `"3d"` ist.
- Wenn `sampleCount` größer als 1 ist, ist `dimension` `"2d"`.
- Wenn `dimension`:
  - `"1d"`
    - {{domxref("GPUTexture.dimension")}} ist `"1d"`
    - `arrayLayerCount` ist 1
  - `"2d"`
    - {{domxref("GPUTexture.dimension")}} ist `"2d"`
    - `arrayLayerCount` ist 1
  - `"2d-array"`
    - {{domxref("GPUTexture.dimension")}} ist `"2d"`
  - `"cube"`
    - {{domxref("GPUTexture.dimension")}} ist `"2d"`
    - `arrayLayerCount` ist 6
    - {{domxref("GPUTexture.width")}} ist gleich {{domxref("GPUTexture.height")}}
  - `"cube-array"`
    - {{domxref("GPUTexture.dimension")}} ist `"2d"`
    - `arrayLayerCount` ist ein Vielfaches von 6
    - {{domxref("GPUTexture.width")}} ist gleich {{domxref("GPUTexture.height")}}
  - `"3d"`
    - {{domxref("GPUTexture.dimension")}} ist `"3d"`
    - `arrayLayerCount` ist 1

## Beispiele

Im WebGPU Beispiele [Cubemap-Demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/) werden Sie mehrere Beispiele dafür sehen, wie `createView()` verwendet wird, sowohl zur Erstellung einer Ansicht `resource` für einen {{domxref("GPUDevice.createBindGroup()")}}-Aufruf als auch zur Bereitstellung einer `view` im `depthStencilAttachment`-Objekt eines {{domxref("GPUCommandEncoder.beginRenderPass()")}}-Descriptors.

```js
const uniformBindGroup = device.createBindGroup({
  layout: pipeline.getBindGroupLayout(0),
  entries: [
    {
      binding: 0,
      resource: {
        buffer: uniformBuffer,
        offset: 0,
        size: uniformBufferSize,
      },
    },
    {
      binding: 1,
      resource: sampler,
    },
    {
      binding: 2,
      resource: cubemapTexture.createView({
        dimension: "cube",
      }),
    },
  ],
});

const renderPassDescriptor: GPURenderPassDescriptor = {
  colorAttachments: [
    {
      view: undefined, // Assigned later
      loadOp: "clear",
      storeOp: "store",
    },
  ],
  depthStencilAttachment: {
    view: depthTexture.createView(),

    depthClearValue: 1.0,
    depthLoadOp: "clear",
    depthStoreOp: "store",
  },
};

// ...

const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
