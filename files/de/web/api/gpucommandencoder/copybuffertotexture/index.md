---
title: "GPUCommandEncoder: copyBufferToTexture() Methode"
short-title: copyBufferToTexture()
slug: Web/API/GPUCommandEncoder/copyBufferToTexture
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyBufferToTexture()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) kopiert.

## Syntax

```js-nolint
copyBufferToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt, das den Puffer definiert, aus dem kopiert werden soll, sowie das Layout der Daten im Puffer, die in die Textur kopiert werden sollen. Zusammen mit `copySize` definiert es den Bereich des Quellpuffers. `source` kann die folgenden Eigenschaften haben:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), aus dem kopiert werden soll.
    - `offset` {{optional_inline}}
      - : Der Offset in Bytes vom Anfang von `data` bis zum Beginn der zu kopierenden Bilddaten. Wenn nicht angegeben, ist `offset` standardmäßig 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Größe in Bytes zwischen dem Beginn jeder Blockzeile (d.h. einer Zeile vollständiger Texelblöcke) und der nachfolgenden Blockzeile angibt. Dies ist erforderlich, wenn es mehrere Blockzeilen gibt (d.h. die Kopierhöhe oder -tiefe ist mehr als ein Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockzeilen pro Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` gibt Ihnen die Größe in Bytes zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.
- `destination`

  - : Ein Objekt, das die Textur definiert, in die die Daten geschrieben werden sollen. Zusammen mit `copySize` definiert es den Bereich der Zieltextur-Unterressource. `destination` kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, auf welche Aspekte der Textur die Daten geschrieben werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Format alle oder einige der Aspekte Farbe, Tiefe und Stencil umfassen kann.
        - `"depth-only"`
          - : Es wird nur der Tiefe-Aspekt eines [Tiefen- oder Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) beschrieben.
        - `"stencil-only"`
          - : Es wird nur der Stencil-Aspekt eines Tiefen- oder Stencil-Formats beschrieben.

        Wenn nicht angegeben, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur angibt, in die die Daten geschrieben werden sollen. Wenn nicht angegeben, ist `mipLevel` standardmäßig 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimale Ecke des Texturbereichs, in den die Daten geschrieben werden sollen. Zusammen mit `size` definiert dies den vollständigen Umfang des Bereichs, der kopiert werden soll. Die `x`-, `y`- und `z`-Werte sind standardmäßig 0, wenn Teile oder alle von `origin` nicht angegeben sind.

        Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder das äquivalente Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtanzahl der kopierten Daten spezifiziert. Der Breitenwert muss immer angegeben werden, während die Werte für die Höhe und die Tiefe/Array-Schichtanzahl optional sind und standardmäßig 1 sind, wenn nicht angegeben.

    Zum Beispiel können Sie ein Array `[16, 16, 2]` oder das äquivalente Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für den `source`:

- `source.bytesPerRow` ist ein Vielfaches von 256.
- Der [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `source.buffer` enthält das `GPUBufferUsage.COPY_SRC`-Flag.

Für den `destination`:

- `mipLevel` ist kleiner als der [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder der [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 ist, ist die Unterressourcengröße gleich `size`.
- Der [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) des `destination` enthält das `GPUTextureUsage.COPY_DST`-Flag.
- Der [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) des `destination` ist 1.
- `destination.aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Ziel für das Kopieren von Bildern gemäß [Tiefen- oder Stencil-Formaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Das `destination` ist mit der `copySize` kompatibel.

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
