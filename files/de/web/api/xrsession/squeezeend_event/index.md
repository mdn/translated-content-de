---
title: "XRSession: squeezeend Ereignis"
short-title: squeezeend
slug: Web/API/XRSession/squeezeend_event
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`squeezeend`** wird an eine {{domxref("XRSession")}} gesendet, wenn eine ihrer Eingabequellen ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) beendet oder wenn eine Eingabequelle, die gerade eine laufende primäre Aktion ausführt, getrennt wird, ohne die Aktion erfolgreich abzuschließen.

Primäre Quetschaktionen umfassen unter anderem das Drücken von Auslösern oder Tasten durch Benutzer, das Tippen auf ein Touchpad, das Sprechen eines Befehls oder das Ausführen einer erkennbaren Geste bei der Verwendung eines Video-Tracking-Systems oder eines Handheld-Controllers mit einem Beschleunigungsmesser.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("squeezeend", (event) => {});

onsqueezeend = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRInputSourceEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgelisteten Eigenschaften sind die Eigenschaften der Elternschnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("XRInputSourceEvent.frame", "frame")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRFrame")}} Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, während dessen das Ereignis stattfand. Dieser Rahmen kann in der Vergangenheit gerendert worden sein, anstatt ein aktueller Rahmen zu sein. Da dies ein _Ereignis_rahmen und kein _Animations_rahmen ist, können Sie darauf nicht {{domxref("XRFrame.getViewerPose", "XRFrame.getViewerPose()")}} aufrufen; stattdessen verwenden Sie {{domxref("XRFrame.getPose", "getPose()")}}.
- {{domxref("XRInputSourceEvent.inputSource", "inputSource")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRInputSource")}} Objekt, das angibt, welche Eingabequelle das Eingabeereignis generiert hat.

## Beschreibung

### Trigger

Ausgelöst, wenn Benutzer aufhören, den Controller zu drücken, eine Handbewegung ausführen, die das Greifen von etwas nachahmt, oder einen Auslöser verwenden (drücken).

### Anwendungsfälle

Das {{domxref("XRSession.squeezestart_event", "squeezestart")}} Ereignis wird gesendet, um anzuzeigen, dass der Benutzer eine Quetschaktion begonnen hat.

Wenn die primäre Quetschaktion erfolgreich endet, wird die Sitzung mit einem {{domxref("XRSession.squeeze_event", "squeeze")}} Ereignis benachrichtigt.

Ein `squeezeend` Ereignis wird gesendet, um anzuzeigen, dass die Quetschaktion nicht mehr im Gange ist. Dies wird sowohl gesendet, wenn die Quetschaktion erfolgreich war als auch wenn nicht.

## Beispiele

Sehen Sie sich das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event#examples) Ereignis für Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
