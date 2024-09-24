---
title: "XRInputSource: hand-Eigenschaft"
short-title: hand
slug: Web/API/XRInputSource/hand
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte **`hand`**-Eigenschaft der {{domxref("XRInputSource")}}-Schnittstelle ist ein {{domxref("XRHand")}}-Objekt, das Zugriff auf ein Hand-Tracking-Gerät bietet.

## Wert

Ein {{domxref("XRHand")}}-Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn die {{domxref("XRSession")}} nicht mit dem Feature-Deskriptor `hand-tracking` [angefordert](/de/docs/Web/API/XRSystem/requestSession) wurde.

## Beispiele

```js
navigator.xr
  .requestSession({ optionalFeatures: ["hand-tracking"] })
  .then(/* … */);

function renderFrame(session, frame) {
  // …

  for (const inputSource of session.inputSources) {
    if (inputSource.hand) {
      // ein Handmodell rendern, Gestenerkennung durchführen, etc.
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRHand")}}
