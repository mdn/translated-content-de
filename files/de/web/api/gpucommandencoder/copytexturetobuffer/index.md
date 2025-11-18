---
title: "GPUCommandEncoder: copyTextureToBuffer() Methode"
short-title: copyTextureToBuffer()
slug: Web/API/GPUCommandEncoder/copyTextureToBuffer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die **`copyTextureToBuffer()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Schnittstelle kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.

## Syntax

```js-nolint
copyTextureToBuffer(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt, das die Textur definiert, aus der die Daten kopiert werden. In Kombination mit `copySize` definiert es den Bereich der Quelltextur-Subressource. `source` kann die folgenden Eigenschaften haben:
    - `aspect` {{optional_inline}}
      - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur kopiert werden sollen. Mögliche Werte sind:
        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden kopiert, was alle oder beliebige von Farbe, Tiefe und Stencil bedeuten kann, abhängig vom verwendeten Format.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird kopiert.
        - `"stencil-only"`
          - : Nur der Stencil-Aspekt eines depth-or-stencil format wird kopiert.

        Wenn ausgelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, aus der die Daten kopiert werden sollen. Wenn ausgelassen, wird `mipLevel` auf 0 festgelegt.
    - `origin` {{optional_inline}}
      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimalen Ecken des Texturbereichs, aus dem die Daten kopiert werden sollen. Zusammen mit `size` definiert dies das gesamte Ausmaß des zu kopierenden Bereichs. Die Werte `x`, `y` und `z` werden auf 0 festgelegt, wenn ein Teil von `origin` weggelassen wird.

        Beispielsweise können Sie ein Array `[0, 0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) Objekt, das die Textur darstellt, aus der die Daten kopiert werden.

- `destination`
  - : Ein Objekt, das den Puffer definiert, in den geschrieben werden soll, sowie das Layout der Daten, die in den Puffer geschrieben werden sollen. In Kombination mit `copySize` definiert es den Bereich des Zielpuffers. `source` kann die folgenden Eigenschaften haben:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in den geschrieben werden soll.
    - `offset` {{optional_inline}}
      - : Der Versatz, in Bytes, vom Beginn von `data` zur Startposition, an die die kopierten Daten geschrieben werden sollen. Wenn ausgelassen, wird `offset` auf 0 festgelegt.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die den Abstand, in Bytes, zwischen dem Beginn jeder Blockreihe (d.h. einer Reihe vollständiger Texelblöcke) und der folgenden Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d.h. die Kopierhöhe oder -tiefe ist mehr als ein Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro einzelnes Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` gibt Ihnen den Abstand, in Bytes, zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.

- `copySize`
  - : Ein Objekt oder Array, das die Breite, Höhe und die Tiefe/Array-Ebenenzahl der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen/Array-Ebenenzahl-Werte optional sind und, wenn weggelassen, auf 1 festgelegt werden.

    Beispielsweise können Sie ein Array `[16, 16, 2]` oder das entsprechende Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für die `source`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 ist, ist die Subressourcengröße gleich `size`.
- Der `source`-`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält das `GPUTextureUsage.COPY_SRC` Flag.
- Der `source`-`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `source.aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist eine gültige Bildkopiequelle gemäß [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Der `source` ist kompatibel mit der `copySize`.

Für die `destination`:

- `destination.bytesPerRow` ist ein Vielfaches von 256.
- Der `destination.buffer`-`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.COPY_DST` Flag.

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
