---
title: "XRSession: selectend-Ereignis"
short-title: selectend
slug: Web/API/XRSession/selectend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`selectend`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine ihrer Eingabequellen ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) beendet oder wenn eine Eingabequelle, die gerade eine laufende primäre Aktion bearbeitet, getrennt wird, ohne die Aktion erfolgreich abzuschließen.

Das [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis aufgerufen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("selectend", (event) => { })

onselectend = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch die Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die erforderlichen Informationen über den Ereignisrahmen bereitstellt, während dem das Ereignis aufgetreten ist. Dieser Rahmen kann in der Vergangenheit gerendert worden sein und muss kein aktueller Rahmen sein. Da es sich um einen _Ereignis_-Rahmen handelt und nicht um einen _Animations_-Rahmen, können Sie die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) von [`XRFrame`](/de/docs/Web/API/XRFrame) nicht darauf aufrufen; verwenden Sie stattdessen [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslöser

Ausgelöst, wenn der Benutzer aufhört, Trigger oder Tasten zu drücken, ein Touchpad zu berühren, einen Sprachbefehl zu geben oder eine erkennbare Geste auszuführen, wenn er ein Videotracking-System oder einen Handcontroller mit Beschleunigungsmesser verwendet.

### Anwendungsfälle

Die `selectend`- und [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignisse informieren Sie, wann Sie dem Benutzer etwas anzeigen könnten, das darauf hinweist, dass die primäre Aktion ausgeführt wird. Dies könnte das Zeichnen eines Controllers mit der aktiven Taste in einer neuen Farbe sein oder das Anzeigen des ausgewählten Objekts, das ergriffen und bewegt wird, beginnend mit dem Eintreffen von `selectstart` und endend, wenn `selectend` empfangen wird.

Das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis ist das Ereignis, das Ihrem Code mitteilt, dass der Benutzer die gewünschte Aktion abgeschlossen hat. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Abdrücken des Auslösers einer Waffe in einem Spiel, oder so umfangreich wie das Platzieren eines gezogenen Objekts an einer neuen Position.

Wenn Ihre primäre Aktion eine einfache Auslöseaktion ist und Sie nicht animieren müssen, während der Auslöser betätigt ist, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das Startevent reagieren.

## Beispiele

Siehe das [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event#examples)-Ereignis für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`select`](/de/docs/Web/API/XRSession/select_event) und [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event)
