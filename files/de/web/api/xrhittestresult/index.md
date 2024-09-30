---
title: XRHitTestResult
slug: Web/API/XRHitTestResult
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`XRHitTestResult`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) enthält ein einzelnes Ergebnis eines Treffer-Tests. Sie können ein Array von `XRHitTestResult`-Objekten für einen Frame erhalten, indem Sie [`XRFrame.getHitTestResults()`](/de/docs/Web/API/XRFrame/getHitTestResults) aufrufen.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`XRHitTestResult.createAnchor()`](/de/docs/Web/API/XRHitTestResult/createAnchor) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`XRAnchor`](/de/docs/Web/API/XRAnchor) aufgelöst wird, der aus dem Treffer-Test-Ergebnis erstellt wurde.
- [`XRHitTestResult.getPose()`](/de/docs/Web/API/XRHitTestResult/getPose) {{Experimental_Inline}}
  - : Gibt die [`XRPose`](/de/docs/Web/API/XRPose) des Treffer-Test-Ergebnisses relativ zum angegebenen Basisraum zurück.

## Beispiele

### Erhalten von `XRHitTestResult`-Objekten innerhalb der Frame-Schleife

Neben dem Anzeigen von `XRHitTestResult` innerhalb einer Frame-Schleife demonstriert dieses Beispiel einige Dinge, die Sie tun müssen, bevor Sie dieses Objekt anfordern. Während der Sitzungseinrichtung geben Sie `"hit-test"` als eines der `requiredFeatures` an. Rufen Sie als Nächstes [`XRSession.requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) mit den gewünschten Referenzen auf. (Erhalten Sie dies, indem Sie [`XRSession.requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) aufrufen.) Dies gibt eine [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource) zurück. Diese verwenden Sie in der Frame-Schleife, um `XRHitTestResult`-Objekte zu erhalten.

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

### Erhalten der Pose des Treffer-Test-Ergebnisses

Verwenden Sie [`getPose()`](/de/docs/Web/API/XRHitTestResult/getPose), um die Pose des Ergebnisses abzufragen.

```js
let hitTestResults = xrFrame.getHitTestResults(hitTestSource);

if (hitTestResults.length > 0) {
  let pose = hitTestResults[0].getPose(referenceSpace);
}
```

### Erstellen eines Ankers von einem Treffer-Test-Ergebnis

Sobald Sie durch Treffer-Testen Schnittpunkte auf realen Oberflächen gefunden haben, können Sie einen [`XRAnchor`](/de/docs/Web/API/XRAnchor) erstellen, um ein virtuelles Objekt an diesem Ort zu befestigen.

```js
hitTestResult.createAnchor().then(
  (anchor) => {
    // add anchored objects to the scene
  },
  (error) => {
    console.error(`Could not create anchor: ${error}`);
  },
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)
- [`XRPose`](/de/docs/Web/API/XRPose)
- [`XRAnchor`](/de/docs/Web/API/XRAnchor)
