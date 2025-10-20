---
title: "GPUCommandEncoder: beginRenderPass() Methode"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: 591a2a2c593e468c9898c9cc310a455ae2542f05
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginRenderPass()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Schnittstelle startet die Kodierung eines Render-Passes und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderns verwendet werden kann.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `colorAttachments`
      - : Ein Array von Objekten (siehe [Struktur von Farbattachment-Objekten](#struktur_von_farbattachment-objekten)), die die Farbattachments definieren, auf die beim Ausführen dieses Render-Passes ausgegeben wird.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur von Tiefen-/Stencilattachment-Objekten](#depthstencil_attachment_object_structure)), das das Tiefen-/Stencilattachment definiert, auf das ausgegeben wird und gegen das getestet wird, wenn dieser Render-Pass ausgeführt wird.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl an Draw-Calls angibt, die im Render-Pass ausgeführt werden. Dies wird von einigen Implementierungen verwendet, um Arbeiten zu dimensionieren, die vor dem Render-Pass eingefügt werden. Sie sollten den Standardwert – 50000000 – beibehalten, es sei denn, Sie wissen, dass mehr Draw-Calls ausgeführt werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das die Okklusionsabfrageergebnisse für diesen Pass speichert.
    - `timestampWrites` {{optional_inline}}
      - : Ein Array von Objekten, die definieren, wo und wann Zeitstempelabfragewerte für diesen Pass geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:
        - `querySet`
          - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) vom Typ `"timestamp"`, in das die Ergebnisse der Zeitstempelabfrage geschrieben werden.
        - `beginningOfPassWriteIndex`
          - : Eine Zahl, die den Abfrageindex in `querySet` angibt, in den der Zeitstempel zu Beginn des Render-Passes geschrieben wird. Dies ist optional – wenn nicht definiert, wird kein Zeitstempel für den Beginn des Passes geschrieben.
        - `endOfPassWriteIndex`
          - : Eine Zahl, die den Abfrageindex in `querySet` angibt, in den der Zeitstempel am Ende des Render-Passes geschrieben wird. Dies ist optional – wenn nicht definiert, wird kein Zeitstempel für das Ende des Passes geschrieben.

        > [!NOTE]
        > Die `timestamp-query` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempelabfragen verwenden zu können. Zeitstempelabfragewerte werden in Nanosekunden geschrieben, jedoch ist es implementierungsdefiniert, wie der Wert bestimmt wird.

### Struktur von Farbattachment-Objekten

Farbattachment-Objekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}
  - : Ein Farbwert, um die `view`-Textur vor der Ausführung des Render-Passes zu löschen. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` nimmt ein Array oder Objekt, das die vier Farbkomponenten `r`, `g`, `b` und `a` als Dezimalzahlen darstellt.

    Zum Beispiel können Sie ein Array wie `[0.0, 0.5, 1.0, 1.0]` oder sein äquivalentes Objekt `{ r: 0.0, g: 0.5, b: 1.0, a: 1.0 }` übergeben.

    Wenn `clearValue` weggelassen wird, ist der Standardwert `{ r: 0, g: 0, b: 0, a: 0 }`.

- `depthSlice` {{optional_inline}}
  - : Eine Zahl, die den Index des 3D-Tiefenschnitts darstellt, auf den für dieses Farbattachment bei einem 3D [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) `view` ausgegeben wird. Wenn angegeben, ermöglicht dies WebGPU, direkt auf Scheiben von 3D-Texturen innerhalb von Render-Pässen zu rendern.

- `loadOp`
  - : Ein enumerierter Wert, der die Ladeoperation angibt, die auf `view` vor der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:
    - `"clear"`: Lädt den `clearValue` für dieses Attachment in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für dieses Attachment in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Initialwert keine Rolle spielt, da dies auf einigen Geräten, wie z. B. Mobilgeräten, eine bessere Leistung bietet.

- `storeOp`
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die auf `view` nach der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für dieses Attachment.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für dieses Attachment.
- `resolveTarget` {{optional_inline}}
  - : Ein Objekt, das die Textur-Subressource darstellt, die den aufgelösten Output für dieses Farbattachment empfängt, wenn `view` multisampled ist. Dies kann eines der folgenden sein:
    - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
    - [`GPUTexture`](/de/docs/Web/API/GPUTexture): Kann anstelle eines `GPUTextureView` verwendet werden, vorausgesetzt, eine Standardansicht ist gewünscht. In diesem Kontext ist `GPUTexture` gleichbedeutend mit einem `GPUTextureView`-Objekt, das mit einem [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)-Aufruf ohne angegebenes Argument erstellt wurde.
- `view`
  - : Ein Objekt, das die Textur-Subressource darstellt, die für dieses Farbattachment ausgegeben wird. Dies kann eines der folgenden sein:
    - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
    - [`GPUTexture`](/de/docs/Web/API/GPUTexture): Kann anstelle eines `GPUTextureView` verwendet werden, vorausgesetzt, eine Standardansicht ist gewünscht. In diesem Kontext ist `GPUTexture` gleichbedeutend mit einem `GPUTextureView`-Objekt, das mit einem [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)-Aufruf ohne angegebenes Argument erstellt wurde.

    > [!NOTE]
    > Jedes Farb- oder Tiefen-/Stencilattachment muss eine eindeutige Textur-Subressource sein, und Textur-Subressourcen, die als Attachments verwendet werden, können nicht innerhalb des Render-Passes verwendet werden.

### Struktur von Tiefen-/Stencilattachment-Objekten

Das `depthStencilAttachment`-Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}
  - : Eine Zahl, die den Wert angibt, auf den die Tiefenkomponente von `view` vor der Ausführung des Render-Passes gelöscht wird. Dies wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0,0 und 1,0 liegen, inklusive.

- `depthLoadOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Ladeoperation angibt, die auf die Tiefenkomponente von `view` vor der Ausführung des Render-Passes ausgeführt wird. Mögliche Werte sind:
    - `"clear"`: Lädt den `clearValue` für dieses Attachment in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für dieses Attachment in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Initialwert keine Rolle spielt, da dies auf einigen Geräten, wie z. B. Mobilgeräten, eine bessere Leistung bietet.

- `depthReadOnly` {{optional_inline}}
  - : Ein boolescher Wert. Wenn der Wert auf `true` gesetzt ist, wird die Tiefenkomponente von `view` schreibgeschützt. Wenn `depthReadOnly` weggelassen wird, ist der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die auf die Tiefenkomponente von `view` nach der Ausführung des Render-Passes ausgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für dieses Attachment.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für dieses Attachment.
- `stencilClearValue` {{optional_inline}}
  - : Eine Zahl, die den Wert angibt, auf den die Stencilkomponente von `view` vor der Ausführung des Render-Passes gelöscht wird. Dies wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` weggelassen wird, ist der Standardwert 0.

- `stencilLoadOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Ladeoperation angibt, die auf die Stencilkomponente von `view` vor der Ausführung des Render-Passes ausgeführt wird. Mögliche Werte sind:
    - `"clear"`: Lädt den `clearValue` für dieses Attachment in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für dieses Attachment in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Initialwert keine Rolle spielt, da dies auf einigen Geräten, wie z. B. Mobilgeräten, eine bessere Leistung bietet.

- `stencilReadOnly` {{optional_inline}}
  - : Ein boolescher Wert. Wenn der Wert auf `true` gesetzt ist, wird die Stencilkomponente von `view` schreibgeschützt. Wenn `stencilReadOnly` weggelassen wird, ist der Standardwert `false`.
- `stencilStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die auf die Stencilkomponente von `view` nach der Ausführung des Render-Passes ausgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für dieses Attachment.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für dieses Attachment.
- `view`
  - : Ein Objekt, das die Textur-Subressource darstellt, die für dieses Tiefen-/Stencilattachment ausgegeben und von ihr gelesen wird. Dies kann eines der folgenden sein:
    - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
    - [`GPUTexture`](/de/docs/Web/API/GPUTexture): Kann anstelle eines `GPUTextureView` verwendet werden, vorausgesetzt, eine Standardansicht ist gewünscht. In diesem Kontext ist `GPUTexture` gleichbedeutend mit einem `GPUTextureView`-Objekt, das mit einem [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)-Aufruf ohne angegebenes Argument erstellt wurde.

### Rückgabewert

Eine Instanz des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginRenderPass()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `colorAttachments` nur `null`-Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleichwertige [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) Werte und Render-Umfänge ([`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height), [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers)).
- Wenn `occlusionQuerySet` gesetzt ist, hat das referenzierte [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) einen `type` von `"occlusion"`.

Für Farbattachment-Objekte:

- Die `view` ist renderbar, und das Format der `view` (d.h. angegeben im Descriptor des ursprünglichen [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)-Aufrufs) ist ein renderbares Farbformat.
- Wenn `resolveTarget` bereitgestellt wird:
  - Die originelle [`GPUTexture`](/de/docs/Web/API/GPUTexture) der `view` hat eine [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) von größer als 1.
  - Die originelle [`GPUTexture`](/de/docs/Web/API/GPUTexture) der `resolveTarget` hat eine [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) von 1.
  - `resolveTarget` ist renderbar.
  - Die Größen der Subressourcen, die `view` und `resolveTarget` bereitstellen, stimmen überein.
  - Die Formate von `view` und `resolveTarget` stimmen überein.
- [Farbattachments Bytes pro Sample](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) sind kleiner oder gleich dem `maxColorAttachmentBytesPerSample` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

Für Tiefen-/Stencilattachment-Objekte:

- Die `view` ist renderbar und ihr Format ist ein [depth-or-stencil](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, wird ein gültiger `depthClearValue` bereitgestellt.
- Wenn das Format der `view` ein kombiniertes depth-or-stencil Format ist, stimmen `depthReadOnly` und `stencilReadOnly` überein.
- Wenn das Format der `view` einen Tiefenaspekt hat und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn das Format der `view` einen Tiefenaspekt hat und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn das Format der `view` einen Stencilaspekt hat und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn das Format der `view` einen Stencilaspekt hat und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.

Für Zeitstempelabfragen:

- Die `timestamp-query` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Vielzahl von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Diese Befehle stammen aus dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der über `beginRenderPass()` erstellt wird:

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

## Spezifikation

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
