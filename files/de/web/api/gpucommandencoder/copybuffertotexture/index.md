---
title: "GPUCommandEncoder: Methode copyBufferToTexture()"
short-title: copyBufferToTexture()
slug: Web/API/GPUCommandEncoder/copyBufferToTexture
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die **`copyBufferToTexture()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einem [`GPUTexture`](/de/docs/Web/API/GPUTexture) kopiert.

## Syntax

```js-nolint
copyBufferToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt, das den Buffer definiert, von dem kopiert werden soll, sowie das Layout der Daten im Buffer, die in die Textur kopiert werden sollen. Zusammen mit `copySize` definiert es den Bereich des Quellbuffers. `source` kann die folgenden Eigenschaften haben:
    - `buffer`
      - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), von dem kopiert werden soll.
    - `offset` {{optional_inline}}
      - : Der Versatz in Bytes vom Anfang von `data` bis zum Beginn der zu kopierenden Bilddaten. Wenn weggelassen, ist der Standardwert von `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die den Abstand in Bytes zwischen dem Anfang jeder Blockreihe (d.h. einer Reihe vollständiger Texelblöcke) und der nachfolgenden Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d.h. die Kopierhöhe oder -tiefe ist mehr als ein Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro einzelnes Bild in den Daten. `bytesPerRow` &times; `rowsPerImage` ergibt die Länge in Bytes zwischen dem Anfang jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.
- `destination`

  - : Ein Objekt, das die Textur definiert, in die die Daten geschrieben werden sollen. Zusammen mit `copySize` definiert es den Bereich der Zieltextur-Subressource. `destination` kann die folgenden Eigenschaften haben:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur mit Daten beschrieben werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was alle oder beliebige von Farbe, Tiefe und Stencil bedeuten kann, abhängig davon, mit welchem Format Sie es zu tun haben.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen-oder-Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Stencil-Aspekt eines Tiefen-oder-Stencil-Formats wird beschrieben.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, in die die Daten geschrieben werden sollen. Wenn weggelassen, ist der Standardwert von `mipLevel` 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimale Ecke der Texturregion, in die die Daten geschrieben werden sollen. Zusammen mit `size` definiert dies das volle Ausmaß der Region, in die kopiert werden soll. Die `x`-, `y`- und `z`-Werte haben den Standardwert 0, wenn `origin` ganz oder teilweise weggelassen wird.

        Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur repräsentiert, in die die Daten geschrieben werden sollen.

- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtanzahl der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen/Array-Schichtanzahl-Werte optional sind und, wenn weggelassen, den Standardwert 1 haben.

    Zum Beispiel können Sie ein Array `[16, 16, 2]` oder das entsprechende Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für die `source`:

- `source.bytesPerRow` ist ein Vielfaches von 256.
- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `source.buffer` beinhaltet das `GPUBufferUsage.COPY_SRC`-Flag.

Für die `destination`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder die [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 ist, ist die Subressource-Größe gleich `size`.
- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) der `destination` beinhaltet das `GPUTextureUsage.COPY_DST`-Flag.
- Die [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) der `destination` ist 1.
- `destination.aspect` bezieht sich auf einen einzigen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Ziel für Bildkopien gemäß [Tiefen-oder-Stencil-Formaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `destination` ist mit `copySize` kompatibel.

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
