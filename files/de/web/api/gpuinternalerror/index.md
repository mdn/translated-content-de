---
title: GPUInternalError
slug: Web/API/GPUInternalError
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUInternalError`**-Interface der [WebGPU-API](/de/docs/Web/API/WebGPU_API) beschreibt einen Anwendungsfehler, der auftritt, wenn eine Operation aus einem system- oder implementierungsspezifischen Grund fehlschlägt, selbst wenn alle Validierungsanforderungen erfüllt waren.

Es stellt eine der Fehlertypen dar, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis angezeigt werden.

Interne Fehler treten auf, wenn etwas in der WebGPU-Implementierung geschieht, das nicht durch Validierung abgefangen wurde und nicht klar als Speicherplatzfehler identifiziert werden konnte. Dies bedeutet im Allgemeinen, dass eine Operation in Ihrem Code auf ein Systemlimit gestoßen ist, das schwer mit den [unterstützten Limits](/de/docs/Web/API/GPUSupportedLimits) von WebGPU auszudrücken war. Die gleiche Operation könnte auf einem anderen Gerät erfolgreich sein. Diese können nur durch die Erstellung von Pipelines ausgelöst werden, normalerweise, wenn der Shader für das Gerät zu komplex ist.

{{InheritanceDiagram}}

## Konstruktor

- [`GPUInternalError()`](/de/docs/Web/API/GPUInternalError/GPUInternalError) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `GPUInternalError`-Objekts.

## Instanz-Eigenschaften

Die Eigenschaft `message` wird von ihrem übergeordneten Element [`GPUError`](/de/docs/Web/API/GPUError) geerbt:

- [`message`](/de/docs/Web/API/GPUError/message) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und ihn im Konsolenprotokoll auszugeben.

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
- [WebGPU-Fehlerbehandlung Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
