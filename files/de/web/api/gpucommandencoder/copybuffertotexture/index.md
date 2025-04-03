---
title: "GPUCommandEncoder: Methode copyBufferToTexture()"
short-title: copyBufferToTexture()
slug: Web/API/GPUCommandEncoder/copyBufferToTexture
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`copyBufferToTexture()`** des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Interfaces kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) kopiert.

## Syntax

```js-nolint
copyBufferToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt, das den Puffer definiert, von dem kopiert wird, sowie das Layout der Daten im Puffer, die in die Textur kopiert werden sollen. Zusammen mit `copySize` definiert es den Bereich des Quellpuffers. `source` kann die folgenden Eigenschaften enthalten:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), von dem kopiert wird.
    - `offset` {{optional_inline}}
      - : Der Offset, in Bytes, vom Beginn der `data` bis zum Beginn der zu kopierenden Bilddaten. Wenn weggelassen, ist der Standardwert von `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Stride, in Bytes, zwischen dem Beginn jeder Blockreihe (d.h. einer Reihe vollständiger Texel-Blöcke) und der nächsten Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d.h. die Kopierhöhe oder -tiefe beträgt mehr als einen Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro einzelnes Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` gibt Ihnen die Stride, in Bytes, zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.
- `destination`

  - : Ein Objekt, das definiert, in welche Textur die Daten geschrieben werden sollen. Zusammen mit `copySize` definiert es den Bereich der Zieltextur-Subresource. `destination` kann die folgenden Eigenschaften enthalten:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, auf welche Aspekte der Textur die Daten geschrieben werden. Mögliche Werte sind:

        - `"all"`
          - : Auf alle verfügbaren Aspekte des Texturformats wird geschrieben, was je nach Format alle oder nur einige der Farb-, Tiefen- und Stencil-Daten bedeuten kann.
        - `"depth-only"`
          - : Es wird nur der Tiefenaspekt eines [Tiefen- oder Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) beschrieben.
        - `"stencil-only"`
          - : Es wird nur der Stencil-Aspekt eines Tiefen- oder Stencil-Formats beschrieben.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die das Mip-Map-Level der Textur darstellt, auf das die Daten geschrieben werden sollen. Wenn weggelassen, ist der Standardwert für `mipLevel` 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimale Ecke des Texturbereichs, in den die Daten geschrieben werden sollen. Zusammen mit `size` definiert dies das vollständige Ausmaß des zu kopierenden Bereichs. Die Werte `x`, `y` und `z` haben den Standardwert 0, wenn `origin` ganz oder teilweise weggelassen wird.

        Folgendes ist ein Beispiel-Array:

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
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Anzahl der Array-Layer der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen-/Array-Layer-Werte optional sind und den Standardwert 1 haben, wenn sie weggelassen werden.

    Folgendes ist ein Beispiel für ein `copySize`-Array:

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

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für den `source`:

- `source.bytesPerRow` ist ein Vielfaches von 256.
- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `source.buffer` enthält das `GPUBufferUsage.COPY_SRC`-Flug.

Für den `destination`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texel-Blockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texel-Blockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 ist, ist die Subresource-Größe gleich `size`.
- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) des `destination` enthält das `GPUTextureUsage.COPY_DST`-Flag.
- Die [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) des `destination` ist 1.
- `destination.aspect` bezieht sich auf einen einzigen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Ziel für Bildkopien gemäß [Tiefen- oder Stencil-Formaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Der `destination` ist mit der `copySize` kompatibel.

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
