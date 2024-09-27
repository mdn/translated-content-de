---
title: "GPUCommandEncoder: copyBufferToTexture() Methode"
short-title: copyBufferToTexture()
slug: Web/API/GPUCommandEncoder/copyBufferToTexture
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyBufferToTexture()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) in eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) kopiert.

## Syntax

```js-nolint
copyBufferToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt, das den Puffer definiert, aus dem kopiert werden soll, sowie das Layout der Daten im Puffer, die in die Textur kopiert werden sollen. Zusammen mit `copySize` definiert es die Region des Quellpuffers. `source` kann die folgenden Eigenschaften enthalten:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), aus dem kopiert werden soll.
    - `offset` {{optional_inline}}
      - : Der Offset in Bytes vom Beginn von `data` bis zum Start der zu kopierenden Bilddaten. Wenn nicht angegeben, wird `offset` standardmäßig auf 0 gesetzt.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Schrittweite in Bytes zwischen dem Beginn jeder Blockreihe (d. h. einer Reihe vollständiger Texelblöcke) und der nachfolgenden Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d. h. die Kopierhöhe oder -tiefe mehr als ein Block beträgt).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro einzelnes Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` gibt Ihnen die Schrittweite in Bytes zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.
- `destination`

  - : Ein Objekt, das die Textur definiert, in die die Daten geschrieben werden sollen. Zusammen mit `copySize` definiert es die Region der Zieltexturunterressource. `destination` kann die folgenden Eigenschaften aufweisen:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der festlegt, welche Aspekte der Textur beschrieben werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Art des Formats alle oder einige der folgenden bedeuten kann: Farbe, Tiefe und Schablone.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird geschrieben.
        - `"stencil-only"`
          - : Nur der Schablonenaspekt eines depth-or-stencil format wird geschrieben.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die das Mip-Map-Level der Textur darstellt, in das die Daten geschrieben werden sollen. Wenn nicht angegeben, wird `mipLevel` standardmäßig auf 0 gesetzt.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder ein Array, das den Ursprung der Kopie angibt — die minimalste Ecke des Texturbereichs, um die Daten zu schreiben. Zusammen mit `size` definiert dies den vollen Umfang des Bereichs, in den kopiert werden soll. Die Werte `x`, `y` und `z` nehmen den Standardwert 0 an, wenn `origin` ganz oder teilweise weggelassen wird.

        Nachfolgend ein Beispielarray:

        ```js
        [0, 0, 0];
        ```

        Das entsprechende Objekt sieht so aus:

        ```js
        {
          x: 0,
          y: 0,
          z: 0
        }
        ```

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur repräsentiert, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder ein Array, das die Breite, Höhe und Tiefen-/Arrayebene der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen-/Arrayebenenwerte optional sind und standardmäßig 1 sind, wenn weggelassen.

    Nachfolgend ein Beispiel für ein `copySize`-Array:

    ```js
    [16, 16, 2];
    ```

    Das entsprechende Objekt sieht so aus:

    ```js
    {
      width: 16,
      height: 16,
      depthOrArrayLayers: 2
    }
    ```

### Rückgabewert

Keine ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für die `source`:

- `source.bytesPerRow` ist ein Vielfaches von 256.
- [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `source.buffer` enthält das `GPUBufferUsage.COPY_SRC`-Flag.

Für die `destination`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 beträgt, ist die Unterressourcengröße gleich `size`.
- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) der `destination` enthält das `GPUTextureUsage.COPY_DST`-Flag.
- Die [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) der `destination` ist 1.
- `destination.aspect` bezieht sich auf einen einzigen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Ziel für Bildkopien gemäß [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `destination` ist kompatibel mit der `copySize`.

## Beispiele

```js
commandEncoder.copyBufferToTexture(
  {
    buffer: sourceBuffer,
  },
  {
    texture: destinationTexture,
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
