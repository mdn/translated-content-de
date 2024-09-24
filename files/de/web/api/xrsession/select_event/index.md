---
title: "XRSession: select-Ereignis"
short-title: select
slug: Web/API/XRSession/select_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-**`select`**-Ereignis wird an eine {{domxref("XRSession")}} gesendet, wenn eine der Eingabequellen der Sitzung eine [Primäraktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) abgeschlossen hat.

Das {{domxref("Element.beforexrselect_event", "beforexrselect")}}-Ereignis wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("select", (event) => {});

onselect = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRInputSourceEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind die Eigenschaften der Elternschnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("XRInputSourceEvent.frame", "frame")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRFrame")}}-Objekt, das die benötigten Informationen über das Ereignis-Frame bereitstellt, währenddessen das Ereignis stattfand. Dieses Frame könnte in der Vergangenheit gerendert worden sein, anstatt ein aktuelles Frame zu sein. Da dies ein _Ereignis-_Frame und kein _Animations-_Frame ist, können Sie darauf nicht {{domxref("XRFrame.getViewerPose", "XRFrame.getViewerPose()")}} aufrufen; stattdessen verwenden Sie {{domxref("XRFrame.getPose", "getPose()")}}.
- {{domxref("XRInputSourceEvent.inputSource", "inputSource")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRInputSource")}}-Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn ein Benutzer die Auslöser oder Tasten drückt, ein Touchpad berührt, einen Befehl spricht oder eine erkennbare Geste ausführt, wenn er ein Video-Tracking-System oder einen Handcontroller mit Beschleunigungsmesser verwendet.

### Anwendungsfälle

Die {{domxref("XRSession.selectstart_event", "selectstart")}}- und {{domxref("XRSession.selectend_event", "selectend")}}-Ereignisse informieren Sie darüber, wann Sie dem Benutzer etwas anzeigen möchten, das darauf hinweist, dass die Primäraktion ausgeführt wird. Dies könnte das Zeichnen eines Controllers mit der aktivierten Taste in einer neuen Farbe sein oder das Anzeigen des erfassten Objekts, das ergriffen und bewegt wird, beginnend, wenn `selectstart` eintrifft, und endend, wenn `selectend` empfangen wird.

Das `select`-Ereignis teilt Ihrem Code mit, dass der Benutzer eine Aktion abgeschlossen hat. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Drücken des Abzugs einer Pistole in einem Spiel oder so kompliziert wie das Platzieren eines gezogenen Objekts an einem neuen Ort.

Wenn Ihre Primäraktion eine einfache Auslöseaktion ist und Sie nichts animieren müssen, während der Auslöser betätigt ist, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das Startereignis reagieren.

## Beispiele

Das folgende Beispiel verwendet {{domxref("EventTarget.addEventListener", "addEventListener()")}}, um einen Handler für das `select`-Ereignis einzurichten. Der Handler ruft die Pose ab, die den Zielstrahl für `tracked-pointer`-Eingaben darstellt, und sendet die Transformation der Pose an eine Funktion namens `myHandleSelectWithRay()`.

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

Sie können auch einen Handler für `select`-Ereignisse einrichten, indem Sie die `onselect`-Ereignis-Handler-Eigenschaft des {{domxref("XRSession")}}-Objekts auf eine Funktion setzen, die das Ereignis behandelt:

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

- {{domxref("XRSession.selectstart_event", "selectstart")}} und {{domxref("XRSession.selectend_event", "selectend")}}
- {{domxref("Element.beforexrselect_event", "beforexrselect")}}
