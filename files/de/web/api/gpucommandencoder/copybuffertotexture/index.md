---
title: "GPUCommandEncoder: copyBufferToTexture() Methode"
short-title: copyBufferToTexture()
slug: Web/API/GPUCommandEncoder/copyBufferToTexture
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die **`copyBufferToTexture()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Schnittstelle kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) kopiert.

## Syntax

```js-nolint
copyBufferToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt, das den Puffer definiert, von dem kopiert werden soll, sowie das Layout der Daten im Puffer, die in die Textur kopiert werden sollen. In Kombination mit `copySize` definiert es den Bereich des Quellpuffers. `source` kann folgende Eigenschaften haben:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), von dem kopiert werden soll.
    - `offset` {{optional_inline}}
      - : Der Offset, in Bytes, vom Anfang von `data` bis zum Start der zu kopierenden Bilddaten. Wenn nicht angegeben, ist der Standardwert von `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Schrittweite in Bytes zwischen dem Beginn jeder Blockzeile (d.h. einer Zeile vollständiger Texelblöcke) und der nächsten Blockzeile angibt. Dies ist erforderlich, wenn mehrere Blockzeilen vorhanden sind (d.h. wenn die Kopierhöhe oder -tiefe mehr als ein Block ist).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockzeilen pro einzelnen Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` ergibt die Schrittweite in Bytes zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.
- `destination`
  - : Ein Objekt, das die Textur definiert, in die die Daten geschrieben werden sollen. In Kombination mit `copySize` definiert es den Bereich der Zieltextur-Subressource. `destination` kann folgende Eigenschaften haben:
    - `aspect` {{optional_inline}}
      - : Ein enumerierter Wert, der definiert, in welche Aspekte der Textur die Daten geschrieben werden sollen. Mögliche Werte sind:
        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Format alle oder einige der Aspekte Farbe, Tiefe und Stencil umfassen kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Stencil-Aspekt eines depth-or-stencil Formats wird beschrieben.

        Wenn nicht angegeben, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die das Mip-Map-Level der Textur darstellt, in das die Daten geschrieben werden sollen. Wenn nicht angegeben, beträgt der Standardwert von `mipLevel` 0.
    - `origin` {{optional_inline}}
      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt – die minimale Ecke des Texturbereichs, in den die Daten geschrieben werden sollen. Zusammen mit `size` wird der volle Umfang des zu kopierenden Bereichs definiert. Die Werte `x`, `y` und `z` sind 0, wenn `origin` ganz oder teilweise weggelassen wird.

        Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder dessen äquivalentes Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `copySize`
  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Layer-Anzahl der kopierten Daten spezifiziert. Der Wert für die Breite muss immer angegeben werden, während die Werte für Höhe und Tiefe/Array-Layer-Anzahl optional sind und, wenn weggelassen, standardmäßig 1 ist.

    Zum Beispiel können Sie ein Array `[16, 16, 2]`, oder dessen äquivalentes Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für den `source`:

- `source.bytesPerRow` ist ein Vielfaches von 256.
- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `source.buffer` enthält das `GPUBufferUsage.COPY_SRC`-Flag.

Für den `destination`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder die [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 beträgt, ist die Subressourcengröße gleich `size`.
- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) des `destination` enthält das `GPUTextureUsage.COPY_DST`-Flag.
- Die [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) des `destination` ist 1.
- `destination.aspect` bezieht sich auf einen einzigen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Ziel für das Kopieren von Bildern gemäß [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Das `destination` ist mit dem `copySize` kompatibel.

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

- Das [WebGPU API](/de/docs/Web/API/WebGPU_API)
