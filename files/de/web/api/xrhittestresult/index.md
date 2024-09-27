---
title: XRHitTestResult
slug: Web/API/XRHitTestResult
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`XRHitTestResult`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) enthält ein einzelnes Ergebnis eines Treffertests. Sie können ein Array von `XRHitTestResult`-Objekten für einen Frame erhalten, indem Sie [`XRFrame.getHitTestResults()`](/de/docs/Web/API/XRFrame/getHitTestResults) aufrufen.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- [`XRHitTestResult.createAnchor()`](/de/docs/Web/API/XRHitTestResult/createAnchor) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`XRAnchor`](/de/docs/Web/API/XRAnchor) aufgelöst wird, der aus dem Treffertestergebnis erstellt wurde.
- [`XRHitTestResult.getPose()`](/de/docs/Web/API/XRHitTestResult/getPose) {{Experimental_Inline}}
  - : Gibt die [`XRPose`](/de/docs/Web/API/XRPose) des Treffertestergebnisses relativ zum angegebenen Basisspace zurück.

## Beispiele

### Abrufen von `XRHitTestResult`-Objekten innerhalb der Frame-Schleife

Neben der Anzeige von `XRHitTestResult` innerhalb einer Frame-Schleife demonstriert dieses Beispiel einige Dinge, die Sie tun müssen, bevor Sie dieses Objekt anfordern. Legen Sie bei der Einrichtung der Sitzung `"hit-test"` als eines der `requiredFeatures` fest. Rufen Sie als Nächstes [`XRSession.requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) mit den gewünschten Referenzen auf. (Erhalten Sie diese durch Aufrufen von [`XRSession.requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace).) Dies gibt eine [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource) zurück, die Sie in der Frame-Schleife verwenden, um `XRHitTestResult`-Objekte zu erhalten.

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

### Abrufen der Pose des Treffertestergebnisses

Verwenden Sie [`getPose()`](/de/docs/Web/API/XRHitTestResult/getPose), um die Pose des Ergebnisses abzufragen.

```js
let hitTestResults = xrFrame.getHitTestResults(hitTestSource);

if (hitTestResults.length > 0) {
  let pose = hitTestResults[0].getPose(referenceSpace);
}
```

### Erstellen eines Ankers aus einem Treffertestergebnis

Sobald Sie Schnittpunkte auf realen Oberflächen mithilfe von Treffertests gefunden haben, können Sie einen [`XRAnchor`](/de/docs/Web/API/XRAnchor) erstellen, um ein virtuelles Objekt an diesem Ort zu befestigen.

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
