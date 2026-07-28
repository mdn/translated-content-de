---
title: "XRSession: squeezeend-Ereignis"
short-title: squeezeend
slug: Web/API/XRSession/squeezeend_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`squeezeend`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine ihrer Eingabequellen ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) beendet oder wenn eine Eingabequelle, die gerade eine laufende primäre Aktion verarbeitet, getrennt wird, ohne die Aktion erfolgreich abzuschließen.

Zu den primären Squeeze-Aktionen gehören Dinge wie das Drücken von Auslösern oder Tasten durch die Benutzer, das Tippen auf ein Touchpad, das Aussprechen eines Befehls oder das Ausführen einer erkennbaren Geste bei der Verwendung eines Video-Trackingsystems oder eines Handcontrollers mit einem Beschleunigungsmesser.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("squeezeend", (event) => { })

onsqueezeend = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Beschreibung

### Auslöser

Wird ausgelöst, wenn Benutzer aufhören, den Controller zu drücken, eine Handbewegung machen, die das Greifen von etwas imitiert, oder einen Auslöser verwenden (drücken).

### Anwendungsfälle

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird gesendet, um anzuzeigen, dass der Benutzer eine Squeeze-Aktion begonnen hat.

Wenn die primäre Squeeze-Aktion erfolgreich endet, wird der Sitzung ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis gesendet.

Ein `squeezeend`-Ereignis wird gesendet, um anzuzeigen, dass die Squeeze-Aktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Squeeze-Aktion erfolgreich war oder nicht.

## Beispiele

Siehe das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event#examples)-Ereignis für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
