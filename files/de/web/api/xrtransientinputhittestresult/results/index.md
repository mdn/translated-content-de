---
title: "XRTransientInputHitTestResult: results-Eigenschaft"
short-title: results
slug: Web/API/XRTransientInputHitTestResult/results
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`results`**-Eigenschaft der [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)-Schnittstelle stellt ein Array von [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekten dar. Diese enthalten die Treffer-Testergebnisse für die Eingabequelle, geordnet nach der Entfernung entlang des Strahls, der zum Durchführen des Treffer-Tests verwendet wurde, wobei das nächste Ergebnis an Position 0 steht.

## Wert

Ein Array von [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekten.

## Beispiele

### Zugriff auf Ergebnisse von transienten Eingabetreffertests

Zwei Arrays werden verwendet, um auf Ergebnisse von transienten Eingabetreffertests zuzugreifen. Zuerst erhalten Sie ein Array von `XRTransientInputHitTestResult`-Objekten, indem Sie [`XRFrame.getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput) aufrufen. Um dann zu den eigentlichen [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekten für eine Eingabequelle zu gelangen, dereferenzieren Sie die `results`-Eigenschaft eines der `XRTransientInputHitTestResult`-Objekte.

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
