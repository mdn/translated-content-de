---
title: "GPUTexture: Methode createView()"
short-title: createView()
slug: Web/API/GPUTexture/createView
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createView()`**-Methode der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle erstellt eine [`GPUTextureView`](/de/docs/Web/API/GPUTextureView), die eine spezifische Ansicht der `GPUTexture` darstellt.

## Syntax

```js-nolint
createView()
createView(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `arrayLayerCount` {{optional_inline}}

      - : Eine Zahl, die definiert, wie viele Array-Ebenen für die Ansicht zugänglich sind, beginnend mit dem Wert von `baseArrayLayer`.

        Wenn `arrayLayerCount` weggelassen wird, erhält es folgenden Wert:

        - Wenn `dimension` `"1d"`, `"2d"` oder `"3d"` ist, ist `arrayLayerCount` 1.
        - Wenn `dimension` `"cube"` ist, ist `arrayLayerCount` 6.
        - Wenn `dimension` `"2d-array"` oder `"cube-array"` ist, ist `arrayLayerCount` gleich [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) - `baseArrayLayer`.

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, welche Aspekte der Textur für die Texture-Ansicht zugänglich sind. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden in der Ansicht zugänglich sein. Dies kann alles oder beliebige der Farbaspekte, Tiefenaspekte und Schablone sein, abhängig von der Art des Formats, mit dem Sie arbeiten.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen-oder-Schablonen-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird für die Ansicht zugänglich sein.
        - `"stencil-only"`
          - : Nur der Schablonenaspekt eines Tiefen-oder-Schablonen-Formats wird für die Ansicht zugänglich sein.

        Wird `aspect` weggelassen, nimmt es den Wert `"all"` an.

    - `baseArrayLayer` {{optional_inline}}
      - : Eine Zahl, die den Index der ersten Array-Ebene definiert, die für die Ansicht zugänglich ist. Wird sie weggelassen, erhält `baseArrayLayer` den Wert 0.
    - `baseMipLevel` {{optional_inline}}
      - : Eine Zahl, die die erste (detaillierteste) Mipmap-Ebene darstellt, die für die Ansicht zugänglich ist. Wird sie weggelassen, erhält `baseMipLevel` den Wert 0.
    - `dimension` {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, in welchem Format die Textur betrachtet werden soll. Mögliche Werte sind:

        - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
        - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild betrachtet.
        - `"2d-array"`: Die Textur wird als Array von zweidimensionalen Bildern betrachtet.
        - `"cube"`: Die Textur wird als Cubemap betrachtet. Die Ansicht hat 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Die Abtastung erfolgt nahtlos über die Flächen des Cubemaps.
        - `"cube-array"`: Die Textur wird als gepacktes Array von N Cubemaps betrachtet, jeweils mit 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Die Abtastung erfolgt nahtlos über die Flächen der Cubemaps.
        - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

        Wird `dimension` weggelassen, erhält es folgenden Wert:

        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"1d"` ist, ist `dimension` `"1d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) 1 ist, ist `dimension` `"2d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) mehr als 1 ist, ist `dimension` `"2d-array"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"3d"` ist, ist `dimension` `"3d"`.

    - `format` {{optional_inline}}

      - : Ein enumerierter Wert, der das Format der Texture-Ansicht angibt. Sehen Sie in den [Texturformaten](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation alle möglichen Werte.

        Wird `format` weggelassen, erhält es folgenden Wert:

        - Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist und [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen-oder-Schablonen-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, wird `format` gleich dem entsprechenden [aspektspezifischen Format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) gesetzt.
        - Andernfalls wird es gleich [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) gesetzt.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, mit dem das Objekt identifiziert werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}

      - : Eine Zahl, die definiert, wie viele Mipmap-Ebenen für die Ansicht zugänglich sind, beginnend mit dem Wert von `baseMipLevel`.

        Wird `mipLevelCount` weggelassen, erhält es den Wert [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) - `baseMipLevel`.

### Rückgabewert

Eine Instanz des [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createView()`** aufgerufen wird, anderenfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt zurückgegeben:

- Wenn `aspect` `"all"` ist, ist `format` gleich [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) oder einem der `viewFormats`, die im ursprünglichen Descriptor-Objekt des Aufrufs [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) angegeben sind.
- Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist, ist `format` gleich dem entsprechenden [aspektspezifischen Format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) des [Tiefen-oder-Schablonen-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
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

Im WebGPU-Beispiele [Cubemap-Demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/) sehen Sie mehrere Beispiele, wie `createView()` verwendet wird, sowohl um eine Ansicht `resource` für einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) zu erstellen, als auch um eine `view` im `depthStencilAttachment`-Objekt eines [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Descriptors bereitzustellen.

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
