---
title: XRHitTestSource
slug: Web/API/XRHitTestSource
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRHitTestSource`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwaltet Hit-Test-Abonnements. Sie können ein `XRHitTestSource`-Objekt durch die Verwendung der Methode {{domxref("XRSession.requestHitTestSource()")}} erhalten.

Dieses Objekt enthält selbst keine Hit-Test-Ergebnisse, sondern wird verwendet, um für jeden {{domxref("XRFrame")}} Hit-Tests zu berechnen, indem {{domxref("XRFrame.getHitTestResults()")}} aufgerufen wird, was {{domxref("XRHitTestResult")}}-Objekte zurückgibt.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- {{domxref("XRHitTestSource.cancel()")}} {{Experimental_Inline}}
  - : Kündigt das Abonnement des Hit-Tests.

## Beispiele

### Erhalten eines `XRHitTestSource`-Objekts für eine Sitzung

Rufen Sie {{domxref("XRSession.requestHitTestSource()")}} auf, um eine Hit-Test-Quelle zu bekommen.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["local", "hit-test"],
});

let hitTestSource = null;

xrSession
  .requestHitTestSource({
    space: viewerSpace, // erhalten von xrSession.requestReferenceSpace("viewer");
    offsetRay: new XRRay({ y: 0.5 }),
  })
  .then((viewerHitTestSource) => {
    hitTestSource = viewerHitTestSource;
  });

// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResults(hitTestSource);

  // Dinge mit den Hit-Test-Ergebnissen tun
}
```

### Abbestellen des Hit-Tests

Um ein Abonnement von einer Hit-Test-Quelle zu kündigen, rufen Sie {{domxref("XRHitTestSource.cancel()")}} auf. Da das Objekt nicht mehr nutzbar sein wird, können Sie aufräumen und das `XRHitTestSource`-Objekt auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen.

```js
hitTestSource.cancel();
hitTestSource = null;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRTransientInputHitTestSource")}}
