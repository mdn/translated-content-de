---
title: "XRSession: selectstart-Ereignis"
short-title: selectstart
slug: Web/API/XRSession/selectstart_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das [WebXR](/de/docs/Web/API/WebXR_Device_API) **`selectstart`**-Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn der Benutzer eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) auf einer ihrer Eingabequellen beginnt.

Das [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("selectstart", (event) => {});

onselectstart = (event) => {};
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der Elternschnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über den Ereignisrahmen bietet, während dem das Ereignis aufgetreten ist. Dieser Rahmen kann in der Vergangenheit gerendert worden sein, anstatt ein aktueller Rahmen zu sein. Da dies ein _Ereignisrahmen_ und kein _Animationsrahmen_ ist, kann [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) darauf nicht aufgerufen werden; stattdessen verwenden Sie [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis generiert hat.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn der Benutzer Trigger oder Tasten drückt, ein Touchpad berührt, einen Befehl spricht oder eine erkennbare Geste ausführt, während er ein Videotracking-System oder einen Handcontroller mit Beschleunigungsmesser verwendet.

### Anwendungsfälle

Die `selectstart`- und [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignisse teilen Ihnen mit, wann Sie dem Benutzer möglicherweise etwas anzeigen möchten, das darauf hinweist, dass die primäre Aktion ausgeführt wird. Dies könnte das Zeichnen eines Controllers mit dem aktivierten Knopf in einer neuen Farbe sein oder das angezielte Objekt, das gegriffen und bewegt wird, angezeigt werden, beginnend wenn `selectstart` eintrifft und endend wenn `selectend` empfangen wird.

Das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis teilt Ihrem Code mit, dass der Benutzer die Aktion abgeschlossen hat, die er abschließen möchte. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Drücken des Abzugs einer Waffe in einem Spiel, oder so umfangreich wie das Platzieren eines gezogenen Objekts an einem neuen Ort.

Wenn Ihre primäre Aktion eine einfache Triggeraktion ist und Sie nichts animieren müssen, während der Trigger aktiviert ist, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das Startereignis reagieren.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Handler für die Auswahlereignisse einzurichten: `selectstart`, [`selectend`](/de/docs/Web/API/XRSession/selectend_event) und [`select`](/de/docs/Web/API/XRSession/select_event). Dieses Snippet ist der Kern eines Ereignishandlers, der es dem Benutzer ermöglicht, Objekte in der Szene zu greifen und zu bewegen.

In diesem Fall wird eine einzige Funktion verwendet, um alle drei Ereignisse zu behandeln, wodurch sie einen bestimmten Code gemeinsam nutzen können, der unabhängig davon gleich ist, welches der drei Ereignisse empfangen wird. Erst nachdem diese Aufgaben abgeschlossen sind, leitet die unten stehende `onSelectionEvent()`-Funktion die Aktion an eine spezialisierte Funktion zur Behandlung weiter.

Nachdem überprüft wurde, dass das empfangene Ereignis ein `tracked-pointer`-Ereignis ist (die einzige Art, die wir hier behandeln), wird die Pose des Zielstrahls mit [`getPose()`](/de/docs/Web/API/XRFrame/getPose) abgerufen.

Falls die Pose des Zielstrahls erfolgreich abgerufen wurde, verwendet der Code dann den Wert der [`Event`](/de/docs/Web/API/Event)-Eigenschaft [`type`](/de/docs/Web/API/Event/type) zur Steuerung der Weiterleitung an eine geeignete Funktion, um das eingetroffene Ereignis zu behandeln:

- Für `selectstart`-Ereignisse wird eine `myBeginTracking()`-Funktion mit der [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Zielstrahl-Pose aufgerufen. Die Funktion `myBeginTracking()` würde vermutlich mit der Präsentation des Objektziehprozesses beginnen, wobei die Transformation verwendet wird, um einen Treffertest durchzuführen, der bestimmt, welches Objekt aufgenommen werden soll. `myBeginTracking()` gibt ein Objekt zurück, das das Objekt darstellt, das der Benutzer zu ziehen begonnen hat.
- Beim Empfang eines `select`-Ereignisses wird die `myDropObject()`-Funktion mit dem Zielobjekt und der aktuellen Transformationspose des Zielstrahls als Eingaben aufgerufen. Dies platziert das Objekt an seine neue Position in der Welt und löst alle möglicherweise auftretenden Effekte aus, wie das Planen einer Animation eines Spritzers, falls es ins Wasser fällt, etc.
- Das `selectend`-Ereignis führt dazu, dass eine `myStopTracking()`-Funktion mit dem gezogenen Objekt und der finalen Transformationspose des Zielstrahls aufgerufen wird.

```js
xrSession.addEventListener("selectstart", onSelectionEvent);
xrSession.addEventListener("select", onSelectionEvent);
xrSession.addEventListener("selectend", onSelectionEvent);

function onSelectionEvent(event) {
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
    case "selectstart":
      targetObj = myBeginTracking(targetRayPose.matrix);
      break;
    case "select":
      myDropObject(targetObj, targetRayPose.matrix);
      break;
    case "selectend":
      myStopTracking(targetObj, targetRayPose.matrix);
      break;
  }
}
```

Sie können auch einen Handler für `selectend`-Ereignisse einrichten, indem Sie die `onselectend`-Ereignishandler-Eigenschaft des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts auf eine Funktion setzen, die das Ereignis behandelt:

```js
xrSession.onselectstart = onSelectionEvent;
xrSession.onselect = onSelectionEvent;
xrSession.onselectend = onSelectionEvent;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`select`](/de/docs/Web/API/XRSession/select_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event)
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event)
