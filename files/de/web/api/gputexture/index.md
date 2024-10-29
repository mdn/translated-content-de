---
title: GPUTexture
slug: Web/API/GPUTexture
l10n:
  sourceCommit: 2379747e3cefc009c6a00ec52e88d66ff15c5397
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUTexture`** Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert einen Container, der zur Speicherung von 1D-, 2D- oder 3D-Datenarrays, wie z.B. Bildern, verwendet wird, um sie in GPU-Rendering-Operationen zu nutzen.

Eine `GPUTexture` Objektinstanz wird mithilfe der Methode [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Tiefe oder die Anzahl der Schichten der `GPUTexture` angibt (Pixel oder Anzahl der Schichten).
- [`dimension`](/de/docs/Web/API/GPUTexture/dimension) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der die Dimension des Texel-Sets für jede `GPUTexture`-Subressource darstellt.
- [`format`](/de/docs/Web/API/GPUTexture/format) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der das Format der `GPUTexture` darstellt. Siehe den Abschnitt [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.
- [`height`](/de/docs/Web/API/GPUTexture/height) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Höhe der `GPUTexture` in Pixeln angibt.
- [`label`](/de/docs/Web/API/GPUTexture/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das zur Identifikation des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
- [`mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Mip-Level der `GPUTexture` darstellt.
- [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Probenanzahl der `GPUTexture` darstellt.
- [`usage`](/de/docs/Web/API/GPUTexture/usage) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Die {{Glossary("bitwise_flags", "bitwise flags")}}, die die erlaubten Verwendungen der `GPUTexture` darstellen.
- [`width`](/de/docs/Web/API/GPUTexture/width) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Breite der `GPUTexture` in Pixeln angibt.

## Instanz-Methoden

- [`createView()`](/de/docs/Web/API/GPUTexture/createView) {{Experimental_Inline}}
  - : Erstellt eine [`GPUTextureView`](/de/docs/Web/API/GPUTextureView), die eine spezifische Ansicht der `GPUTexture` darstellt.
- [`destroy()`](/de/docs/Web/API/GPUTexture/destroy) {{Experimental_Inline}}
  - : Zerstört die `GPUTexture`.

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur für die Flächen eines Würfels erstellt durch:

- Laden des Bildes in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) und Erstellen eines Bild-Bitmaps mit [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap).
- Erstellen einer neuen `GPUTexture` mit `createTexture()`.
- Kopieren des Bild-Bitmaps in die Textur mit [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture).

```js
//...
let cubeTexture;
{
  const img = document.createElement("img");

  img.src = new URL(
    "../../../assets/img/Di-3d.png",
    import.meta.url,
  ).toString();

  await img.decode();

  const imageBitmap = await createImageBitmap(img);

  cubeTexture = device.createTexture({
    size: [imageBitmap.width, imageBitmap.height, 1],
    format: "rgba8unorm",
    usage:
      GPUTextureUsage.TEXTURE_BINDING |
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });

  device.queue.copyExternalImageToTexture(
    { source: imageBitmap },
    { texture: cubeTexture },
    [imageBitmap.width, imageBitmap.height],
  );
}
//...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
