---
title: "GPUCommandEncoder: copyTextureToBuffer()-Methode"
short-title: copyTextureToBuffer()
slug: Web/API/GPUCommandEncoder/copyTextureToBuffer
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyTextureToBuffer()`**-Methode des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Interfaces kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.

## Syntax

```js-nolint
copyTextureToBuffer(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Textur definiert, aus der die Daten kopiert werden sollen. Zusammen mit `copySize` definiert es den Bereich der Quelldatei-Texturunterressource. `source` kann die folgenden Eigenschaften aufweisen:

    - `aspect` {{optional_inline}}

      - : Ein aufzählbarer Wert, der definiert, aus welchen Aspekten der Textur die Daten kopiert werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden kopiert, was je nach Format alle oder beliebige der Aspekte Farbe, Tiefe und Schablone bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird kopiert.
        - `"stencil-only"`
          - : Nur der Schablonaspekt eines depth-or-stencil-Formats wird kopiert.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, aus der die Daten kopiert werden sollen. Wenn weggelassen, wird `mipLevel` auf 0 standardmäßig gesetzt.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimale Ecke des Texturbereichs, aus dem die Daten kopiert werden sollen. Zusammen mit `size` definiert dies den vollen Umfang des zu kopierenden Bereichs. Die `x`-, `y`- und `z`-Werte sind standardmäßig 0, wenn `origin` weggelassen wird.

        Hier folgt ein Beispiel-Array:

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
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, aus der die Daten kopiert werden sollen.

- `destination`

  - : Ein Objekt, das den Puffer definiert, in den geschrieben werden soll, sowie das Layout der Daten, die in den Puffer geschrieben werden sollen. Zusammen mit `copySize` definiert es den Bereich des Zielpuffers. `source` kann die folgenden Eigenschaften aufweisen:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in den geschrieben werden soll.
    - `offset` {{optional_inline}}
      - : Der Versatz, in Bytes, vom Anfang von `data` bis zur Startposition, an der die kopierten Daten geschrieben werden sollen. Wenn weggelassen, ist `offset` standardmäßig 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die den Abstand, in Bytes, zwischen dem Beginn jeder Blockreihe (d.h. einer Reihe vollständiger Texelblöcke) und der nachfolgenden Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d.h. wenn die Kopierhöhe oder -tiefe mehr als einen Block beträgt).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` ergibt den Abstand in Bytes zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtebene der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen/Array-Schichtebenenwerte optional sind und auf 1 gesetzt werden, wenn sie weggelassen werden.

    Hier folgt ein Beispiel-`copySize`-Array:

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

Kein ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für die `source`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) größer als 1 ist, ist die Unterressourcengröße gleich `size`.
- Die `source`'s [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält das `GPUTextureUsage.COPY_SRC`-Flag.
- Die `source`'s [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `source.aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist eine gültige Bildkopierquelle gemäß [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `source` ist mit der `copySize` kompatibel.

Für die `destination`:

- `destination.bytesPerRow` ist ein Vielfaches von 256.
- Der `destination.buffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.COPY_DST`-Flag.

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
