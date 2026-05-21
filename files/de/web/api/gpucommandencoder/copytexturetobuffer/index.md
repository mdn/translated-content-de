---
title: "GPUCommandEncoder: Methode copyTextureToBuffer()"
short-title: copyTextureToBuffer()
slug: Web/API/GPUCommandEncoder/copyTextureToBuffer
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die Methode **`copyTextureToBuffer()`** des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Interfaces kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.

## Syntax

```js-nolint
copyTextureToBuffer(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt, das die Textur definiert, von der die Daten kopiert werden. Zusammen mit `copySize` definiert es den Bereich der Quellentextur-Teilressource. `source` kann die folgenden Eigenschaften haben:
    - `aspect` {{optional_inline}}
      - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur kopiert werden sollen. Mögliche Werte sind:
        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden kopiert, was je nach Format alle oder beliebige von Farbe, Tiefe und Stencil bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Depth-or-Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird kopiert.
        - `"stencil-only"`
          - : Nur der Stencil-Aspekt eines Depth-or-Stencil-Formats wird kopiert.

        Wenn weggelassen, hat `aspect` den Wert `"all"`.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Stufe der Textur darstellt, von der die Daten kopiert werden. Wenn weggelassen, ist der Standardwert von `mipLevel` 0.
    - `origin` {{optional_inline}}
      - : Ein Objekt oder Array, das den Ursprung des Kopiervorgangs spezifiziert — die minimale Ecke des Texturbereichs, von dem die Daten kopiert werden. Zusammen mit `size` definiert dies den gesamten Umfang des zu kopierenden Bereichs. Die Werte `x`, `y` und `z` sind 0, wenn jegliche Komponenten von `origin` weggelassen werden.

        Sie können beispielsweise ein Array `[0, 0, 0]` oder sein äquivalentes Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, von der die Daten kopiert werden.

- `destination`
  - : Ein Objekt, das den Buffer definiert, in den geschrieben wird, sowie das Layout der zu schreibenden Daten. Zusammen mit `copySize` definiert es den Bereich des Ziel-Buffers. `source` kann die folgenden Eigenschaften haben:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in den geschrieben wird.
    - `offset` {{optional_inline}}
      - : Der Versatz in Bytes vom Anfang der `data` zur Startposition, an die die kopierten Daten geschrieben werden. Wenn weggelassen, beträgt der Standardwert für `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Schrittweite in Bytes zwischen dem Beginn jeder Blockreihe (d.h. einer Reihe kompletter Texelblöcke) und der nachfolgenden Blockreihe darstellt. Dies ist erforderlich, wenn mehrere Blockreihen vorhanden sind (d.h. die Kopierhöhe oder -tiefe ist mehr als ein Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro einzelnes Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` gibt den Abstand in Bytes zwischen dem Beginn jedes vollständigen Bildes an. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.

- `copySize`
  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Anzahl von Array-Schichten der kopierten Daten spezifiziert. Der Wert der Breite muss immer angegeben werden, während die Werte für Höhe und Tiefe/Anzahl von Array-Schichten optional sind und auf 1 standardmäßig gesetzt werden, wenn sie weggelassen werden.

    Sie können beispielsweise ein Array `[16, 16, 2]` oder dessen äquivalentes Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für `source`:

- `mipLevel` ist kleiner als der [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblock-Breite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblock-Höhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Depth-or-Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 ist, muss die Größe der Teilressource gleich `size` sein.
- Die `source`-Eigenschaft [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält das `GPUTextureUsage.COPY_SRC`-Flag.
- Die `source`-Eigenschaft [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `source.aspect` bezieht sich auf einen einzigen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist eine gültige Bildkopierquelle gemäß [Depth-or-Stencil-Formaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `source` ist mit `copySize` kompatibel.

Für `destination`:

- `destination.bytesPerRow` ist ein Vielfaches von 256.
- Der `destination.buffer`-Eigenschaft [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.COPY_DST`-Flag.

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
