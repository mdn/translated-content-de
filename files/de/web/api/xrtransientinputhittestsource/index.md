---
title: XRTransientInputHitTestSource
slug: Web/API/XRTransientInputHitTestSource
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRTransientInputHitTestSource`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwaltet flüchtige Eingabe-Hit-Test-Abonnements. Sie können ein `XRTransientInputHitTestSource`-Objekt erhalten, indem Sie die Methode {{domxref("XRSession.requestHitTestSourceForTransientInput()")}} aufrufen.

Dieses Objekt enthält selbst keine flüchtigen Eingabe-Hit-Test-Ergebnisse, wird jedoch verwendet, um Hit-Tests für jedes {{domxref("XRFrame")}} zu berechnen, indem {{domxref("XRFrame.getHitTestResultsForTransientInput()")}} aufgerufen wird, welches {{domxref("XRTransientInputHitTestResult")}}-Objekte zurückgibt.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- {{domxref("XRTransientInputHitTestSource.cancel()")}} {{Experimental_Inline}}
  - : Kündigt das Abonnement des flüchtigen Eingabe-Hit-Tests.

## Beispiele

### Erhalten eines `XRTransientInputHitTestSource`-Objekts für eine Sitzung

Verwenden Sie die Methode {{domxref("XRSession.requestHitTestSourceForTransientInput()")}}, um eine Quelle für flüchtige Eingabe-Hit-Tests zu erhalten.

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

### Abmelden von einem flüchtigen Eingabe-Hit-Test

Um das Abonnement für eine Quelle von flüchtigen Eingabe-Hit-Tests zu kündigen, verwenden Sie die Methode {{domxref("XRTransientInputHitTestSource.cancel()")}}. Da das Objekt nicht mehr verwendbar ist, können Sie bereinigen und das `XRTransientInputHitTestSource`-Objekt auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen.

```js
transientHitTestSource.cancel();
transientHitTestSource = null;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("XRTransientInputHitTestResult")}}
