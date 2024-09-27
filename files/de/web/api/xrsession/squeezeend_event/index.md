---
title: "XRSession: squeezeend Ereignis"
short-title: squeezeend
slug: Web/API/XRSession/squeezeend_event
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`squeezeend`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine ihrer Eingabequellen ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) beendet oder wenn eine Eingabequelle, die gerade dabei ist, eine laufende primäre Aktion zu bearbeiten, getrennt wird, ohne die Aktion erfolgreich abzuschließen.

Primäre Squeeze-Aktionen umfassen Dinge wie das Drücken von Triggern oder Knöpfen durch Benutzer, das Tippen auf ein Touchpad, das Sprechen eines Befehls oder das Ausführen einer erkennbaren Geste bei der Verwendung eines Video-Tracking-Systems oder eines Handcontrollers mit Beschleunigungsmesser.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("squeezeend", (event) => {});

onsqueezeend = (event) => {};
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die notwendigen Informationen über den Ereignisrahmen liefert, während dessen das Ereignis aufgetreten ist. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein, anstatt ein aktueller Rahmen zu sein. Da dies ein _Ereignis_-Rahmen und kein _Animations_-Rahmen ist, können Sie nicht [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) darauf aufrufen; verwenden Sie stattdessen [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslösen

Ausgelöst, wenn Benutzer aufhören, den Controller zu drücken, eine Handgeste ausführen, die das Greifen von etwas imitiert, oder einen Trigger verwenden (drücken).

### Anwendungsfälle

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) Ereignis wird gesendet, um anzuzeigen, dass der Benutzer eine Squeeze-Aktion begonnen hat.

Wenn die primäre Squeeze-Aktion erfolgreich endet, wird die Sitzung mit einem [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) Ereignis gesendet.

Ein `squeezeend` Ereignis wird gesendet, um anzuzeigen, dass die Squeeze-Aktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Squeeze-Aktion erfolgreich war oder nicht.

## Beispiele

Siehe das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event#examples) Ereignis für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
