---
title: "GPUQueue: Methode writeTexture()"
short-title: writeTexture()
slug: Web/API/GPUQueue/writeTexture
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`writeTexture()`** des Interfaces [`GPUQueue`](/de/docs/Web/API/GPUQueue) schreibt eine bereitgestellte Datenquelle in eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Diese Komfortfunktion bietet eine Alternative zum Festlegen von Texturdaten durch Buffer-Mapping und Kopieren von einem Buffer in eine Textur. Sie überlässt es dem User Agent, die effizienteste Methode zum Kopieren der Daten zu bestimmen.

## Syntax

```js-nolint
writeTexture(destination, data, dataLayout, size)
```

### Parameter

- `destination`
  - : Ein Objekt, das die Textur-Subressource und den Ursprung angibt, in die bzw. an den die Datenquelle geschrieben werden soll. Es kann die folgenden Eigenschaften haben:
    - `aspect` {{optional_inline}}
      - : Ein Aufzählungswert, der angibt, in welche Aspekte der Textur die Daten geschrieben werden. Mögliche Werte sind:
        - `"all"`
          - : Die Daten werden in alle verfügbaren Aspekte des Texturformats geschrieben. Je nach Format können dies Farbe, Tiefe und Stencil sein.
        - `"depth-only"`
          - : Die Daten werden nur in den Tiefenaspekt eines [Tiefen- oder Stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) geschrieben.
        - `"stencil-only"`
          - : Die Daten werden nur in den Stencil-Aspekt eines Tiefen- oder Stencil-Formats geschrieben.

        Wird `aspect` weggelassen, hat es den Wert `"all"`.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mipmap-Stufe der Textur angibt, in die die Daten geschrieben werden. Wird `mipLevel` weggelassen, ist der Standardwert 0.
    - `origin` {{optional_inline}}
      - : Ein Objekt oder Array, das den Ursprung des Kopiervorgangs angibt – die minimale Ecke des Texturbereichs, in den die Daten geschrieben werden. Zusammen mit `size` definiert es die vollständige Ausdehnung des Zielbereichs. Die Werte `x`, `y` und `z` sind standardmäßig 0, wenn sie oder `origin` weggelassen werden.

        Sie können beispielsweise ein Array wie `[0, 0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur angibt, in die die Daten geschrieben werden.

- `data`
  - : Ein Objekt, das die Datenquelle angibt, die in die [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein.
- `dataLayout`
  - : Ein Objekt, das das Layout der in `data` enthaltenen Daten definiert. Mögliche Eigenschaften sind:
    - `offset` {{optional_inline}}
      - : Der Offset in Bytes vom Anfang von `data` bis zum Beginn der zu kopierenden Bilddaten. Wird `offset` weggelassen, ist der Standardwert 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die den Abstand in Bytes zwischen dem Beginn einer Blockzeile (d.h. einer Zeile vollständiger Texel-Blöcke) und dem Beginn der nächsten Blockzeile angibt. Diese Eigenschaft ist erforderlich, wenn mehrere Blockzeilen vorhanden sind (d.h. wenn die Höhe oder Tiefe des zu kopierenden Bereichs mehr als einen Block beträgt).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockzeilen pro Einzelbild der Textur. `bytesPerRow` &times; `rowsPerImage` ergibt den Abstand in Bytes zwischen den Anfängen zweier vollständiger Bilder. Diese Eigenschaft ist erforderlich, wenn mehrere Bilder kopiert werden.
- `size`
  - : Ein Objekt oder Array, das die Ausdehnung des Kopiervorgangs angibt – die gegenüberliegende Ecke des Texturbereichs, in den die Daten geschrieben werden. Zusammen mit `destination.origin` definiert es die vollständige Ausdehnung des Zielbereichs. Beispiele für die Objekt- und Array-Struktur finden Sie unter `destination.origin`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Beim Aufruf von **`writeTexture()`** müssen die folgenden Bedingungen erfüllt sein. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) der Zieltextur.
- `origin.x` ist ein Vielfaches der Texel-Blockbreite des Zielformats [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texel-Blockhöhe des Zielformats [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) der Zieltextur ein [Tiefen- oder Stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) größer als 1 ist, entspricht die Größe der Subressource `size`.
- [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) der Zieltextur enthält das Flag `GPUTextureUsage.COPY_DST`.
- [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) der Zieltextur ist 1.
- `destination.origin.x` plus [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) von `destination` ist kleiner oder gleich der Breite der Subressource der Zieltextur [`GPUTexture`](/de/docs/Web/API/GPUTexture).
- `destination.origin.y` plus [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) von `destination` ist kleiner oder gleich der Höhe der Subressource der Zieltextur [`GPUTexture`](/de/docs/Web/API/GPUTexture).
- `destination.origin.z` plus [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) von `destination` ist kleiner oder gleich `depthOrArrayLayers` der Subressource der Zieltextur [`GPUTexture`](/de/docs/Web/API/GPUTexture).
- [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) von `destination` ist ein Vielfaches der Texel-Blockbreite des Zielformats [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) von `destination` ist ein Vielfaches der Texel-Blockhöhe des Zielformats [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `destination.aspect` bezieht sich auf einen einzelnen Aspekt des Zielformats [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist gemäß den Regeln für [Tiefen- oder Stencil-Formate](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ein gültiges Ziel für einen Bildkopiervorgang.
- `destination` ist auch ansonsten mit [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) kompatibel.

## Beispiele

In [Effizientes Rendern von glTF-Modellen](https://toji.dev/webgpu-gltf-case-study/) wird eine Funktion zum Erstellen einer einfarbigen Textur definiert:

```js
function createSolidColorTexture(r, g, b, a) {
  const data = new Uint8Array([r * 255, g * 255, b * 255, a * 255]);
  const texture = device.createTexture({
    size: { width: 1, height: 1 },
    format: "rgba8unorm",
    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
  });
  device.queue.writeTexture({ texture }, data, {}, { width: 1, height: 1 });
  return texture;
}
```

Damit lassen sich Standardtexturen für die Verwendung in Materialbibliotheken definieren:

```js
const opaqueWhiteTexture = createSolidColorTexture(1, 1, 1, 1);
const transparentBlackTexture = createSolidColorTexture(0, 0, 0, 0);
const defaultNormalTexture = createSolidColorTexture(0.5, 0.5, 1, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
