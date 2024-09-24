---
title: XRInputSourcesChangeEvent
slug: Web/API/XRInputSourcesChangeEvent
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}} {{SecureContext_Header}}

Das WebXR Device API-Interface **`XRInputSourcesChangeEvent`** wird verwendet, um das {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}}-Ereignis zu repräsentieren, das an eine {{domxref("XRSession")}} gesendet wird, wenn sich die verfügbaren WebXR-Eingabesteuerungen ändern.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("XRInputSourcesChangeEvent.XRInputSourcesChangeEvent", "XRInputSourcesChangeEvent()")}}
  - : Erstellt und gibt ein neues `XRInputSourcesChangeEvent`-Objekt zurück. Der angegebene Typ muss `inputsourceschange` sein, welches das einzige Ereignis ist, das dieses Interface verwendet.

## Instanzeigenschaften

- {{domxref("XRInputSourcesChangeEvent.added", "added")}} {{ReadOnlyInline}}
  - : Ein Array von null oder mehr {{domxref("XRInputSource")}}-Objekten, von denen jedes ein Eingabegerät darstellt, das neu angeschlossen oder zur Nutzung aktiviert wurde.
- {{domxref("XRInputSourcesChangeEvent.removed", "removed")}} {{ReadOnlyInline}}
  - : Ein Array von null oder mehr {{domxref("XRInputSource")}}-Objekten, die die neu angeschlossenen oder aktivierten Eingabegeräte darstellen.
- {{domxref("XRInputSourcesChangeEvent.session", "session")}} {{ReadOnlyInline}}
  - : Die {{domxref("XRSession")}}, an die dieses Eingabequellenänderungsereignis gerichtet ist.

## Instanzmethoden

_Obwohl `XRInputSourcesChangeEvent` keine eigenen Methoden definiert, erbt es Methoden von seinem übergeordneten Interface, {{domxref("Event")}}._

## Ereignistypen

- {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}}
  - : Wird an die {{domxref("XRSession")}} geliefert, wenn sich der Satz von Eingabegeräten, die ihr zur Verfügung stehen, ändert.

## Beispiele

Das folgende Beispiel zeigt, wie ein Ereignishandler eingerichtet wird, der `inputsourceschange`-Ereignisse verwendet, um neu verfügbare Zeigegeräte zu erkennen und deren Modelle zu laden, um sie im nächsten Animationsframe anzuzeigen.

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

Sie können auch einen Handler für `inputsourceschange`-Ereignisse hinzufügen, indem Sie den `oninputsourceschange` Ereignishandler festlegen:

```js
xrSession.oninputsourceschange = onInputSourcesChange;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
