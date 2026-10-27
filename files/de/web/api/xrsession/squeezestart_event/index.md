---
title: "XRSession: squeezestart-Ereignis"
short-title: squeezestart
slug: Web/API/XRSession/squeezestart_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das [WebXR](/de/docs/Web/API/WebXR_Device_API)-Ereignis **`squeezestart`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn der Benutzer an einer ihrer Eingabequellen eine [primäre Squeeze-Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) beginnt.

Primäre Squeeze-Aktionen sollen das Greifen oder Zusammendrücken mit den Händen darstellen. Sie können auch durch Auslöser an Handcontrollern simuliert werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("squeezestart", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle eine Funktion zuweisen:

```js-nolint
onsqueezestart = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Beschreibung

### Auslöser

Das Ereignis wird ausgelöst, wenn Benutzer beginnen, den Controller zusammenzudrücken, mit einer Handgeste das Greifen eines Gegenstands nachahmen oder einen Auslöser betätigen.

### Anwendungsfälle

Das Ereignis `squeezestart` zeigt an, dass der Benutzer eine Squeeze-Aktion begonnen hat.

Wenn die primäre Squeeze-Aktion erfolgreich endet, wird ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis an die Sitzung gesendet.

Ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis zeigt an, dass die Squeeze-Aktion nicht mehr andauert. Es wird unabhängig davon gesendet, ob die Aktion erfolgreich war.

## Beispiele

Im folgenden Beispiel werden mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Handler für die Squeeze-Ereignisse `squeezestart`, [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) und [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) eingerichtet. Dieser Ausschnitt bildet den Kern eines Event-Handlers, mit dem Benutzer Objekte in der Szene greifen und bewegen können.

Hier verarbeitet eine einzige Funktion alle drei Ereignisse. Dadurch können sie Code gemeinsam nutzen, der unabhängig vom empfangenen Ereignis gleich ist. Erst nach diesen gemeinsamen Aufgaben leitet die unten stehende Funktion `onSqueezeEvent()` die Aktion an eine spezialisierte Funktion weiter.

Nachdem geprüft wurde, ob das empfangene Ereignis ein `tracked-pointer`-Ereignis ist – der einzige hier verarbeitete Typ –, wird die Pose des Zielstrahls mit [`getPose()`](/de/docs/Web/API/XRFrame/getPose) abgerufen.

Wenn die Pose des Zielstrahls erfolgreich abgerufen wurde, verwendet der Code den Wert der [`Event`](/de/docs/Web/API/Event)-Eigenschaft [`type`](/de/docs/Web/API/Event/type), um die Verarbeitung an eine passende Funktion für das empfangene Ereignis weiterzuleiten:

- Bei `squeezestart`-Ereignissen wird `myBeginTracking()` mit der [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Zielstrahl-Pose aufgerufen. `myBeginTracking()` würde vermutlich die Darstellung des Ziehvorgangs beginnen und anhand der Transformation mit einem Treffertest ermitteln, welches Objekt aufgenommen werden soll. `myBeginTracking()` gibt ein Objekt zurück, das das vom Benutzer gezogene Objekt repräsentiert.
- Beim Empfang eines `squeeze`-Ereignisses wird `myDropObject()` mit dem Zielobjekt und der aktuellen Transformation der Zielstrahl-Pose aufgerufen. Die Funktion platziert das Objekt an seiner neuen Position in der Welt und löst gegebenenfalls weitere Effekte aus, etwa eine Animation für aufspritzendes Wasser, wenn das Objekt ins Wasser fällt.
- Das `squeezeend`-Ereignis führt dazu, dass `myStopTracking()` mit dem gezogenen Objekt und der Transformation der abschließenden Zielstrahl-Pose aufgerufen wird.

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

Sie können einen Handler für diese Ereignisse auch einrichten, indem Sie den Event-Handler-Eigenschaften des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts eine Funktion zuweisen, die das Ereignis verarbeitet. Beachten Sie jedoch, dass dadurch gegebenenfalls vorhandene Event-Listener ersetzt werden, die über `onsqueezestart`, `onsqueeze` und `onsqueezeend` hinzugefügt wurden:

```js
xrSession.onsqueezestart = onSqueezeEvent;
xrSession.onsqueeze = onSqueezeEvent;
xrSession.onsqueezeend = onSqueezeEvent;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
