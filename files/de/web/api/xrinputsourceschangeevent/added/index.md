---
title: "XRInputSourcesChangeEvent: added-Eigenschaft"
short-title: added
slug: Web/API/XRInputSourcesChangeEvent/added
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent)-Eigenschaft `added` ist eine Liste von null oder mehr Eingabequellen, die jeweils mit einem [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt identifiziert werden, die neu zur Nutzung verfügbar gemacht wurden.

## Wert

Ein {{jsxref("Array")}} von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die jeweils ein Eingabegerät repräsentieren, das dem XR-System hinzugefügt wurde.

## Beispiele

Das folgende Beispiel erstellt einen Handler für das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis, der die Listen von hinzugefügten und entfernten Geräten aus dem WebXR-System verarbeitet. Es sucht nach neuen und entfernten Geräten, deren [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) `tracked-pointer` ist.

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
