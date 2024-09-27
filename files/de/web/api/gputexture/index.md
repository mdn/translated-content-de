---
title: GPUTexture
slug: Web/API/GPUTexture
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUTexture`**-Schnittstelle der [WebGPU-API](/de/docs/Web/API/WebGPU_API) stellt einen Container dar, der verwendet wird, um 1D-, 2D- oder 3D-Datenarrays, wie Bilder, zur Verwendung in GPU-Rendering-Operationen zu speichern.

Ein `GPUTexture`-Objekt wird mithilfe der Methode [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Tiefe oder die Anzahl der Ebenen der `GPUTexture` (Pixel oder Anzahl der Ebenen) repräsentiert.
- [`dimension`](/de/docs/Web/API/GPUTexture/dimension) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der die Dimension des Satzes von Texeln für jede `GPUTexture`-Subresource repräsentiert.
- [`format`](/de/docs/Web/API/GPUTexture/format) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der das Format der `GPUTexture` repräsentiert.
- [`height`](/de/docs/Web/API/GPUTexture/height) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Höhe der `GPUTexture` in Pixeln repräsentiert.
- [`label`](/de/docs/Web/API/GPUTexture/label) {{Experimental_Inline}}
  - : Eine Zeichenkette, die ein Etikett bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
- [`mipLevelCount`](/de/docs/Web/API/GPUTexture/mipLevelCount) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Mip-Level der `GPUTexture` repräsentiert.
- [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Abtastungen der `GPUTexture` repräsentiert.
- [`usage`](/de/docs/Web/API/GPUTexture/usage) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Die [Bitmaskenflags](/de/docs/Glossary/bitwise_flags), die die erlaubten Nutzungen der `GPUTexture` darstellen.
- [`width`](/de/docs/Web/API/GPUTexture/width) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Breite der `GPUTexture` in Pixeln repräsentiert.

## Instanz-Methoden

- [`createView()`](/de/docs/Web/API/GPUTexture/createView) {{Experimental_Inline}}
  - : Erstellt eine [`GPUTextureView`](/de/docs/Web/API/GPUTextureView), die eine spezifische Ansicht der `GPUTexture` darstellt.
- [`destroy()`](/de/docs/Web/API/GPUTexture/destroy) {{Experimental_Inline}}
  - : Zerstört die `GPUTexture`.

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur erstellt, die auf den Flächen eines Würfels verwendet werden soll, indem:

- Das Bild in ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) geladen und ein Bild-Bitmap mithilfe von [`createImageBitmap()`](/de/docs/Web/API/CreateImageBitmap) erstellt wird.
- Eine neue `GPUTexture` mithilfe von `createTexture()` erstellt wird.
- Das Bild-Bitmap in die Textur mithilfe von [`GPUQueue.copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture) kopiert wird.

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
