---
title: "GPUCommandEncoder: copyTextureToTexture()-Methode"
short-title: copyTextureToTexture()
slug: Web/API/GPUCommandEncoder/copyTextureToTexture
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyTextureToTexture()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einer anderen kopiert.

## Syntax

```js-nolint
copyTextureToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt (siehe [Struktur des Kopiertexturobjekts](#struktur_des_kopiertexturobjekts)), das die Textur definiert, von der die Daten kopiert werden. Zusammen mit `copySize` definiert dies den Bereich der Quelltextursubressource.
- `destination`
  - : Ein Objekt (siehe [Struktur des Kopiertexturobjekts](#struktur_des_kopiertexturobjekts)), das die Textur definiert, in die die Daten geschrieben werden. Zusammen mit `copySize` definiert dies den Bereich der Zieltextursubressource.
- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtanzahl der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Werte für Höhe und Tiefe/Array-Schichtanzahl optional sind und, falls ausgelassen, standardmäßig auf 1 gesetzt werden.

    Was folgt, ist ein Beispiel für ein `copySize`-Array:

    ```js
    [16, 16, 2];
    ```

    Das entsprechende Objekt würde folgendermaßen aussehen:

    ```js
    {
      width: 16,
      height: 16,
      depthOrArrayLayers: 2
    }
    ```

### Struktur des Kopiertexturobjekts

Ein Kopiertexturobjekt hat die folgende Struktur:

- `aspect` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur die Daten von/zu kopieren sind. Mögliche Werte sind:

    - `"all"`
      - : Alle verfügbaren Aspekte des Texturformats werden von/zu kopiert. Das kann je nach Formattyp Farbe, Tiefe und Stencil umfassen.
    - `"depth-only"`
      - : Nur der Tiefenaspekt eines [Tiefen-oder-Stencilformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird von/zu kopiert.
    - `"stencil-only"`
      - : Nur der Stencil-Aspekt eines Tiefen-oder-Stencilformats wird von/zu kopiert.

    Falls weggelassen, nimmt `aspect` den Wert `"all"` an.

- `mipLevel` {{optional_inline}}
  - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, von der/zu der die Daten kopiert werden. Falls weggelassen, ist `mipLevel` standardmäßig 0.
- `origin` {{optional_inline}}

  - : Ein Objekt oder Array, das den Ursprung des Kopier-/Ziels angibt — die minimale Ecke des Texturbereichs, von der/zu der die Daten kopiert werden. Zusammen mit `size` wird der volle Umfang des Bereichs definiert, von dem/zu dem kopiert wird. Die `x`, `y` und `z`-Werte standardisieren auf 0, wenn `origin` weggelassen wird.

    Was folgt, ist ein Beispiel-Array:

    ```js
    [0, 0, 0];
    ```

    Das entsprechende Objekt würde folgendermaßen aussehen:

    ```js
    {
      x: 0,
      y: 0,
      z: 0
    }
    ```

- `texture`
  - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, von der/zu der die Daten kopiert werden.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToTexture()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für `source`:

- Der `source`-[`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) muss das `GPUTextureUsage.COPY_SRC`-Flag enthalten.

Für `destination`:

- Der `destination`-[`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) muss das `GPUTextureUsage.COPY_DST`-Flag enthalten.

Für `source` und `destination`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texel-Blockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texel-Blockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `texture`-Formate sowohl der Quelle als auch des Ziels sind kopierkompatibel.
- Die `texture`-Sample-Anzahlen sowohl der Quelle als auch des Ziels sind gleich.
- Falls das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Depth-or-Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder die [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) größer als 1 ist, ist die Subresourcengröße gleich `size`.
- Die `texture`-[`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `aspect` bezieht sich auf einen einzigen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist eine gültige Bildkopiequelle/-zieldestination gemäß [Depth-or-Stencil-Formaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `texture` ist kompatibel mit der `copySize`.

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
