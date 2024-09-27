---
title: "GPUCommandEncoder: beginRenderPass()-Methode"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginRenderPass()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle startet die Kodierung eines Render-Durchlaufs und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderings verwendet werden kann.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `colorAttachments`
      - : Ein Array von Objekten (siehe [Struktur des Farbanhang-Objekts](#struktur_des_farbanhang-objekts), die die Farbanhänge definieren, die beim Ausführen dieses Render-Durchlaufs ausgegeben werden.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des Tiefen-/Schablonenanhang-Objekts](#depthstencil_attachment_object_structure), das den Tiefen-/Schablonenanhang definiert, der beim Ausführen dieses Render-Durchlaufs ausgegeben und getestet wird.
    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl von Zeichnungsaufrufen angibt, die im Render-Durchlauf ausgeführt werden. Dies wird von einigen Implementierungen verwendet, um die vor dem Render-Durchlauf eingefügte Arbeit zu skalieren. Sie sollten den Standardwert beibehalten — 50000000 — es sei denn, Sie wissen, dass mehr Zeichnungsaufrufe erfolgen werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Der [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), der die Okklusionsabfrageergebnisse für diesen Durchlauf speichert.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, die definieren, wo und wann Zeitstempelabfragewerte für diesen Durchlauf geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `location`: Ein enumerierter Wert, der angibt, wann der Zeitstempel ausgeführt wird. Verfügbare Werte sind:
          - `"beginning"`: Der Zeitstempel wird zusammen mit den anderen kodierten Befehlen im Berechnungsdurchlauf ausgeführt, sobald der entsprechende [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) übermittelt wird.
          - `"end"`: Der Zeitstempel wird als Teil einer separaten Liste von Zeitstempelanhängen ausgeführt, sobald der Durchlauf endet.
        - `queryIndex`: Eine Zahl, die die Indexposition im `querySet` angibt, in die der Zeitstempel geschrieben wird.
        - `querySet`: Der [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), in den der Zeitstempel geschrieben wird.

        > [!NOTE]
        > Um Zeitstempelabfragen zu verwenden, muss die `timestamp-query` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein.

### Struktur des Farbanhang-Objekts

Farb-Anhangsobjekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}

  - : Ein Farbwert, um die `view`-Textur vor der Ausführung des Render-Durchlaufs zu löschen. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` nimmt ein Array oder Objekt an, das die vier Farbkomponenten `r`, `g`, `b` und `a` als Dezimalzahlen darstellt.

    Ein Beispiel-Array sieht folgendermaßen aus:

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

  - : Ein enumerierter Wert, der die Ladeoperation angibt, die auf `view` vor der Ausführung des Render-Durchlaufs ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Durchlauf.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Durchlauf.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobiltelefonen eine bessere Leistung bietet.

- `storeOp`
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die nach der Ausführung des Render-Durchlaufs auf `view` durchgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwift den resultierenden Wert des Render-Durchlaufs für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Durchlaufs für diesen Anhang.
- `resolveTarget` {{optional_inline}}
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die den aufgelösten Ausgang für diesen Farb-Anhang erhält, wenn `view` multisampled ist.
- `view`

  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die für diesen Farbanhang ausgegeben wird.

    > [!NOTE]
    > Jeder Farb- oder Tiefen-/Schablonenanhang muss eine einzigartige Textur-Subressource sein, und Textur-Subressourcen, die als Anhänge verwendet werden, dürfen nicht innerhalb des Render-Durchlaufs verwendet werden.

### Struktur des Tiefen-/Schablonenanhang-Objekts

Das `depthStencilAttachment`-Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, um die Tiefenkomponente von `view` vor der Ausführung des Render-Durchlaufs zu löschen. Dies wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0,0 und 1,0 liegen, einschließlich.

- `depthLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der die Ladeoperation angibt, die auf die Tiefenkomponente von `view` vor der Ausführung des Render-Durchlaufs durchgeführt wird. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Durchlauf.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Durchlauf.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobiltelefonen eine bessere Leistung bietet.

- `depthReadOnly` {{optional_inline}}
  - : Ein Boolescher Wert. Wenn der Wert auf `true` gesetzt ist, wird die Tiefenkomponente von `view` schreibgeschützt. Wenn `depthReadOnly` weggelassen wird, ist der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die nach der Ausführung des Render-Durchlaufs auf die Tiefenkomponente von `view` durchgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Durchlaufs für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Durchlaufs für diesen Anhang.
- `stencilClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, um die Schablonenkomponente von `view` vor der Ausführung des Render-Durchlaufs zu löschen. Dies wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` weggelassen wird, ist der Standardwert 0.

- `stencilLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der die Ladeoperation angibt, die auf die Schablonenkomponente von `view` vor der Ausführung des Render-Durchlaufs durchgeführt wird. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Durchlauf.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Durchlauf.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobiltelefonen eine bessere Leistung bietet.

- `stencilReadOnly` {{optional_inline}}
  - : Ein Boolescher Wert. Wenn der Wert auf `true` gesetzt ist, wird die Schablonenkomponente von `view` schreibgeschützt. Wenn `stencilReadOnly` weggelassen wird, ist der Standardwert `false`.
- `stencilStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der die Speicheroperation angibt, die nach der Ausführung des Render-Durchlaufs auf die Schablonenkomponente von `view` durchgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Durchlaufs für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Durchlaufs für diesen Anhang.
- `view`
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die für diesen Tiefen-/Schablonenanhang ausgegeben und gelesen wird.

### Rückgabewert

Eine Instanz des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Objekts.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`beginRenderPass()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich dem `maxColorAttachments`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `colorAttachments` nur `null`-Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleiche Werte für [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) und Render-Umfänge ([`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height), [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers)).
- Wenn `occlusionQuerySet` gesetzt ist, hat der referenzierte [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) einen `type` von `"occlusion"`.

Für Farbanhang-Objekte:

- Die `view` ist renderbar, und das Format der `view` (d. h. im Deskriptor des ursprünglichen Aufrufs von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) angegeben) ist ein farbverständlich format.
- Wenn `resolveTarget` bereitgestellt wird:
  - Die `view`'s ursprüngliche [`GPUTexture`](/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist größer als 1.
  - Die `resolveTarget`'s ursprüngliche [`GPUTexture`](/de/docs/Web/API/GPUTexture)'s [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
  - `resolveTarget` ist renderbar.
  - Die Größen der Subressourcen, die `view` und `resolveTarget` bereitstellen, stimmen überein.
  - Die Formate von `view` und `resolveTarget` stimmen überein.
- [Bytes pro Sample der Farbanhängungen](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) ist kleiner oder gleich dem `maxColorAttachmentBytesPerSample`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

Für Tiefen-/Schablonenanhang-Objekte:

- Die `view` ist renderbar und ihr Format ist ein [Tiefen- oder Schablonen](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, wird ein gültiger `depthClearValue` bereitgestellt.
- Wenn das Format von `view` ein kombiniertes Tiefen- oder Schablonenformat ist, stimmen `depthReadOnly` und `stencilReadOnly` überein.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn das Format von `view` einen Schablonenaspekt hat und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Schablonenaspekt hat und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.

Für Zeitstempelabfragen:

- Die `timestamp-query` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Keine zwei `timestampWrites` Objekte haben den gleichen `location`. Dies bedeutet faktisch, dass Sie nur zwei Zeitstempelabfragen pro Render-Durchlauf ausführen können.
- Für jede Zeitstempelabfrage ist der `querySet` [`GPUQuerySet.type`](/de/docs/Web/API/GPUQuerySet/type) `"timestamp"`, und der `queryIndex`-Wert ist kleiner als der [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).
- Keine zwei `timestampWrites`-Objekte haben dasselbe `queryIndex` und `querySet`-Paar.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Reihe von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Diese Befehle stammen aus dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der über `beginRenderPass()` erstellt wurde:

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
