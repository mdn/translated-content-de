---
title: "GPUTexture: Methode createView()"
short-title: createView()
slug: Web/API/GPUTexture/createView
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

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

      - : Eine Zahl, die definiert, wie viele Array-Schichten für die Ansicht zugänglich sind, beginnend mit dem Wert `baseArrayLayer`.

        Wenn `arrayLayerCount` weggelassen wird, erhält es folgenden Wert:

        - Wenn `dimension` `"1d"`, `"2d"` oder `"3d"` ist, ist `arrayLayerCount` 1.
        - Wenn `dimension` `"cube"` ist, ist `arrayLayerCount` 6.
        - Wenn `dimension` `"2d-array"` oder `"cube-array"` ist, ist `arrayLayerCount` [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) - `baseArrayLayer`.

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, welche Aspekte der Textur für die Texturansicht zugänglich sind. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats sind für die Ansicht zugänglich, was je nach Formatfarbe, Tiefe und Schablone bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist für die Ansicht zugänglich.
        - `"stencil-only"`
          - : Nur der Schablonaspekt eines Tiefen-oder-Schablonenformats ist für die Ansicht zugänglich.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `baseArrayLayer` {{optional_inline}}
      - : Eine Zahl, die den Index der ersten für die Ansicht zugänglichen Arrayschicht definiert. Wenn weggelassen, nimmt `baseArrayLayer` den Wert 0 an.
    - `baseMipLevel` {{optional_inline}}
      - : Eine Zahl, die die erste (detaillierteste) Mipmap-Ebene angibt, die für die Ansicht zugänglich ist. Wenn weggelassen, nimmt `baseMipLevel` den Wert 0 an.
    - `dimension` {{optional_inline}}

      - : Ein enumerierter Wert, der das Format bestimmt, in dem die Textur angezeigt wird. Mögliche Werte sind:

        - `"1d"`: Die Textur wird als eindimensionales Bild angezeigt.
        - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild angezeigt.
        - `"2d-array"`: Die Textur wird als Array von zweidimensionalen Bildern angezeigt.
        - `"cube"`: Die Textur wird als Würfelkarte angezeigt. Die Ansicht hat 6 Arrayschichten, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Die Abtastung erfolgt nahtlos über die Flächen der Würfelkarte.
        - `"cube-array"`: Die Textur wird als gepackte Anordnung von N Würfelkarten angezeigt, jede mit 6 Arrayschichten, entsprechend den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels. Die Abtastung erfolgt nahtlos über die Flächen der Würfelkarten.
        - `"3d"`: Die Textur wird als dreidimensionales Bild angezeigt.

        Wenn `dimension` weggelassen wird, erhält es folgenden Wert:

        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"1d"` ist, ist `dimension` `"1d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) 1 beträgt, ist `dimension` `"2d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) größer als 1 ist, ist `dimension` `"2d-array"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"3d"` ist, ist `dimension` `"3d"`.

    - `format` {{optional_inline}}

      - : Ein enumerierter Wert, der das Format der Texturansicht angibt. Siehe den Abschnitt [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

        Wenn `format` weggelassen wird, erhält es folgenden Wert:

        - Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist, und [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, wird `format` gleich dem entsprechenden [aspect-specific format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) gesetzt.
        - Andernfalls wird es gleich [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) gesetzt.

    - `label` {{optional_inline}}
      - : Ein Zeichenfolge-Label, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}

      - : Eine Zahl, die angibt, wie viele Mipmap-Ebenen für die Ansicht zugänglich sind, beginnend mit dem Wert `baseMipLevel`.

        Wenn `mipLevelCount` weggelassen wird, erhält es den Wert [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) - `baseMipLevel`.

    - `usage` {{optional_inline}}

      - : Ein Satz von {{Glossary("bitwise_flags", "Bitweise-Flags")}}, die eine Teilmenge der Nutzungsflags der Quellentextur (verfügbar in der [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage)-Eigenschaft) darstellen, die mit dem gewählten Ansichtsformat kompatibel sind. Dies kann verwendet werden, um die zulässige Nutzung der Ansicht einzuschränken, wenn das Ansichtsformat mit bestimmten Nutzungen unvereinbar ist. Die verfügbaren Nutzungsflags sind in der [`GPUTexture.usage`-Wertetabelle](/de/docs/Web/API/GPUTexture/usage#value) aufgelistet.

        Der Standardwert ist `0`, was die vollständige Menge der Nutzungsflags der Quellentextur darstellt. Wenn das [`format`](#format) der Ansicht nicht alle Nutzungen der Textur unterstützt, schlägt der Standard fehl, und die Nutzung der Ansicht muss explizit angegeben werden.

### Rückgabewert

Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createView()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt zurückgegeben:

- Wenn `aspect` `"all"` ist, ist `format` gleich [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) oder eines der in dem Ursprungs-Descriptor-Objekt im Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) angegebenen `viewFormats`.
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
- Das `format` der Ansicht unterstützt alle in der [`usage`](#usage)-Eigenschaft angegebenen Nutzungen.

## Beispiele

### Typische Verwendung von `createView()`

Im WebGPU-Beispiel [Cubemap-Demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/) sehen Sie mehrere Beispiele, wie `createView()` verwendet wird, sowohl um eine `resource`-Ansicht für einen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf zu erstellen, als auch um eine `view` im `depthStencilAttachment`-Objekt eines [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Descriptors bereitzustellen.

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

### `createView()` mit Nutzungseinschränkung

In diesem Snippet erstellen wir eine Textur und dann eine Ansicht, deren Nutzung über die `usage`-Eigenschaft eingeschränkt wird.

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
