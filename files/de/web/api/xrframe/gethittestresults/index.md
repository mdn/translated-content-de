---
title: "XRFrame: getHitTestResults()-Methode"
short-title: getHitTestResults()
slug: Web/API/XRFrame/getHitTestResults
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getHitTestResults()`**-Methode der [`XRFrame`](/de/docs/Web/API/XRFrame)-Schnittstelle gibt ein Array von [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekten zurück, die Treffer-Testergebnisse für eine gegebene [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource) enthalten.

## Syntax

```js-nolint
getHitTestResults(hitTestSource)
```

### Parameter

- `hitTestSource`
  - : Ein [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)-Objekt, das Abonnements für Treffer-Tests enthält.

### Rückgabewert

Ein Array von [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Objekten.

## Beispiele

### Erhalten von Treffer-Testergebnissen

Um eine Treffer-Testquelle anzufordern, starten Sie eine [`XRSession`](/de/docs/Web/API/XRSession) mit der `hit-test`-Sitzungsfunktion aktiviert. Fordern Sie als Nächstes die Treffer-Testquelle mit [`XRSession.requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) an und speichern Sie sie für die spätere Verwendung in der Frame-Schleife. Rufen Sie schließlich `getHitTestResults()` auf, um das Ergebnis zu erhalten.

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
