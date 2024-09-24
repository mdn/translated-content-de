---
title: "XRTransientInputHitTestResult: results-Eigenschaft"
short-title: Ergebnisse
slug: Web/API/XRTransientInputHitTestResult/results
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`results`**-Eigenschaft der {{DOMxRef("XRTransientInputHitTestResult")}}-Schnittstelle stellt ein Array von {{domxref("XRHitTestResult")}}-Objekten dar, das die Hit-Test-Ergebnisse für die Eingabequelle enthält. Diese sind in der Reihenfolge der Distanz entlang des Strahls, der für den Hit-Test verwendet wurde, angeordnet, wobei das nächste Ergebnis an Position 0 steht.

## Wert

Ein Array von {{domxref("XRHitTestResult")}}-Objekten.

## Beispiele

### Zugriff auf transiente Eingabe-Hit-Test-Ergebnisse

Zwei Arrays werden verwendet, um auf transiente Eingabe-Hit-Test-Ergebnisse zuzugreifen. Zunächst erhalten Sie ein Array von `XRTransientInputHitTestResult`-Objekten, indem Sie {{domxref("XRFrame.getHitTestResultsForTransientInput()")}} aufrufen. Zweitens, um die tatsächlichen {{domxref("XRHitTestResult")}}-Objekte für eine Eingabequelle zu erhalten, dereferenzieren Sie die `results`-Eigenschaft eines der `XRTransientInputHitTestResult`-Objekte.

```js
// Frame-Schleife
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(
    transientHitTestSource,
  );

  hitTestResults.forEach((resultsPerInputSource) => {
    resultsPerInputSource.results.forEach((hitTest) => {
      // machen Sie etwas mit dem Hit-Test
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

- {{domxref("XRHitTestResult")}}
