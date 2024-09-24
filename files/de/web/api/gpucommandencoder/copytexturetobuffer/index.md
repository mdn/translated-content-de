---
title: "GPUCommandEncoder: copyTextureToBuffer() Methode"
short-title: copyTextureToBuffer()
slug: Web/API/GPUCommandEncoder/copyTextureToBuffer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyTextureToBuffer()`** Methode des {{domxref("GPUCommandEncoder")}}-Interfaces kodiert einen Befehl, der Daten von einer {{domxref("GPUTexture")}} zu einem {{domxref("GPUBuffer")}} kopiert.

## Syntax

```js-nolint
copyTextureToBuffer(source, destination, copySize)
```

### Parameter

- `source`

  - : Ein Objekt, das die Textur definiert, von der die Daten kopiert werden sollen. In Verbindung mit `copySize` definiert es den Bereich der Quell-Textursubressource. `source` kann folgende Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der festlegt, von welchen Aspekten der Textur die Daten kopiert werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden kopiert, was alle oder jeden von Farbe, Tiefe und Schablone bedeuten kann, abhängig von der Art des Formats.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird kopiert.
        - `"stencil-only"`
          - : Nur der Schablonen-Aspekt eines depth-or-stencil Formats wird kopiert.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur repräsentiert, von der die Daten kopiert werden sollen. Wenn weggelassen, ist der Standardwert für `mipLevel` 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung des Kopiervorgangs spezifiziert — die minimale Ecke des Texturbereichs, von dem die Daten kopiert werden sollen. Zusammen mit `size` definiert es die gesamte Ausdehnung des zu kopierenden Bereichs. Die `x`, `y` und `z` Werte sind 0, wenn `origin` weggelassen wird.

        Ein Beispiel für ein Array sieht wie folgt aus:

        ```js
        [0, 0, 0];
        ```

        Das entsprechende Objekt sieht wie folgt aus:

        ```js
        {
          x: 0,
          y: 0,
          z: 0
        }
        ```

    - `texture`
      - : Ein {{domxref("GPUTexture")}}-Objekt, das die Textur repräsentiert, von der die Daten kopiert werden sollen.

- `destination`

  - : Ein Objekt, das definiert, in welchen Puffer geschrieben werden soll, plus das Layout der Daten, die in den Puffer geschrieben werden sollen. In Verbindung mit `copySize` definiert es den Bereich des Zielpuffers. `source` kann folgende Eigenschaften besitzen:
    - `buffer`
      - : Der {{domxref("GPUBuffer")}} in den geschrieben werden soll.
    - `offset` {{optional_inline}}
      - : Der Versatz, in Bytes, vom Beginn von `data` zur Startposition, um die kopierten Daten zu schreiben. Wenn weggelassen, ist der Standardwert für `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Schrittenweite, in Bytes, zwischen dem Beginn jeder Blockreihe (d.h. einer Reihe vollständiger Texelblöcke) und der nachfolgenden Blockreihe darstellt. Dies ist erforderlich, wenn mehrere Blockreihen vorhanden sind (d.h. die Kopierhöhe oder Tiefe beträgt mehr als einen Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl von Blockreihen pro einzelnes Bild in den Daten. `bytesPerRow` &times; `rowsPerImage` ergibt die Weite, in Bytes, zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtanzahl der kopierten Daten spezifiziert. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen/Array-Schichtanzahl optional sind und auf 1 defaulten, wenn sie weggelassen werden.

    Ein Beispiel für ein `copySize` Array sieht wie folgt aus:

    ```js
    [16, 16, 2];
    ```

    Das entsprechende Objekt sieht wie folgt aus:

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

Die folgenden Kriterien müssen beim Aufruf von **`copyTextureToBuffer()`** erfüllt sein, ansonsten wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPUCommandEncoder")}} wird ungültig.

Für den `source`:

- `mipLevel` ist kleiner als der {{domxref("GPUTexture.mipLevelCount")}}.
- `origin.x` ist ein Vielfaches der Texelblockbreite des {{domxref("GPUTexture.format")}}.
- `origin.y` ist ein Vielfaches der Texelblockhöhe des {{domxref("GPUTexture.format")}}.
- Wenn das {{domxref("GPUTexture.format")}} ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder {{domxref("GPUTexture.sampleCount")}} mehr als 1 ist, ist die Subressourcengröße gleich `size`.
- Die `source`'s {{domxref("GPUTexture.usage")}} enthält das `GPUTextureUsage.COPY_SRC`-Flag.
- Die `source`'s {{domxref("GPUTexture.sampleCount")}} ist 1.
- `source.aspect` bezieht sich auf einen einzelnen Aspekt des {{domxref("GPUTexture.format")}}.
- Dieser Aspekt ist eine gültige Bildkopienquelle gemäß [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Der `source` ist kompatibel mit dem `copySize`.

Für den `destination`:

- `destination.bytesPerRow` ist ein Vielfaches von 256.
- Die `destination.buffer`'s {{domxref("GPUBuffer.usage")}} enthält das `GPUBufferUsage.COPY_DST`-Flag.

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
