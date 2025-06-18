---
title: "GPUCommandEncoder: copyTextureToTexture()-Methode"
short-title: copyTextureToTexture()
slug: Web/API/GPUCommandEncoder/copyTextureToTexture
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die **`copyTextureToTexture()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einer anderen kopiert.

## Syntax

```js-nolint
copyTextureToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt (siehe [Struktur des Kopier-Texturobjekts](#struktur_des_kopier-texturobjekts)), das die Quelle der Textur definiert, aus der die Daten kopiert werden. Zusammen mit `copySize` definiert dies den Bereich der Quelltextur-Unterressource.
- `destination`
  - : Ein Objekt (siehe [Struktur des Kopier-Texturobjekts](#struktur_des_kopier-texturobjekts)), das die Zieltextur definiert, in die die Daten geschrieben werden sollen. Zusammen mit `copySize` definiert dies den Bereich der Zieltextur-Unterressource.
- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Ebenenanzahl der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Höhe und die Tiefe/Array-Ebenenanzahl optional sind und standardmäßig 1 betragen, wenn sie weggelassen werden.

    Zum Beispiel können Sie ein Array `[16, 16, 2]` oder das entsprechende Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

### Struktur des Kopier-Texturobjekts

Ein Kopier-Texturobjekt hat die folgende Struktur:

- `aspect` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur kopiert werden sollen. Mögliche Werte sind:

    - `"all"`
      - : Alle verfügbaren Aspekte des Texturformats werden kopiert, was je nach Format alle oder einen der Farb-, Tiefen- und Stencil-Aspekte bedeuten kann.
    - `"depth-only"`
      - : Nur der Tiefen-Aspekt eines [Tiefen-oder-Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird kopiert.
    - `"stencil-only"`
      - : Nur der Stencil-Aspekt eines Tiefen-oder-Stencil-Formats wird kopiert.

    Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

- `mipLevel` {{optional_inline}}
  - : Eine Zahl, die die Mip-Map-Ebene der Textur angibt, von der kopiert werden soll. Wenn weggelassen, ist der Standardwert für `mipLevel` 0.
- `origin` {{optional_inline}}

  - : Ein Objekt oder Array, das den Ursprung der Kopie/Ziel angibt – die minimale Ecke des Texturbereichs, aus dem kopiert werden soll. Zusammen mit `size` definiert dies den vollständigen Umfang des Bereiches, aus dem kopiert werden soll. Die `x`, `y` und `z`-Werte sind standardmäßig 0, falls `origin` ganz oder teilweise weggelassen wird.

    Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

- `texture`
  - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur repräsentiert, von der kopiert werden soll.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für die `source`:

- Die `source`'s [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält das `GPUTextureUsage.COPY_SRC`-Flag.

Für die `destination`:

- Die `source`'s [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält das `GPUTextureUsage.COPY_DST`-Flag.

Für `source` und `destination`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texel-Blockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texel-Blockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die Quell- und Zieltextur[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format)s sind kopierkompatibel.
- Die Quell- und Zieltextur[`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount)s sind gleich.
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) größer als 1 ist, ist die Unterressourcengröße gleich `size`.
- Das `texture`'s [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist eine gültige Bildkopierquelle/Ziel gemäß [Tiefen-oder-Stencil-Formate](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Das `texture` ist kompatibel mit der `copySize`.

## Beispiele

```js
commandEncoder.copyTextureToTexture(
  {
    texture: sourceTexture,
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
