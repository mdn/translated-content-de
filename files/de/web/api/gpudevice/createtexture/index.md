---
title: "GPUDevice: Methode createTexture()"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createTexture()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUTexture`](/de/docs/Web/API/GPUTexture), um 1D-, 2D- oder 3D-Datenarrays, wie z.B. Bilder, zu speichern, die in GPU-Rendering-Operationen genutzt werden können.

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

        `dimension` hat standardmäßig den Wert `"2d"`, wenn der Wert weggelassen wird.

    - `format`
      - : Ein enumerierter Wert, der das Format der Textur angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, mit dem das Objekt identifiziert werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `mipLevelCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Mip-Level angibt, die die Textur enthalten wird. Wenn weggelassen, beträgt dieser Wert standardmäßig 1.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Samples der Textur angibt. Der Wert muss 1 oder 4 betragen, um gültig zu sein. Wenn weggelassen, beträgt dieser Wert standardmäßig 1. Ein Wert größer als 1 bedeutet eine multisample Textur.
    - `size`

      - : Ein Objekt oder Array, das die Breite, Höhe und Tiefen-/Array-Schichtenanzahl der Textur angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen-/Array-Schichtenzahl optional sind und auf 1 standardmäßig gesetzt werden, wenn sie weggelassen werden.

        Nachfolgend ein Beispiel für ein `size`-Array:

        ```js
        size: [16, 16, 2];
        ```

        Das entsprechende Objekt würde wie folgt aussehen:

        ```js
        size: {
          width: 16,
          height: 16,
          depthOrArrayLayers: 2
        }
        ```

    - `usage`

      - : Die [Bitflags](/de/docs/Glossary/Bitwise_flags), die die zulässigen Verwendungen für das `GPUTexture` darstellen. Die möglichen Werte finden Sie in der [`GPUTexture.usage`-Wertetabelle](/de/docs/Web/API/GPUTexture/usage#value).

        Beachten Sie, dass mehrere mögliche Verwendungen durch Trennen der Werte mit Pipe-Symbolen angegeben werden können, zum Beispiel:

        ```js
        usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT;
        ```

    - `viewFormats` {{optional_inline}}
      - : Ein Array von enumerierten Werten, die andere [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) angeben, die zusätzlich zu dem in seinem `format`-Wert angegebenen Texturformat beim Aufruf von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für diese Textur zulässig sind.

### Rückgabewert

Eine [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufrufen von **`createTexture()`** erfüllt sein, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt zurückgegeben:

- Ein gültiges `usage` ist angegeben.
- Die in `size` angegebenen Werte (Breite, Höhe oder Tiefen-/Array-Schichtenanzahl) sind größer als 0.
- `mipLevelCount` ist größer als 0.
- `sampleCount` ist gleich 1 oder 4.
- Wenn `dimension` auf `"1d"` gesetzt ist:
  - Der `size`-Breitenwert ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxTextureDimension1D` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Die `size`-Höhe und Tiefen-/Array-Schichtenanzahl sind gleich 1.
  - Der `sampleCount` ist gleich 1.
  - Der `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Wenn `dimension` auf `"2d"` gesetzt ist:
  - Die `size`-Breiten- und Höhenwerte sind kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxTextureDimension2D` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Die `size`-Tiefen-/Array-Schichtenanzahl ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxTextureArrayLayers` [Limit](/de/docs/Web/API/GPUSupportedLimits).
- Wenn `dimension` auf `"3d"` gesetzt ist:
  - Die `size`-Breite, Höhe und Tiefen-/Array-Schichtenanzahl sind kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxTextureDimension3D` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Der `sampleCount`-Wert ist gleich 1.
  - Der `format` ist nicht gleich einem [komprimierten Format](https://gpuweb.github.io/gpuweb/#compressed-format) oder [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Der `size`-Breitenwert ist ein Vielfaches der [Texel-Blockbreite](https://gpuweb.github.io/gpuweb/#texel-block-width).
- Der `size`-Höhenwert ist ein Vielfaches der [Texel-Blockhöhe](https://gpuweb.github.io/gpuweb/#texel-block-height).
- Wenn `sampleCount` größer als 1 ist:
  - `mipLevelCount` ist gleich 1.
  - Die `size`-Tiefen-/Array-Schichtenanzahl ist gleich 1.
  - `usage` enthält das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag.
  - `usage` enthält nicht das `GPUTextureUsage.STORAGE_BINDING`-Flag.
  - Das angegebene Format unterstützt Multi-Sampling.
- Der `mipLevelCount`-Wert ist kleiner oder gleich der [maximalen Mip-Level-Anzahl](https://gpuweb.github.io/gpuweb/#abstract-opdef-maximum-miplevel-count).
- Die in `format` und `viewFormats` angegebenen Formate sind [kompatibel](https://gpuweb.github.io/gpuweb/#texture-view-format-compatible) zueinander.
- Wenn `usage` das `GPUTextureUsage.RENDER_ATTACHMENT`-Flag enthält:
  - `format` ist ein renderbares Format (d. h. ein farb-renderbares Format oder ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)).
  - `dimension` ist auf `"2d"` gesetzt.
- Wenn `usage` das `GPUTextureUsage.STORAGE_BINDING`-Flag enthält:
  - Das angegebene `format` enthält die `STORAGE_BINDING`-Fähigkeit (siehe die Tabelle [einfache Farbformate](https://gpuweb.github.io/gpuweb/#plain-color-formats) zur Referenz).

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur erstellt, die auf den Flächen eines Würfels verwendet wird, indem:

- Das Bild in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) geladen und ein Bild-Bitmap mithilfe von [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) erstellt wird.
- Eine neue Textur mithilfe von `createTexture()` erstellt wird.
- Das Bild-Bitmap in die Textur mithilfe von [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture) kopiert wird.

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
