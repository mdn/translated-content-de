---
title: "GPUQueue: writeTexture() Methode"
short-title: writeTexture()
slug: Web/API/GPUQueue/writeTexture
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`writeTexture()`** Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue) Schnittstelle schreibt eine bereitgestellte Datenquelle in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Dies ist eine praktische Funktion, die eine Alternative zum Festlegen von Texturdaten über Pufferzuordnung und Puffer-zu-Textur-Kopien bietet. Sie ermöglicht es dem Benutzeragenten, die effizienteste Methode zum Kopieren der Daten zu bestimmen.

## Syntax

```js-nolint
writeTexture(destination, data, dataLayout, size)
```

### Parameter

- `destination`

  - : Ein Objekt, das die Texture-Subresource und den Ursprung definiert, um die Datenquelle zu schreiben. Dies kann die folgenden Eigenschaften enthalten:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der bestimmt, auf welche Aspekte der Textur die Daten geschrieben werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was alle oder beliebige von Farbe, Tiefe und Schablone bedeuten kann, abhängig von der Art des Formats, mit dem Sie es zu tun haben.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [Tiefen- oder Schablonenformats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonenaspekt eines Tiefen- oder Schablonenformats wird beschrieben.

        Wenn `aspect` weggelassen wird, nimmt es den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die das Mip-Map-Level der Textur repräsentiert, auf das die Daten geschrieben werden sollen. Wenn weggelassen, ist der Standardwert für `mipLevel` 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie spezifiziert — die minimale Ecke des Texturbereichs, auf die die Daten geschrieben werden sollen. Zusammen mit `size` definiert dies den gesamten Umfang des Bereichs, auf den kopiert werden soll. Die `x`, `y` und `z` Werte sind standardmäßig 0, wenn Teile oder alle von `origin` weggelassen werden.

        Folgendes ist ein Beispielarray:

        ```js
        origin: [0, 0, 0];
        ```

        Das Objekäquivalent würde so aussehen:

        ```js
        origin: {
          x: 0,
          y: 0,
          z: 0
        }
        ```

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) Objekt, das die Textur repräsentiert, auf die die Daten geschrieben werden sollen.

- `data`
  - : Ein Objekt, das die Datenquelle repräsentiert, die in die [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} sein.
- `dataLayout`
  - : Ein Objekt, das das Layout des Inhalts in `data` definiert. Mögliche Werte sind:
    - `offset` {{optional_inline}}
      - : Der Versatz, in Bytes, vom Beginn von `data` bis zum Anfang der Bilddaten, die kopiert werden sollen. Wenn weggelassen, ist der Standardwert für `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Schrittweite, in Bytes, zwischen dem Anfang jeder Blockreihe (d.h. einer Reihe vollständiger Texel-Blöcke) und der nachfolgenden Blockreihe repräsentiert. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d.h. die Kopierhöhe oder -tiefe ist mehr als ein Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro einzelnes Bild der Textur. `bytesPerRow` &times; `rowsPerImage` ergibt Ihnen die Schrittweite, in Bytes, zwischen dem Anfang jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.
- `size`
  - : Ein Objekt oder Array, das den Umfang der Kopie spezifiziert — die ferne Ecke des Texturbereichs, auf den die Daten geschrieben werden soll. Zusammen mit `destination.origin`, definiert dies den gesamten Bereich, der kopiert werden soll. Siehe `destination.origin` für Beispiele für die Objekt-/Arraystruktur.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Ziel- [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [Tiefen- oder Schablonenformat](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 ist, ist die Subresource-Größe gleich `size`.
- Die Ziel- [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) umfasst das `GPUTextureUsage.COPY_DST` Flag.
- Die Ziel- [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `destination.origin.x` + die Ziel- [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist kleiner oder gleich der Breite der Subresource, die in die Ziel- [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll.
- `destination.origin.y` + die Ziel- [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist kleiner oder gleich der Höhe der Subresource, die in die Ziel- [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll.
- `destination.origin.z` + die Ziel- [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) ist kleiner oder gleich der depthOrArrayLayers der Subresource, die in die Ziel- [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll.
- Die Ziel- [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die Ziel- [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `destination.aspect` bezieht sich auf einen einzelnen Aspekt des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Ziel für Bildkopien gemäß [Tiefen- oder Schablonenformaten](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Das `destination` ist ansonsten kompatibel mit dem [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).

## Beispiele

In [Effizientes Rendern von glTF-Modellen](https://toji.github.io/webgpu-gltf-case-study/) ist eine Funktion zum Erstellen einer Textur mit fester Farbe definiert:

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
