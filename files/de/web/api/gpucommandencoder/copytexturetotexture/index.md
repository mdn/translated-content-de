---
title: "GPUCommandEncoder: copyTextureToTexture() Methode"
short-title: copyTextureToTexture()
slug: Web/API/GPUCommandEncoder/copyTextureToTexture
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die **`copyTextureToTexture()`** Methode der
[`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Schnittstelle kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einer anderen kopiert.

## Syntax

```js-nolint
copyTextureToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt (siehe [Struktur des Kopiertexturobjekts](#struktur_des_kopiertexturobjekts)), das die Textur definiert, von der die Daten kopiert werden. Zusammen mit `copySize` definiert es den Bereich der Quelltextur-Unterressource.
- `destination`
  - : Ein Objekt (siehe [Struktur des Kopiertexturobjekts](#struktur_des_kopiertexturobjekts)), das die Textur definiert, in die die Daten geschrieben werden. Zusammen mit `copySize` definiert es den Bereich der Zieltextur-Unterressource.
- `copySize`
  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Lagenanzahl der kopierten Daten spezifiziert. Der Breite-Wert muss immer angegeben werden, während die Höhe und die Tiefe/Array-Lagenanzahl optional sind und bei Weglassen einen Standardwert von 1 haben.

    Sie können zum Beispiel ein Array `[16, 16, 2]` oder sein äquivalentes Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

### Struktur des Kopiertexturobjekts

Ein Kopiertexturobjekt hat die folgende Struktur:

- `aspect` {{optional_inline}}
  - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur die Daten von/nach kopiert werden. Mögliche Werte sind:
    - `"all"`
      - : Alle verfügbaren Aspekte des Texturformats werden von/nach kopiert, was alles oder einen beliebigen der Farb-, Tiefen- und Schablonenastpekte bedeuten kann, je nach Format.
    - `"depth-only"`
      - : Nur der Tiefen-Aspekt eines [Tiefen- oder Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird von/nach kopiert.
    - `"stencil-only"`
      - : Nur der Schablonen-Aspekt eines Tiefen- oder Schablonenformats wird von/nach kopiert.

    Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

- `mipLevel` {{optional_inline}}
  - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, von der/die auf die Daten kopiert werden. Wenn weggelassen, ist `mipLevel` standardmäßig 0.
- `origin` {{optional_inline}}
  - : Ein Objekt oder Array, das den Ursprung des Kopier-/Zielbereichs angibt — die minimale Ecke des Texturbereichs, von dem/zu dem die Daten kopiert werden. Zusammen mit `size` wird das gesamte Ausmaß des Bereichs definiert, der kopiert wird. Die `x`, `y` und `z` Werte sind standardmäßig 0, wenn `origin` weggelassen wird.

    Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder sein äquivalentes Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

- `texture`
  - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) Objekt, das die Textur darstellt, von der/zu der die Daten kopiert werden.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für den `source`:

- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) des `source` enthält das `GPUTextureUsage.COPY_SRC` Flag.

Für den `destination`:

- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) des `destination` enthält das `GPUTextureUsage.COPY_DST` Flag.

Für `source` und `destination`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblock-Breite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblock-Höhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die Formate der Quell- und Zieltexturen sind kopierkompatibel.
- Die `sampleCount` der Quell- und Zieltexturen sind gleich.
- Wenn das Format der Textur ein [Tiefen- oder Schablonenformat](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder mehr als 1 Probe hat, muss die Unterressourcengröße gleich `size` sein.
- Die `sampleCount` der Textur ist 1.
- `aspect` bezieht sich auf einen einzigen Aspekt des Texturformats.
- Dieser Aspekt ist eine gültige Bildkopierquelle/-ziel gemäß den Tiefen- oder Schablonenformaten.
- Die Textur ist kompatibel mit dem `copySize`.

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
