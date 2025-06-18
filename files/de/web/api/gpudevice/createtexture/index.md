---
title: "GPUDevice: Methode createTexture()"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createTexture()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), um 1D-, 2D- oder 3D-Datenarrays, wie Bilder, für GPU-Rendering-Vorgänge zu speichern.

## Syntax

```js-nolint
createTexture(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `dimension` {{optional_inline}}

      - : Ein enumerierter Wert, der die Dimensionsebene der Textur angibt. Mögliche Werte sind:

        - `"1d"`: Die Textur ist eindimensional.
        - `"2d"`: Die Textur ist zweidimensional oder ein Array von zweidimensionalen Schichten.
        - `"3d"`: Die Textur ist dreidimensional.

        `dimension` ist standardmäßig auf `"2d"` gesetzt, wenn der Wert weggelassen wird.

    - `format`

      - : Ein enumerierter Wert, der das Format der Textur angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

        > [!NOTE]
        >
        > - Das `depth32float-stencil8`- [Merkmal](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um [`GPUTexture`](/de/docs/Web/API/GPUTexture)s im `depth32float-stencil8`-Format zu erstellen.
        > - Das Merkmal `texture-compression-bc` muss aktiviert sein, um zweidimensionale BC-komprimierte `GPUTexture`s zu erstellen: Formate wie `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, etc.
        > - Das Merkmal `texture-compression-astc` muss aktiviert sein, um zweidimensionale ASTC-komprimierte `GPUTexture`s zu erstellen: Formate wie `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, etc.
        > - Das Merkmal `texture-compression-etc2` muss aktiviert sein, um zweidimensionale ETC2-komprimierte `GPUTexture`s zu erstellen: Formate wie `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, etc.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen, verwendet werden kann.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Mip-Ebenen angibt, die die Textur enthalten wird. Wenn weggelassen, ist dieser Wert standardmäßig 1.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Samples der Textur angibt. Um gültig zu sein, muss der Wert 1 oder 4 sein. Wenn weggelassen, ist dieser Wert standardmäßig 1. Ein Wert höher als 1 gibt eine Multi-Sample-Textur an.
    - `size`

      - : Ein Objekt oder Array, das die Breite, Höhe und die Tiefe/Array-Schichtebene der Textur angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen/Array-Schichtwerte optional sind und standardmäßig 1 sind, wenn sie weggelassen werden.

        Beispielsweise kann ein Array wie `[16, 16, 2]` oder dessen äquivalentes Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben werden.

    - `usage`

      - : Die {{Glossary("Bitwise_flags", "Bit-Flags")}}, die die erlaubten Verwendungen für die `GPUTexture` repräsentieren. Die möglichen Werte finden sich in der [`GPUTexture.usage`-Wertetabelle](/de/docs/Web/API/GPUTexture/usage#value).

        Beachten Sie, dass mehrere mögliche Verwendungen angegeben werden können, indem Werte mit [Bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, zum Beispiel: `GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT`.

        > [!NOTE]
        >
        > - Das `bgra8unorm-storage`- [Merkmal](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `STORAGE_BINDING`-Verwendung für eine `bgra8unorm`- [format](#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture) anzugeben.
        > - Das `rg11b10ufloat-renderable`- [Merkmal](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `RENDER_ATTACHMENT`-Verwendung für eine `rg11b10ufloat`- [format](#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture) sowie dessen Blending und Multisampling anzugeben.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von enumerierten Werten, die andere [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) angeben, die beim Aufrufen von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) auf dieser Textur zulässig sind, zusätzlich zu dem im `format`-Wert angegebenen Texturformat.

### Rückgabewert

Eine Instanz des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt zurückgegeben:

- Ein gültiges `usage` ist angegeben.
- Die in `size` angegebenen Werte (Breite, Höhe oder Tiefe/Array-Schichtanzahl) sind größer als 0.
- `mipLevelCount` ist größer als 0.
- `sampleCount` ist gleich 1 oder 4.
- Wenn `dimension` auf `"1d"` gesetzt ist:
  - Der `size`-Breitenwert ist kleiner oder gleich dem `maxTextureDimension1D`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Die `size`-Höhen- und Tiefen/Array-Schichtwerte sind gleich 1.
  - Der `sampleCount` ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Wenn `dimension` auf `"2d"` gesetzt ist:
  - Die `size`-Breiten- und Höhenwerte sind kleiner oder gleich dem `maxTextureDimension2D`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Der `size`-Tiefen/Array-Schichtwert ist kleiner oder gleich dem `maxTextureArrayLayers`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `dimension` auf `"3d"` gesetzt ist:
  - Die `size`-Breite, -Höhe und -Tiefen/Array-Schichtwerte sind kleiner oder gleich dem `maxTextureDimension3D`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Der `sampleCount`-Wert ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Der `size`-Breitenwert ist ein Vielfaches der [Texel-Blockbreite](https://gpuweb.github.io/gpuweb/#texel-block-width).
- Der `size`-Höhenwert ist ein Vielfaches der [Texel-Blockhöhe](https://gpuweb.github.io/gpuweb/#texel-block-height).
- Wenn `sampleCount` größer als 1 ist:
  - `mipLevelCount` ist gleich 1.
  - Der `size`-Tiefen/Array-Schichtwert ist gleich 1.
  - `usage` enthält das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag.
  - `usage` enthält nicht das `GPUTextureUsage.STORAGE_BINDING`-Flag.
  - Das angegebene Format unterstützt Multi-Sampling.
- Der `mipLevelCount`-Wert ist kleiner oder gleich der [maximalen Mip-Ebenenzahl](https://gpuweb.github.io/gpuweb/#abstract-opdef-maximum-miplevel-count).
- Die in `format` und `viewFormats` angegebenen Formate sind [kompatibel](https://gpuweb.github.io/gpuweb/#texture-view-format-compatible) miteinander.
- Wenn `usage` das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag enthält:
  - `format` ist ein renderbares Format (das bedeutet ein farb-rendbares Format oder ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)).
  - `dimension` ist auf `"2d"` gesetzt.
- Wenn `usage` das `GPUTextureUsage.STORAGE_BINDING`-Flag enthält:
  - Das angegebene `format` hat die `STORAGE_BINDING`-Fähigkeit (siehe die Tabelle der [uniformen Farbformate](https://gpuweb.github.io/gpuweb/#plain-color-formats) zur Referenz).

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur erstellt, die auf die Flächen eines Würfels angewendet wird durch:

- Laden des Bildes in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) und Erstellen eines Bildbitmaps mittels [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap).
- Erstellen einer neuen Textur mit `createTexture()`.
- Kopieren der Bildbitmap in die Textur mit [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture).

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
