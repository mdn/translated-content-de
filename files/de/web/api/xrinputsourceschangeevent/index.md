---
title: XRInputSourcesChangeEvent
slug: Web/API/XRInputSourcesChangeEvent
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}} {{SecureContext_Header}}

Das WebXR Device API-Interface **`XRInputSourcesChangeEvent`** wird verwendet, um das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis darzustellen, das an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet wird, wenn sich der Satz der verfügbaren WebXR-Eingabegeräte ändert.

{{InheritanceDiagram}}

## Konstruktor

- [`XRInputSourcesChangeEvent()`](/de/docs/Web/API/XRInputSourcesChangeEvent/XRInputSourcesChangeEvent)
  - : Erzeugt und gibt ein neues `XRInputSourcesChangeEvent`-Objekt zurück. Der angegebene Typ muss `inputsourceschange` sein, welches das einzige Ereignis ist, das dieses Interface verwendet.

## Eigenschaften der Instanz

- [`added`](/de/docs/Web/API/XRInputSourcesChangeEvent/added) {{ReadOnlyInline}}
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource) Objekten, von denen jedes ein neu verbundenes oder zur Nutzung aktiviertes Eingabegerät darstellt.
- [`removed`](/de/docs/Web/API/XRInputSourcesChangeEvent/removed) {{ReadOnlyInline}}
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource) Objekten, die die neu verbundenen oder zur Nutzung aktivierten Eingabegeräte darstellen.
- [`session`](/de/docs/Web/API/XRInputSourcesChangeEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), an die dieses Eingabeänderungsereignis gerichtet ist.

## Instanzmethoden

_Obwohl `XRInputSourcesChangeEvent` keine eigenen Methoden definiert, erbt es Methoden von seinem übergeordneten Interface, [`Event`](/de/docs/Web/API/Event)._

## Ereignistypen

- [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)
  - : Wird an die [`XRSession`](/de/docs/Web/API/XRSession) übermittelt, wenn sich der Satz der ihr zur Verfügung stehenden Eingabegeräte ändert.

## Beispiele

Das folgende Beispiel zeigt, wie man einen Ereignis-Handler einrichtet, der `inputsourceschange`-Ereignisse nutzt, um neu verfügbare Zeigegeräte zu erkennen und deren Modelle zu laden, um sie im nächsten Animationsbild darzustellen.

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

Sie können auch einen Handler für `inputsourceschange`-Ereignisse hinzufügen, indem Sie den `oninputsourceschange` Ereignis-Handler festlegen:

```js
xrSession.oninputsourceschange = onInputSourcesChange;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
