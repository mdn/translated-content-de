---
title: GPUTexture
slug: Web/API/GPUTexture
l10n:
  sourceCommit: 78c41c9b5211cc5bfba793c72a9adcac852e07f9
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUTexture`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) stellt einen Container dar, der zur Speicherung von 1D-, 2D- oder 3D-Datenarrays genutzt wird, wie beispielsweise Bilder, die in GPU-Rendering-Operationen verwendet werden.

Ein `GPUTexture`-Objekt wird mit der Methode [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) {{ReadOnlyInline}}
  - : Eine Zahl, die die Tiefe oder die Anzahl der Schichten der `GPUTexture` (in Pixeln oder Anzahl der Schichten) darstellt.
- [`dimension`](/de/docs/Web/API/GPUTexture/dimension) {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der die Dimension des Satzes der Texels für jede `GPUTexture`-Subressource darstellt.
- [`format`](/de/docs/Web/API/GPUTexture/format) {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der das Format der `GPUTexture` darstellt. Siehe den Abschnitt [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte. Siehe auch [Tier 1 and Tier 2 texture formats](/de/docs/Web/API/GPUDevice/createTexture#tier_1_and_tier_2_texture_formats).
- [`height`](/de/docs/Web/API/GPUTexture/height) {{ReadOnlyInline}}
  - : Eine Zahl, die die Höhe der `GPUTexture` in Pixeln darstellt.
- [`label`](/de/docs/Web/API/GPUTexture/label)
  - : Ein String, der eine Bezeichnung bietet, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
- [`mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Mip-Level der `GPUTexture` darstellt.
- [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Samples der `GPUTexture` darstellt.
- [`usage`](/de/docs/Web/API/GPUTexture/usage) {{ReadOnlyInline}}
  - : Die {{Glossary("bitwise_flags", "bitweisen Flags")}}, die die erlaubten Nutzungen der `GPUTexture` darstellen.
- [`width`](/de/docs/Web/API/GPUTexture/width) {{ReadOnlyInline}}
  - : Eine Zahl, die die Breite der `GPUTexture` in Pixeln darstellt.

## Instanz-Methoden

- [`createView()`](/de/docs/Web/API/GPUTexture/createView)
  - : Erstellt eine [`GPUTextureView`](/de/docs/Web/API/GPUTextureView), die eine spezifische Ansicht der `GPUTexture` darstellt.
- [`destroy()`](/de/docs/Web/API/GPUTexture/destroy)
  - : Zerstört die `GPUTexture`.

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur erstellt, die auf den Seiten eines Würfels verwendet wird, indem:

- Das Bild in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) geladen und ein Image-Bitmap mit [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) erstellt wird.
- Eine neue `GPUTexture` mit `createTexture()` erstellt wird.
- Das Image-Bitmap mittels [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture) in die Textur kopiert wird.

```js
// …
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
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
