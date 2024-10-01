---
title: "GPUTexture: usage-Eigenschaft"
short-title: usage
slug: Web/API/GPUTexture/usage
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`usage`** schreibgeschützte Eigenschaft des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interfaces sind die {{Glossary("bitwise_flags", "bitweisen Flags")}}, die die erlaubten Verwendungen der `GPUTexture` darstellen.

Dies wird über die `usage`-Eigenschaft im Deskriptor-Objekt gesetzt, das in den ursprünglichen Aufruf [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird.

## Wert

Die bitweisen Flags, die die ursprünglichen Verwendungen darstellen, die festgelegt wurden, als die `GPUTexture` zuerst erstellt wurde. Die zurückgegebene Zahl ist die Summe der Dezimalwerte, die die verschiedenen Flags darstellen, wie in der Tabelle unten dargestellt.

| Nutzungs-Flag                       | Nutzungsbeschreibung                                                                                                                                                                                                                                                                                                                                                                                                                               | Hex-Äquivalent | Dezimal-Äquivalent |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------ |
| `GPUTextureUsage.COPY_SRC`          | Die Textur kann als Quelle einer Kopieroperation verwendet werden, zum Beispiel als Quellargument eines Aufrufs von [`copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer).                                                                                                                                                                                                                                             | 0x01           | 1                  |
| `GPUTextureUsage.COPY_DST`          | Die Textur kann als Ziel einer Kopier/Schreiboperation verwendet werden, zum Beispiel als Zielargument eines Aufrufs von [`copyBufferToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToTexture).                                                                                                                                                                                                                                        | 0x02           | 2                  |
| `GPUTextureUsage.RENDER_ATTACHMENT` | Die Textur kann als Farb- oder Tiefen-/Stencil-Anhang in einem Renderpass verwendet werden, zum Beispiel als `view`-Eigenschaft des Deskriptor-Objekts in einem Aufruf von [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass).                                                                                                                                                                                              | 0x10           | 16                 |
| `GPUTextureUsage.STORAGE_BINDING`   | Die Textur kann für die Verwendung als Speichertextur in einem Shader gebunden werden, zum Beispiel als Ressource in einem Bindungseintrag bei der Erstellung einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (via [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), was einem Eintrag des [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) mit einem spezifizierten Speichertextur-Bindungs-Layout entspricht. | 0x08           | 8                  |
| `GPUTextureUsage.TEXTURE_BINDING`   | Die Textur kann für die Verwendung als abgetastete Textur in einem Shader gebunden werden, zum Beispiel als Ressource in einem Bindungseintrag bei der Erstellung einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (via [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), was einem Eintrag des [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) mit einem spezifizierten Textur-Bindungs-Layout entspricht.     | 0x04           | 4                  |

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
