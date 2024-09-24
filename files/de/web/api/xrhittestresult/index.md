---
title: XRHitTestResult
slug: Web/API/XRHitTestResult
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`XRHitTestResult`** Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) enthält ein einzelnes Ergebnis eines Prüftests. Sie können ein Array von `XRHitTestResult`-Objekten für einen Frame abrufen, indem Sie {{domxref("XRFrame.getHitTestResults()")}} aufrufen.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- {{domxref("XRHitTestResult.createAnchor()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem aus dem Prüftestergebnis erstellten {{domxref("XRAnchor")}} aufgelöst wird.
- {{domxref("XRHitTestResult.getPose()")}} {{Experimental_Inline}}
  - : Gibt den {{domxref("XRPose")}} des Prüftestergebnisses relativ zum angegebenen Basisspace zurück.

## Beispiele

### Abrufen von `XRHitTestResult`-Objekten innerhalb der Frame-Schleife

Zusätzlich zur Anzeige von `XRHitTestResult` innerhalb einer Frame-Schleife zeigt dieses Beispiel einige Dinge, die Sie tun müssen, bevor Sie dieses Objekt anfordern. Während des Setups der Sitzung, geben Sie `"hit-test"` als eines der `requiredFeatures` an. Rufen Sie anschließend {{domxref("XRSession.requestHitTestSource()")}} mit den gewünschten Referenzen auf. (Erhalten Sie dies, indem Sie {{domxref("XRSession.requestReferenceSpace()")}} aufrufen.) Dies gibt ein {{domxref("XRHitTestSource")}} zurück, das Sie in der Frame-Schleife verwenden werden, um `XRHitTestResult`-Objekte zu erhalten.

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

### Abrufen der Pose des Prüftestergebnisses

Verwenden Sie {{domxref("XRHitTestResult.getPose", "getPose()")}}, um die Pose des Ergebnisses abzufragen.

```js
let hitTestResults = xrFrame.getHitTestResults(hitTestSource);

if (hitTestResults.length > 0) {
  let pose = hitTestResults[0].getPose(referenceSpace);
}
```

### Erstellen eines Ankers aus einem Prüftestergebnis

Sobald Sie Schnittpunkte auf realen Oberflächen mithilfe von Prüftests gefunden haben, können Sie einen {{domxref("XRAnchor")}} erstellen, um ein virtuelles Objekt an diesem Ort zu befestigen.

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

- {{domxref("XRTransientInputHitTestResult")}}
- {{domxref("XRPose")}}
- {{domxref("XRAnchor")}}
