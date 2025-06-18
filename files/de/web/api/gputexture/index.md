---
title: GPUTexture
slug: Web/API/GPUTexture
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUTexture`**-Interface der [WebGPU-API](/de/docs/Web/API/WebGPU_API) repräsentiert einen Container, der zur Speicherung von 1D-, 2D- oder 3D-Datenarrays, wie z.B. Bildern, verwendet wird, um sie in GPU-Rendering-Operationen zu nutzen.

Ein `GPUTexture`-Objekt wird mit der Methode [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) {{ReadOnlyInline}}
  - : Eine Zahl, die die Tiefe oder die Anzahl der Schichten des `GPUTexture` darstellt (Pixel oder Anzahl der Schichten).
- [`dimension`](/de/docs/Web/API/GPUTexture/dimension) {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der die Dimension der Texelmenge für jede `GPUTexture`-Subressource darstellt.
- [`format`](/de/docs/Web/API/GPUTexture/format) {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der das Format des `GPUTexture` repräsentiert. Siehe im Abschnitt [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.
- [`height`](/de/docs/Web/API/GPUTexture/height) {{ReadOnlyInline}}
  - : Eine Zahl, die die Höhe des `GPUTexture` in Pixeln darstellt.
- [`label`](/de/docs/Web/API/GPUTexture/label)
  - : Ein String, der ein Label zur Verfügung stellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
- [`mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Mip-Level des `GPUTexture` darstellt.
- [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Samples des `GPUTexture` darstellt.
- [`usage`](/de/docs/Web/API/GPUTexture/usage) {{ReadOnlyInline}}
  - : Die {{Glossary("bitwise_flags", "bitweisen Flags")}}, die die erlaubten Nutzungen des `GPUTexture` darstellen.
- [`width`](/de/docs/Web/API/GPUTexture/width) {{ReadOnlyInline}}
  - : Eine Zahl, die die Breite des `GPUTexture` in Pixeln darstellt.

## Instanz-Methoden

- [`createView()`](/de/docs/Web/API/GPUTexture/createView)
  - : Erstellt eine [`GPUTextureView`](/de/docs/Web/API/GPUTextureView), die eine spezifische Ansicht des `GPUTexture` repräsentiert.
- [`destroy()`](/de/docs/Web/API/GPUTexture/destroy)
  - : Zerstört das `GPUTexture`.

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/), wird eine Textur, die auf den Flächen eines Würfels verwendet werden soll, durch folgende Schritte erstellt:

- Laden des Bildes in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) und Erstellen eines Image-Bitmaps mit [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap).
- Erstellen eines neuen `GPUTexture` mittels `createTexture()`.
- Kopieren des Image-Bitmaps in die Textur mittels [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture).

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
