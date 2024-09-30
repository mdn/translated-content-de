---
title: XRInputSourcesChangeEvent
slug: Web/API/XRInputSourcesChangeEvent
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}} {{SecureContext_Header}}

Das WebXR Device API-Interface **`XRInputSourcesChangeEvent`** wird verwendet, um das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event) Ereignis zu repräsentieren, das an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet wird, wenn sich die Menge der verfügbaren WebXR-Eingabegeräte ändert.

{{InheritanceDiagram}}

## Konstruktor

- [`XRInputSourcesChangeEvent()`](/de/docs/Web/API/XRInputSourcesChangeEvent/XRInputSourcesChangeEvent)
  - : Erstellt und gibt ein neues `XRInputSourcesChangeEvent`-Objekt zurück. Der angegebene Typ muss `inputsourceschange` sein, welches das einzige Ereignis ist, das dieses Interface verwendet.

## Instanzeigenschaften

- [`added`](/de/docs/Web/API/XRInputSourcesChangeEvent/added) {{ReadOnlyInline}}
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die jeweils ein Eingabegerät darstellen, das neu verbunden oder zur Nutzung aktiviert wurde.
- [`removed`](/de/docs/Web/API/XRInputSourcesChangeEvent/removed) {{ReadOnlyInline}}
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die die Eingabegeräte darstellen, die neu verbunden oder zur Nutzung aktiviert wurden.
- [`session`](/de/docs/Web/API/XRInputSourcesChangeEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), an die dieses Eingabequellenänderungsereignis gerichtet ist.

## Instanzmethoden

_Obwohl `XRInputSourcesChangeEvent` keine eigenen Methoden definiert, erbt es Methoden von seinem Elterninterface, [`Event`](/de/docs/Web/API/Event)._

## Ereignistypen

- [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)
  - : Wird an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn sich die Menge der verfügbaren Eingabegeräte ändert.

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Ereignishandler einrichten, der `inputsourceschange`-Ereignisse verwendet, um neu verfügbare Zeigegeräte zu erkennen und deren Modelle zu laden, um sie im nächsten Animationsframe anzuzeigen.

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
