---
title: "XRSession: select Event"
short-title: select
slug: Web/API/XRSession/select_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR **`select`**-Event wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine der Eingabequellen der Sitzung eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) abgeschlossen hat.

Das [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("select", (event) => { })

onselect = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Beschreibung

### Auslöser

Wird ausgelöst, wenn ein Benutzer Auslöser oder Tasten drückt, ein Touchpad antippt, einen Befehl ausspricht oder eine erkennbare Geste ausführt, während er ein Video-Trackingsystem oder einen Handcontroller mit einem Beschleunigungssensor verwendet.

### Anwendungsfälle

Die [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) Ereignisse zeigen an, wann Sie dem Benutzer etwas anzeigen möchten, das darauf hinweist, dass die primäre Aktion ausgeführt wird. Dies könnte das Zeichnen eines Controllers mit der aktivierten Taste in einer neuen Farbe sein oder das Zeigen des gegriffenen und umherbewegten Objekts, beginnend, wenn `selectstart` eintrifft und endend, wenn `selectend` empfangen wird.

Das `select`-Ereignis informiert Ihren Code darüber, dass der Benutzer eine Aktion abgeschlossen hat. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Betätigen des Abzugs einer Waffe in einem Spiel oder so komplex wie das Platzieren eines gezogenen Objekts an einem neuen Ort.

Wenn Ihre primäre Aktion eine einfache Triggeraktion ist und Sie während des Auslösens nichts animieren müssen, können Sie die `selectstart` und `selectend` Ereignisse ignorieren und beim Startereignis reagieren.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Handler für das `select` Ereignis einzurichten. Der Handler ruft die Pose ab, die den Zielstrahl für `tracked-pointer`-Eingaben darstellt, und sendet die Transformation der Pose an eine Funktion namens `myHandleSelectWithRay()`.

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

Sie können auch einen Handler für `select` Ereignisse einrichten, indem Sie die `onselect` Ereignishandler-Eigenschaft des [`XRSession`](/de/docs/Web/API/XRSession) Objekts auf eine Funktion setzen, die das Ereignis verarbeitet:

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
