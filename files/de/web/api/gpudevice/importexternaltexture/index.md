---
title: "GPUDevice: importExternalTexture() method"
slug: Web/API/GPUDevice/importExternalTexture
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

---  
title: "GPUDevice: importExternalTexture()-Methode"  
short-title: importExternalTexture()  
slug: Web/API/GPUDevice/importExternalTexture  
page-type: web-api-instance-method  
status:  
  - experimental  
browser-compat: api.GPUDevice.importExternalTexture  
---  

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`importExternalTexture()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle nimmt ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt als Eingabe und gibt ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Wrapper-Objekt zurück, das einen Schnappschuss des Videos enthält, der als Frame in GPU-Rendering-Operationen verwendet werden kann.

## Syntax

```js-nolint
importExternalTexture(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das folgende Eigenschaften enthält:
    - `colorSpace` {{optional_inline}}
      - : Ein enumerierter Wert, der den Farbraum angibt, der für den Videoframe verwendet werden soll. Mögliche Werte sind `"srgb"` und `"display-p3"`. Wenn er weggelassen wird, ist `colorSpace` standardmäßig `"srgb"`.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `source`
      - : Die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`VideoFrame`](/de/docs/Web/API/VideoFrame) Quelle des Videoschnappschusses.

### Rückgabewert

Eine Instanz des [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekts.

Beachten Sie, dass der Zeitpunkt, zu dem das [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt abläuft (zerstört wird), davon abhängt, was seine Quelle ist:

- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte mit einer [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Quelle laufen ab, sobald sie verwendet werden (zum Beispiel in einer Bindgruppe).
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte mit einer [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Quelle laufen erst ab, wenn das `VideoFrame` geschlossen wird, zum Beispiel durch einen Aufruf von [`VideoFrame.close()`](/de/docs/Web/API/VideoFrame/close).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`importExternalTexture()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt zurückgegeben:

- Der Videoschnappschuss muss verwendbar sein (z.B. die Videoquelle muss ordnungsgemäß geladen sein und darf keine Breite oder Höhe von 0 haben).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Videodatenquelle Cross-Origin ist.

## Beispiele

Im WebGPU-Beispiel [Video Uploading sample](https://webgpu.github.io/webgpu-samples/samples/videoUploading/) wird ein `importExternalTexture()`-Aufruf als Wert eines Bindgruppeneintrags `resource` verwendet, der beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) über einen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf angegeben wird:

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
