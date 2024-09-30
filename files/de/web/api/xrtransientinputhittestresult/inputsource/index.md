---
title: "XRTransientInputHitTestResult: inputSource-Eigenschaft"
short-title: inputSource
slug: Web/API/XRTransientInputHitTestResult/inputSource
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`inputSource`**-Eigenschaft der [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)-Schnittstelle repräsentiert ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das verwendet wurde, um das [`results`](/de/docs/Web/API/XRTransientInputHitTestResult/results)-Array zu berechnen.

## Wert

Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt.

## Beispiele

### Filtern von Eingabequellen

Die `inputSource`-Eigenschaft ermöglicht es Ihnen, die Ergebnisliste des Treffer-Tests basierend auf der Eingabequelle zu filtern.

```js
// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(
    transientHitTestSource,
  );

  hitTestResults.forEach((resultsPerInputSource) => {
    if (resultsPerInputSource.inputSource === myPreferredInputSource) {
      // act on hit test results from the preferred input source
    }
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRInputSource`](/de/docs/Web/API/XRInputSource)
