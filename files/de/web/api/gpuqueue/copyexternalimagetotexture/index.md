---
title: "GPUQueue: copyExternalImageToTexture() Methode"
short-title: copyExternalImageToTexture()
slug: Web/API/GPUQueue/copyExternalImageToTexture
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`copyExternalImageToTexture()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle kopiert einen Schnappschuss, der von einem Quellbild, Video oder Canvas aufgenommen wurde, in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Die Nutzung dieser Funktion ermöglicht es dem Benutzeragenten, die effizienteste Methode zu bestimmen, um die Daten je nach Quellentyp zu kopieren.

## Syntax

```js-nolint
copyExternalImageToTexture(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Quelle beschreibt, die in das Ziel geschrieben wird, sowie deren Ursprung. Dies kann die folgenden Eigenschaften aufweisen:

    - `source`
      - : Ein Objekt, das die Quelle des zu kopierenden Schnappschusses bereitstellt. Dies kann ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`ImageBitmap`](/de/docs/Web/API/ImageBitmap), [`ImageData`](/de/docs/Web/API/ImageData), [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) oder [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt sein. Die Bildquellendaten werden exakt in dem Moment erfasst, in dem `copyExternalImageToTexture()` aufgerufen wird.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung des Kopiervorgangs angibt – die obere linke Ecke des Quellunterbereichs, von dem kopiert werden soll. Zusammen mit `copySize` definiert dies das gesamte Ausmaß des Quellunterbereichs. Die `x`- und `y`-Werte sind standardmäßig 0, wenn `origin` ganz oder teilweise weggelassen wird.

        Zum Beispiel können Sie ein Array wie `[0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0 }` übergeben.

    - `flipY` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, wird die Bildaufnahme vertikal gespiegelt. Wenn weggelassen, ist `flipY` standardmäßig `false`.

- `destination`

  - : Ein Objekt, das die Texturunterressource und den Ursprung definiert, um das aufgenommene Bild zu schreiben, sowie die Kodierungsmetadaten. Dies kann die folgenden Eigenschaften aufweisen:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur das Bild schreiben soll. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Format alle oder irgendwelche Farbe, Tiefe und Schablone umfassen kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Depth-or-Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonenaspekt eines Depth-or-Stencil-Formats wird beschrieben.

        Wenn weggelassen, erhält `aspect` den Wert `"all"`.

    - `colorSpace` {{optional_inline}}

      - : Ein enumerierter Wert, der den Farbraum und die Kodierung beschreibt, die verwendet werden, um Daten in die Zieltextur zu kodieren. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn weggelassen, ist `colorSpace` standardmäßig `"srgb"`.

        > [!NOTE]
        > Die Kodierung kann dazu führen, dass Werte außerhalb des Bereichs `[0, 1]` in die Zieltextur geschrieben werden, wenn deren Format dies darstellen kann. Andernfalls werden die Ergebnisse auf den Bereich des Zieltexturformats begrenzt. Eine Umwandlung ist möglicherweise nicht erforderlich, wenn `colorSpace` mit dem Quellbildfarbraum übereinstimmt.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur beschreibt, in die das Bild geschrieben wird. Wenn weggelassen, ist `mipLevel` standardmäßig 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung des Kopiervorgangs angibt – die minimale Ecke des Texturbereichs, in den die Bilddaten geschrieben werden sollen. Zusammen mit `copySize` wird das gesamte Ausmaß des Kopierbereichs definiert. Die `x`, `y` und `z` Werte sind standardmäßig 0, wenn `origin` ganz oder teilweise weggelassen wird.

        Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `premultipliedAlpha` {{optional_inline}}

      - : Ein boolescher Wert. Wenn auf `true` gesetzt, werden die RGB-Kanäle der in die Textur geschriebenen Bilddaten mit dem Alphakanal vorvervielfacht. Wenn weggelassen, ist `premultipliedAlpha` standardmäßig `false`.

        > [!NOTE]
        > Wenn diese Option auf `true` gesetzt ist und die `source` ebenfalls vorvervielfacht ist, müssen die Quell-RGB-Werte erhalten bleiben, selbst wenn sie ihre entsprechenden Alphawerte übersteigen.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur repräsentiert, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das `width`, `height` und `depthOrArrayLayers` – des Bereichs, von dem/zu kopieren ist, spezifiziert.

    Zum Beispiel können Sie ein Array wie `[16, 1, 1]` oder das entsprechende Objekt `{ width: 16, height: 1, depthOrArrayLayers: 1 }` übergeben.

    Der `width`-Wert muss enthalten sein. Wenn `height` oder `depthOrArrayLayers` weggelassen werden, sind sie standardmäßig 1.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wirft einen `OperationError`, wenn die folgenden Kriterien nicht erfüllt sind:
    - `source.origin.x` + die Breite des Kopierbereichs ist kleiner oder gleich der Breite des Quellbildes.
    - `source.origin.y` + die Höhe des Kopierbereichs ist kleiner oder gleich der Höhe des Quellbildes.
    - `source.origin.z` + `depthOrArrayLayers` des Kopierbereichs ist kleiner oder gleich 1.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (wenn in Bytes konvertiert, im Fall von `TypedArray`s) ist ein Vielfaches von 4.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Bildquellendaten aus einem Cross-Origin stammen.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`writeTexture()`** erfüllt sein, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Ziel- [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Depth-or-Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, entspricht die Bildaufnahmegröße `size`.
- Das Ziel- [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält die Flags `GPUTextureUsage.COPY_DST` und `GPUTextureUsage.RENDER_ATTACHMENT`.
- Die Ziel- [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"2d"`.
- Die Ziel- [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- Das Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ist eines der folgenden (die `GPUTextureUsage.RENDER_ATTACHMENT`-Nutzung unterstützen):
  - `"r8unorm"`
  - `"r16float"`
  - `"r32float"`
  - `"rg8unorm"`
  - `"rg16float"`
  - `"rg32float"`
  - `"rgba8unorm"`
  - `"rgba8unorm-srgb"`
  - `"bgra8unorm"`
  - `"bgra8unorm-srgb"`
  - `"rgb10a2unorm"`
  - `"rgba16float"`
  - `"rgba32float"`
- `destination.origin.x` + `copySize.width` ist kleiner oder gleich der `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) [`width`](/de/docs/Web/API/GPUTexture/width).
- `destination.origin.y` + `copySize.height` ist kleiner oder gleich der `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) [`height`](/de/docs/Web/API/GPUTexture/height).
- `destination.origin.z` + `copySize.depthOrArrayLayers` ist kleiner oder gleich der `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) [`depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers).
- Die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).

## Beispiele

Im WebGPU Samples [Textured Cube Beispiel](https://webgpu.github.io/webgpu-samples/samples/texturedCube/), wird der folgende Ausschnitt verwendet, um ein Bild abzurufen und es in eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) hochzuladen:

```js
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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
