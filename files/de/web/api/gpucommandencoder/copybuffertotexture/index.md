---
title: "GPUCommandEncoder: copyBufferToTexture() Methode"
short-title: copyBufferToTexture()
slug: Web/API/GPUCommandEncoder/copyBufferToTexture
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die **`copyBufferToTexture()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) kopiert.

## Syntax

```js-nolint
copyBufferToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt, das den Puffer definiert, von dem kopiert werden soll, plus das Layout der Daten im Puffer, die auf die Textur kopiert werden sollen. Zusammen mit `copySize` definiert es den Bereich des Quellpuffers. `source` kann die folgenden Eigenschaften haben:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), von dem kopiert werden soll.
    - `offset` {{optional_inline}}
      - : Der Offset in Bytes vom Anfang von `data` bis zum Beginn der zu kopierenden Bilddaten. Wenn nicht angegeben, ist der Standardwert von `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die den Abstand in Bytes zwischen dem Beginn jeder Blockzeile (d.h. einer Reihe vollständiger Texelblöcke) und der nachfolgenden Blockzeile darstellt. Dies ist erforderlich, wenn es mehrere Blockzeilen gibt (d.h. die Kopierhöhe oder -tiefe beträgt mehr als ein Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockzeilen pro Einzelbild innerhalb der Daten. `bytesPerRow` &times; `rowsPerImage` ergibt den Abstand in Bytes zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.
- `destination`

  - : Ein Objekt, das die Textur definiert, in die die Daten geschrieben werden sollen. Zusammen mit `copySize` definiert es den Bereich der Zieltexturunterressource. `destination` kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur die Daten geschrieben werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschriftet, was je nach Format alle oder einige der folgenden sein können: Farbe, Tiefe und Stencil.
        - `"depth-only"`
          - : Es wird nur der Tiefenaspekt eines [Tiefen- oder Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) beschrieben.
        - `"stencil-only"`
          - : Es wird nur der Stencilaspekt eines Tiefen- oder Stencil-Formats beschrieben.

        Wenn nicht angegeben, hat `aspect` den Wert `"all"`.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur repräsentiert, in die die Daten geschrieben werden sollen. Wenn nicht angegeben, ist der Standardwert von `mipLevel` 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimale Ecke des Texturbereichs, in den die Daten geschrieben werden sollen. Zusammen mit `size` definiert dies das volle Ausmaß des zu kopierenden Bereichs. Die `x`, `y` und `z`-Werte haben den Standardwert 0, wenn `origin` nicht oder nicht vollständig angegeben ist.

        Zum Beispiel kann ein Array wie `[0, 0, 0]` übergeben werden, oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }`.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Ebenenzahl der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen-/Array-Ebenenzahl optional sind und den Standardwert 1 haben, wenn sie nicht angegeben sind.

    Zum Beispiel kann ein Array `[16, 16, 2]` übergeben werden, oder das entsprechende Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für `source`:

- `source.bytesPerRow` ist ein Vielfaches von 256.
- Die `source.buffer`-Eigenschaft [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.COPY_SRC`-Flag.

Für `destination`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite der [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe der [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 ist, ist die Subressourcengröße gleich `size`.
- Die `destination`-Eigenschaft [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält das `GPUTextureUsage.COPY_DST`-Flag.
- Die `destination`-Eigenschaft [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `destination.aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Bildkopie-Ziel gemäß [Tiefen- oder Stencil-Formaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `destination` ist kompatibel mit der `copySize`.

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
