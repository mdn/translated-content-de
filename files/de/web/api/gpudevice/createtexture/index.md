---
title: "GPUDevice: createTexture()-Methode"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createTexture()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), um 1D-, 2D- oder 3D-Datenarrays, wie beispielsweise Bilder, zu speichern, die in GPU-Rendering-Operationen verwendet werden.

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

        `dimension` hat den Standardwert `"2d"`, wenn der Wert ausgelassen wird.

    - `format`
      - : Ein enumerierter Wert, der das Format der Textur angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.
    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Mip-Ebenen angibt, die die Textur enthalten wird. Wenn ausgelassen, ist der Standardwert 1.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die Abtastanzahl der Textur angibt. Um gültig zu sein, muss der Wert 1 oder 4 sein. Wenn ausgelassen, ist der Standardwert 1. Ein Wert größer als 1 weist auf eine multi-abgetastete Textur hin.
    - `size`

      - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtanzahl der Textur angibt. Der Breitenwert muss immer angegeben werden, während die Höhe und die Tiefe/Array-Schichtanzahl optional sind und auf 1 standardisiert werden, wenn sie ausgelassen werden.

        Folgendes ist ein Beispiel für ein `size`-Array:

        ```js
        size: [16, 16, 2];
        ```

        Das objektäquivalente würde folgendermaßen aussehen:

        ```js
        size: {
          width: 16,
          height: 16,
          depthOrArrayLayers: 2
        }
        ```

    - `usage`

      - : Die [bitweisen Flags](/de/docs/Glossary/Bitwise_flags), die die erlaubten Verwendungen für die `GPUTexture` darstellen. Die möglichen Werte stehen in der [`GPUTexture.usage`-Wertetabelle](/de/docs/Web/API/GPUTexture/usage#value).

        Beachten Sie, dass mehrere mögliche Verwendungen durch Trennzeichen mit Rohrsymbolen angegeben werden können, zum Beispiel:

        ```js
        usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT;
        ```

    - `viewFormats` {{optional_inline}}
      - : Ein Array aus enumerierten Werten, die andere [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) angeben, die beim Aufruf von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) auf dieser Textur zusätzlich zu dem im `format`-Wert angegebenen Texturformat zulässig sind.

### Rückgabewert

Eine [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt zurückgegeben:

- Ein gültiges `usage` ist angegeben.
- Die im `size` angegebenen Werte (Breite, Höhe oder Tiefe/Array-Schichtanzahl) sind größer als 0.
- `mipLevelCount` ist größer als 0.
- `sampleCount` ist gleich 1 oder 4.
- Wenn `dimension` auf `"1d"` gesetzt ist:
  - Der `size`-Breitenwert ist kleiner oder gleich dem `maxTextureDimension1D`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Die `size`-Höhe und -Tiefe/Array-Schichtanzahl sind gleich 1.
  - Der `sampleCount` ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder einem [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Wenn `dimension` auf `"2d"` gesetzt ist:
  - Die `size`-Breite und -Höhe sind kleiner oder gleich dem `maxTextureDimension2D`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Die `size`-Tiefe/Array-Schichtanzahl ist kleiner oder gleich dem `maxTextureArrayLayers`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `dimension` auf `"3d"` gesetzt ist:
  - Die `size`-Breite, -Höhe und -Tiefe/Array-Schichtanzahl sind kleiner oder gleich dem `maxTextureDimension3D`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Der `sampleCount`-Wert ist gleich 1.
  - Das `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder einem [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Der `size`-Breitenwert ist ein Vielfaches der [Texelblock-Breite](https://gpuweb.github.io/gpuweb/#texel-block-width).
- Der `size`-Höhenwert ist ein Vielfaches der [Texelblock-Höhe](https://gpuweb.github.io/gpuweb/#texel-block-height).
- Wenn `sampleCount` größer als 1 ist:
  - `mipLevelCount` ist gleich 1.
  - Die `size`-Tiefe/Array-Schichtanzahl ist gleich 1.
  - `usage` enthält das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag.
  - `usage` enthält nicht das `GPUTextureUsage.STORAGE_BINDING`-Flag.
  - Das angegebene Format unterstützt Multisampling.
- Der `mipLevelCount`-Wert ist kleiner oder gleich der [maximalen MipLevel-Anzahl](https://gpuweb.github.io/gpuweb/#abstract-opdef-maximum-miplevel-count).
- Die in `format` und `viewFormats` angegebenen Formate sind [kompatibel](https://gpuweb.github.io/gpuweb/#texture-view-format-compatible) miteinander.
- Wenn `usage` das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag enthält:
  - `format` ist ein renderfähiges Format (bedeutet ein farbrenderfähiges Format oder ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)).
  - `dimension` ist auf `"2d"` gesetzt.
- Wenn `usage` das `GPUTextureUsage.STORAGE_BINDING`-Flag enthält:
  - Das angegebene `format` schließt die `STORAGE_BINDING`-Fähigkeit ein (siehe die Tabelle der [einfachen Farbformate](https://gpuweb.github.io/gpuweb/#plain-color-formats) als Referenz).

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur, die auf den Flächen eines Würfels verwendet werden soll, erstellt durch:

- Laden des Bildes in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) und Erstellen eines Bildbitmaps mit [`createImageBitmap()`](/de/docs/Web/API/CreateImageBitmap).
- Erstellen einer neuen Textur mit `createTexture()`.
- Kopieren des Bildbitmaps in die Textur mit [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture).

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
