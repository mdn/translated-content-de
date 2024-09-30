---
title: "XRSession: select Ereignis"
short-title: select
slug: Web/API/XRSession/select_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR **`select`** Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine der Eingabequellen der Session eine [Primäraktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) abgeschlossen hat.

Das [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("select", (event) => {});

onselect = (event) => {};
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgelisteten Eigenschaften sind auch die Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame) Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, während dem das Ereignis auftrat. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein, anstatt ein aktueller Rahmen zu sein. Da dies ein _Ereignis_-Rahmen und kein _Animations_-Rahmen ist, kann [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) nicht darauf aufgerufen werden; stattdessen verwenden Sie [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource) Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslösung

Ausgelöst, wenn ein Benutzer Trigger oder Tasten drückt, ein Touchpad berührt, einen Befehl spricht oder eine erkennbare Geste ausführt, wenn er ein Video-Tracking-System oder einen Handheld-Controller mit einem Beschleunigungsmesser verwendet.

### Anwendungsfälle

Die [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) Ereignisse geben an, wann Sie dem Benutzer anzeigen möchten, dass die Primäraktion ausgeführt wird. Dies könnte das Zeichnen eines Controllers mit der aktivierten Taste in einer neuen Farbe sein oder das Zeigen des Zielobjekts, das gegriffen und bewegt wird, beginnend wenn `selectstart` eintrifft und endend, wenn `selectend` empfangen wird.

Das `select` Ereignis teilt Ihrem Code mit, dass der Benutzer eine Aktion abgeschlossen hat. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Drücken des Abzugs einer Waffe in einem Spiel oder so komplex wie das Platzieren eines gezogenen Objekts an einem neuen Ort.

Wenn Ihre Primäraktion eine einfache Triggeraktion ist und Sie nichts animieren müssen, während der Trigger betätigt ist, können Sie die `selectstart` und `selectend` Ereignisse ignorieren und auf das Start-Ereignis reagieren.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Handler für das `select` Ereignis einzurichten. Der Handler ruft die Pose ab, die den Zielstrahl für `tracked-pointer` Eingaben darstellt, und sendet die Transformation der Pose an eine Funktion namens `myHandleSelectWithRay()`.

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

Sie können auch einen Handler für `select` Ereignisse einrichten, indem Sie die `onselect` Ereignis-Handler-Eigenschaft des [`XRSession`](/de/docs/Web/API/XRSession) Objekts auf eine Funktion setzen, die das Ereignis verarbeitet:

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
