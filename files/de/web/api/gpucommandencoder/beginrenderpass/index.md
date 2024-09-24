---
title: "GPUCommandEncoder: beginRenderPass()-Methode"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`beginRenderPass()`**-Methode des {{domxref("GPUCommandEncoder")}}-Interfaces startet die Kodierung eines Render-Passes und gibt einen {{domxref("GPURenderPassEncoder")}} zurück, der zur Steuerung des Renderings verwendet werden kann.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `colorAttachments`
      - : Ein Array von Objekten (siehe [Struktur des Farbanhangsobjekts](#struktur_des_farbanhangsobjekts)), die die Farbanhänge definieren, die beim Ausführen dieses Render-Passes ausgegeben werden.
    - `depthStencilAttachment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des Tiefen-/Stencil-Anhangsobjekts](#depthstencil_attachment_object_structure)), das den Tiefen-/Stencil-Anhang definiert, der beim Ausführen dieses Render-Passes ausgegeben und getestet wird.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.
    - `maxDrawCount` {{optional_inline}}
      - : Eine Zahl, die die maximale Anzahl von Zeichenaufrufen angibt, die im Render-Pass durchgeführt werden. Dies wird von einigen Implementierungen verwendet, um Arbeiten zu dimensionieren, die vor dem Render-Pass eingefügt werden. Sie sollten den Standardwert — 50000000 — beibehalten, es sei denn, Sie wissen, dass mehr Zeichenaufrufe durchgeführt werden.
    - `occlusionQuerySet` {{optional_inline}}
      - : Das {{domxref("GPUQuerySet")}}, das die Okkulsionsabfrageergebnisse für diesen Pass speichert.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, das definiert, wann und wo Zeitstempelabfragedaten für diesen Pass geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `location`: Ein aufgezählter Wert, der angibt, wann der Zeitstempel ausgeführt wird. Verfügbare Werte sind:
          - `"beginning"`: Der Zeitstempel wird zusammen mit den anderen codierten Anweisungen im Compute-Pass ausgeführt, sobald der entsprechende {{domxref("GPUCommandBuffer")}} übergeben wird.
          - `"end"`: Der Zeitstempel wird als Teil einer separaten Liste von Zeitstempelanhängen ausgeführt, sobald der Pass endet.
        - `queryIndex`: Eine Zahl, die die Indexposition im `querySet` angibt, in die der Zeitstempel geschrieben wird.
        - `querySet`: Das {{domxref("GPUQuerySet")}}, in das der Zeitstempel geschrieben wird.

        > [!NOTE]
        > Um Zeitstempelabfragen zu verwenden, muss das `timestamp-query`-{{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} im {{domxref("GPUDevice")}} aktiviert sein.

### Struktur des Farbanhangsobjekts

Farbanhangsobjekte können die folgenden Eigenschaften haben:

- `clearValue` {{optional_inline}}

  - : Ein Farbwert, um die `view`-Textur vor der Ausführung des Render-Passes zu löschen. Dieser Wert wird ignoriert, wenn `loadOp` nicht auf `"clear"` gesetzt ist. `clearValue` nimmt ein Array oder Objekt, das die vier Farbkomponenten `r`, `g`, `b` und `a` als Dezimalwerte repräsentiert.

    Es folgt ein Beispielarray:

    ```js
    clearValue: [0.0, 0.5, 1.0, 1.0];
    ```

    Das entsprechende Objekt sieht folgendermaßen aus:

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

  - : Ein aufgezählter Wert, der die Ladeoperation angibt, die auf `view` vor der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn es auf den Anfangswert nicht ankommt, da dies auf einigen Geräten, wie z.B. Mobilgeräten, eine bessere Leistung bietet.

- `storeOp`
  - : Ein aufgezählter Wert, der die Speichervorgänge angibt, die auf `view` nach der Ausführung des Render-Passes ausgeführt werden sollen. Mögliche Werte sind:
    - `"discard"`: Verwift den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.
- `resolveTarget` {{optional_inline}}
  - : Ein {{domxref("GPUTextureView")}}-Objekt, das die Textursubressource darstellt, die die aufgelöste Ausgabe für diesen Farbanhang erhält, wenn `view` multisampled ist.
- `view`

  - : Ein {{domxref("GPUTextureView")}}-Objekt, das die Textursubressource darstellt, die für diesen Farbanhang ausgegeben wird.

    > [!NOTE]
    > Jeder Farb- oder Tiefen-/Stencil-Anhang muss eine einzigartige Textursubressource sein, und Textursubressourcen, die als Anhänge verwendet werden, dürfen im Render-Pass nicht verwendet werden.

### Struktur des Tiefen-/Stencil-Anhangsobjekts

Das `depthStencilAttachment`-Objekt kann die folgenden Eigenschaften haben:

- `depthClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, auf den die Tiefenkomponente von `view` vor der Ausführung des Render-Passes gelöscht wird. Dies wird ignoriert, wenn `depthLoadOp` nicht auf `"clear"` gesetzt ist.

    Der Wert muss zwischen 0.0 und 1.0 liegen, inklusive.

- `depthLoadOp` {{optional_inline}}

  - : Ein aufgezählter Wert, der die Ladeoperation angibt, die auf die Tiefenkomponente von `view` vor der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn es auf den Anfangswert nicht ankommt, da dies auf einigen Geräten, wie z.B. Mobilgeräten, eine bessere Leistung bietet.

- `depthReadOnly` {{optional_inline}}
  - : Ein boolescher Wert. Wenn dieser Wert auf `true` gesetzt ist, wird die Tiefenkomponente von `view` schreibgeschützt. Wenn `depthReadOnly` weggelassen wird, ist der Standardwert `false`.
- `depthStoreOp` {{optional_inline}}
  - : Ein aufgezählter Wert, der die Speichervorgänge angibt, die auf die Tiefenkomponente von `view` nach der Ausführung des Render-Passes ausgeführt werden sollen. Mögliche Werte sind:
    - `"discard"`: Verwift den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.
- `stencilClearValue` {{optional_inline}}

  - : Eine Zahl, die den Wert angibt, auf den die Stencil-Komponente von `view` vor der Ausführung des Render-Passes gelöscht wird. Dies wird ignoriert, wenn `stencilLoadOp` nicht auf `"clear"` gesetzt ist.

    Wenn `stencilClearValue` weggelassen wird, ist der Standardwert 0.

- `stencilLoadOp` {{optional_inline}}

  - : Ein aufgezählter Wert, der die Ladeoperation angibt, die auf die Stencil-Komponente von `view` vor der Ausführung des Render-Passes ausgeführt werden soll. Mögliche Werte sind:

    - `"clear"`: Lädt den `clearValue` für diesen Anhang in den Render-Pass.
    - `"load"`: Lädt den vorhandenen Wert für diesen Anhang in den Render-Pass.

    > [!NOTE]
    > Es wird empfohlen, immer `"clear"` zu verwenden, wenn es auf den Anfangswert nicht ankommt, da dies auf einigen Geräten, wie z.B. Mobilgeräten, eine bessere Leistung bietet.

- `stencilReadOnly` {{optional_inline}}
  - : Ein boolescher Wert. Wenn dieser Wert auf `true` gesetzt ist, wird die Stencil-Komponente von `view` schreibgeschützt. Wenn `stencilReadOnly` weggelassen wird, ist der Standardwert `false`.
- `stencilStoreOp` {{optional_inline}}
  - : Ein aufgezählter Wert, der die Speichervorgänge angibt, die auf die Stencil-Komponente von `view` nach der Ausführung des Render-Passes ausgeführt werden sollen. Mögliche Werte sind:
    - `"discard"`: Verwift den resultierenden Wert des Render-Passes für diesen Anhang.
    - `"store"`: Speichert den resultierenden Wert des Render-Passes für diesen Anhang.
- `view`
  - : Ein {{domxref("GPUTextureView")}}-Objekt, das die Textursubressource darstellt, die für diesen Tiefen-/Stencil-Anhang ausgegeben und gelesen wird.

### Rückgabewert

Ein {{domxref("GPURenderPassEncoder")}}-Objektexemplar.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginRenderPass()`** aufgerufen wird, ansonsten wird ein {{domxref("GPUValidationError")}} generiert und ein ungültiger {{domxref("GPURenderPassEncoder")}} zurückgegeben.

Allgemein:

- `colorAttachments.length` ist kleiner oder gleich dem `maxColorAttachments`-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
- Wenn `colorAttachments` nur `null`-Werte enthält, wird `depthStencilAttachment` bereitgestellt.
- Alle `view`s in `colorAttachments` und `depthStencilAttachment` haben gleiche {{domxref("GPUTexture.sampleCount")}}-Werte und Render-Ausdehnungen ({{domxref("GPUTexture.height")}}, {{domxref("GPUTexture.width")}} und {{domxref("GPUTexture.depthOrArrayLayers")}}).
- Wenn `occlusionQuerySet` gesetzt ist, hat das referenzierte {{domxref("GPUQuerySet")}} einen `type` von `"occlusion"`.

Für Farbanhangsobjekte:

- Das `view` ist renderbar und das Format des `view` (d.h. spezifiziert im Deskriptor des kalkulierenden {{domxref("GPUTexture.createView()")}}-Aufrufs) ist ein Farb-Renderformat.
- Wenn `resolveTarget` bereitgestellt wird:
  - Das `view`-ursprüngliche {{domxref("GPUTexture")}}-Objekt hat ein {{domxref("GPUTexture.sampleCount", "sampleCount")}}, das größer als 1 ist.
  - Das `resolveTarget`-ursprüngliche {{domxref("GPUTexture")}}-Objekt hat ein {{domxref("GPUTexture.sampleCount", "sampleCount")}}, das 1 ist.
  - `resolveTarget` ist renderbar.
  - Die Größen der Subressourcen, die `view` und `resolveTarget` bereitstellen, stimmen überein.
  - Die Formate von `view` und `resolveTarget` stimmen überein.
- [Bytes pro Sample des Farbanhangs](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) ist kleiner oder gleich dem `maxColorAttachmentBytesPerSample`-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}} des {{domxref("GPUDevice")}}.

Für Tiefen-/Stencil-Anhangsobjekte:

- Das `view` ist renderbar und sein Format ist ein [Tiefen-oder-Stencil](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
- Wenn `depthLoadOp` auf `"clear"` gesetzt ist, wird ein gültiges `depthClearValue` bereitgestellt.
- Wenn das Format von `view` ein kombiniertes Tiefen-oder-Stencil-Format ist, stimmen `depthReadOnly` und `stencilReadOnly` überein.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `false` ist, werden `depthLoadOp` und `depthStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Tiefenaspekt hat und `depthReadOnly` `true` ist, werden `depthLoadOp` und `depthStoreOp` nicht bereitgestellt.
- Wenn das Format von `view` einen Stencil-Aspekt hat und `stencilReadOnly` `false` ist, werden `stencilLoadOp` und `stencilStoreOp` bereitgestellt.
- Wenn das Format von `view` einen Stencil-Aspekt hat und `stencilReadOnly` `true` ist, werden `stencilLoadOp` und `stencilStoreOp` nicht bereitgestellt.

Für Zeitstempelabfragen:

- Das `timestamp-query` {{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} ist im {{domxref("GPUDevice")}} aktiviert.
- Keine zwei `timestampWrites`-Objekte haben die gleiche `location`. Dies bedeutet effektiv, dass Sie nur zwei Zeitstempelabfragen pro Render-Pass ausführen können.
- Für jede Zeitstempelabfrage ist das `querySet` {{domxref("GPUQuerySet.type")}} `"timestamp"`, und der `queryIndex`-Wert ist kleiner als die {{domxref("GPUQuerySet.count")}}.
- Keine zwei `timestampWrites`-Objekte haben das gleiche `queryIndex` und `querySet`-Paar.

## Beispiele

In unserem [Basis-Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Reihe von Befehlen über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet. Diese Befehle stammen vom {{domxref("GPURenderPassEncoder")}}, der über `beginRenderPass()` erstellt wurde:

```js
// ...

// Erstellen Sie GPUCommandEncoder
const commandEncoder = device.createCommandEncoder();

// Erstellen Sie GPURenderPassDescriptor, um WebGPU mitzuteilen, in welche Textur gezeichnet werden soll, und initiieren Sie den Render-Pass

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

// Zeichnen Sie ein Dreieck

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// Beenden Sie den Render-Pass

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
