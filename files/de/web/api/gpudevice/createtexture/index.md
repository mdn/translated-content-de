---
title: "GPUDevice: Methode createTexture()"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
l10n:
  sourceCommit: 1336d18a537ee2861998a9724edae796eb550349
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createTexture()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), in der 1D-, 2D- oder 3D-Datenarrays, wie Bilder, gespeichert werden, um sie in GPU-Rendering-Operationen zu verwenden.

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

        `dimension` hat den Standardwert `"2d"`, wenn der Wert weggelassen wird.

    - `format`
      - : Ein enumerierter Wert, der das Format der Textur angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

        > [!NOTE]
        >
        > - Die `depth32float-stencil8` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `depth32float-stencil8`-Format [`GPUTexture`](/de/docs/Web/API/GPUTexture)s zu erstellen.
        > - Die `texture-compression-bc` Funktion muss aktiviert sein, um zweidimensionale (`dimension: "2d"`) BC-komprimierte `GPUTexture`s zu erstellen: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm` und `bc7-rgba-unorm-srgb` Formate.
        > - Die `texture-compression-bc` und `texture-compression-bc-sliced-3d` Funktionen müssen aktiviert sein, um dreidimensionale BC-komprimierte `GPUTexture`s zu erstellen (dieselben `format` Werte, die im vorherigen Punkt angegeben wurden, jedoch mit `dimension` auf `3d` gesetzt).
        > - Die `texture-compression-astc` Funktion muss aktiviert sein, um zweidimensionale (`dimension: "2d"`) ASTC-komprimierte `GPUTexture`s zu erstellen: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb`, `astc-12x12-unorm` und `astc-12x12-unorm-srgb` Formate.
        > - Die `texture-compression-astc` und `texture-compression-astc-sliced-3d` Funktionen müssen aktiviert sein, um dreidimensionale BC-komprimierte `GPUTexture`s zu erstellen (dieselben `format` Werte, die im vorherigen Punkt angegeben wurden, jedoch mit `dimension` auf `3d` gesetzt).
        > - Die `texture-compression-etc2` Funktion muss aktiviert sein, um zweidimensionale ETC2-komprimierte `GPUTexture`s zu erstellen: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm` und `eac-rg11snorm` Formate.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Mip-Level angibt, die die Textur enthält. Wird weggelassen, beträgt der Standardwert 1.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die Sampling-Anzahl der Textur angibt. Um gültig zu sein, muss der Wert 1 oder 4 sein. Wird weggelassen, beträgt der Standardwert 1. Ein Wert größer als 1 gibt eine Multi-Sample-Textur an.
    - `size`
      - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schicht-Anzahl der Textur angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen/Array-Schicht-Anzahl optional sind und bei Weglassen den Standardwert 1 haben.

        Zum Beispiel kann ein Array wie `[16, 16, 2]` übergeben werden, oder sein äquivalentes Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }`.

    - `usage`
      - : Die {{Glossary("Bitwise_flags", "bitweisen Flags")}}, die die erlaubten Verwendungen für die `GPUTexture` darstellen. Die möglichen Werte sind in der [`GPUTexture.usage`](.usage) Wertetabelle zu finden(/de/docs/Web/API/GPUTexture/usage#value).

        Beachten Sie, dass mehrere mögliche Verwendungen spezifiziert werden können, indem Werte mit [bitweiser ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, zum Beispiel: `GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT`.

        > [!NOTE]
        >
        > - Die `bgra8unorm-storage` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um die Verwendung `STORAGE_BINDING` für ein `bgra8unorm`-[`format`](#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture) anzugeben.
        > - Die `rg11b10ufloat-renderable` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um die Verwendung `RENDER_ATTACHMENT` für ein `rg11b10ufloat`-[`format`](#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture) anzugeben, sowie dessen Blending und Multisampling.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von enumerierten Werten, die andere [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) angeben, die erlaubt sind, wenn [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für diese Textur aufgerufen wird, zusätzlich zu dem Texturformat, das in seinem `format`-Wert angegeben ist.

### Rückgabewert

Eine [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createTexture()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt zurückgegeben:

- Ein gültiges `usage` ist angegeben.
- Die in `size` angegebenen Werte (Breite, Höhe oder Tiefe/Array-Schicht-Anzahl) sind größer als 0.
- `mipLevelCount` ist größer als 0.
- `sampleCount` ist gleich 1 oder 4.
- Wenn `dimension` auf `"1d"` gesetzt ist:
  - Der `size`-Breitenwert ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxTextureDimension1D` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Die `size`-Höhe und die Tiefe/Array-Schicht-Anzahl-Werte sind gleich 1.
  - Der `sampleCount` ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder einem [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Wenn `dimension` auf `"2d"` gesetzt ist:
  - Die `size`-Breiten- und Höhenwerte sind kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxTextureDimension2D` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Der `size`-Tiefen/Array-Schicht-Anzahl-Wert ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxTextureArrayLayers` [Limit](/de/docs/Web/API/GPUSupportedLimits).
- Wenn `dimension` auf `"3d"` gesetzt ist:
  - Die `size`-Breite, -Höhe und -Tiefe/Array-Schicht-Anzahl-Werte sind kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxTextureDimension3D` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Der `sampleCount`-Wert ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder einem [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Der `size`-Breitenwert ist ein Vielfaches der [Texel-Block-Breite](https://gpuweb.github.io/gpuweb/#texel-block-width).
- Der `size`-Höhenwert ist ein Vielfaches der [Texel-Block-Höhe](https://gpuweb.github.io/gpuweb/#texel-block-height).
- Wenn `sampleCount` größer als 1 ist:
  - `mipLevelCount` ist gleich 1.
  - Der `size`-Tiefen/Array-Schicht-Anzahl-Wert ist gleich 1.
  - `usage` enthält das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag.
  - `usage` enthält nicht das `GPUTextureUsage.STORAGE_BINDING`-Flag.
  - Das angegebene Format unterstützt Multisampling.
- Der `mipLevelCount`-Wert ist kleiner oder gleich der [maximalen Miplevel-Anzahl](https://gpuweb.github.io/gpuweb/#abstract-opdef-maximum-miplevel-count).
- Die in `format` und `viewFormats` angegebenen Formate sind [kompatibel](https://gpuweb.github.io/gpuweb/#texture-view-format-compatible) miteinander.
- Wenn `usage` das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag umfasst:
  - `format` ist ein rendbares Format (bedeutet ein farbrendbares Format oder ein [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)).
  - `dimension` ist auf `"2d"` gesetzt.
- Wenn `usage` das `GPUTextureUsage.STORAGE_BINDING`-Flag umfasst:
  - Das angegebene `format` umfasst die `STORAGE_BINDING`-Fähigkeit (siehe die Tabelle [Einfache Farbformate](https://gpuweb.github.io/gpuweb/#plain-color-formats) für Referenzen).

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur, die auf den Flächen eines Würfels verwendet werden soll, erstellt durch:

- Laden des Bildes in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) und Erstellen eines Bildbitmaps mit [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap).
- Erstellen einer neuen Textur mit `createTexture()`.
- Kopieren des Bildbitmaps in die Textur mit [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture).

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
