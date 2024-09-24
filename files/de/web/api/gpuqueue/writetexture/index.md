---
title: "GPUQueue: Methode writeTexture()"
short-title: writeTexture()
slug: Web/API/GPUQueue/writeTexture
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`writeTexture()`**-Methode der {{domxref("GPUQueue")}}-Schnittstelle schreibt eine bereitgestellte Datenquelle in eine gegebene {{domxref("GPUTexture")}}.

Dies ist eine Komfortfunktion, die eine Alternative zum Festlegen von Texturdaten über das Puffermapping und Puffer-zu-Textur-Kopien bietet. Dadurch kann der Benutzer-Agent die effizienteste Methode zum Kopieren der Daten bestimmen.

## Syntax

```js-nolint
writeTexture(destination, data, dataLayout, size)
```

### Parameter

- `destination`

  - : Ein Objekt, das die Teilressource und den Ursprung der Textur definiert, in die die Datenquelle geschrieben werden soll, und folgende Eigenschaften enthalten kann:

    - `aspect` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, auf welche Aspekte der Textur die Daten geschrieben werden sollen. Mögliche Werte sind:

        - `"all"`
          - : Alle verfügbaren Aspekte des Texturformats werden beschrieben, was je nach Formattyp alle oder einen beliebigen Teil von Farbe, Tiefe und Schablone bedeuten kann.
        - `"depth-only"`
          - : Nur der Tiefenaspekt eines [depth-or-stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) wird beschrieben.
        - `"stencil-only"`
          - : Nur der Schablonen-Aspekt eines depth-or-stencil-Formats wird beschrieben.

        Wenn weggelassen, nimmt `aspect` den Wert `"all"` an.

    - `mipLevel` {{optional_inline}}
      - : Eine Zahl, die das Mip-Map-Level der Textur darstellt, in die die Daten geschrieben werden sollen. Wenn weggelassen, ist der Standardwert für `mipLevel` 0.
    - `origin` {{optional_inline}}

      - : Ein Objekt oder Array, das den Ursprung der Kopie angibt — die minimale Ecke des Texturbereichs, in den die Daten geschrieben werden sollen. Zusammen mit `size` definiert dies das volle Ausmaß des Bereichs, der kopiert werden soll. Die `x`-, `y`- und `z`-Werte sind standardmäßig 0, sofern `origin` ganz oder teilweise weggelassen wird.

        Folgendes ist ein Beispiel-Array:

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
      - : Ein {{domxref("GPUTexture")}}-Objekt, das die Textur darstellt, in die die Daten geschrieben werden sollen.

- `data`
  - : Ein Objekt, das die Datenquelle repräsentiert, die in die {{domxref("GPUTexture")}} geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein.
- `dataLayout`
  - : Ein Objekt, das das Layout des Inhalts in `data` definiert. Mögliche Werte sind:
    - `offset` {{optional_inline}}
      - : Der Versatz in Bytes vom Anfang von `data` bis zum Beginn der zu kopierenden Bilddaten. Wenn weggelassen, beträgt der Standardwert für `offset` 0.
    - `bytesPerRow` {{optional_inline}}
      - : Eine Zahl, die die Schrittweite in Bytes zwischen dem Beginn jeder Blockreihe (d. h. einer Reihe vollständiger Texelblöcke) und der nächsten Blockreihe darstellt. Dies ist erforderlich, wenn es mehrere Blockreihen gibt (d. h. die Kopierhöhe oder -tiefe ist mehr als ein Block).
    - `rowsPerImage` {{optional_inline}}
      - : Die Anzahl der Blockreihen pro Einzelbild der Textur. `bytesPerRow` &times; `rowsPerImage` ergibt die Schrittweite in Bytes zwischen dem Beginn jedes vollständigen Bildes. Dies ist erforderlich, wenn es mehrere Bilder zu kopieren gibt.
- `size`
  - : Ein Objekt oder Array, das das Ausmaß der Kopie angibt — die entgegengesetzte Ecke des Texturbereichs, in den die Daten geschrieben werden sollen. Zusammen mit `destination.origin` definiert dies das vollständige Ausmaß des zu kopierenden Bereichs. Siehe `destination.origin` für Beispiele der Objekt/Array-Struktur.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`writeTexture()`** erfüllt sein, andernfalls wird ein {{domxref("GPUValidationError")}} generiert, und die {{domxref("GPUQueue")}} wird ungültig:

- `mipLevel` ist kleiner als die `mipLevelCount` der Ziel-{{domxref("GPUTexture")}}.
- `origin.x` ist ein Vielfaches der Texelblockbreite des Ziel-{{domxref("GPUTexture.format")}}.
- `origin.y` ist ein Vielfaches der Texelblockhöhe des Ziel-{{domxref("GPUTexture.format")}}.
- Wenn das Ziel-{{domxref("GPUTexture.format")}} ein [depth-or-stencil-Format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) ist oder {{domxref("GPUTexture.sampleCount")}} größer als 1 ist, ist die Teilressourcengröße gleich `size`.
- Die Verwendung des Ziel-{{domxref("GPUTexture")}} umfasst das `GPUTextureUsage.COPY_DST`-Flag.
- Der {{domxref("GPUTexture.sampleCount")}} des Ziels ist 1.
- `destination.origin.x` + die `destination` {{domxref("GPUTexture.width")}} ist kleiner oder gleich der Breite der Teilressource, die in die `destination` {{domxref("GPUTexture")}} geschrieben werden soll.
- `destination.origin.y` + die `destination` {{domxref("GPUTexture.height")}} ist kleiner oder gleich der Höhe der Teilressource, die in die `destination` {{domxref("GPUTexture")}} geschrieben werden soll.
- `destination.origin.z` + die `destination` {{domxref("GPUTexture.depthOrArrayLayers")}} ist kleiner oder gleich der depthOrArrayLayers der Teilressource, die in die `destination` {{domxref("GPUTexture")}} geschrieben werden soll.
- Die `destination` {{domxref("GPUTexture.width")}} ist ein Vielfaches der Texelblockbreite des Ziel-{{domxref("GPUTexture.format")}}.
- Die `destination` {{domxref("GPUTexture.height")}} ist ein Vielfaches der Texelblockhöhe des Ziel-{{domxref("GPUTexture.format")}}.
- `destination.aspect` bezieht sich auf einen einzelnen Aspekt des Ziel-{{domxref("GPUTexture.format")}}.
- Dieser Aspekt ist ein gültiges Ziel für Bildkopien entsprechend den [depth-or-stencil-Formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- Die `destination` ist ansonsten kompatibel mit dem {{domxref("GPUTexture.format")}}.

## Beispiele

In [Effizientes Rendern von glTF-Modellen](https://toji.github.io/webgpu-gltf-case-study/) wird eine Funktion zum Erstellen einer einfarbigen Textur definiert:

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
