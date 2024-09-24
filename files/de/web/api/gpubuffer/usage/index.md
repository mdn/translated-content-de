---
title: "GPUBuffer: Eigenschaft usage"
short-title: usage
slug: Web/API/GPUBuffer/usage
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`usage`** der {{domxref("GPUBuffer")}}-Schnittstelle enthält die {{glossary("bitwise flags")}}, die die erlaubten Verwendungen des `GPUBuffer` darstellen.

`usage` wird über die `usage`-Eigenschaft im Beschreibungsobjekt gesetzt, das im ursprünglichen Aufruf von {{domxref("GPUDevice.createBuffer()")}} übergeben wird.

## Wert

Die bitweisen Flags, die die ursprünglichen Verwendungen darstellen, die beim ersten Erstellen des `GPUBuffer` festgelegt wurden. Die zurückgegebene Zahl ist die Summe der Dezimalwerte, die die verschiedenen Flags darstellen, wie in der untenstehenden Tabelle angegeben.

| Bitwise Flag                   | Verwendungsbeschreibung                                                                                                                                                                                                                                                                                                                            | Hex-equiv. | Dezimal-equiv. |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------- |
| `GPUBufferUsage.COPY_SRC`      | Der Puffer kann als Quelle einer Kopieroperation verwendet werden, beispielsweise als Quellargument eines {{domxref("GPUCommandEncoder.copyBufferToBuffer","copyBufferToBuffer()")}}-Aufrufs.                                                                                                                                                    | 0x0004     | 4              |
| `GPUBufferUsage.COPY_DST`      | Der Puffer kann als Ziel einer Kopier-/Schreiboperation verwendet werden, beispielsweise als Zielargument eines {{domxref("GPUCommandEncoder.copyTextureToBuffer", "copyTextureToBuffer()")}}-Aufrufs.                                                                                                                                           | 0x0008     | 8              |
| `GPUBufferUsage.INDEX`         | Der Puffer kann als Indexpuffer verwendet werden, beispielsweise als `buffer`-Argument, das an {{domxref("GPURenderPassEncoder.setIndexBuffer", "setIndexBuffer()")}} übergeben wird.                                                                                                                                                           | 0x0010     | 16             |
| `GPUBufferUsage.INDIRECT`      | Der Puffer kann zur Speicherung indirekter Befehlsargumente verwendet werden, beispielsweise als das `indirectBuffer`-Argument eines {{domxref("GPURenderPassEncoder.drawIndirect", "drawIndirect()")}} oder {{domxref("GPUComputePassEncoder.dispatchWorkgroupsIndirect", "dispatchWorkgroupsIndirect()")}}-Aufrufs.                        | 0x0100     | 256            |
| `GPUBufferUsage.MAP_READ`      | Der Puffer kann zum Lesen abgebildet werden, beispielsweise bei einem Aufruf von {{domxref("GPUBuffer.mapAsync", "mapAsync()")}} mit einem `mode` von `GPUMapMode.READ`. Dieses Flag darf nur mit `GPUBufferUsage.COPY_DST` kombiniert werden.                                                                                                  | 0x0001     | 1              |
| `GPUBufferUsage.MAP_WRITE`     | Der Puffer kann zum Schreiben abgebildet werden, beispielsweise bei einem Aufruf von {{domxref("GPUBuffer.mapAsync", "mapAsync()")}} mit einem `mode` von `GPUMapMode.WRITE`. Dieses Flag darf nur mit `GPUBufferUsage.COPY_SRC` kombiniert werden.                                                                                             | 0x0002     | 2              |
| `GPUBufferUsage.QUERY_RESOLVE` | Der Puffer kann zur Erfassung von Abfrageergebnissen verwendet werden, beispielsweise als Zielargument eines {{domxref("GPUCommandEncoder.resolveQuerySet", "resolveQuerySet()")}}-Aufrufs.                                                                                                                                                        | 0x0200     | 512            |
| `GPUBufferUsage.STORAGE`       | Der Puffer kann als Speicherpuffer verwendet werden, beispielsweise als Ressource in einem Bindegruppeneintrag, wenn ein {{domxref("GPUBindGroup")}} erstellt wird (über {{domxref("GPUDevice.createBindGroup", "createBindGroup()")}}), der einem {{domxref("GPUBindGroupLayout")}}-Eintrag mit einem Puffer-Bindungs-Layout`type` von `"storage"` oder `"read-only-storage"` entspricht. | 0x0080     | 128            |
| `GPUBufferUsage.UNIFORM`       | Der Puffer kann als Uniform-Puffer verwendet werden, beispielsweise als Ressource in einem Bindegruppeneintrag, wenn ein {{domxref("GPUBindGroup")}} erstellt wird (über {{domxref("GPUDevice.createBindGroup", "createBindGroup()")}}), der einem {{domxref("GPUBindGroupLayout")}}-Eintrag mit einem Puffer-Bindungs-Layout `type` von `"uniform"` entspricht.                          | 0x0040     | 64             |
| `GPUBufferUsage.VERTEX`        | Der Puffer kann als Vertex-Puffer verwendet werden, beispielsweise als `buffer`-Argument, das an {{domxref("GPURenderPassEncoder.setVertexBuffer", "setVertexBuffer()")}} übergeben wird.                                                                                                                                                          | 0x0020     | 32             |

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
