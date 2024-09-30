---
title: "GPUCommandEncoder: copyBufferToTexture() Methode"
short-title: copyBufferToTexture()
slug: Web/API/GPUCommandEncoder/copyBufferToTexture
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`copyBufferToTexture()`** des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Interfaces kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) kopiert.

## Syntax

```js-nolint
copyBufferToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt, das den Puffer definiert, von dem kopiert werden soll, sowie das Layout der Daten im Puffer, die in die Textur kopiert werden sollen. Zusammen mit `copySize` definiert es den Bereich des Quellpuffers. `source` kann die folgenden Eigenschaften haben:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), von dem kopiert werden soll.
    - `offset` {{optional_inline}}
      - : Der Versatz in Bytes vom Anfang der `data` bis zum Start der zu kopierenden Bilddaten. Falls nicht angegeben, beträgt der Standardwert von `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die den Abstand in Bytes zwischen dem Anfang jeder Blockreihe (d.h. einer Reihe vollständiger Texelblöcke) und der darauffolgenden Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d.h. die Kopierhöhe oder -tiefe ist mehr als ein Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` ergibt den Abstand in Bytes zwischen dem Anfang jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.
- `destination`

  - : Ein Objekt, das die Textur definiert, wohin die Daten geschrieben werden sollen. Zusammen mit `copySize` definiert es den Bereich der Zieltextursubressource. `destination` kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur mit den Daten beschrieben werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Format alle oder einige der folgenden umfassen kann: Farbe, Tiefe und Schablone.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen- oder Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonaspekt eines Tiefen- oder Schablonenformats wird beschrieben.

        Falls nicht angegeben, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, zu der die Daten geschrieben werden sollen. Falls nicht angegeben, beträgt der Standardwert von `mipLevel` 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimale Ecke der Texturregion, zu der die Daten geschrieben werden sollen. Zusammen mit `size` definiert dies das gesamte Ausmaß des Bereichs, der beschrieben werden soll. Wenn einer oder alle Werte von `origin` ausgelassen werden, nehmen `x`, `y` und `z` den Standardwert von 0 an.

        Im Folgenden ist ein Beispiel-Array dargestellt:

        ```js
        [0, 0, 0];
        ```

        Das entsprechende Objekt sieht folgendermaßen aus:

        ```js
        {
          x: 0,
          y: 0,
          z: 0
        }
        ```

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, zu der die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefen-/Array-Ebenenzahl der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen-/Array-Ebenenzählwerte optional sind und, wenn ausgelassen, standardmäßig 1 betragen.

    Im Folgenden ist ein Beispiel-`copySize`-Array dargestellt:

    ```js
    [16, 16, 2];
    ```

    Das entsprechende Objekt sieht folgendermaßen aus:

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

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToTexture()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für die `source`:

- `source.bytesPerRow` ist ein Vielfaches von 256.
- Der `source.buffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.COPY_SRC`-Flag.

Für die `destination`:

- `mipLevel` ist kleiner als der [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Falls das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen- oder Schablonenformat](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) größer als 1 ist, entspricht die Subressourcengröße der `size`.
- Der `destination`'s [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält das `GPUTextureUsage.COPY_DST`-Flag.
- Der `destination`'s [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `destination.aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Bildkopierziel gemäß [Tiefen- oder Schablonenformaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `destination` ist mit der `copySize` kompatibel.

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
