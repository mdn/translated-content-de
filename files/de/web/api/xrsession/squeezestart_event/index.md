---
title: "XRSession: squeezestart Ereignis"
short-title: squeezestart
slug: Web/API/XRSession/squeezestart_event
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das [WebXR](/de/docs/Web/API/WebXR_Device_API) Ereignis **`squeezestart`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn der Benutzer eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) auf einer der Eingabequellen beginnt.

Primäre Quetschaktionen sind Aktionen, die das Greifen oder Quetschen mit den Händen darstellen sollen und möglicherweise durch Trigger an Handcontrollern simuliert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("squeezestart", (event) => {});

onsqueezestart = (event) => {};
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame) Objekt, das die benötigten Informationen über das Ereignis-Frame bereitstellt, während dem das Ereignis aufgetreten ist. Dieses Frame könnte in der Vergangenheit gerendert worden sein, anstatt ein aktuelles Frame zu sein. Da dies ein _Ereignis_-Frame und kein _Animations_-Frame ist, können Sie [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) darauf nicht aufrufen; verwenden Sie stattdessen [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource) Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn Benutzer beginnen, den Controller zu drücken, eine Handgeste machen, die das Greifen von etwas nachahmt, oder einen Trigger verwenden (drücken).

### Anwendungsfälle

Das `squeezestart` Ereignis wird gesendet, um anzuzeigen, dass der Benutzer eine Quetschaktion begonnen hat.

Wenn die primäre Quetschaktion erfolgreich endet, wird eine [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) Nachricht an die Sitzung gesendet.

Ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) Ereignis wird gesendet, um anzuzeigen, dass die Quetschaktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Quetschaktion erfolgreich war oder nicht.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) um Handler für die Quetschereignisse zu etablieren: `squeezestart`, [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event), und [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event). Dieses Snippet bildet den Kern eines Ereignishandlers, der es dem Benutzer ermöglicht, Objekte in der Szene zu greifen und zu bewegen.

In diesem Fall wird eine einzige Funktion verwendet, um alle drei Ereignisse zu bearbeiten, sodass sie bestimmten Code teilen können, der unabhängig davon, welches der drei Ereignisse empfangen wird, gleich ist. Erst nachdem diese Aufgaben abgeschlossen sind, verteilt die `onSqueezeEvent()` Funktion unten die Aktion an eine spezialisierte Funktion, um die Dinge zu handhaben.

Nachdem überprüft wurde, dass das empfangene Ereignis ein `tracked-pointer` Ereignis ist (die einzige Art, die hier bearbeitet wird), wird die Pose des Zielstrahls mit [`getPose()`](/de/docs/Web/API/XRFrame/getPose) abgerufen.

Wenn die Zielstrahlpose erfolgreich abgerufen wurde, verwendet der Code den Wert der [`Event`](/de/docs/Web/API/Event) Eigenschaft [`type`](/de/docs/Web/API/Event/type), um die Steuerung an eine geeignete Funktion weiterzuleiten, um das eingetroffene Ereignis zu bearbeiten:

- Für `squeezestart` Ereignisse wird eine `myBeginTracking()` Funktion mit der [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Zielstrahlpose aufgerufen. Die `myBeginTracking()` Funktion würde vermutlich den Prozess des Objekt-Ziehens beginnen, indem sie die Transformation verwendet, um einen Treffer-Test durchzuführen und zu bestimmen, welches Objekt aufgenommen werden soll. `myBeginTracking()` gibt ein Objekt zurück, das das Objekt darstellt, das der Benutzer zu ziehen begonnen hat.
- Bei Empfang eines `squeeze` Ereignisses wird die `myDropObject()` Funktion mit dem Zielobjekt und der aktuellen Zielstrahlpose-Transformation als Eingaben aufgerufen. Dadurch wird das Objekt in seine neue Position in der Welt gesetzt und alle Effekte ausgelöst, die möglicherweise auftreten könnten, wie beispielsweise das Planen einer Animation von einem Spritzer, wenn es ins Wasser fällt, usw.
- Das `squeezeend` Ereignis führt dazu, dass eine `myStopTracking()` Funktion mit dem gezogenen Objekt und der endgültigen Transformation der Zielstrahlpose aufgerufen wird.

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

Sie können auch einen Handler für diese Ereignisse einrichten, indem Sie die Eigenschaft des Ereignishandlers des [`XRSession`](/de/docs/Web/API/XRSession) Objekts auf eine Funktion setzen, die das Ereignis bearbeitet:

```js
xrSession.onsqueezestart = onSqueezeEvent;
xrSession.onsqueeze = onSqueezeEvent;
xrSession.onsqueezeend = onSqueezeEvent;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
