---
title: "GPUDevice: importExternalTexture() Methode"
short-title: importExternalTexture()
slug: Web/API/GPUDevice/importExternalTexture
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`importExternalTexture()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle nimmt ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)- oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt als Eingabe und gibt ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Wrapper-Objekt zurück, das einen Schnappschuss des Videos enthält, der als Frame in GPU-Rendering-Operationen verwendet werden kann.

## Syntax

```js-nolint
importExternalTexture(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `colorSpace` {{optional_inline}}
      - : Ein enumerierter Wert, der den Farbraum für den Videoframe angibt. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn ausgelassen, ist der Standardwert für `colorSpace` `"srgb"`.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts dienen kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `source`
      - : Die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)- oder [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Quelle des Video-Schnappschusses.

### Rückgabewert

Eine Instanz des [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekts.

Beachten Sie, dass der Moment, in dem das [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt abläuft (zerstört wird), davon abhängt, was seine Quelle ist:

- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte mit einer [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Quelle laufen ab, sobald sie verwendet werden (zum Beispiel in einer Bind-Gruppe).
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte mit einer [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Quelle laufen erst ab, wenn das `VideoFrame` geschlossen wird, zum Beispiel durch einen Aufruf von [`VideoFrame.close()`](/de/docs/Web/API/VideoFrame/close).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`importExternalTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt zurückgegeben:

- Der Video-Schnappschuss muss verwendbar sein (z. B. die Videoquelle ist ordnungsgemäß geladen und hat nicht die Breite oder Höhe von 0).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Videodatenquelle cross-origin ist.

## Beispiele

Im WebGPU-Beispiel [Video Uploading sample](https://webgpu.github.io/webgpu-samples/samples/videoUploading/) wird ein `importExternalTexture()`-Aufruf als Wert eines Bind-Gruppen-Eintrags `resource` verwendet, der bei der Erstellung einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) über einen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf spezifiziert wird:

```js
// …

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

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
