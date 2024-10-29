---
title: "GPUCommandEncoder: Methode beginRenderPass()"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: 2379747e3cefc009c6a00ec52e88d66ff15c5397
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`beginRenderPass()`** des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Interfaces startet die Kodierung eines Render-Durchlaufs und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderprozesses verwendet werden kann.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `colorAttachments`
      - : Ein Array von Objekten (siehe [Struktur des Farbattachment-Objekts](#struktur_des_farbattachment-objekts)), das die Farbattachments definiert, die beim Ausführen dieses Render-Durchlaufs ausgegeben werden.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des Tiefen-/Stencilattachments](#depthstencil_attachment_object_structure)), das das Tiefen-/Stencilattachment definiert, das beim Ausführen dieses Render-Durchlaufs ausgegeben und getestet wird.
    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die ein Label bereitstellt, das zur Identifikation des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl von Zeichenaufrufen angibt, die im Renderdurchlauf ausgeführt werden. Dies wird von einigen Implementierungen verwendet, um die Arbeit zu dimensionieren, die vor dem Render-Durchlauf eingefügt wird. Sie sollten den Standardwert — 50000000 — beibehalten, es sei denn, Sie wissen, dass mehr Zeichenaufrufe stattfinden werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Der [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), der die Occlusion-Query-Ergebnisse für diesen Durchlauf speichert.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, die definieren, wo und wann Zeitstempelfragwerte für diesen Durchlauf geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `location`: Ein enumerierter Wert, der angibt, wann der Zeitstempel ausgeführt wird. Verfügbare Werte sind:
          - `"beginning"`: Der Zeitstempel wird zusammen mit den anderen kodierten Befehlen im Berechnungsdurchlauf ausgeführt, sobald der entsprechende [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) übergeben wird.
          - `"end"`: Der Zeitstempel wird als Teil einer separaten Liste von Zeitstempelattachments ausgeführt, sobald der Durchlauf endet.
        - `queryIndex`: Eine Zahl, die die Indexposition im `querySet` angibt, an der der Zeitstempel geschrieben wird.
        - `querySet`: Der [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), in den der Zeitstempel geschrieben wird.

        > [!NOTE]
        > Die `timestamp-query`- [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempelfragen zu verwenden.

### Struktur des Farbattachment-Objekts

Farbattachment-Objekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}

  - : Ein Farbwert, der die `view`-Textur vor der Ausführung des Render-Durchlaufs löscht. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` nimmt ein Array oder Objekt auf, das die vier Farbbestandteile `r`, `g`, `b` und `a` als Dezimalwerte darstellt.

    Es folgt ein Beispielarray:

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

    Wenn `clearValue` weggelassen wird, beträgt der Standardwert `{r: 0, g: 0, b: 0, a: 0}`.

- `loadOp`

  - : Ein enumerierter Wert, der den Ladevorgang angibt, der vor der Ausführung des Render-Durchlaufs bei `view` ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diese Zuordnung in den Renderdurchlauf.
    - `"load"`: Lädt den vorhandenen Wert für diese Zuordnung in den Renderdurchlauf.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobilgeräten zu einer besseren Leistung führt.

- `storeOp`
  - : Ein enumerierter Wert, der den Speichervorgang angibt, der nach der Ausführung des Render-Durchlaufs bei `view` durchgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Durchlaufs für dieses Attachment.
    - `"store"`: Speichert den resultierenden Wert des Render-Durchlaufs für dieses Attachment.
- `resolveTarget` {{optional_inline}}
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die die aufgelöste Ausgabe für dieses Farbattachment erhält, wenn `view` multisampled ist.
- `view`

  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die für dieses Farbattachment ausgegeben wird.

    > [!NOTE]
    > Jedes Farb- oder Tiefen-/Stencilattachment muss eine eindeutige Textur-Subressource sein, und als Attachments verwendete Textur-Subressourcen können nicht im Render-Durchlauf verwendet werden.

### Struktur des Tiefen-/Stencilattachment-Objekts

Das `depthStencilAttachment`-Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, um die Tiefenkomponente von `view` vor der Ausführung des Render-Durchlaufs zu löschen. Dies wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0.0 und 1.0 liegen, einschließlich.

- `depthLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der den Ladevorgang angibt, der vor der Ausführung des Render-Durchlaufs bei der Tiefenkomponente von `view` ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diese Zuordnung in den Renderdurchlauf.
    - `"load"`: Lädt den vorhandenen Wert für diese Zuordnung in den Renderdurchlauf.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobilgeräten zu einer besseren Leistung führt.

- `depthReadOnly` {{optional_inline}}
  - : Ein boolescher Wert. Wenn der Wert auf `true` gesetzt wird, wird die Tiefenkomponente von `view` schreibgeschützt. Wenn `depthReadOnly` weggelassen wird, beträgt der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der den Speichervorgang angibt, der nach der Ausführung des Render-Durchlaufs bei der Tiefenkomponente von `view` durchgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Durchlaufs für dieses Attachment.
    - `"store"`: Speichert den resultierenden Wert des Render-Durchlaufs für dieses Attachment.
- `stencilClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, um die Stencilkomponente von `view` vor der Ausführung des Render-Durchlaufs zu löschen. Dies wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` weggelassen wird, beträgt der Standardwert 0.

- `stencilLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der den Ladevorgang angibt, der vor der Ausführung des Render-Durchlaufs bei der Stencilkomponente von `view` ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diese Zuordnung in den Renderdurchlauf.
    - `"load"`: Lädt den vorhandenen Wert für diese Zuordnung in den Renderdurchlauf.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobilgeräten zu einer besseren Leistung führt.

- `stencilReadOnly` {{optional_inline}}
  - : Ein boolescher Wert. Wenn der Wert auf `true` gesetzt wird, wird die Stencilkomponente von `view` schreibgeschützt. Wenn `stencilReadOnly` weggelassen wird, beträgt der Standardwert `false`.
- `stencilStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der den Speichervorgang angibt, der nach der Ausführung des Render-Durchlaufs bei der Stencilkomponente von `view` durchgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Durchlaufs für dieses Attachment.
    - `"store"`: Speichert den resultierenden Wert des Render-Durchlaufs für dieses Attachment.
- `view`
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die für dieses Tiefen-/Stencilattachment ausgegeben und gelesen wird.

### Rückgabewert

Eine Instanz des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginRenderPass()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `colorAttachments` nur `null`-Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleiche [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount)-Werte und Rendering-Ausdehnungen ([`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height), [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers)).
- Wenn `occlusionQuerySet` gesetzt ist, hat der referenzierte [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) einen `type` von `"occlusion"`.

Für Farbattachment-Objekte:

- Das `view` ist renderfähig, und das Format des `view` (d.h. angegeben in der Beschreibung des ursprünglichen [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)-Aufrufs) ist ein Farb-Renderformat.
- Wenn `resolveTarget` bereitgestellt wird:
  - Der `sampleCount` des ursprünglichen [`GPUTexture`](/de/docs/Web/API/GPUTexture) von `view` ist größer als 1.
  - Der `sampleCount` des ursprünglichen [`GPUTexture`](/de/docs/Web/API/GPUTexture) von `resolveTarget` ist 1.
  - `resolveTarget` ist renderfähig.
  - Die Größen der Subressourcen, für die `view` und `resolveTarget` eine Ansicht darstellen, stimmen überein.
  - Die Formate von `view` und `resolveTarget` stimmen überein.
- Die [Bytes pro Probe in Farbattachments](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) ist kleiner oder gleich dem `maxColorAttachmentBytesPerSample` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

Für Tiefen-/Stencilattachment-Objekte:

- Das `view` ist renderfähig, und sein Format ist ein [depth-or-stencil](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, wird ein gültiger `depthClearValue` bereitgestellt.
- Wenn das Format von `view` ein kombiniertes Tiefen- oder Stencilformat ist, stimmen `depthReadOnly` mit `stencilReadOnly` überein.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn das Format von `view` einen Stencilaspekt hat und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Stencilaspekt hat und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.

Für Zeitstempelfragen:

- Die Funktion `timestamp-query` ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Keine zwei `timestampWrites`-Objekte haben die gleiche `location`. Dies bedeutet, dass Sie pro Render-Durchlauf nur zwei Zeitstempelfragen ausführen können.
- Für jede Zeitstempelfrage ist der `querySet` [`GPUQuerySet.type`](/de/docs/Web/API/GPUQuerySet/type) `"timestamp"`, und der `queryIndex`-Wert ist kleiner als die [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).
- Keine zwei `timestampWrites`-Objekte haben dasselbe `queryIndex`- und `querySet`-Paar.

## Beispiele

In unserem [Basic Render Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Reihe von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Diese Befehle stammen vom [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der über `beginRenderPass()` erstellt wurde:

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
