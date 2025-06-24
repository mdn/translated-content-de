---
title: "GPUDevice: createTexture()-Methode"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createTexture()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), um darin 1D-, 2D- oder 3D-Datenarrays wie Bilder zu speichern, die in GPU-Rendering-Operationen verwendet werden.

## Syntax

```js-nolint
createTexture(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `dimension` {{optional_inline}}

      - : Ein Aufzählungswert, der die Dimensionsebene der Textur angibt. Mögliche Werte sind:

        - `"1d"`: Die Textur ist eindimensional.
        - `"2d"`: Die Textur ist zweidimensional oder ein Array zweidimensionaler Schichten.
        - `"3d"`: Die Textur ist dreidimensional.

        `dimension` hat den Standardwert `"2d"`, wenn der Wert weggelassen wird.

    - `format`

      - : Ein Aufzählungswert, der das Format der Textur angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

        > [!NOTE]
        >
        > - Das `depth32float-stencil8`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert werden, um `depth32float-stencil8`-Format-`GPUTexture`s zu erstellen.
        > - Das `texture-compression-bc`-Feature muss aktiviert werden, um zweidimensionale BC-komprimierte `GPUTexture`s zu erstellen: Formate wie `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, und andere.
        > - Das `texture-compression-astc`-Feature muss aktiviert werden, um zweidimensionale ASTC-komprimierte `GPUTexture`s zu erstellen: Formate wie `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, und andere.
        > - Das `texture-compression-etc2`-Feature muss aktiviert werden, um zweidimensionale ETC2-komprimierte `GPUTexture`s zu erstellen: Formate wie `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, und andere.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Mip-Ebenen angibt, die die Textur enthalten wird. Wenn weggelassen, beträgt dieser Standardwert 1.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Proben der Textur angibt. Um gültig zu sein, muss der Wert 1 oder 4 sein. Wenn weggelassen, beträgt dieser Standardwert 1. Ein höherer Wert als 1 bedeutet eine mehrfach abgetastete Textur.
    - `size`

      - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Ebenenanzahl der Textur angibt. Der Wert für die Breite muss immer angegeben werden, während die Werte für die Höhe und die Tiefe/Array-Ebenenanzahl optional sind und standardmäßig 1 betragen, wenn sie weggelassen werden.

        Zum Beispiel können Sie ein Array wie `[16, 16, 2]` oder das entsprechende Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

    - `usage`

      - : Die {{Glossary("Bitwise_flags", "bitweisen Flags")}}, die die zulässigen Verwendungen für die `GPUTexture` darstellen. Die möglichen Werte befinden sich in der [`GPUTexture.usage`-Wert-Tabelle](/de/docs/Web/API/GPUTexture/usage#value).

        Beachten Sie, dass mehrere mögliche Verwendungen angegeben werden können, indem Werte mit [bitweisem OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, zum Beispiel: `GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT`.

        > [!NOTE]
        >
        > - Das `bgra8unorm-storage`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert werden, um die `STORAGE_BINDING`-Verwendung für eine `bgra8unorm`-[`format`](#format)-`GPUTexture` anzugeben.
        > - Das `rg11b10ufloat-renderable`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert werden, um die `RENDER_ATTACHMENT`-Verwendung für eine `rg11b10ufloat`-[`format`](#format)-`GPUTexture` anzugeben, sowie deren Blending und Multisampling.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von Aufzählungswerten, das andere [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) angibt, die beim Aufruf von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) auf dieser Textur zulässig sind, zusätzlich zu dem in ihrem `format`-Wert angegebenen Texturformat.

### Rückgabewert

Eine [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createTexture()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt zurückgegeben:

- Eine gültige `usage` wird angegeben.
- Die in `size` (Breite, Höhe oder Tiefe/Array-Ebenenanzahl) angegebenen Werte sind größer als 0.
- `mipLevelCount` ist größer als 0.
- `sampleCount` ist gleich 1 oder 4.
- Wenn `dimension` auf `"1d"` eingestellt ist:
  - Der `size`-Breitwert ist kleiner oder gleich dem `maxTextureDimension1D`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Die `size`-Höhe und Tiefe/Array-Ebenenanzahl-Werte sind gleich 1.
  - Der `sampleCount` ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder einem [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Wenn `dimension` auf `"2d"` eingestellt ist:
  - Die `size`-Breiten- und Höhenwerte sind kleiner oder gleich dem `maxTextureDimension2D`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Der `size`-Tiefe/Array-Ebenenanzahl-Wert ist kleiner oder gleich dem `maxTextureArrayLayers`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `dimension` auf `"3d"` eingestellt ist:
  - Die `size`-Breite, -Höhe und -Tiefe/Array-Ebenenanzahl-Werte sind kleiner oder gleich dem `maxTextureDimension3D`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Der `sampleCount`-Wert ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder einem [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Der `size`-Breitwert ist ein Vielfaches der [Texel-Block-Breite](https://gpuweb.github.io/gpuweb/#texel-block-width).
- Der `size`-Höhenwert ist ein Vielfaches der [Texel-Block-Höhe](https://gpuweb.github.io/gpuweb/#texel-block-height).
- Wenn `sampleCount` größer als 1 ist:
  - `mipLevelCount` ist gleich 1.
  - Der `size`-Tiefe/Array-Ebenenanzahl-Wert ist gleich 1.
  - `usage` enthält das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag.
  - `usage` enthält nicht das `GPUTextureUsage.STORAGE_BINDING`-Flag.
  - Das angegebene Format unterstützt Multisampling.
- Der `mipLevelCount`-Wert ist kleiner oder gleich der [maximalen Mip-Ebenenanzahl](https://gpuweb.github.io/gpuweb/#abstract-opdef-maximum-miplevel-count).
- Die in `format` und `viewFormats` angegebenen Formate sind [kompatibel](https://gpuweb.github.io/gpuweb/#texture-view-format-compatible) miteinander.
- Wenn `usage` das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag enthält:
  - `format` ist ein renderbares Format (das bedeutet ein Farbrenderbares Format oder ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)).
  - `dimension` ist auf `"2d"` eingestellt.
- Wenn `usage` das `GPUTextureUsage.STORAGE_BINDING`-Flag enthält:
  - Das angegebene `format` enthält die `STORAGE_BINDING`-Fähigkeit (siehe die Tabelle [einfache Farbformate](https://gpuweb.github.io/gpuweb/#plain-color-formats) als Referenz).

## Beispiele

Im WebGPU-Beispiel [Texturierte Würfel-Beispiel](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur zum Verwenden auf den Flächen eines Würfels erstellt durch:

- Laden des Bildes in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) und Erstellen eines Bild-Bitmaps mithilfe von [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap).
- Erstellen einer neuen Textur mit `createTexture()`.
- Kopieren des Bild-Bitmaps in die Textur mit [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture).

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
