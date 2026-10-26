---
title: "XRSession: selectend-Ereignis"
short-title: selectend
slug: Web/API/XRSession/selectend_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`selectend`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine ihrer Eingabequellen ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) beendet oder wenn eine Eingabequelle während einer laufenden primären Aktion getrennt wird, ohne die Aktion erfolgreich abzuschließen.

Das Ereignis [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) wird vor diesem Ereignis ausgelöst und kann dessen Auslösung verhindern.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("selectend", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onselectend = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Beschreibung

### Auslöser

Wird ausgelöst, wenn der Benutzer aufhört, Trigger oder Tasten zu drücken, auf ein Touchpad zu tippen oder einen Befehl zu sprechen, oder wenn er bei Verwendung eines Video-Tracking-Systems oder eines Handcontrollers mit Beschleunigungssensor eine erkennbare Geste beendet.

### Anwendungsfälle

Die Ereignisse `selectend` und [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) zeigen Ihnen an, wann es sinnvoll sein könnte, dem Benutzer darzustellen, dass die primäre Aktion gerade ausgeführt wird. Sie könnten beispielsweise einen Controller mit aktivierter Taste in einer anderen Farbe darstellen oder anzeigen, wie das anvisierte Objekt gegriffen und bewegt wird. Die Darstellung beginnt beim Eintreffen von `selectstart` und endet, wenn `selectend` empfangen wird.

Das Ereignis [`select`](/de/docs/Web/API/XRSession/select_event) teilt Ihrem Code mit, dass der Benutzer die beabsichtigte Aktion abgeschlossen hat. Das kann so einfach sein wie das Werfen eines Objekts oder das Betätigen des Abzugs einer Waffe in einem Spiel, aber auch so komplex wie das Platzieren eines gezogenen Objekts an einer neuen Position.

Wenn Ihre primäre Aktion lediglich durch einen Trigger ausgelöst wird und Sie nichts animieren müssen, während der Trigger betätigt wird, können Sie die Ereignisse `selectstart` und `selectend` ignorieren und auf das Startereignis reagieren.

## Beispiele

Beispielcode finden Sie beim Ereignis [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`select`](/de/docs/Web/API/XRSession/select_event) und [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event)
