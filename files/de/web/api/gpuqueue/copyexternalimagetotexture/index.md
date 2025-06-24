---
title: "GPUQueue: Methode copyExternalImageToTexture()"
short-title: copyExternalImageToTexture()
slug: Web/API/GPUQueue/copyExternalImageToTexture
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`copyExternalImageToTexture()`** Methode des [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Interfaces kopiert einen Schnappschuss, der von einem Quellbild, Video oder Canvas aufgenommen wurde, in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Durch die Verwendung dieser Funktion kann der Benutzeragent die effizienteste Methode zum Übertragen der Daten für jeden Quelltyp bestimmen.

## Syntax

```js-nolint
copyExternalImageToTexture(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Quelle darstellt, die zum Ziel geschrieben werden soll, sowie deren Ursprung. Dies kann die folgenden Eigenschaften haben:

    - `source`
      - : Ein Objekt, das die Quelle des Schnappschusses bereitstellt, der kopiert werden soll. Dies kann ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`ImageBitmap`](/de/docs/Web/API/ImageBitmap), [`ImageData`](/de/docs/Web/API/ImageData), [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) oder [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt sein. Die Bildquelldaten werden genau in dem Moment erfasst, wenn `copyExternalImageToTexture()` aufgerufen wird.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie spezifiziert – die obere linke Ecke des Quellsubbereichs, von dem kopiert werden soll. Zusammen mit `copySize` definiert dies das volle Ausmaß des Quellsubbereichs. Die `x`- und `y`-Werte standardisieren auf 0, wenn `origin` vollständig oder teilweise weggelassen wird.

        Zum Beispiel können Sie ein Array wie `[0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0 }` übergeben.

    - `flipY` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, wird die Bildaufnahme vertikal gespiegelt. Wenn ausgelassen, standardisiert `flipY` auf `false`.

- `destination`

  - : Ein Objekt, das die Textur-Subressource und den Ursprung definiert, um das aufgenommene Bild zu schreiben, sowie Metadaten zur Kodierung. Dies kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, auf welche Aspekte der Textur das Bild geschrieben werden soll. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, das kann Farb-, Tiefen- und Stencil-Aspekte bedeuten, abhängig von dem verwendeten Format.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Stencil-Aspekt eines Depth-or-Stencil-Formats wird beschrieben.

        Wenn ausgelassen, nimmt `aspect` den Wert `"all"` an.

    - `colorSpace` {{optional_inline}}

      - : Ein enumerierter Wert, der den Farbraum und die Kodierung beschreibt, die verwendet werden, um Daten in die Zieltextur zu kodieren. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn ausgelassen, standardisiert `colorSpace` auf `"srgb"`.

        > [!NOTE]
        > Die Kodierung kann dazu führen, dass Werte außerhalb des Bereichs `[0, 1]` in die Zieltextur geschrieben werden, wenn deren Format diese darstellen kann. Andernfalls werden die Ergebnisse auf den Bereich des Zieltexturformats beschränkt. Eine Konvertierung ist möglicherweise nicht notwendig, wenn `colorSpace` mit dem Farbraum des Quellbilds übereinstimmt.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die das Mip-Map-Level der Textur darstellt, auf das das Bild geschrieben werden soll. Wenn ausgelassen, standardisiert `mipLevel` auf 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie spezifiziert – die minimale Ecke des Texturbereichs, in den die Bilddaten geschrieben werden sollen. Zusammen mit `copySize` definiert dies das volle Ausmaß des Bereichs, in den kopiert werden soll. Die `x`-, `y`- und `z`-Werte standardisieren auf 0, wenn `origin` vollständig oder teilweise weggelassen wird.

        Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `premultipliedAlpha` {{optional_inline}}

      - : Ein boolescher Wert. Wenn auf `true` gesetzt, werden die RGB-Kanäle der Bilddaten, die in die Textur geschrieben wurden, mit dem Alphakanal vorvermultipliziert. Wenn ausgelassen, standardisiert `premultipliedAlpha` auf `false`.

        > [!NOTE]
        > Wenn diese Option auf `true` gesetzt ist und die `source` auch vorvermultipliziert ist, müssen die Quell-RGB-Werte beibehalten werden, selbst wenn sie ihre entsprechenden Alphawerte überschreiten.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das `width`, `height` und `depthOrArrayLayers` — des Bereichs, von dem/zu dem kopiert werden soll, spezifiziert.

    Zum Beispiel können Sie ein Array wie `[16, 1, 1]` oder das entsprechende Objekt `{ width: 16, height: 1, depthOrArrayLayers: 1 }` übergeben.

    Der `width`-Wert muss angegeben werden. Wenn die `height`- oder `depthOrArrayLayers`-Werte ausgelassen werden, standardisieren sie auf 1.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wirft einen `OperationError`, wenn die folgenden Kriterien nicht erfüllt sind:
    - `source.origin.x` + die Breite des zu kopierenden Bereichs ist kleiner oder gleich der Breite des Quellbilds.
    - `source.origin.y` + die Höhe des zu kopierenden Bereichs ist kleiner oder gleich der Höhe des Quellbilds.
    - `source.origin.z` + die depthOrArrayLayers des zu kopierenden Bereichs ist kleiner oder gleich 1.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (wenn in Bytes umgewandelt, im Fall von `TypedArray`s) ist ein Vielfaches von 4.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Bildquelldaten plattformübergreifend sind.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Destination [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, ist die Bildgrößenaufnahme gleich `size`.
- Die Ziel-[`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) beinhaltet die `GPUTextureUsage.COPY_DST` und `GPUTextureUsage.RENDER_ATTACHMENT` Flags.
- Die Ziel-[`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"2d"`.
- Die Ziel-[`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- Die Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ist eines der folgenden (die den `GPUTextureUsage.RENDER_ATTACHMENT`-Einsatz unterstützen):
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
- Die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).

## Beispiele

Im WebGPU Samples [Textured Cube-Beispiel](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird das folgende Snippet verwendet, um ein Bild abzurufen und es in eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) hochzuladen:

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
