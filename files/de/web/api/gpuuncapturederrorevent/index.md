---
title: GPUUncapturedErrorEvent
slug: Web/API/GPUUncapturedErrorEvent
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUUncapturedErrorEvent`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice)-[`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Event, das für Telemetrie und zur Meldung unerwarteter Fehler verwendet wird.

Bekannte Fehlerfälle sollten mit [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) und [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) behandelt werden.

{{InheritanceDiagram}}

## Konstruktor

- [`GPUUncapturedErrorEvent()`](/de/docs/Web/API/GPUUncapturedErrorEvent/GPUUncapturedErrorEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `GPUUncapturedErrorEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternobjekt, [`Event`](/de/docs/Web/API/Event)._

- [`error`](/de/docs/Web/API/GPUUncapturedErrorEvent/error) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Instanz des [`GPUError`](/de/docs/Web/API/GPUError)-Objekts, die Zugriff auf die Details des Fehlers bietet.

## Beispiele

Sie könnten etwas wie das Folgende als globalen Mechanismus verwenden, um alle Fehler zu erfassen, die nicht durch Fehlerbereiche behandelt werden.

```js
// ...

device.addEventListener("uncapturederror", (event) => {
  // Re-surface the error
  console.error("A WebGPU error was not captured:", event.error.message);
  reportErrorToServer({
    type: event.error.constructor.name,
    message: event.error.message,
  });
});

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU-Fehlerbehandlung: Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
