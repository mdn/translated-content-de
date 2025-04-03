---
title: "GPUCommandEncoder: copyTextureToTexture() Methode"
short-title: copyTextureToTexture()
slug: Web/API/GPUCommandEncoder/copyTextureToTexture
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyTextureToTexture()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einer anderen kopiert.

## Syntax

```js-nolint
copyTextureToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt (siehe [Struktur des Kopier-Texturobjekts](#struktur_des_kopier-texturobjekts)), das die Textur definiert, von der die Daten kopiert werden. In Kombination mit `copySize` definiert dies den Bereich der Quelltextur-Subressource.
- `destination`
  - : Ein Objekt (siehe [Struktur des Kopier-Texturobjekts](#struktur_des_kopier-texturobjekts)), das die Textur definiert, in die die Daten geschrieben werden. In Kombination mit `copySize` definiert dies den Bereich der Zieltextur-Subressource.
- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtanzahl der kopierten Daten angibt. Der Wert für die Breite muss immer angegeben werden, während die Werte für Höhe und Tiefe/Array-Schichtanzahl optional sind und standardmäßig 1 betragen, wenn sie weggelassen werden.

    Zum Beispiel können Sie ein Array `[16, 16, 2]` oder ein gleichwertiges Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

### Struktur des Kopier-Texturobjekts

Ein Kopier-Texturobjekt hat die folgende Struktur:

- `aspect` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur kopiert werden sollen. Mögliche Werte sind:

    - `"all"`
      - : Alle verfügbaren Aspekte des Texturformats werden kopiert, was je nach Format alle oder beliebige der Farb-, Tiefen- und Stenzelelemente bedeuten kann.
    - `"depth-only"`
      - : Nur der Tiefenaspekt eines [Depth-or-Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird kopiert.
    - `"stencil-only"`
      - : Nur der Stenzelelement-Aspekt eines Depth-or-Stencil-Formats wird kopiert.

    Wird `aspect` weggelassen, wird ein Wert von `"all"` verwendet.

- `mipLevel` {{optional_inline}}
  - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, von der die Daten kopiert werden. Wenn weggelassen, ist der Standardwert von `mipLevel` 0.
- `origin` {{optional_inline}}

  - : Ein Objekt oder Array, das den Ursprung der Kopie/destination angibt — die minimale Ecke des Texturbereichs, von der die Daten kopiert werden. Zusammen mit `size` definiert dies den vollständigen Umfang des zu kopierenden Bereichs. Die `x`-, `y`- und `z`-Werte betragen standardmäßig 0, wenn `origin` teilweise oder vollständig weggelassen wird.

    Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder ein gleichwertiges Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

- `texture`
  - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, von der die Daten kopiert werden.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für den `source`:

- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) von `source` beinhaltet das `GPUTextureUsage.COPY_SRC`-Flag.

Für das `destination`:

- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) von `source` beinhaltet das `GPUTextureUsage.COPY_DST`-Flag.

Für `source` und `destination`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `texture`-Formate der Quell- und Ziel `texture` [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) sind kopierkompatibel.
- Die `texture`-Probeanzahl der Quell- und Ziel `texture` [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) sind gleich.
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Depth-or-Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder der [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 beträgt, ist die Subressourcengröße gleich `size`.
- Die `texture` [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) beträgt 1.
- `aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist gemäß [Depth-or-Stencil-Formaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) eine gültige Bildkopiequelle/-ziel.
- Die `texture` ist mit der `copySize` kompatibel.

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
