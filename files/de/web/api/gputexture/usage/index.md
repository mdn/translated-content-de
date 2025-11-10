---
title: "GPUTexture: usage-Eigenschaft"
short-title: usage
slug: Web/API/GPUTexture/usage
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`usage`**-Eigenschaft der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle ist die {{Glossary("bitwise_flags", "bitweise Flaggen")}}, die die erlaubten Verwendungen der `GPUTexture` darstellt.

Dies wird über die `usage`-Eigenschaft im Deskriptionsobjekt festgelegt, das im ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird.

## Wert

Die bitweise Flaggen, die die ursprünglichen Verwendungen darstellen, die bei der ersten Erstellung der `GPUTexture` festgelegt wurden. Die zurückgegebene Zahl ist die Summe der dezimalen Werte, die die verschiedenen Flaggen darstellen, wie in der unten stehenden Tabelle zu sehen ist.

| Verwendungs-Flag                    | Beschreibung der Verwendung                                                                                                                                                                                                                                                                                                                                                                                                                                  | Hex-Äquivalent | Dezimal-Äquivalent |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ------------------ |
| `GPUTextureUsage.COPY_SRC`          | Die Textur kann als Quelle einer Kopieroperation verwendet werden, zum Beispiel als Quell-Argument eines [`copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer)-Aufrufs.                                                                                                                                                                                                                                                          | 0x01           | 1                  |
| `GPUTextureUsage.COPY_DST`          | Die Textur kann als Ziel einer Kopier-/Schreiboperation verwendet werden, z. B. als Ziel-Argument eines [`copyBufferToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToTexture)-Aufrufs.                                                                                                                                                                                                                                                           | 0x02           | 2                  |
| `GPUTextureUsage.RENDER_ATTACHMENT` | Die Textur kann als Farb- oder Tiefen-/Stencil-Anhang in einem Render-Durchgang verwendet werden, zum Beispiel als `view`-Eigenschaft des Deskriptionsobjekts in einem [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf.                                                                                                                                                                                                     | 0x10           | 16                 |
| `GPUTextureUsage.STORAGE_BINDING`   | Die Textur kann gebunden werden, um als Storage-Textur in einem Shader verwendet zu werden, zum Beispiel als Ressource in einem Bindungsgruppen-Eintrag bei der Erstellung einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (über [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), die einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrag mit einem spezifizierten Storage-Textur-Bindungs-Layout entspricht. | 0x08           | 8                  |
| `GPUTextureUsage.TEXTURE_BINDING`   | Die Textur kann gebunden werden, um als abgetastete Textur in einem Shader verwendet zu werden, zum Beispiel als Ressource in einem Bindungsgruppen-Eintrag bei der Erstellung einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (über [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), die einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrag mit einem spezifizierten Textur-Bindungs-Layout entspricht.     | 0x04           | 4                  |

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
