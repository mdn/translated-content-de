---
title: "XRSession: squeezeend-Ereignis"
short-title: squeezeend
slug: Web/API/XRSession/squeezeend_event
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`squeezeend`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine ihrer Eingabequellen ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) beendet oder wenn eine Eingabequelle, die gerade eine laufende primäre Aktion behandelt, getrennt wird, ohne die Aktion erfolgreich abzuschließen.

Zu den primären Squeeze-Aktionen gehören Dinge wie das Drücken von Triggern oder Tasten durch Benutzer, das Antippen eines Touchpads, das Aussprechen eines Befehls oder das Ausführen einer erkennbaren Geste bei der Verwendung eines Video-Tracking-Systems oder eines Handcontrollers mit einem Beschleunigungsmesser.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("squeezeend", (event) => {});

onsqueezeend = (event) => {};
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über den Ereignisframe bereitstellt, während das Ereignis auftrat. Dieser Frame könnte in der Vergangenheit gerendert worden sein, anstatt ein aktueller Frame zu sein. Da dies ein _Ereignis_-Frame und kein _Animations_-Frame ist, können Sie [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) nicht darauf aufrufen; verwenden Sie stattdessen [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslöser

Ausgelöst, wenn Benutzer den Controller nicht mehr zusammendrücken, eine Handbewegung machen, die das Greifen von etwas imitiert, oder einen (drückenden) Trigger verwenden.

### Anwendungsfälle

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird gesendet, das anzeigt, dass der Benutzer eine Squeeze-Aktion begonnen hat.

Wenn die primäre Squeeze-Aktion erfolgreich beendet wird, wird der Sitzung ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis gesendet.

Ein `squeezeend`-Ereignis wird gesendet, um anzuzeigen, dass die Squeeze-Aktion nicht mehr im Gange ist. Dies wird unabhängig davon gesendet, ob die Squeeze-Aktion erfolgreich war oder nicht.

## Beispiele

Siehe das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event#examples)-Ereignis für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
