---
title: GPUOutOfMemoryError
slug: Web/API/GPUOutOfMemoryError
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUOutOfMemoryError`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} beschreibt einen Speicherauslauf-Fehler (oom), der darauf hinweist, dass nicht genügend freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.

Sie repräsentiert eine der Arten von Fehlern, die von {{domxref("GPUDevice.popErrorScope")}} und dem {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}}-Ereignis angezeigt werden.

Speicherauslauf-Fehler sollten in einer gut gestalteten Anwendung relativ selten auftreten, sind jedoch weniger vorhersagbar als {{domxref("GPUValidationError")}}s. Dies liegt daran, dass sie von dem Gerät abhängen, auf dem Ihre Anwendung läuft, sowie von anderen Anwendungen, die zur gleichen Zeit GPU-Ressourcen nutzen.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("GPUOutOfMemoryError.GPUOutOfMemoryError", "GPUOutOfMemoryError()")}} {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `GPUOutOfMemoryError`-Objekts.

## Instanz-Eigenschaften

Die `message`-Eigenschaft wird von ihrem Elternteil {{domxref("GPUError")}} geerbt:

- {{domxref("GPUError.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen Speicherauslauf-Fehler zu erfassen und diesen in der Konsole zu protokollieren.

```js
device.pushErrorScope("out-of-memory");

let buffer = device.createBuffer({
  size: 100_000_000_000, // 100GB; viel zu groß
  usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE,
});

device.popErrorScope().then((error) => {
  if (error) {
    // error ist eine Instanz des GPUOutOfMemoryError-Objekts
    buffer = null;
    console.error(`Out of memory, buffer too large. Error: ${error.message}`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU-Fehlerbehandlungsbest Practices](https://toji.dev/webgpu-best-practices/error-handling)
