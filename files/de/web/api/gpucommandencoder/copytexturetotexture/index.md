---
title: "GPUCommandEncoder: copyTextureToTexture() Methode"
short-title: copyTextureToTexture()
slug: Web/API/GPUCommandEncoder/copyTextureToTexture
l10n:
  sourceCommit: 3c4d1e7134c9cca1807ebc01bbdd5fe0c288ae87
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die **`copyTextureToTexture()`** Methode der
[`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einer anderen kopiert.

## Syntax

```js-nolint
copyTextureToTexture(source, destination, copySize)
```

### Parameter

- `source`
  - : Ein Objekt (siehe [Kopiervorlage für Texturobjekt](#kopiervorlage_für_texturobjekt)), das die Textur definiert, von der die Daten kopiert werden. In Kombination mit `copySize` bestimmt es den Bereich des Queltextur-Subressourcen.
- `destination`
  - : Ein Objekt (siehe [Kopiervorlage für Texturobjekt](#kopiervorlage_für_texturobjekt)), das die Textur definiert, in die die Daten geschrieben werden. In Kombination mit `copySize` bestimmt es den Bereich des Zieltextur-Subressourcen.
- `copySize`
  - : Ein Objekt oder Array, das die Breite, Höhe und die Anzahl der Ebenen/Tiefenschichten der kopierten Daten angibt. Der Wert für die Breite muss immer angegeben werden, während die Werte für Höhe und Anzahl der Ebenen/Tiefenschichten optional sind und standardmäßig 1 betragen, wenn sie weggelassen werden.

    Zum Beispiel können Sie ein Array `[16, 16, 2]` oder das entsprechende Objekt `{ width: 16, height: 16, depthOrArrayLayers: 2 }` übergeben.

### Kopiervorlage für Texturobjekt

Ein Kopiervorlage für ein Texturobjekt hat die folgende Struktur:

- `aspect` {{optional_inline}}
  - : Ein enumerierter Wert, der bestimmt, welche Aspekte der Textur die Daten von/zu kopieren sind. Mögliche Werte sind:
    - `"all"`
      - : Alle verfügbaren Aspekte des Texturformats werden von/zu kopiert, was je nach dem Format alle oder einige der folgenden Bereiche bedeuten kann: Farbe, Tiefe und Schablone.
    - `"depth-only"`
      - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird von/zu kopiert.
    - `"stencil-only"`
      - : Nur der Schablonenaspekt eines Tiefen-oder-Schablonenformats wird von/zu kopiert.

    Wenn ausgelassen, nimmt `aspect` den Wert `"all"` an.

- `mipLevel` {{optional_inline}}
  - : Eine Zahl, die die Mip-Map-Ebene der Textur angibt, von der/zu der die Daten kopiert werden. Wenn weggelassen, ist der Standardwert für `mipLevel` 0.
- `origin` {{optional_inline}}
  - : Ein Objekt oder Array, das den Ursprung der Kopie/Ziel angibt – die minimale Ecke des Texturbereichs, von dem/zu dem die Daten kopiert werden. Gemeinsam mit `size` wird das gesamte Ausmaß des zu kopierenden Bereichs definiert. Die Werte `x`, `y` und `z` betragen standardmäßig 0, wenn `origin` ganz oder teilweise weggelassen wird.

    Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

- `texture`
  - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur repräsentiert, von der/zu der die Daten kopiert werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Bedingungen müssen erfüllt sein, wenn **`copyTextureToTexture()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig.

Für die `source`:

- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) des `source`-Objekts muss das `GPUTextureUsage.COPY_SRC`-Flag enthalten.

Für die `destination`:

- Die [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) des `destination`-Objekts muss das `GPUTextureUsage.COPY_DST`-Flag enthalten.

Für `source` und `destination`:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `texture` [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format)s der Quelle und des Ziels müssen kopierbar-kompatibel sein.
- Die `texture` [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount)s der Quelle und des Ziels müssen gleich sein.
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder die [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) größer als 1 ist, muss die Subressourcengröße gleich `size` sein.
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist, müssen die `aspect`s der `source` und `destination` auf alle Aspekte ihrer jeweiligen [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format)s verweisen.
- Die `texture` muss mit der `copySize` kompatibel sein.
- Die durch `source` zusammen mit `copySize` und `destination` zusammen mit `copySize` definierten Subressourcensätze sind disjunkt.

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
