---
title: GPUUncapturedErrorEvent
slug: Web/API/GPUUncapturedErrorEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`GPUUncapturedErrorEvent`**-Interface der {{domxref("WebGPU API", "WebGPU-API", "", "nocode")}} ist der Ereignisobjekttyp für das {{domxref("GPUDevice")}}-{{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}}-Ereignis, das für Telemetrie verwendet wird und unerwartete Fehler meldet.

Bekannte Fehlerfälle sollten mit {{domxref("GPUDevice.pushErrorScope", "pushErrorScope()")}} und {{domxref("GPUDevice.popErrorScope", "popErrorScope()")}} behandelt werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("GPUUncapturedErrorEvent.GPUUncapturedErrorEvent", "GPUUncapturedErrorEvent()")}} {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `GPUUncapturedErrorEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Element, {{domxref("Event")}}._

- {{domxref("GPUUncapturedErrorEvent.error", "error")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein {{domxref("GPUError")}}-Objektinstanz, die Zugriff auf die Details des Fehlers bietet.

## Beispiele

Sie könnten etwas wie das Folgende als globale Mechanismus verwenden, um alle Fehler zu erfassen, die nicht durch Fehlerbereiche behandelt werden und diese erfassen.

```js
// ...

device.addEventListener("uncapturederror", (event) => {
  // Fehler erneut anzeigen
  console.error("Ein WebGPU-Fehler wurde nicht erfasst:", event.error.message);
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
