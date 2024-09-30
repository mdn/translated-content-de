---
title: "GPUTexture: createView() Methode"
short-title: createView()
slug: Web/API/GPUTexture/createView
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createView()`** Methode des [`GPUTexture`](/de/docs/Web/API/GPUTexture) Interfaces erstellt eine [`GPUTextureView`](/de/docs/Web/API/GPUTextureView), die eine spezifische Ansicht der `GPUTexture` repräsentiert.

## Syntax

```js-nolint
createView()
createView(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `arrayLayerCount` {{optional_inline}}

      - : Eine Zahl, die angibt, wie viele Array-Schichten für die Ansicht zugänglich sind, beginnend mit dem Wert `baseArrayLayer`.

        Wenn `arrayLayerCount` weggelassen wird, erhält es folgenden Wert:

        - Wenn `dimension` `"1d"`, `"2d"` oder `"3d"` ist, ist `arrayLayerCount` 1.
        - Wenn `dimension` `"cube"` ist, ist `arrayLayerCount` 6.
        - Wenn `dimension` `"2d-array"` oder `"cube-array"` ist, ist `arrayLayerCount` [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) - `baseArrayLayer`.

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, welche Aspekte der Textur für die Texture-Ansicht zugänglich sind. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden für die Ansicht zugänglich sein, was alle oder beliebige aus Farbe, Tiefe und Stencil bedeuten kann, abhängig von der Art des Formats, mit dem Sie arbeiten.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen- oder Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird für die Ansicht zugänglich sein.
        - `"stencil-only"`
          - : Nur der Stencil-Aspekt eines Tiefen- oder Stencil-Formats wird für die Ansicht zugänglich sein.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `baseArrayLayer` {{optional_inline}}
      - : Eine Zahl, die den Index der ersten Array-Schicht definiert, die für die Ansicht zugänglich ist. Wenn weggelassen, nimmt `baseArrayLayer` den Wert 0 an.
    - `baseMipLevel` {{optional_inline}}
      - : Eine Zahl, die das erste (detaillierteste) Mipmap-Level, das für die Ansicht zugänglich ist, darstellt. Wenn weggelassen, nimmt `baseMipLevel` den Wert 0 an.
    - `dimension` {{optional_inline}}

      - : Ein enumerierter Wert, der das Format angibt, in dem die Textur angesehen werden soll. Mögliche Werte sind:

        - `"1d"`: Die Textur wird als eindimensionales Bild angesehen.
        - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild angesehen.
        - `"2d-array"`: Die Textur wird als Array zweidimensionaler Bilder angesehen.
        - `"cube"`: Die Textur wird als Cubemap angesehen. Die Ansicht hat 6 Array-Schichten, die den `[+X, -X, +Y, -Y, +Z, -Z]` Seiten des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Seiten der Cubemap.
        - `"cube-array"`: Die Textur wird als gepacktes Array von N Cubemaps angesehen, jeweils mit 6 Array-Schichten entsprechend den `[+X, -X, +Y, -Y, +Z, -Z]` Seiten des Würfels. Das Sampling erfolgt nahtlos über die Seiten der Cubemaps.
        - `"3d"`: Die Textur wird als dreidimensionales Bild angesehen.

        Wenn `dimension` weggelassen wird, erhält es einen Wert wie folgt:

        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"1d"` ist, ist `dimension` `"1d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) 1 ist, ist `dimension` `"2d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) größer als 1 ist, ist `dimension` `"2d-array"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"3d"` ist, ist `dimension` `"3d"`.

    - `format` {{optional_inline}}

      - : Ein enumerierter Wert, der das Format der Texture-Ansicht angibt. Weitere Informationen finden Sie im Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation.

        Wenn `format` weggelassen wird, erhält es einen Wert wie folgt:

        - Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist und [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, wird `format` auf das entsprechende [aspektspezifische Format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) gesetzt.
        - Andernfalls wird es auf [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) gesetzt.

    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die ein Etikett bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}

      - : Eine Zahl, die angibt, wie viele Mipmap-Level für die Ansicht zugänglich sind, beginnend mit dem `baseMipLevel` Wert.

        Wenn `mipLevelCount` weggelassen wird, erhält es den Wert von [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) - `baseMipLevel`.

### Rückgabewert

Eine [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createView()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt wird zurückgegeben:

- Wenn `aspect` `"all"` ist, ist `format` gleich [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) oder einem der `viewFormats`, die im ursprünglichen [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) Aufruf des Descriptor-Objekts angegeben wurden.
- Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist, ist `format` gleich dem entsprechenden [aspektspezifischen Format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) des [Tiefen- oder Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- `mipLevelCount` ist größer als 0.
- `mipLevelCount` + `baseMipLevel` ist kleiner oder gleich [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `arrayLayerCount` ist größer als 0.
- `arrayLayerCount` + `baseArrayLayer` ist kleiner oder gleich [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers), wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist, oder kleiner oder gleich 1, wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"1d"` oder `"3d"` ist.
- Wenn `sampleCount` größer als 1 ist, ist `dimension` `"2d"`.
- Wenn `dimension` ist:
  - `"1d"`
    - [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"1d"`
    - `arrayLayerCount` ist 1
  - `"2d"`
    - [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"2d"`
    - `arrayLayerCount` ist 1
  - `"2d-array"`
    - [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"2d"`
  - `"cube"`
    - [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"2d"`
    - `arrayLayerCount` ist 6
    - [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist gleich [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height)
  - `"cube-array"`
    - [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"2d"`
    - `arrayLayerCount` ist ein Vielfaches von 6
    - [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist gleich [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height)
  - `"3d"`
    - [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"3d"`
    - `arrayLayerCount` ist 1

## Beispiele

Im WebGPU Samples [Cubemap-Demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/) finden Sie mehrere Beispiele dafür, wie `createView()` verwendet wird, sowohl um eine Ansicht `resource` für einen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) Aufruf zu erstellen, als auch um eine `view` im `depthStencilAttachment` Objekt einer [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Description bereitzustellen.

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
