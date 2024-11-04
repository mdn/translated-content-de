---
title: "GPUCommandEncoder: beginRenderPass()-Methode"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: 116d2c876cf4e99c28632e4685a80c64858432ee
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginRenderPass()`**-Methode des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Interfaces beginnt mit der Kodierung eines Render-Passes und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderings verwendet werden kann.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `colorAttachments`
      - : Ein Array von Objekten (siehe [Struktur des Farbanhang-Objekts](#struktur_des_farbanhang-objekts)), die die Farbanhänge definieren, zu denen beim Ausführen dieses Render-Passes ausgegeben wird.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des Tiefen-/Stencil-Anhang-Objekts](#depthstencil_attachment_object_structure)), das den Tiefen-/Stencil-Anhang definiert, zu dem ausgegeben wird und gegen den getestet wird, wenn dieser Render-Pass ausgeführt wird.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl an Zeichnungsaufrufen angibt, die im Render-Pass durchgeführt werden. Diese wird von einigen Implementierungen verwendet, um Arbeiten zu dimensionieren, die vor dem Render-Pass eingefügt werden. Sie sollten den Standardwert — 50000000 — beibehalten, es sei denn, Sie wissen, dass mehr Zeichnungsaufrufe durchgeführt werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Der [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), der die Ergebnisse der Okklusionsabfrage für diesen Pass speichern wird.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, das definiert, wo und wann Zeitstempel-Abfragewerte für diesen Pass geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `location`: Ein enumerierter Wert, der angibt, wann der Zeitstempel ausgeführt wird. Verfügbare Werte sind:
          - `"beginning"`: Der Zeitstempel wird zusammen mit den anderen kodierten Befehlen im Compute-Pass ausgeführt, sobald der entsprechende [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) übermittelt wird.
          - `"end"`: Der Zeitstempel wird als Teil einer separaten Liste von Zeitstempel-Anhängen ausgeführt, sobald der Pass endet.
        - `queryIndex`: Eine Zahl, die die Indexposition im `querySet` angibt, an die der Zeitstempel geschrieben wird.
        - `querySet`: Der [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), in den der Zeitstempel geschrieben wird.

        > [!NOTE]
        > Die `timestamp-query`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempel-Abfragen zu verwenden.

### Struktur des Farbanhang-Objekts

Farbannhang-Objekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}

  - : Ein Farbwert, um die `view`-Textur vor der Ausführung des Render-Passes zu löschen. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` nimmt ein Array oder Objekt an, das die vier Farbkomponenten `r`, `g`, `b` und `a` als Dezimalzahlen darstellt.

    Was folgt, ist ein Beispiel-Array:

    ```js
    clearValue: [0.0, 0.5, 1.0, 1.0];
    ```

    Das entsprechende Objekt würde folgendermaßen aussehen:

    ```js
    clearValue: {
      r: 0.0,
      g: 0.5,
      b: 1.0,
      a: 1.0
    }
    ```

    Wenn `clearValue` weggelassen wird, lautet der Standardwert `{r: 0, g: 0, b: 0, a: 0}`.

- `depthSlice` {{optional_inline}}

  - : Eine Zahl, die den Index des 3D-Tiefen-Slices angibt, zu dem für diesen Farbanhang ausgegeben wird, im Falle einer 3D-`GPUTextureView`-`view`. Wenn angegeben, ermöglicht dies WebGPU direktes Rendern zu Slices von 3D-Texturen innerhalb von Render-Pässen.

- `loadOp`

  - : Ein enumerierter Wert, der die Ladeoperation angibt, die auf `view` vor der Ausführung des Render-Passes durchgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, in Fällen, in denen der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobiltelefonen eine bessere Leistung bietet.

- `storeOp`
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die auf `view` nach der Ausführung des Render-Passes durchgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.
- `resolveTarget` {{optional_inline}}
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Unterressource darstellt, die die aufgelöste Ausgabe für diesen Farbanhang erhält, wenn `view` Multisampled ist.
- `view`

  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Unterressource darstellt, zu der für diesen Farbanhang ausgegeben wird.

    > [!NOTE]
    > Jeder Farb- oder Tiefen-/Stencil-Anhang muss eine eindeutige Textur-Unterressource sein, und Textur-Unterressourcen, die als Anhänge verwendet werden, können nicht innerhalb des Render-Passes verwendet werden.

### Struktur des Tiefen-/Stencil-Anhang-Objekts

Das `depthStencilAttachment`-Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, um die `view`-Tiefenkomponente vor der Ausführung des Render-Passes zu löschen. Dies wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0,0 und 1,0 liegen, einschließlich.

- `depthLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der die Ladeoperation angibt, die auf die `view`-Tiefenkomponente vor der Ausführung des Render-Passes durchgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, in Fällen, in denen der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobiltelefonen eine bessere Leistung bietet.

- `depthReadOnly` {{optional_inline}}
  - : Ein Boolean. Wenn der Wert auf `true` gesetzt wird, ist die Tiefenkomponente von `view` schreibgeschützt. Wenn `depthReadOnly` weggelassen wird, lautet der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die auf die `view`-Tiefenkomponente nach der Ausführung des Render-Passes durchgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.
- `stencilClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, um die `view`-Stencil-Komponente vor der Ausführung des Render-Passes zu löschen. Dies wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` weggelassen wird, lautet der Standardwert 0.

- `stencilLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der die Ladeoperation angibt, die auf die `view`-Stencil-Komponente vor der Ausführung des Render-Passes durchgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, in Fällen, in denen der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobiltelefonen eine bessere Leistung bietet.

- `stencilReadOnly` {{optional_inline}}
  - : Ein Boolean. Wenn der Wert auf `true` gesetzt wird, ist die Stencil-Komponente von `view` schreibgeschützt. Wenn `stencilReadOnly` weggelassen wird, lautet der Standardwert `false`.
- `stencilStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die auf die `view`-Stencil-Komponente nach der Ausführung des Render-Passes durchgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.
- `view`
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Unterressource darstellt, zu der und von der für diesen Tiefen-/Stencil-Anhang ausgegeben und gelesen wird.

### Rückgabewert

Eine Instanz des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Objekts.

### Validierung

Die folgenden Kriterien müssen beim Aufrufen von **`beginRenderPass()`** erfüllt sein, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich dem `maxColorAttachments`-[Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `colorAttachments` nur `null`-Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleiche [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount)-Werte und Render-Ausmaße ([`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height), [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers)).
- Wenn `occlusionQuerySet` festgelegt ist, hat der referenzierte [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) einen `type` von `"occlusion"`.

Für Farbanhang-Objekte:

- Die `view` ist renderbar, und das Format der `view` (d.h. im Descriptor des ursprünglichen [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)-Aufrufs angegeben) ist ein Farb-Render-Format.
- Wenn `resolveTarget` bereitgestellt wird:
  - Der `view`'s ursprünglicher [`GPUTexture`](/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist größer als 1.
  - Der `resolveTarget`'s ursprünglicher [`GPUTexture`](/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
  - `resolveTarget` ist renderbar.
  - Die Größen der Unterressourcen, für die `view` und `resolveTarget` eine Ansicht bieten, stimmen überein.
  - `view`'s und `resolveTarget`'s Formate stimmen überein.
- [Color attachments bytes per sample](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) ist kleiner oder gleich dem `maxColorAttachmentBytesPerSample`-[Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

Für Tiefen-/Stencil-Anhänge-Objekte:

- Die `view` ist renderbar, und ihr Format ist ein [depth-or-stencil](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, wird ein gültiger `depthClearValue` bereitgestellt.
- Wenn das Format der `view` ein kombiniertes Tiefen- oder Stencil-Format ist, entspricht `depthReadOnly` dem `stencilReadOnly`.
- Wenn das Format der `view` einen Tiefenaspekt aufweist und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn das Format der `view` einen Tiefenaspekt aufweist und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn das Format der `view` einen Stencilaspekt aufweist und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn das Format der `view` einen Stencilaspekt aufweist und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.

Für Zeitstempel-Abfragen:

- Die `timestamp-query`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Keine zwei `timestampWrites`-Objekte haben die gleiche `location`. In der Praxis bedeutet dies, dass nur zwei Zeitstempel-Abfragen pro Render-Pass ausgeführt werden können.
- Für jede Zeitstempel-Abfrage hat der `querySet` [`GPUQuerySet.type`](/de/docs/Web/API/GPUQuerySet/type) den Wert `"timestamp"`, und der `queryIndex`-Wert ist kleiner als die [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).
- Keine zwei `timestampWrites`-Objekte haben dasselbe `queryIndex` und `querySet`-Paar.

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Diese Befehle stammen von dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der über `beginRenderPass()` erstellt wurde:

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
