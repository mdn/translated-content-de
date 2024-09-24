---
title: XRTransientInputHitTestResult
slug: Web/API/XRTransientInputHitTestResult
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRTransientInputHitTestResult`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) enthält ein Array von Ergebnissen eines Treffertests für transienten Input, gruppiert nach Eingabequelle.

Sie können ein Array von `XRHitTestResult`-Objekten für einen Frame erhalten, indem Sie {{domxref("XRFrame.getHitTestResultsForTransientInput()")}} aufrufen.

## Instanzeigenschaften

- {{domxref("XRTransientInputHitTestResult.inputSource")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Repräsentiert die {{domxref("XRInputSource")}}, die verwendet wurde, um das `results`-Array zu berechnen.
- {{domxref("XRTransientInputHitTestResult.results")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Repräsentiert ein Array von {{domxref("XRHitTestResult")}}-Objekten, die die Treffertestergebnisse für die Eingabequelle enthalten, geordnet nach der Entfernung entlang des Strahls, der für den Treffertest verwendet wurde, wobei das nächstgelegene Ergebnis an Position 0 steht.

## Instanzmethoden

Keine.

## Beispiele

### Zugreifen auf Treffertestergebnisse für transienten Input

Es werden zwei Arrays verwendet, um auf Treffertestergebnisse für transienten Input zuzugreifen. Zuerst erhalten Sie ein Array von `XRTransientInputHitTestResult`-Objekten, indem Sie {{domxref("XRFrame.getHitTestResultsForTransientInput()")}} aufrufen. Zweitens, um zu den tatsächlichen {{domxref("XRHitTestResult")}}-Objekten für eine Eingabequelle zu gelangen, dereferenzieren Sie die `results`-Eigenschaft auf einem der `XRTransientInputHitTestResult`-Objekte.

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

Die {{domxref("XRTransientInputHitTestResult.inputSource", "inputSource")}}-Eigenschaft ermöglicht es Ihnen, Treffertestergebnisse nach Eingabequelle zu filtern.

```js
// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(
    transientHitTestSource,
  );

  hitTestResults.forEach((resultsPerInputSource) => {
    if (resultsPerInputSource.inputSource === myPreferredInputSource) {
      // handle Treffertestergebnisse von der bevorzugten Eingabequelle
    }
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRHitTestResult")}}
- {{domxref("XRInputSource")}}
