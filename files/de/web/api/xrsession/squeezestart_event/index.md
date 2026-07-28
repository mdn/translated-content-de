---
title: "XRSession: squeezestart-Event"
short-title: squeezestart
slug: Web/API/XRSession/squeezestart_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das [WebXR](/de/docs/Web/API/WebXR_Device_API)-Ereignis **`squeezestart`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn der Benutzer eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) auf einer ihrer Eingabequellen beginnt.

Primäre Quetschaktionen sind Aktionen, die das Greifen oder Quetschen mit den Händen darstellen sollen und können mit Triggern an Handcontrollern simuliert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("squeezestart", (event) => { })

onsqueezestart = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Beschreibung

### Auslöser

Wird ausgelöst, wenn Benutzer beginnen, den Controller zu drücken, eine Handbewegung machen, die das Greifen von etwas imitiert, oder einen Trigger betätigen (quetschen).

### Anwendungsfälle

Das `squeezestart`-Ereignis wird gesendet, um anzuzeigen, dass der Benutzer eine Quetschaktion begonnen hat.

Wenn die primäre Quetschaktion erfolgreich endet, wird an die Sitzung ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis gesendet.

Ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis wird gesendet, um anzuzeigen, dass die Quetschaktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Quetschaktion erfolgreich war oder nicht.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Handler für die Quetschereignisse einzurichten: `squeezestart`, [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) und [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event). Dieses Snippet bildet den Kern eines Ereignishandlers, der es dem Benutzer ermöglicht, Objekte in der Szene zu greifen und zu bewegen.

In diesem Fall wird eine einzige Funktion verwendet, um alle drei Ereignisse zu behandeln, sodass sie bestimmten Code teilen können, der unabhängig davon gleich ist, welches der drei Ereignisse empfangen wird. Erst nachdem diese Aufgaben abgeschlossen sind, leitet die Funktion `onSqueezeEvent()` unten die Aktion zur Behandlung der Dinge an eine spezialisierte Funktion weiter.

Nachdem sichergestellt wurde, dass das empfangene Ereignis ein `tracked-pointer`-Ereignis ist (die einzige Art, die wir hier handhaben), wird die Pose des Zielstrahls mithilfe von [`getPose()`](/de/docs/Web/API/XRFrame/getPose) abgerufen.

Wenn die Pose des Zielstrahls erfolgreich abgerufen wurde, verwendet der Code dann den Wert der [`Event`](/de/docs/Web/API/Event)-Eigenschaft [`type`](/de/docs/Web/API/Event/type), um die Kontrolle an eine geeignete Funktion zur Behandlung des eingegangenen Ereignisses weiterzuleiten:

- Bei `squeezestart`-Ereignissen wird eine Funktion `myBeginTracking()` mit der [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Zielstrahl-Pose aufgerufen. Die Funktion `myBeginTracking()` würde vermutlich mit der Darstellung des Objekt-Ziehprozesses beginnen, indem der transformierte Hit-Test durchgeführt wird, um zu bestimmen, welches Objekt aufgenommen werden soll. `myBeginTracking()` gibt ein Objekt zurück, das das vom Benutzer begonnene Ziehen repräsentiert.
- Beim Empfang eines `squeeze`-Ereignisses wird die Funktion `myDropObject()` mit dem Zielobjekt und der aktuellen Zielstrahl-Pose-Transformation als Eingaben aufgerufen. Dies platziert das Objekt in seiner neuen Position in der Welt und löst gegebenenfalls Effekte aus, wie z.B. das Planen einer Animation eines Spritzers, wenn es ins Wasser fällt usw.
- Das `squeezeend`-Ereignis führt dazu, dass eine Funktion `myStopTracking()` aufgerufen wird, die das gezogene Objekt und die finale Zielstrahl-Pose-Transformation verwendet.

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

Sie können auch einen Handler für diese Ereignisse einrichten, indem Sie die Ereignishandler-Eigenschaften des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts auf eine Funktion setzen, die das Ereignis behandelt:

```js
xrSession.onsqueezestart = onSqueezeEvent;
xrSession.onsqueeze = onSqueezeEvent;
xrSession.onsqueezeend = onSqueezeEvent;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
