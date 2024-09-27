---
title: GPUInternalError
slug: Web/API/GPUInternalError
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUInternalError`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation aus einem system- oder implementationsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Validierungsanforderungen erfüllt waren.

Er repräsentiert einen der Fehlertypen, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis gemeldet werden.

Interne Fehler treten auf, wenn in der WebGPU-Implementierung etwas passiert, das von der Validierung nicht erfasst wurde und nicht eindeutig als Speicherüberlauf-Fehler identifiziert werden konnte. Im Allgemeinen bedeutet dies, dass eine Operation, die Ihr Code ausgeführt hat, ein Systemlimit auf eine Weise erreicht hat, die mit den [unterstützten Limits](/de/docs/Web/API/GPUSupportedLimits) von WebGPU schwer zu formulieren war. Dieselbe Operation könnte auf einem anderen Gerät erfolgreich sein. Diese können nur bei der Erzeugung von Pipelines ausgelöst werden, in der Regel, wenn der Shader zu komplex für das Gerät ist.

{{InheritanceDiagram}}

## Konstruktor

- [`GPUInternalError()`](/de/docs/Web/API/GPUInternalError/GPUInternalError) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `GPUInternalError`-Objekts.

## Instanz-Eigenschaften

Die `message`-Eigenschaft wird von ihrem Elternteil, [`GPUError`](/de/docs/Web/API/GPUError), geerbt:

- [`message`](/de/docs/Web/API/GPUError/message) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine verständliche Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und ihn in die Konsole zu protokollieren.

```js
device.pushErrorScope("internal");

const module = device.createShaderModule({
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
- [WebGPU Fehlerbehandlung: bewährte Verfahren](https://toji.dev/webgpu-best-practices/error-handling)
