---
title: GPUUncapturedErrorEvent
slug: Web/API/GPUUncapturedErrorEvent
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUUncapturedErrorEvent`**-Interface der [WebGPU-API](/de/docs/Web/API/WebGPU_API) ist der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice)-[`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis, das für Telemetrie genutzt wird und um unerwartete Fehler zu melden.

Bekannte Fehlerfälle sollten mit [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) und [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) behandelt werden.

{{InheritanceDiagram}}

## Konstruktor

- [`GPUUncapturedErrorEvent()`](/de/docs/Web/API/GPUUncapturedErrorEvent/GPUUncapturedErrorEvent)
  - : Erstellt eine neue Instanz des `GPUUncapturedErrorEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Element, [`Event`](/de/docs/Web/API/Event)._

- [`error`](/de/docs/Web/API/GPUUncapturedErrorEvent/error) {{ReadOnlyInline}}
  - : Eine [`GPUError`](/de/docs/Web/API/GPUError)-Objektinstanz, die Zugriff auf die Details des Fehlers bietet.

## Beispiele

Sie könnten so etwas wie das Folgende verwenden, um einen globalen Mechanismus zu schaffen, der alle Fehler erfasst, die nicht von Fehlerbereichen behandelt werden, und sie auffängt.

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
- [WebGPU-Best Practices für Fehlerbehandlung](https://toji.dev/webgpu-best-practices/error-handling)
