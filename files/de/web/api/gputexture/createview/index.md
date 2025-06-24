---
title: "GPUTexture: createView() Methode"
short-title: createView()
slug: Web/API/GPUTexture/createView
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createView()`**-Methode des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interfaces erstellt ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView), das eine spezifische Ansicht der `GPUTexture` darstellt.

## Syntax

```js-nolint
createView()
createView(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `arrayLayerCount` {{optional_inline}}

      - : Eine Zahl, die definiert, wie viele Array-Ebenen für die Ansicht zugänglich sind, ausgehend von dem Wert `baseArrayLayer`.

        Wenn `arrayLayerCount` weggelassen wird, erhält es einen Wert wie folgt:

        - Wenn `dimension` `"1d"`, `"2d"` oder `"3d"` ist, ist `arrayLayerCount` 1.
        - Wenn `dimension` `"cube"` ist, ist `arrayLayerCount` 6.
        - Wenn `dimension` `"2d-array"` oder `"cube-array"` ist, ist `arrayLayerCount` [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) - `baseArrayLayer`.

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, welche Aspekte der Textur für die Texturansicht zugänglich sind. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats sind für die Ansicht zugänglich, was Farbe, Tiefe und Schablone bedeuten kann, abhängig von der Art des Formats.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen- oder Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird für die Ansicht zugänglich sein.
        - `"stencil-only"`
          - : Nur der Schablonen-Aspekt eines Tiefen- oder Schablonenformats wird für die Ansicht zugänglich sein.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `baseArrayLayer` {{optional_inline}}
      - : Eine Zahl, die den Index der ersten Array-Ebene definiert, die für die Ansicht zugänglich ist. Wenn weggelassen, nimmt `baseArrayLayer` den Wert 0 an.
    - `baseMipLevel` {{optional_inline}}
      - : Eine Zahl, die die erste (detaillierteste) Mipmap-Ebene repräsentiert, die für die Ansicht zugänglich ist. Wenn weggelassen, nimmt `baseMipLevel` den Wert 0 an.
    - `dimension` {{optional_inline}}

      - : Ein enumerierter Wert, der das Format angibt, wie die Textur betrachtet wird. Mögliche Werte sind:

        - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
        - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild betrachtet.
        - `"2d-array"`: Die Textur wird als ein Array von zweidimensionalen Bildern betrachtet.
        - `"cube"`: Die Textur wird als Würfelansicht betrachtet. Die Ansicht hat 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Seiten des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Seiten des Würfels.
        - `"cube-array"`: Die Textur wird als gepacktes Array von N Würfeln betrachtet, jeder mit 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Seiten des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Seiten der Würfel.
        - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

        Wenn `dimension` weggelassen wird, erhält es einen Wert wie folgt:

        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"1d"` ist, ist `dimension` `"1d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) 1 ist, ist `dimension` `"2d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) mehr als 1 ist, ist `dimension` `"2d-array"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"3d"` ist, ist `dimension` `"3d"`.

    - `format` {{optional_inline}}

      - : Ein enumerierter Wert, der das Format der Texturansicht angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

        Wenn `format` weggelassen wird, wird es einen Wert wie folgt erhalten:

        - Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist, und [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen- oder Schablonenformat](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, wird `format` auf das entsprechende [aspektspezifische Format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) gesetzt.
        - Andernfalls wird es gleich [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) gesetzt.

    - `label` {{optional_inline}}
      - : Eine Zeichenkette zur Bereitstellung einer Kennzeichnung, die zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}

      - : Eine Zahl, die angibt, wie viele Mipmap-Ebenen für die Ansicht zugänglich sind, beginnend mit dem Wert `baseMipLevel`.

        Wenn `mipLevelCount` weggelassen wird, erhält es den Wert [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) - `baseMipLevel`.

    - `usage` {{optional_inline}}

      - : Eine Menge von {{Glossary("bitwise_flags", "bitweise Flags")}}, die eine Teilmenge der Nutzungsflags der Quelltextur (verfügbar in der [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage)-Eigenschaft) darstellen, die mit dem ausgewählten Ansichtformat kompatibel sind. Dies kann verwendet werden, um die erlaubte Nutzung der Ansicht zu beschränken, wenn das Ansichtformat mit bestimmten Nutzungen inkompatibel ist. Die verfügbaren Nutzungsflags sind im [`GPUTexture.usage` Wertetabelle](/de/docs/Web/API/GPUTexture/usage#value) aufgeführt.

        Der Standardwert ist `0`, was die vollständige Menge von Nutzungsflags der Quelltextur repräsentiert. Wenn das `format` der Ansicht nicht alle Nutzungen der Textur unterstützt, schlägt der Standard fehl, und die Nutzung der Ansicht muss explizit angegeben werden.

### Rückgabewert

Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createView()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt wird zurückgegeben:

- Wenn `aspect` `"all"` ist, ist `format` gleich [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) oder einer der `viewFormats`, die im ursprünglichen [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Aufruf übergeben wurden.
- Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist, ist `format` gleich dem entsprechenden [aspektspezifischen Format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) des [Tiefen- oder Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
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
- Das `format` der Ansicht unterstützt alle in der [`usage`](#usage)-Eigenschaft spezifizierten Nutzungen.

## Beispiele

### Typische `createView()`-Verwendung

Im WebGPU-Beispiel [Cubemap-Demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/) sehen Sie mehrere Beispiele, wie `createView()` verwendet wird, sowohl um eine `resource`-Ansicht für einen Aufruf zu [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) zu erstellen, als auch um eine `view` im `depthStencilAttachment`-Objekt eines [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Descriptors bereitzustellen.

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

In diesem Snippet erstellen wir eine Textur und dann eine Ansicht, deren Nutzung über die `usage`-Eigenschaft eingeschränkt wurde.

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
