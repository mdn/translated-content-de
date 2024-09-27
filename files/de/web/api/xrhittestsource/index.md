---
title: XRHitTestSource
slug: Web/API/XRHitTestSource
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRHitTestSource`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwaltet Abonnements für Treffer-Tests. Sie können ein `XRHitTestSource`-Objekt durch die Methode [`XRSession.requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) erhalten.

Dieses Objekt enthält selbst keine Treffer-Testergebnisse, wird jedoch verwendet, um Treffer-Tests für jedes [`XRFrame`](/de/docs/Web/API/XRFrame) zu berechnen, indem [`XRFrame.getHitTestResults()`](/de/docs/Web/API/XRFrame/getHitTestResults) aufgerufen wird, welches [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekte zurückgibt.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`XRHitTestSource.cancel()`](/de/docs/Web/API/XRHitTestSource/cancel) {{Experimental_Inline}}
  - : Meldet das Abonnement für den Treffer-Test ab.

## Beispiele

### Erhalten eines `XRHitTestSource`-Objekts für eine Sitzung

Rufen Sie [`XRSession.requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) auf, um eine Treffer-Testquelle zu erhalten.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["local", "hit-test"],
});

let hitTestSource = null;

xrSession
  .requestHitTestSource({
    space: viewerSpace, // obtained from xrSession.requestReferenceSpace("viewer");
    offsetRay: new XRRay({ y: 0.5 }),
  })
  .then((viewerHitTestSource) => {
    hitTestSource = viewerHitTestSource;
  });

// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResults(hitTestSource);

  // do things with the hit test results
}
```

### Vom Treffer-Test abmelden

Um sich von einer Treffer-Testquelle abzumelden, rufen Sie [`XRHitTestSource.cancel()`](/de/docs/Web/API/XRHitTestSource/cancel) auf. Da das Objekt dann nicht mehr verwendbar ist, können Sie aufräumen und das `XRHitTestSource`-Objekt auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen.

```js
hitTestSource.cancel();
hitTestSource = null;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)
