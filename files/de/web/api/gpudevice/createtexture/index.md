---
title: "GPUDevice: createTexture() Methode"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createTexture()`**-Methode der {{domxref("GPUDevice")}}-Schnittstelle erstellt eine {{domxref("GPUTexture")}}, um 1D-, 2D- oder 3D-Datenarrays, wie z.B. Bilder, zu speichern und in GPU-Rendering-Operationen zu verwenden.

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

        `dimension` standardmäßig `"2d"`, wenn der Wert ausgelassen wird.

    - `format`
      - : Ein enumerierter Wert, der das Format der Textur angibt. Siehe den Abschnitt [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Mip-Ebenen angibt, welche die Textur enthalten wird. Wenn ausgelassen, ist der Standardwert 1.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die Sample-Anzahl der Textur angibt. Um gültig zu sein, muss der Wert 1 oder 4 sein. Wenn ausgelassen, ist der Standardwert 1. Ein Wert größer als 1 deutet auf eine multi-sampled Textur hin.
    - `size`

      - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtebene der Textur angibt. Der Breitenwert muss immer angegeben werden, während die Höhe und die Tiefe/Array-Schichtebene optional sind und standardmäßig 1, wenn ausgelassen.

        Ein Beispiel für ein `size`-Array:

        ```js
        size: [16, 16, 2];
        ```

        Das entsprechende Objekt würde so aussehen:

        ```js
        size: {
          width: 16,
          height: 16,
          depthOrArrayLayers: 2
        }
        ```

    - `usage`

      - : Die {{glossary("Bitwise_flags", "Bitflags")}}, die die erlaubten Nutzungen für die `GPUTexture` darstellen. Die möglichen Werte befinden sich in der [`GPUTexture.usage`-Wertetabelle](/de/docs/Web/API/GPUTexture/usage#value).

        Beachten Sie, dass mehrere mögliche Nutzungen angegeben werden können, indem Werte mit Rohrsymbolen getrennt werden, zum Beispiel:

        ```js
        usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT;
        ```

    - `viewFormats` {{optional_inline}}
      - : Ein Array von enumerierten Werten, das andere [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) angibt, die bei Aufruf von {{domxref("GPUTexture.createView()")}} auf dieser Textur zusätzlich zum in ihrem `format`-Wert angegebenen Texturformat erlaubt sind.

### Rückgabewert

Eine Instanz des {{domxref("GPUTexture")}}-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createTexture()`** aufgerufen wird. Andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und ein ungültiges {{domxref("GPUTexture")}}-Objekt zurückgegeben:

- Ein gültiger `usage` ist angegeben.
- Die in `size` angegebenen Werte (Breite, Höhe oder Tiefe/Array-Ebene) sind größer als 0.
- `mipLevelCount` ist größer als 0.
- `sampleCount` ist gleich 1 oder 4.
- Wenn `dimension` auf `"1d"` gesetzt ist:
  - Der `size`-Breitenwert ist kleiner oder gleich dem `maxTextureDimension1D`-{{domxref("GPUSupportedLimits", "Limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
  - Die `size`-Höhe und die Tiefe/Array-Ebene sind gleich 1.
  - Der `sampleCount` ist gleich 1.
  - Das `format` ist ungleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder einem [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Wenn `dimension` auf `"2d"` gesetzt ist:
  - Die `size`-Breite und Höhe sind kleiner oder gleich dem `maxTextureDimension2D`-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
  - Der `size`-Wert der Tiefe/Array-Ebene ist kleiner oder gleich den `maxTextureArrayLayers`-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- Wenn `dimension` auf `"3d"` gesetzt ist:
  - Die `size`-Werte für Breite, Höhe und Tiefe/Array-Ebene sind kleiner oder gleich dem `maxTextureDimension3D`-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
  - Der `sampleCount` ist gleich 1.
  - Das `format` ist ungleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder einem [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Die `size`-Breite ist ein Vielfaches der [Texel-Block-Breite](https://gpuweb.github.io/gpuweb/#texel-block-width).
- Die `size`-Höhe ist ein Vielfaches der [Texel-Block-Höhe](https://gpuweb.github.io/gpuweb/#texel-block-height).
- Wenn `sampleCount` größer als 1 ist:
  - Der `mipLevelCount` ist gleich 1.
  - Der Wert der `size`-Tiefe/Array-Ebene ist gleich 1.
  - `usage` enthält das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag.
  - `usage` enthält nicht das `GPUTextureUsage.STORAGE_BINDING`-Flag.
  - Das angegebene Format unterstützt Multi-Sampling.
- Der `mipLevelCount` ist kleiner oder gleich dem [maximalen Miplevel-Wert](https://gpuweb.github.io/gpuweb/#abstract-opdef-maximum-miplevel-count).
- Die in `format` und `viewFormats` angegebenen Formate sind [kompatibel](https://gpuweb.github.io/gpuweb/#texture-view-format-compatible) miteinander.
- Wenn `usage` das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag enthält:
  - `format` ist ein renderbares Format (bedeutet ein farb-rendares Format oder ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)).
  - `dimension` ist auf `"2d"` gesetzt.
- Wenn `usage` das `GPUTextureUsage.STORAGE_BINDING`-Flag enthält:
  - Das angegebene `format` enthält die Fähigkeit `STORAGE_BINDING` (siehe die Tabelle [Plain color formats](https://gpuweb.github.io/gpuweb/#plain-color-formats) als Referenz).

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur zum Nutzen auf den Flächen eines Würfels erstellt durch:

- Laden des Bildes in ein {{domxref("HTMLImageElement")}} und Erstellen eines Image Bitmaps mit {{domxref("createImageBitmap()")}}.
- Erstellen einer neuen Textur mit `createTexture()`.
- Kopieren des Image Bitmaps in die Textur mittels {{domxref("GPUQueue.copyExternalImageToTexture()")}}.

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
