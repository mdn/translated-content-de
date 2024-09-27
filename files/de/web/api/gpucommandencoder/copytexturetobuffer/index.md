---
title: "GPUCommandEncoder: Methode copyTextureToBuffer()"
short-title: copyTextureToBuffer()
slug: Web/API/GPUCommandEncoder/copyTextureToBuffer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`copyTextureToBuffer()`** der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.

## Syntax

```js-nolint
copyTextureToBuffer(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Textur definiert, aus der die Daten kopiert werden sollen. Zusammen mit `copySize` definiert es den Bereich der Quelltextur-Unterressource. `source` kann folgende Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur kopiert werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden kopiert, was je nach Format Farbe, Tiefe und Schablone umfassen kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Depth-or-Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird kopiert.
        - `"stencil-only"`
          - : Nur der Schablonen-Aspekt eines Depth-or-Stencil-Formats wird kopiert.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mipmapping-Ebene der Textur darstellt, aus der die Daten kopiert werden sollen. Wird `mipLevel` weggelassen, wird der Standardwert 0 angenommen.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung des Kopiervorgangs angibt — die minimale Ecke des Texturbereichs, aus dem die Daten kopiert werden sollen. Zusammen mit `size` definiert es das gesamte Ausmaß des zu kopierenden Bereichs. Die `x`-, `y`- und `z`-Werte nehmen den Standardwert 0 an, wenn `origin` weggelassen wird.

        Folgendes ist ein Beispiel-Array:

        ```js
        [0, 0, 0];
        ```

        Das äquivalente Objekt würde so aussehen:

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

  - : Ein Objekt, das den Puffer definiert, in den geschrieben werden soll, sowie das Layout der Daten, die in den Puffer geschrieben werden. Zusammen mit `copySize` definiert es den Bereich des Zielpuffers. `destination` kann folgende Eigenschaften haben:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in den geschrieben werden soll.
    - `offset` {{optional_inline}}
      - : Der Versatz, in Bytes, vom Anfang von `data` bis zur Startposition des zu schreibenden kopierten Daten. Wird `offset` weggelassen, wird der Standardwert 0 angenommen.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die den Abstand, in Bytes, zwischen dem Beginn jeder Blockreihe (d.h. einer Reihe vollständiger Texelblöcke) und der nachfolgenden Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d.h. die Kopierhöhe oder -tiefe ist mehr als ein Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro einzelnes Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` gibt den Abstand, in Bytes, zwischen dem Beginn jedes vollständigen Bildes an. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtanzahl der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen-/Array-Schichtanzahlen optional sind und auf 1 standardmäßig gesetzt werden, wenn sie weggelassen werden.

    Folgendes ist ein Beispiel-`copySize`-Array:

    ```js
    [16, 16, 2];
    ```

    Das äquivalente Objekt würde so aussehen:

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

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für `source`:

- `mipLevel` ist kleiner als [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Depth-or-Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) größer als 1 ist, muss die Unterressourcengröße gleich `copySize` sein.
- Die Nutzung von `source`'s [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält das `GPUTextureUsage.COPY_SRC`-Flag.
- Der `source`'s [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `source.aspect` bezieht sich auf einen einzigen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist eine gültige Bildkopierquelle gemäß [Depth-or-Stencil-Formaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Der `source` ist kompatibel mit dem `copySize`.

Für `destination`:

- `destination.bytesPerRow` ist ein Vielfaches von 256.
- Die Nutzung von `destination.buffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.COPY_DST`-Flag.

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
