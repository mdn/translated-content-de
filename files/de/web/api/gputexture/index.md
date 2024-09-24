---
title: GPUTexture
slug: Web/API/GPUTexture
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`GPUTexture`**-Interface der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert einen Container zur Speicherung von 1D-, 2D- oder 3D-Datenarrays, wie Bildern, die in GPU-Rendering-Operationen verwendet werden.

Ein `GPUTexture`-Objekt wird mithilfe der {{domxref("GPUDevice.createTexture()")}}-Methode erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("GPUTexture.depthOrArrayLayers", "depthOrArrayLayers")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Tiefe oder die Anzahl der Schichten des `GPUTexture` darstellt (Pixel oder Anzahl der Schichten).
- {{domxref("GPUTexture.dimension", "dimension")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der die Dimension der Menge von Texeln für jede `GPUTexture`-Subressource darstellt.
- {{domxref("GPUTexture.format", "format")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der das Format des `GPUTexture` darstellt.
- {{domxref("GPUTexture.height", "height")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Höhe des `GPUTexture` in Pixeln darstellt.
- {{domxref("GPUTexture.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.
- {{domxref("GPUTexture.mipLevelCount", "mipLevelCount")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Mip-Level des `GPUTexture` darstellt.
- {{domxref("GPUTexture.sampleCount", "sampleCount")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Abtastanzahl des `GPUTexture` darstellt.
- {{domxref("GPUTexture.usage", "usage")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Die {{glossary("bitweisen Flags")}}, die die erlaubte Nutzung des `GPUTexture` darstellen.
- {{domxref("GPUTexture.width", "width")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Breite des `GPUTexture` in Pixeln darstellt.

## Instanzmethoden

- {{domxref("GPUTexture.createView", "createView()")}} {{Experimental_Inline}}
  - : Erstellt eine {{domxref("GPUTextureView")}}, die eine spezifische Ansichtsweise des `GPUTexture` repräsentiert.
- {{domxref("GPUTexture.destroy", "destroy()")}} {{Experimental_Inline}}
  - : Zerstört das `GPUTexture`.

## Beispiele

Im WebGPU-Beispiel [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird eine Textur erstellt, die auf den Flächen eines Würfels verwendet werden soll, indem:

- Das Bild in ein {{domxref("HTMLImageElement")}} geladen und ein Bild-Bitmap mit {{domxref("createImageBitmap()")}} erstellt wird.
- Ein neues `GPUTexture` mit `createTexture()` erstellt wird.
- Das Bild-Bitmap mit {{domxref("GPUQueue.copyExternalImageToTexture()")}} in die Textur kopiert wird.

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
