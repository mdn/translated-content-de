---
title: "XRSession: selectend-Ereignis"
short-title: selectend
slug: Web/API/XRSession/selectend_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`selectend`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine ihrer Eingabequellen ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) beendet oder wenn eine Eingabequelle, die gerade eine laufende primäre Aktion ausführt, getrennt wird, ohne die Aktion erfolgreich abzuschließen.

Das [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event)-Ereignis wird vor diesem Ereignis ausgelöst und kann verhindern, dass dieses Ereignis hervorgerufen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("selectend", (event) => { })

onselectend = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("XRInputSourceEvent")}}

## Beschreibung

### Auslöser

Wird ausgelöst, wenn der Benutzer aufhört, Auslöser oder Tasten zu drücken, ein Touchpad antippt, einen Sprachbefehl gibt oder eine erkennbare Geste ausführt, wenn er ein Video-Tracking-System oder einen Handcontroller mit einem Beschleunigungsmesser verwendet.

### Anwendungsfälle

Die Ereignisse `selectend` und [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) informieren Sie darüber, wann Sie dem Benutzer möglicherweise etwas anzeigen möchten, das darauf hinweist, dass die primäre Aktion stattfindet. Dies könnte sein, indem ein Controller mit der aktivierten Taste in einer neuen Farbe dargestellt wird oder das Zielobjekt, das ergriffen und bewegt wird, angezeigt wird. Dies beginnt, wenn `selectstart` eintrifft und endet, wenn `selectend` empfangen wird.

Das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis ist das Ereignis, das Ihrem Code mitteilt, dass der Benutzer die Aktion abgeschlossen hat, die er ausführen möchte. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Betätigen des Abzugs einer Waffe in einem Spiel oder so aufwändig wie das Platzieren eines gezogenen Objekts an einem neuen Standort.

Wenn Ihre primäre Aktion eine einfache Auslöseraktion ist und Sie nichts animieren müssen, während der Auslöser aktiviert ist, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das Start-Ereignis reagieren.

## Beispiele

Siehe das [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event#examples)-Ereignis für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`select`](/de/docs/Web/API/XRSession/select_event) und [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event)
