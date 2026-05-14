---
title: "GPUDevice: createTexture() Methode"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
l10n:
  sourceCommit: e5909a8f548695b72649ce32216c8fada21479c9
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createTexture()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), um 1D-, 2D- oder 3D-Datenarrays, wie Bilder, für GPU-Rendering-Operationen zu speichern.

## Syntax

```js-nolint
createTexture(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `dimension` {{optional_inline}}
      - : Ein enumerierter Wert, der die Dimensionsebene der Textur angibt. Mögliche Werte sind:
        - `"1d"`: Die Textur ist eindimensional.
        - `"2d"`: Die Textur ist zweidimensional oder ein Array aus zweidimensionalen Schichten.
        - `"3d"`: Die Textur ist dreidimensional.

        `dimension` hat den Standardwert `"2d"`, wenn der Wert weggelassen wird.

    - `format`
      - : Ein enumerierter Wert, der das Format der Textur angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

        > [!NOTE]
        >
        > - Die `depth32float-stencil8`- [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `depth32float-stencil8`-Format- [`GPUTexture`](/de/docs/Web/API/GPUTexture)n zu erstellen.
        > - Die `texture-compression-bc`-Funktion muss aktiviert sein, um zweidimensionale (`dimension: "2d"`) BC-komprimierte `GPUTexture`s zu erstellen: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm`, und `bc7-rgba-unorm-srgb`-Formate.
        > - Die `texture-compression-bc` und `texture-compression-bc-sliced-3d` Funktionen müssen aktiviert sein, um dreidimensionale BC-komprimierte `GPUTexture`s zu erstellen (die gleichen `format`-Werte wie im vorherigen Aufzählungspunkt, jedoch mit `dimension` auf `3d` gesetzt).
        > - Die `texture-compression-astc`-Funktion muss aktiviert sein, um zweidimensionale (`dimension: "2d"`) ASTC-komprimierte `GPUTexture`s zu erstellen: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb`, `astc-12x12-unorm`, und `astc-12x12-unorm-srgb`-Formate.
        > - Die `texture-compression-astc` und `texture-compression-astc-sliced-3d` Funktionen müssen aktiviert sein, um dreidimensionale BC-komprimierte `GPUTexture`s zu erstellen (die gleichen `format`-Werte wie im vorherigen Aufzählungspunkt, jedoch mit `dimension` auf `3d` gesetzt).
        > - Die `texture-compression-etc2`-Funktion muss aktiviert sein, um zweidimensionale ETC2-komprimierte `GPUTexture`s zu erstellen: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm`, und `eac-rg11snorm`-Formate.
        > - Siehe den Abschnitt [Tier 1 und Tier 2 Texturformate](#tier_1_und_tier_2_texturformate) für weitere Informationen über diese Texturformat-Sets und die Anforderungen, um sie zu erstellen.

    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, mit der das Objekt identifiziert werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die angibt, wie viele Mip-Ebenen die Textur enthalten wird. Wenn diese weggelassen wird, ist der Standardwert 1.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die Abtastanzahl der Textur angibt. Um gültig zu sein, muss der Wert 1 oder 4 betragen. Wenn dieser weggelassen wird, ist der Standardwert 1. Ein Wert größer als 1 bedeutet eine mehrfach abgetastete Textur.
    - `size`
      - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtanzahl der Textur spezifiziert. Der Breitenwert muss immer angegeben werden, während die Werte für Höhe und Tiefe/Array-Schichtanzahl optional sind und standardmäßig 1 betragen, wenn diese weggelassen werden.

        Beispielsweise kann ein Array wie `[16, 16, 2]` oder das äquivalente Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben werden.

    - `usage`
      - : Die {{Glossary("Bitwise_flags", "Bitweiser-Flags")}}, die die erlaubten Verwendungen für die `GPUTexture` darstellen. Die möglichen Werte befinden sich in der [`GPUTexture.usage`-Wertetabelle](/de/docs/Web/API/GPUTexture/usage#value).

        Beachten Sie, dass mehrere mögliche Verwendungen durch Trennung der Werte mit [bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können, beispielsweise: `GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT`.

        > [!NOTE]
        >
        > - Die `bgra8unorm-storage`- [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `STORAGE_BINDING`-Verwendung für eine `bgra8unorm`-[`format`](#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture) anzugeben.
        > - Die `rg11b10ufloat-renderable`- [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um `RENDER_ATTACHMENT`-Verwendung für eine `rg11b10ufloat`-[`format`](#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture) sowie deren Blending- und Multisampling-Fähigkeiten anzugeben.

    - `viewFormats` {{optional_inline}}
      - : Ein Array enumerierter Werte, das andere [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) spezifiziert, deren Verwendung beim Aufrufen von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) bei dieser Textur erlaubt ist, zusätzlich zum in `format` angegebenen Texturformat.

### Rückgabewert

Eine Instanz des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createTexture()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt wird zurückgegeben:

- Ein gültiger `usage` ist spezifiziert.
- Die in `size` angegebenen Werte (Breite, Höhe oder Tiefe/Array-Schichtanzahl) sind größer als 0.
- `mipLevelCount` ist größer als 0.
- `sampleCount` ist gleich 1 oder 4.
- Wenn `dimension` auf `"1d"` gesetzt ist:
  - Der `size`-Breitenwert ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxTextureDimension1D` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Die `size`-Höhen- und Tiefen/Array-Schichtanzahl-Werte sind gleich 1.
  - Der `sampleCount` ist gleich 1.
  - Das `format` entspricht nicht einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder einem [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Wenn `dimension` auf `"2d"` gesetzt ist:
  - Die `size`-Breiten- und Höhenwerte sind kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxTextureDimension2D` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Der `size`-Tiefen/Array-Schichtanzahl-Wert ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxTextureArrayLayers` [Limit](/de/docs/Web/API/GPUSupportedLimits).
- Wenn `dimension` auf `"3d"` gesetzt ist:
  - Die `size`-Breite, -Höhe, und -Tiefe/Array-Schichtanzahl-Werte sind kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxTextureDimension3D` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Der `sampleCount`-Wert ist gleich 1.
  - Das `format` entspricht nicht einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder einem [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Der `size`-Breitenwert ist ein Vielfaches der [Texel-Block-Breite](https://gpuweb.github.io/gpuweb/#texel-block-width).
- Der `size`-Höhenwert ist ein Vielfaches der [Texel-Block-Höhe](https://gpuweb.github.io/gpuweb/#texel-block-height).
- Wenn `sampleCount` größer als 1 ist:
  - `mipLevelCount` ist gleich 1.
  - Der `size`-Tiefen/Array-Schichtanzahl-Wert ist gleich 1.
  - `usage` umfasst das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag.
  - `usage` umfasst nicht das `GPUTextureUsage.STORAGE_BINDING`-Flag.
  - Das spezifizierte Format unterstützt Multi-Sampling.
- Der `mipLevelCount`-Wert ist kleiner oder gleich der [maximalen Miplevel-Anzahl](https://gpuweb.github.io/gpuweb/#abstract-opdef-maximum-miplevel-count).
- Die in `format` und `viewFormats` angegebenen Formate sind [kompatibel](https://gpuweb.github.io/gpuweb/#texture-view-format-compatible) miteinander.
- Wenn `usage` das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag enthält:
  - `format` ist ein renderbares Format (d.h. ein Farbrenderbares Format oder ein [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)).
  - `dimension` ist auf `"2d"` gesetzt.
- Wenn `usage` das `GPUTextureUsage.STORAGE_BINDING`-Flag enthält:
  - Das spezifizierte `format` enthält die `STORAGE_BINDING`-Fähigkeit (siehe die Tabelle der [Einfarbigen Formate](https://gpuweb.github.io/gpuweb/#plain-color-formats) als Referenz).
- Wenn `usage` das `GPUTextureUsage.TRANSIENT_ATTACHMENT`-Flag enthält:
  - `usage` ist gleich `TRANSIENT_ATTACHMENT | RENDER_ATTACHMENT`.
  - `dimension` ist gleich `"2d"`.
  - `mipLevelCount` ist gleich `1`.
  - `size.depthOrArrayLayers` ist gleich `1`.

## Tier 1 und Tier 2 Texturformate

Dieser Abschnitt beschreibt die WebGPU Tier1- und Tier2-Texturformate.

### Tier 1

Das Tier 1-Set von Texturformaten ist so konzipiert, dass Entwickler bestehenden Content auf das Web portieren können, ohne ihn umschreiben zu müssen, um WebGPUs niedrigerstufige Fähigkeiten zu verwenden. Um dieses Set zu nutzen, aktivieren Sie die `texture-formats-tier1`-Funktion (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).

Die Aktivierung dieser Funktion erlaubt:

- Die Verwendung der folgenden [`Formate`](#format) mit [`Verwendungen`](#usage) von `RENDER_ATTACHMENT` (einschließlich blendarer und multisamplingfähiger Fähigkeiten) und `STORAGE_BINDING` (mit `read-only` und `write-only` [`Zugriff`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access)):
  - `r16unorm`
  - `r16snorm`
  - `rg16unorm`
  - `rg16snorm`
  - `rgba16unorm`
  - `rgba16snorm`
- Die Verwendung der folgenden [`Formate`](#format) mit der `RENDER_ATTACHMENT` [`Verwendung`](#usage) (einschließlich blendarer und multisamplingfähiger Fähigkeiten):
  - `r8snorm`
  - `rg8snorm`
  - `rgba8snorm`
- Die Verwendung der folgenden [`Formate`](#format) mit der `STORAGE_BINDING` [`Verwendung`](#usage) (mit `read-only` und `write-only` [`Zugriff`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access)):
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
- Die Verwendung der folgenden `GPUTexture`-Formate im Ziel- [`Textur`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture#texture) von [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture)-Aufrufen:
  - `r16unorm`
  - `rg16unorm`
  - `rgba16unorm`

> [!NOTE]
> Die Aktivierung der `texture-formats-tier1`-Funktion aktiviert automatisch die `rg11b10ufloat-renderable`-Funktion, die es erlaubt, die `rg11b10ufloat`-Textur mit der `RENDER_ATTACHMENT`-Verwendung, einschließlich Blend- und Multisampling, zu nutzen.

### Tier 2

Das Tier 2-Set von Texturformaten unterstützt Speichertexturformate, die in "Kern"-WebGPU nicht unterstützt werden und für fortgeschrittene Nutzung erforderlich sind. Um dieses Set zu nutzen, aktivieren Sie die `texture-formats-tier2`-Funktion (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).

Die Aktivierung dieser Funktion erlaubt die Verwendung der folgenden [`Formate`](#format) mit der `STORAGE_BINDING` [`Verwendung`](#usage) (mit `read-write` [`Zugriff`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access)):

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
> Die Aktivierung der `texture-formats-tier2`-Funktion aktiviert automatisch die `rg11b10ufloat-renderable`- und `texture-formats-tier1`-Funktionen.

## Beispiele

In den WebGPU-Beispielen [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur für die Flächen eines Würfels erstellt, indem:

- Das Bild in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) geladen und ein Bild-Bitmap mit [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) erstellt wird.
- Eine neue Textur mit `createTexture()` erstellt wird.
- Das Bild-Bitmap in die Textur mit [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture) kopiert wird.

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
