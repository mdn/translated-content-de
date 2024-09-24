---
title: GPUInternalError
slug: Web/API/GPUInternalError
l10n:
  sourceCommit: 779045977059a6809ba82548352ce1b00d70dfc7
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUInternalError`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation aus einem system- oder implementierungsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Validierungsanforderungen erfüllt wurden.

Sie stellt einen der Fehlertypen dar, die von {{domxref("GPUDevice.popErrorScope")}} und dem {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}}-Ereignis ausgegeben werden.

Interne Fehler treten auf, wenn in der WebGPU-Implementierung etwas passiert ist, das nicht durch Validierung aufgefangen wurde und nicht eindeutig als ein Speicherüberlauf-Fehler identifiziert werden konnte. Es bedeutet im Allgemeinen, dass eine von Ihrem Code ausgeführte Operation auf eine Systemgrenze gestoßen ist, die mit den [unterstützten Grenzen](/de/docs/Web/API/GPUSupportedLimits) von WebGPU schwer auszudrücken war. Die gleiche Operation könnte auf einem anderen Gerät erfolgreich sein. Diese Fehler können nur durch die Erstellung von Pipelines ausgelöst werden, meist wenn der Shader zu komplex für das Gerät ist.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("GPUInternalError.GPUInternalError", "GPUInternalError()")}} {{Experimental_Inline}}
  - : Erzeugt eine neue Instanz des `GPUInternalError`-Objekts.

## Instanzeigenschaften

Die Eigenschaft `message` wird von ihrem Elternteil {{domxref("GPUError")}} geerbt:

- {{domxref("GPUError.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und protokolliert ihn in der Konsole.

```js
device.pushErrorScope("internal");

const module = device.createShaderModule({
  code: shader, // WIRKLICH komplexer Shader
});

device.popErrorScope().then((error) => {
  if (error) {
    // error ist eine Instanz des GPUInternalError-Objekts
    module = null;
    console.error(`Ein Fehler ist beim Erstellen des Shaders aufgetreten: ${error.message}`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [Best Practices für Fehlerbehandlung in WebGPU](https://toji.dev/webgpu-best-practices/error-handling)
