---
title: "GPUDevice: Methode createTexture()"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
l10n:
  sourceCommit: e4ffa5e4befde66732cad271e39154a80477a33c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`createTexture()`** der Schnittstelle [`GPUDevice`](/de/docs/Web/API/GPUDevice) erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), in der ein-, zwei- oder dreidimensionale Datenarrays, beispielsweise Bilder, für GPU-Rendering-Operationen gespeichert werden können.

## Syntax

```js-nolint
createTexture(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `dimension` {{optional_inline}}
      - : Ein Aufzählungswert, der die Dimension der Textur angibt. Mögliche Werte sind:
        - `"1d"`: Die Textur ist eindimensional.
        - `"2d"`: Die Textur ist zweidimensional oder ein Array aus zweidimensionalen Ebenen.
        - `"3d"`: Die Textur ist dreidimensional.

        Wenn der Wert weggelassen wird, ist der Standardwert für `dimension` `"2d"`.

    - `format`
      - : Ein Aufzählungswert, der das Format der Textur angibt. Alle möglichen Werte finden Sie im Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation.

        > [!NOTE]
        >
        > - Das [Feature](/de/docs/Web/API/GPUSupportedFeatures) `depth32float-stencil8` muss aktiviert sein, um [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekte im Format `depth32float-stencil8` zu erstellen.
        > - Das Feature `texture-compression-bc` muss aktiviert sein, um zweidimensionale (`dimension: "2d"`) BC-komprimierte `GPUTexture`-Objekte in den folgenden Formaten zu erstellen: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm` und `bc7-rgba-unorm-srgb`.
        > - Die Features `texture-compression-bc` und `texture-compression-bc-sliced-3d` müssen aktiviert sein, um dreidimensionale BC-komprimierte `GPUTexture`-Objekte zu erstellen (mit denselben `format`-Werten wie im vorherigen Aufzählungspunkt, aber mit `dimension` auf `3d` gesetzt).
        > - Das Feature `texture-compression-astc` muss aktiviert sein, um zweidimensionale (`dimension: "2d"`) ASTC-komprimierte `GPUTexture`-Objekte in den folgenden Formaten zu erstellen: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb`, `astc-12x12-unorm` und `astc-12x12-unorm-srgb`.
        > - Die Features `texture-compression-astc` und `texture-compression-astc-sliced-3d` müssen aktiviert sein, um dreidimensionale BC-komprimierte `GPUTexture`-Objekte zu erstellen (mit denselben `format`-Werten wie im vorherigen Aufzählungspunkt, aber mit `dimension` auf `3d` gesetzt).
        > - Das Feature `texture-compression-etc2` muss aktiviert sein, um zweidimensionale ETC2-komprimierte `GPUTexture`-Objekte in den folgenden Formaten zu erstellen: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm` und `eac-rg11snorm`.
        > - Weitere Informationen zu diesen Texturformatgruppen und den Voraussetzungen für ihre Erstellung finden Sie im Abschnitt [Texturformate der Stufen 1 und 2](#texturformate_der_stufen_1_und_2).

    - `label` {{optional_inline}}
      - : Eine Zeichenfolge mit einer Bezeichnung, anhand derer das Objekt identifiziert werden kann, beispielsweise in Meldungen von [`GPUError`](/de/docs/Web/API/GPUError) oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die angibt, wie viele Mip-Level die Textur enthält. Wenn sie weggelassen wird, ist der Standardwert 1.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die Sample-Anzahl der Textur angibt. Damit der Wert gültig ist, muss er 1 oder 4 betragen. Wenn er weggelassen wird, ist der Standardwert 1. Ein Wert größer als 1 kennzeichnet eine Textur mit Multisampling.
    - `size`
      - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe beziehungsweise die Anzahl der Array-Ebenen der Textur angibt. Die Breite muss immer angegeben werden. Die Höhe und die Tiefe beziehungsweise die Anzahl der Array-Ebenen sind optional und haben bei Auslassung jeweils den Standardwert 1.

        Sie können beispielsweise ein Array wie `[16, 16, 2]` oder das entsprechende Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

    - `usage`
      - : Die {{Glossary("Bitwise_flags", "Bit-Flags")}}, die die zulässigen Verwendungen der `GPUTexture` angeben. Die möglichen Werte sind in der [Wertetabelle für `GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage#value) aufgeführt.

        Mehrere zulässige Verwendungen können durch ein [bitweises ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) der Werte angegeben werden, beispielsweise: `GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT`.

        > [!NOTE]
        >
        > - Das [Feature](/de/docs/Web/API/GPUSupportedFeatures) `bgra8unorm-storage` muss aktiviert sein, um die Verwendung `STORAGE_BINDING` für eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit dem [`format`](#format) `bgra8unorm` anzugeben.
        > - Das [Feature](/de/docs/Web/API/GPUSupportedFeatures) `rg11b10ufloat-renderable` muss aktiviert sein, um die Verwendung `RENDER_ATTACHMENT` für eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit dem [`format`](#format) `rg11b10ufloat` sowie Blending und Multisampling für diese Textur zu ermöglichen.

    - `viewFormats` {{optional_inline}}
      - : Ein Array von Aufzählungswerten, das zusätzlich zum im Wert `format` angegebenen Texturformat weitere [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) festlegt, die beim Aufruf von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für diese Textur zulässig sind.

### Rückgabewert

Eine Instanz eines [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekts.

### Validierung

Beim Aufruf von **`createTexture()`** müssen die folgenden Kriterien erfüllt sein. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt zurückgegeben:

- Ein gültiger `usage`-Wert ist angegeben.
- Die in `size` angegebenen Werte (Breite, Höhe oder Tiefe beziehungsweise Anzahl der Array-Ebenen) sind größer als 0.
- `mipLevelCount` ist größer als 0.
- `sampleCount` ist gleich 1 oder 4.
- Wenn `dimension` auf `"1d"` gesetzt ist:
  - Der Breitenwert in `size` ist kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxTextureDimension1D` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Die Werte für Höhe und Tiefe beziehungsweise Anzahl der Array-Ebenen in `size` sind gleich 1.
  - `sampleCount` ist gleich 1.
  - `format` ist weder ein [komprimiertes Format](https://gpuweb.github.io/gpuweb/#compressed-format) noch ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Wenn `dimension` auf `"2d"` gesetzt ist:
  - Die Werte für Breite und Höhe in `size` sind kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxTextureDimension2D` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Der Wert für Tiefe beziehungsweise Anzahl der Array-Ebenen in `size` ist kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxTextureArrayLayers` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `dimension` auf `"3d"` gesetzt ist:
  - Die Werte für Breite, Höhe und Tiefe beziehungsweise Anzahl der Array-Ebenen in `size` sind kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxTextureDimension3D` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - `sampleCount` ist gleich 1.
  - `format` ist weder ein [komprimiertes Format](https://gpuweb.github.io/gpuweb/#compressed-format) noch ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Der Breitenwert in `size` ist ein Vielfaches der [Texel-Blockbreite](https://gpuweb.github.io/gpuweb/#texel-block-width).
- Der Höhenwert in `size` ist ein Vielfaches der [Texel-Blockhöhe](https://gpuweb.github.io/gpuweb/#texel-block-height).
- Wenn `sampleCount` größer als 1 ist:
  - `mipLevelCount` ist gleich 1.
  - Der Wert für Tiefe beziehungsweise Anzahl der Array-Ebenen in `size` ist gleich 1.
  - `usage` enthält das Flag `GPUTextureUsage.RENDER_ATTACHMENT`.
  - `usage` enthält das Flag `GPUTextureUsage.STORAGE_BINDING` nicht.
  - Das angegebene Format unterstützt Multisampling.
- Der Wert von `mipLevelCount` ist kleiner oder gleich der [maximalen Anzahl an Mip-Leveln](https://gpuweb.github.io/gpuweb/#abstract-opdef-maximum-miplevel-count).
- Die in `format` und `viewFormats` angegebenen Formate sind [miteinander kompatibel](https://gpuweb.github.io/gpuweb/#texture-view-format-compatible).
- Wenn `usage` das Flag `GPUTextureUsage.RENDER_ATTACHMENT` enthält:
  - `format` ist ein renderbares Format (also ein renderbares Farbformat oder ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)).
  - `dimension` ist auf `"2d"` gesetzt.
- Wenn `usage` das Flag `GPUTextureUsage.STORAGE_BINDING` enthält:
  - Das angegebene `format` unterstützt `STORAGE_BINDING` (siehe die Tabelle der [einfachen Farbformate](https://gpuweb.github.io/gpuweb/#plain-color-formats)).
- Wenn `usage` das Flag `GPUTextureUsage.TRANSIENT_ATTACHMENT` enthält:
  - `usage` ist gleich `TRANSIENT_ATTACHMENT | RENDER_ATTACHMENT`.
  - `dimension` ist gleich `"2d"`.
  - `mipLevelCount` ist gleich `1`.
  - `size.depthOrArrayLayers` ist gleich `1`.

## Texturformate der Stufen 1 und 2

Dieser Abschnitt beschreibt die WebGPU-Texturformate der Stufen 1 und 2.

### Stufe 1

Die Gruppe der Texturformate der Stufe 1 soll es Entwicklern ermöglichen, vorhandene Inhalte ins Web zu portieren, ohne sie für die Low-Level-Funktionen von WebGPU neu schreiben zu müssen. Um diese Gruppe zu verwenden, aktivieren Sie das Feature `texture-formats-tier1` (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).

Durch Aktivieren dieses Features wird Folgendes ermöglicht:

- Die Verwendung der folgenden [`formats`](#format) mit den [`usages`](#usage) `RENDER_ATTACHMENT` (einschließlich Blending- und Multisampling-Unterstützung) und `STORAGE_BINDING` (mit `read-only`- und `write-only`-[`access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access)):
  - `r16unorm`
  - `r16snorm`
  - `rg16unorm`
  - `rg16snorm`
  - `rgba16unorm`
  - `rgba16snorm`
- Die Verwendung der folgenden [`formats`](#format) mit der [`usage`](#usage) `RENDER_ATTACHMENT` (einschließlich Blending- und Multisampling-Unterstützung):
  - `r8snorm`
  - `rg8snorm`
  - `rgba8snorm`
- Die Verwendung der folgenden [`formats`](#format) mit der [`usage`](#usage) `STORAGE_BINDING` (mit `read-only`- und `write-only`-[`access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access)):
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
- Die Verwendung der folgenden `GPUTexture`-Formate als Ziel-[`texture`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture#texture) bei Aufrufen von [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture):
  - `r16unorm`
  - `rg16unorm`
  - `rgba16unorm`

> [!NOTE]
> Das Aktivieren des Features `texture-formats-tier1` aktiviert automatisch auch das Feature `rg11b10ufloat-renderable`. Dadurch kann die Textur `rg11b10ufloat` mit der Verwendung `RENDER_ATTACHMENT` eingesetzt werden, einschließlich Blending und Multisampling.

### Stufe 2

Die Gruppe der Texturformate der Stufe 2 bietet für zusätzliche Texturformate `read-write`-Speicherzugriff, der für fortgeschrittene Anwendungen erforderlich ist. Um diese Gruppe zu verwenden, aktivieren Sie das Feature `texture-formats-tier2` (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).

Durch Aktivieren dieses Features können die folgenden [`formats`](#format) mit der [`usage`](#usage) `STORAGE_BINDING` (mit `read-write`-[`access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access)) verwendet werden:

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
> Das Aktivieren des Features `texture-formats-tier2` aktiviert automatisch auch die Features `rg11b10ufloat-renderable` und `texture-formats-tier1`.

## Beispiele

Im WebGPU-Beispiel [Textured Cube](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur für die Flächen eines Würfels wie folgt erstellt:

- Das Bild wird in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) geladen und mit [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) eine Image-Bitmap erstellt.
- Mit `createTexture()` wird eine neue Textur erstellt.
- Die Image-Bitmap wird mit [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture) in die Textur kopiert.

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
