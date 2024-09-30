---
title: "XRTransientInputHitTestResult: results-Eigenschaft"
short-title: results
slug: Web/API/XRTransientInputHitTestResult/results
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`results`**-Eigenschaft der [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)-Schnittstelle stellt ein Array von [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekten dar, das die Trefferergebnisse für die Eingabequelle enthält. Diese sind nach der Entfernung entlang des Strahls, der für den Treffertest verwendet wurde, geordnet, wobei das nächstgelegene Ergebnis an Position 0 steht.

## Wert

Ein Array von [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekten.

## Beispiele

### Zugriff auf temporäre Eingabe-Treffertestergebnisse

Zwei Arrays werden verwendet, um auf temporäre Eingabe-Treffertestergebnisse zuzugreifen. Zuerst erhalten Sie ein Array von `XRTransientInputHitTestResult`-Objekten durch den Aufruf von [`XRFrame.getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput). Zweitens, um zu den tatsächlichen [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekten für eine Eingabequelle zu gelangen, greifen Sie auf die `results`-Eigenschaft eines der `XRTransientInputHitTestResult`-Objekte zu.

```js
// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(
    transientHitTestSource,
  );

  hitTestResults.forEach((resultsPerInputSource) => {
    resultsPerInputSource.results.forEach((hitTest) => {
      // do something with the hit test
      hitTest.getPose(referenceSpace);
    });
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)
