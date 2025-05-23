---
title: GPUInternalError
slug: Web/API/GPUInternalError
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUInternalError`**-Schnittstelle der [WebGPU-API](/de/docs/Web/API/WebGPU_API) beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation aus einem system- oder implementierungsspezifischen Grund fehlgeschlagen ist, obwohl alle Validierungsanforderungen erfüllt waren.

Sie stellt einen der Fehlertypen dar, die durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und das [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis angezeigt werden.

Interne Fehler treten auf, wenn in der WebGPU-Implementierung etwas passiert, das nicht durch die Validierung erfasst wurde und nicht eindeutig als Speicherplatzmangel identifizierbar war. Dies bedeutet im Allgemeinen, dass eine Operation, die Ihr Code ausgeführt hat, ein Systemlimit erreicht hat, das schwer mit den [unterstützten Grenzen](/de/docs/Web/API/GPUSupportedLimits) von WebGPU auszudrücken war. Die gleiche Operation könnte auf einem anderen Gerät erfolgreich sein. Diese Fehler können nur durch die Erstellung der Pipeline ausgelöst werden, normalerweise wenn der Shader für das Gerät zu komplex ist.

{{InheritanceDiagram}}

## Konstruktor

- [`GPUInternalError()`](/de/docs/Web/API/GPUInternalError/GPUInternalError) {{Experimental_Inline}}
  - : Erstellt eine neue `GPUInternalError` Objektinstanz.

## Instanz-Eigenschaften

Die `message`-Eigenschaft wird von ihrem Elternteil, [`GPUError`](/de/docs/Web/API/GPUError), geerbt:

- [`message`](/de/docs/Web/API/GPUError/message) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und protokolliert ihn in der Konsole.

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
- [Best Practices zur Fehlerbehandlung in WebGPU](https://toji.dev/webgpu-best-practices/error-handling)
