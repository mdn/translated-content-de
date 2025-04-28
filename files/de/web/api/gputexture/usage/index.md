---
title: "GPUTexture: usage-Eigenschaft"
short-title: usage
slug: Web/API/GPUTexture/usage
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`usage`** schreibgeschützte Eigenschaft der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle sind die {{Glossary("bitwise_flags", "bitweisen Flags")}}, die die erlaubten Verwendungen der `GPUTexture` darstellen.

Diese wird über die `usage`-Eigenschaft im Descriptor-Objekt gesetzt, das beim ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird.

## Wert

Die bitweisen Flags repräsentieren die ursprünglichen Verwendungen, die bei der ersten Erstellung der `GPUTexture` festgelegt wurden. Die zurückgegebene Zahl ist die Summe der Dezimalwerte, die die verschiedenen Flags darstellen, wie in der nachstehenden Tabelle dargestellt.

| Nutzungs-Flag                       | Beschreibung der Nutzung                                                                                                                                                                                                                                                                                                                                                                                                    | Hex-Äquivalent | Dezimal-Äquivalent |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------ |
| `GPUTextureUsage.COPY_SRC`          | Die Textur kann als Quelle einer Kopieroperation verwendet werden, beispielsweise als Quellargument eines [`copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer)-Aufrufs.                                                                                                                                                                                                                        | 0x01           | 1                  |
| `GPUTextureUsage.COPY_DST`          | Die Textur kann als Ziel einer Kopier-/Schreiboperation verwendet werden, beispielsweise als Zielargument eines [`copyBufferToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToTexture)-Aufrufs.                                                                                                                                                                                                                  | 0x02           | 2                  |
| `GPUTextureUsage.RENDER_ATTACHMENT` | Die Textur kann als Farb- oder Tiefen-/Stencil-Anhang in einem Renderdurchlauf verwendet werden, beispielsweise als `view`-Eigenschaft des Descriptor-Objekts in einem [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf.                                                                                                                                                                    | 0x10           | 16                 |
| `GPUTextureUsage.STORAGE_BINDING`   | Die Textur kann als Speichertextur in einem Shader gebunden werden, zum Beispiel als Ressource in einem Bind-Group-Eintrag beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (über [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), die einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrag mit einem spezifizierten Speichertextur-Bindings-Layout entspricht. | 0x08           | 8                  |
| `GPUTextureUsage.TEXTURE_BINDING`   | Die Textur kann als abgetastete Textur in einem Shader gebunden werden, zum Beispiel als Ressource in einem Bind-Group-Eintrag beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (über [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), die einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrag mit einem spezifizierten Textur-Bindings-Layout entspricht.     | 0x04           | 4                  |

## Beispiele

```js
// …

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
