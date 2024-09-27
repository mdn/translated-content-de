---
title: GPUOutOfMemoryError
slug: Web/API/GPUOutOfMemoryError
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUOutOfMemoryError`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt einen Out-of-Memory- (oom) Fehler, der darauf hinweist, dass nicht genügend freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.

Sie stellt einen der Fehlertypen dar, die durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und das [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis angezeigt werden.

Out-of-Memory-Fehler sollten in einer gut funktionierenden App relativ selten auftreten, sind jedoch weniger vorhersagbar als [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)s. Dies liegt daran, dass sie vom Gerät, auf dem Ihre App läuft, sowie von anderen Apps abhängen, die zu diesem Zeitpunkt GPU-Ressourcen nutzen.

{{InheritanceDiagram}}

## Konstruktor

- [`GPUOutOfMemoryError()`](/de/docs/Web/API/GPUOutOfMemoryError/GPUOutOfMemoryError) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des Objekts `GPUOutOfMemoryError`.

## Instanz-Eigenschaften

Die `message`-Eigenschaft wird von ihrem übergeordneten Element [`GPUError`](/de/docs/Web/API/GPUError) geerbt:

- [`message`](/de/docs/Web/API/GPUError/message) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine lesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen Out-of-Memory-Fehler zu erfassen und protokolliert ihn in der Konsole.

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
- [WebGPU Fehlerbehandlung - Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
