---
title: "XRSession: squeezestart-Ereignis"
short-title: squeezestart
slug: Web/API/XRSession/squeezestart_event
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das [WebXR](/de/docs/Web/API/WebXR_Device_API)-Ereignis **`squeezestart`** wird an eine {{domxref("XRSession")}} gesendet, wenn der Benutzer eine [primäre Druckaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) an einer ihrer Eingabequellen beginnt.

Primäre Druckaktionen sind Aktionen, die dazu gedacht sind, das Greifen oder Drücken mit den Händen darzustellen, und können bei Handcontrollern mit Abzügen simuliert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("squeezestart", (event) => {});

onsqueezestart = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRInputSourceEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften der Elternschnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("XRInputSourceEvent.frame", "frame")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRFrame")}}-Objekt, das die benötigten Informationen über das Ereignis-Frame bereitstellt, währenddessen das Ereignis aufgetreten ist. Dieses Frame könnte in der Vergangenheit gerendert worden sein und nicht aktuell sein. Da es sich um ein _Ereignis_-Frame und nicht um ein _Animation_-Frame handelt, können Sie {{domxref("XRFrame.getViewerPose", "XRFrame.getViewerPose()")}} darauf nicht aufrufen; stattdessen verwenden Sie {{domxref("XRFrame.getPose", "getPose()")}}.
- {{domxref("XRInputSourceEvent.inputSource", "inputSource")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRInputSource")}}-Objekt, das angibt, welche Eingabequelle das Eingabe-Ereignis generiert hat.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn Benutzer den Controller drücken, eine Handgeste machen, die das Greifen von etwas nachahmt, oder einen Abzug betätigen (drücken).

### Anwendungsfälle

Das `squeezestart`-Ereignis wird gesendet, um anzuzeigen, dass der Benutzer eine Druckaktion begonnen hat.

Endet die primäre Druckaktion erfolgreich, wird an die Sitzung ein {{domxref("XRSession.squeeze_event", "squeeze")}}-Ereignis gesendet.

Ein {{domxref("XRSession.squeezeend_event", "squeezeend")}}-Ereignis wird gesendet, um anzuzeigen, dass die Druckaktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Druckaktion erfolgreich war oder nicht.

## Beispiele

Das folgende Beispiel verwendet {{domxref("EventTarget.addEventListener", "addEventListener()")}}, um Handler für die Druckereignisse `squeezestart`, {{domxref("XRSession.squeezeend_event", "squeezeend")}} und {{domxref("XRSession.squeeze_event", "squeeze")}} festzulegen. Dieses Snippet ist der Kern eines Ereignishandlers, der es dem Benutzer ermöglicht, Objekte in der Szene zu greifen und sie zu bewegen.

In diesem Fall wird eine einzelne Funktion verwendet, um alle drei Ereignisse zu behandeln und ihnen zu ermöglichen, gemeinsamen Code zu teilen, unabhängig davon, welches der drei Ereignisse empfangen wird. Erst nachdem diese Aufgaben abgeschlossen sind, übergibt die Funktion `onSqueezeEvent()` im Folgenden die Aktion an eine spezialisierte Funktion zur Bearbeitung weiter.

Nachdem überprüft wurde, dass das empfangene Ereignis ein `tracked-pointer`-Ereignis ist (den einzigen Typ, den wir hier behandeln), wird die Pose des Zielstrahls mit {{domxref("XRFrame.getPose", "getPose()")}} abgerufen.

Wenn die Zielstrahlpose erfolgreich abgerufen wurde, verwendet der Code anschließend den Wert der {{domxref("Event")}}-Eigenschaft {{domxref("Event.type", "type")}}, um die Steuerung an eine geeignete Funktion zur Bearbeitung des eingetroffenen Ereignisses weiterzuleiten:

- Für `squeezestart`-Ereignisse wird eine `myBeginTracking()`-Funktion mit der {{domxref("XRRigidTransform.matrix", "matrix")}} der Zielstrahlpose aufgerufen. Die `myBeginTracking()`-Funktion würde vermutlich den Beginn des Objektziehvorgangs präsentieren, wobei die Transformation verwendet wird, um einen Treffer-Test durchzuführen und zu bestimmen, welches Objekt aufgenommen werden soll. `myBeginTracking()` gibt ein Objekt zurück, das das Objekt darstellt, das der Benutzer zu ziehen begonnen hat.
- Beim Empfang eines `squeeze`-Ereignisses wird die `myDropObject()`-Funktion mit dem Zielobjekt und der aktuellen Transformation der Zielstrahlpose als Eingaben aufgerufen. Dies bringt das Objekt in seine neue Position in der Welt und löst alle möglichen Effekte aus, wie z.B. das Planen einer Animation eines Spritzers, wenn es ins Wasser fällt, usw.
- Das `squeezeend`-Ereignis führt dazu, dass eine `myStopTracking()`-Funktion mit dem gezogenen Objekt und der letzten Transformation der Zielstrahlpose aufgerufen wird.

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

Sie können für diese Ereignisse auch einen Handler einrichten, indem Sie die Ereignishandler-Eigenschaften des {{domxref("XRSession")}}-Objekts auf eine Funktion setzen, die das Ereignis verarbeitet:

```js
xrSession.onsqueezestart = onSqueezeEvent;
xrSession.onsqueeze = onSqueezeEvent;
xrSession.onsqueezeend = onSqueezeEvent;
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
