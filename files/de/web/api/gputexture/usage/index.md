---
title: "GPUTexture: usage-Eigenschaft"
short-title: usage
slug: Web/API/GPUTexture/usage
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`usage`**-Eigenschaft des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interface repräsentiert die [bitweise Flags](/de/docs/Glossary/bitwise_flags), die die erlaubten Verwendungen der `GPUTexture` darstellen.

Diese wird über die `usage`-Eigenschaft im Deskriptorobjekt gesetzt, das in den ursprünglichen [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Aufruf übergeben wird.

## Wert

Die bitweisen Flags repräsentieren die ursprünglichen Nutzungen, die beim ersten Erstellen der `GPUTexture` festgelegt wurden. Die zurückgegebene Zahl ist die Summe der Dezimalwerte, die die verschiedenen Flags darstellen, wie in der untenstehenden Tabelle zu sehen.

| Nutzungsflag                        | Nutzungsbeschreibung                                                                                                                                                                                                                                                                                                                                                                                                                | Hex equiv. | Dezimal equiv. |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------- |
| `GPUTextureUsage.COPY_SRC`          | Die Textur kann als Quelle eines Kopiervorgangs verwendet werden, zum Beispiel als Quellargument eines [`copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer)-Aufrufs.                                                                                                                                                                                                                                   | 0x01       | 1              |
| `GPUTextureUsage.COPY_DST`          | Die Textur kann als Ziel eines Kopier-/Schreibvorgangs verwendet werden, zum Beispiel als Zielargument eines [`copyBufferToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToTexture)-Aufrufs.                                                                                                                                                                                                                             | 0x02       | 2              |
| `GPUTextureUsage.RENDER_ATTACHMENT` | Die Textur kann als Farb- oder Tiefen-/Stencil-Anhang in einem Renderdurchgang verwendet werden, zum Beispiel als die `view`-Eigenschaft des Deskriptorobjekts in einem [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf.                                                                                                                                                                           | 0x10       | 16             |
| `GPUTextureUsage.STORAGE_BINDING`   | Die Textur kann als Speichertextur in einem Shader gebunden werden, zum Beispiel als Ressource in einem Bindungsgruppen-Eintrag, wenn ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) erstellt wird (über [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), das einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrag mit einem spezifizierten Speichertextur-Bindungs-Layout entspricht. | 0x08       | 8              |
| `GPUTextureUsage.TEXTURE_BINDING`   | Die Textur kann als abgetastete Textur in einem Shader gebunden werden, zum Beispiel als Ressource in einem Bindungsgruppen-Eintrag, wenn ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) erstellt wird (über [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), das einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrag mit einem spezifizierten Texturbinde-Layout entspricht.         | 0x04       | 4              |

## Beispiele

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.usage); // 16
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
