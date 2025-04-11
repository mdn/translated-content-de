---
title: "GPUQueue: writeTexture() Methode"
short-title: writeTexture()
slug: Web/API/GPUQueue/writeTexture
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`writeTexture()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle schreibt eine bereitgestellte Datenquelle in eine angegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Dies ist eine Komfortfunktion, die eine Alternative zum Setzen von Texturdaten über Pufferzuordnung und Puffer-zu-Textur-Kopien bietet. Sie ermöglicht es dem Benutzeragenten, die effizienteste Methode für das Kopieren der Daten zu bestimmen.

## Syntax

```js-nolint
writeTexture(destination, data, dataLayout, size)
```

### Parameter

- `destination`

  - : Ein Objekt, das die Texturunterressource und den Ursprung definiert, zu dem die Datenquelle geschrieben wird. Es kann die folgenden Eigenschaften enthalten:

    - `aspect` {{optional_inline}}

      - : Ein aufgezählter Wert, der beschreibt, auf welche Aspekte der Textur die Daten geschrieben werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Format alle oder einige der folgenden sein können: Farbe, Tiefe und Schablone.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen- oder Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonaspekt eines Tiefen- oder Schablonenformats wird beschrieben.

        Wenn weggelassen, hat `aspect` den Wert `"all"`.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die das Mip-Map-Level der Textur angibt, zu dem die Daten geschrieben werden sollen. Wenn weggelassen, hat `mipLevel` den Standardwert 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimale Ecke des Texturbereichs, zu dem die Daten geschrieben werden sollen. Zusammen mit `size` definiert dies den vollständigen Bereich, der kopiert wird. Die `x`-, `y`- und `z`-Werte haben den Standardwert 0, wenn `origin` weggelassen wird.

        Sie können zum Beispiel ein Array wie `[0, 0, 0]` oder dessen äquivalentes Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, zu der die Daten geschrieben werden sollen.

- `data`
  - : Ein Objekt, das die Datenquelle darstellt, die in die [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} sein.
- `dataLayout`
  - : Ein Objekt, das das Layout des in `data` enthaltenen Inhalts definiert. Mögliche Werte sind:
    - `offset` {{optional_inline}}
      - : Der Offset in Bytes vom Beginn der `data` bis zum Beginn der zu kopierenden Bilddaten. Wenn weggelassen, hat `offset` den Standardwert 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Abstände in Bytes zwischen dem Beginn jeder Blockreihe (d.h. einer Reihe vollständiger Texelblöcke) und der nachfolgenden Blockreihe darstellt. Dies ist erforderlich, wenn mehrere Blockreihen vorhanden sind (d.h. die Kopierhöhe oder -tiefe mehr als ein Block ist).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro Einzelbild der Textur. `bytesPerRow` &times; `rowsPerImage` gibt Ihnen die Abstände in Bytes zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.
- `size`
  - : Ein Objekt oder Array, das das Ausmaß der Kopie angibt — die entfernte Ecke des Texturbereichs, zu dem die Daten geschrieben werden sollen. Zusammen mit `destination.origin` definiert dies den vollständigen Bereich, der kopiert wird. Siehe `destination.origin` für Beispiele zur Objekt/Array-Struktur.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`writeTexture()`** erfüllt sein, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Ziel-[`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen- oder Schablonenformat](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) größer als 1 ist, entspricht die Unterressourcengröße `size`.
- Das Ziel-[`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält das `GPUTextureUsage.COPY_DST`-Flag.
- Das Ziel-[`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `destination.origin.x` + die `destination`-Breite der [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist kleiner oder gleich der Breite der Unterressource, die zur `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben wird.
- `destination.origin.y` + die `destination`-Höhe der [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist kleiner oder gleich der Höhe der Unterressource, die zur `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben wird.
- `destination.origin.z` + die `destination`-TiefenOderArraySchichten der [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) ist kleiner oder gleich den depthOrArrayLayers der Unterressource, die zur `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben wird.
- Die `destination`-Breite der [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `destination`-Höhe der [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `destination.aspect` bezieht sich auf einen einzelnen Aspekt des Ziel-[`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Bildkopie-Ziel gemäß [Tiefen- oder Schablonenformaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `destination` ist anderweitig mit dem [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) kompatibel.

## Beispiele

In [Effizientes Rendern von glTF-Modellen](https://toji.github.io/webgpu-gltf-case-study/) wird eine Funktion zur Erstellung einer einfarbigen Textur definiert:

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

Dies kann verwendet werden, um Standardtexturen für die Verwendung in Materialbibliotheken zu definieren:

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
