---
title: "GPUQueue: Methode copyExternalImageToTexture()"
short-title: copyExternalImageToTexture()
slug: Web/API/GPUQueue/copyExternalImageToTexture
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`copyExternalImageToTexture()`** Methode des [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Interfaces kopiert einen Schnappschuss von einem Quellbild, Video oder Canvas in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Durch die Verwendung dieser Funktion kann der Benutzeragent die effizienteste Methode bestimmen, um die Daten für jeden Quelltyp zu kopieren.

## Syntax

```js-nolint
copyExternalImageToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt, das die Quelle zum Schreiben auf das Ziel und dessen Ursprung darstellt. Dies kann die folgenden Eigenschaften haben:
    - `source`
      - : Ein Objekt, das die Quelle des Schnappschusses zum Kopieren bereitstellt. Dies kann ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`ImageBitmap`](/de/docs/Web/API/ImageBitmap), [`ImageData`](/de/docs/Web/API/ImageData), [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) oder [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt sein. Die Bildquelldaten werden im Moment der Aufrufung von `copyExternalImageToTexture()` erfasst.
    - `origin` {{optional_inline}}
      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die obere linke Ecke des Quell-Subbereichs, aus dem kopiert werden soll. Zusammen mit `copySize` definiert dies den vollständigen Umfang des Quell-Subbereichs. Die Werte `x` und `y` standardmäßig auf 0, wenn `origin` weggelassen wird.

        Zum Beispiel können Sie ein Array wie `[0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0 }` übergeben.

    - `flipY` {{optional_inline}}
      - : Ein Boolean. Wenn auf `true` gesetzt, wird die Bildaufnahme vertikal gespiegelt. Wenn ausgelassen, ist `flipY` standardmäßig `false`.

- `destination`
  - : Ein Objekt, das die Texture-Subressource und den Ursprung definiert, auf den das erfasste Bild geschrieben werden soll, plus Kodierungsmetadaten. Dies kann die folgenden Eigenschaften haben:
    - `aspect` {{optional_inline}}
      - : Ein enumerierter Wert, der definiert, auf welche Aspekte der Textur das Bild geschrieben werden soll. Mögliche Werte sind:
        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Art des Formats Farbe, Tiefe und Schablone umfassen kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonenaspekt eines depth-or-stencil formats wird beschrieben.

        Wenn `aspect` ausgelassen wird, nimmt es den Wert `"all"` an.

    - `colorSpace` {{optional_inline}}
      - : Ein enumerierter Wert, der den Farbraum und die Kodierung beschreibt, die zum Kodieren der Daten in die Zieltextur verwendet werden. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn ausgelassen, ist `colorSpace` standardmäßig `"srgb"`.

        > [!NOTE]
        > Die Kodierung kann dazu führen, dass Werte außerhalb des Bereichs `[0, 1]` in die Zieltextur geschrieben werden, wenn deren Format diese darstellen kann. Andernfalls werden die Ergebnisse auf den Bereich des Zieltexturformats begrenzt. Eine Konvertierung kann nicht notwendig sein, wenn `colorSpace` mit dem Farbraum der Quelle übereinstimmt.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur repräsentiert, in die das Bild geschrieben werden soll. Wenn ausgelassen, ist `mipLevel` standardmäßig 0.
    - `origin` {{optional_inline}}
      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimale Ecke des Texturbereichs, in den die Bilddaten geschrieben werden sollen. Zusammen mit `copySize` definiert dies den vollständigen Umfang des Bereichs, in den kopiert werden soll. Die Werte `x`, `y` und `z` standardmäßig auf 0, wenn `origin` weggelassen wird.

        Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `premultipliedAlpha` {{optional_inline}}
      - : Ein Boolean. Wenn auf `true` gesetzt, werden die RGB-Kanäle der in die Textur geschriebenen Bilddaten mit dem Alpha-Kanal vorvermischt. Wenn ausgelassen, ist `premultipliedAlpha` standardmäßig `false`.

        > [!NOTE]
        > Wenn diese Option auf `true` gesetzt ist und die `source` auch vorvermischt ist, müssen die RGB-Werte der Quelle beibehalten werden, selbst wenn sie ihre entsprechenden Alpha-Werte überschreiten.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `copySize`
  - : Ein Objekt oder Array, das `width`, `height` und `depthOrArrayLayers` — des Bereichs angibt, von dem/auf den kopiert werden soll.

    Zum Beispiel können Sie ein Array wie `[16, 1, 1]` oder das entsprechende Objekt `{ width: 16, height: 1, depthOrArrayLayers: 1 }` übergeben.

    Der `width`-Wert muss enthalten sein. Wenn die `height`- oder `depthOrArrayLayers`-Werte weggelassen werden, sind sie standardmäßig 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode löst einen `OperationError` aus, wenn die folgenden Kriterien nicht erfüllt sind:
    - `source.origin.x` + die Breite des zu kopierenden Bereichs ist kleiner oder gleich der Breite des Quellbilds.
    - `source.origin.y` + die Höhe des zu kopierenden Bereichs ist kleiner oder gleich der Höhe des Quellbilds.
    - `source.origin.z` + die `depthOrArrayLayers` des zu kopierenden Bereichs ist kleiner oder gleich 1.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (umgerechnet in Bytes, im Fall von `TypedArray`s) ist ein Vielfaches von 4.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Bildquellendaten aus einer anderen Herkunft stammen.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) des Ziels.
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel-`GPUTexture.format`.
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel-`GPUTexture.format`.
- Wenn das Ziel-`GPUTexture.format` ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, entspricht die Bildaufnahmengröße `size`.
- Die Ziel-`GPUTexture.usage` enthält die Flags `GPUTextureUsage.COPY_DST` und `GPUTextureUsage.RENDER_ATTACHMENT`.
- Die Ziel-`GPUTexture.dimension` ist `"2d"`.
- Die Ziel-`GPUTexture.sampleCount` ist 1.
- Das Ziel-`GPUTexture.format` ist eines der folgenden (die `GPUTextureUsage.RENDER_ATTACHMENT`-Nutzung unterstützen):
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
- Die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziel-`GPUTexture.format`.
- Die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziel-`GPUTexture.format`.

## Beispiele

Im WebGPU-Beispiel [Textured Cube example](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird der folgende Codeausschnitt verwendet, um ein Bild abzurufen und in eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) hochzuladen:

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
