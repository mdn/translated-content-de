---
title: GPUTexture
slug: Web/API/GPUTexture
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUTexture`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) stellt einen Container dar, der verwendet wird, um 1D-, 2D- oder 3D-Datenarrays wie Bilder zu speichern, um sie in GPU-Rendering-Operationen zu nutzen.

Ein `GPUTexture`-Objekt wird mithilfe der Methode [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Tiefe oder die Anzahl der Schichten des `GPUTexture` (Pixel oder Anzahl der Schichten) darstellt.
- [`dimension`](/de/docs/Web/API/GPUTexture/dimension) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein aufgezählter Wert, der die Dimension des Satzes von Texeln für jede `GPUTexture`-Subresource darstellt.
- [`format`](/de/docs/Web/API/GPUTexture/format) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein aufgezählter Wert, der das Format des `GPUTexture` darstellt.
- [`height`](/de/docs/Web/API/GPUTexture/height) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Höhe des `GPUTexture` in Pixeln darstellt.
- [`label`](/de/docs/Web/API/GPUTexture/label) {{Experimental_Inline}}
  - : Eine Zeichenkette, die ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
- [`mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Mip-Level des `GPUTexture` darstellt.
- [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Proben des `GPUTexture` darstellt.
- [`usage`](/de/docs/Web/API/GPUTexture/usage) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Die [bitweisen Flags](/de/docs/Glossary/bitwise_flags), die die erlaubten Nutzungen des `GPUTexture` darstellen.
- [`width`](/de/docs/Web/API/GPUTexture/width) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Breite des `GPUTexture` in Pixeln darstellt.

## Instanz-Methoden

- [`createView()`](/de/docs/Web/API/GPUTexture/createView) {{Experimental_Inline}}
  - : Erstellt eine [`GPUTextureView`](/de/docs/Web/API/GPUTextureView), die eine spezifische Ansicht des `GPUTexture` darstellt.
- [`destroy()`](/de/docs/Web/API/GPUTexture/destroy) {{Experimental_Inline}}
  - : Zerstört das `GPUTexture`.

## Beispiele

In dem WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur erstellt, um sie auf den Flächen eines Würfels zu verwenden, indem:

- Das Bild in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) geladen und ein Bild-Bitmap mit [`createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) erstellt wird.
- Ein neues `GPUTexture` mit `createTexture()` erstellt wird.
- Das Bild-Bitmap in die Textur mit [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture) kopiert wird.

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
