---
title: "GPUQueue: writeTexture() Methode"
short-title: writeTexture()
slug: Web/API/GPUQueue/writeTexture
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`writeTexture()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle schreibt eine bereitgestellte Datenquelle in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Dies ist eine Komfortfunktion, die eine Alternative zum Festlegen von Texturdaten über Puffer-Mapping und Puffer-zu-Textur-Kopien bietet. Es ermöglicht dem Benutzeragenten, die effizienteste Methode zum Kopieren der Daten zu bestimmen.

## Syntax

```js-nolint
writeTexture(destination, data, dataLayout, size)
```

### Parameter

- `destination`

  - : Ein Objekt, das die Subressource und den Ursprung der Textur definiert, um die Datenquelle zu beschreiben. Dieses kann die folgenden Eigenschaften enthalten:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, auf welche Aspekte der Textur die Daten geschrieben werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Format alle oder beliebige Kombinationen aus Farbe, Tiefe und Schablone bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonenaspekt eines depth-or-stencil Formats wird beschrieben.

        Wenn ausgelassen, erhält `aspect` den Wert `"all"`.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die die Mip-Map-Ebene der Textur darstellt, auf die die Daten geschrieben werden sollen. Wird `mipLevel` ausgelassen, ist der Standardwert 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt - die minimale Ecke des Texturbereichs, um die Daten zu schreiben. Zusammen mit `size` definiert dies das volle Ausmaß des zu kopierenden Bereichs. Die `x`, `y`, und `z` Werte sind 0, wenn `origin` ausgelassen wird.

        Beispielsweise können Sie ein Array wie `[0, 0, 0]` oder sein entsprechendes Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `data`
  - : Ein Objekt, das die Datenquelle darstellt, die in die [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein.
- `dataLayout`
  - : Ein Objekt, das das Layout des in `data` enthaltenen Inhalts definiert. Mögliche Werte sind:
    - `offset` {{optional_inline}}
      - : Der Versatz in Bytes vom Beginn von `data` bis zum Start der zu kopierenden Bilddaten. Wird `offset` ausgelassen, beträgt der Standardwert 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die den Abstand in Bytes zwischen dem Beginn jeder Blockreihe (d.h. eine Reihe von vollständigen Texelblöcken) und der nachfolgenden Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen (d.h. die Kopierhöhe oder -tiefe ist mehr als ein Block) gibt.
    - `rowsPerImage` {{optional_inline}}
      - : Der Anzahl der Blockreihen pro einzelnes Bild der Textur. `bytesPerRow` &times; `rowsPerImage` ergibt den Abstand in Bytes zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn es mehrere Bilder zum Kopieren gibt.
- `size`
  - : Ein Objekt oder Array, das das Ausmaß der Kopie angibt – die ferne Ecke des Texturbereichs, die die Daten beschreibt. Zusammen mit `destination.origin` definiert dies das volle Ausmaß des zu kopierenden Bereichs. Siehe `destination.origin` für Beispiele zur Struktur des Objekts/Arrays.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Beim Aufruf von **`writeTexture()`** müssen die folgenden Kriterien erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Zielgröße [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) mehr als 1 beträgt, entspricht die Subressourcengröße `size`.
- Der Ziel- [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) enthält das `GPUTextureUsage.COPY_DST`-Flag.
- Der Ziel- [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) beträgt 1.
- `destination.origin.x` + die Ziel- [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist kleiner oder gleich der Breite der Subressource, die auf die Ziel- [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben wird.
- `destination.origin.y` + die Ziel- [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist kleiner oder gleich der Höhe der Subressource, die auf die Ziel- [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben wird.
- `destination.origin.z` + die Ziel- [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) ist kleiner oder gleich der depthOrArrayLayers der Subressource, die auf die Ziel- [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben wird.
- Die Ziel- [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die Ziel- [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `destination.aspect` bezieht sich auf einen einzelnen Aspekt des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Ziel für das Kopieren von Bildern gemäß [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `destination` ist ansonsten mit dem [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) kompatibel.

## Beispiele

In [Effizientes Rendern von glTF-Modellen](https://toji.github.io/webgpu-gltf-case-study/) wird eine Funktion definiert, um eine Vollfarbtextur zu erstellen:

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
