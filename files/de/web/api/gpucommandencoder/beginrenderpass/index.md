---
title: "GPUCommandEncoder: beginRenderPass() Methode"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginRenderPass()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle startet die Kodierung eines Render-Passes und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderings verwendet werden kann.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `colorAttachments`
      - : Ein Array von Objekten (siehe [Struktur des Farb-Anhangsobjekts](#struktur_des_farb-anhangsobjekts)), das die Farb-Anhänge definiert, auf die beim Ausführen dieses Render-Passes ausgegeben wird.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des Tiefen/Stencil-Anhangsobjekts](#depthstencil_attachment_object_structure)), das den Tiefen/Stencil-Anhang definiert, auf den ausgegeben wird und gegen den geprüft wird, wenn dieser Render-Pass ausgeführt wird.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label angibt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl von Zeichnungsaufrufen angibt, die im Render-Pass durchgeführt werden. Dies wird von einigen Implementierungen verwendet, um die vor dem Render-Pass eingefügte Arbeit zu dimensionieren. Sie sollten den Standardwert — 50000000 — beibehalten, es sei denn, Sie wissen, dass mehr Zeichnungsaufrufe durchgeführt werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das die Ergebnisse der Occlusion-Abfragen für diesen Pass speichert.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, die definieren, wo und wann Zeitstempel-Abfragewerte für diesen Pass geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `location`: Ein aufgezählter Wert, der angibt, wann der Zeitstempel ausgeführt wird. Verfügbare Werte sind:
          - `"beginning"`: Der Zeitstempel wird zusammen mit den anderen kodierten Befehlen im Berechnungs-Pass ausgeführt, sobald der entsprechende [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) übergeben wird.
          - `"end"`: Der Zeitstempel wird als Teil einer separaten Liste von Zeitstempel-Anhängen ausgeführt, sobald der Pass endet.
        - `queryIndex`: Eine Zahl, die die Indexposition im `querySet` angibt, in die der Zeitstempel geschrieben wird.
        - `querySet`: Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), in das der Zeitstempel geschrieben wird.

        > [!NOTE]
        > Die `timestamp-query`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempelabfragen zu verwenden.

### Struktur des Farb-Anhangsobjekts

Farb-Anhangsobjekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}

  - : Ein Farbwert, um die `view`-Textur vor Ausführung des Render-Passes zu löschen. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` nimmt ein Array oder ein Objekt entgegen, das die vier Farbkomponenten `r`, `g`, `b` und `a` als Dezimalzahlen darstellt.

    Zum Beispiel können Sie ein Array wie `[0.0, 0.5, 1.0, 1.0]` oder das entsprechende Objekt `{ r: 0.0, g: 0.5, b: 1.0, a: 1.0 }` übergeben.

    Wenn `clearValue` weggelassen wird, ist der Standardwert `{ r: 0, g: 0, b: 0, a: 0 }`.

- `depthSlice` {{optional_inline}}

  - : Eine Zahl, die den Index des 3D-Tiefenslices repräsentiert, auf den für diesen Farbanhang ausgegeben wird, im Falle einer 3D-[`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-`view`. Wenn angegeben, ermöglicht dies WebGPU, direkt in Slices von 3D-Texturen innerhalb von Render-Passes zu rendern.

- `loadOp`

  - : Ein aufgezählter Wert, der die Ladeoperation angibt, die vor der Ausführung des Render-Passes auf `view` durchgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten, wie Mobilgeräten, eine bessere Leistung bringt.

- `storeOp`

  - : Ein aufgezählter Wert, der die Speicheroperation angibt, die nach der Ausführung des Render-Passes auf `view` durchgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.

- `resolveTarget` {{optional_inline}}

  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Texturunterressource repräsentiert, die den aufgelösten Output für diesen Farbanhang erhält, wenn `view` multisampled ist.

- `view`

  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Texturunterressource repräsentiert, die für diesen Farbanhang ausgegeben wird.

    > [!NOTE]
    > Jeder Farb- oder Tiefen/Stencil-Anhang muss eine eindeutige Texturunterressource sein, und Texturunterressourcen, die als Anhänge verwendet werden, dürfen nicht im Render-Pass verwendet werden.

### Struktur des Tiefen/Stencil-Anhangsobjekts

Das `depthStencilAttachment`-Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, um die Tiefenkomponente von `view` vor der Ausführung des Render-Passes zu löschen. Dieser wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0.0 und 1.0 liegen, einschließlich.

- `depthLoadOp` {{optional_inline}}

  - : Ein aufgezählter Wert, der die Ladeoperation angibt, die vor der Ausführung des Render-Passes auf die Tiefenkomponente von `view` durchgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten, wie Mobilgeräten, eine bessere Leistung bringt.

- `depthReadOnly` {{optional_inline}}
  - : Ein boolescher Wert. Wenn der Wert auf `true` gesetzt ist, wird die Tiefenkomponente von `view` schreibgeschützt. Wenn `depthReadOnly` weggelassen wird, ist der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}

  - : Ein aufgezählter Wert, der die Speicheroperation angibt, die nach der Ausführung des Render-Passes auf die Tiefenkomponente von `view` durchgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.

- `stencilClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, um die Stencilkomponente von `view` vor der Ausführung des Render-Passes zu löschen. Dieser wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` weggelassen wird, ist der Standardwert 0.

- `stencilLoadOp` {{optional_inline}}

  - : Ein aufgezählter Wert, der die Ladeoperation angibt, die vor der Ausführung des Render-Passes auf die Stencilkomponente von `view` durchgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten, wie Mobilgeräten, eine bessere Leistung bringt.

- `stencilReadOnly` {{optional_inline}}

  - : Ein boolescher Wert. Wenn der Wert auf `true` gesetzt ist, wird die Stencilkomponente von `view` schreibgeschützt. Wenn `stencilReadOnly` weggelassen wird, ist der Standardwert `false`.

- `stencilStoreOp` {{optional_inline}}

  - : Ein aufgezählter Wert, der die Speicheroperation angibt, die nach der Ausführung des Render-Passes auf die Stencilkomponente von `view` durchgeführt werden soll. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.

- `view`
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Texturunterressource repräsentiert, auf die ausgegeben und von der gelesen wird, für diesen Tiefen/Stencil-Anhang.

### Rückgabewert

Eine Instanz des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginRenderPass()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich der `maxColorAttachments`-[Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `colorAttachments` nur `null`-Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleiche [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount)-Werte und Render-Ausmaße ([`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height), [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width), und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers)).
- Wenn `occlusionQuerySet` angegeben ist, hat das referenzierte [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) einen `type` von `"occlusion"`.

Für Farb-Anhänge-Objekte:

- Die `view` ist renderbar, und das Format der `view` (d.h. im deskriptiven Aufruf von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) angegeben) ist ein farb-rendebares Format.
- Wenn `resolveTarget` bereitgestellt wird:
  - Der Ursprung [`GPUTexture`](/de/docs/Web/API/GPUTexture) der `view` hat einen [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) größer als 1.
  - Der Ursprung [`GPUTexture`](/de/docs/Web/API/GPUTexture) des `resolveTarget` hat einen [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) von 1.
  - `resolveTarget` ist renderbar.
  - Die Größe der Unterressourcen, die `view` und `resolveTarget` eine Ansicht von bieten, stimmen überein.
  - Die Formate von `view` und `resolveTarget` stimmen überein.
- [Bytes pro Sample für Farb-Anhänge](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) sind kleiner oder gleich der `maxColorAttachmentBytesPerSample`-[Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

Für Tiefen/Stencil-Anhänge-Objekte:

- Die `view` ist renderbar, und ihr Format ist ein [Tiefen-oder-Stencil](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, wird ein gültiger `depthClearValue` bereitgestellt.
- Wenn das Format von `view` ein kombiniertes Tiefen-oder-Stencil-Format ist, stimmt `depthReadOnly` mit `stencilReadOnly` überein.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn das Format von `view` einen Stencilaspekt hat und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Stencilaspekt hat und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.

Für Zeitstempelabfragen:

- Die `timestamp-query`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Keine zwei `timestampWrites`-Objekte haben die gleiche `location`. Dies bedeutet effektiv, dass Sie nur zwei Zeitstempelabfragen pro Render-Pass ausführen können.
- Für jede Zeitstempelabfrage ist der `querySet` [`GPUQuerySet.type`](/de/docs/Web/API/GPUQuerySet/type) `"timestamp"`, und der `queryIndex`-Wert ist kleiner als der [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).
- Keine zwei `timestampWrites`-Objekte haben dasselbe `queryIndex` und `querySet`-Paar.

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Reihe von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Diese Befehle stammen von dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der über `beginRenderPass()` erstellt wurde:

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
