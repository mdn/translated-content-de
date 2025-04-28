---
title: GPUUncapturedErrorEvent
slug: Web/API/GPUUncapturedErrorEvent
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUUncapturedErrorEvent`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice)-[`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis, das für Telemetrie verwendet wird und um unerwartete Fehler zu melden.

Bekannte Fehlerfälle sollten mit [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) und [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) behandelt werden.

{{InheritanceDiagram}}

## Konstruktor

- [`GPUUncapturedErrorEvent()`](/de/docs/Web/API/GPUUncapturedErrorEvent/GPUUncapturedErrorEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz eines `GPUUncapturedErrorEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Objekt, [`Event`](/de/docs/Web/API/Event)._

- [`error`](/de/docs/Web/API/GPUUncapturedErrorEvent/error) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Instanz eines [`GPUError`](/de/docs/Web/API/GPUError)-Objekts, die Zugriff auf die Details des Fehlers bietet.

## Beispiele

Sie könnten etwas wie das Folgende als globalen Mechanismus verwenden, um alle Fehler zu erfassen, die nicht von Fehlerbereichen behandelt werden, und sie festzuhalten.

```js
// …

device.addEventListener("uncapturederror", (event) => {
  // Re-surface the error
  console.error("A WebGPU error was not captured:", event.error.message);
  reportErrorToServer({
    type: event.error.constructor.name,
    message: event.error.message,
  });
});

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [Best Practices für WebGPU-Fehlerbehandlung](https://toji.dev/webgpu-best-practices/error-handling)
