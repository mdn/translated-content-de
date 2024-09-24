---
title: "GPUDevice: uncapturederror-Ereignis"
short-title: uncapturederror
slug: Web/API/GPUDevice/uncapturederror_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`uncapturederror`**-Ereignis der {{domxref("GPUDevice")}}-Schnittstelle wird ausgelöst, wenn ein Fehler auftritt, der von einem GPU-Fehlerbereich nicht beobachtet wurde, um eine Möglichkeit zu bieten, unerwartete Fehler zu melden.

Bekannte Fehlerfälle sollten mit {{domxref("GPUDevice.pushErrorScope", "pushErrorScope()")}} und {{domxref("GPUDevice.popErrorScope", "popErrorScope()")}} behandelt werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("uncapturederror", (event) => {});

onuncapturederror = (event) => {};
```

## Ereignistyp

Ein {{domxref("GPUUncapturedErrorEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("GPUUncapturedErrorEvent")}}

## Beispiele

Sie könnten so etwas wie das folgende als globalen Mechanismus verwenden, um alle Fehler, die nicht von Fehlerbereichen behandelt werden, aufzufangen und zu erfassen.

```js
device.addEventListener("uncapturederror", (event) => {
  // Erneut auftretenden Fehler anzeigen.
  console.error("Ein WebGPU-Fehler wurde nicht erfasst:", event.error);

  reportErrorToServer({
    type: event.error.constructor.name,
    message: event.error.message,
  });
});
```

Siehe [WebGPU-Fehlerbehandlungs-Best-Practices](https://toji.dev/webgpu-best-practices/error-handling) für weitere Beispiele und Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
