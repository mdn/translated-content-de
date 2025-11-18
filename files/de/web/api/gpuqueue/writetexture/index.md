---
title: "GPUQueue: writeTexture() Methode"
short-title: writeTexture()
slug: Web/API/GPUQueue/writeTexture
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`writeTexture()`** Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue) Schnittstelle schreibt eine bereitgestellte Datenquelle in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

Dies ist eine Komfortfunktion, die eine Alternative zum Setzen von Texturdaten über Pufferzuordnung und Puffer-zu-Textur-Kopien bietet. Sie lässt den Benutzeragenten den effizientesten Weg bestimmen, um die Daten zu kopieren.

## Syntax

```js-nolint
writeTexture(destination, data, dataLayout, size)
```

### Parameter

- `destination`
  - : Ein Objekt, das die Textur-Subresource und den Ursprung definiert, um die Datenquelle zu schreiben. Es kann folgende Eigenschaften enthalten:
    - `aspect` {{optional_inline}}
      - : Ein enumerierter Wert, der definiert, welche Aspekte der Textur die Daten geschrieben werden sollen. Mögliche Werte sind:
        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Formattyp Farbe, Tiefe und Stencil umfassen kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Stencil-Aspekt eines Depth-Or-Stencil-Formats wird beschrieben.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die das Mip-Map-Level der Textur angibt, zu dem die Daten geschrieben werden sollen. Wenn weggelassen, ist der Standardwert für `mipLevel` 0.
    - `origin` {{optional_inline}}
      - : Ein Objekt oder Array, das den Ursprung der Kopie spezifiziert — die minimale Ecke der Texturregion, zu der die Daten geschrieben werden sollen. Zusammen mit `size` definiert dies den vollständigen Bereich der zu kopierenden Region. Die `x`, `y` und `z` Werte haben den Standardwert 0, falls `origin` teilweise oder vollständig weggelassen wird.

        Zum Beispiel können Sie ein Array wie `[0, 0, 0]` oder das entsprechende Objekt `{ x: 0, y: 0, z: 0 }` übergeben.

    - `texture`
      - : Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `data`
  - : Ein Objekt, das die Datenquelle repräsentiert, die in die [`GPUTexture`](/de/docs/Web/API/GPUTexture) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} sein.
- `dataLayout`
  - : Ein Objekt, das das Layout des Inhalts in `data` definiert. Mögliche Werte sind:
    - `offset` {{optional_inline}}
      - : Der Offset in Bytes vom Beginn von `data` bis zum Start der zu kopierenden Bilddaten. Wenn weggelassen, ist der Standardwert für `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die den Abstand in Bytes zwischen dem Beginn jeder Blockreihe (d.h. einer Reihe vollständiger Texelblöcke) und der nächsten Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d.h. die Kopierhöhe oder -tiefe beträgt mehr als einen Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro Einzelbild der Textur. `bytesPerRow` &times; `rowsPerImage` ergibt die Abfolge in Bytes zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn mehrere Bilder kopiert werden sollen.
- `size`
  - : Ein Objekt oder Array, das das Ausmaß der Kopie spezifiziert — die entfernte Ecke der Texturregion, in die die Daten geschrieben werden sollen. Zusammen mit `destination.origin` definiert dies den vollständigen Bereich der zu kopierenden Region. Siehe `destination.origin` für Beispiele der Objekt-/Arraystruktur.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `mipLevel` ist kleiner als die Ziel- [`GPUTexture.mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount).
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Wenn das Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) ein [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) größer als 1 ist, muss die Subresourcengröße gleich `size` sein.
- Das Ziel- [`GPUTexture.usage`](/de/docs/Web/API/GPUTexture/usage) schließt das `GPUTextureUsage.COPY_DST` Flag ein.
- Das Ziel- [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
- `destination.origin.x` + die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist kleiner als oder gleich der Breite der zu beschreibenden Subresource zur `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture).
- `destination.origin.y` + die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist kleiner als oder gleich der Höhe der zu beschreibenden Subresource zur `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture).
- `destination.origin.z` + die `destination` [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) ist kleiner als oder gleich der depthOrArrayLayers der zu beschreibenden Subresource zur `destination` [`GPUTexture`](/de/docs/Web/API/GPUTexture).
- Die `destination` [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) ist ein Vielfaches der Texelblockbreite des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Die `destination` [`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height) ist ein Vielfaches der Texelblockhöhe des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- `destination.aspect` bezieht sich auf einen einzelnen Aspekt des Ziel- [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format).
- Dieser Aspekt ist ein gültiges Ziel für Bildkopien gemäß den [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `destination` ist ansonsten mit dem [`GPUTexture.format`](/de/docs/Web/API/GPUTexture/format) kompatibel.

## Beispiele

In [Efficiently rendering glTF models](https://toji.github.io/webgpu-gltf-case-study/) wird eine Funktion zum Erstellen einer einfarbigen Textur definiert:

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

Diese kann verwendet werden, um Standardtexturen für die Verwendung in Materialbibliotheken zu definieren:

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
