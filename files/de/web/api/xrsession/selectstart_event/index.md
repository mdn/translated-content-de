---
title: "XRSession: selectstart-Ereignis"
short-title: selectstart
slug: Web/API/XRSession/selectstart_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das [WebXR](/de/docs/Web/API/WebXR_Device_API) **`selectstart`**-Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn der Benutzer eine [Primäraktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) auf einer ihrer Eingabequellen beginnt.

Das [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("selectstart", (event) => { })

onselectstart = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Beschreibung

### Auslöser

Ausgelöst, wenn der Benutzer Abzüge oder Tasten drückt, ein Touchpad berührt, einen Befehl spricht oder eine erkennbare Geste ausführt, wenn er ein Videotracking-System oder einen Handcontroller mit einem Beschleunigungsmesser verwendet.

### Anwendungsfälle

Die Ereignisse `selectstart` und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) zeigen an, wann Sie dem Benutzer eventuell etwas anzeigen möchten, das darauf hinweist, dass die Primäraktion gerade ausgeführt wird. Dies könnte das Zeichnen eines Controllers mit dem aktivierten Knopf in einer neuen Farbe sein, oder das Anzeigen des anvisierten Objekts, das gegriffen und bewegt wird, und zwar ab dem Zeitpunkt, an dem `selectstart` eintrifft, bis `selectend` empfangen wird.

Das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis teilt Ihrem Code mit, dass der Benutzer die Aktion abgeschlossen hat, die er abschließen wollte. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Betätigen des Abzugs einer Waffe in einem Spiel oder so komplex, wie ein gezogenes Objekt an einer neuen Stelle abzulegen.

Wenn Ihre Primäraktion eine einfache Abzugsaktion ist und Sie nichts animieren müssen, während der Abzug betätigt wird, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und nur auf das Startereignis reagieren.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Handler für die Auswahlevents `selectstart`, [`selectend`](/de/docs/Web/API/XRSession/selectend_event) und [`select`](/de/docs/Web/API/XRSession/select_event) zu etablieren. Dieses Snippet ist der Kern eines Ereignishandlers, der es dem Benutzer ermöglicht, Objekte in der Szene zu greifen und zu bewegen.

In diesem Fall wird eine einzelne Funktion verwendet, um alle drei Ereignisse zu verarbeiten, was es ihnen ermöglicht, bestimmten Code zu teilen, der unabhängig davon gleich ist, welches der drei Ereignisse empfangen wird. Erst nachdem diese Aufgaben erledigt sind, wird die `onSelectionEvent()`-Funktion unten aufgerufen, um die Aktion an eine spezialisierte Funktion zu übergeben, die die Dinge behandelt.

Nachdem sichergestellt wurde, dass das empfangene Ereignis ein `tracked-pointer`-Ereignis ist (die einzige Art, die wir hier behandeln), wird die Pose des Zielstrahls mit [`getPose()`](/de/docs/Web/API/XRFrame/getPose) abgerufen.

Wenn die Zielstrahlpose erfolgreich abgerufen wurde, verwendet der Code den Wert der [`Event`](/de/docs/Web/API/Event)-Eigenschaft [`type`](/de/docs/Web/API/Event/type), um die Kontrolle an eine geeignete Funktion zur Ereignisverarbeitung weiterzuleiten:

- Für `selectstart`-Ereignisse wird eine `myBeginTracking()`-Funktion mit der [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Zielstrahlpose aufgerufen. Die `myBeginTracking()`-Funktion würde vermutlich die Präsentation des Objektziehprozesses starten, indem sie den Transform verwendet, um einen Hit-Test durchzuführen und zu bestimmen, welches Objekt aufgenommen werden soll. `myBeginTracking()` gibt ein Objekt zurück, das das Objekt darstellt, das der Benutzer zu ziehen begonnen hat.
- Beim Empfang eines `select`-Ereignisses wird die `myDropObject()`-Funktion mit dem Zielobjekt und dem aktuellen Zielstrahlpose-Transform als Eingaben aufgerufen. Dies platziert das Objekt in seiner neuen Position in der Welt und löst alle möglichen Effekte aus, wie z.B. das Planen einer Animation eines Spritzers, wenn es ins Wasser fällt, usw.
- Das `selectend`-Ereignis führt zu einem Aufruf der `myStopTracking()`-Funktion mit dem Objekt, das gezogen wird, und dem Endzielstrahlpose-Transform.

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

Sie können auch einen Handler für `selectend`-Ereignisse einrichten, indem Sie die `onselectend`-Ereignisbehandlungseigenschaft des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts auf eine Funktion setzen, die das Ereignis behandelt:

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
