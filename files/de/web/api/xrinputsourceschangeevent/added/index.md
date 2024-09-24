---
title: "XRInputSourcesChangeEvent: added-Eigenschaft"
short-title: hinzugefügt
slug: Web/API/XRInputSourcesChangeEvent/added
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRInputSourcesChangeEvent")}}-Eigenschaft `added` ist eine Liste von null oder mehr Eingabequellen, die jeweils durch ein {{domxref("XRInputSource")}}-Objekt identifiziert werden. Diese Quellen stehen nun zur Nutzung zur Verfügung.

## Wert

Ein {{jsxref("Array")}} von null oder mehr {{domxref("XRInputSource")}}-Objekten, die jeweils ein Eingabegerät darstellen, das dem XR-System hinzugefügt wurde.

## Beispiele

Das folgende Beispiel erstellt einen Handler für das {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}}-Ereignis, das die Listen der hinzugefügten und entfernten Geräte aus dem WebXR-System verarbeitet. Es sucht nach neuen und entfernten Geräten, deren {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} `tracked-pointer` ist.

```js
xrSession.oninputsourcescchange = (event) => {
  for (const input of event.added) {
    if (input.targetRayMode === "tracked-pointer") {
      addedPointerDevice(input);
    }
  }
  for (const input of event.removed) {
    if (input.targetRayMode === "tracked-pointer") {
      removedPointerDevice(input);
    }
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
