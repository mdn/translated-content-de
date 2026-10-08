---
title: "XRFrame: Methode getHitTestResults()"
short-title: getHitTestResults()
slug: Web/API/XRFrame/getHitTestResults
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`getHitTestResults()`** der Schnittstelle [`XRFrame`](/de/docs/Web/API/XRFrame) gibt ein Array von [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekten zurück, die Hit-Test-Ergebnisse für eine bestimmte [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource) enthalten.

## Syntax

```js-nolint
getHitTestResults(hitTestSource)
```

### Parameter

- `hitTestSource`
  - : Ein [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)-Objekt, das Hit-Test-Abonnements enthält.

### Rückgabewert

Ein Array von [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekten.

## Beispiele

### Hit-Test-Ergebnisse abrufen

Um eine Hit-Test-Quelle anzufordern, starten Sie eine [`XRSession`](/de/docs/Web/API/XRSession), bei der das Session-Feature `hit-test` aktiviert ist. Fordern Sie anschließend die Hit-Test-Quelle mit [`XRSession.requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) an und speichern Sie sie für die spätere Verwendung in der Frame-Schleife. Rufen Sie schließlich `getHitTestResults()` auf, um die Ergebnisse abzurufen.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)
- [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)
- [`XRRay`](/de/docs/Web/API/XRRay)
