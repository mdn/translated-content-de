---
title: "GPUCommandEncoder: beginRenderPass() Methode"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginRenderPass()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle beginnt mit der Kodierung eines Render-Passes und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderings verwendet werden kann.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `colorAttachments`
      - : Ein Array von Objekten (siehe [Struktur des Farbanlagenobjekts](#struktur_des_farbanlagenobjekts)), das die Farbanlagen definiert, zu denen während dieses Render-Passes ausgegeben wird.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des Tiefenstencil-Anlageobjekts](#depthstencil_attachment_object_structure)), das die Tiefen-/Stencil-Anlage definiert, zu der ausgegeben und gegen die getestet wird, wenn dieser Render-Pass ausgeführt wird.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen verwendet werden kann.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl von Zeichenaufrufen angibt, die im Render-Pass durchgeführt werden. Dies wird von einigen Implementierungen verwendet, um Arbeiten vor dem Render-Pass zu dimensionieren. Sie sollten den Standardwert — 50000000 — beibehalten, es sei denn, Sie wissen, dass mehr Zeichenaufrufe durchgeführt werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das die Ergebnisse der Occlusion-Abfrage für diesen Pass speichert.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, die definieren, wo und wann Zeitstempel-Abfragewerte für diesen Pass geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `location`: Ein enumerierter Wert, der angibt, wann der Zeitstempel ausgeführt wird. Verfügbare Werte sind:
          - `"beginning"`: Der Zeitstempel wird zusammen mit den anderen kodierten Befehlen im Berechnungs-Pass ausgeführt, sobald der entsprechende [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) eingereicht wird.
          - `"end"`: Der Zeitstempel wird als Teil einer separaten Liste von Zeitstempel-Anlagen ausgeführt, sobald der Pass endet.
        - `queryIndex`: Eine Zahl, die die Indexposition im `querySet` angibt, zu der der Zeitstempel geschrieben wird.
        - `querySet`: Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), zu dem der Zeitstempel geschrieben wird.

        > [!NOTE]
        > Um Zeitstempel-Abfragen zu verwenden, muss das `timestamp-query` [Feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein.

### Struktur des Farbanlagenobjekts

Farbanlagenobjekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}

  - : Ein Farbwert, um die `view`-Textur vor der Ausführung des Render-Passes zu löschen. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` nimmt ein Array oder Objekt an, das die vier Farbkomponenten `r`, `g`, `b` und `a` als Dezimalzahlen darstellt.

    Folgendes ist ein Beispielarray:

    ```js
    clearValue: [0.0, 0.5, 1.0, 1.0];
    ```

    Das entsprechende Objekt würde so aussehen:

    ```js
    clearValue: {
      r: 0.0,
      g: 0.5,
      b: 1.0,
      a: 1.0
    }
    ```

    Wenn `clearValue` weggelassen wird, ist der Standardwert `{r: 0, g: 0, b: 0, a: 0}`.

- `loadOp`

  - : Ein enumerierter Wert, der die Ladeoperation angibt, die auf `view` ausgeführt wird, bevor der Render-Pass ausgeführt wird. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anlage in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diese Anlage in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Initialwert nicht von Bedeutung ist, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `storeOp`
  - : Ein enumerierter Wert, der die Speichervorgänge angibt, die auf `view` nach der Ausführung des Render-Passes ausgeführt werden. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diese Anlage.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diese Anlage.
- `resolveTarget` {{optional_inline}}
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die die aufgelöste Ausgabe für diese Farb-Anlage erhält, wenn `view` multisampled ist.
- `view`

  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, zu der für diese Farb-Anlage ausgegeben wird.

    > [!NOTE]
    > Jede Farb- oder Tiefen/Stencil-Anlage muss eine eindeutige Textur-Subressource sein, und Textur-Subressourcen, die als Anlagen verwendet werden, können im Render-Pass nicht verwendet werden.

### Struktur des Tiefenstencil-Anlageobjekts

Das `depthStencilAttachment`-Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, auf den die Tiefenkomponente von `view` vor der Ausführung des Render-Passes gelöscht werden soll. Dies wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0,0 und 1,0 liegen, einschließlich.

- `depthLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der die Ladeoperation angibt, die auf die Tiefenkomponente von `view` ausgeführt wird, bevor der Render-Pass ausgeführt wird. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diese Anlage in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diese Anlage in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Initialwert nicht von Bedeutung ist, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `depthReadOnly` {{optional_inline}}
  - : Ein boolescher Wert. Wenn der Wert auf `true` gesetzt wird, ist die Tiefenkomponente von `view` schreibgeschützt. Wenn `depthReadOnly` weggelassen wird, ist der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Speichervorgänge angibt, die auf die Tiefenkomponente von `view` nach der Ausführung des Render-Passes ausgeführt werden. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diese Anlage.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diese Anlage.
- `stencilClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, auf den die Stencil-Komponente von `view` vor der Ausführung des Render-Passes gelöscht werden soll. Dies wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` weggelassen wird, ist der Standardwert 0.

- `stencilLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der die Ladeoperation angibt, die auf die Stencil-Komponente von `view` ausgeführt wird, bevor der Render-Pass ausgeführt wird. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diese Anlage in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diese Anlage in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Initialwert nicht von Bedeutung ist, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `stencilReadOnly` {{optional_inline}}
  - : Ein boolescher Wert. Wenn der Wert auf `true` gesetzt wird, ist die Stencil-Komponente von `view` schreibgeschützt. Wenn `stencilReadOnly` weggelassen wird, ist der Standardwert `false`.
- `stencilStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Speichervorgänge angibt, die auf die Stencil-Komponente von `view` nach der Ausführung des Render-Passes ausgeführt werden. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diese Anlage.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diese Anlage.
- `view`
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die für diese Tiefen-/Stencil-Anlage ausgegeben und gelesen wird.

### Rückgabewert

Eine Instanz des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginRenderPass()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits).
- Wenn `colorAttachments` nur `null`-Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleiche [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount)-Werte und Render-Extents ([`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height), [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width), und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers)).
- Wenn `occlusionQuerySet` gesetzt ist, hat das referenzierte [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) einen `type` von `"occlusion"`.

Für Farbanlageobjekte:

- Die `view` ist renderbar, und das Format der `view` (d. h. angegeben im Descriptor des ursprünglichen [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)-Aufrufs) ist ein farbrenderbares Format.
- Wenn `resolveTarget` bereitgestellt wird:
  - Die `view` Ursprüngliche [`GPUTexture`](/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist größer als 1.
  - Die `resolveTarget` Ursprüngliche [`GPUTexture`](/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
  - `resolveTarget` ist renderbar.
  - Die Größen der Subressourcen, die `view` und `resolveTarget` eine Ansicht bieten, stimmen überein.
  - Die Formate von `view` und `resolveTarget` stimmen überein.
- [Bytes pro Probe der Farbanlagen](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxColorAttachmentBytesPerSample` [Limit](/de/docs/Web/API/GPUSupportedLimits).

Für Tiefenstencil-Anlageobjekte:

- Die `view` ist renderbar und ihr Format ist ein [depth-or-stencil](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, wird ein gültiges `depthClearValue` bereitgestellt.
- Wenn das Format von `view` ein kombiniertes depth-or-stencil Format ist, stimmt `depthReadOnly` mit `stencilReadOnly` überein.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn das Format von `view` einen Stencil-Aspekt hat und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Stencil-Aspekt hat und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.

Für Zeitstempel-Abfragen:

- Das `timestamp-query` [Feature](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Keine zwei `timestampWrites`-Objekte haben denselben `location`. Effektiv bedeutet dies, dass Sie pro Render-Pass nur zwei Zeitstempel-Abfragen ausführen können.
- Für jede Zeitstempel-Abfrage ist der `querySet` [`GPUQuerySet.type`](/de/docs/Web/API/GPUQuerySet/type) `"timestamp"`, und der Wert `queryIndex` ist kleiner als die [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).
- Keine zwei `timestampWrites`-Objekte haben dasselbe `queryIndex`- und `querySet`-Paar.

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Anzahl von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Diese Befehle stammen von dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der über `beginRenderPass()` erstellt wurde:

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
