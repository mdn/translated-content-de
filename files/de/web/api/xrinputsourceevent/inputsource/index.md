---
title: "XRInputSourceEvent: inputSource-Eigenschaft"
short-title: inputSource
slug: Web/API/XRInputSourceEvent/inputSource
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte **`inputSource`**-Eigenschaft der [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent)-Schnittstelle gibt die [`XRInputSource`](/de/docs/Web/API/XRInputSource) an, die das Eingabegerät generiert hat. Diese Information ermöglicht es Ihnen, das Ereignis entsprechend den Besonderheiten des verwendeten Benutzereingabegeräts zu verarbeiten.

## Wert

Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das die Quelle des Benutzereingabeereignisses identifiziert. Dieses Ereignis zeigt eine Aktion an, die der Benutzer mit einem WebXR-Eingabegerät, wie einem Handcontroller, Bewegungsgerät oder einem anderen Eingabegerät, ausgeführt hat.

## Beispiele

Der untenstehende Codeausschnitt zeigt einen Handler für das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis, der speziell auf Ereignisse achtet, die auf `gaze`-Eingabegeräten geschehen. Der Gerätetyp wird durch die Betrachtung des [`XRInputSource`](/de/docs/Web/API/XRInputSource) in `inputSource` und dessen [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode)-Eigenschaft ermittelt.

```js
xrSession.onselect = (event) => {
  let source = event.inputSource;

  if (source.targetRayMode === "gaze") {
    /* handle selection using a gaze input */
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
