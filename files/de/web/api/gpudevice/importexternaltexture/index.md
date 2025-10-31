---
title: "GPUDevice: importExternalTexture() Methode"
short-title: importExternalTexture()
slug: Web/API/GPUDevice/importExternalTexture
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`importExternalTexture()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle nimmt ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) Objekt als Eingabe und gibt ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture) Wrapper-Objekt zurück, das einen Schnappschuss des Videos enthält, der als Frame in GPU-Rendering-Operationen verwendet werden kann.

## Syntax

```js-nolint
importExternalTexture(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `colorSpace` {{optional_inline}}
      - : Ein enumerierter Wert, der den Farbraum angibt, der für den Video-Frame verwendet werden soll. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn weggelassen, ist der Standardwert für `colorSpace` `"srgb"`.
    - `label` {{optional_inline}}
      - : Eine Zeichenfolge, die ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `source`
      - : Die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Quelle des Video-Schnappschusses.

### Rückgabewert

Eine Instanz des [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekts.

Beachten Sie, dass der Zeitpunkt, wann das [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt verfällt (zerstört wird), davon abhängt, was seine Quelle ist:

- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte mit einer [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Quelle verfallen, sobald sie verwendet werden (zum Beispiel in einer Bind-Gruppe).
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte mit einer [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Quelle verfallen nur, wenn das `VideoFrame` geschlossen wird, zum Beispiel durch einen [`VideoFrame.close()`](/de/docs/Web/API/VideoFrame/close)-Aufruf.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`importExternalTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt zurückgegeben:

- Der Video-Schnappschuss ist verwendbar (z. B. die Videoquelle ist ordnungsgemäß geladen und hat keine Breite oder Höhe von 0).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Videoquelldaten cross-origin sind.

## Beispiele

Im WebGPU-Beispiel [Video Uploading sample](https://webgpu.github.io/webgpu-samples/samples/videoUploading/) wird ein `importExternalTexture()`-Aufruf als Wert eines Bind-Gruppe-Eintrags `resource` verwendet, der beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) über einen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf spezifiziert wird:

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
