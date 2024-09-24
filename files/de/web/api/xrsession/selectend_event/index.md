---
title: "XRSession: selectend Ereignis"
short-title: selectend
slug: Web/API/XRSession/selectend_event
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`selectend`** wird an eine {{domxref("XRSession")}} gesendet, wenn eine ihrer Eingabequellen ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) beendet oder wenn eine Eingabequelle, die sich mitten in einer laufenden primären Aktion befindet, getrennt wird, ohne die Aktion erfolgreich abzuschließen.

Das Ereignis {{domxref("Element.beforexrselect_event", "beforexrselect")}} wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js
addEventListener("selectend", (event) => {});

onselectend = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRInputSourceEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("XRInputSourceEvent.frame", "frame")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRFrame")}}-Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, während dessen das Ereignis auftrat. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein und nicht ein aktueller Rahmen sein. Da dies ein _Ereignis_rahmen ist, kein _Animations_rahmen, können Sie nicht die Methode {{domxref("XRFrame")}} {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} darauf aufrufen; stattdessen verwenden Sie {{domxref("XRFrame.getPose", "getPose()")}}.
- {{domxref("XRInputSourceEvent.inputSource", "inputSource")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRInputSource")}}-Objekt, das angibt, welche Eingabequelle das Eingabeereignis generiert hat.

## Beschreibung

### Auslösung

Wird ausgelöst, wenn der Benutzer aufhört, Auslöser oder Tasten zu drücken, ein Touchpad berührt, einen Befehl spricht oder eine erkennbare Geste ausführt, wenn ein Video-Tracking-System oder ein Handcontroller mit einem Beschleunigungssensor verwendet wird.

### Anwendungsfälle

Die `selectend`- und {{domxref("XRSession.selectstart_event", "selectstart")}}-Ereignisse geben Ihnen an, wann Sie dem Benutzer etwas anzeigen sollten, dass eine primäre Aktion im Gange ist. Dies könnte die Darstellung eines Controllers mit der aktivierten Taste in einer neuen Farbe sein oder das Zielobjekt, das ergriffen und bewegt wird, sobald `selectstart` eintrifft und endet, wenn `selectend` empfangen wird.

Das {{domxref("XRSession.select_event", "select")}}-Ereignis ist das Ereignis, das Ihrem Code mitteilt, dass der Benutzer die Aktion abgeschlossen hat, die er abschließen wollte. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Abziehen des Abzugs einer Waffe in einem Spiel, oder so aufwendig wie das Platzieren eines gezogenen Objekts an einem neuen Ort.

Wenn Ihre primäre Aktion eine einfache Triggeraktion ist und Sie nichts animieren müssen, während der Trigger aktiviert ist, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das Startereignis reagieren.

## Beispiele

Siehe das [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event#examples) Ereignis für Beispielcode.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("XRSession.select_event", "select")}} und {{domxref("XRSession.selectstart_event", "selectstart")}}
- {{domxref("Element.beforexrselect_event", "beforexrselect")}}
