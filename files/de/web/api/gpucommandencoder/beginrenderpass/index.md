---
title: "GPUCommandEncoder: beginRenderPass() Methode"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: e5909a8f548695b72649ce32216c8fada21479c9
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginRenderPass()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle startet die Kodierung eines Render-Passes und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderings verwendet werden kann.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `colorAttachments`
      - : Ein Array von Objekten (siehe [Struktur des Farbattachment-Objekts](#struktur_des_farbattachment-objekts)), die die Farbattachments definieren, die bei der Ausführung dieses Render-Passes ausgegeben werden.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des Tiefen-/Stencilattachment-Objekts](#depthstencil_attachment_object_structure)), das das Tiefen-/Stencilattachment definiert, das bei der Ausführung dieses Render-Passes ausgegeben und getestet wird.
    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die ein Etikett bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl von Zeichenvorgängen angibt, die im Render-Pass durchgeführt werden. Dies wird von einigen Implementierungen verwendet, um die vor dem Render-Pass injizierte Arbeit zu dimensionieren. Sie sollten den Standardwert — 50000000 — beibehalten, es sei denn, Sie wissen, dass mehr Zeichenvorgänge durchgeführt werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das die Occlusion-Query-Ergebnisse für diesen Durchgang speichert.
    - `timestampWrites` {{optional_inline}}
      - : Ein Array von Objekten, das definiert, wo und wann Zeitstempel-Query-Werte für diesen Durchgang geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:
        - `querySet`
          - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) vom Typ `"timestamp"`, zu dem die Zeitstempelquery-Ergebnisse geschrieben werden.
        - `beginningOfPassWriteIndex`
          - : Eine Zahl, die den Query-Index in `querySet` angibt, an dem der Zeitstempel zu Beginn des Render-Passes geschrieben wird. Diese Angabe ist optional – wenn sie nicht definiert ist, wird kein Zeitstempel für den Beginn des Durchgangs geschrieben.
        - `endOfPassWriteIndex`
          - : Eine Zahl, die den Query-Index in `querySet` angibt, an dem der Zeitstempel am Ende des Render-Passes geschrieben wird. Diese Angabe ist optional – wenn sie nicht definiert ist, wird kein Zeitstempel für das Ende des Durchgangs geschrieben.

        > [!NOTE]
        > Das `timestamp-query` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert werden, um Zeitstempelqueries zu verwenden. Zeitstempelquery-Werte werden in Nanosekunden geschrieben, aber wie der Wert bestimmt wird, ist implementierungsabhängig.

### Struktur des Farbattachment-Objekts

Farbattachment-Objekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}
  - : Ein Farbwert, um die `view`-Textur vor der Ausführung des Render-Passes zu löschen. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` kann ein Array oder ein Objekt sein, das die vier Farbkomponenten `r`, `g`, `b` und `a` als Dezimalzahlen darstellt.

    Zum Beispiel können Sie ein Array wie `[0.0, 0.5, 1.0, 1.0]` oder ihr entsprechendes Objekt `{ r: 0.0, g: 0.5, b: 1.0, a: 1.0 }` übergeben.

    Wenn `clearValue` weggelassen wird, ist der Standardwert `{ r: 0, g: 0, b: 0, a: 0 }`.

- `depthSlice` {{optional_inline}}
  - : Eine Zahl, die den Index des 3D-Tiefenslice angibt, zu dem für dieses Farbattachment in der Fall eines 3D-`GPUTextureView`-`view` ausgegeben wird. Wenn angegeben, ermöglicht dies WebGPU, direkt zu Slices von 3D-Texturen innerhalb von Render-Pässen zu rendern.

- `loadOp`
  - : Ein enumerierter Wert, der die Ladevorgänge angibt, die vor der Ausführung des Render-Passes an `view` durchgeführt werden. Mögliche Werte sind:
    - `"clear"`: Lädt den `clearValue` für dieses Attachment in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für dieses Attachment in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `storeOp`
  - : Ein enumerierter Wert, der den Speichervorgang angibt, der nach der Ausführung des Render-Passes an `view` durchgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für dieses Attachment.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für dieses Attachment.
- `resolveTarget` {{optional_inline}}
  - : Ein Objekt, das die Texturunterressource darstellt, die die aufgelöste Ausgabe für dieses Farbattachment erhält, wenn `view` multisampled ist. Dies kann eines der folgenden sein:
    - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
    - [`GPUTexture`](/de/docs/Web/API/GPUTexture): Kann anstelle einer `GPUTextureView` verwendet werden, sofern ein Standardview gewünscht ist. Wenn in diesem Kontext verwendet, ist `GPUTexture` gleichwertig mit einem `GPUTextureView`-Objekt, das mit einem unerhinderten [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) Aufruf erstellt wurde.
- `view`
  - : Ein Objekt, das die Texturunterressource darstellt, die für dieses Farbattachment ausgegeben wird. Dies kann eines der folgenden sein:
    - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
    - [`GPUTexture`](/de/docs/Web/API/GPUTexture): Kann anstelle einer `GPUTextureView` verwendet werden, sofern ein Standardview gewünscht ist. Wenn in diesem Kontext verwendet, ist `GPUTexture` gleichwertig mit einem `GPUTextureView`-Objekt, das mit einem unerhinderten [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) Aufruf erstellt wurde.

    > [!NOTE]
    > Jedes Farb- oder Tiefen-/Stencil-Attachment muss eine eindeutige Texturunterressource sein, und Texturunterressourcen, die als Attachments verwendet werden, können nicht innerhalb des Render-Passes verwendet werden.

### Struktur des Tiefen-/Stencilattachment-Objekts

Das `depthStencilAttachment`-Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}
  - : Eine Zahl, die den Wert angibt, der vor der Ausführung des Render-Passes in die Tiefenkomponente des `view` gelöscht werden soll. Dieser Wert wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0,0 und 1,0 liegen, einschließlich.

- `depthLoadOp` {{optional_inline}}
  - : Ein enumerierter Wert, der den Ladevorgang angibt, der vor der Ausführung des Render-Passes an der Tiefenkomponente von `view` durchgeführt wird. Mögliche Werte sind:
    - `"clear"`: Lädt den `clearValue` für dieses Attachment in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für dieses Attachment in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `depthReadOnly` {{optional_inline}}
  - : Ein boolean. Die Einstellung des Werts auf `true` führt dazu, dass die Tiefenkomponente von `view` nur lesbar ist. Wenn `depthReadOnly` weggelassen wird, ist der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der den Speichervorgang angibt, der nach der Ausführung des Render-Passes an der Tiefenkomponente von `view` durchgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für dieses Attachment.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für dieses Attachment.
- `stencilClearValue` {{optional_inline}}
  - : Eine Zahl, die den Wert angibt, der vor der Ausführung des Render-Passes in die Stencilkomponente von `view` gelöscht werden soll. Dieser Wert wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` weggelassen wird, ist der Standardwert 0.

- `stencilLoadOp` {{optional_inline}}
  - : Ein enumerierter Wert, der den Ladevorgang angibt, der vor der Ausführung des Render-Passes an der Stencilkomponente von `view` durchgeführt wird. Mögliche Werte sind:
    - `"clear"`: Lädt den `clearValue` für dieses Attachment in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für dieses Attachment in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `stencilReadOnly` {{optional_inline}}
  - : Ein boolean. Die Einstellung des Werts auf `true` führt dazu, dass die Stencilkomponente von `view` nur lesbar ist. Wenn `stencilReadOnly` weggelassen wird, ist der Standardwert `false`.
- `stencilStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der den Speichervorgang angibt, der nach der Ausführung des Render-Passes an der Stencilkomponente von `view` durchgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für dieses Attachment.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für dieses Attachment.
- `view`
  - : Ein Objekt, das die Texturunterressource darstellt, die für dieses Tiefen-/Stencilattachment ausgegeben und gelesen wird. Dies kann eines der folgenden sein:
    - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
    - [`GPUTexture`](/de/docs/Web/API/GPUTexture): Kann anstelle einer `GPUTextureView` verwendet werden, sofern ein Standardview gewünscht ist. Wenn in diesem Kontext verwendet, ist `GPUTexture` gleichwertig mit einem `GPUTextureView`-Objekt, das mit einem unerhinderten [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) Aufruf erstellt wurde.

### Rückgabewert

Ein [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen bei der Aufruf von **`beginRenderPass()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `colorAttachments` nur `null`-Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleiche [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount)-Werte und Rendergrößen ([`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height), [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers)).
- Wenn `occlusionQuerySet` gesetzt ist, hat das referenzierte [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) einen `type` von `"occlusion"`.

Für Farbattachment-Objekte:

- Die `view` ist renderbar, und das Format der `view` (d.h. im Deskriptor des ursprünglichen [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) Aufrufs angegeben) ist ein farbrenderbares Format.
- Wenn `resolveTarget` bereitgestellt wird:
  - Die `view`'s ursprüngliche [`GPUTexture`](/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist größer als 1.
  - Die `resolveTarget`'s ursprüngliche [`GPUTexture`](/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
  - `resolveTarget` ist renderbar.
  - Die Größen der Unterressourcen, die `view` und `resolveTarget` bereitstellen, stimmen überein.
  - Die Formate von `view` und `resolveTarget` stimmen überein.
- [Color attachments bytes per sample](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) sind kleiner oder gleich dem `maxColorAttachmentBytesPerSample` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn der [`usage`](/de/docs/Web/API/GPUTexture/createView#usage) der `GPUTexture.createView()`-Operation, die die zugehörige Ansicht erstellt hat, das `TRANSIENT_ATTACHMENT`-Bit enthält:
  - `loadOp` ist `"clear"`.
  - `storeOp` ist `"discard"`.

Für Tiefen-/Stencilattachment-Objekte:

- Die `view` ist renderbar, und ihr Format ist ein [depth-or-stencil](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, wird ein gültiger `depthClearValue` bereitgestellt.
- Wenn das Format von `view` ein kombiniertes Tiefen- oder Stencilformat ist, entspricht `depthReadOnly` dem `stencilReadOnly`.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn das Format von `view` einen Stencilaspekt hat und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Stencilaspekt hat und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.
- Wenn der [`usage`](/de/docs/Web/API/GPUTexture/createView#usage) der `GPUTexture.createView()`-Operation, die die zugehörige Ansicht erstellt hat, das `TRANSIENT_ATTACHMENT`-Bit enthält:
  - Wenn das Format von `view` einen Tiefenaspekt hat:
    - `depthLoadOp` ist `"clear"`.
    - `depthStoreOp` ist `"discard"`.
  - Wenn das Format von `view` einen Stencilaspekt hat:
    - `stencilLoadOp` ist `"clear"`.
    - `stencilStoreOp` ist `"discard"`.

Für Zeitstempel-Queries:

- Das `timestamp-query` [Feature](/de/docs/Web/API/GPUSupportedFeatures) ist auf dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Anzahl von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Diese Befehle stammen von dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), das über `beginRenderPass()` erstellt wurde:

```js
// …

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

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
