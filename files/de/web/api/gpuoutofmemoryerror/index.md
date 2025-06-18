---
title: GPUOutOfMemoryError
slug: Web/API/GPUOutOfMemoryError
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUOutOfMemoryError`** Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt einen Speicherüberlauf-Fehler (out-of-memory), der darauf hinweist, dass nicht genügend freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.

Sie stellt einen der Fehlertypen dar, die durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und das [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis hervorgehoben werden.

Out-of-memory-Fehler sollten in einer gut funktionierenden App relativ selten sein, sind jedoch weniger vorhersehbar als [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)s. Dies liegt daran, dass sie von dem Gerät abhängen, auf dem Ihre App läuft, sowie von anderen Apps, die zum Zeitpunkt der Ausführung GPU-Ressourcen nutzen.

{{InheritanceDiagram}}

## Konstruktor

- [`GPUOutOfMemoryError()`](/de/docs/Web/API/GPUOutOfMemoryError/GPUOutOfMemoryError)
  - : Erstellt eine neue Instanz des `GPUOutOfMemoryError`-Objekts.

## Instanz-Eigenschaften

Die Eigenschaft `message` wird von ihrem Elternteil, [`GPUError`](/de/docs/Web/API/GPUError), geerbt:

- [`message`](/de/docs/Web/API/GPUError/message) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen Out-of-Memory-Fehler zu erfassen und gibt ihn in der Konsole aus.

```js
device.pushErrorScope("out-of-memory");

let buffer = device.createBuffer({
  size: 100_000_000_000, // 100GB; far too big
  usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE,
});

device.popErrorScope().then((error) => {
  if (error) {
    // error is a GPUOutOfMemoryError object instance
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
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
