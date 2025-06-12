---
title: "GPUCommandEncoder: beginRenderPass()-Methode"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: 891215b6b586ab3489de192058dc6ecdad873e83
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginRenderPass()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle startet die Kodierung eines Render-Passes und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderings genutzt werden kann.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `colorAttachments`
      - : Ein Array von Objekten (siehe [Aufbau von Farb-Anhangsobjekten](#aufbau_von_farb-anhangsobjekten)), das die Farbanhänge definiert, auf die beim Ausführen dieses Render-Passes ausgegeben wird.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Aufbau von Tiefen/Stencil-Anhangsobjekten](#depthstencil_attachment_object_structure)), das den Tiefen/Stencil-Anhang definiert, auf den beim Ausführen dieses Render-Passes ausgegeben und gegen den getestet wird.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, z.B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl von Zeichenaufrufen angibt, die im Render-Pass ausgeführt werden. Dies wird von einigen Implementierungen genutzt, um Arbeiten vor dem Render-Pass zu dimensionieren. Sie sollten den Standardwert - 50000000 - beibehalten, es sei denn, Sie wissen, dass mehr Zeichenaufrufe ausgeführt werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das die Okklusionsabfragergebnisse für diesen Pass speichern wird.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, das definiert, wo und wann Zeitstempelabfragewerte für diesen Pass geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `querySet`
          - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) vom Typ `"timestamp"`, in das die Zeitstempelabfrageergebnisse geschrieben werden.
        - `beginningOfPassWriteIndex`
          - : Eine Zahl, die den Abfrageindex in `querySet` angibt, an dem der Zeitstempel zu Beginn des Render-Passes geschrieben wird. Dies ist optional - wenn nicht definiert, wird kein Zeitstempel für den Beginn des Passes geschrieben.
        - `endOfPassWriteIndex`
          - : Eine Zahl, die den Abfrageindex in `querySet` angibt, an dem der Zeitstempel am Ende des Render-Passes geschrieben wird. Dies ist optional - wenn nicht definiert, wird kein Zeitstempel für das Ende des Passes geschrieben.

        > [!NOTE]
        > Das `timestamp-query` [Merkmal](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempelabfragen zu verwenden. Zeitstempelabfragewerte werden in Nanosekunden geschrieben, die Art und Weise, wie der Wert bestimmt wird, ist jedoch implementierungsabhängig.

### Aufbau von Farb-Anhangsobjekten

Farb-Anhangsobjekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}

  - : Ein Farbwert, mit dem die `view`-Textur vor der Ausführung des Render-Passes gelöscht wird. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` akzeptiert ein Array oder Objekt, das die vier Farbkomponenten `r`, `g`, `b` und `a` als Dezimalzahlen darstellt.

    Zum Beispiel können Sie ein Array wie `[0.0, 0.5, 1.0, 1.0]` oder das entsprechende Objekt `{ r: 0.0, g: 0.5, b: 1.0, a: 1.0 }` übergeben.

    Wenn `clearValue` weggelassen wird, wird der Standard `{ r: 0, g: 0, b: 0, a: 0 }` verwendet.

- `depthSlice` {{optional_inline}}

  - : Eine Zahl, die den Index des 3D-Tiefenslicers darstellt, auf den bei diesem Farbanhang ausgegeben wird, im Falle eines 3D-`GPUTextureView`-`view`. Wenn angegeben, erlaubt dies WebGPU, direkt auf Slices von 3D-Texturen innerhalb von Render-Passes zu rendern.

- `loadOp`

  - : Ein enumerierter Wert, der die Ladevorgänge angibt, die auf `view` vor der Ausführung des Render-Passes ausgeführt werden. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den bestehenden Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `storeOp`
  - : Ein enumerierter Wert, der den Speichervorgang angibt, der auf `view` nach der Ausführung des Render-Passes ausgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwift den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.
- `resolveTarget` {{optional_inline}}
  - : Ein `GPUTextureView`-Objekt, das die Textur-Subressource darstellt, die das aufgelöste Ergebnis für diesen Farbanhang empfängt, wenn `view` mehrfach abgetastet ist.
- `view`

  - : Ein `GPUTextureView`-Objekt, das die Textur-Subressource darstellt, auf die für diesen Farbanhang ausgegeben wird.

    > [!NOTE]
    > Jeder Farb- oder Tiefen/Stencil-Anhang muss eine eindeutige Textur-Subressource sein, und Textur-Subressourcen, die als Anhänge verwendet werden, können nicht innerhalb des Render-Passes verwendet werden.

### Aufbau von Tiefen/Stencil-Anhangsobjekten

Das `depthStencilAttachment`-Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, auf den die Tiefenkomponente von `view` vor der Ausführung des Render-Passes gelöscht werden soll. Dies wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0.0 und 1.0 liegen, inklusive.

- `depthLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der die Ladevorgänge angibt, die auf die Tiefenkomponente von `view` vor der Ausführung des Render-Passes ausgeführt werden. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den bestehenden Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `depthReadOnly` {{optional_inline}}
  - : Ein Boolean. Setzen des Wertes auf `true` bewirkt, dass die Tiefenkomponente von `view` schreibgeschützt ist. Wenn `depthReadOnly` weggelassen wird, ist der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der den Speichervorgang angibt, der auf die Tiefenkomponente von `view` nach der Ausführung des Render-Passes ausgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwift den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.
- `stencilClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, auf den die Stencil-Komponente von `view` vor der Ausführung des Render-Passes gelöscht werden soll. Dies wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` weggelassen wird, ist der Standardwert 0.

- `stencilLoadOp` {{optional_inline}}

  - : Ein enumerierter Wert, der die Ladevorgänge angibt, die auf die Stencil-Komponente von `view` vor der Ausführung des Render-Passes ausgeführt werden. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den bestehenden Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn der Anfangswert keine Rolle spielt, da dies auf einigen Geräten wie Mobilgeräten eine bessere Leistung bietet.

- `stencilReadOnly` {{optional_inline}}
  - : Ein Boolean. Setzen des Wertes auf `true` bewirkt, dass die Stencil-Komponente von `view` schreibgeschützt ist. Wenn `stencilReadOnly` weggelassen wird, ist der Standardwert `false`.
- `stencilStoreOp` {{optional_inline}}
  - : Ein enumerierter Wert, der den Speichervorgang angibt, der auf die Stencil-Komponente von `view` nach der Ausführung des Render-Passes ausgeführt wird. Mögliche Werte sind:
    - `"discard"`: Verwift den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.
- `view`
  - : Ein `GPUTextureView`-Objekt, das die Textur-Subressource darstellt, auf die für diesen Tiefen/Stencil-Anhang ausgegeben und von der gelesen wird.

### Rückgabewert

Ein [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufrufen von **`beginRenderPass()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich dem `maxColorAttachments`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn `colorAttachments` nur `null`-Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleiche [`GPUTexture.sampleCount`]-Werte (/de/docs/Web/API/GPUTexture/sampleCount) und Render-Bereiche ([`GPUTexture.height`](/de/docs/Web/API/GPUTexture/height), [`GPUTexture.width`](/de/docs/Web/API/GPUTexture/width) und [`GPUTexture.depthOrArrayLayers`](/de/docs/Web/API/GPUTexture/depthOrArrayLayers)).
- Wenn `occlusionQuerySet` gesetzt ist, hat das referenzierte [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) einen `type` von `"occlusion"`.

Für Farb-Anhangsobjekte

- Die `view` ist renderbar und das Format von `view` (d.h. im Deskriptor des ursprünglichen [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)-Aufrufs angegeben) ist ein Farbrenderformat.
- Wenn `resolveTarget` bereitgestellt wird:
  - Die ursprüngliche [`GPUTexture`](/de/docs/Web/API/GPUTexture) der `view` hat einen [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) größer als 1.
  - Die ursprüngliche [`GPUTexture`](/de/docs/Web/API/GPUTexture) des `resolveTarget` hat einen [`sampleCount`](/de/docs/Web/API/GPUTexture/sampleCount) von 1.
  - `resolveTarget` ist renderbar.
  - Die Größen der Subressourcen, die `view` und `resolveTarget` bereitstellen, stimmen überein.
  - Die Formate von `view` und `resolveTarget` stimmen überein.
- [Bytes pro Probe der Farbanhänge](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) ist kleiner oder gleich dem `maxColorAttachmentBytesPerSample`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

Für Tiefen/Stencil-Anhangsobjekte:

- Die `view` ist renderbar und ihr Format ist ein [Tiefen-oder-Stencil-](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, muss ein gültiger `depthClearValue` angegeben werden.
- Wenn das Format von `view` ein kombiniertes Tiefen-oder-Stencil-Format ist, stimmen `depthReadOnly` und `stencilReadOnly` überein.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn das Format von `view` einen Stencilaspekt hat und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Stencilaspekt hat und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.

Für Zeitstempelabfragen:

- Die `timestamp-query` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.

## Beispiele

In unserem [Basis-Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Anzahl von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Diese Befehle stammen vom [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der über `beginRenderPass()` erstellt wurde:

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
