---
title: "GPUCommandEncoder: beginRenderPass() Methode"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginRenderPass()`** Methode des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Interfaces startet die Kodierung eines Render-Passes und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderns verwendet werden kann.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `colorAttachments`
      - : Ein Array von Objekten (siehe [Struktur des Color Attachment Objekts](#struktur_des_color_attachment_objekts)), die die Color Attachments definieren, auf die während der Ausführung dieses Render-Passes ausgegeben werden soll.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des Depth/Stencil Attachment Objekts](#depthstencil_attachment_object_structure)), das das Depth/Stencil Attachment definiert, auf das während der Ausführung dieses Render-Passes ausgegeben und gegen das getestet wird.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die zur Identifizierung des Objekts verwendet werden kann, z. B. in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl an Draw-Calls angibt, die im Render-Pass ausgeführt werden. Dies wird von einigen Implementierungen verwendet, um die vor dem Render-Pass eingefügte Arbeit zu dimensionieren. Sie sollten den Standardwert — 50000000 — beibehalten, es sei denn, Sie wissen, dass mehr Draw-Calls ausgeführt werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das die Occlusion Query Ergebnisse für diesen Pass speichern wird.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, das definiert, wo und wann Timestamp-Query-Werte für diesen Pass geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `location`: Ein enumerierter Wert, der angibt, wann der Timestamp ausgeführt wird. Verfügbare Werte sind:
          - `"beginning"`: Der Timestamp wird zusammen mit den anderen kodierten Befehlen im Compute-Pass ausgeführt, sobald der entsprechende [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) übermittelt wird.
          - `"end"`: Der Timestamp wird als Teil einer separaten Liste von Timestamp-Attachments ausgeführt, sobald der Pass endet.
        - `queryIndex`: Eine Zahl, die die Indexposition im `querySet` angibt, in die der Timestamp geschrieben wird.
        - `querySet`: Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), in das der Timestamp geschrieben wird.

        > [!NOTE]
        > Das `timestamp-query` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Timestamp-Queries verwenden zu können.

### Struktur des Color Attachment Objekts

Color-Attachment-Objekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}

  - : Ein Farbwert, um die `view`-Textur vor der Ausführung des Render-Passes zu löschen. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` nimmt ein Array oder Objekt an, das die vier Farbkomponenten `r`, `g`, `b` und `a` als Dezimalzahlen darstellt.

    Was folgt, ist ein Beispielfeld:

    ```js
    clearValue: [0.0, 0.5, 1.0, 1.0];
    ```

    Das äquivalente Objekt würde so aussehen:

    ```js
    clearValue: {
      r: 0.0,
      g: 0.5,
      b: 1.0,
      a: 1.0
    }
    ```

    Wenn `clearValue` weggelassen wird, wird es standardmäßig auf `{r: 0, g: 0, b: 0, a: 0}` gesetzt.

- `depthSlice` {{optional_inline}}

  - : Eine Zahl, die den Index des 3D-Depth-Slice darstellt, der für dieses Color Attachment ausgegeben wird, im Falle einer 3D [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) `view`. Wenn angegeben, ermöglicht dies WebGPU direkt auf Slices von 3D-Texturen innerhalb von Render-Passes zu rendern.

- `loadOp`

  - : Ein enumerierter Wert, der den Ladeoperation angibt, der auf `view` vor der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für dieses Attachment in den Render-Pass.
    - `"load"`: Lädt den bestehenden Wert für dieses Attachment in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten, wie Mobilgeräten, eine bessere Leistung bietet.

- `storeOp`
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die auf `view` nach der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwift den resultierenden Wert des Render-Passes für dieses Attachment.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für dieses Attachment.
- `resolveTarget` {{optional_inline}}
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt, das die Textur-Unterressource darstellt, die die aufgelöste Ausgabe für dieses Color-Attachment erhält, wenn `view` multisampled ist.
- `view`

  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt, das die Textur-Unterressource darstellt, auf die für dieses Color Attachment ausgegeben werden soll.

    > [!NOTE]
    > Jedes Color- oder Depth/Stencil-Attachment muss eine einzigartige Textur-Unterressource sein, und Textur-Unterrressourcen, die als Attachments verwendet werden, können innerhalb des Render-Passes nicht verwendet werden.

### Struktur des Depth/Stencil Attachment Objekts

Das `depthStencilAttachment`-Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, um die Depth-Komponente von `view` vor der Ausführung des Render-Passes zu löschen. Dieser Wert wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0.0 und 1.0 liegen, einschließlich.

- `depthLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der den Ladeoperation angibt, der auf die Depth-Komponente von `view` vor der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für dieses Attachment in den Render-Pass.
    - `"load"`: Lädt den bestehenden Wert für dieses Attachment in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten, wie Mobilgeräten, eine bessere Leistung bietet.

- `depthReadOnly` {{optional_inline}}
  - : Ein boolescher Wert. Wenn der Wert auf `true` gesetzt ist, wird die Depth-Komponente von `view` schreibgeschützt. Wenn `depthReadOnly` weggelassen wird, ist der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die auf die Depth-Komponente von `view` nach der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für dieses Attachment.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für dieses Attachment.
- `stencilClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, um die Stencil-Komponente von `view` vor der Ausführung des Render-Passes zu löschen. Dieser Wert wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` weggelassen wird, wird er standardmäßig auf 0 gesetzt.

- `stencilLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der den Ladeoperation angibt, der auf die Stencil-Komponente von `view` vor der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für dieses Attachment in den Render-Pass.
    - `"load"`: Lädt den bestehenden Wert für dieses Attachment in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten, wie Mobilgeräten, eine bessere Leistung bietet.

- `stencilReadOnly` {{optional_inline}}
  - : Ein boolescher Wert. Wenn der Wert auf `true` gesetzt ist, wird die Stencil-Komponente von `view` schreibgeschützt. Wenn `stencilReadOnly` weggelassen wird, ist der Standardwert `false`.
- `stencilStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die auf die Stencil-Komponente von `view` nach der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für dieses Attachment.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für dieses Attachment.
- `view`
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt, das die Textur-Unterressource darstellt, die für dieses Depth/Stencil Attachment ausgegeben und gelesen wird.

### Rückgabewert

Eine Instanz des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginRenderPass()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `colorAttachments` nur `null` Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleiche [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) Werte und Render-Bereiche ([`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height), [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width), und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers)).
- Wenn `occlusionQuerySet` gesetzt ist, hat das referenzierte [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) einen `type` von `"occlusion"`.

Für Color Attachment Objekte

- Die `view` ist renderbar, und das Format der `view` (d.h. im Deskriptor des ursprünglichen [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) Aufrufs angegeben) ist ein renderbares Farbformat.
- Wenn `resolveTarget` bereitgestellt wird:
  - Die `view`'s ursprüngliche [`GPUTexture`](/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist größer als 1.
  - Die `resolveTarget`'s ursprüngliche [`GPUTexture`](/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
  - `resolveTarget` ist renderbar.
  - Die Größen der Unterressourcen, die `view` und `resolveTarget` bereitstellen, stimmen überein.
  - `view`'s und `resolveTarget`'s Formate stimmen überein.
- [Color Attachments Bytes pro Sample](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) ist kleiner oder gleich dem `maxColorAttachmentBytesPerSample` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

Für Depth/Stencil Attachment Objekte:

- Die `view` ist renderbar und ihr Format ist ein [Depth-or-Stencil](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, wird ein gültiger `depthClearValue` bereitgestellt.
- Wenn das Format von `view` ein kombiniertes Depth-or-Stencil Format ist, stimmen `depthReadOnly` und `stencilReadOnly` überein.
- Wenn das Format von `view` einen Depth-Aspekt hat und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Depth-Aspekt hat und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn das Format von `view` einen Stencil-Aspekt hat und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Stencil-Aspekt hat und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.

Für Timestamp-Queries:

- Das `timestamp-query` [Feature](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Keine zwei `timestampWrites` Objekte haben die gleiche `location`. Dies bedeutet, dass Sie nur zwei Timestamp-Queries pro Render-Pass ausführen können.
- Für jede Timestamp-Query ist der `querySet`'s [`GPUQuerySet.type`](/de/docs/Web/API/GPUQuerySet/type) `"timestamp"`, und der `queryIndex` Wert ist kleiner als die [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).
- Keine zwei `timestampWrites` Objekte haben das gleiche `queryIndex` und `querySet` Paar.

## Beispiele

In unserem [Basic Render Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Reihe von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Diese Befehle stammen von dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der durch `beginRenderPass()` erstellt wurde:

```js
// ...

// Create GPUCommandEncoder
const commandEncoder = device.createCommandEncoder();

// Create GPURenderPassDescriptor to tell WebGPU which texture to draw into, then initiate render pass

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Draw a triangle

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// End the render pass

passEncoder.end();

device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
