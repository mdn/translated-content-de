---
title: "GPUDevice: importExternalTexture() Methode"
short-title: importExternalTexture()
slug: Web/API/GPUDevice/importExternalTexture
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`importExternalTexture()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle nimmt ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt als Eingabe und gibt ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Wrapper-Objekt zurück, das einen Snapshot des Videos enthält, der als Frame in GPU-Rendering-Operationen verwendet werden kann.

## Syntax

```js-nolint
importExternalTexture(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `colorSpace` {{optional_inline}}
      - : Ein enumerierter Wert, der den Farbraum angibt, der für den Videoframe verwendet werden soll. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn nicht angegeben, wird `colorSpace` standardmäßig auf `"srgb"` gesetzt.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `source`
      - : Die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`VideoFrame`](/de/docs/Web/API/VideoFrame) Quelle des Videosnapshots.

### Rückgabewert

Eine [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objektinstanz.

Beachten Sie, dass der Zeitpunkt, an dem das [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt abläuft (zerstört wird), davon abhängt, was seine Quelle ist:

- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte mit einer [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Quelle laufen ab, sobald sie verwendet werden (zum Beispiel in einer Bind-Gruppe).
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte mit einer [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Quelle laufen nur dann ab, wenn das `VideoFrame` geschlossen wird, zum Beispiel durch einen Aufruf von [`VideoFrame.close()`](/de/docs/Web/API/VideoFrame/close).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`importExternalTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt zurückgegeben:

- Der Videosnapshot muss nutzbar sein (z.B. die Videoquelle muss richtig geladen sein und darf keine Breite oder Höhe von 0 haben).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Videodatenquelle von einer anderen Herkunft stammt.

## Beispiele

Im WebGPU-Beispiel [Video Uploading sample](https://webgpu.github.io/webgpu-samples/samples/videoUploading/) wird ein Aufruf von `importExternalTexture()` als Wert eines Bind-Gruppen-Eintrags `resource` verwendet, der beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) über einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) angegeben wird:

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
