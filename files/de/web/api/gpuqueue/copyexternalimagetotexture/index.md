---
title: "GPUQueue: Methode copyExternalImageToTexture()"
short-title: copyExternalImageToTexture()
slug: Web/API/GPUQueue/copyExternalImageToTexture
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`copyExternalImageToTexture()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle kopiert einen Schnappschuss, der von einem Quellbild, -video oder -canvas aufgenommen wurde, in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Durch die Verwendung dieser Funktion kann der Benutzeragent den effizientesten Weg bestimmen, die Daten für jeden Quelltyp zu kopieren.

## Syntax

```js-nolint
copyExternalImageToTexture(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Quelle zum Schreiben an das Ziel und seinen Ursprung darstellt. Dies kann die folgenden Eigenschaften haben:

    - `source`
      - : Ein Objekt, das die Quelle des zu kopierenden Schnappschusses bereitstellt. Dies kann ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) sein. Die Bildquelldaten werden im genauen Moment, in dem `copyExternalImageToTexture()` aufgerufen wird, erfasst.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt – die obere linke Ecke des Quellunterbereichs, von dem kopiert werden soll. Zusammen mit `copySize` definiert dies das gesamte Ausmaß des Quellunterbereichs. Die `x`- und `y`-Werte haben den Standardwert 0, wenn ein Teil oder das gesamte `origin` weggelassen wird.

        Nachfolgend ein Beispielarray:

        ```js
        origin: [0, 0];
        ```

        Das entsprechende Objekt würde so aussehen:

        ```js
        origin: {
          x: 0,
          y: 0
        }
        ```

    - `flipY` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, wird die Bildaufnahme vertikal gespiegelt. Wenn weggelassen, hat `flipY` den Standardwert `false`.

- `destination`

  - : Ein Objekt, das die Textur-Teilsressource und den Ursprung zum Schreiben des erfassten Bildes definiert, sowie Kodierungsmetadaten. Dies kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein aufgezählter Wert, der definiert, auf welche Aspekte der Textur das Bild geschrieben werden soll. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach dem Format, mit dem Sie arbeiten, alle oder einen beliebigen der Farbtiefen- und Schablonenanteile bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Depth-or-Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonaspekt eines Depth-or-Stencil-Formats wird beschrieben.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `colorSpace` {{optional_inline}}

      - : Ein aufgezählter Wert, der den Farbraum und die Kodierung beschreibt, die zum Kodieren von Daten in die Zieltextur verwendet werden. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn weggelassen, hat `colorSpace` den Standardwert `"srgb"`.

        > [!NOTE]
        > Die Kodierung kann dazu führen, dass Werte außerhalb des Bereichs `[0, 1]` in die Zieltextur geschrieben werden, wenn ihr Format diese darstellen kann. Andernfalls werden die Ergebnisse auf den Bereich des Zieltexturformats begrenzt. Eine Umwandlung ist möglicherweise nicht erforderlich, wenn `colorSpace` mit dem Farbraum des Quellbildes übereinstimmt.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Stufe der Textur darstellt, auf die das Bild geschrieben werden soll. Wenn weggelassen, hat `mipLevel` den Standardwert 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt – die minimale Ecke des Texturbereichs, in den die Bilddaten geschrieben werden sollen. Zusammen mit `copySize` definiert dies das gesamte Ausmaß des Bereichs, in den kopiert werden soll. Die `x`-, `y`- und `z`-Werte haben den Standardwert 0, wenn ein Teil oder das gesamte `origin` weggelassen wird.

        Nachfolgend ein Beispielarray:

        ```js
        origin: [0, 0, 0];
        ```

        Das entsprechende Objekt würde so aussehen:

        ```js
        origin: {
          x: 0,
          y: 0,
          z: 0
        }
        ```

    - `premultipliedAlpha` {{optional_inline}}

      - : Ein boolescher Wert. Wenn auf `true` gesetzt, werden die Bilddaten, die in die Textur geschrieben werden, mit ihren RGB-Kanälen, die mit dem Alphakanal vormultipliziert sind. Wenn weggelassen, hat `premultipliedAlpha` den Standardwert `false`.

        > [!NOTE]
        > Wenn diese Option auf `true` gesetzt ist und `source` ebenfalls vormultipliziert ist, müssen die RGB-Werte der Quelle erhalten bleiben, selbst wenn sie ihre entsprechenden Alphawerte überschreiten.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur repräsentiert, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das `width`, `height` und `depthOrArrayLayers` des Bereichs angibt, von dem/zu dem kopiert werden soll.

    Nachfolgend ein Beispielarray:

    ```js
    origin: [16, 1, 1];
    ```

    Das entsprechende Objekt würde so aussehen:

    ```js
    origin: {
      width: 16,
      height: 1,
      depthOrArrayLayers: 1
    }
    ```

    Der `width`-Wert muss angegeben werden. Wenn die `height`- oder `depthOrArrayLayers`-Werte weggelassen werden, haben sie den Standardwert 1.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wirft einen `OperationError`, wenn die folgenden Kriterien nicht erfüllt sind:
    - `source.origin.x` + die Breite des zu kopierenden Bereichs ist kleiner oder gleich der Breite des Quellbildes.
    - `source.origin.y` + die Höhe des zu kopierenden Bereichs ist kleiner oder gleich der Höhe des Quellbildes.
    - `source.origin.z` + die `depthOrArrayLayers` des zu kopierenden Bereichs sind kleiner oder gleich 1.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (wenn konvertiert in Bytes, im Fall von `TypedArray`s) ist ein Vielfaches von 4.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Bildquelldaten aus einer anderen Herkunft stammen.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Ziel-[`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Depth-or-Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, entspricht die Bildaufnahmengröße `size`.
- Das Ziel-[`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) beinhaltet die `GPUTextureUsage.COPY_DST` und `GPUTextureUsage.RENDER_ATTACHMENT` Flags.
- Die Ziel-[`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension) ist `"2d"`.
- Die Ziel-[`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- Das Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ist eines der folgenden (die `GPUTextureUsage.RENDER_ATTACHMENT`-Verwendung unterstützen):
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

Im WebGPU-Samples-Textured-Cube-[Beispiel](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird der folgende Code verwendet, um ein Bild abzurufen und es in eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) hochzuladen:

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
