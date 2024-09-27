---
title: "XRInputSourcesChangeEvent: Eigenschaft 'added'"
short-title: added
slug: Web/API/XRInputSourcesChangeEvent/added
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent)-Eigenschaft `added` ist eine Liste von null oder mehr Eingabequellen, jede identifiziert durch ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, die neu zur Nutzung zur Verfügung gestellt wurden.

## Wert

Ein {{jsxref("Array")}} von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die jeweils ein Eingabegerät darstellen, das dem XR-System hinzugefügt wurde.

## Beispiele

Das untenstehende Beispiel erstellt einen Handler für das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis, das die Listen der hinzugefügten und entfernten Geräte im WebXR-System verarbeitet. Es sucht nach neuen und entfernten Geräten, deren [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) `tracked-pointer` ist.

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
