---
title: XRTransientInputHitTestSource
slug: Web/API/XRTransientInputHitTestSource
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRTransientInputHitTestSource`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwaltet flüchtige Eingabe-Hittests-Abonnements. Sie können ein `XRTransientInputHitTestSource`-Objekt erhalten, indem Sie [`XRSession.requestHitTestSourceForTransientInput()`](/de/docs/Web/API/XRSession/requestHitTestSourceForTransientInput) aufrufen.

Dieses Objekt selbst enthält keine flüchtigen Eingabe-Hittest-Ergebnisse, sondern es wird verwendet, um für jedes [`XRFrame`](/de/docs/Web/API/XRFrame) Hittests zu berechnen, indem [`XRFrame.getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput) aufgerufen wird, was [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)-Objekte zurückgibt.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`XRTransientInputHitTestSource.cancel()`](/de/docs/Web/API/XRTransientInputHitTestSource/cancel) {{Experimental_Inline}}
  - : Kündigt das Abonnement für den flüchtigen Eingabe-Hittest.

## Beispiele

### Erhalten eines `XRTransientInputHitTestSource`-Objekts für eine Sitzung

Verwenden Sie die Methode [`XRSession.requestHitTestSourceForTransientInput()`](/de/docs/Web/API/XRSession/requestHitTestSourceForTransientInput), um eine Quelle für flüchtige Eingabe-Hittests zu erhalten.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["local", "hit-test"],
});

let transientHitTestSource = null;

xrSession
  .requestHitTestSourceForTransientInput({
    profile: "generic-touchscreen",
    offsetRay: new XRRay(),
  })
  .then((touchScreenHitTestSource) => {
    transientHitTestSource = touchScreenHitTestSource;
  });

// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(
    transientHitTestSource,
  );

  // do things with the transient hit test results
}
```

### Abbestellen eines flüchtigen Eingabe-Hittests

Um ein Abonnement für eine flüchtige Eingabe-Hittest-Quelle zu kündigen, verwenden Sie die Methode [`XRTransientInputHitTestSource.cancel()`](/de/docs/Web/API/XRTransientInputHitTestSource/cancel). Da das Objekt danach nicht mehr nutzbar ist, können Sie bereinigen und das `XRTransientInputHitTestSource`-Objekt auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen.

```js
transientHitTestSource.cancel();
transientHitTestSource = null;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)
