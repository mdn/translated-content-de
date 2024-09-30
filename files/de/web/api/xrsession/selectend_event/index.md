---
title: "XRSession: selectend Ereignis"
short-title: selectend
slug: Web/API/XRSession/selectend_event
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`selectend`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine ihrer Eingabequellen ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) beendet oder wenn eine Eingabequelle, die gerade eine laufende primäre Aktion bearbeitet, getrennt wird, ohne die Aktion erfolgreich abzuschließen.

Das [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("selectend", (event) => {});

onselectend = (event) => {};
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften der Elternschnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, während dessen das Ereignis auftrat. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein, anstatt ein aktueller Rahmen zu sein. Da dies ein _Ereignisrahmen_ und kein _Animationsrahmen_ ist, können Sie die [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) nicht darauf aufrufen; stattdessen verwenden Sie [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis generiert hat.

## Beschreibung

### Auslöser

Ausgelöst, wenn der Benutzer aufhört, Abzüge oder Knöpfe zu drücken, ein Touchpad zu berühren, einen Befehl zu sprechen oder eine erkennbare Geste auszuführen, wenn er ein Videotracking-System oder einen Handcontroller mit einem Beschleunigungsmesser verwendet.

### Anwendungsfälle

Die Ereignisse `selectend` und [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) zeigen an, wann Sie dem Benutzer anzeigen möchten, dass die primäre Aktion ausgeführt wird. Dies könnte das Zeichnen eines Controllers mit aktiviertem Button in neuer Farbe sein oder das Darstellen des zielgerichteten Objekts, das gegriffen und bewegt wird. Dies beginnt, wenn `selectstart` eintrifft und endet, wenn `selectend` empfangen wird.

Das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis ist das Ereignis, das Ihrem Code mitteilt, dass der Benutzer die gewünschte Aktion abgeschlossen hat. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Drücken des Abzugs einer Waffe in einem Spiel oder so komplex wie das Platzieren eines gezogenen Objekts an einem neuen Ort.

Wenn Ihre primäre Aktion eine einfache Auslöseraktion ist und Sie nichts animieren müssen, während der Auslöser betätigt wird, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das Start-Ereignis reagieren.

## Beispiele

Siehe das Ereignis [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`select`](/de/docs/Web/API/XRSession/select_event) und [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event)
