---
title: "GPUQueue: copyExternalImageToTexture()-Methode"
short-title: copyExternalImageToTexture()
slug: Web/API/GPUQueue/copyExternalImageToTexture
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyExternalImageToTexture()`**-Methode der {{domxref("GPUQueue")}}-Schnittstelle kopiert einen Schnappschuss, der von einem Quellbild, Video oder Canvas aufgenommen wurde, in eine gegebene {{domxref("GPUTexture")}}.

Die Verwendung dieser Funktion ermöglicht es dem Benutzeragenten, die effizienteste Methode zu bestimmen, um die Daten gemäß dem Quelltyp zu kopieren.

## Syntax

```js-nolint
copyExternalImageToTexture(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Quelle, von der in das Ziel geschrieben wird, und deren Ursprung repräsentiert. Es kann folgende Eigenschaften haben:

    - `source`
      - : Ein Objekt, das die Quelle des zu kopierenden Schnappschusses bereitstellt. Dies kann ein {{domxref("ImageBitmap")}}, {{domxref("HTMLVideoElement")}}, {{domxref("VideoFrame")}}, {{domxref("HTMLCanvasElement")}} oder {{domxref("OffscreenCanvas")}} sein. Die Bildquellendaten werden genau in dem Moment erfasst, in dem `copyExternalImageToTexture()` aufgerufen wird.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die obere linke Ecke des Quell-Subbereichs, von dem kopiert werden soll. Zusammen mit `copySize` definiert dies das volle Ausmaß des Quell-Subbereichs. Die `x`- und `y`-Werte sind standardmäßig 0, wenn irgendetwas von `origin` weggelassen wird.

        Nachfolgend ein Beispiel-Array:

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
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, wird die Bildaufnahme vertikal gespiegelt. Wenn weggelassen, ist `flipY` standardmäßig auf `false`.

- `destination`

  - : Ein Objekt, das die Textur-Subressource und den Ursprung definiert, in die das erfasste Bild geschrieben werden soll, sowie Kodierungsmetadaten. Es kann folgende Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein Aufzählungswert, der definiert, welche Aspekte der Textur das Bild geschrieben werden soll. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Format alle oder nur einige der Farbe, Tiefe und Schablone bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen- oder Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonaspekt eines Tiefen- oder Schablonenformats wird beschrieben.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `colorSpace` {{optional_inline}}

      - : Ein Aufzählungswert, der den Farbraum und die Kodierung beschreibt, die verwendet werden, um Daten in die Zieltextur zu kodieren. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn weggelassen, ist `colorSpace` standardmäßig `"srgb"`.

        > [!NOTE]
        > Die Kodierung kann dazu führen, dass Werte außerhalb des Bereichs `[0, 1]` in die Zieltextur geschrieben werden, wenn deren Format diese darstellen kann. Andernfalls werden die Ergebnisse auf den Bereich des Zieltexturformats begrenzt. Eine Konvertierung ist möglicherweise nicht erforderlich, wenn `colorSpace` mit dem Farbraum des Quellbilds übereinstimmt.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, in die das Bild geschrieben werden soll. Wenn weggelassen, ist `mipLevel` standardmäßig 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimale Ecke des Texturbereichs, in den die Bilddaten geschrieben werden sollen. Zusammen mit `copySize` definiert dies das volle Ausmaß des Bereichs, in den kopiert werden soll. Die `x`-, `y`- und `z`-Werte sind standardmäßig 0, wenn irgendwelche von `origin` weggelassen werden.

        Nachfolgend ein Beispiel-Array:

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

      - : Ein boolescher Wert. Wenn auf `true` gesetzt, werden die in die Textur geschriebenen Bilddaten mit den RGB-Kanälen durch den Alphakanal vorvermultipliziert. Wenn weggelassen, ist `premultipliedAlpha` standardmäßig `false`.

        > [!NOTE]
        > Wenn diese Option auf `true` gesetzt ist und die `source` ebenfalls vorvermultipliziert ist, müssen die RGB-Werte der Quelle erhalten bleiben, selbst wenn sie ihre entsprechenden Alphawerte überschreiten.

    - `texture`
      - : Ein {{domxref("GPUTexture")}}-Objekt, das die Textur repräsentiert, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das die `width`, `height` und `depthOrArrayLayers` des Bereichs, von dem/nach dem kopiert wird, angibt.

    Nachfolgend ein Beispiel-Array:

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

    Der `width`-Wert muss angegeben werden. Wenn die `height`- oder `depthOrArrayLayers`-Werte weggelassen werden, ist der Standardwert 1.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` {{domxref("DOMException")}}
  - : Die Methode wirft einen `OperationError`, wenn die folgenden Kriterien nicht erfüllt sind:
    - `source.origin.x` + die Breite des zu kopierenden Bereichs ist kleiner oder gleich der Breite des Quellbildes.
    - `source.origin.y` + die Höhe des zu kopierenden Bereichs ist kleiner oder gleich der Höhe des Quellbildes.
    - `source.origin.z` + die `depthOrArrayLayers` des zu kopierenden Bereichs ist kleiner oder gleich 1.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (bei Umwandlung in Bytes, im Falle von `TypedArray`s) ist ein Vielfaches von 4.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird geworfen, wenn die Bildquellendaten cross-origin sind.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`writeTexture()`** erfüllt werden, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und die {{domxref("GPUQueue")}} wird ungültig:

- `mipLevel` ist kleiner als die Ziel-{{domxref("GPUTexture.mipLevelCount")}}.
- `origin.x` ist ein Vielfaches der Texel-Blockbreite des Ziel-{{domxref("GPUTexture.format")}}.
- `origin.y` ist ein Vielfaches der Texel-Blockhöhe des Ziel-{{domxref("GPUTexture.format")}}.
- Wenn das Ziel-{{domxref("GPUTexture.format")}} ein [Tiefen- oder Schablonenformat](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, ist die Bildaufnahmegröße gleich `size`.
- Das Ziel-{{domxref("GPUTexture.usage")}} enthält die `GPUTextureUsage.COPY_DST` und `GPUTextureUsage.RENDER_ATTACHMENT`-Flags.
- Die Ziel-{{domxref("GPUTexture.dimension")}} ist `"2d"`.
- Die Ziel-{{domxref("GPUTexture.sampleCount")}} ist 1.
- Das Ziel-{{domxref("GPUTexture.format")}} ist eines der folgenden (die `GPUTextureUsage.RENDER_ATTACHMENT`-Nutzung unterstützen):
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
- `destination.origin.x` + `copySize.width` ist kleiner oder gleich der `destination` {{domxref("GPUTexture")}} {{domxref("GPUTexture.width", "Width")}}.
- `destination.origin.y` + `copySize.height` ist kleiner oder gleich der `destination` {{domxref("GPUTexture")}} {{domxref("GPUTexture.height", "Height")}}.
- `destination.origin.z` + `copySize.depthOrArrayLayers` ist kleiner oder gleich der `destination` {{domxref("GPUTexture")}} {{domxref("GPUTexture.depthOrArrayLayers", "DepthOrArrayLayers")}}.
- Die `destination` {{domxref("GPUTexture.width")}} ist ein Vielfaches der Texel-Blockbreite des Ziel-{{domxref("GPUTexture.format")}}.
- Die `destination` {{domxref("GPUTexture.height")}} ist ein Vielfaches der Texel-Blockhöhe des Ziel-{{domxref("GPUTexture.format")}}.

## Beispiele

Im WebGPU-Beispiel [Textured Cube](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird der folgende Codeabschnitt verwendet, um ein Bild zu holen und es in eine {{domxref("GPUTexture")}} hochzuladen:

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
