---
title: "XRSession: inputsourceschange Ereignis"
short-title: inputsourceschange
slug: Web/API/XRSession/inputsourceschange_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`inputsourceschange`** Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn sich die Menge der verfügbaren WebXR-Eingabegeräte ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

```js-nolint
addEventListener("inputsourceschange", (event) => { })

oninputsourceschange = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourcesChangeEvent")}}

## Beschreibung

### Auslöser

Ausgelöst, wenn sich die Menge der verfügbaren WebXR-Eingabegeräte ändert.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um neu verfügbare Geräte zu erkennen oder wenn Geräte nicht mehr verfügbar sind.

## Beispiele

Das folgende Beispiel zeigt, wie man einen Ereignisbehandler einrichtet, der `inputsourceschange` Ereignisse verwendet, um neu verfügbare Zeigegeräte zu erkennen und deren Modelle zu laden, um sie im nächsten Animationsrahmen anzuzeigen.

```js
xrSession.addEventListener("inputsourceschange", onInputSourcesChange);

function onInputSourcesChange(event) {
  for (const input of event.added) {
    if (input.targetRayMode === "tracked-pointer") {
      loadControllerMesh(input);
    }
  }
}
```

Sie können einen Behandler für `inputsourceschange` Ereignisse auch hinzufügen, indem Sie die `oninputsourceschange` Ereignisbehandlungsfunktion setzen:

```js
xrSession.oninputsourceschange = onInputSourcesChange;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
