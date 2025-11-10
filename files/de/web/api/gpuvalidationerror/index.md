---
title: GPUValidationError
slug: Web/API/GPUValidationError
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUValidationError`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation die Validierungsbeschränkungen der WebGPU API nicht erfüllt hat.

Es repräsentiert einen der Fehlertypen, die durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und das [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis sichtbar werden.

Validierungsfehler treten auf, wenn ungültige Eingaben in einem WebGPU-Aufruf gegeben werden. Diese sind konsistent, vorhersehbar und sollten nicht auftreten, sofern Ihre Anwendung korrekt gestaltet ist. Sie werden auf jedem Gerät, auf dem Ihr Code läuft, auf die gleiche Weise auftreten; daher müssen Sie sie, wenn Sie alle während der Entwicklung auftretenden Fehler behoben haben, wahrscheinlich die meiste Zeit nicht direkt beobachten. Eine Ausnahme von dieser Regel besteht, wenn Sie von Benutzern bereitgestellte Assets, Shader usw. verwenden, in diesem Fall könnte es hilfreich sein, bei der Ladezeit auf Validierungsfehler zu achten.

> [!NOTE]
> Wir haben versucht, nützliche Informationen bereitzustellen, um Ihnen zu helfen zu verstehen, warum Validierungsfehler in Ihrem WebGPU-Code auftreten, in "Validation"-Sektionen, wo es angemessen ist, die Kriterien aufführen, die erfüllt sein müssen, um Validierungsfehler zu vermeiden. Siehe zum Beispiel die [`GPUDevice.createBindGroup()` Validation-Sektion](/de/docs/Web/API/GPUDevice/createBindGroup#validation).

{{InheritanceDiagram}}

## Konstruktor

- [`GPUValidationError()`](/de/docs/Web/API/GPUValidationError/GPUValidationError)
  - : Erstellt eine neue Instanz eines `GPUValidationError`-Objekts.

## Instanz-Eigenschaften

Die Eigenschaft `message` wird von ihrem Elternteil, [`GPUError`](/de/docs/Web/API/GPUError), geerbt:

- [`message`](/de/docs/Web/API/GPUError/message) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und ihn in die Konsole zu protokollieren.

```js
device.pushErrorScope("validation");

let sampler = device.createSampler({
  maxAnisotropy: 0, // Invalid, maxAnisotropy must be at least 1.
});

device.popErrorScope().then((error) => {
  if (error) {
    // error is a GPUValidationError object instance
    sampler = null;
    console.error(`An error occurred while creating sampler: ${error.message}`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [Best Practices zur Fehlerbehandlung in WebGPU](https://toji.dev/webgpu-best-practices/error-handling)
