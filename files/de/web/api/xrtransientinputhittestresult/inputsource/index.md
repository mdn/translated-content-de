---
title: "XRTransientInputHitTestResult: inputSource-Eigenschaft"
short-title: inputSource
slug: Web/API/XRTransientInputHitTestResult/inputSource
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`inputSource`** Eigenschaft der {{DOMxRef("XRTransientInputHitTestResult")}} Schnittstelle repräsentiert ein {{domxref("XRInputSource")}} Objekt, das verwendet wurde, um das {{domxref("XRTransientInputHitTestResult.results", "results")}} Array zu berechnen.

## Wert

Ein {{domxref("XRInputSource")}} Objekt.

## Beispiele

### Filtern nach Eingabequellen

Die `inputSource` Eigenschaft ermöglicht es Ihnen, Treffer-Testergebnisse nach Eingabequelle zu filtern.

```js
// Frame-Schleife
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(
    transientHitTestSource,
  );

  hitTestResults.forEach((resultsPerInputSource) => {
    if (resultsPerInputSource.inputSource === myPreferredInputSource) {
      // auf Treffer-Testergebnisse der bevorzugten Eingabequelle reagieren
    }
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRInputSource")}}
