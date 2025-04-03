---
title: "GPUCommandEncoder: copyTextureToBuffer() Methode"
short-title: copyTextureToBuffer()
slug: Web/API/GPUCommandEncoder/copyTextureToBuffer
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyTextureToBuffer()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Schnittstelle kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.

## Syntax

```js-nolint
copyTextureToBuffer(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Textur definiert, von der die Daten kopiert werden. In Kombination mit `copySize` wird der zu kopierende Bereich der Quelltextur-Subressource festgelegt. `source` kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur kopiert werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden kopiert, was je nach Format alle oder beliebige von Farbe, Tiefe und Stencil bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird kopiert.
        - `"stencil-only"`
          - : Nur der Stencil-Aspekt eines depth-or-stencil format wird kopiert.

        Wird dieser Wert ausgelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, von der die Daten kopiert werden. Wenn nicht angegeben, ist der Standardwert für `mipLevel` 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt - die minimale Ecke des Texturbereichs, von dem die Daten kopiert werden sollen. Zusammen mit `size` wird der vollständige Umfang des zu kopierenden Bereichs definiert. Die `x`-, `y`- und `z`-Werte standardmäßig auf 0 gesetzt, wenn `origin` ganz oder teilweise weggelassen wird.

        Beispielsweise kann ein Array `[0, 0, 0]` oder das gleichwertige Objekt `{ x: 0, y: 0, z: 0 }` übergeben werden.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, von der die Daten kopiert werden sollen.

- `destination`

  - : Ein Objekt, das den zu beschreibenden Puffer und das Layout der in den Puffer zu schreibenden Daten definiert. In Kombination mit `copySize` wird der Bereich des Zielpuffers definiert. `source` kann die folgenden Eigenschaften haben:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in den geschrieben werden soll.
    - `offset` {{optional_inline}}
      - : Der Offset in Bytes vom Anfang der `data` zur Startposition, an der die kopierten Daten geschrieben werden sollen. Wenn ausgelassen, beträgt der Standardwert von `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die den Abstand in Bytes zwischen dem Anfang jeder Blockreihe (d.h. einer Reihe kompletter Texelblöcke) und der nachfolgenden Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d.h. die Kopierhöhe oder -tiefe mehr als ein Block ist).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` ergibt den Abstand in Bytes zwischen dem Anfang jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefen/Array-Layer-Anzahl der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen/Array-Layer-Anzahlen optional sind und standardmäßig 1 betragen, wenn sie weggelassen werden.

    Beispielsweise kann ein Array `[16, 16, 2]` oder das gleichwertige Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben werden.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für die `source`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblock-Breite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblock-Höhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) größer als 1 ist, ist die Subressourcengröße gleich `size`.
- Die `source`- [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält das `GPUTextureUsage.COPY_SRC`-Flag.
- Die `source`- [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `source.aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist eine gültige Bildkopiequelle gemäß [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `source` ist mit der `copySize` kompatibel.

Für die `destination`:

- `destination.bytesPerRow` ist ein Vielfaches von 256.
- Der `destination.buffer`-[`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.COPY_DST`-Flag.

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
