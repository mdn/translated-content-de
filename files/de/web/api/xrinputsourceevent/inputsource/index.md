---
title: "XRInputSourceEvent: inputSource-Eigenschaft"
short-title: inputSource
slug: Web/API/XRInputSourceEvent/inputSource
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte **`inputSource`**-Eigenschaft des [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent)-Interfaces gibt die [`XRInputSource`](/de/docs/Web/API/XRInputSource) an, die das Eingabeereignis erzeugt hat. Diese Information ermöglicht es, das Ereignis angemessen in Bezug auf die Einzelheiten des benutzten Eingabegeräts zu behandeln.

## Wert

Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das die Quelle des Benutzereingabereignisses identifiziert. Dieses Ereignis zeigt eine Aktion an, die der Benutzer mit einem WebXR-Eingabesteuergerät, wie einem Hand-Controller, Bewegungsmelder oder einem anderen Eingabegerät, durchgeführt hat.

## Beispiele

Das folgende Beispiel zeigt einen Handler für das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis, welcher speziell nach Ereignissen sucht, die auf `gaze`-Eingabegeräten geschehen. Der Gerätetyp wird identifiziert, indem man die [`XRInputSource`](/de/docs/Web/API/XRInputSource) in `inputSource` und deren [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode)-Eigenschaft betrachtet.

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
