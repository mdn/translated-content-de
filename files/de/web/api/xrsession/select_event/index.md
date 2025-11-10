---
title: "XRSession: select-Ereignis"
short-title: select
slug: Web/API/XRSession/select_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-**`select`**-Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine der Eingabequellen der Sitzung eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) abgeschlossen hat.

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

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über das Ereignis-Frame bereitstellt, während dem das Ereignis auftrat. Dieses Frame könnte in der Vergangenheit gerendert worden sein, statt ein aktuelles zu sein. Da es sich um ein _Ereignis_-Frame und nicht um ein _Animations_-Frame handelt, können Sie [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) nicht darauf aufrufen; stattdessen verwenden Sie [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis generiert hat.

## Beschreibung

### Auslöser

Ausgelöst, wenn ein Benutzer Trigger oder Tasten drückt, ein Touchpad antippt, einen Befehl spricht oder eine erkennbare Geste ausführt, wenn er ein Video-Tracking-System oder einen Handcontroller mit einem Beschleunigungsmesser verwendet.

### Anwendungsfälle

Die [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)- und [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignisse informieren Sie darüber, wann Sie dem Benutzer möglicherweise etwas anzeigen möchten, das angibt, dass die primäre Aktion ausgeführt wird. Dies könnte das Zeichnen eines Controllers mit dem aktivierten Knopf in einer neuen Farbe sein oder das Zeigen des erfassten und bewegten Objekts, beginnend wenn `selectstart` eintrifft und endend wenn `selectend` empfangen wird.

Das `select`-Ereignis teilt Ihrem Code mit, dass der Benutzer eine Aktion abgeschlossen hat. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Drücken des Abzugs einer Waffe in einem Spiel, oder so aufwendig wie das Platzieren eines gezogenen Objekts an einem neuen Ort.

Wenn Ihre primäre Aktion eine einfache Triggeraktion ist und Sie nichts animieren müssen, während der Trigger aktiviert ist, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das Startereignis reagieren.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Handler für das `select`-Ereignis einzurichten. Der Handler holt die Pose, die den Zielstrahl für `tracked-pointer`-Eingaben darstellt, und sendet die Transformation der Pose an eine Funktion namens `myHandleSelectWithRay()`.

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

Sie können auch einen Handler für `select`-Ereignisse einrichten, indem Sie die `onselect`-Ereignishandlereigenschaft des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts auf eine Funktion setzen, die das Ereignis behandelt:

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
