---
title: "GPUCommandEncoder: copyTextureToBuffer() Methode"
short-title: copyTextureToBuffer()
slug: Web/API/GPUCommandEncoder/copyTextureToBuffer
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die **`copyTextureToBuffer()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.

## Syntax

```js-nolint
copyTextureToBuffer(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Textur definiert, von der die Daten kopiert werden sollen. In Kombination mit `copySize` definiert es den Bereich der Quelltextur-Unterressource. `source` kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der festlegt, welche Aspekte der Textur kopiert werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden kopiert, was je nach Format alle oder einige der Aspekte Farbe, Tiefe und Schablone bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen-oder-Schablonen-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird kopiert.
        - `"stencil-only"`
          - : Nur der Schablonaspekt eines Tiefen-oder-Schablonen-Formats wird kopiert.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, von der die Daten kopiert werden sollen. Wenn weggelassen, ist der Standardwert für `mipLevel` 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie spezifiziert – die minimale Ecke des Texturbereichs, von dem die Daten kopiert werden sollen. Zusammen mit `size` wird das gesamte Ausmaß des zu kopierenden Bereichs definiert. Die Werte `x`, `y` und `z` sind standardmäßig 0, wenn Teile oder das gesamte `origin` weggelassen wird.

        Beispielsweise kann ein Array `[0, 0, 0]` oder sein gleichwertiges Objekt `{ x: 0, y: 0, z: 0 }` übergeben werden.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, von der die Daten kopiert werden sollen.

- `destination`

  - : Ein Objekt, das den Puffer und das Layout der zu schreibenden Daten definiert. In Kombination mit `copySize` definiert es den Bereich des Zielpuffers. `destination` kann die folgenden Eigenschaften haben:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in den geschrieben werden soll.
    - `offset` {{optional_inline}}
      - : Der Versatz in Bytes vom Beginn von `data` zur Startposition, an die die kopierten Daten geschrieben werden. Wenn weggelassen, ist der Standardwert für `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Schrittweite in Bytes zwischen dem Beginn jeder Blockreihe (d.h. einer Reihe vollständiger Texelblöcke) und der nachfolgenden Blockreihe repräsentiert. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d.h. die Kopierhöhe oder -tiefe ist größer als ein Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro einzelnes Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` ergeben die Schrittweite in Bytes zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Lagenanzahl der kopierten Daten spezifiziert. Der Breitenwert muss immer spezifiziert werden, während Höhe und Tiefe/Array-Lagenanzahl optional sind und standardmäßig auf 1 gesetzt werden, wenn sie weggelassen werden.

    Beispielsweise kann ein Array `[16, 16, 2]` oder sein gleichwertiges Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben werden.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für die `source`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen-oder-Schablonen-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 ist, muss die Unterressourcengröße gleich `size` sein.
- Die Nutzung des [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) von `source` umfasst das `GPUTextureUsage.COPY_SRC`-Flag.
- Die `source`-[`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `source.aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist eine gültige Bildkopierquelle gemäß [Tiefen-oder-Schablonen-Formaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `source` ist mit der `copySize` kompatibel.

Für die `destination`:

- `destination.bytesPerRow` ist ein Vielfaches von 256.
- Die Nutzung des `destination.buffer`-[`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) umfasst das `GPUBufferUsage.COPY_DST`-Flag.

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
