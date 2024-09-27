---
title: "XRSession: select Ereignis"
short-title: select
slug: Web/API/XRSession/select_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR **`select`** Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine der Eingabequellen der Sitzung eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) abgeschlossen hat.

Das [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Eigenschaft für den Ereignis-Handler.

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Neben den nachstehend aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame) Objekt, das die notwendigen Informationen über den Ereignisrahmen bereitstellt, während dessen das Ereignis stattgefunden hat. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein, anstatt ein aktueller Rahmen zu sein. Da dies ein _Ereignis_-Rahmen und kein _Animations_-Rahmen ist, können Sie nicht [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) darauf aufrufen; verwenden Sie stattdessen [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource) Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslöser

Ausgelöst, wenn ein Benutzer Trigger oder Knöpfe drückt, ein Touchpad antippt, einen Befehl spricht oder eine erkennbare Geste bei Verwendung eines Video-Tracking-Systems oder eines Handcontrollers mit Beschleunigungssensor ausführt.

### Anwendungsfälle

Die Ereignisse [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) informieren Sie darüber, wann Sie dem Benutzer etwas anzeigen möchten, das darauf hinweist, dass die primäre Aktion ausgeführt wird. Dies könnte ein Controller sein, dessen aktivierte Taste in einer neuen Farbe dargestellt wird, oder das angezielte Objekt, das ergriffen und bewegt wird, beginnend, wenn `selectstart` eintrifft, und stoppend, wenn `selectend` empfangen wird.

Das `select` Ereignis informiert Ihren Code darüber, dass der Benutzer eine Aktion abgeschlossen hat. Dies kann so einfach sein wie das Werfen eines Objekts oder das Betätigen des Abzugs eines Gewehrs in einem Spiel, oder so umfangreich wie das Platzieren eines gezogenen Objekts an einer neuen Position.

Wenn Ihre primäre Aktion eine einfache Trigger-Aktion ist und Sie nichts animieren müssen, während der Trigger gedrückt ist, können Sie die `selectstart` und `selectend` Ereignisse ignorieren und auf das Start-Ereignis reagieren.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Handler für das `select` Ereignis einzurichten. Der Handler holt die Pose, die den Zielstrahl für `tracked-pointer` Eingaben darstellt, und sendet die Transformationsdaten der Pose an eine Funktion namens `myHandleSelectWithRay()`.

Sie können auch einen Handler für `select` Ereignisse einrichten, indem Sie die `onselect` Ereignis-Handler-Eigenschaft des [`XRSession`](/de/docs/Web/API/XRSession) Objekts auf eine Funktion setzen, die das Ereignis verarbeitet:

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event)
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event)
