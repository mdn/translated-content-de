---
title: "XRSession: select-Ereignis"
short-title: select
slug: Web/API/XRSession/select_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`select`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine der Eingabequellen der Sitzung eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) abgeschlossen hat.

Das Ereignis [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("select", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces eine Funktion zuweisen:

```js-nolint
onselect = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Beschreibung

### Auslöser

Das Ereignis wird ausgelöst, wenn ein Benutzer einen Auslöser oder eine Taste drückt, auf ein Touchpad tippt, einen Befehl spricht oder bei Verwendung eines Video-Tracking-Systems oder eines Handcontrollers mit Beschleunigungssensor eine erkennbare Geste ausführt.

### Anwendungsfälle

Die Ereignisse [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) zeigen an, wann es sinnvoll sein könnte, dem Benutzer darzustellen, dass die primäre Aktion gerade stattfindet. Beispielsweise könnten Sie einen Controller mit der aktivierten Taste in einer anderen Farbe zeichnen oder anzeigen, wie das anvisierte Objekt gegriffen und bewegt wird. Die Darstellung beginnt, wenn `selectstart` eintrifft, und endet, wenn `selectend` empfangen wird.

Das Ereignis `select` teilt Ihrem Code mit, dass der Benutzer eine Aktion abgeschlossen hat. Das kann etwas so Einfaches sein wie das Werfen eines Objekts oder das Betätigen des Abzugs einer Waffe in einem Spiel – oder etwas Aufwendigeres wie das Platzieren eines gezogenen Objekts an einer neuen Position.

Wenn Ihre primäre Aktion lediglich durch einen Auslöser aktiviert wird und Sie während dessen Betätigung nichts animieren müssen, können Sie die Ereignisse `selectstart` und `selectend` ignorieren und auf das Startereignis reagieren.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Handler für das Ereignis `select` einzurichten. Der Handler ruft die Pose ab, die den Zielstrahl für Eingaben vom Typ `tracked-pointer` darstellt, und übergibt die Transformation der Pose an eine Funktion namens `myHandleSelectWithRay()`.

```js
xrSession.addEventListener("select", (event) => {
  if (event.inputSource.targetRayMode === "tracked-pointer") {
    let targetRayPose = event.frame.getPose(
      event.inputSource.targetRaySpace,
      myRefSpace,
    );
    if (targetRayPose) {
      myHandleSelectWithRay(targetRayPose.transform);
    }
  }
});
```

Sie können einen Handler für `select`-Ereignisse auch einrichten, indem Sie der Event-Handler-Eigenschaft `onselect` des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts eine Funktion zuweisen, die das Ereignis verarbeitet. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onselect` hinzugefügte Event-Listener ersetzt werden:

```js
xrSession.onselect = (event) => {
  if (event.inputSource.targetRayMode === "tracked-pointer") {
    let targetRayPose = event.frame.getPose(
      event.inputSource.targetRaySpace,
      myRefSpace,
    );
    if (targetRayPose) {
      myHandleSelectWithRay(targetRayPose.transform);
    }
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event)
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event)
