---
title: "GPUDevice: createTexture() Methode"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
l10n:
  sourceCommit: 78c41c9b5211cc5bfba793c72a9adcac852e07f9
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createTexture()`** Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), um 1D-, 2D- oder 3D-Datenarrays wie Bilder zu speichern, die in GPU-Rendering-Operationen verwendet werden.

## Syntax

```js-nolint
createTexture(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `dimension` {{optional_inline}}
      - : Ein enumerierter Wert, der das Dimensionsniveau der Textur angibt. Mögliche Werte sind:
        - `"1d"`: Die Textur ist eindimensional.
        - `"2d"`: Die Textur ist zweidimensional oder ein Array aus zweidimensionalen Schichten.
        - `"3d"`: Die Textur ist dreidimensional.

        `dimension` hat standardmäßig den Wert `"2d"`, wenn der Wert ausgelassen wird.

    - `format`
      - : Ein enumerierter Wert, der das Format der Textur angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

        > [!NOTE]
        >
        > - Die `depth32float-stencil8` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `depth32float-stencil8`-Format-[`GPUTexture`](/de/docs/Web/API/GPUTexture)s zu erstellen.
        > - Die `texture-compression-bc` Funktion muss aktiviert sein, um zweidimensionale (`dimension: "2d"`) BC-komprimierte `GPUTexture`s zu erstellen: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm` und `bc7-rgba-unorm-srgb` Formate.
        > - Die `texture-compression-bc` und `texture-compression-bc-sliced-3d` Funktionen müssen aktiviert sein, um dreidimensionale BC-komprimierte `GPUTexture`s zu erstellen (die gleichen `format`-Werte wie im vorherigen Punkt, aber mit `dimension` auf `3d` gesetzt).
        > - Die `texture-compression-astc` Funktion muss aktiviert sein, um zweidimensionale (`dimension: "2d"`) ASTC-komprimierte `GPUTexture`s zu erstellen: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb`, `astc-12x12-unorm` und `astc-12x12-unorm-srgb` Formate.
        > - Die `texture-compression-astc` und `texture-compression-astc-sliced-3d` Funktionen müssen aktiviert sein, um dreidimensionale BC-komprimierte `GPUTexture`s zu erstellen (die gleichen `format`-Werte wie im vorherigen Punkt, aber mit `dimension` auf `3d` gesetzt).
        > - Die `texture-compression-etc2` Funktion muss aktiviert sein, um zweidimensionale ETC2-komprimierte `GPUTexture`s zu erstellen: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm` und `eac-rg11snorm` Formate.
        > - Siehe den Abschnitt [Tier 1 und Tier 2 Texturformate](#tier_1_und_tier_2_texturformate) für weitere Informationen über diese Texturformat-Sets und die Anforderungen, sie zu erstellen.

    - `label` {{optional_inline}}
      - : Ein String, der ein Etikett bereitstellt, das verwendet werden kann, um das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen zu identifizieren.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Mip-Ebenen angibt, die die Textur enthalten wird. Wenn ausgelassen, ist der Standardwert 1.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die Sampling-Anzahl der Textur angibt. Um gültig zu sein, muss der Wert 1 oder 4 sein. Wenn ausgelassen, ist der Standardwert 1. Ein höherer Wert als 1 zeigt eine multisample Textur an.
    - `size`
      - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtebene der Textur angibt. Der Wert für die Breite muss immer angegeben werden, während die Höhe und die Tiefe/Array-Schichtebene optional sind und auf 1 voreingestellt sind, wenn sie ausgelassen werden.

        Zum Beispiel, Sie können ein Array wie `[16, 16, 2]` oder sein gleichwertiges Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

    - `usage`
      - : Die {{Glossary("Bitwise_flags", "Bitmasken")}}, die die erlaubten Nutzungen für die `GPUTexture` darstellen. Die möglichen Werte sind in der [`GPUTexture.usage` Werttabelle](/de/docs/Web/API/GPUTexture/usage#value) zu finden.

        Beachten Sie, dass mehrere mögliche Nutzungen angegeben werden können, indem Werte mit [bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, z.B.: `GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT`.

        > [!NOTE]
        >
        > - Die `bgra8unorm-storage` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `STORAGE_BINDING` Nutzung für ein `bgra8unorm`-[`format`](#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture) anzugeben.
        > - Die `rg11b10ufloat-renderable` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `RENDER_ATTACHMENT` Nutzung für ein `rg11b10ufloat`-[`format`](#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture) anzugeben, ebenso wie sein Blending und Multisampling.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von enumerierten Werten, das andere erlaubte [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) angibt, wenn [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) auf dieser Textur aufgerufen wird, zusätzlich zu dem im `format`-Wert angegebenen Texturformat.

### Rückgabewert

Eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen bei der Aufruf von **`createTexture()`** erfüllt sein, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) ausgelöst und ein ungültiges [`GPUTexture`](/de/docs/Web/API/GPUTexture) Objekt zurückgegeben:

- Eine gültige `usage` ist angegeben.
- Die in `size` angegebenen Werte (Breite, Höhe oder Tiefe/Array-Schichtebene) sind größer als 0.
- `mipLevelCount` ist größer als 0.
- `sampleCount` ist gleich 1 oder 4.
- Wenn `dimension` auf `"1d"` gesetzt ist:
  - Der `size` Breitenwert ist kleiner oder gleich der [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxTextureDimension1D` [Grenze](/de/docs/Web/API/GPUSupportedLimits).
  - Die `size` Höhen- und Tiefe/Array-Schichtebenenwerte sind gleich 1.
  - Der `sampleCount` ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Wenn `dimension` auf `"2d"` gesetzt ist:
  - Die `size` Breiten- und Höhenwerte sind kleiner oder gleich der [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxTextureDimension2D` [Grenze](/de/docs/Web/API/GPUSupportedLimits).
  - Der `size` Tiefe/Array-Schichtebenenwert ist kleiner oder gleich der [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxTextureArrayLayers` [Grenze](/de/docs/Web/API/GPUSupportedLimits).
- Wenn `dimension` auf `"3d"` gesetzt ist:
  - Die `size` Breite, Höhe und Tiefe/Array-Schichtebenenwerte sind kleiner oder gleich der [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxTextureDimension3D` [Grenze](/de/docs/Web/API/GPUSupportedLimits).
  - Der `sampleCount` Wert ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Der `size` Breitenwert ist ein Vielfaches der [Texel-Block-Breite](https://gpuweb.github.io/gpuweb/#texel-block-width).
- Der `size` Höhenwert ist ein Vielfaches der [Texel-Block-Höhe](https://gpuweb.github.io/gpuweb/#texel-block-height).
- Wenn `sampleCount` größer als 1 ist:
  - `mipLevelCount` ist gleich 1.
  - Der `size` Tiefe/Array-Schichtebenenwert ist gleich 1.
  - `usage` enthält das `GPUTextureUsage.RENDER_ATTACHMENT` Flag.
  - `usage` enthält nicht das `GPUTextureUsage.STORAGE_BINDING` Flag.
  - Das angegebene Format unterstützt Multisampling.
- Der `mipLevelCount` Wert ist kleiner als oder gleich der [maximalen Mip-Ebenenzahl](https://gpuweb.github.io/gpuweb/#abstract-opdef-maximum-miplevel-count).
- Die in `format` und `viewFormats` angegebenen Formate sind [kompatibel](https://gpuweb.github.io/gpuweb/#texture-view-format-compatible) zueinander.
- Wenn `usage` das `GPUTextureUsage.RENDER_ATTACHMENT` Flag enthält:
  - `format` ist ein renderbares Format (ein farbrenderbares Format oder ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)).
  - `dimension` ist auf `"2d"` gesetzt.
- Wenn `usage` das `GPUTextureUsage.STORAGE_BINDING` Flag enthält:
  - Das angegebene `format` umfasst die `STORAGE_BINDING` Fähigkeit (siehe die Tabelle der [einfachen Farbformate](https://gpuweb.github.io/gpuweb/#plain-color-formats) als Referenz).

## Tier 1 und Tier 2 Texturformate

Dieser Abschnitt beschreibt die WebGPU Tier 1 und Tier 2 Texturformate.

### Tier 1

Die Tier 1 Sammlungen von Texturformaten sind entworfen, um Entwicklern eine Übertragung bestehender Inhalte auf das Web zu ermöglichen, ohne dass diese es neu schreiben müssen, um die niedrigeren Fähigkeiten von WebGPU zu nutzen. Um diesen Satz zu nutzen, aktivieren Sie die `texture-formats-tier1` Funktion (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).

Diese Funktion zu aktivieren, erlaubt:

- Die folgenden [`format`](#format)e mit [`usage`](#usage)n von `RENDER_ATTACHMENT` (inklusive misch- und multisamplingfähiger Fähigkeiten) und `STORAGE_BINDING` (mit `read-only` und `write-only` [`access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access)) zu verwenden:
  - `r16unorm`
  - `r16snorm`
  - `rg16unorm`
  - `rg16snorm`
  - `rgba16unorm`
  - `rgba16snorm`
- Die folgenden [`format`](#format)e mit der `RENDER_ATTACHMENT` [`usage`](#usage) (inklusive misch- und multisamplingfähiger Fähigkeiten) zu verwenden:
  - `r8snorm`
  - `rg8snorm`
  - `rgba8snorm`
- Die folgenden [`format`](#format)e mit der `STORAGE_BINDING` [`usage`](#usage) (mit `read-only` und `write-only` [`access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access)) zu verwenden:
  - `r8unorm`
  - `r8snorm`
  - `r8uint`
  - `r8sint`
  - `rg8unorm`
  - `rg8snorm`
  - `rg8uint`
  - `rg8sint`
  - `r16uint`
  - `r16sint`
  - `r16float`
  - `rg16uint`
  - `rg16sint`
  - `rg16float`
  - `rgb10a2uint`
  - `rgb10a2unorm`
  - `rg11b10ufloat`
- Das Verwenden der folgenden `GPUTexture` Formate im Ziel-[`texture`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture#texture) von [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture) Aufrufen:
  - `r16unorm`
  - `rg16unorm`
  - `rgba16unorm`

> [!NOTE]
> Die Aktivierung der `texture-formats-tier1` Funktion aktiviert automatisch die `rg11b10ufloat-renderable` Funktion, die es erlaubt, die `rg11b10ufloat` Textur mit der Nutzung `RENDER_ATTACHMENT`, inklusive Blending und Multisampling, zu verwenden.

### Tier 2

Die Tier 2 Sammlungen von Texturformaten unterstützen Speichertexturformate, die in "Kern"-WebGPU keine Unterstützung haben und für fortgeschrittenen Einsatz benötigt werden. Um diesen Satz zu nutzen, aktivieren Sie die `texture-formats-tier2` Funktion (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).

Diese Funktion zu aktivieren, erlaubt die Verwendung der folgenden [`format`](#format)e mit der `STORAGE_BINDING` [`usage`](#usage) (mit `read-write` [`access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access)):

- `r8unorm`
- `r8uint`
- `r8sint`
- `rgba8unorm`
- `rgba8uint`
- `rgba8sint`
- `r16uint`
- `r16sint`
- `r16float`
- `rgba16uint`
- `rgba16sint`
- `rgba16float`
- `rgba32uint`
- `rgba32sint`
- `rgba32float`

> [!NOTE]
> Die Aktivierung der `texture-formats-tier2` Funktion aktiviert automatisch die `rg11b10ufloat-renderable` und `texture-formats-tier1` Funktionen.

## Beispiele

Im WebGPU Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur erstellt, die auf den Flächen eines Würfels verwendet wird, durch:

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
