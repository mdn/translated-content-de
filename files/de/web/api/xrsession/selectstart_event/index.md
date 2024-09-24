---
title: "XRSession: selectstart-Ereignis"
short-title: selectstart
slug: Web/API/XRSession/selectstart_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das [WebXR](/de/docs/Web/API/WebXR_Device_API) **`selectstart`**-Ereignis wird an eine {{domxref("XRSession")}} gesendet, wenn der Benutzer eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) auf einer seiner Eingabequellen beginnt.

Das {{domxref("Element.beforexrselect_event", "beforexrselect")}}-Ereignis wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("selectstart", (event) => {});

onselectstart = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRInputSourceEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("XRInputSourceEvent.frame", "frame")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRFrame")}}-Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, in dem das Ereignis aufgetreten ist. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein, anstatt ein aktueller Rahmen zu sein. Da dies ein _Ereignis_rahmen und kein _Animations_rahmen ist, können Sie nicht {{domxref("XRFrame.getViewerPose", "XRFrame.getViewerPose()")}} darauf aufrufen; verwenden Sie stattdessen {{domxref("XRFrame.getPose", "getPose()")}}.
- {{domxref("XRInputSourceEvent.inputSource", "inputSource")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRInputSource")}}-Objekt, das angibt, welche Eingabequelle das Eingabeereignis generiert hat.

## Beschreibung

### Auslöser

Ausgelöst, wenn der Benutzer Auslöser oder Tasten drückt, ein Touchpad berührt, einen Befehl spricht oder eine erkennbare Geste mit einem Videotracking-System oder einem Handcontroller mit Beschleunigungsmesser ausführt.

### Anwendungsfälle

Die Ereignisse `selectstart` und {{domxref("XRSession.selectend_event", "selectend")}} informieren Sie, wann Sie dem Benutzer etwas anzeigen sollten, das darauf hinweist, dass die primäre Aktion gerade stattfindet. Dies könnte das Zeichnen eines Controllers mit der aktivierten Taste in einer neuen Farbe sein oder das Anzeigen des zu erfassenden und bewegenden Objekts, beginnend mit `selectstart` und endend mit `selectend`.

Das {{domxref("XRSession.select_event", "select")}}-Ereignis informiert Ihren Code darüber, dass der Benutzer die gewünschte Aktion abgeschlossen hat. Dies kann so einfach sein wie das Werfen eines Objekts oder das Betätigen des Abzugs einer Waffe in einem Spiel, oder so komplex wie das Platzieren eines gezogenen Objekts an einem neuen Ort.

Wenn Ihre primäre Aktion eine einfache Auslöseaktion ist und Sie nichts animieren müssen, während der Auslöser betätigt ist, können Sie die Ereignisse `selectstart` und `selectend` ignorieren und auf das Startereignis reagieren.

## Beispiele

Das folgende Beispiel verwendet {{domxref("EventTarget.addEventListener", "addEventListener()")}}, um Handler für die Auswahlereignisse zu etablieren: `selectstart`, {{domxref("XRSession.selectend_event", "selectend")}}, und {{domxref("XRSession.select_event", "select")}}. Dieses Snippet ist der Kern eines Ereignishandlers, der es dem Benutzer ermöglicht, Objekte in der Szene zu greifen und zu bewegen.

In diesem Fall wird eine einzige Funktion verwendet, um alle drei Ereignisse zu behandeln, sodass sie bestimmten Code gemeinsam nutzen, der unabhängig davon gleich ist, welches der drei Ereignisse empfangen wird. Erst nach Abschluss dieser Aufgaben gibt die Funktion `onSelectionEvent()` die Aktion an eine spezialisierte Funktion weiter, um die Dinge zu bearbeiten.

Nach der Überprüfung, ob das empfangene Ereignis ein `tracked-pointer`-Ereignis ist (die einzige Art, die wir hier behandeln), wird die Pose des Zielstrahls mit {{domxref("XRFrame.getPose", "getPose()")}} abgerufen.

Wenn die Zielstrahlpose erfolgreich abgerufen wurde, verwendet der Code den Wert der {{domxref("Event")}}-Eigenschaft {{domxref("Event.type", "type")}}, um die Kontrolle an eine geeignete Funktion weiterzuleiten, die das eingetroffene Ereignis behandelt:

- Für `selectstart`-Ereignisse wird eine `myBeginTracking()`-Funktion mit der {{domxref("XRRigidTransform.matrix", "matrix")}} der Zielstrahlpose aufgerufen. Die Funktion `myBeginTracking()` würde vermutlich die Präsentation des Objekt-Ziehprozesses starten, indem sie die Transformation verwendet, um einen Treffer-Test durchzuführen und zu bestimmen, welches Objekt aufgenommen werden soll. `myBeginTracking()` gibt ein Objekt zurück, das das Objekt darstellt, das der Benutzer begonnen hat zu ziehen.
- Bei Empfang eines `select`-Ereignisses wird die `myDropObject()`-Funktion mit dem Zielobjekt und der aktuellen Transformation der Zielstrahlpose als Eingaben aufgerufen. Dies platziert das Objekt an seiner neuen Position in der Welt und löst etwaige Effekte aus, wie das Planen einer Animation eines Spritzers, wenn es ins Wasser fällt, etc.
- Das `selectend`-Ereignis führt dazu, dass eine `myStopTracking()`-Funktion mit dem gezogenen Objekt und der finalen Transformation der Zielstrahlpose aufgerufen wird.

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

Sie können auch einen Handler für `selectend`-Ereignisse einrichten, indem Sie die `onselectend`-Ereignishandler-Eigenschaft des {{domxref("XRSession")}}-Objekts auf eine Funktion setzen, die das Ereignis behandelt:

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

- {{domxref("XRSession.select_event", "select")}} und {{domxref("XRSession.selectend_event", "selectend")}}
- {{domxref("Element.beforexrselect_event", "beforexrselect")}}
