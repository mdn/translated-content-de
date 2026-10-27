---
title: "XRSession: selectstart-Ereignis"
short-title: selectstart
slug: Web/API/XRSession/selectstart_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`selectstart`**-Ereignis von [WebXR](/de/docs/Web/API/WebXR_Device_API) wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn der Benutzer eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) mit einer ihrer Eingabequellen beginnt.

Das Ereignis [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("selectstart", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onselectstart = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Beschreibung

### Auslöser

Das Ereignis wird ausgelöst, wenn der Benutzer Trigger oder Tasten drückt, auf ein Touchpad tippt, einen Befehl spricht oder bei Verwendung eines Videotracking-Systems oder eines Handcontrollers mit Beschleunigungssensor eine erkennbare Geste ausführt.

### Anwendungsfälle

Die Ereignisse `selectstart` und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) zeigen an, wann Sie dem Benutzer möglicherweise signalisieren möchten, dass die primäre Aktion gerade ausgeführt wird. Dazu könnten Sie einen Controller mit der aktivierten Taste in einer anderen Farbe darstellen oder anzeigen, wie das anvisierte Objekt gegriffen und bewegt wird. Die Darstellung beginnt beim Eintreffen von `selectstart` und endet, wenn `selectend` empfangen wird.

Das Ereignis [`select`](/de/docs/Web/API/XRSession/select_event) teilt Ihrem Code mit, dass der Benutzer die gewünschte Aktion abgeschlossen hat. Das kann so einfach sein wie das Werfen eines Objekts oder das Betätigen des Abzugs einer Waffe in einem Spiel, aber auch ein komplexerer Vorgang wie das Ablegen eines gezogenen Objekts an einer neuen Position.

Wenn Ihre primäre Aktion lediglich das Betätigen eines Triggers ist und Sie nichts animieren müssen, während der Trigger gedrückt ist, können Sie die Ereignisse `selectstart` und `selectend` ignorieren und auf das Start-Ereignis reagieren.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Handler für die Auswahlereignisse `selectstart`, [`selectend`](/de/docs/Web/API/XRSession/selectend_event) und [`select`](/de/docs/Web/API/XRSession/select_event) einzurichten. Dieser Ausschnitt bildet den Kern eines Event-Handlers, mit dem Benutzer Objekte in der Szene greifen und bewegen können.

In diesem Fall verarbeitet eine einzige Funktion alle drei Ereignisse. So können sie sich Code teilen, der unabhängig vom empfangenen Ereignis gleich ist. Erst nach Abschluss dieser Aufgaben leitet die unten stehende Funktion `onSelectionEvent()` die Aktion an eine spezialisierte Funktion zur weiteren Verarbeitung weiter.

Nachdem geprüft wurde, ob das empfangene Ereignis ein `tracked-pointer`-Ereignis ist (die einzige hier verarbeitete Art), wird die Pose des Zielstrahls mithilfe von [`getPose()`](/de/docs/Web/API/XRFrame/getPose) ermittelt.

Wenn die Pose des Zielstrahls erfolgreich ermittelt wurde, verwendet der Code den Wert der Eigenschaft [`type`](/de/docs/Web/API/Event/type) von [`Event`](/de/docs/Web/API/Event), um die Steuerung an eine passende Funktion für das eingetroffene Ereignis weiterzugeben:

- Bei `selectstart`-Ereignissen wird eine Funktion `myBeginTracking()` mit der [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Zielstrahl-Pose aufgerufen. `myBeginTracking()` würde vermutlich die Darstellung des Ziehvorgangs beginnen und mithilfe der Transformation einen Hit-Test durchführen, um zu bestimmen, welches Objekt gegriffen werden soll. `myBeginTracking()` gibt ein Objekt zurück, das das Objekt repräsentiert, das der Benutzer zu ziehen begonnen hat.
- Beim Empfang eines `select`-Ereignisses wird die Funktion `myDropObject()` mit dem Zielobjekt und der aktuellen Transformation der Zielstrahl-Pose als Eingaben aufgerufen. Dadurch wird das Objekt an seiner neuen Position in der Welt platziert und es werden mögliche Effekte ausgelöst, etwa eine Spritzanimation, wenn es ins Wasser fällt.
- Das `selectend`-Ereignis führt dazu, dass eine Funktion `myStopTracking()` mit dem gezogenen Objekt und der Transformation der abschließenden Zielstrahl-Pose aufgerufen wird.

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

Sie können auch einen Handler für `selectend`-Ereignisse einrichten, indem Sie der Event-Handler-Eigenschaft `onselectend` des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts eine Funktion zuweisen, die das Ereignis verarbeitet. Beachten Sie jedoch, dass dies gegebenenfalls andere mit `onselectstart`, `onselect` und `onselectend` hinzugefügte Event-Listener ersetzt:

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
