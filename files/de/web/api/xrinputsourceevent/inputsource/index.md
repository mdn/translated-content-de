---
title: "XRInputSourceEvent: inputSource-Eigenschaft"
short-title: inputSource
slug: Web/API/XRInputSourceEvent/inputSource
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte **`inputSource`**-Eigenschaft der {{domxref("XRInputSourceEvent")}}-Schnittstelle gibt die {{domxref("XRInputSource")}} an, die das Eingabeereignis generiert hat. Diese Information ermöglicht es Ihnen, das Ereignis entsprechend den Besonderheiten des verwendeten Benutzereingabegeräts zu verarbeiten.

## Wert

Ein {{domxref("XRInputSource")}}-Objekt, das die Quelle des Benutzereingabeereignisses identifiziert. Dieses Ereignis weist auf eine Aktion hin, die der Benutzer mithilfe eines WebXR-Eingabesteuergeräts unternommen hat, wie z.B. eines Handcontrollers, Bewegungssteuerungsgeräts oder anderer Eingabevorrichtungen.

## Beispiele

Der folgende Codeausschnitt zeigt einen Handler für das {{domxref("XRSession.select_event", "select")}}-Ereignis, der speziell nach Ereignissen sucht, die auf `gaze`-Eingabegeräten auftreten. Der Gerätetyp wird durch das Überprüfen der {{domxref("XRInputSource")}} in `inputSource` und deren Eigenschaft {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} identifiziert.

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
