---
title: "XRSession: inputsourceschange Ereignis"
short-title: inputsourceschange
slug: Web/API/XRSession/inputsourceschange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`inputsourceschange`** Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn sich die Menge der verfügbaren WebXR-Eingabegeräte ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("inputsourceschange", (event) => { })

oninputsourceschange = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourcesChangeEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`added`](/de/docs/Web/API/XRInputSourcesChangeEvent/added) {{ReadOnlyInline}}
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die jeweils ein Eingabegerät darstellen, das kürzlich verbunden oder aktiviert wurde.
- [`removed`](/de/docs/Web/API/XRInputSourcesChangeEvent/removed) {{ReadOnlyInline}}
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die die kürzlich getrennten oder deaktivierten Eingabegeräte darstellen.
- [`session`](/de/docs/Web/API/XRInputSourcesChangeEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), an die dieses Eingabequellenänderungsereignis gerichtet ist.

## Beschreibung

### Auslöser

Ausgelöst, wenn sich die Menge der verfügbaren WebXR-Eingabegeräte ändert.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um neu verfügbare Geräte zu erkennen oder wenn Geräte nicht mehr verfügbar sind.

## Beispiele

Das folgende Beispiel zeigt, wie ein Ereignishandler eingerichtet wird, der `inputsourceschange` Ereignisse verwendet, um neu verfügbare Zeigegeräte zu erkennen und deren Modelle zu laden, um sie im nächsten Animationsframe anzuzeigen.

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

Sie können auch einen Handler für `inputsourceschange` Ereignisse hinzufügen, indem Sie den `oninputsourceschange` Ereignishandler setzen:

```js
xrSession.oninputsourceschange = onInputSourcesChange;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
