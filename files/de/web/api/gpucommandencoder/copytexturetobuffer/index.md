---
title: "GPUCommandEncoder: Methode copyTextureToBuffer()"
short-title: copyTextureToBuffer()
slug: Web/API/GPUCommandEncoder/copyTextureToBuffer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyTextureToBuffer()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle codiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.

## Syntax

```js-nolint
copyTextureToBuffer(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Textur definiert, von der die Daten kopiert werden. In Kombination mit `copySize` definiert es den Bereich der Quell-Textur-Subressource. `source` kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, welche Aspekte der Textur kopiert werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden kopiert, was je nach Art des Formats alle oder einige der Farb-, Tiefen- und Stencil-Aspekte sein können.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen-oder-Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird kopiert.
        - `"stencil-only"`
          - : Nur der Stencil-Aspekt eines Tiefen-oder-Stencil-Formats wird kopiert.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, von der die Daten kopiert werden. Wird `mipLevel` weggelassen, wird es standardmäßig auf 0 gesetzt.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung des Kopierens spezifiziert — die minimale Ecke des Texturbereichs, von dem die Daten kopiert werden. Zusammen mit `size` definiert dies den gesamten zu kopierenden Bereich. Die Werte `x`, `y` und `z` werden auf 0 gesetzt, wenn `origin` in Teilen oder vollständig ausgelassen wird.

        Hier ist ein Beispiel für ein Array:

        ```js
        [0, 0, 0];
        ```

        Das entsprechende Objekt würde so aussehen:

        ```js
        {
          x: 0,
          y: 0,
          z: 0
        }
        ```

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, von der die Daten kopiert werden.

- `destination`

  - : Ein Objekt, das definiert, zu welchem Puffer geschrieben wird, sowie das Layout der zu schreibenden Daten in den Puffer. In Kombination mit `copySize` definiert es den Bereich des Zielpuffers. `source` kann die folgenden Eigenschaften haben:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in den geschrieben werden soll.
    - `offset` {{optional_inline}}
      - : Der Offset in Bytes vom Beginn der `data` bis zur Startposition, an der die kopierten Daten geschrieben werden sollen. Wird `offset` weggelassen, wird es standardmäßig auf 0 gesetzt.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Distanz in Bytes zwischen dem Beginn jeder Blockreihe (d.h. einer Reihe vollständiger Texelblöcke) und der darauf folgenden Blockreihe angibt. Dies ist erforderlich, wenn mehrere Blockreihen vorhanden sind (d.h. die Kopierhöhe oder -tiefe beträgt mehr als einen Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro einzelnes Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` gibt Ihnen die Distanz in Bytes zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Lagenschichtenanzahl der kopierten Daten spezifiziert. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen-/Array-Lagenschichtenanzahl optional sind und, wenn nicht angegeben, standardmäßig auf 1 gesetzt werden.

    Hier ist ein Beispiel für ein `copySize`-Array:

    ```js
    [16, 16, 2];
    ```

    Das entsprechende Objekt würde so aussehen:

    ```js
    {
      width: 16,
      height: 16,
      depthOrArrayLayers: 2
    }
    ```

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`copyTextureToBuffer()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für die `source`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 ist, ist die Subressourcengröße gleich `size`.
- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) der `source` enthält das `GPUTextureUsage.COPY_SRC`-Flag.
- Die [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) der `source` ist 1.
- `source.aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist eine gültige Bildkopierquelle gemäß den [Tiefen-oder-Stencil-Formaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `source` ist mit der `copySize` kompatibel.

Für die `destination`:

- `destination.bytesPerRow` ist ein Vielfaches von 256.
- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `destination.buffer` enthält das `GPUBufferUsage.COPY_DST`-Flag.

## Beispiele

```js
commandEncoder.copyTextureToBuffer(
  {
    texture: sourceTexture,
  },
  {
    buffer: destinationBuffer,
  },
  {
    width: 16,
    height: 16,
    depthOrArrayLayers: 2,
  },
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
