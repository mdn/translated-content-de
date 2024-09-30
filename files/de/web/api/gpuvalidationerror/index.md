---
title: GPUValidationError
slug: Web/API/GPUValidationError
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUValidationError`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation die Validierungsbeschränkungen der WebGPU API nicht bestanden hat.

Sie stellt einen der Fehlertypen dar, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis angezeigt werden.

Validierungsfehler treten auf, wann immer ungültige Eingaben in einem WebGPU-Aufruf gegeben werden. Diese sind konsistent, vorhersagbar und sollten nicht auftreten, sofern Ihre App gut aufgebaut ist. Sie werden in gleicher Weise auf jedem Gerät auftreten, auf dem Ihr Code ausgeführt wird, sodass Sie wahrscheinlich die meiste Zeit keine direkte Beobachtung benötigen, sobald Sie alle Fehler, die während der Entwicklung auftreten, behoben haben. Eine Ausnahme von dieser Regel ist, wenn Sie vom Benutzer bereitgestellte Assets, Shader usw. verwenden, in diesem Fall kann es hilfreich sein, auf Validierungsfehler während des Ladevorgangs zu achten.

> [!NOTE]
> Wir haben versucht, nützliche Informationen bereitzustellen, die Ihnen helfen zu verstehen, warum Validierungsfehler in Ihrem WebGPU-Code auftreten, in "Validierungs"-Abschnitten, wo dies angebracht ist, die Kriterien auflisten, die erfüllt werden müssen, um Validierungsfehler zu vermeiden. Siehe zum Beispiel den [`GPUDevice.createBindGroup()` Validierungsabschnitt](/de/docs/Web/API/GPUDevice/createBindGroup#validation).

{{InheritanceDiagram}}

## Konstruktor

- [`GPUValidationError()`](/de/docs/Web/API/GPUValidationError/GPUValidationError) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `GPUValidationError`-Objekts.

## Instanz-Eigenschaften

Die `message`-Eigenschaft wird von ihrem Elternteil, [`GPUError`](/de/docs/Web/API/GPUError), geerbt:

- [`message`](/de/docs/Web/API/GPUError/message) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und protokolliert ihn in der Konsole.

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
- [Beste Praktiken zur Fehlerbehandlung in WebGPU](https://toji.dev/webgpu-best-practices/error-handling)
