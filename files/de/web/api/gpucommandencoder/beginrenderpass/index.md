---
title: "GPUCommandEncoder: beginRenderPass() Methode"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginRenderPass()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Schnittstelle beginnt mit der Codierung eines Renderpasses und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderns verwendet werden kann.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `colorAttachments`
      - : Ein Array von Objekten (siehe [Struktur des Farbanlageobjekts](#struktur_des_farbanlageobjekts)), die die Farbanlagen definieren, die beim Ausführen dieses Renderpasses ausgegeben werden.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des Tiefen-/Schablonanlageobjekts](#depthstencil_attachment_object_structure)), das die Tiefen-/Schablonanlage definiert, die ausgegeben und getestet wird, wenn dieser Renderpass ausgeführt wird.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl von Zeichnungsaufrufen angibt, die im Renderpass durchgeführt werden. Diese wird von einigen Implementierungen verwendet, um die vor dem Renderpass injizierte Arbeit zu dimensionieren. Sie sollten den Standardwert — 50000000 — beibehalten, es sei denn, Sie wissen, dass mehr Zeichnungsaufrufe durchgeführt werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das die Okklusionsabfrageergebnisse für diesen Durchgang speichert.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, das definiert, wo und wann Zeitstempelabfragewerte für diesen Durchgang geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `querySet`
          - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) des Typs `"timestamp"`, in das die Zeitstempelabfrageergebnisse geschrieben werden.
        - `beginningOfPassWriteIndex`
          - : Eine Zahl, die den Abfrageindex in `querySet` angibt, wo der Zeitstempel zu Beginn des Renderpasses geschrieben wird. Dies ist optional - wenn nicht definiert, wird kein Zeitstempel für den Beginn des Durchgangs geschrieben.
        - `endOfPassWriteIndex`
          - : Eine Zahl, die den Abfrageindex in `querySet` angibt, wo der Zeitstempel am Ende des Renderpasses geschrieben wird. Dies ist optional - wenn nicht definiert, wird kein Zeitstempel für das Ende des Durchgangs geschrieben.

        > [!NOTE]
        > Die `timestamp-query` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempelabfragen zu verwenden. Zeitstempelabfragewerte werden in Nanosekunden geschrieben, jedoch ist die Bestimmung des Wertes implementierungsabhängig.

### Struktur des Farbanlageobjekts

Farbanlageobjekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}

  - : Ein Farbwert, um die `view`-Textur vor der Ausführung des Renderpasses zu löschen. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` nimmt ein Array oder Objekt an, das die vier Farbkomponenten `r`, `g`, `b` und `a` als Dezimalzahlen darstellt.

    Zum Beispiel können Sie ein Array wie `[0.0, 0.5, 1.0, 1.0]` oder das entsprechende Objekt `{ r: 0.0, g: 0.5, b: 1.0, a: 1.0 }` übergeben.

    Wenn `clearValue` weggelassen wird, ist der Standardwert `{ r: 0, g: 0, b: 0, a: 0 }`.

- `depthSlice` {{optional_inline}}
  - : Eine Zahl, die den Index des 3D-Tiefenschnitts darstellt, der für diese Farbanlage, im Fall einer 3D [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) `view`, ausgegeben wird. Wenn angegeben, ermöglicht dies WebGPU direktes Rendern auf Schnitte von 3D-Texturen innerhalb von Renderpassagen.
- `loadOp`

  - : Ein aufzählbarer Wert, der angibt, welchen Ladebetrieb vor der Ausführung des Renderpasses auf `view` ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diese Anlage in den Renderpass.
    - `"load"`: Lädt den vorhandenen Wert für diese Anlage in den Renderpass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `storeOp`
  - : Ein aufzählbarer Wert, der angibt, welchen Speicherbetrieb nach der Ausführung des Renderpasses auf `view` ausgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den Resultatwert des Renderpasses für diese Anlage.
    - `"store"`: Speichert den Resultatwert des Renderpasses für diese Anlage.
- `resolveTarget` {{optional_inline}}
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt, das die Textur-Subressource darstellt, die den aufgelösten Output für diese Farbanlage erhält, falls `view` multisampled ist.
- `view`

  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt, das die Textur-Subressource darstellt, die für diese Farbanlage ausgegeben wird.

    > [!NOTE]
    > Jede Farb- oder Tiefen-/Schablonanlage muss eine eindeutige Textur-Subressource sein, und Textur-Subressourcen, die als Anlagen verwendet werden, können nicht innerhalb des Renderpasses verwendet werden.

### Struktur des Tiefen-/Schablonanlageobjekts

Das `depthStencilAttachment` Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}

  - : Eine Zahl, die angibt, auf welchen Wert die Tiefenkomponente von `view` vor der Ausführung des Renderpasses gelöscht wird. Dieser Wert wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0.0 und 1.0 liegen, einschließlich.

- `depthLoadOp` {{optional_inline}}

  - : Ein aufzählbarer Wert, der angibt, welchen Ladebetrieb vor der Ausführung des Renderpasses auf die Tiefenkomponente von `view` ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diese Anlage in den Renderpass.
    - `"load"`: Lädt den vorhandenen Wert für diese Anlage in den Renderpass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `depthReadOnly` {{optional_inline}}
  - : Ein Boolescher Wert. Setzt den Wert auf `true`, damit die Tiefenkomponente von `view` nur gelesen werden kann. Wenn `depthReadOnly` weggelassen wird, ist der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}
  - : Ein aufzählbarer Wert, der angibt, welchen Speicherbetrieb nach der Ausführung des Renderpasses auf die Tiefenkomponente von `view` ausgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den Resultatwert des Renderpasses für diese Anlage.
    - `"store"`: Speichert den Resultatwert des Renderpasses für diese Anlage.
- `stencilClearValue` {{optional_inline}}

  - : Eine Zahl, die angibt, auf welchen Wert die Schablonenkomponente von `view` vor der Ausführung des Renderpasses gelöscht wird. Dieser Wert wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` weggelassen wird, ist der Standardwert 0.

- `stencilLoadOp` {{optional_inline}}

  - : Ein aufzählbarer Wert, der angibt, welchen Ladebetrieb vor der Ausführung des Renderpasses auf die Schablonenkomponente von `view` ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diese Anlage in den Renderpass.
    - `"load"`: Lädt den vorhandenen Wert für diese Anlage in den Renderpass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `stencilReadOnly` {{optional_inline}}
  - : Ein Boolescher Wert. Setzt den Wert auf `true`, damit die Schablonenkomponente von `view` nur gelesen werden kann. Wenn `stencilReadOnly` weggelassen wird, ist der Standardwert `false`.
- `stencilStoreOp` {{optional_inline}}
  - : Ein aufzählbarer Wert, der angibt, welchen Speicherbetrieb nach der Ausführung des Renderpasses auf die Schablonenkomponente von `view` ausgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den Resultatwert des Renderpasses für diese Anlage.
    - `"store"`: Speichert den Resultatwert des Renderpasses für diese Anlage.
- `view`
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt, das die Textur-Subressource darstellt, die für diese Tiefen-/Schablonanlage ausgegeben und gelesen wird.

### Rückgabewert

Eine Instanz des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginRenderPass()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich der [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxColorAttachments` [Grenze](/de/docs/Web/API/GPUSupportedLimits).
- Wenn `colorAttachments` nur `null`-Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleiche [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) Werte und Renderausdehnungen ([`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height), [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers)).
- Wenn `occlusionQuerySet` gesetzt ist, hat das referenzierte [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) einen `type` von `"occlusion"`.

Für Farbanlageobjekte

- Die `view` ist renderbar, und das Format der `view` (d.h. im Descriptor des ursprünglichen [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) Aufrufs angegeben) ist ein farbrenderbares Format.
- Wenn `resolveTarget` bereitgestellt ist:
  - Der `view`s Ursprungs-`GPUTexture`(/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist größer als 1.
  - Der `resolveTarget`s Ursprungs-`GPUTexture`(/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
  - `resolveTarget` ist renderbar.
  - Die Größen der Subressourcen, die `view` und `resolveTarget` eine Ansicht bieten, stimmen überein.
  - `view`s und `resolveTarget`s Formate stimmen überein.
- [Farbanlagen Bytes pro Sample](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) ist kleiner oder gleich der [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxColorAttachmentBytesPerSample` [Grenze](/de/docs/Web/API/GPUSupportedLimits).

Für Tiefen-/Schablone-Anlageobjekte:

- Die `view` ist renderbar, und ihr Format ist ein [depth-or-stencil](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, wird ein gültiges `depthClearValue` bereitgestellt.
- Wenn das Format der `view` ein kombiniertes Tiefen- oder Schablonenformat ist, muss `depthReadOnly` mit `stencilReadOnly` übereinstimmen.
- Wenn das Format der `view` einen Tiefenaspekt hat und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn das Format der `view` einen Tiefenaspekt hat und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn das Format der `view` einen Schablonenaspekt hat und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn das Format der `view` einen Schablonenaspekt hat und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.

Für Zeitstempelabfragen:

- Die `timestamp-query` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.

## Beispiele

In unserem [Basic Render Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Reihe von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Diese Befehle stammen vom [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der über `beginRenderPass()` erstellt wurde:

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
