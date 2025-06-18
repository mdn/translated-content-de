---
title: "GPUCommandEncoder: beginRenderPass() Methode"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginRenderPass()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Schnittstelle startet die Kodierung eines Render-Passes und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung der Darstellung verwendet werden kann.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `colorAttachments`
      - : Ein Array von Objekten (siehe [Struktur des Farb-Anhangsobjekts](#struktur_des_farb-anhangsobjekts)), das die Farb-Anhänge definiert, die beim Ausführen dieses Render-Passes ausgegeben werden sollen.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des Tiefen-/Schablonen-Anhangsobjekts](#depthstencil_attachment_object_structure)), das den Tiefen-/Schablonen-Anhang definiert, der beim Ausführen dieses Render-Passes ausgegeben und getestet wird.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl von Zeichenaufrufen angibt, die im Render-Pass durchgeführt werden. Dies wird von einigen Implementierungen verwendet, um die Arbeit zu dimensionieren, die vor dem Render-Pass eingefügt wird. Sie sollten den Standardwert — 50000000 — beibehalten, es sei denn, Sie wissen, dass mehr Zeichenaufrufe gemacht werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das die Ergebnisse der Occlusion-Abfragen für diesen Pass speichert.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, die definieren, wo und wann Zeitstempel-Abfragewerte für diesen Pass geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `querySet`
          - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) vom Typ `"timestamp"`, in das die Ergebnisse der Zeitstempel-Abfragen geschrieben werden.
        - `beginningOfPassWriteIndex`
          - : Eine Zahl, die den Abfrageindex in `querySet` angibt, wo der Zeitstempel zu Beginn des Render-Passes geschrieben wird. Dies ist optional - falls nicht definiert, wird kein Zeitstempel für den Anfang des Passes geschrieben.
        - `endOfPassWriteIndex`
          - : Eine Zahl, die den Abfrageindex in `querySet` angibt, wo der Zeitstempel am Ende des Render-Passes geschrieben wird. Dies ist optional - falls nicht definiert, wird kein Zeitstempel für das Ende des Passes geschrieben.

        > [!NOTE]
        > Um Zeitstempel-Abfragen zu verwenden, muss die `timestamp-query`- [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert sein. Zeitstempel-Abfragewerte werden in Nanosekunden geschrieben, aber wie der Wert ermittelt wird, ist implementationsspezifisch.

### Struktur des Farb-Anhangsobjekts

Farb-Anhangsobjekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}

  - : Ein Farbwert, um die `view`-Textur zu löschen, bevor der Render-Pass ausgeführt wird. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` nimmt ein Array oder ein Objekt, das die vier Farbkomponenten `r`, `g`, `b` und `a` als Dezimalzahlen repräsentiert.

    Beispielsweise können Sie ein Array wie `[0.0, 0.5, 1.0, 1.0]` oder das entsprechende Objekt `{ r: 0.0, g: 0.5, b: 1.0, a: 1.0 }` übergeben.

    Wenn `clearValue` weggelassen wird, wird `{ r: 0, g: 0, b: 0, a: 0 }` als Standardwert verwendet.

- `depthSlice` {{optional_inline}}

  - : Eine Zahl, die den Index des 3D-Tiefenabschnitts darstellt, der für diesen Farbanhang ausgegeben wird, im Falle einer 3D-[`GPUTextureView`](/de/docs/Web/API/GPUTextureView) `view`. Wenn angegeben, kann WebGPU direkt auf Abschnitte von 3D-Texturen innerhalb von Render-Pässen rendern.

- `loadOp`

  - : Ein enumerierter Wert, der die Ladeoperation angibt, die vor der Ausführung des Render-Passes auf `view` durchgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten, wie Mobiltelefonen, eine bessere Leistung bietet.

- `storeOp`
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die nach der Ausführung des Render-Passes auf `view` durchgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.
- `resolveTarget` {{optional_inline}}
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die die aufgelöste Ausgabe für diesen Farbanhang erhält, falls `view` multisampelt ist.
- `view`

  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die für diesen Farbanhang ausgegeben wird.

    > [!NOTE]
    > Jeder Farb- oder Tiefen-/Schablonen-Anhang muss eine eindeutige Textur-Subressource sein, und Textur-Subressourcen, die als Anhänge verwendet werden, können nicht innerhalb des Render-Passes verwendet werden.

### Struktur des Tiefen-/Schablonen-Anhangsobjekts

Das `depthStencilAttachment` Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}

  - : Eine Zahl, die angibt, welchen Wert die Tiefenkomponente von `view` vor der Ausführung des Render-Passes löschen soll. Dies wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0.0 und 1.0 liegen, einschließlich.

- `depthLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der die Ladeoperation angibt, die vor der Ausführung des Render-Passes auf der Tiefenkomponente von `view` durchgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten, wie Mobiltelefonen, eine bessere Leistung bietet.

- `depthReadOnly` {{optional_inline}}
  - : Ein Boolean. Wenn der Wert auf `true` gesetzt wird, ist die Tiefenkomponente von `view` schreibgeschützt. Wenn `depthReadOnly` weggelassen wird, ist der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die nach der Ausführung des Render-Passes auf der Tiefenkomponente von `view` durchgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.
- `stencilClearValue` {{optional_inline}}

  - : Eine Zahl, die angibt, welchen Wert die Schablonenkomponente von `view` vor der Ausführung des Render-Passes löschen soll. Dies wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` weggelassen wird, ist der Standardwert 0.

- `stencilLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der die Ladeoperation angibt, die vor der Ausführung des Render-Passes auf der Schablonenkomponente von `view` durchgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten, wie Mobiltelefonen, eine bessere Leistung bietet.

- `stencilReadOnly` {{optional_inline}}
  - : Ein Boolean. Wenn der Wert auf `true` gesetzt wird, ist die Schablonenkomponente von `view` schreibgeschützt. Wenn `stencilReadOnly` weggelassen wird, ist der Standardwert `false`.
- `stencilStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die nach der Ausführung des Render-Passes auf der Schablonenkomponente von `view` durchgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.
- `view`
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die für diesen Tiefen-/Schablonen-Anhang ausgegeben und gelesen wird.

### Rückgabewert

Eine Instanz des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginRenderPass()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits).
- Wenn `colorAttachments` nur `null` Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleiche [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) Werte und Render-Extents ([`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height), [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers)).
- Wenn `occlusionQuerySet` gesetzt ist, hat der referenzierte [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) einen `type` von `"occlusion"`.

Für Farb-Anhangsobjekte

- Die `view` ist darstellbar und das Format der `view` (d.h. im Deskriptor des sich ergebenden [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) Aufrufs spezifiziert) ist ein Farbdarstellbares Format.
- Falls `resolveTarget` bereitgestellt wird:
  - Die `view`'s sich ergebende [`GPUTexture`](/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist größer als 1.
  - Die `resolveTarget`'s sich ergebende [`GPUTexture`](/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
  - `resolveTarget` ist darstellbar.
  - Die Größen der Subressourcen, die `view` und `resolveTarget` zur Verfügung stellen, stimmen überein.
  - `view`'s und `resolveTarget`'s Formate stimmen überein.
- [Bytes pro Beispiel der Farbanhänge](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxColorAttachmentBytesPerSample` [Limit](/de/docs/Web/API/GPUSupportedLimits).

Für Tiefen-/Schablonen-Anhangsobjekte:

- Die `view` ist darstellbar und ihr Format ist ein [Tiefen-oder-Schablonen](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, wird ein gültiger `depthClearValue` bereitgestellt.
- Wenn `view`'s Format ein kombiniertes Tiefen-oder-Schablonen Format hat, müssen `depthReadOnly` und `stencilReadOnly` übereinstimmen.
- Wenn `view`'s Format einen Tiefenaspekt hat und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn `view`'s Format einen Tiefenaspekt hat und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn `view`'s Format einen Schablonaspekt hat und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn `view`'s Format einen Schablonaspekt hat und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.

Für Zeitstempelabfragen:

- Die `timestamp-query` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Anzahl von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Diese Befehle stammen von dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der über `beginRenderPass()` erstellt wurde:

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
