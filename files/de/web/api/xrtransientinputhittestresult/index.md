---
title: XRTransientInputHitTestResult
slug: Web/API/XRTransientInputHitTestResult
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRTransientInputHitTestResult`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) enthält ein Array von Ergebnissen eines Hit-Tests für transienten Input, gruppiert nach Eingabequelle.

Sie können ein Array von `XRHitTestResult`-Objekten für einen Frame erhalten, indem Sie [`XRFrame.getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput) aufrufen.

## Instanzeigenschaften

- [`XRTransientInputHitTestResult.inputSource`](/de/docs/Web/API/XRTransientInputHitTestResult/inputSource) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Repräsentiert die [`XRInputSource`](/de/docs/Web/API/XRInputSource), die verwendet wurde, um das `results`-Array zu berechnen.
- [`XRTransientInputHitTestResult.results`](/de/docs/Web/API/XRTransientInputHitTestResult/results) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Repräsentiert ein Array von [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekten, die die Hit-Test-Ergebnisse für die Eingabequelle enthalten, geordnet nach der Entfernung entlang des Strahls, der zur Durchführung des Hit-Tests verwendet wurde, wobei das nächste Ergebnis an Position 0 steht.

## Instanzmethoden

Keine.

## Beispiele

### Zugriff auf transienten Input-Hit-Test-Ergebnisse

Zwei Arrays werden verwendet, um auf transiente Input-Hit-Test-Ergebnisse zuzugreifen. Zuerst erhalten Sie ein Array von `XRTransientInputHitTestResult`-Objekten, indem Sie [`XRFrame.getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput) aufrufen. Zweitens, um zu den eigentlichen [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekten für eine Eingabequelle zu gelangen, dereferenzieren Sie die `results`-Eigenschaft eines der `XRTransientInputHitTestResult`-Objekte.

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

### Filtern von Eingabequellen

Die [`inputSource`](/de/docs/Web/API/XRTransientInputHitTestResult/inputSource)-Eigenschaft ermöglicht es Ihnen, Hit-Test-Ergebnisse nach Eingabequelle zu filtern.

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

- [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)
- [`XRInputSource`](/de/docs/Web/API/XRInputSource)
