---
title: "GPUTexture: createView() Methode"
short-title: createView()
slug: Web/API/GPUTexture/createView
l10n:
  sourceCommit: 8d8030c3bc728b1318b5147bc99bf5e6c24c75b9
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createView()`**-Methode des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interfaces erstellt eine [`GPUTextureView`](/de/docs/Web/API/GPUTextureView), die eine spezifische Ansicht der `GPUTexture` repräsentiert.

## Syntax

```js-nolint
createView()
createView(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `arrayLayerCount` {{optional_inline}}
      - : Eine Zahl, die angibt, wie viele Array-Schichten für die Ansicht zugänglich sind, beginnend mit dem Wert von `baseArrayLayer`.

        Wenn `arrayLayerCount` weggelassen wird, erhält es folgenden Wert:
        - Wenn `dimension` `"1d"`, `"2d"` oder `"3d"` ist, ist `arrayLayerCount` 1.
        - Wenn `dimension` `"cube"` ist, ist `arrayLayerCount` 6.
        - Wenn `dimension` `"2d-array"` oder `"cube-array"` ist, ist `arrayLayerCount` [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) - `baseArrayLayer`.

    - `aspect` {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, welche Aspekte der Textur für die Texturansicht zugänglich sind. Mögliche Werte sind:
        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats sind für die Ansicht zugänglich, dies kann je nach Art des Formats Farbe, Tiefe und/oder Stencil umfassen.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist für die Ansicht zugänglich.
        - `"stencil-only"`
          - : Nur der Stencil-Aspekt eines depth-or-stencil Formats ist für die Ansicht zugänglich.

        Wenn weggelassen, erhält `aspect` den Wert `"all"`.

    - `baseArrayLayer` {{optional_inline}}
      - : Eine Zahl, die den Index der ersten zugänglichen Array-Schicht der Ansicht definiert. Wenn weggelassen, nimmt `baseArrayLayer` den Wert 0 an.
    - `baseMipLevel` {{optional_inline}}
      - : Eine Zahl, die den ersten (detailliertesten) Mipmap-Level definiert, der für die Ansicht zugänglich ist. Wenn weggelassen, nimmt `baseMipLevel` den Wert 0 an.
    - `dimension` {{optional_inline}}
      - : Ein enumerierter Wert, der das Format angibt, wie die Textur angezeigt werden soll. Mögliche Werte sind:
        - `"1d"`: Die Textur wird als eindimensionales Bild dargestellt.
        - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild dargestellt.
        - `"2d-array"`: Die Textur wird als Array von zweidimensionalen Bildern dargestellt.
        - `"cube"`: Die Textur wird als Cubemap dargestellt. Die Ansicht hat 6 Array-Schichten, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Flächen der Cubemap.
        - `"cube-array"`: Die Textur wird als gepacktes Array von N Cubemaps dargestellt, jede mit 6 Array-Schichten, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Flächen der Cubemaps.
        - `"3d"`: Die Textur wird als dreidimensionales Bild dargestellt.

        Wenn `dimension` weggelassen wird, erhält es folgenden Wert:
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"1d"` ist, ist `dimension` `"1d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) 1 ist, ist `dimension` `"2d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) größer als 1 ist, ist `dimension` `"2d-array"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"3d"` ist, ist `dimension` `"3d"`.

    - `format` {{optional_inline}}
      - : Ein enumerierter Wert, der das Format der Texturansicht angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

        Wenn `format` weggelassen wird, wird es folgendermaßen festgelegt:
        - Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist und [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, wird `format` auf das entsprechende [aspekt-spezifische Format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) gesetzt.
        - Andernfalls wird es auf [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) gesetzt.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die angibt, wie viele Mipmap-Level für die Ansicht zugänglich sind, angefangen mit dem Wert von `baseMipLevel`.

        Wenn `mipLevelCount` weggelassen wird, wird es auf einen Wert von [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) - `baseMipLevel` gesetzt.

    - `swizzle` {{optional_inline}}
      - : Ein String bestehend aus vier Zeichen. Die Position jedes Zeichens entspricht den roten, grünen, blauen und Alpha-Kanalwerten der Texturansicht. Der Wert jedes Zeichens gibt an, welchen Wert jeder dieser Kanäle einnimmt, wenn die Ansicht von einem Shader aufgerufen wird. Mögliche Werte sind:
        - `r`
          - : Der rote Kanalwert der Textur.
        - `g`
          - : Der grüne Kanalwert der Textur.
        - `b`
          - : Der blaue Kanalwert der Textur.
        - `a`
          - : Der Alpha-Kanalwert der Textur.
        - `0`
          - : Erzwingt einen Wert von `0`.
        - `1`
          - : Erzwingt einen Wert von `1`.

        Zum Beispiel würde `swizzle: "grba"` zu einem Austausch der roten und grünen Kanalwerte der Textur führen, wenn ein Shader die Ansicht aufruft. Die Swizzle-Komponente der Textur ermöglicht es Entwicklern, die Leistung zu optimieren, Fehler in der Komponentenreihenfolge zu korrigieren und Shader-Code effizient wiederzuverwenden, um verschiedene Texturformate bei der Abtastung von Texturen zu handhaben.

        > [!NOTE]
        > Um die `swizzle`-Eigenschaft zu nutzen, müssen Sie das `texture-component-swizzle` [Feature](/de/docs/Web/API/GPUSupportedFeatures) in Ihrem [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktivieren, indem Sie es im Array `requiredFeatures` des Deskriptors [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angeben. Wenn dieses Feature nicht aktiviert ist, wird die `swizzle`-Eigenschaft keine Wirkung haben.

    - `usage` {{optional_inline}}
      - : Eine Menge von {{Glossary("bitwise_flags", "Bitweise-Flags")}}, die eine Teilmenge der Nutzungs-Flags der Quelltextur darstellt (verfügbar in der [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage)-Eigenschaft), die mit dem gewählten Ansicht-Format kompatibel sind. Dies kann verwendet werden, um die erlaubte Nutzung der Ansicht in Fällen einzuschränken, in denen das Ansicht-Format mit bestimmten Nutzungen inkompatibel ist. Die verfügbaren Nutzungs-Flags sind in der Tabelle der [`GPUTexture.usage`](#value) Werte aufgeführt.

        Der Standardwert ist `0`, was die vollständige Menge der Nutzungs-Flags der Quelltextur darstellt. Wenn das [`format`](#format) der Ansicht nicht alle Nutzungen der Textur unterstützt, schlägt der Standardfehl, und die Nutzungen der Ansicht müssen explizit angegeben werden.

### Rückgabewert

Eine Instanz des [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createView()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt wird zurückgegeben:

- Wenn `aspect` `"all"` ist, ist `format` gleich [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) oder einem der in der Ursprungsanfrage [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) angegebenen `viewFormats`.
- Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist, ist `format` gleich dem entsprechenden [aspekt-spezifischen Format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) des [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
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
- Das [`format`](#format) der Ansicht unterstützt alle in der [`usage`](#usage)-Eigenschaft angegebenen Nutzungen.

## Beispiele

### Typische Verwendung von `createView()`

Im WebGPU-Beispiele [Cubemap-Demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/) sehen Sie mehrere Beispiele, wie `createView()` verwendet wird, sowohl um eine Ansicht als `resource` für einen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf zu erstellen, als auch um eine `view` im `depthStencilAttachment`-Objekt eines [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Deskriptors bereitzustellen.

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

In diesem Beispiel erstellen wir eine Textur und dann eine Ansicht, deren Nutzung über die Eigenschaft `usage` eingeschränkt ist.

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
