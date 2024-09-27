---
title: "XRSession: selectstart Ereignis"
short-title: selectstart
slug: Web/API/XRSession/selectstart_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das [WebXR](/de/docs/Web/API/WebXR_Device_API) **`selectstart`** Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn der Benutzer mit einer ihrer Eingabequellen eine [Hauptaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) beginnt.

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

_Zusätzlich zu den unten aufgelisteten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame) Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, während dessen das Ereignis auftrat. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein, anstatt ein aktueller Rahmen zu sein. Da dies ein _Ereignis_-Rahmen ist und kein _Animations_-Rahmen, können Sie darauf nicht [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) aufrufen; verwenden Sie stattdessen [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource) Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn der Benutzer Abzüge oder Tasten drückt, ein Touchpad antippt, einen Befehl ausspricht oder eine erkennbare Geste ausführt, wenn er ein Videosystem zur Nachverfolgung oder einen tragbaren Controller mit einem Beschleunigungsmesser verwendet.

### Anwendungsfälle

Die Ereignisse `selectstart` und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) weisen darauf hin, wann Sie dem Benutzer etwas anzeigen sollten, das darauf hinweist, dass die Hauptaktion im Gange ist. Dies könnte darin bestehen, einen Controller mit der aktivierten Taste in einer neuen Farbe zu zeichnen, oder das anvisierte Objekt zu zeigen, das ergriffen und bewegt wird, beginnend wenn `selectstart` eintrifft und endend, wenn `selectend` empfangen wird.

Das [`select`](/de/docs/Web/API/XRSession/select_event) Ereignis teilt Ihrem Code mit, dass der Benutzer die Aktion abgeschlossen hat, die er ausführen wollte. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Ziehen des Abzugs einer Waffe in einem Spiel, oder so umfassend wie das Platzieren eines gezogenen Objekts an einem neuen Ort.

Wenn Ihre Hauptaktion eine einfache Auslöseraktion ist und Sie nichts animieren müssen, während der Auslöser aktiviert ist, können Sie die `selectstart` und `selectend` Ereignisse ignorieren und auf das Startevent reagieren.

## Beispiele

Im folgenden Beispiel wird [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwendet, um Handler für die Auswahlereignisse festzulegen: `selectstart`, [`selectend`](/de/docs/Web/API/XRSession/selectend_event) und [`select`](/de/docs/Web/API/XRSession/select_event). Dieses Snippet bildet den Kern eines Ereignishandlers, der es dem Benutzer ermöglicht, Objekte in der Szene zu greifen und zu bewegen.

In diesem Fall wird eine einzelne Funktion verwendet, um alle drei Ereignisse zu behandeln, wodurch sie bestimmten gemeinsamen Code nutzen können, unabhängig davon, welches der drei Ereignisse empfangen wird. Erst nach Abschluss dieser Aufgaben delegiert die Funktion `onSelectionEvent()` die Aktion an eine spezialisierte Funktion zur Bearbeitung.

Nach der Überprüfung, ob das empfangene Ereignis ein `tracked-pointer` Ereignis ist (die einzige Art, die hier behandelt wird), wird die Zielstrahlenposition mithilfe von [`getPose()`](/de/docs/Web/API/XRFrame/getPose) abgerufen.

Wenn die Zielstrahlenposition erfolgreich abgerufen wurde, verwendet der Code anschließend den Wert der [`type`](/de/docs/Web/API/Event/type) Eigenschaft des [`Event`](/de/docs/Web/API/Event) Objekts, um die Kontrolle an eine geeignete Funktion zur Behandlung des eingetroffenen Ereignisses zu übergeben:

- Für `selectstart` Ereignisse wird eine `myBeginTracking()` Funktion mit der [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Zielstrahlenposition aufgerufen. Die `myBeginTracking()` Funktion würde vermutlich mit der Präsentation des Objekt-Ziehungsprozesses beginnen, indem sie die Transformation verwendet, um einen Hit-Test durchzuführen und zu bestimmen, welches Objekt aufgehoben werden soll. `myBeginTracking()` gibt ein Objekt zurück, das das Objekt darstellt, das der Benutzer zu ziehen begonnen hat.
- Beim Empfang eines `select` Ereignisses wird die Funktion `myDropObject()` mit dem Zielobjekt und der aktuellen Zielstrahlenpositionstransformation als Eingaben aufgerufen. Dieses platziert das Objekt an seiner neuen Position in der Welt und löst alle Effekte aus, die auftreten könnten, wie z.B. das Planen einer Animation eines Spritzers, wenn es ins Wasser fallen gelassen wird, usw.
- Das `selectend` Ereignis führt zur Aufrufe einer `myStopTracking()` Funktion mit dem objekt, das gezogen wird, und der abschließenden Zielstrahlenpositionstransformation.

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

Sie können auch einen Handler für `selectend` Ereignisse einrichten, indem Sie die `onselectend` Ereignishandlereigenschaft des [`XRSession`](/de/docs/Web/API/XRSession) Objekts auf eine Funktion setzen, die das Ereignis behandelt:

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
