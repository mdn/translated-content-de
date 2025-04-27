---
title: GPUTexture
slug: Web/API/GPUTexture
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUTexture`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert einen Container, der dazu verwendet wird, 1D-, 2D- oder 3D-Datenarrays, wie z.B. Bilder, zu speichern, um sie in GPU-Rendering-Operationen zu verwenden.

Eine `GPUTexture`-Objektinstanz wird mit der Methode [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Tiefe oder die Anzahl der Schichten der `GPUTexture` angibt (Pixel oder Anzahl der Schichten).
- [`dimension`](/de/docs/Web/API/GPUTexture/dimension) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der die Dimension der Texelgruppe für jede `GPUTexture`-Subressource repräsentiert.
- [`format`](/de/docs/Web/API/GPUTexture/format) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der das Format der `GPUTexture` repräsentiert. Siehe den Abschnitt [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.
- [`height`](/de/docs/Web/API/GPUTexture/height) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Höhe der `GPUTexture` in Pixeln angibt.
- [`label`](/de/docs/Web/API/GPUTexture/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
- [`mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Mip-Ebenen der `GPUTexture` angibt.
- [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Samples der `GPUTexture` angibt.
- [`usage`](/de/docs/Web/API/GPUTexture/usage) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Die {{Glossary("bitwise_flags", "bitweis gesetzten Flags")}}, die die erlaubten Nutzungen der `GPUTexture` darstellen.
- [`width`](/de/docs/Web/API/GPUTexture/width) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Breite der `GPUTexture` in Pixeln angibt.

## Instanz-Methoden

- [`createView()`](/de/docs/Web/API/GPUTexture/createView) {{Experimental_Inline}}
  - : Erstellt eine [`GPUTextureView`](/de/docs/Web/API/GPUTextureView), die eine spezifische Ansicht der `GPUTexture` darstellt.
- [`destroy()`](/de/docs/Web/API/GPUTexture/destroy) {{Experimental_Inline}}
  - : Zerstört die `GPUTexture`.

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur erstellt, um sie auf den Flächen eines Würfels zu verwenden, indem:

- das Bild in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) geladen und ein Bild-Bitmap mit [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) erstellt wird.
- eine neue `GPUTexture` mit `createTexture()` erstellt wird.
- das Bild-Bitmap mit [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture) in die Textur kopiert wird.

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
