---
title: "XRSession: squeezestart Ereignis"
short-title: squeezestart
slug: Web/API/XRSession/squeezestart_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das [WebXR](/de/docs/Web/API/WebXR_Device_API)-Ereignis **`squeezestart`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn der Benutzer eine [primäre Quetsch-Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) auf einer ihrer Eingabequellen beginnt.

Primäre Quetsch-Aktionen sind Aktionen, die greifen oder quetschen mit den Händen darstellen sollen, und können mit Triggern auf Handcontrollern simuliert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("squeezestart", (event) => { })

onsqueezestart = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, während dessen das Ereignis aufgetreten ist. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein, anstatt ein aktueller Rahmen zu sein. Da dies ein _Ereignis_-Rahmen ist, kein _Animations_-Rahmen, können Sie nicht [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) darauf aufrufen; stattdessen verwenden Sie [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das anzeigt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn Benutzer beginnen, den Controller zu drücken, eine Handbewegung machen, die das Ergreifen von etwas nachahmt, oder einen Abzug (Trigger) drücken.

### Anwendungsfälle

Das `squeezestart`-Ereignis wird gesendet, um anzuzeigen, dass der Benutzer eine Quetsch-Aktion begonnen hat.

Wenn die primäre Quetsch-Aktion erfolgreich endet, wird der Sitzung ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis gesendet.

Ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis wird gesendet, um anzuzeigen, dass die Quetsch-Aktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Quetsch-Aktion erfolgreich war oder nicht.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Handler für die Quetsch-Ereignisse: `squeezestart`, [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) und [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) einzurichten. Dieses Snippet ist der Kern eines Ereignishandlers, der es dem Benutzer ermöglicht, Objekte in der Szene zu greifen und zu bewegen.

In diesem Fall wird eine einzelne Funktion verwendet, um alle drei Ereignisse zu behandeln, sodass sie bestimmten Code teilen können, der unabhängig davon der gleiche ist, welches der drei Ereignisse empfangen wird. Erst nachdem diese Aufgaben abgeschlossen sind, verteilt die `onSqueezeEvent()`-Funktion unten die Aktion an eine spezialisierte Funktion, um Dinge zu handhaben.

Nachdem sichergestellt wurde, dass das empfangene Ereignis ein `tracked-pointer`-Ereignis ist (die einzige Art, die wir hier behandeln), wird die Zielstrahlpose mit [`getPose()`](/de/docs/Web/API/XRFrame/getPose) abgerufen.

Wenn die Zielstrahlpose erfolgreich abgerufen wurde, verwendet der Code den Wert der [`Event`](/de/docs/Web/API/Event)-Eigenschaft [`type`](/de/docs/Web/API/Event/type), um die Kontrolle an eine entsprechende Funktion zu übergeben, die das eingetroffene Ereignis behandelt:

- Bei `squeezestart`-Ereignissen wird eine `myBeginTracking()`-Funktion mit der [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Zielstrahlpose aufgerufen. Die `myBeginTracking()`-Funktion würde vermutlich den Beginn des Objekt-Zieh-Prozesses darstellen, indem sie den Transformations-Hit-Test durchführt, um zu bestimmen, welches Objekt aufgenommen werden soll. `myBeginTracking()` gibt ein Objekt zurück, das das Objekt darstellt, das der Benutzer zu ziehen begonnen hat.
- Beim Empfangen eines `squeeze`-Ereignisses wird die `myDropObject()`-Funktion mit dem Zielobjekt und der aktuellen Zielstrahl-Pose-Transformation als Eingaben aufgerufen. Dies platziert das Objekt in seiner neuen Position in der Welt und löst alle Effekte aus, die sich ergeben könnten, wie das Planen einer Animation eines Spritzens, wenn es ins Wasser fallen gelassen wird, etc.
- Das `squeezeend`-Ereignis führt dazu, dass eine `myStopTracking()`-Funktion mit dem gezogenen Objekt und der endgültigen Zielstrahl-Pose-Transformation aufgerufen wird.

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
