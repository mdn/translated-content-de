---
title: "XRSession: inputsourceschange Ereignis"
short-title: inputsourceschange
slug: Web/API/XRSession/inputsourceschange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`inputsourceschange`**-Ereignis wird an eine {{domxref("XRSession")}} gesendet, wenn sich die Menge der verfügbaren WebXR-Eingabegeräte ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("inputsourceschange", (event) => {});

oninputsourceschange = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRInputSourcesChangeEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("XRInputSourcesChangeEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der Elternschnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("XRInputSourcesChangeEvent.added", "added")}} {{ReadOnlyInline}}
  - : Ein Array von null oder mehr {{domxref("XRInputSource")}} Objekten, von denen jedes ein kürzlich verbundenes oder aktiviertes Eingabegerät darstellt.
- {{domxref("XRInputSourcesChangeEvent.removed", "removed")}} {{ReadOnlyInline}}
  - : Ein Array von null oder mehr {{domxref("XRInputSource")}} Objekten, die die kürzlich getrennten oder deaktivierten Eingabegeräte darstellen.
- {{domxref("XRInputSourcesChangeEvent.session", "session")}} {{ReadOnlyInline}}
  - : Die {{domxref("XRSession")}}, an die dieses Eingabequellenänderungsereignis gerichtet ist.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn sich die Menge der verfügbaren WebXR-Eingabegeräte ändert.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um neu verfügbare Geräte zu erkennen oder wenn Geräte nicht mehr verfügbar sind.

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Ereignishandler einrichten, der `inputsourceschange`-Ereignisse verwendet, um neu verfügbare Zeigegeräte zu erkennen und deren Modelle zu laden, um sie im nächsten Animationsrahmen anzuzeigen.

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

Sie können auch einen Handler für `inputsourceschange`-Ereignisse hinzufügen, indem Sie den `oninputsourceschange`-Ereignishandler setzen:

```js
xrSession.oninputsourceschange = onInputSourcesChange;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
