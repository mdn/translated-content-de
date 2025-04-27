---
title: "GPUDevice: createTexture() Methode"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createTexture()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), in der 1D-, 2D- oder 3D-Datenarrays, wie z.B. Bilder, gespeichert werden können, um in GPU-Rendering-Operationen verwendet zu werden.

## Syntax

```js-nolint
createTexture(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `dimension` {{optional_inline}}

      - : Ein enumerierter Wert, der das Dimensionsniveau der Textur angibt. Mögliche Werte sind:

        - `"1d"`: Die Textur ist eindimensional.
        - `"2d"`: Die Textur ist zweidimensional oder ein Array von zweidimensionalen Schichten.
        - `"3d"`: Die Textur ist dreidimensional.

        `dimension` ist standardmäßig `"2d"`, wenn der Wert weggelassen wird.

    - `format`

      - : Ein enumerierter Wert, der das Format der Textur spezifiziert. Siehe den Abschnitt [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

        > [!NOTE]
        >
        > - Das `depth32float-stencil8` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `GPUTexture`s im `depth32float-stencil8`-Format zu erstellen.
        > - Das `texture-compression-bc` Feature muss aktiviert sein, um zweidimensionale BC komprimierte `GPUTexture`s zu erstellen: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm`, und `bc7-rgba-unorm-srgb` Formate.
        > - Das `texture-compression-astc` Feature muss aktiviert sein, um zweidimensionale ASTC komprimierte `GPUTexture`s zu erstellen: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb`, und `astc-12x12-unorm``astc-12x12-unorm-srgb` Formate.
        > - Das `texture-compression-etc2` Feature muss aktiviert sein, um zweidimensionale ETC2 komprimierte `GPUTexture`s zu erstellen: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm`, und `eac-rg11snorm` Formate.

    - `label` {{optional_inline}}
      - : Ein String, der ein Etikett bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Mip-Level der Textur angibt. Wenn weggelassen, ist der Standardwert 1.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Samples der Textur angibt. Um gültig zu sein, muss der Wert 1 oder 4 sein. Wenn weggelassen, ist der Standardwert 1. Ein Wert größer als 1 gibt eine mehrfach gesampelte Textur an.
    - `size`

      - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtenanzahl der Textur spezifiziert. Der Wert für die Breite muss immer angegeben werden, während die Werte für die Höhe und Tiefe/Array-Schichtenanzahl optional sind und bei Weglassen standardmäßig auf 1 gesetzt werden.

        Zum Beispiel kann ein Array wie `[16, 16, 2]` oder sein äquivalentes Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben werden.

    - `usage`

      - : Die {{Glossary("Bitwise_flags", "bitweisen Flags")}}, die die erlaubten Verwendungen für die `GPUTexture` darstellen. Die möglichen Werte befinden sich in der [`GPUTexture.usage`-Wertetabelle](/de/docs/Web/API/GPUTexture/usage#value).

        Beachten Sie, dass mehrere mögliche Verwendungen durch das Trennen der Werte mit [bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können, z.B.: `GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT`.

        > [!NOTE]
        >
        > - Das `bgra8unorm-storage` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `STORAGE_BINDING` Verwendung für eine `bgra8unorm`-[`format`](#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture) anzugeben.
        > - Das `rg11b10ufloat-renderable` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `RENDER_ATTACHMENT` Verwendung für eine `rg11b10ufloat`-[`format`](#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture) anzugeben, sowie deren Blending und Multisampling.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von enumerierten Werten, das andere [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) spezifiziert, die bei einem Aufruf von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) auf dieser Textur, zusätzlich zu dem in ihrem `format`-Wert spezifizierten Texturformat, zulässig sind.

### Rückgabewert

Eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createTexture()`** aufgerufen wird, sonst wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUTexture`](/de/docs/Web/API/GPUTexture) Objekt zurückgegeben:

- Eine gültige `usage` ist spezifiziert.
- Die in `size` angegebenen Werte (Breite, Höhe oder Tiefe/Array-Schichtenanzahl) sind größer als 0.
- `mipLevelCount` ist größer als 0.
- `sampleCount` ist gleich 1 oder 4.
- Wenn `dimension` auf `"1d"` gesetzt ist:
  - Der `size`-Breitenwert ist kleiner oder gleich dem `maxTextureDimension1D` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Die `size`-Höhe und die Tiefe/Array-Schichtenanzahl sind gleich 1.
  - Der `sampleCount` ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Wenn `dimension` auf `"2d"` gesetzt ist:
  - Die `size`-Breiten- und Höhenwerte sind kleiner oder gleich dem `maxTextureDimension2D` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Der `size`-Wert für Tiefe/Array-Schichtenanzahl ist kleiner oder gleich dem `maxTextureArrayLayers` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `dimension` auf `"3d"` gesetzt ist:
  - Die `size`-Breite, -Höhe und Tiefen/Array-Schichtenanzahl sind kleiner oder gleich dem `maxTextureDimension3D` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Der `sampleCount`-Wert ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Der `size`-Breitenwert ist ein Vielfaches der [Texelblockbreite](https://gpuweb.github.io/gpuweb/#texel-block-width).
- Der `size`-Höhenwert ist ein Vielfaches der [Texelblockhöhe](https://gpuweb.github.io/gpuweb/#texel-block-height).
- Wenn `sampleCount` größer als 1 ist:
  - `mipLevelCount` ist gleich 1.
  - Der `size`-Wert für die Tiefe/Array-Schichtenanzahl ist gleich 1.
  - `usage` enthält das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag.
  - `usage` enthält nicht das `GPUTextureUsage.STORAGE_BINDING`-Flag.
  - Das angegebene Format unterstützt Multisampling.
- Der `mipLevelCount`-Wert ist kleiner oder gleich der [maximalen Miplevel-Anzahl](https://gpuweb.github.io/gpuweb/#abstract-opdef-maximum-miplevel-count).
- Die in `format` und `viewFormats` angegebenen Formate sind [kompatibel](https://gpuweb.github.io/gpuweb/#texture-view-format-compatible) miteinander.
- Wenn `usage` das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag enthält:
  - `format` ist ein renderbares Format (d.h. ein farbrenderbares Format oder ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)).
  - `dimension` ist auf `"2d"` gesetzt.
- Wenn `usage` das `GPUTextureUsage.STORAGE_BINDING`-Flag enthält:
  - Das angegebene `format` enthält die `STORAGE_BINDING`-Fähigkeit (siehe die [Plain color formats](https://gpuweb.github.io/gpuweb/#plain-color-formats) Tabelle zur Referenz).

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur, die auf den Flächen eines Würfels verwendet werden soll, erstellt, indem:

- das Bild in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) geladen und ein Bild-Bitmap mithilfe von [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) erstellt wird.
- eine neue Textur mit `createTexture()` erstellt wird.
- das Bild-Bitmap in die Textur mit [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture) kopiert wird.

```js
// …

let cubeTexture;

{
  const img = document.createElement("img");
  img.src = new URL(
    "../../../assets/img/Di-3d.png",
    import.meta.url,
  ).toString();
  await img.decode();
  const imageBitmap = await createImageBitmap(img);

  cubeTexture = device.createTexture({
    size: [imageBitmap.width, imageBitmap.height, 1],
    format: "rgba8unorm",
    usage:
      GPUTextureUsage.TEXTURE_BINDING |
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });
  device.queue.copyExternalImageToTexture(
    { source: imageBitmap },
    { texture: cubeTexture },
    [imageBitmap.width, imageBitmap.height],
  );
}

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
