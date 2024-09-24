---
title: "GPUDevice: importExternalTexture()-Methode"
short-title: importExternalTexture()
slug: Web/API/GPUDevice/importExternalTexture
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`importExternalTexture()`**-Methode der {{domxref("GPUDevice")}}-Schnittstelle nimmt ein {{domxref("HTMLVideoElement")}}- oder ein {{domxref("VideoFrame")}}-Objekt als Eingabe und gibt ein {{domxref("GPUExternalTexture")}}-Wrapper-Objekt zurück, das einen Schnappschuss des Videos enthält, der als Frame in GPU-Rendering-Operationen verwendet werden kann.

## Syntax

```js-nolint
importExternalTexture(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `colorSpace` {{optional_inline}}
      - : Ein enumerierter Wert, der den Farbraum angibt, der für den Videoframe verwendet werden soll. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn weggelassen, ist der Standardwert von `colorSpace` `"srgb"`.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, mit dem das Objekt identifiziert werden kann, beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.
    - `source`
      - : Die {{domxref("HTMLVideoElement")}}- oder {{domxref("VideoFrame")}}-Quelle des Videoschnappschusses.

### Rückgabewert

Eine Instanz des {{domxref("GPUExternalTexture")}}-Objekts.

Beachten Sie, dass der Moment, zu dem das {{domxref("GPUExternalTexture")}}-Objekt abläuft (zerstört wird), davon abhängt, was seine Quelle ist:

- {{domxref("GPUExternalTexture")}}-Objekte mit einer {{domxref("HTMLVideoElement")}}-Quelle laufen ab, sobald sie verwendet werden (zum Beispiel in einer Bind-Gruppe).
- {{domxref("GPUExternalTexture")}}-Objekte mit einer {{domxref("VideoFrame")}}-Quelle laufen erst ab, wenn der `VideoFrame` geschlossen wird, beispielsweise durch einen {{domxref("VideoFrame.close()")}}-Aufruf.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`importExternalTexture()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und ein ungültiges {{domxref("GPUExternalTexture")}}-Objekt zurückgegeben:

- Der Videoschnappschuss ist verwendbar (z.B. die Videoquelle ist korrekt geladen und hat keine Breite oder Höhe von 0).

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Quelldaten des Videos von einer anderen Herkunft stammen.

## Beispiele

Im WebGPU-Beispiel [Video Uploading sample](https://webgpu.github.io/webgpu-samples/samples/videoUploading/) wird ein Aufruf von `importExternalTexture()` als Wert eines `resource`-Eintrags in einer Bind-Gruppe verwendet, der beim Erstellen einer {{domxref("GPUBindGroup")}} mittels eines {{domxref("GPUDevice.createBindGroup()")}}-Aufrufs angegeben wird:

```js
//...

const uniformBindGroup = device.createBindGroup({
  layout: pipeline.getBindGroupLayout(0),
  entries: [
    {
      binding: 1,
      resource: sampler,
    },
    {
      binding: 2,
      resource: device.importExternalTexture({
        source: video,
      }),
    },
  ],
});

//...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
