---
title: "XRInputSource: hand-Eigenschaft"
short-title: hand
slug: Web/API/XRInputSource/hand
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte **`hand`**-Eigenschaft der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Schnittstelle ist ein [`XRHand`](/de/docs/Web/API/XRHand)-Objekt, das den Zugriff auf ein Hand-Tracking-Gerät ermöglicht.

## Wert

Ein [`XRHand`](/de/docs/Web/API/XRHand)-Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn die [`XRSession`](/de/docs/Web/API/XRSession) nicht mit dem `hand-tracking` Feature-Deskriptor [angefordert](/de/docs/Web/API/XRSystem/requestSession) wurde.

## Beispiele

```js
navigator.xr
  .requestSession({ optionalFeatures: ["hand-tracking"] })
  .then(/* … */);

function renderFrame(session, frame) {
  // …

  for (const inputSource of session.inputSources) {
    if (inputSource.hand) {
      // render a hand model, perform gesture detection, etc.
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRHand`](/de/docs/Web/API/XRHand)
