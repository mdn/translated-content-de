---
title: "XRSession: selectend Ereignis"
short-title: selectend
slug: Web/API/XRSession/selectend_event
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`selectend`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine ihrer Eingabequellen ihre [Hauptaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) beendet oder wenn eine Eingabequelle, die gerade eine fortlaufende Hauptaktion bearbeitet, ohne erfolgreichen Abschluss der Aktion getrennt wird.

Das [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("selectend", (event) => {});

onselectend = (event) => {};
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, in dem das Ereignis aufgetreten ist. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein, anstatt ein aktueller Rahmen zu sein. Da dies ein _Ereignis_-Rahmen und kein _Animations_-Rahmen ist, können Sie die [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) darauf nicht aufrufen; verwenden Sie stattdessen [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis generiert hat.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn der Benutzer aufhört, Abzüge oder Tasten zu drücken, ein Touchpad tippt, einen Befehl spricht oder eine erkennbare Geste ausführt, wenn ein Videotracking-System oder ein Handcontroller mit einem Beschleunigungsmesser verwendet wird.

### Anwendungsfälle

Die Ereignisse `selectend` und [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) geben an, wann Sie dem Benutzer anzeigen sollten, dass die Hauptaktion ausgeführt wird. Dies könnte das Zeichnen eines Controllers mit dem aktivierten Knopf in einer neuen Farbe sein oder das Anzeigen des zielgerichteten Objekts, das gegriffen und herumbewegt wird, beginnend, wenn `selectstart` eintrifft, und endend, wenn `selectend` empfangen wird.

Das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis ist das Ereignis, das Ihrem Code mitteilt, dass der Benutzer die Aktion, die er ausführen möchte, abgeschlossen hat. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Drücken des Abzugs einer Waffe in einem Spiel oder so umfangreich, wie ein gezogenes Objekt an einem neuen Ort zu platzieren.

Wenn Ihre Hauptaktion eine einfache Abzugsaktion ist und Sie nichts animieren müssen, während der Abzug betätigt wird, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das Startevent reagieren.

## Beispiele

Siehe das [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event#examples) Ereignis für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`select`](/de/docs/Web/API/XRSession/select_event) und [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event)
