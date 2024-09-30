---
title: "XRSession: squeezestart-Ereignis"
short-title: squeezestart
slug: Web/API/XRSession/squeezestart_event
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das [WebXR](/de/docs/Web/API/WebXR_Device_API)-Ereignis **`squeezestart`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn der Benutzer eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) an einer ihrer Eingabequellen beginnt.

Primäre Quetschaktionen sind Aktionen, die das Greifen oder Quetschen mit den Händen darstellen sollen und können mit Triggern auf Handcontrollern simuliert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("squeezestart", (event) => {});

onsqueezestart = (event) => {};
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften der Elternschnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, während dessen das Ereignis aufgetreten ist. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein und ist nicht zwingend ein aktueller Rahmen. Da es sich um einen _Ereignis_-Rahmen handelt und nicht um einen _Animations_-Rahmen, kann [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) nicht darauf aufgerufen werden; nutzen Sie stattdessen [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn Benutzer anfangen, den Controller zu drücken, eine Handbewegung zu machen, die das Greifen von etwas imitiert, oder einen Trigger zu betätigen.

### Anwendungsfälle

Das `squeezestart`-Ereignis wird gesendet, um anzuzeigen, dass der Benutzer eine Quetschaktion begonnen hat.

Wenn die primäre Quetschaktion erfolgreich abgeschlossen wird, erhält die Sitzung ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis.

Ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis wird gesendet, um anzuzeigen, dass die Quetschaktion nicht mehr läuft. Dies wird unabhängig davon gesendet, ob die Quetschaktion erfolgreich war oder nicht.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Handler für die Quetschereignisse einzurichten: `squeezestart`, [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) und [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event). Dieses Snippet bildet den Kern eines Ereignis-Handlers, der es dem Benutzer ermöglicht, Objekte in der Szene zu greifen und zu bewegen.

In diesem Fall wird eine einzelne Funktion verwendet, um alle drei Ereignisse zu behandeln, wodurch sie bestimmten Code teilen können, der unabhängig davon identisch ist, welches der drei Ereignisse empfangen wird. Erst nach Abschluss dieser Aufgaben leitet die Funktion `onSqueezeEvent()` die Aktion an eine spezialisierte Funktion weiter, um die Dinge zu handhaben.

Nach der Überprüfung, dass das empfangene Ereignis ein `tracked-pointer`-Ereignis ist (die einzige Art, die wir hier behandeln), wird die Pose des Zielstrahls mit [`getPose()`](/de/docs/Web/API/XRFrame/getPose) ermittelt.

Wenn die Zielstrahlpose erfolgreich abgerufen wurde, verwendet der Code den Wert der [`type`](/de/docs/Web/API/Event/type)-Eigenschaft des [`Event`](/de/docs/Web/API/Event), um die Steuerung an eine geeignete Funktion zur Behandlung des eingetroffenen Ereignisses zu übergeben:

- Für `squeezestart`-Ereignisse wird eine `myBeginTracking()`-Funktion mit der [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Zielstrahlpose aufgerufen. Die Funktion `myBeginTracking()` würde vermutlich den Prozess des Objektziehens starten, indem der Transformator zum Durchführen eines Hit-Tests verwendet wird, um zu bestimmen, welches Objekt aufgehoben wird. `myBeginTracking()` gibt ein Objekt zurück, das das Objekt repräsentiert, das der Benutzer zu ziehen begonnen hat.
- Beim Empfang eines `squeeze`-Ereignisses wird die Funktion `myDropObject()` mit dem Zielobjekt und dem aktuellen Transformator der Zielstrahlpose aufgerufen. Dies platziert das Objekt in seiner neuen Position in der Welt und löst mögliche Effekte aus, wie das Planen einer Animation eines Spritzers, falls es ins Wasser fällt, usw.
- Das `squeezeend`-Ereignis führt dazu, dass eine `myStopTracking()`-Funktion mit dem sich in der Bewegung befindlichen Objekt und dem finalen Transformator der Zielstrahlpose aufgerufen wird.

```js
xrSession.addEventListener("squeezestart", onSqueezeEvent);
xrSession.addEventListener("squeeze", onSqueezeEvent);
xrSession.addEventListener("squeezeend", onSqueezeEvent);

function onSqueezeEvent(event) {
  let source = event.inputSource;
  let targetObj = null;

  if (source.targetRayMode !== "tracked-pointer") {
    return;
  }

  let targetRayPose = event.frame.getPose(source.targetRaySpace, myRefSpace);
  if (!targetRayPose) {
    return;
  }

  switch (event.type) {
    case "squeezestart":
      targetObj = myBeginTracking(targetRayPose.matrix);
      break;
    case "squeeze":
      myDropObject(targetObj, targetRayPose.matrix);
      break;
    case "squeezeend":
      myStopTracking(targetObj, targetRayPose.matrix);
      break;
  }
}
```

Sie können auch einen Handler für diese Ereignisse einrichten, indem Sie die Ereignis-Handler-Eigenschaften des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts auf eine Funktion setzen, die das Ereignis behandelt:

```js
xrSession.onsqueezestart = onSqueezeEvent;
xrSession.onsqueeze = onSqueezeEvent;
xrSession.onsqueezeend = onSqueezeEvent;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
