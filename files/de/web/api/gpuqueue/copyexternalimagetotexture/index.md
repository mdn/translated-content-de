---
title: "GPUQueue: copyExternalImageToTexture() Methode"
short-title: copyExternalImageToTexture()
slug: Web/API/GPUQueue/copyExternalImageToTexture
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`copyExternalImageToTexture()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle kopiert einen Schnappschuss von einem Quellbild, Video oder Canvas in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Die Verwendung dieser Funktion ermöglicht es dem Benutzeragenten, die effizienteste Methode zur Datenkopie für jeden Quelltyp zu bestimmen.

## Syntax

```js-nolint
copyExternalImageToTexture(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Quelle darstellt, auf die in das Ziel geschrieben werden soll, und deren Ursprung. Dies kann die folgenden Eigenschaften haben:

    - `source`
      - : Ein Objekt, das die Quelle des zu kopierenden Schnappschusses bereitstellt. Dies kann ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`ImageBitmap`](/de/docs/Web/API/ImageBitmap), [`ImageData`](/de/docs/Web/API/ImageData), [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) oder [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt sein. Die Bildquellendaten werden genau in dem Moment erfasst, in dem `copyExternalImageToTexture()` aufgerufen wird.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die obere linke Ecke des Quellunterbereichs, von dem kopiert werden soll. Zusammen mit `copySize` definiert dies den gesamten Umfang des Quellunterbereichs. Die `x`- und `y`-Werte haben Standardwerte von 0, wenn `origin` teilweise oder ganz weggelassen wird.

        Zum Beispiel kann ein Array wie `[0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0 }` übergeben werden.

    - `flipY` {{optional_inline}}
      - : Ein Boolean. Wenn auf `true` gesetzt, wird die Bildaufnahme vertikal gespiegelt. Wenn nicht angegeben, nimmt `flipY` standardmäßig den Wert `false` an.

- `destination`

  - : Ein Objekt, das die Texturunterressource und den Ursprung definiert, um das aufgenommene Bild zu schreiben, sowie die Kodierungsmetadaten. Dies kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, welche Aspekte der Textur das Bild geschrieben werden soll. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Format alle oder beliebige Farb-, Tiefen- und Schablonenaspekte bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen- oder Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonenaspekt eines Tiefen- oder Schablonenformats wird beschrieben.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `colorSpace` {{optional_inline}}

      - : Ein enumerierter Wert, der den Farbraum und die Kodierung beschreibt, die zur Kodierung der Daten in die Zieltextur verwendet werden. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn nicht angegeben, ist der Standardwert von `colorSpace` `"srgb"`.

        > [!NOTE]
        > Die Kodierung kann dazu führen, dass Werte außerhalb des Bereichs `[0, 1]` in die Zieltextur geschrieben werden, wenn deren Format diese darstellen kann. Andernfalls werden die Ergebnisse auf den Bereich des Zieltexturformats geklammert. Eine Konvertierung ist möglicherweise nicht erforderlich, wenn `colorSpace` mit dem Farbraum des Quellbildes übereinstimmt.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die das Mip-Map Level der Textur darstellt, in das das Bild geschrieben werden soll. Wenn nicht angegeben, wird `mipLevel` standardmäßig auf 0 gesetzt.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimale Ecke des Texturbereichs, in den die Bilddaten geschrieben werden sollen. Zusammen mit `copySize` definiert dies den gesamten Umfang des zu beschreibenden Bereichs. Die `x`-, `y`- und `z`-Werte haben Standardwerte von 0, wenn `origin` teilweise oder ganz weggelassen wird.

        Zum Beispiel kann ein Array wie `[0, 0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }` übergeben werden.

    - `premultipliedAlpha` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, werden die in die Textur geschriebenen Bilddaten ihre RGB-Kanäle mit dem Alphakanal vorvervielfacht haben. Wenn nicht angegeben, wird `premultipliedAlpha` standardmäßig auf `false` gesetzt.

        > [!NOTE]
        > Wenn diese Option auf `true` gesetzt ist und die `source` auch vorvervielfacht ist, müssen die RGB-Werte der Quelle erhalten bleiben, auch wenn sie ihre entsprechenden Alphawerte überschreiten.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das `width`, `height` und `depthOrArrayLayers` des zu kopierenden Bereichs von/zum Ziel angibt.

    Zum Beispiel kann ein Array wie `[16, 1, 1]` oder das entsprechende Objekt `{ width: 16, height: 1, depthOrArrayLayers: 1 }` übergeben werden.

    Der `width`-Wert muss enthalten sein. Wenn die `height`- oder `depthOrArrayLayers`-Werte fehlen, sind ihre Standardwerte 1.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode löst einen `OperationError` aus, wenn die folgenden Kriterien nicht erfüllt sind:
    - `source.origin.x` + die Breite des zu kopierenden Bereichs ist kleiner oder gleich der Breite des Quellbildes.
    - `source.origin.y` + die Höhe des zu kopierenden Bereichs ist kleiner oder gleich der Höhe des Quellbildes.
    - `source.origin.z` + die depthOrArrayLayers des zu kopierenden Bereichs ist kleiner oder gleich 1.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (in Bytes konvertiert, im Fall von `TypedArray`s) ist ein Vielfaches von 4.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Bildquellendaten von einer anderen Herkunft stammen.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Ziel [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Ziel [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen- oder Schablonenformat](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, muss die Größe der Bildaufnahme gleich `size` sein.
- Die Ziel [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält die Flags `GPUTextureUsage.COPY_DST` und `GPUTextureUsage.RENDER_ATTACHMENT`.
- Die Ziel [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"2d"`.
- Die Ziel [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- Das Ziel [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ist eines der folgenden (die `GPUTextureUsage.RENDER_ATTACHMENT`-Nutzung unterstützen):
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
- Die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziel [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziel [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).

## Beispiele

Im WebGPU Samples [Textured Cube Beispiel](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird der folgende Code verwendet, um ein Bild abzurufen und in eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) hochzuladen:

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
