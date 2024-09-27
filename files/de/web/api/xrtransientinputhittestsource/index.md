---
title: XRTransientInputHitTestSource
slug: Web/API/XRTransientInputHitTestSource
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRTransientInputHitTestSource`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) behandelt transiente Eingabe-Treffer-Test-Abonnements. Sie können ein `XRTransientInputHitTestSource`-Objekt erhalten, indem Sie die Methode [`XRSession.requestHitTestSourceForTransientInput()`](/de/docs/Web/API/XRSession/requestHitTestSourceForTransientInput) aufrufen.

Dieses Objekt enthält selbst keine transienten Eingabe-Treffer-Testergebnisse, sondern wird verwendet, um Treffer-Tests für jedes [`XRFrame`](/de/docs/Web/API/XRFrame) zu berechnen, indem [`XRFrame.getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput) aufgerufen wird, was [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)-Objekte zurückgibt.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`XRTransientInputHitTestSource.cancel()`](/de/docs/Web/API/XRTransientInputHitTestSource/cancel) {{Experimental_Inline}}
  - : Kündigt das Abonnement für den transienten Eingabe-Treffer-Test.

## Beispiele

### Ein `XRTransientInputHitTestSource`-Objekt für eine Sitzung erhalten

Verwenden Sie die Methode [`XRSession.requestHitTestSourceForTransientInput()`](/de/docs/Web/API/XRSession/requestHitTestSourceForTransientInput), um eine Quelle für transiente Eingabe-Treffer-Tests zu erhalten.

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

### Vom transienten Eingabe-Treffer-Test abmelden

Um sich von einer Quelle für transiente Eingabe-Treffer-Tests abzumelden, verwenden Sie die Methode [`XRTransientInputHitTestSource.cancel()`](/de/docs/Web/API/XRTransientInputHitTestSource/cancel). Da das Objekt nicht mehr nutzbar sein wird, können Sie es bereinigen und das `XRTransientInputHitTestSource`-Objekt auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen.

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
