---
title: XRHitTestSource
slug: Web/API/XRHitTestSource
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRHitTestSource`** Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwaltet Hit-Test-Abonnements. Sie können ein `XRHitTestSource`-Objekt mit der Methode [`XRSession.requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) erhalten.

Dieses Objekt enthält selbst keine Hit-Test-Ergebnisse, aber es wird verwendet, um für jeden [`XRFrame`](/de/docs/Web/API/XRFrame) Hit-Tests zu berechnen, indem [`XRFrame.getHitTestResults()`](/de/docs/Web/API/XRFrame/getHitTestResults) aufgerufen wird, was [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekte zurückgibt.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`XRHitTestSource.cancel()`](/de/docs/Web/API/XRHitTestSource/cancel) {{Experimental_Inline}}
  - : Meldet das Abonnement vom Hit-Test ab.

## Beispiele

### Erhalten eines `XRHitTestSource`-Objekts für eine Sitzung

Rufen Sie [`XRSession.requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) auf, um eine Hit-Test-Quelle zu erhalten.

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

### Vom Hit-Test abmelden

Um sich von einer Hit-Test-Quelle abzumelden, rufen Sie [`XRHitTestSource.cancel()`](/de/docs/Web/API/XRHitTestSource/cancel) auf. Da das Objekt nicht mehr verwendbar ist, können Sie aufräumen und das `XRHitTestSource`-Objekt auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen.

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
