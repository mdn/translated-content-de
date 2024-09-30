---
title: "GPUQueue: writeTexture() Methode"
short-title: writeTexture()
slug: Web/API/GPUQueue/writeTexture
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`writeTexture()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle schreibt eine bereitgestellte Datenquelle in eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Dies ist eine Komfortfunktion, die eine Alternative zum Einstellen von Texturdaten über Pufferzuordnung und Puffer-zu-Textur-Kopien bietet. Sie lässt das Benutzeragent entscheiden, wie die Daten am effizientesten kopiert werden können.

## Syntax

```js-nolint
writeTexture(destination, data, dataLayout, size)
```

### Parameter

- `destination`

  - : Ein Objekt, das die Textur-Unterressource und den Ursprung definiert, zu dem die Datenquelle geschrieben werden soll. Es kann die folgenden Eigenschaften enthalten:

    - `aspect` {{optional_inline}}

      - : Ein aufgezählter Wert, der definiert, auf welche Aspekte der Textur die Daten geschrieben werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Formattyp Farbe, Tiefe und Schablone bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen-oder-Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonenaspekt eines Tiefen-oder-Schablonenformats wird beschrieben.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur repräsentiert, auf die die Daten geschrieben werden sollen. Wenn nicht angegeben, ist der Standardwert für `mipLevel` 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimale Ecke des Texturbereichs, in den die Daten geschrieben werden sollen. Zusammen mit `size` definiert dies den vollen Umfang des Bereichs, in den kopiert werden soll. Die `x`, `y` und `z` Werte sind standardmäßig 0, wenn Teile oder alle von `origin` weggelassen werden.

        Nachfolgend ein Beispielarray:

        ```js
        origin: [0, 0, 0];
        ```

        Das entsprechende Objekt sieht so aus:

        ```js
        origin: {
          x: 0,
          y: 0,
          z: 0
        }
        ```

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt, das die Textur repräsentiert, in die die Daten geschrieben werden sollen.

- `data`
  - : Ein Objekt, das die Datenquelle repräsentiert, die in die [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} sein.
- `dataLayout`
  - : Ein Objekt, das das Layout der in `data` enthaltenen Inhalte definiert. Mögliche Werte sind:
    - `offset` {{optional_inline}}
      - : Der Offset in Bytes vom Beginn von `data` bis zum Start der zu kopierenden Bilddaten. Wenn nicht angegeben, ist der Standardwert für `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die den Abstand in Bytes zwischen dem Beginn jeder Blockreihe (d.h. einer Reihe vollständiger Texelblöcke) und der darauf folgenden Blockreihe repräsentiert. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d.h. die Kopierhöhe oder -tiefe beträgt mehr als einen Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl von Blockreihen pro Einzelbild der Textur. `bytesPerRow` &times; `rowsPerImage` ergibt den Abstand in Bytes zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.
- `size`
  - : Ein Objekt oder Array, das den Umfang der Kopie angibt — die entfernte Ecke des Texturbereichs, in den die Daten geschrieben werden sollen. Zusammen mit `destination.origin` definiert dies den vollen Umfang des Bereichs, in den kopiert werden soll. Siehe `destination.origin` für Beispiele zur Objekt-/Array-Struktur.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen bei einem Aufruf von **`writeTexture()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Ziel [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziels [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziels [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Ziel [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen-oder-Schablonenformat](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 beträgt, entspricht die Unterressourcengröße `size`.
- Die Nutzung des Ziels [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) umfasst das `GPUTextureUsage.COPY_DST`-Flag.
- Die Abtastanzahl des Ziels [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `destination.origin.x` + die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist kleiner oder gleich der Breite der Unterressource, die auf das `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben wird.
- `destination.origin.y` + die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist kleiner oder gleich der Höhe der Unterressource, die auf das `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben wird.
- `destination.origin.z` + die `destination` [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) ist kleiner oder gleich der depthOrArrayLayers der Unterressource, die auf das `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben wird.
- Die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziels [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziels [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `destination.aspect` bezieht sich auf einen einzigen Aspekt des Ziels [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Bildkopierziel gemäß [Tiefen-oder-Schablonenformate](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Das `destination` ist ansonsten kompatibel mit dem [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).

## Beispiele

In [Efficiently rendering glTF models](https://toji.github.io/webgpu-gltf-case-study/) wird eine Funktion zum Erstellen einer Vollfarbtextur definiert:

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

Dies kann verwendet werden, um Standardtexturen für den Einsatz in Materialbibliotheken zu definieren:

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
