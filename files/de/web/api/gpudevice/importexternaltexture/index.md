---
title: "GPUDevice: importExternalTexture() Methode"
short-title: importExternalTexture()
slug: Web/API/GPUDevice/importExternalTexture
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`importExternalTexture()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle nimmt ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt als Eingabe und gibt ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Wrapper-Objekt zurück, das einen Snapshot des Videos enthält, der als Frame in GPU-Rendering-Operationen verwendet werden kann.

## Syntax

```js-nolint
importExternalTexture(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `colorSpace` {{optional_inline}}
      - : Ein enumerierter Wert, der den Farbraum spezifiziert, der für den Videoframe verwendet werden soll. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn er weggelassen wird, ist der Standardwert für `colorSpace` `"srgb"`.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung zur Verfügung stellt, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `source`
      - : Die Quelle des Video-Snapshots, ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`VideoFrame`](/de/docs/Web/API/VideoFrame).

### Rückgabewert

Eine Instanz des [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekts.

Beachten Sie, dass der Moment, in dem das [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt abläuft (zerstört wird), davon abhängt, was seine Quelle ist:

- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte mit einer [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Quelle laufen ab, sobald sie verwendet werden (z.B. in einer Bind-Gruppe).
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte mit einer [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Quelle laufen nur ab, wenn der `VideoFrame` geschlossen wird, z.B. durch einen [`VideoFrame.close()`](/de/docs/Web/API/VideoFrame/close)-Aufruf.

### Validierung

Folgende Kriterien müssen erfüllt sein, wenn **`importExternalTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt zurückgegeben:

- Der Videosnapshot muss verwendbar sein (z.B. die Videoquelle ist korrekt geladen und hat keine Breite oder Höhe von 0).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Videodatenquelle eine Cross-Origin-Ressource ist.

## Beispiele

Im WebGPU-Beispiel [Video Uploading Sample](https://webgpu.github.io/webgpu-samples/samples/videoUploading/) wird ein `importExternalTexture()`-Aufruf als Wert eines Bind-Gruppen-Eintrags `resource` verwendet, der beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) über einen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf spezifiziert wird:

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
