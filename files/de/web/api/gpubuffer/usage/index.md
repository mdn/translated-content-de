---
title: "GPUBuffer: usage-Eigenschaft"
short-title: usage
slug: Web/API/GPUBuffer/usage
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`usage`** des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Interfaces enthält die {{Glossary("bitwise_flags", "bitweisen Flags")}}, die die erlaubten Nutzungen des `GPUBuffer` darstellen.

`usage` wird über die `usage`-Eigenschaft im Deskriptor-Objekt festgelegt, das in den ursprünglichen [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)-Aufruf übergeben wird.

## Wert

Die bitweisen Flags, die die ursprünglichen Nutzungen darstellen, die beim ersten Erstellen des `GPUBuffer` festgelegt wurden. Die zurückgegebene Zahl ist die Summe der Dezimalwerte, die die verschiedenen Flags repräsentieren, wie in der unten stehenden Tabelle zu sehen ist.

| Bitweises Flag                 | Nutzungsbeschreibung                                                                                                                                                                                                                                                                                                                                                                                                                     | Hex-Wert | Dezimal-Wert |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------ |
| `GPUBufferUsage.COPY_SRC`      | Der Puffer kann als Quelle einer Kopie-Operation verwendet werden, zum Beispiel das Argument `source` eines [`copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer)-Aufrufs.                                                                                                                                                                                                                                     | 0x0004   | 4            |
| `GPUBufferUsage.COPY_DST`      | Der Puffer kann als Ziel einer Kopier-/Schreiboperation verwendet werden, zum Beispiel das Argument `destination` eines [`copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer)-Aufrufs.                                                                                                                                                                                                                       | 0x0008   | 8            |
| `GPUBufferUsage.INDEX`         | Der Puffer kann als Indexpuffer verwendet werden, zum Beispiel als `buffer`-Argument, das an [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergeben wird.                                                                                                                                                                                                                                                  | 0x0010   | 16           |
| `GPUBufferUsage.INDIRECT`      | Der Puffer kann verwendet werden, um indirekte Befehlsargumente zu speichern, zum Beispiel als `indirectBuffer`-Argument eines [`drawIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndirect)- oder [`dispatchWorkgroupsIndirect()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect)-Aufrufs.                                                                                                                 | 0x0100   | 256          |
| `GPUBufferUsage.MAP_READ`      | Der Puffer kann zum Lesen gemappt werden, zum Beispiel beim Aufruf von [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) mit einem `mode` von `GPUMapMode.READ`. Dieses Flag kann nur mit `GPUBufferUsage.COPY_DST` kombiniert werden.                                                                                                                                                                                                 | 0x0001   | 1            |
| `GPUBufferUsage.MAP_WRITE`     | Der Puffer kann zum Schreiben gemappt werden, zum Beispiel beim Aufruf von [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) mit einem `mode` von `GPUMapMode.WRITE`. Dieses Flag kann nur mit `GPUBufferUsage.COPY_SRC` kombiniert werden.                                                                                                                                                                                            | 0x0002   | 2            |
| `GPUBufferUsage.QUERY_RESOLVE` | Der Puffer kann verwendet werden, um Abfrageergebnisse zu erfassen, zum Beispiel als `destination`-Argument eines [`resolveQuerySet()`](/de/docs/Web/API/GPUCommandEncoder/resolveQuerySet)-Aufrufs.                                                                                                                                                                                                                                     | 0x0200   | 512          |
| `GPUBufferUsage.STORAGE`       | Der Puffer kann als Speicherpuffer verwendet werden, zum Beispiel als Ressource in einem Bindgruppen-Eintrag beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (über [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), die einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrag entspricht, mit einem Puffereintrags-Layout `type` von `"storage"` oder `"read-only-storage"`. | 0x0080   | 128          |
| `GPUBufferUsage.UNIFORM`       | Der Puffer kann als Uniform-Puffer verwendet werden, zum Beispiel als Ressource in einem Bindgruppen-Eintrag beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (über [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), die einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrag entspricht, mit einem Puffereintrags-Layout `type` von `"uniform"`.                            | 0x0040   | 64           |
| `GPUBufferUsage.VERTEX`        | Der Puffer kann als Vertex-Puffer verwendet werden, zum Beispiel als `buffer`-Argument, das an [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) übergeben wird.                                                                                                                                                                                                                                              | 0x0020   | 32           |

## Beispiele

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

console.log(output.usage); // 132

const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

console.log(stagingBuffer.usage); // 9
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
