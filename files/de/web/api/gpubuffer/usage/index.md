---
title: "GPUBuffer: usage-Eigenschaft"
short-title: usage
slug: Web/API/GPUBuffer/usage
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`usage`**-Eigenschaft der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle enthält die [bitweisen Flags](/de/docs/Glossary/bitwise_flags), die die erlaubten Verwendungen des `GPUBuffer` darstellen. Diese Eigenschaft ist nur lesbar.

`usage` wird über die `usage`-Eigenschaft im Deskriptor-Objekt gesetzt, das dem ursprünglichen Aufruf zu [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) übergeben wird.

## Wert

Die bitweisen Flags, die die ursprünglich festgelegten Verwendungen repräsentieren, als der `GPUBuffer` zuerst erstellt wurde. Die zurückgegebene Zahl ist die Summe der Dezimalwerte, die die verschiedenen Flags repräsentieren, wie in der Tabelle unten zu sehen ist.

| Bitweises Flag                 | Verwendungsbeschreibung                                                                                                                                                                                                                                                                                                                                         | Hex-Äquivalent | Dezimal-Äquivalent |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ------------------ |
| `GPUBufferUsage.COPY_SRC`      | Der Buffer kann als Quelle einer Kopieroperation verwendet werden, zum Beispiel als Quellargument eines [`copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer)-Aufrufs.                                                                                                                                                                       | 0x0004          | 4                  |
| `GPUBufferUsage.COPY_DST`      | Der Buffer kann als Ziel einer Kopier-/Schreiboperation verwendet werden, zum Beispiel als Zielargument eines [`copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer)-Aufrufs.                                                                                                                                                    | 0x0008          | 8                  |
| `GPUBufferUsage.INDEX`         | Der Buffer kann als Index-Buffer verwendet werden, zum Beispiel als `buffer`-Argument, das an [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergeben wird.                                                                                                                                                                               | 0x0010          | 16                 |
| `GPUBufferUsage.INDIRECT`      | Der Buffer kann verwendet werden, um indirekte Befehlsargumente zu speichern, zum Beispiel als `indirectBuffer`-Argument eines [`drawIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndirect) oder [`dispatchWorkgroupsIndirect()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect)-Aufrufs.                                                              | 0x0100          | 256                |
| `GPUBufferUsage.MAP_READ`      | Der Buffer kann zum Lesen abgebildet werden, zum Beispiel wenn [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) mit einem `mode` von `GPUMapMode.READ` aufgerufen wird. Dieses Flag kann nur mit `GPUBufferUsage.COPY_DST` kombiniert werden.                                                                                                                   | 0x0001          | 1                  |
| `GPUBufferUsage.MAP_WRITE`     | Der Buffer kann zum Schreiben abgebildet werden, zum Beispiel wenn [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) mit einem `mode` von `GPUMapMode.WRITE` aufgerufen wird. Dieses Flag kann nur mit `GPUBufferUsage.COPY_SRC` kombiniert werden.                                                                                                                | 0x0002          | 2                  |
| `GPUBufferUsage.QUERY_RESOLVE` | Der Buffer kann verwendet werden, um Abfrageergebnisse zu erfassen, zum Beispiel als Zielargument eines [`resolveQuerySet()`](/de/docs/Web/API/GPUCommandEncoder/resolveQuerySet)-Aufrufs.                                                                                                                                                                         | 0x0200          | 512                |
| `GPUBufferUsage.STORAGE`       | Der Buffer kann als Speicherpuffer verwendet werden, zum Beispiel als Ressource in einem Bind-Group-Eintrag beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (über [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), die einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrag mit einem Pufferspeicher-Layout-`type` von `"storage"` oder `"read-only-storage"` entspricht. | 0x0080          | 128                |
| `GPUBufferUsage.UNIFORM`       | Der Buffer kann als Uniform-Buffer verwendet werden, zum Beispiel als Ressource in einem Bind-Group-Eintrag beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (über [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), die einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrag mit einem Pufferspeicher-Layout-`type` von `"uniform"` entspricht.                           | 0x0040          | 64                 |
| `GPUBufferUsage.VERTEX`        | Der Buffer kann als Vertex-Buffer verwendet werden, zum Beispiel als `buffer`-Argument, das an [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) übergeben wird.                                                                                                                                                                               | 0x0020          | 32                 |

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
