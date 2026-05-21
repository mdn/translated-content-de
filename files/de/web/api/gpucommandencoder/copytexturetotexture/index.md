---
title: "GPUCommandEncoder: copyTextureToTexture() Methode"
short-title: copyTextureToTexture()
slug: Web/API/GPUCommandEncoder/copyTextureToTexture
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die **`copyTextureToTexture()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einer anderen kopiert.

## Syntax

```js-nolint
copyTextureToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt (siehe [Struktur des Copy Texture Objekts](#struktur_des_copy_texture_objekts)), das die Textur definiert, von der die Daten kopiert werden. In Kombination mit `copySize` definiert dies den Bereich der Quelltextur-Subresource.
- `destination`
  - : Ein Objekt (siehe [Struktur des Copy Texture Objekts](#struktur_des_copy_texture_objekts)), das die Textur definiert, in die die Daten geschrieben werden sollen. In Kombination mit `copySize` definiert dies den Bereich der Zieltextur-Subresource.
- `copySize`
  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtenzahl der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen-/Array-Schichtenzahl optional sind und auf 1 standardmäßig gesetzt werden, wenn sie weggelassen werden.

    Zum Beispiel können Sie ein Array `[16, 16, 2]` oder sein gleichwertiges Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

### Struktur des Copy Texture Objekts

Ein Copy Texture Objekt hat die folgende Struktur:

- `aspect` {{optional_inline}}
  - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur kopiert werden. Mögliche Werte sind:
    - `"all"`
      - : Alle verfügbaren Aspekte des Texturformats werden kopiert, was je nach Format alle oder einige von Farbe, Tiefe und Schablone bedeuten kann.
    - `"depth-only"`
      - : Nur der Tiefenaspekt eines [Tiefen-oder-Schablonen-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird kopiert.
    - `"stencil-only"`
      - : Nur der Schablonen-Aspekt eines Tiefen-oder-Schablonen-Formats wird kopiert.

    Wenn weggelassen, nimmt `aspect` den Wert `"all"`.

- `mipLevel` {{optional_inline}}
  - : Eine Zahl, die das Mip-Map-Level der Textur angibt, von der/dem die Daten kopiert werden. Wenn weggelassen, hat `mipLevel` den Standardwert 0.
- `origin` {{optional_inline}}
  - : Ein Objekt oder Array, das den Ursprung der Kopie/Zielfestlegung angibt — die minimale Ecke des Texturbereichs, von dem die Daten kopiert werden. Zusammen mit `size` definiert dies das gesamte Ausmaß des zu kopierenden Bereichs. Die `x`, `y` und `z` Werte haben den Standardwert 0, wenn ein Teil von `origin` weggelassen wird.

    Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder sein gleichwertiges Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

- `texture`
  - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur repräsentiert, von der die Daten kopiert werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToTexture()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für die `source`:

- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) von `source` umfasst das `GPUTextureUsage.COPY_SRC`-Flag.

Für die `destination`:

- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) von `source` umfasst das `GPUTextureUsage.COPY_DST`-Flag.

Für `source` und `destination`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texel-Blockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texel-Blockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die Formate der Quell- und Zieltextur [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) sind kopierkompatibel.
- Die Formate [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) der Quell- und Zieltextur sind gleich.
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen-oder-Schablonen-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 ist, muss die Subresource-Größe gleich `size` sein.
- Die [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) der `texture` ist 1.
- `aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist eine gültige Bildkopiequelle bzw. ein Ziel gemäß [Tiefen-oder-Schablonen-Formaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
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
