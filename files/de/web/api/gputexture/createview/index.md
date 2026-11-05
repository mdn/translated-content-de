---
title: "GPUTexture: Methode createView()"
short-title: createView()
slug: Web/API/GPUTexture/createView
l10n:
  sourceCommit: da1da9061042da9f616b8621cada4f452545700a
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`createView()`** der Schnittstelle [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellt eine [`GPUTextureView`](/de/docs/Web/API/GPUTextureView), die eine bestimmte Ansicht der `GPUTexture` darstellt.

## Syntax

```js-nolint
createView()
createView(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `arrayLayerCount` {{optional_inline}}
      - : Eine Zahl, die festlegt, wie viele Array-Ebenen für die Ansicht zugänglich sind, beginnend beim Wert von `baseArrayLayer`.

        Wenn `arrayLayerCount` weggelassen wird, erhält es einen Wert nach folgenden Regeln:
        - Wenn `dimension` `"1d"`, `"2d"` oder `"3d"` ist, beträgt `arrayLayerCount` 1.
        - Wenn `dimension` `"cube"` ist, beträgt `arrayLayerCount` 6.
        - Wenn `dimension` `"2d-array"` oder `"cube-array"` ist, beträgt `arrayLayerCount` [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) - `baseArrayLayer`.

    - `aspect` {{optional_inline}}
      - : Ein Aufzählungswert, der angibt, welche Aspekte der Textur für die Texturansicht zugänglich sind. Mögliche Werte sind:
        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats sind für die Ansicht zugänglich. Je nach Format können dies Farbe, Tiefe und Stencil sein.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen- oder Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist für die Ansicht zugänglich.
        - `"stencil-only"`
          - : Nur der Stencil-Aspekt eines Tiefen- oder Stencil-Formats ist für die Ansicht zugänglich.

        Wenn `aspect` weggelassen wird, erhält es den Wert `"all"`.

    - `baseArrayLayer` {{optional_inline}}
      - : Eine Zahl, die den Index der ersten für die Ansicht zugänglichen Array-Ebene festlegt. Wenn `baseArrayLayer` weggelassen wird, erhält es den Wert 0.
    - `baseMipLevel` {{optional_inline}}
      - : Eine Zahl, die die erste (detaillierteste) für die Ansicht zugängliche Mipmap-Stufe angibt. Wenn `baseMipLevel` weggelassen wird, erhält es den Wert 0.
    - `dimension` {{optional_inline}}
      - : Ein Aufzählungswert, der angibt, in welcher Form die Textur betrachtet wird. Mögliche Werte sind:
        - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
        - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild betrachtet.
        - `"2d-array"`: Die Textur wird als Array zweidimensionaler Bilder betrachtet.
        - `"cube"`: Die Textur wird als Cubemap betrachtet. Die Ansicht hat 6 Array-Ebenen, die den Seiten `[+X, -X, +Y, -Y, +Z, -Z]` des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Seiten der Cubemap hinweg.
        - `"cube-array"`: Die Textur wird als zusammenhängendes Array aus N Cubemaps betrachtet, die jeweils 6 Array-Ebenen haben, welche den Seiten `[+X, -X, +Y, -Y, +Z, -Z]` des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Seiten der Cubemaps hinweg.
        - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

        Wenn `dimension` weggelassen wird, erhält es einen Wert nach folgenden Regeln:
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"1d"` ist, ist `dimension` `"1d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) 1 ist, ist `dimension` `"2d"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) größer als 1 ist, ist `dimension` `"2d-array"`.
        - Wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"3d"` ist, ist `dimension` `"3d"`.

    - `format` {{optional_inline}}
      - : Ein Aufzählungswert, der das Format der Texturansicht angibt. Alle möglichen Werte finden Sie im Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation.

        Wenn `format` weggelassen wird, erhält es einen Wert nach folgenden Regeln:
        - Wenn `aspect` `"depth-only"` oder `"stencil-only"` und [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, wird `format` auf das entsprechende [aspektspezifische Format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) gesetzt.
        - Andernfalls wird es auf [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) gesetzt.

    - `label` {{optional_inline}}
      - : Eine Zeichenfolge mit einer Bezeichnung, anhand derer das Objekt beispielsweise in Meldungen von [`GPUError`](/de/docs/Web/API/GPUError) oder Konsolenwarnungen identifiziert werden kann.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die festlegt, wie viele Mipmap-Stufen für die Ansicht zugänglich sind, beginnend beim Wert von `baseMipLevel`.

        Wenn `mipLevelCount` weggelassen wird, erhält es den Wert [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) - `baseMipLevel`.

    - `swizzle` {{optional_inline}}
      - : Eine Zeichenfolge aus vier Zeichen. Die Position jedes Zeichens entspricht dem Wert des roten, grünen, blauen beziehungsweise Alpha-Kanals der Texturansicht. Jedes Zeichen legt fest, welchen Wert der jeweilige Kanal annimmt, wenn ein Shader auf die Ansicht zugreift. Mögliche Werte sind:
        - `r`
          - : Der Wert des roten Kanals der Textur.
        - `g`
          - : Der Wert des grünen Kanals der Textur.
        - `b`
          - : Der Wert des blauen Kanals der Textur.
        - `a`
          - : Der Wert des Alpha-Kanals der Textur.
        - `0`
          - : Erzwingt den Wert `0`.
        - `1`
          - : Erzwingt den Wert `1`.

        Beispielsweise würden bei `swizzle: "grba"` die Werte des roten und grünen Kanals der Textur vertauscht, wenn ein Shader auf die Ansicht zugreift. Durch die Neuzuordnung von Texturkomponenten können Entwickler die Leistung optimieren, Abweichungen in der Reihenfolge der Komponenten korrigieren und Shader-Code beim Sampling von Texturen über verschiedene Texturformate hinweg wiederverwenden.

        > [!NOTE]
        > Um die Eigenschaft `swizzle` zu verwenden, müssen Sie das [Feature](/de/docs/Web/API/GPUSupportedFeatures) `texture-component-swizzle` in Ihrem [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktivieren, indem Sie es im Array `requiredFeatures` des Deskriptors für [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angeben. Wenn dieses Feature nicht aktiviert ist, hat die Eigenschaft `swizzle` keine Wirkung.

    - `usage` {{optional_inline}}
      - : Eine Menge {{Glossary("bitwise_flags", "bitweiser Flags")}}, die eine Teilmenge der Nutzungs-Flags der Quelltextur darstellen (verfügbar in der Eigenschaft [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage)) und mit dem gewählten Ansichtsformat kompatibel sind. Damit lässt sich die zulässige Nutzung der Ansicht einschränken, wenn das Ansichtsformat mit bestimmten Nutzungsarten nicht kompatibel ist. Die verfügbaren Nutzungs-Flags sind in der [Wertetabelle für `GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage#value) aufgeführt.

        Der Standardwert ist `0` und steht für die vollständige Menge der Nutzungs-Flags der Quelltextur. Wenn das [`format`](#format) der Ansicht nicht alle Nutzungsarten der Textur unterstützt, führt der Standardwert zu einem Fehler und die Nutzung der Ansicht muss ausdrücklich angegeben werden.

### Rückgabewert

Eine Objektinstanz von [`GPUTextureView`](/de/docs/Web/API/GPUTextureView).

### Validierung

Beim Aufruf von **`createView()`** müssen die folgenden Kriterien erfüllt sein. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt zurückgegeben:

- Wenn `aspect` `"all"` ist, entspricht `format` entweder [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) oder einem der `viewFormats`, die im Deskriptor-Objekt des ursprünglichen Aufrufs von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) angegeben wurden.
- Wenn `aspect` `"depth-only"` oder `"stencil-only"` ist, entspricht `format` dem passenden [aspektspezifischen Format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) des [Tiefen- oder Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- `mipLevelCount` ist größer als 0.
- `mipLevelCount` + `baseMipLevel` ist kleiner oder gleich [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `arrayLayerCount` ist größer als 0.
- `arrayLayerCount` + `baseArrayLayer` ist kleiner oder gleich [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers), wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"2d"` ist, beziehungsweise kleiner oder gleich 1, wenn [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) `"1d"` oder `"3d"` ist.
- Wenn `sampleCount` größer als 1 ist, ist `dimension` `"2d"`.
- Wenn `dimension` folgenden Wert hat:
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
    - [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) entspricht [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height)
  - `"cube-array"`
    - [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"2d"`
    - `arrayLayerCount` ist ein Vielfaches von 6
    - [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) entspricht [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height)
  - `"3d"`
    - [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"3d"`
    - `arrayLayerCount` ist 1
- Das [`format`](#format) der Ansicht unterstützt alle in der Eigenschaft [`usage`](#usage) angegebenen Nutzungsarten.

## Beispiele

### Typische Verwendung von `createView()`

In der [Cubemap-Demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/) der WebGPU-Beispiele finden Sie mehrere Beispiele für die Verwendung von `createView()`: sowohl zum Erstellen einer Ansicht als `resource` für einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) als auch zum Bereitstellen einer `view` im Objekt `depthStencilAttachment` eines Deskriptors für [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass).

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

const renderPassDescriptor = {
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

### `createView()` mit eingeschränkter Nutzung

In diesem Codeausschnitt erstellen wir eine Textur und anschließend eine Ansicht, deren Nutzung über die Eigenschaft `usage` eingeschränkt wird.

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
