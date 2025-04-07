---
title: "GPUQueue: copyExternalImageToTexture() Methode"
short-title: copyExternalImageToTexture()
slug: Web/API/GPUQueue/copyExternalImageToTexture
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`copyExternalImageToTexture()`** Methode des [`GPUQueue`](/de/docs/Web/API/GPUQueue) Schnittstelle kopiert einen Schnappschuss eines Quellbildes, Videos oder Canvas in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Durch die Verwendung dieser Funktion kann der User-Agent die effizienteste Methode für das Kopieren der Daten je nach Quelltyp bestimmen.

## Syntax

```js-nolint
copyExternalImageToTexture(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Quelle zum Schreiben an die Zieladresse und deren Ursprung darstellt. Dies kann die folgenden Eigenschaften haben:

    - `source`
      - : Ein Objekt, das die Quelle des zu kopierenden Schnappschusses bereitstellt. Dies kann ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`ImageBitmap`](/de/docs/Web/API/ImageBitmap), [`ImageData`](/de/docs/Web/API/ImageData), [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) oder [`VideoFrame`](/de/docs/Web/API/VideoFrame) Objekt sein. Die Bildquelldaten werden exakt in dem Moment erfasst, in dem `copyExternalImageToTexture()` aufgerufen wird.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt – die obere linke Ecke des Quellunterbereichs, von dem kopiert werden soll. Zusammen mit `copySize` definiert dies den gesamten Umfang des Quellunterbereichs. Die `x`- und `y`-Werte sind standardmäßig 0, wenn `origin` ausgelassen wird.

        Nachfolgend ein Beispielarray:

        ```js
        origin: [0, 0];
        ```

        Das entsprechende Objekt würde folgendermaßen aussehen:

        ```js
        origin: {
          x: 0,
          y: 0
        }
        ```

    - `flipY` {{optional_inline}}
      - : Ein Boolean. Wenn auf `true` gesetzt, wird die Bildaufnahme vertikal gespiegelt. Wenn ausgelassen, ist `flipY` standardmäßig `false`.

- `destination`

  - : Ein Objekt, das die Texturunterressource und deren Ursprung definiert, um das aufgenommene Bild dorthin zu schreiben, sowie Encodierungs-Metadaten. Dies kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, auf welche Aspekte der Textur das Bild geschrieben werden soll. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Format alle oder einige der Farbaspekte, Tiefe und Schablone sein können.
        - `"depth-only"`
          - : Es wird nur der Tiefenaspekt eines [Tiefen- oder Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) beschrieben.
        - `"stencil-only"`
          - : Es wird nur der Schablonen-Aspekt eines Tiefen- oder Schablonenformats beschrieben.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `colorSpace` {{optional_inline}}

      - : Ein enumerierter Wert, der den Farbraum und die Kodierung beschreibt, die zum Kodieren der Daten in die Zieltextur verwendet werden. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn ausgelassen, ist `colorSpace` standardmäßig `"srgb"`.

        > [!NOTE]
        > Die Kodierung kann dazu führen, dass Werte außerhalb des Bereichs `[0, 1]` auf die Zieltextur geschrieben werden, falls deren Format sie darstellen kann. Andernfalls werden die Ergebnisse auf den Bereich des Zieltexturformats beschränkt. Eine Konvertierung kann nicht nötig sein, wenn `colorSpace` mit dem Farbraum des Quellbildes übereinstimmt.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die das Mip-Map-Level der Textur angibt, auf die das Bild geschrieben wird. Wenn ausgelassen, ist `mipLevel` standardmäßig 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt - die Mindestecke des Texturbereichs, auf den die Bilddaten geschrieben werden. Zusammen mit `copySize` definiert dies das volle Ausmaß des zu kopierenden Bereichs. Die `x`-, `y`- und `z`-Werte sind standardmäßig 0, wenn `origin` ausgelassen wird.

        Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `premultipliedAlpha` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, haben die in die Textur geschriebenen Bilddaten ihre RGB-Kanäle durch den Alphakanal premultipliziert. Wenn ausgelassen, ist `premultipliedAlpha` standardmäßig `false`.

        > [!NOTE]
        > Wenn diese Option auf `true` gesetzt ist und die `source` ebenfalls premultipleziert ist, müssen die RGB-Werte der Quelle auch dann beibehalten werden, wenn sie ihre entsprechenden Alphawerte überschreiten.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das `width`, `height` und `depthOrArrayLayers` – des Bereichs, von dem/zu dem kopiert werden soll, angibt.

    Zum Beispiel können Sie ein Array wie `[16, 1, 1]` oder das entsprechende Objekt `{ width: 16, height: 1, depthOrArrayLayers: 1 }` übergeben.

    Der `width`-Wert muss enthalten sein. Wenn die `height`- oder `depthOrArrayLayers`-Werte ausgelassen werden, sind sie standardmäßig 1.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wirft einen `OperationError`, wenn die folgenden Kriterien nicht erfüllt sind:
    - `source.origin.x` + die Breite des zu kopierenden Bereichs ist kleiner oder gleich der Breite des Quellbildes.
    - `source.origin.y` + die Höhe des zu kopierenden Bereichs ist kleiner oder gleich der Höhe des Quellbildes.
    - `source.origin.z` + `depthOrArrayLayers` des zu kopierenden Bereichs ist kleiner oder gleich 1.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (nach der Konvertierung in Bytes bei `TypedArray`s) ist ein Vielfaches von 4.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Bildquelldaten aus einer anderen Herkunft stammen.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Ziel- [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziels [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziels [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen- oder Schablonenformat](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, ist die Größe der Bildaufnahme gleich `size`.
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
- `destination.origin.x` + `copySize.width` ist kleiner oder gleich der Ziel- [`GPUTexture`](/de/docs/Web/API/GPUTexture) [`width`](/de/docs/Web/API/GPUTexture/width).
- `destination.origin.y` + `copySize.height` ist kleiner oder gleich der Ziel- [`GPUTexture`](/de/docs/Web/API/GPUTexture) [`height`](/de/docs/Web/API/GPUTexture/height).
- `destination.origin.z` + `copySize.depthOrArrayLayers` ist kleiner oder gleich der Ziel- [`GPUTexture`](/de/docs/Web/API/GPUTexture) [`depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers).
- Die Ziel- [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziels [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die Ziel- [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziels [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).

## Beispiele

Im WebGPU-Beispiel [Textured Cube Beispiel](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird der folgende Ausschnitt verwendet, um ein Bild abzurufen und es in eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) hochzuladen:

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
