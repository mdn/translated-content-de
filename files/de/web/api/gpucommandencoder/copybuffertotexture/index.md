---
title: "GPUCommandEncoder: Methode copyBufferToTexture()"
short-title: copyBufferToTexture()
slug: Web/API/GPUCommandEncoder/copyBufferToTexture
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`copyBufferToTexture()`** der {{domxref("GPUCommandEncoder")}}-Schnittstelle codiert einen Befehl, der Daten von einem {{domxref("GPUBuffer")}} zu einem {{domxref("GPUTexture")}} kopiert.

## Syntax

```js-nolint
copyBufferToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt, das den zu kopierenden Puffer definiert, sowie das Layout der Daten im Puffer, die in die Textur kopiert werden sollen. Zusammen mit `copySize` definiert es den Bereich des Quellpuffers. `source` kann die folgenden Eigenschaften haben:
    - `buffer`
      - : Der {{domxref("GPUBuffer")}}, von dem kopiert werden soll.
    - `offset` {{optional_inline}}
      - : Der Offset in Bytes vom Beginn von `data` bis zum Anfang der zu kopierenden Bilddaten. Wird er weggelassen, ist der Standardwert für `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Schrittweite in Bytes zwischen dem Beginn jeder Blockreihe (d. h. einer Reihe vollständiger Texel-Blöcke) und der darauffolgenden Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d. h. die Kopierhöhe oder -tiefe mehr als einen Block beträgt).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro Bild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` gibt die Schrittweite in Bytes zwischen dem Beginn jedes vollständigen Bildes an. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.
- `destination`
  - : Ein Objekt, das die Textur definiert, in die die Daten geschrieben werden sollen. Zusammen mit `copySize` definiert es den Bereich der Zieltextur-Subressource. `destination` kann die folgenden Eigenschaften haben:
    - `aspect` {{optional_inline}}
      - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur die Daten beschrieben werden sollen. Mögliche Werte sind:
        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was alle oder beliebige der folgenden Aspekte bedeuten kann: Farbe, Tiefe und Schablone, abhängig von der Art des Formats.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonen-Aspekt eines depth-or-stencil-Formats wird beschrieben.
        Wird ein Wert weggelassen, nimmt `aspect` den Wert `"all"` an.
    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, in die die Daten geschrieben werden sollen. Wird sie weggelassen, ist der Standardwert für `mipLevel` 0.
    - `origin` {{optional_inline}}
      - : Ein Objekt oder Array, das den Ursprung der Kopie — die minimale Ecke des Texturbereichs, in den die Daten geschrieben werden sollen — angibt. Zusammen mit `size` definiert es den vollständigen Umfang des zu kopierenden Bereichs. Die Werte `x`, `y` und `z` haben Standardwerte von 0, wenn alle oder Teile von `origin` weggelassen werden.
        Ein Beispielarray sieht wie folgt aus:

        ```js
        [0, 0, 0];
        ```

        Das Objektequivalent würde so aussehen:

        ```js
        {
          x: 0,
          y: 0,
          z: 0
        }
        ```

    - `texture`
      - : Ein {{domxref("GPUTexture")}}-Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `copySize`
  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Layer-Anzahl der kopierten Daten angibt. Der Wert für die Breite muss immer angegeben werden, während die Werte für die Höhe und die Tiefe/Array-Layer-Anzahl optional sind und standardmäßig 1 sind, wenn sie weggelassen werden.

    Ein Beispiel für ein `copySize`-Array ist wie folgt:

    ```js
    [16, 16, 2];
    ```

    Das Objektequivalent würde so aussehen:

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

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToTexture()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPUCommandEncoder")}} wird ungültig.

Für den `source`:

- `source.bytesPerRow` ist ein Vielfaches von 256.
- Der {{domxref("GPUBuffer.usage")}} des `source.buffer` schließt das `GPUBufferUsage.COPY_SRC`-Flag ein.

Für die `destination`:

- `mipLevel` ist kleiner als die {{domxref("GPUTexture.mipLevelCount")}}.
- `origin.x` ist ein Vielfaches der Texelblockbreite des {{domxref("GPUTexture.format")}}.
- `origin.y` ist ein Vielfaches der Texelblockhöhe des {{domxref("GPUTexture.format")}}.
- Wenn das {{domxref("GPUTexture.format")}} ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder der {{domxref("GPUTexture.sampleCount")}} mehr als 1 beträgt, ist die Subressourcengröße gleich `size`.
- Der {{domxref("GPUTexture.usage")}} des `destination` schließt das `GPUTextureUsage.COPY_DST`-Flag ein.
- Der {{domxref("GPUTexture.sampleCount")}} des `destination` beträgt 1.
- `destination.aspect` bezieht sich auf einen einzelnen Aspekt des {{domxref("GPUTexture.format")}}.
- Dieser Aspekt ist ein gültiges Ziel für das Kopieren von Bildern gemäß [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- `destination` ist mit `copySize` kompatibel.

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
