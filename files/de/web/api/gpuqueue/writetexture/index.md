---
title: "GPUQueue: writeTexture()-Methode"
short-title: writeTexture()
slug: Web/API/GPUQueue/writeTexture
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`writeTexture()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle schreibt eine bereitgestellte Datenquelle in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Dies ist eine bequeme Funktion, die eine Alternative zum Setzen von Texturdaten über Pufferzuordnung und Puffer-zu-Textur-Kopien bietet. Dadurch kann der Benutzer-Agent die effizienteste Methode zum Kopieren der Daten bestimmen.

## Syntax

```js-nolint
writeTexture(destination, data, dataLayout, size)
```

### Parameter

- `destination`

  - : Ein Objekt, das die Textur-Subresource und den Ursprung definiert, zu dem die Datenquelle geschrieben werden soll, und das folgende Eigenschaften haben kann:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, auf welche Aspekte der Textur die Daten geschrieben werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Format Farbe, Tiefe und Schablone bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen-oder-Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonen-Aspekt eines Tiefen-oder-Schablonenformats wird beschrieben.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die das Mip-Map-Level der Textur darstellt, zu dem die Daten geschrieben werden sollen. Wenn weggelassen, ist `mipLevel` standardmäßig 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie spezifiziert — die minimale Ecke des Texturbereichs, zu dem die Daten geschrieben werden sollen. Zusammen mit `size` definiert dies den vollen Umfang des zu kopierenden Bereichs. Die `x`, `y` und `z` Werte sind 0, falls Teile oder das gesamte `origin` weggelassen wird.

        Was folgt, ist ein Beispielarray:

        ```js
        origin: [0, 0, 0];
        ```

        Das entsprechende Objekt sähe so aus:

        ```js
        origin: {
          x: 0,
          y: 0,
          z: 0
        }
        ```

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur repräsentiert, in die geschrieben werden soll.

- `data`
  - : Ein Objekt, das die Datenquelle darstellt, die in die [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein.
- `dataLayout`
  - : Ein Objekt, das das Layout der in `data` enthaltenen Inhalte definiert. Mögliche Werte sind:
    - `offset` {{optional_inline}}
      - : Der Versatz, in Bytes, vom Beginn von `data` bis zum Start der zu kopierenden Bilddaten. Wenn weggelassen, ist `offset` standardmäßig 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Schrittweite, in Bytes, zwischen dem Beginn jeder Blockzeile (d.h. einer Zeile vollständiger Texelblöcke) und der darauf folgenden Blockzeile darstellt. Dies ist erforderlich, wenn es mehrere Blockzeilen gibt (d.h. die Kopierhöhe oder -tiefe ist mehr als ein Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockzeilen pro Einzelbild der Textur. `bytesPerRow` &times; `rowsPerImage` ergibt Ihnen die Schrittweite, in Bytes, zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn es mehrere Bilder zu kopieren gibt.
- `size`
  - : Ein Objekt oder Array, das den Umfang der Kopie spezifiziert — die entfernte Ecke des Texturbereichs, zu dem die Daten geschrieben werden sollen. Zusammen mit `destination.origin` definiert dies den vollen Umfang des zu kopierenden Bereichs. Siehe `destination.origin` für Beispiele zur Objekt-/Arraystruktur.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`writeTexture()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Ziel-[`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen-oder-Schablonenformat](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 beträgt, muss die Subresourcengröße gleich `size` sein.
- Die Ziel- [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) beinhaltet das `GPUTextureUsage.COPY_DST`-Flag.
- Die Ziel- [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) beträgt 1.
- `destination.origin.x` + die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist kleiner oder gleich der Breite der zu beschreibenden Subresource in der `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture).
- `destination.origin.y` + die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist kleiner oder gleich der Höhe der zu beschreibenden Subresource in der `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture).
- `destination.origin.z` + die `destination` [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) ist kleiner oder gleich der depthOrArrayLayers der zu beschreibenden Subresource in der `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture).
- Die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `destination.aspect` bezieht sich auf einen einzelnen Aspekt des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Bildkopierziel entsprechend den [Tiefen-oder-Schablonenformaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `destination` ist anderweitig kompatibel mit dem [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).

## Beispiele

In [Efficiently rendering glTF models](https://toji.github.io/webgpu-gltf-case-study/) wird eine Funktion zur Erstellung einer einfarbigen Textur definiert:

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

Dies kann verwendet werden, um Standardtexturen für die Materialbibliotheken festzulegen:

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
