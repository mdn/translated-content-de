---
title: "GPUCommandEncoder: beginRenderPass() Methode"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
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
      - : Ein Array von Objekten (siehe [Struktur des Farbanhangeobjekts](#struktur_des_farbanhangeobjekts)), die die Farbanhänge definieren, auf die beim Ausführen dieses Render-Passes ausgegeben wird.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des Tiefe/Stencil-Anhangeobjekts](#depthstencil_attachment_object_structure)), das die Tiefe/Stencil-Anhänge definiert, auf die ausgegeben und gegen die getestet wird, wenn dieser Render-Pass ausgeführt wird.
    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die ein Label bereitstellt, mit dem das Objekt identifiziert werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl von Zeichenaufrufen angibt, die im Render-Pass durchgeführt werden. Dies wird von einigen Implementierungen verwendet, um die Arbeit zu dimensionieren, die vor dem Render-Pass injiziert wird. Sie sollten den Standardwert — 50000000 — beibehalten, es sei denn, Sie wissen, dass mehr Zeichenaufrufe durchgeführt werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das die Okklusionsabfrageergebnisse für diesen Pass speichert.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, das definiert, wo und wann Zeitstempel-Abfragewerte für diesen Pass geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `location`: Ein aufgezählter Wert, der angibt, wann der Zeitstempel ausgeführt wird. Verfügbare Werte sind:
          - `"beginning"`: Der Zeitstempel wird zusammen mit den anderen codierten Befehlen im Berechnungspass ausgeführt, sobald der entsprechende [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) übermittelt wird.
          - `"end"`: Der Zeitstempel wird als Teil einer separaten Liste von Zeitstempel-Anhängen ausgeführt, sobald der Pass endet.
        - `queryIndex`: Eine Zahl, die die Indexposition im `querySet` angibt, in das der Zeitstempel geschrieben wird.
        - `querySet`: Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), in das der Zeitstempel geschrieben wird.

        > [!NOTE]
        > Die `timestamp-query`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempelabfragen zu verwenden.

### Struktur des Farbanhangeobjekts

Farbanhängeobjekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}

  - : Ein Farbwert, um die `view`-Textur vor der Ausführung des Render-Passes zu löschen. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` akzeptiert ein Array oder Objekt, das die vier Farbkomponenten `r`, `g`, `b` und `a` als Dezimalzahlen darstellt.

    Zum Beispiel können Sie ein Array wie `[0.0, 0.5, 1.0, 1.0]` oder das entsprechende Objekt `{ r: 0.0, g: 0.5, b: 1.0, a: 1.0 }` übergeben.

    Wenn `clearValue` ausgelassen wird, ist der Standardwert `{ r: 0, g: 0, b: 0, a: 0 }`.

- `depthSlice` {{optional_inline}}

  - : Eine Zahl, die den Index des 3D-Tiefenschnitts darstellt, der für diesen Farbanhang bei einem dreidimensionalen [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-`view` ausgegeben wird. Wenn angegeben, ermöglicht dies WebGPU direkt auf Scheiben von 3D-Texturen innerhalb von Render-Passes zu rendern.

- `loadOp`

  - : Ein aufgezählter Wert, der die Ladeoperation angibt, die auf `view` ausgeführt wird, bevor der Render-Pass ausgeführt wird. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhänge in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhänge in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert nicht wichtig ist, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `storeOp`
  - : Ein aufgezählter Wert, der die Speicheroperation angibt, die auf `view` nach Ausführung des Render-Passes auszuführen ist. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diesen Anhänge.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhänge.
- `resolveTarget` {{optional_inline}}
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die die aufgelöste Ausgabe für diesen Farbanhänge erhält, wenn `view` multisampled ist.
- `view`

  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die für diesen Farbanhänge ausgegeben wird.

    > [!NOTE]
    > Jeder Farb- oder Tiefen/Stencil-Anhang muss eine eindeutige Textur-Subressource sein, und Textur-Subressourcen, die als Anhänge verwendet werden, können innerhalb des Render-Passes nicht verwendet werden.

### Struktur des Tiefe/Stencil-Anhangeobjekts

Das `depthStencilAttachment`-Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}

  - : Eine Zahl, die angibt, welchen Wert die Tiefenkomponente von `view` vor der Ausführung des Render-Passes löschen soll. Dies wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0,0 und 1,0 liegen, einschließlich.

- `depthLoadOp` {{optional_inline}}

  - : Ein aufgezählter Wert, der die Ladeoperation angibt, die auf die Tiefenkomponente von `view` vor der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhänge in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhänge in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert nicht wichtig ist, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `depthReadOnly` {{optional_inline}}
  - : Ein Boolescher Wert. Wenn der Wert auf `true` gesetzt ist, wird die Tiefenkomponente von `view` schreibgeschützt. Wenn `depthReadOnly` ausgelassen wird, ist der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}
  - : Ein aufgezählter Wert, der die Speicheroperation angibt, die auf die Tiefenkomponente von `view` nach Ausführung des Render-Passes ausgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diesen Anhänge.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhänge.
- `stencilClearValue` {{optional_inline}}

  - : Eine Zahl, die angibt, welchen Wert die Stencil-Komponente von `view` vor der Ausführung des Render-Passes löschen soll. Dies wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` ausgelassen wird, ist der Standardwert 0.

- `stencilLoadOp` {{optional_inline}}

  - : Ein aufgezählter Wert, der die Ladeoperation angibt, die auf die Stencil-Komponente von `view` vor der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhänge in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhänge in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert nicht wichtig ist, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `stencilReadOnly` {{optional_inline}}
  - : Ein Boolescher Wert. Wenn der Wert auf `true` gesetzt ist, wird die Stencil-Komponente von `view` schreibgeschützt. Wenn `stencilReadOnly` ausgelassen wird, ist der Standardwert `false`.
- `stencilStoreOp` {{optional_inline}}
  - : Ein aufgezählter Wert, der die Speicheroperation angibt, die auf die Stencil-Komponente von `view` nach Ausführung des Render-Passes ausgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwirft den resultierenden Wert des Render-Passes für diesen Anhänge.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhänge.
- `view`
  - : Ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt, das die Textur-Subressource darstellt, die für diesen Tiefen/Stencil-Anhang ausgegeben und gelesen wird.

### Rückgabewert

Eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginRenderPass()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiger [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxColorAttachments` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `colorAttachments` nur `null`-Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleiche Werte für [`GPUTexture.sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) und Render-Umfänge ([`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height), [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers)).
- Wenn `occlusionQuerySet` gesetzt ist, hat das referenzierte [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) einen `type` von `"occlusion"`.

Für Farbanhänge-Objekte:

- Die `view` ist renderfähig, und das Format der `view` (d.h. im Deskriptor des Ursprungsaufrufs von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) angegeben) ist ein renderfähiges Farbformat.
- Wenn `resolveTarget` bereitgestellt wird:
  - Die `view`'s Ursprungs-[`GPUTexture`](/de/docs/Web/API/GPUTexture)['sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist größer als 1.
  - Die `resolveTarget`'s Ursprungs-[`GPUTexture`](/de/docs/Web/API/GPUTexture)['sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) ist 1.
  - `resolveTarget` ist renderfähig.
  - Die Größen der Subressourcen, die `view` und `resolveTarget` zur Ansicht bereitstellen, stimmen überein.
  - Die Formate von `view` und `resolveTarget` stimmen überein.
- [Bytes pro Sample von Farbanhängen](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) ist kleiner oder gleich dem `maxColorAttachmentBytesPerSample` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

Für Tiefe/Stencil-Anhänge-Objekte:

- Die `view` ist renderfähig und ihr Format ist ein [Tiefe-oder-Stencil-Format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, wird ein gültiges `depthClearValue` bereitgestellt.
- Wenn das Format von `view` ein kombiniertes Tiefe-oder-Stencil-Format ist, stimmen `depthReadOnly` und `stencilReadOnly` überein.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn das Format von `view` einen Stencilaspekt hat und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Stencilaspekt hat und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.

Für Zeitstempelabfragen:

- Die `timestamp-query`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Keine zwei `timestampWrites`-Objekte haben dieselbe `location`. In der Praxis bedeutet dies, dass Sie pro Render-Pass nur zwei Zeitstempelabfragen ausführen können.
- Für jede Zeitstempelabfrage ist der `querySet` [`GPUQuerySet.typ`](/de/docs/Web/API/GPUQuerySet/type) `"timestamp"` und der `queryIndex`-Wert ist kleiner als die [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).
- Keine zwei `timestampWrites`-Objekte haben dasselbe `queryIndex`- und `querySet`-Paar.

## Beispiele

In unserem [einfachen Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) wird eine Anzahl von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Diese Befehle stammen von dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der über `beginRenderPass()` erstellt wurde:

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
