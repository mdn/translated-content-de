---
title: "GPUQueue: copyExternalImageToTexture() Methode"
short-title: copyExternalImageToTexture()
slug: Web/API/GPUQueue/copyExternalImageToTexture
l10n:
  sourceCommit: 13f9fca81ddaf3a82b28c19b50afca7b9a46066f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`copyExternalImageToTexture()`** Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue) Schnittstelle kopiert ein Snapshot, das von einer Quellbild-, Video- oder Leinwand aufgenommen wurde, in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Die Verwendung dieser Funktion ermöglicht es dem User-Agent, die effizienteste Art und Weise zu bestimmen, die Daten für jeden Quelltyp zu kopieren.

## Syntax

```js-nolint
copyExternalImageToTexture(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Quelle zum Schreiben an das Ziel und dessen Ursprung darstellt. Dies kann die folgenden Eigenschaften haben:

    - `source`
      - : Ein Objekt, das die Quelle des Snapshots zum Kopieren bereitstellt. Dies kann ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`ImageBitmap`](/de/docs/Web/API/ImageBitmap), [`ImageData`](/de/docs/Web/API/ImageData), [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) oder [`VideoFrame`](/de/docs/Web/API/VideoFrame) Objekt sein. Die Bildquelldaten werden genau in dem Moment erfasst, in dem `copyExternalImageToTexture()` aufgerufen wird.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die obere linke Ecke des zu kopierenden Quellunterbereichs. Zusammen mit `copySize` definiert dies den gesamten Umfang des Quellunterbereichs. Die `x`- und `y`-Werte standardisieren auf 0, wenn `origin` ganz oder teilweise weggelassen wird.

        Im Folgenden ein Beispielarray:

        ```js
        origin: [0, 0];
        ```

        Das entsprechende Objekt sähe so aus:

        ```js
        origin: {
          x: 0,
          y: 0
        }
        ```

    - `flipY` {{optional_inline}}
      - : Ein Boolean. Wenn auf `true` gesetzt, wird der Bildausschnitt vertikal gespiegelt. Wenn es weggelassen wird, wird `flipY` standardmäßig auf `false` gesetzt.

- `destination`

  - : Ein Objekt, das die Textur-Unterressource und den Ursprung definiert, um das erfasste Bild zu schreiben, sowie Metadaten zur Codierung. Dies kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, auf welche Aspekte der Textur das Bild geschrieben werden soll. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was alle oder einige von Farbe, Tiefe und Schablone bedeuten kann, abhängig davon, um welche Art von Format es sich handelt.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen-oder-Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonaspekt eines Tiefen-oder-Schablonenformats wird beschrieben.

        Wenn es weggelassen wird, nimmt `aspect` den Wert `"all"` an.

    - `colorSpace` {{optional_inline}}

      - : Ein enumerierter Wert, der den Farbraum und die Codierung beschreibt, die verwendet werden, um Daten in die Zieltextur zu codieren. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wird es weggelassen, ist `colorSpace` standardmäßig `"srgb"`.

        > [!NOTE]
        > Die Codierung kann dazu führen, dass Werte außerhalb des Bereichs `[0, 1]` in die Zieltextur geschrieben werden, wenn deren Format sie darstellen kann. Andernfalls werden die Ergebnisse auf den Bereich des Zieltexturformats begrenzt. Eine Umwandlung ist möglicherweise nicht erforderlich, wenn `colorSpace` mit dem Farbraum der Bildquelle übereinstimmt.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur repräsentiert, in die das Bild geschrieben wird. Wenn es weggelassen wird, wird `mipLevel` standardmäßig auf 0 gesetzt.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimalste Ecke des Texturbereichs, in den die Bilddaten geschrieben werden sollen. Zusammen mit `copySize` definiert dies den gesamten Umfang des zu kopierenden Bereichs. Die `x`-, `y`- und `z`-Werte standardisieren auf 0, wenn `origin` ganz oder teilweise weggelassen wird.

        Im Folgenden ein Beispielarray:

        ```js
        origin: [0, 0, 0];
        ```

        Das entsprechende Objekt sähe so aus:

        ```js
        origin: {
          x: 0,
          y: 0,
          z: 0
        }
        ```

    - `premultipliedAlpha` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, haben die im Textur geschriebenen Bilddaten ihre RGB-Kanäle bereits mit dem Alphakanal multipliziert. Wird es nicht angegeben, ist `premultipliedAlpha` standardmäßig `false`.

        > [!NOTE]
        > Wenn diese Option auf `true` gesetzt ist und `source` ebenfalls vorvervielfacht ist, müssen die RGB-Werte der Quelle beibehalten werden, auch wenn sie ihre entsprechenden Alphawerte überschreiten.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) Objekt, das die Textur repräsentiert, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das `width`, `height` und `depthOrArrayLayers` des Bereichs, von dem kopiert werden soll, angibt.

    Im Folgenden ein Beispielarray:

    ```js
    origin: [16, 1, 1];
    ```

    Das entsprechende Objekt sähe so aus:

    ```js
    origin: {
      width: 16,
      height: 1,
      depthOrArrayLayers: 1
    }
    ```

    Der `width`-Wert muss enthalten sein. Wenn die `height`- oder `depthOrArrayLayers`-Werte weggelassen werden, standardisieren sie auf 1.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wirft einen `OperationError`, wenn die folgenden Kriterien nicht erfüllt sind:
    - `source.origin.x` + die Breite des zu kopierenden Bereichs ist kleiner als oder gleich der Breite des Quellbilds.
    - `source.origin.y` + die Höhe des zu kopierenden Bereichs ist kleiner als oder gleich der Höhe des Quellbilds.
    - `source.origin.z` + das `depthOrArrayLayers` des zu kopierenden Bereichs ist kleiner als oder gleich 1.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (bei Umwandlung in Bytes, im Fall von `TypedArray`s) ist ein Vielfaches von 4.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Bildquelldaten Cross-Origin sind.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Ziel [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Ziel[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen-oder-Schablonenformat](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, entspricht die Bildaufnahmengröße `size`.
- Die Ziel[`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) umfasst die `GPUTextureUsage.COPY_DST` und `GPUTextureUsage.RENDER_ATTACHMENT` Flags.
- Die Ziel[`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"2d"`.
- Die Ziel[`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- Das Ziel[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ist eines der folgenden (welche `GPUTextureUsage.RENDER_ATTACHMENT` Nutzung unterstützen):
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
- `destination.origin.x` + `copySize.width` ist kleiner als oder gleich `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) [`width`](/de/docs/Web/API/GPUTexture/width).
- `destination.origin.y` + `copySize.height` ist kleiner als oder gleich `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) [`height`](/de/docs/Web/API/GPUTexture/height).
- `destination.origin.z` + `copySize.depthOrArrayLayers` ist kleiner als oder gleich `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) [`depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers).
- Die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziel[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziel[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).

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
