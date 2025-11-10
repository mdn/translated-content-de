---
title: GPUInternalError
slug: Web/API/GPUInternalError
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUInternalError`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation aus einem system- oder implementationsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Validierungsanforderungen erfüllt waren.

Sie repräsentiert einen der Fehlertypen, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis aufgetreten sind.

Interne Fehler treten auf, wenn in der WebGPU-Implementierung etwas passiert ist, das nicht durch die Validierung erfasst wurde und nicht eindeutig als ein "Out-of-Memory"-Fehler identifiziert werden konnte. Es bedeutet allgemein, dass eine von Ihrem Code ausgeführte Operation ein Systemlimit erreicht hat, das schwer auszudrücken war mit den [unterstützten Limits](/de/docs/Web/API/GPUSupportedLimits) von WebGPU. Dieselbe Operation könnte auf einem anderen Gerät erfolgreich sein. Diese Fehler können nur bei der Erstellung der Pipeline auftreten, normalerweise wenn der Shader für das Gerät zu komplex ist.

{{InheritanceDiagram}}

## Konstruktor

- [`GPUInternalError()`](/de/docs/Web/API/GPUInternalError/GPUInternalError)
  - : Erstellt eine neue `GPUInternalError` Objektinstanz.

## Instanz-Eigenschaften

Die `message`-Eigenschaft wird von ihrem Elternteil [`GPUError`](/de/docs/Web/API/GPUError) geerbt:

- [`message`](/de/docs/Web/API/GPUError/message) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und diesen im Konsolenprotokoll auszugeben.

```js
device.pushErrorScope("internal");

let module = device.createShaderModule({
  code: shader, // REALLY complex shader
});

device.popErrorScope().then((error) => {
  if (error) {
    // error is a GPUInternalError object instance
    module = null;
    console.error(`An error occurred while creating shader: ${error.message}`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [Beste Praktiken für die Fehlerbehandlung in WebGPU](https://toji.dev/webgpu-best-practices/error-handling)
