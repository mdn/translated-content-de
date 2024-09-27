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
  - : Ein Objekt (siehe [Aufbau eines Kopier-Texturobjekts](#aufbau_eines_kopier-texturobjekts)), das die Textur definiert, aus der die Daten kopiert werden sollen. Zusammen mit `copySize` definiert es den Bereich der Quelltextur-Subressource.
- `destination`
  - : Ein Objekt (siehe [Aufbau eines Kopier-Texturobjekts](#aufbau_eines_kopier-texturobjekts)), das die Textur definiert, in die die Daten geschrieben werden sollen. Zusammen mit `copySize` definiert es den Bereich der Zieltextur-Subressource.
- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Anzahl der Array-Schichten der kopierten Daten angibt. Der Breitenwert muss immer angegeben werden, während die Höhen- und Tiefen/Array-Schichtenzahlen optional sind und standardmäßig auf 1 gesetzt werden, wenn sie weggelassen werden.

    Im Folgenden ein Beispiel für ein `copySize`-Array:

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

### Aufbau eines Kopier-Texturobjekts

Ein Kopier-Texturobjekt hat folgende Struktur:

- `aspect` {{optional_inline}}

  - : Ein aufgezählter Wert, der definiert, welche Aspekte der Textur die Daten kopiert werden sollen. Mögliche Werte sind:

    - `"all"`
      - : Alle verfügbaren Aspekte des Texturformats werden kopiert, was je nach Format alle oder einige der Farbe, Tiefe und Stencil sein können.
    - `"depth-only"`
      - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird kopiert.
    - `"stencil-only"`
      - : Nur der Stencil-Aspekt eines depth-or-stencil-Formats wird kopiert.

    Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

- `mipLevel` {{optional_inline}}
  - : Eine Zahl, die das Mip-Map-Level der Textur darstellt, von oder zu der die Daten kopiert werden sollen. Wenn weggelassen, ist `mipLevel` standardmäßig 0.
- `origin` {{optional_inline}}

  - : Ein Objekt oder Array, das den Ursprung der Kopie/des Ziels angibt — die minimale Ecke des Texturbereichs, von oder zu der die Daten kopiert werden sollen. Zusammen mit `size` definiert es den gesamten Umfang des zu kopierenden Bereichs. Die Werte `x`, `y` und `z` sind standardmäßig 0, wenn `origin` ganz oder teilweise weggelassen wird.

    Im Folgenden ein Beispiel für ein Array:

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
  - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur repräsentiert, von oder zu der die Daten kopiert werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für das `source`:

- Das [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) des `source` enthält das `GPUTextureUsage.COPY_SRC`-Flag.

Für das `destination`:

- Das [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) des `source` enthält das `GPUTextureUsage.COPY_DST`-Flag.

Für `source` und `destination`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texel-Block-Breite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texel-Block-Höhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `texture`-Formate [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) der Quelle und des Ziels sind kopierkompatibel.
- Die `texture`-Abtastzahlen [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) der Quelle und des Ziels sind gleich.
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 ist, ist die Subressourcengröße gleich `size`.
- Die `texture` hat eine [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) von 1.
- `aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist eine gültige Bildkopiequelle/-ziel gemäß [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `texture` ist kompatibel mit `copySize`.

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
