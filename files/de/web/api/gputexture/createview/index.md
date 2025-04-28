---
title: "GPUTexture: createView() Methode"
short-title: createView()
slug: Web/API/GPUTexture/createView
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createView()`** Methode des [`GPUTexture`](/de/docs/Web/API/GPUTexture) Interface erstellt eine [`GPUTextureView`](/de/docs/Web/API/GPUTextureView), die eine spezifische Ansicht der `GPUTexture` darstellt.

## Syntax

```js-nolint
createView()
createView(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `arrayLayerCount` {{optional_inline}}

      - : Eine Zahl, die definiert, wie viele Array-Schichten ab dem Wert `baseArrayLayer` für die Ansicht zugänglich sind.

        Wenn `arrayLayerCount` weggelassen wird, erhält es einen Wert wie folgt:

        - Wenn `dimension` `"1d"`, `"2d"` oder `"3d"` ist, ist `arrayLayerCount` 1.
        - Wenn `dimension` `"cube"` ist, ist `arrayLayerCount` 6.
        - Wenn `dimension` `"2d-array"` oder `"cube-array"` ist, ist `arrayLayerCount` [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) - `baseArrayLayer`.

    - `aspect` {{optional_inline}}

      - : Ein aufzählbarer Wert, der festlegt, welche Aspekte der Textur für die Texturansicht zugänglich sind. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats sind für die Ansicht zugänglich, was je nach Formatfarbe, Tiefe und Schablone bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist für die Ansicht zugänglich.
        - `"stencil-only"`
          - : Nur der Schablonen-Aspekt eines depth-or-stencil-Formats ist für die Ansicht zugänglich.

        Wenn `aspect` weggelassen wird, erhält es den Wert `"all"`.

    - `baseArrayLayer` {{optional_inline}}
      - : Eine Zahl, die den Index der ersten Array-Schicht definiert, die für die Ansicht zugänglich ist. Wenn weggelassen, erhält `baseArrayLayer` den Wert 0.
    - `baseMipLevel` {{optional_inline}}
      - : Eine Zahl, die das erste (detaillierteste) Mipmap-Level darstellt, das für die Ansicht zugänglich ist. Wenn weggelassen, erhält `baseMipLevel` den Wert 0.
    - `dimension` {{optional_inline}}

      - : Ein aufzählbarer Wert, der angibt, in welchem Format die Textur angesehen wird. Mögliche Werte sind:

        - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
        - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild betrachtet.
        - `"2d-array"`: Die Textur wird als Array von zweidimensionalen Bildern betrachtet.
        - `"cube"`: Die Textur wird als Würfelkarte betrachtet. Die Ansicht hat 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Seiten des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Flächen der Würfelkarte hinweg.
        - `"cube-array"`: Die Textur wird als gepacktes Array von N Würfelkarten angesehen, jede mit 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Flächen der Würfelkarten hinweg.
        - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

        Wenn `dimension` weggelassen wird, erhält es einen Wert wie folgt:

        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"1d"` ist, ist `dimension` `"1d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) 1 ist, ist `dimension` `"2d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) mehr als 1 ist, ist `dimension` `"2d-array"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"3d"` ist, ist `dimension` `"3d"`.

    - `format` {{optional_inline}}

      - : Ein aufzählbarer Wert, der das Format der Texturansicht bestimmt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

        Wenn `format` weggelassen wird, erhält es einen Wert wie folgt:

        - Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist und [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, wird `format` auf das entsprechende [aspect-specific format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) gesetzt.
        - Andernfalls wird es auf [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) gesetzt.

    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die ein Label bereitstellt, welches verwendet werden kann, um das Objekt z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen zu identifizieren.
    - `mipLevelCount` {{optional_inline}}

      - : Eine Zahl, die angibt, wie viele Mipmap-Level für die Ansicht zugänglich sind, beginnend mit dem `baseMipLevel`-Wert.

        Wenn `mipLevelCount` weggelassen wird, erhält es den Wert [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) - `baseMipLevel`.

    - `usage` {{optional_inline}}

      - : Eine Menge von {{Glossary("bitwise_flags", "bitweisen Flags")}}, die eine Teilmenge der Nutzungsflags der Quelltextur (verfügbar in der [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage)-Eigenschaft) darstellen, die mit dem ausgewählten Ansichtsformat kompatibel sind. Dies kann verwendet werden, um die erlaubte Ansichtsverwendung in Fällen einzuschränken, in denen das Ansichtsformat mit bestimmten Verwendungen unvereinbar ist. Die verfügbaren Nutzungsflags sind in der [`GPUTexture.usage` Werte-Tabelle](/de/docs/Web/API/GPUTexture/usage#value) aufgeführt.

        Der Standardwert ist `0`, was das vollständige Set von Nutzungsflags der Quelltextur repräsentiert. Wenn das Format der Ansicht nicht alle Nutzungen der Textur unterstützt, schlägt der Standard fehl, und die Nutzungen der Ansicht müssen explizit angegeben werden.

### Rückgabewert

Eine Instanz eines [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createView()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt zurückgegeben:

- Wenn `aspect` `"all"` ist, ist `format` gleich [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) oder eines der `viewFormats`, die im Deskriptorobjekt des ursprünglichen [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) Aufrufs angegeben sind.
- Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist, ist `format` gleich dem entsprechenden [aspect-specific format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) des [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
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
- Das `format` der Ansicht unterstützt alle in der [`usage`](#usage) Eigenschaft angegebenen Nutzungen.

## Beispiele

### Typische Verwendung von `createView()`

Im WebGPU Samples [Cubemap-Demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/) sehen Sie mehrere Beispiele, wie `createView()` verwendet wird, sowohl um eine `resource`-Ansicht für einen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) Aufruf zu erstellen, als auch um eine `view` im `depthStencilAttachment` Objekt eines [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Deskriptors bereitzustellen.

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

// …

const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// …
```

### `createView()` mit Nutzungsbeschränkung

In diesem Beispiel erstellen wir eine Textur und anschließend eine Ansicht, deren Nutzung mithilfe der `usage`-Eigenschaft eingeschränkt wird.

```js
const texture = myDevice.createTexture({
  size: [4, 4],
  format: "rgba8unorm",
  usage:
    GPUTextureUsage.RENDER_ATTACHMENT |
    GPUTextureUsage.TEXTURE_BINDING |
    GPUTextureUsage.STORAGE_BINDING,
  viewFormats: ["rgba8unorm-srgb"],
});

const view = texture.createView({
  format: "rgba8unorm-srgb",
  usage: GPUTextureUsage.RENDER_ATTACHMENT, // Restrict allowed usage
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
