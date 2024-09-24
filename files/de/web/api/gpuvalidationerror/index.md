---
title: GPUValidationError
slug: Web/API/GPUValidationError
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUValidationError`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} beschreibt einen Anwendungsfehler, der anzeigt, dass ein Vorgang die Validierungsbeschränkungen der WebGPU API nicht bestanden hat.

Es repräsentiert einen der Fehlertypen, die von {{domxref("GPUDevice.popErrorScope")}} und dem {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}}-Ereignis angezeigt werden.

Validierungsfehler treten auf, wenn ungültige Eingaben in einem WebGPU-Aufruf übergeben werden. Diese sind konsistent, vorhersehbar und sollten nicht auftreten, sofern Ihre Anwendung korrekt aufgebaut ist. Sie werden auf jedem Gerät, auf dem Ihr Code läuft, auf die gleiche Weise auftreten, daher müssen Sie sie wahrscheinlich nicht direkt beobachten, wenn Sie alle während der Entwicklung auftretenden Fehler korrigiert haben. Eine Ausnahme von dieser Regel ist, wenn Sie vom Benutzer bereitgestellte Assets, Shader usw. verwenden. In diesem Fall könnte es hilfreich sein, während des Ladens nach Validierungsfehlern zu suchen.

> [!NOTE]
> Wir haben versucht, nützliche Informationen bereitzustellen, die Ihnen helfen zu verstehen, warum Validierungsfehler in Ihrem WebGPU-Code auftreten. In den "Validierung"-Abschnitten, wo zutreffend, wird aufgeführt, welche Kriterien erfüllt sein müssen, um Validierungsfehler zu vermeiden. Siehe zum Beispiel den [`GPUDevice.createBindGroup()`-Validierungsabschnitt](/de/docs/Web/API/GPUDevice/createBindGroup#validation).

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("GPUValidationError.GPUValidationError", "GPUValidationError()")}} {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `GPUValidationError`-Objekts.

## Instanz-Eigenschaften

Die Eigenschaft `message` wird von ihrem Elternteil {{domxref("GPUError")}} geerbt:

- {{domxref("GPUError.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und diesen in der Konsole zu protokollieren.

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
- [WebGPU Error Handling Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
