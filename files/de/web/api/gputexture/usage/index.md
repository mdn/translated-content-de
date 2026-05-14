---
title: "GPUTexture: usage-Eigenschaft"
short-title: usage
slug: Web/API/GPUTexture/usage
l10n:
  sourceCommit: e5909a8f548695b72649ce32216c8fada21479c9
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`usage`** schreibgeschützte Eigenschaft der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle sind die {{Glossary("bitwise_flags", "bitweisen Flags")}}, die die erlaubten Verwendungen der `GPUTexture` darstellen.

Diese wird über die `usage`-Eigenschaft im Deskriptor-Objekt gesetzt, das im ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird.

## Wert

Die bitweisen Flags, die die ursprünglichen Verwendungen darstellen, die bei der ersten Erstellung der `GPUTexture` festgelegt wurden. Die zurückgegebene Zahl ist die Summe der Dezimalwerte, die die verschiedenen Flags darstellen, wie in der folgenden Tabelle zu sehen.

| Nutzungs-Flag                          | Beschreibung der Nutzung                                                                                                                                                                                                                                                                                                                                                                                     | Hex-Wert | Dezimal-Wert |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------ |
| `GPUTextureUsage.COPY_SRC`             | Die Textur kann als Quelle einer Kopieroperation verwendet werden, z.B. als Quellargument eines [`copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer)-Aufrufs.                                                                                                                                                                                                                   | 0x01     | 1            |
| `GPUTextureUsage.COPY_DST`             | Die Textur kann als Ziel einer Kopier-/Schreiboperation verwendet werden, z.B. als Zielargument eines [`copyBufferToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToTexture)-Aufrufs.                                                                                                                                                                                                             | 0x02     | 2            |
| `GPUTextureUsage.RENDER_ATTACHMENT`    | Die Textur kann als Farb- oder Tiefen-/Stencil-Anhang in einem Render-Pass verwendet werden, z.B. als `view`-Eigenschaft des Deskriptor-Objekts in einem [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf.                                                                                                                                                                   | 0x10     | 16           |
| `GPUTextureUsage.STORAGE_BINDING`      | Die Textur kann als Speichertest in einem Shader gebunden werden, z.B. als Ressource in einem Bind-Gruppe-Eintrag beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (über [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), die einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrag mit einer angegebenen Speichertest-Bindungslayout entspricht. | 0x08     | 8            |
| `GPUTextureUsage.TEXTURE_BINDING`      | Die Textur kann als abgetastete Textur in einem Shader gebunden werden, z.B. als Ressource in einem Bind-Gruppe-Eintrag beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (über [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), die einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrag mit einer angegebenen Texturbindungslayout entspricht.  | 0x04     | 4            |
| `GPUTextureUsage.TRANSIENT_ATTACHMENT` | Die Textur ist als temporärer Optimierungshinweis gedacht und erstellt speichereffiziente Anhänge, die nur innerhalb des aktuellen Render-Passes verwendet werden. Verwandte Render-Pass-Operationen verbleiben im Kachel-Speicher, was den VRAM-Verkehr vermeidet und die VRAM-Zuweisung für die Texturen verhindern kann.                                                                                  | 0x20     | 32           |

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
