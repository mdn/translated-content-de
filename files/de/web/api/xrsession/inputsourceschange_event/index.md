---
title: "XRSession: inputsourceschange-Ereignis"
short-title: inputsourceschange
slug: Web/API/XRSession/inputsourceschange_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`inputsourceschange`**-Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn sich die Menge der verfügbaren WebXR-Eingabegeräte ändert.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("inputsourceschange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oninputsourceschange = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourcesChangeEvent")}}

## Beschreibung

### Auslöser

Wird ausgelöst, wenn sich die Menge der verfügbaren WebXR-Eingabegeräte ändert.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um zu erkennen, wenn neue Geräte verfügbar werden oder Geräte nicht mehr verfügbar sind.

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Event-Handler einrichten, der mithilfe von `inputsourceschange`-Ereignissen neu verfügbare Zeigegeräte erkennt und deren Modelle lädt, damit sie im nächsten Animationsframe angezeigt werden können.

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

Sie können auch einen Handler für `inputsourceschange`-Ereignisse hinzufügen, indem Sie den Event-Handler `oninputsourceschange` festlegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `oninputsourceschange` hinzugefügte Event-Listener ersetzt werden:

```js
xrSession.oninputsourceschange = onInputSourcesChange;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
