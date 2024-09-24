---
title: "GPUCommandEncoder: copyTextureToTexture() Methode"
short-title: copyTextureToTexture()
slug: Web/API/GPUCommandEncoder/copyTextureToTexture
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyTextureToTexture()`** Methode des {{domxref("GPUCommandEncoder")}}-Interfaces kodiert einen Befehl, der Daten von einer {{domxref("GPUTexture")}} zu einer anderen kopiert.

## Syntax

```js-nolint
copyTextureToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt (siehe [Struktur des Kopier-Textur-Objekts](#struktur_des_kopier-textur-objekts)), das die Textur definiert, von der die Daten kopiert werden. Zusammen mit `copySize` definiert dies den Bereich der Quelltextur-Subressource.
- `destination`
  - : Ein Objekt (siehe [Struktur des Kopier-Textur-Objekts](#struktur_des_kopier-textur-objekts)), das die Textur definiert, in die die Daten geschrieben werden. Zusammen mit `copySize` definiert dies den Bereich der Zieltextur-Subressource.
- `copySize`

  - : Ein Objekt oder Array, das die Breite, Höhe und Tiefe/Array-Schichtanzahl der kopierten Daten spezifiziert. Der Breitenwert muss immer angegeben werden, während die Werte für Höhe und Tiefe/Array-Schichtanzahl optional sind und standardmäßig 1 betragen, wenn sie weggelassen werden.

    Nachfolgend ein Beispiel für ein `copySize` Array:

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

### Struktur des Kopier-Textur-Objekts

Ein Kopier-Textur-Objekt hat die folgende Struktur:

- `aspect` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur die Daten von/zu kopieren sind. Mögliche Werte sind:

    - `"all"`
      - : Alle verfügbaren Aspekte des Texturformats werden von/zu kopiert, was alle oder beliebige von Farbe, Tiefe und Stencil umfassen kann, abhängig von dem Format, mit dem Sie arbeiten.
    - `"depth-only"`
      - : Nur der Tiefenaspekt eines [Tiefen-oder-Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird von/zu kopiert.
    - `"stencil-only"`
      - : Nur der Stencil-Aspekt eines Tiefen-oder-Stencil-Formats wird von/zu kopiert.

    Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

- `mipLevel` {{optional_inline}}
  - : Eine Zahl, die die Mip-Map-Ebene der Textur repräsentiert, von/zu der die Daten kopiert werden. Wenn weggelassen, ist `mipLevel` standardmäßig 0.
- `origin` {{optional_inline}}

  - : Ein Objekt oder Array, das den Ursprung des Kopier-/Zielbereichs spezifiziert — die minimale Ecke des Texturbereichs, von/zu dem die Daten kopiert werden. Zusammen mit `size` definiert dies den gesamten Bereich, der kopiert werden soll. Die Werte für `x`, `y` und `z` sind standardmäßig 0, wenn irgendein Teil oder das gesamte `origin` weggelassen wird.

    Nachfolgend ein Beispiel-Array:

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
  - : Ein {{domxref("GPUTexture")}} Objekt, das die Textur repräsentiert, von/zu der die Daten kopiert werden.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyTextureToTexture()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPUCommandEncoder")}} wird ungültig.

Für die `source`:

- Die {{domxref("GPUTexture.usage")}} der `source` enthält das `GPUTextureUsage.COPY_SRC` Flag.

Für die `destination`:

- Die {{domxref("GPUTexture.usage")}} der `destination` enthält das `GPUTextureUsage.COPY_DST` Flag.

Für `source` und `destination`:

- `mipLevel` ist kleiner als die {{domxref("GPUTexture.mipLevelCount")}}.
- `origin.x` ist ein Vielfaches der Texelblockbreite des {{domxref("GPUTexture.format")}}.
- `origin.y` ist ein Vielfaches der Texelblockhöhe des {{domxref("GPUTexture.format")}}.
- Die Quell- und Zieltexturformate {{domxref("GPUTexture.format")}} sind kopier-kompatibel.
- Die Quell- und Zieltexturen haben die gleiche Anzahl von Proben {{domxref("GPUTexture.sampleCount")}}.
- Wenn das {{domxref("GPUTexture.format")}} ein [Tiefen-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder {{domxref("GPUTexture.sampleCount")}} größer als 1 ist, ist die Subressourcengröße gleich `size`.
- Die {{domxref("GPUTexture.sampleCount")}} der `texture` ist 1.
- `aspect` bezieht sich auf einen einzelnen Aspekt des {{domxref("GPUTexture.format")}}.
- Dieser Aspekt ist eine gültige Bildkopiequelle/-ziel gemäß [Tiefen-oder-Stencil-Formaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
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
