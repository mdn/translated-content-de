---
title: "GPUTexture: Attribut usage"
short-title: usage
slug: Web/API/GPUTexture/usage
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`usage`** schreibgeschützte Eigenschaft der {{domxref("GPUTexture")}}-Schnittstelle ist die {{glossary("Bit-Flags")}}-Darstellung der erlaubten Verwendungen der `GPUTexture`.

Dies wird über die `usage`-Eigenschaft im Beschreibungsobjekt gesetzt, das beim ursprünglichen Aufruf von {{domxref("GPUDevice.createTexture()")}} übergeben wird.

## Wert

Die Bit-Flags, die die ursprünglichen Verwendungen darstellen, die bei der ersten Erstellung der `GPUTexture` festgelegt wurden. Die zurückgegebene Zahl ist die Summe der Dezimalwerte, die die verschiedenen Flags repräsentieren, wie in der untenstehenden Tabelle gezeigt.

| Nutzungsflagge                     | Nutzungsbeschreibung                                                                                                                                                                                                                                                                                                                                  | Hex-Äquivalent | Dezimal-Äquivalent |
| -----------------------------------| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------ |
| `GPUTextureUsage.COPY_SRC`         | Die Textur kann als Quelle einer Kopieroperation verwendet werden, zum Beispiel als Quellargument eines {{domxref("GPUCommandEncoder.copyTextureToBuffer", "copyTextureToBuffer()")}} Aufrufs.                                                                                                                                                        | 0x01           | 1                  |
| `GPUTextureUsage.COPY_DST`         | Die Textur kann als Ziel einer Kopier-/Schreiboperation verwendet werden, zum Beispiel als Zielargument eines {{domxref("GPUCommandEncoder.copyBufferToTexture", "copyBufferToTexture()")}} Aufrufs.                                                                                                                                                 | 0x02           | 2                  |
| `GPUTextureUsage.RENDER_ATTACHMENT`| Die Textur kann als Farb- oder Tiefen-/Stencil-Anhang in einem Renderpass verwendet werden, zum Beispiel als die `view`-Eigenschaft des Beschreibungsobjekts in einem {{domxref("GPUCommandEncoder.beginRenderPass", "beginRenderPass()")}} Aufruf.                                                                                          | 0x10           | 16                 |
| `GPUTextureUsage.STORAGE_BINDING`  | Die Textur kann für die Verwendung als Speichertextur in einem Shader gebunden werden, zum Beispiel als Ressource in einem Bind-Group-Eintrag beim Erstellen einer {{domxref("GPUBindGroup")}} (via {{domxref("GPUDevice.createBindGroup", "createBindGroup()")}}), die einem {{domxref("GPUBindGroupLayout")}}-Eintrag mit einer angegebenen Speichertextur-Bindungslayout entspricht. | 0x08           | 8                  |
| `GPUTextureUsage.TEXTURE_BINDING`  | Die Textur kann für die Verwendung als abgetastete Textur in einem Shader gebunden werden, zum Beispiel als Ressource in einem Bind-Group-Eintrag beim Erstellen einer {{domxref("GPUBindGroup")}} (via {{domxref("GPUDevice.createBindGroup", "createBindGroup()")}}), die einem {{domxref("GPUBindGroupLayout")}}-Eintrag mit einer angegebenen Textur-Bindungslayout entspricht.         | 0x04           | 4                  |

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
