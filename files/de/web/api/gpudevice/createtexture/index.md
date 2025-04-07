---
title: "GPUDevice: Methode createTexture()"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createTexture()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt ein [`GPUTexture`](/de/docs/Web/API/GPUTexture), um 1D-, 2D- oder 3D-Datenarrays, wie Bilder, für GPU-Rendering-Operationen zu speichern.

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
        - `"2d"`: Die Textur ist zweidimensional oder ein Array aus zweidimensionalen Schichten.
        - `"3d"`: Die Textur ist dreidimensional.

        `dimension` ist standardmäßig `"2d"`, wenn der Wert weggelassen wird.

    - `format`

      - : Ein enumerierter Wert, der das Format der Textur angibt. Siehe den Abschnitt über [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

        > [!NOTE]
        >
        > - Das `depth32float-stencil8`- [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `depth32float-stencil8`-Format-[`GPUTexture`](/de/docs/Web/API/GPUTexture)s zu erstellen.
        > - Das `texture-compression-bc`-Feature muss aktiviert sein, um zweidimensionale BC-komprimierte `GPUTexture`s zu erstellen: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm` und `bc7-rgba-unorm-srgb` Formate.
        > - Das `texture-compression-astc`-Feature muss aktiviert sein, um zweidimensionale ASTC-komprimierte `GPUTexture`s zu erstellen: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb`, und `astc-12x12-unorm``astc-12x12-unorm-srgb`-Formate.
        > - Das `texture-compression-etc2`-Feature muss aktiviert sein, um zweidimensionale ETC2-komprimierte `GPUTexture`s zu erstellen: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm` und `eac-rg11snorm`-Formate.

    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung angibt, mit der das Objekt z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen identifiziert werden kann.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die angibt, wie viele Mip-Ebenen die Textur enthalten wird. Wenn dieser Wert weggelassen wird, ist der Standardwert 1.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Abtastungen der Textur angibt. Um gültig zu sein, muss der Wert 1 oder 4 sein. Wird er weggelassen, ist der Standardwert 1. Ein Wert größer als 1 gibt eine multi-abgetastete Textur an.
    - `size`

      - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtenanzahl der Textur angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen-/Array-Schichtenanzahl optional sind und auf 1 standardmäßig gesetzt werden, wenn weggelassen.

        Zum Beispiel können Sie ein Array wie `[16, 16, 2]` übergeben oder das gleichwertige Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }`.

    - `usage`

      - : Die {{Glossary("Bitwise_flags", "bitweisen Flags")}}, die die erlaubten Nutzungen für das `GPUTexture` darstellen. Die möglichen Werte befinden sich in der [`GPUTexture.usage`-Wertetabelle](/de/docs/Web/API/GPUTexture/usage#value).

        Beachten Sie, dass mehrere mögliche Nutzungen angegeben werden können, indem die Werte mit [bitweise ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, zum Beispiel: `GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT`.

        > [!NOTE]
        >
        > - Das `bgra8unorm-storage`- [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um die `STORAGE_BINDING`-Nutzung für ein `bgra8unorm`-[`format`](#format)-[`GPUTexture`](/de/docs/Web/API/GPUTexture) anzugeben.
        > - Das `rg11b10ufloat-renderable`- [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um die `RENDER_ATTACHMENT`-Nutzung für ein `rg11b10ufloat`-[`format`](#format)-[`GPUTexture`](/de/docs/Web/API/GPUTexture) anzugeben, ebenso wie dessen Blending und Multisampling.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von enumerierten Werten, die andere [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) angeben, die beim Aufrufen von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) auf dieser Textur zulässig sind, zusätzlich zu dem Texturformat, das in seinem `format`-Wert angegeben ist.

### Rückgabewert

Eine Instanz des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt zurückgegeben:

- Es wird ein gültiger `usage` angegeben.
- Die in `size` (Breite, Höhe oder Tiefe/Array-Schichtenanzahl) angegebenen Werte sind größer als 0.
- `mipLevelCount` ist größer als 0.
- `sampleCount` ist gleich 1 oder 4.
- Wenn `dimension` auf `"1d"` gesetzt ist:
  - Der `size`-Breitenwert ist kleiner oder gleich dem `maxTextureDimension1D`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Die `size`-Höhen- und Tiefen-/Array-Schichtenanzahl-Werte sind gleich 1.
  - Der `sampleCount` ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Wenn `dimension` auf `"2d"` gesetzt ist:
  - Die `size`-Breiten- und Höhenwerte sind kleiner oder gleich dem `maxTextureDimension2D`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Der `size`-Tiefen-/Array-Schichtenanzahl-Wert ist kleiner oder gleich dem `maxTextureArrayLayers`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `dimension` auf `"3d"` gesetzt ist:
  - Die `size`-Breiten-, Höhen- und Tiefen-/Array-Schichtenanzahl-Werte sind kleiner oder gleich dem `maxTextureDimension3D`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Der `sampleCount`-Wert ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Der `size`-Breitenwert ist ein Vielfaches der [Texel-Block-Breite](https://gpuweb.github.io/gpuweb/#texel-block-width).
- Der `size`-Höhenwert ist ein Vielfaches der [Texel-Block-Höhe](https://gpuweb.github.io/gpuweb/#texel-block-height).
- Wenn `sampleCount` größer als 1 ist:
  - `mipLevelCount` ist gleich 1.
  - Der `size`-Tiefen-/Array-Schichtenanzahl-Wert ist gleich 1.
  - `usage` enthält das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag.
  - `usage` enthält nicht das `GPUTextureUsage.STORAGE_BINDING`-Flag.
  - Das angegebene Format unterstützt Multi-Sampling.
- Der `mipLevelCount`-Wert ist kleiner oder gleich der [maximalen Mip-Ebenenzahl](https://gpuweb.github.io/gpuweb/#abstract-opdef-maximum-miplevel-count).
- Die in `format` und `viewFormats` angegebenen Formate sind [kompatibel](https://gpuweb.github.io/gpuweb/#texture-view-format-compatible) miteinander.
- Wenn `usage` das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag enthält:
  - `format` ist ein renderbares Format (d.h. ein farblich renderbares Format oder ein [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)).
  - `dimension` ist auf `"2d"` gesetzt.
- Wenn `usage` das `GPUTextureUsage.STORAGE_BINDING`-Flag enthält:
  - Das angegebene `format` enthält die `STORAGE_BINDING`-Fähigkeit (siehe die [einfachen Farbformate](https://gpuweb.github.io/gpuweb/#plain-color-formats)-Tabelle zur Referenz).

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur erstellt, die auf die Flächen eines Würfels angewendet wird, indem:

- Das Bild in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) geladen und ein Bild-Bitmap mit [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) erstellt wird.
- Eine neue Textur mit `createTexture()` erstellt wird.
- Das Bild-Bitmap mit [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture) in die Textur kopiert wird.

```js
//...

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

//...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
