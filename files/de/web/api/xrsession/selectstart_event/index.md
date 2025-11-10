---
title: "XRSession: selectstart-Ereignis"
short-title: selectstart
slug: Web/API/XRSession/selectstart_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das [WebXR](/de/docs/Web/API/WebXR_Device_API) **`selectstart`**-Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn der Benutzer eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) auf einer seiner Eingabequellen beginnt.

Das [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("selectstart", (event) => { })

onselectstart = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften aus der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über das Ereignisframe bereitstellt, während dem das Ereignis aufgetreten ist. Dieses Frame könnte in der Vergangenheit gerendert worden sein, anstatt ein aktuelles Frame zu sein. Da es sich um ein _Ereignis_-Frame, nicht um ein _Animations_-Frame handelt, können Sie nicht [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) darauf aufrufen; verwenden Sie stattdessen [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis generiert hat.

## Beschreibung

### Auslösen

Ausgelöst, wenn der Benutzer Auslöser oder Tasten drückt, ein Touchpad antippt, einen Befehl spricht oder eine erkennbare Geste ausführt, während er ein Video-Trackingsystem oder einen Handcontroller mit Beschleunigungssensor verwendet.

### Anwendungsfälle

Die `selectstart`- und [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignisse zeigen an, wann Sie dem Benutzer etwas anzeigen könnten, das verdeutlicht, dass die primäre Aktion ausgeführt wird. Dies könnte das Zeichnen eines Controllers mit der aktivierten Schaltfläche in einer neuen Farbe sein oder das angezeigte Objekt greifen und umherbewegen lassen, beginnend wenn `selectstart` ankommt und endend, wenn `selectend` empfangen wird.

Das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis teilt Ihrem Code mit, dass der Benutzer die Aktion abgeschlossen hat, die er ausführen wollte. Dies könnte so einfach sein, wie ein Objekt zu werfen oder einen Abzug im Spiel zu betätigen, oder so ausführlich wie das Platzieren eines gezogenen Objekts an einem neuen Ort.

Wenn Ihre primäre Aktion eine einfache Auslöseaktion ist und Sie nichts animieren müssen, während der Auslöser gedrückt ist, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das Startereignis reagieren.

## Beispiele

Im folgenden Beispiel wird [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwendet, um Handler für die Auswahlereignisse zu erstellen: `selectstart`, [`selectend`](/de/docs/Web/API/XRSession/selectend_event) und [`select`](/de/docs/Web/API/XRSession/select_event). Dieses Snippet ist der Kern eines Ereignishandlers, der es dem Benutzer erlaubt, Objekte in der Szene zu greifen und zu bewegen.

In diesem Fall wird eine einzelne Funktion verwendet, um alle drei Ereignisse zu verarbeiten, sodass sie bestimmten Code gemeinsam nutzen können, der unabhängig davon, welches der drei Ereignisse empfangen wird, gleich ist. Erst nachdem diese Aufgaben abgeschlossen sind, übergibt die `onSelectionEvent()`-Funktion die Aktion an eine spezialisierte Funktion, um Dinge zu bearbeiten.

Nachdem überprüft wurde, ob das empfangene Ereignis ein `tracked-pointer`-Ereignis ist (das einzige, das wir hier verarbeiten), wird die Zielstrahlposition mit [`getPose()`](/de/docs/Web/API/XRFrame/getPose) ermittelt.

Falls die Zielstrahlposition erfolgreich abgerufen wurde, verwendet der Code den Wert der [`type`](/de/docs/Web/API/Event/type)-Eigenschaft des [`Event`](/de/docs/Web/API/Event), um die Kontrolle zu einer geeigneten Funktion zu leiten, um das eingetroffene Ereignis zu verarbeiten:

- Für `selectstart`-Ereignisse wird eine `myBeginTracking()`-Funktion mit der [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Zielstrahlposition aufgerufen. Die `myBeginTracking()`-Funktion würde vermutlich mit der Präsentation des Objektschiebeprozesses beginnen, indem sie den Transformationsvorgang ausführt, um zu bestimmen, welches Objekt aufgenommen werden soll. `myBeginTracking()` gibt ein Objekt zurück, das das Objekt darstellt, das der Benutzer zu ziehen begonnen hat.
- Beim Empfang eines `select`-Ereignisses wird die `myDropObject()`-Funktion mit dem Zielobjekt und der aktuellen Zielstrahlpositionstransformation als Eingaben aufgerufen. Dies platziert das Objekt an seiner neuen Position in der Welt und löst alle Effekte aus, die auftreten könnten, wie das Planen einer Animation eines Spritzers, wenn es ins Wasser fällt usw.
- Das `selectend`-Ereignis führt zur Aufruf einer `myStopTracking()`-Funktion mit dem zu ziehenden Objekt und der endgültigen Zielstrahlpositions-Transformation.

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

Sie können auch einen Handler für `selectend`-Ereignisse einrichten, indem Sie die `onselectend`-Ereignishandlereigenschaft des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts auf eine Funktion setzen, die das Ereignis verarbeitet:

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
