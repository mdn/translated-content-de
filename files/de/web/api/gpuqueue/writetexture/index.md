---
title: "GPUQueue: writeTexture()-Methode"
short-title: writeTexture()
slug: Web/API/GPUQueue/writeTexture
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`writeTexture()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle schreibt eine bereitgestellte Datenquelle in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Dies ist eine Komfortfunktion, die eine Alternative zum Setzen von Texturdaten über Puffer-Mapping und Puffer-zu-Textur-Kopien bietet. Sie erlaubt es dem Benutzeragenten, die effizienteste Methode zum Kopieren der Daten zu bestimmen.

## Syntax

```js-nolint
writeTexture(destination, data, dataLayout, size)
```

### Parameter

- `destination`
  - : Ein Objekt, das die Textur-Subressource und den Ursprung definiert, um die Datenquelle zu schreiben, welches die folgenden Eigenschaften haben kann:
    - `aspect` {{optional_inline}}
      - : Ein enumerierter Wert, der definiert, auf welche Aspekte der Textur die Daten geschrieben werden. Mögliche Werte sind:
        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was alle oder beliebige von Farbe, Tiefe und Stencil bedeuten kann, abhängig von der Art des Formats, mit dem Sie arbeiten.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Stencilaspekt eines depth-or-stencil formats wird beschrieben.

        Wenn ausgelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, auf die die Daten geschrieben werden sollen. Wenn weggelassen, ist der Standardwert von `mipLevel` 0.
    - `origin` {{optional_inline}}
      - : Ein Objekt oder ein Array, das den Ursprung der Kopie angibt — die minimale Ecke des Texturbereichs, auf den die Daten geschrieben werden sollen. Zusammen mit `size` definiert dies den vollständigen Umfang des zu kopierenden Bereichs. Die `x`, `y` und `z` Werte sind standardmäßig 0, wenn `origin` weggelassen wird.

        Sie können zum Beispiel ein Array wie `[0, 0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur darstellt, auf die die Daten geschrieben werden sollen.

- `data`
  - : Ein Objekt, das die Datenquelle darstellt, die in die [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein.
- `dataLayout`
  - : Ein Objekt, das das Layout des Inhalts in `data` definiert. Mögliche Werte sind:
    - `offset` {{optional_inline}}
      - : Der Versatz, in Byte, vom Beginn von `data` bis zum Start der Bilddaten, die kopiert werden sollen. Wenn weggelassen, ist der Standardwert von `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Breite, in Bytes, zwischen dem Anfang jeder Blockreihe (d.h. einer Reihe vollständiger Texel-Blöcke) und der nachfolgenden Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d.h. die Kopierhöhe oder -tiefe ist mehr als ein Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro Einzelbild der Textur. `bytesPerRow` &times; `rowsPerImage` ergibt die Breite, in Bytes, zwischen dem Anfang jedes vollständigen Bildes. Dies ist erforderlich, wenn es mehrere Bilder zum Kopieren gibt.
- `size`
  - : Ein Objekt oder ein Array, das den Umfang der Kopie angibt — die entfernte Ecke des Texturbereichs, auf die die Daten geschrieben werden sollen. Zusammen mit `destination.origin` definiert dies den vollständigen Umfang des zu kopierenden Bereichs. Siehe `destination.origin` für Beispiele zur Objekt-/Array-Struktur.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) des Ziels.
- `origin.x` ist ein Vielfaches der Texel-Blockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) des Ziels.
- `origin.y` ist ein Vielfaches der Texel-Blockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) des Ziels.
- Wenn das [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) des Ziels ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 ist, ist die Größe der Subressource gleich der `size`.
- Das [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) des Ziels beinhaltet das `GPUTextureUsage.COPY_DST` Flag.
- Das [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) des Ziels ist 1.
- `destination.origin.x` + die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist kleiner oder gleich der Breite der Subressource, die in die `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll.
- `destination.origin.y` + die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist kleiner oder gleich der Höhe der Subressource, die in die `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll.
- `destination.origin.z` + die `destination` [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) ist kleiner oder gleich der `depthOrArrayLayers` der Subressource, die in die `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll.
- Die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texel-Blockbreite des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) des Ziels.
- Die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texel-Blockhöhe des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) des Ziels.
- `destination.aspect` bezieht sich auf einen einzelnen Aspekt des [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) des Ziels.
- Dieser Aspekt ist ein gültiges Ziel für das Kopieren von Bildern gemäß [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `destination` ist anderweitig kompatibel mit dem [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).

## Beispiele

In [Efficiently rendering glTF models](https://toji.github.io/webgpu-gltf-case-study/) wird eine Funktion für das Erstellen einer einfarbigen Textur definiert:

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
