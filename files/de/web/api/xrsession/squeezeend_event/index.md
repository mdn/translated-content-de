---
title: "XRSession: squeezeend-Ereignis"
short-title: squeezeend
slug: Web/API/XRSession/squeezeend_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`squeezeend`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine ihrer Eingabequellen ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) beendet oder wenn eine Eingabequelle während der Verarbeitung einer laufenden primären Aktion getrennt wird, ohne die Aktion erfolgreich abzuschließen.

Zu den primären Squeeze-Aktionen gehören beispielsweise das Drücken von Auslösern oder Tasten, das Antippen eines Touchpads, das Sprechen eines Befehls oder das Ausführen einer erkennbaren Geste bei Verwendung eines Video-Tracking-Systems oder eines Handcontrollers mit Beschleunigungssensor.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("squeezeend", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onsqueezeend = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Beschreibung

### Auslöser

Wird ausgelöst, wenn Benutzer aufhören, den Controller zusammenzudrücken, eine Greifgeste auszuführen oder einen Auslöser zu betätigen.

### Anwendungsfälle

Das Ereignis [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) wird gesendet, um anzuzeigen, dass der Benutzer eine Squeeze-Aktion begonnen hat.

Wenn die primäre Squeeze-Aktion erfolgreich endet, wird ein Ereignis [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) an die Sitzung gesendet.

Ein `squeezeend`-Ereignis wird gesendet, um anzuzeigen, dass die Squeeze-Aktion nicht mehr ausgeführt wird. Es wird unabhängig davon gesendet, ob die Squeeze-Aktion erfolgreich war.

## Beispiele

Beispielcode finden Sie beim Ereignis [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
