---
title: "GPUQueue: copyExternalImageToTexture() Methode"
short-title: copyExternalImageToTexture()
slug: Web/API/GPUQueue/copyExternalImageToTexture
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`copyExternalImageToTexture()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle kopiert einen Schnappschuss, der von einem Quellbild, Video oder Canvas gemacht wurde, in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Die Verwendung dieser Funktion ermöglicht es dem Benutzeragenten, die effizienteste Methode zum Kopieren der Daten für jeden Quelltyp zu bestimmen.

## Syntax

```js-nolint
copyExternalImageToTexture(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Quelle angibt, um zum Ziel zu schreiben, und dessen Ursprung. Dies kann die folgenden Eigenschaften haben:

    - `source`
      - : Ein Objekt, das die Quelle des Schnappschusses angibt, der kopiert werden soll. Dies kann ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) sein. Die Bildquell-Daten werden exakt in dem Moment erfasst, in dem `copyExternalImageToTexture()` aufgerufen wird.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die obere linke Ecke des zu kopierenden Quell-Sub-Bereichs. Zusammen mit `copySize` wird der gesamte Umfang des Quell-Sub-Bereichs definiert. Die `x`- und `y`-Werte sind standardmäßig 0, falls `origin` ganz oder teilweise weggelassen wird.

        Dies ist ein Beispiel-Array:

        ```js
        origin: [0, 0];
        ```

        Das äquivalente Objekt würde so aussehen:

        ```js
        origin: {
          x: 0,
          y: 0
        }
        ```

    - `flipY` {{optional_inline}}
      - : Ein Boolean. Wenn auf `true` gesetzt, wird die Bildaufnahme vertikal gespiegelt. Falls weggelassen, ist `flipY` standardmäßig `false`.

- `destination`

  - : Ein Objekt, das die Textur-Unterressource und den Ursprung definiert, um das erfasste Bild sowie die Kodierungs-Metadaten zu schreiben. Dies kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, auf welche Aspekte der Textur das Bild geschrieben werden soll. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Art des Formats alle oder beliebig viele von Farbe, Tiefe und Schablone sein kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen- oder Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonen-Aspekt eines Tiefen- oder Schablonenformats wird geschrieben.

        Falls weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `colorSpace` {{optional_inline}}

      - : Ein enumerierter Wert, der den Farbraum und die Kodierung beschreibt, die verwendet werden, um Daten in die Zieltextur zu kodieren. Mögliche Werte sind `"srgb"` und `"display-p3"`. Falls weggelassen, hat `colorSpace` standardmäßig den Wert `"srgb"`.

        > [!NOTE]
        > Die Kodierung kann dazu führen, dass Werte außerhalb des Bereichs `[0, 1]` in die Zieltextur geschrieben werden, wenn ihr Format diese darstellen kann. Andernfalls werden die Ergebnisse auf den Bereich des Zieltexturformats begrenzt. Eine Konvertierung kann nicht notwendig sein, wenn `colorSpace` mit dem Farbraum des Quellbilds übereinstimmt.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die das Mip-Map-Level der Textur darstellt, auf die das Bild geschrieben werden soll. Falls weggelassen, ist `mipLevel` standardmäßig 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimalste Ecke des Texturbereichs, in die die Bilddaten geschrieben werden sollen. Zusammen mit `copySize` wird der gesamte Bereich definiert, der kopiert werden soll. Die `x`-, `y`- und `z`-Werte sind standardmäßig 0, falls `origin` ganz oder teilweise weggelassen wird.

        Dies ist ein Beispiel-Array:

        ```js
        origin: [0, 0, 0];
        ```

        Das äquivalente Objekt würde so aussehen:

        ```js
        origin: {
          x: 0,
          y: 0,
          z: 0
        }
        ```

    - `premultipliedAlpha` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, haben die in die Textur geschriebenen Bilddaten ihre RGB-Kanäle durch den Alphakanal vorvervielfacht. Falls weggelassen, ist `premultipliedAlpha` standardmäßig `false`.

        > [!NOTE]
        > Wenn diese Option auf `true` gesetzt ist und die `source` ebenfalls vorvervielfacht ist, müssen die Quell-RGB-Werte beibehalten werden, auch wenn sie ihre entsprechenden Alphawerte übersteigen.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das `width`, `height`, und `depthOrArrayLayers` des Bereichs angibt, der kopiert werden soll.

    Dies ist ein Beispiel-Array:

    ```js
    origin: [16, 1, 1];
    ```

    Das äquivalente Objekt würde so aussehen:

    ```js
    origin: {
      width: 16,
      height: 1,
      depthOrArrayLayers: 1
    }
    ```

    Der `width`-Wert muss enthalten sein. Wenn die `height`- oder `depthOrArrayLayers`-Werte weggelassen werden, sind sie standardmäßig 1.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode löst einen `OperationError` aus, wenn die folgenden Kriterien nicht erfüllt sind:
    - `source.origin.x` + die Breite des zu kopierenden Bereichs ist kleiner oder gleich der Breite des Quellbilds.
    - `source.origin.y` + die Höhe des zu kopierenden Bereichs ist kleiner oder gleich der Höhe des Quellbilds.
    - `source.origin.z` + die depthOrArrayLayers des zu kopierenden Bereichs ist kleiner oder gleich 1.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (in Bytes umgerechnet, im Falle von `TypedArray`s) ist ein Vielfaches von 4.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Bildquell-Daten von einer anderen Quelle stammen.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Ziel-Textur [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel-Texturformats [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel-Texturformats [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Zieltexturformat ein [Tiefen- oder Schablonenformat](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, entspricht die Bildaufnahmegröße `size`.
- Die Zieltextur [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält die `GPUTextureUsage.COPY_DST`- und `GPUTextureUsage.RENDER_ATTACHMENT`-Flags.
- Die Zieltextur [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"2d"`.
- Die Zieltextur [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- Das Zieltexturformat [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ist eines der folgenden (die `GPUTextureUsage.RENDER_ATTACHMENT`-Nutzung unterstützen):
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
- Die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziel-Texturformats [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziel-Texturformats [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).

## Beispiele

Im WebGPU Tutorials [Beispiel des texturierten Würfels](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird der folgende Ausschnitt verwendet, um ein Bild abzurufen und es in eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) hochzuladen:

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

- Der [WebGPU API](/de/docs/Web/API/WebGPU_API)
