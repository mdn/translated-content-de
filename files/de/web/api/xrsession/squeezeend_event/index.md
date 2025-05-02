---
title: "XRSession: squeezeend Event"
short-title: squeezeend
slug: Web/API/XRSession/squeezeend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`squeezeend`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine ihrer Eingabequellen ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) beendet oder wenn eine Eingabequelle, die gerade mit dem Bearbeiten einer laufenden primären Aktion beschäftigt ist, getrennt wird, ohne die Aktion erfolgreich abzuschließen.

Primäre Quetschaktionen umfassen Dinge wie das Drücken von Auslösern oder Tasten, das Tippen auf ein Touchpad, das Sprechen eines Befehls oder das Ausführen einer erkennbaren Geste bei der Verwendung eines Videoverfolgungssystems oder eines Handcontrollers mit Beschleunigungssensor.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("squeezeend", (event) => { })

onsqueezeend = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch die Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, währenddessen das Ereignis auftrat. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein und nicht der aktuelle Rahmen sein. Da dies ein _Ereignis_-Rahmen und kein _Animations_-Rahmen ist, können Sie [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) nicht darauf aufrufen; stattdessen verwenden Sie [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn Benutzer aufhören, den Controller zu drücken, eine Handbewegung ausführen, die das Greifen von etwas imitiert, oder einen Auslöser verwenden (drücken).

### Anwendungsfälle

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird gesendet, um anzuzeigen, dass der Benutzer eine Quetschaktion begonnen hat.

Wenn die primäre Quetschaktion erfolgreich endet, erhält die Sitzung ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis.

Ein `squeezeend`-Ereignis wird gesendet, um anzuzeigen, dass die Quetschaktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Quetschaktion erfolgreich war oder nicht.

## Beispiele

Siehe das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event#examples)-Ereignis für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
