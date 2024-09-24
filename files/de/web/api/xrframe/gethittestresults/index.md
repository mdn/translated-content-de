---
title: "XRFrame: getHitTestResults()-Methode"
short-title: getHitTestResults()
slug: Web/API/XRFrame/getHitTestResults
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getHitTestResults()`**-Methode der {{domxref("XRFrame")}}-Schnittstelle gibt ein Array von {{domxref("XRHitTestResult")}}-Objekten zurück, die Treffer-Testergebnisse für eine gegebene {{domxref("XRHitTestSource")}} enthalten.

## Syntax

```js-nolint
getHitTestResults(hitTestSource)
```

### Parameter

- `hitTestSource`
  - : Ein {{domxref("XRHitTestSource")}}-Objekt, das Abonnements für Treffer-Tests enthält.

### Rückgabewert

Ein Array von {{domxref("XRHitTestResult")}}-Objekten.

## Beispiele

### Erhalten von Treffer-Testergebnissen

Um eine Treffer-Testquelle anzufordern, starten Sie eine {{domxref("XRSession")}} mit der `hit-test`-Sitzungsfunktion aktiviert. Fordern Sie als Nächstes die Treffer-Testquelle mit {{domxref("XRSession.requestHitTestSource()")}} an und speichern Sie sie zur späteren Verwendung in der Frame-Schleife. Rufen Sie schließlich `getHitTestResults()` auf, um das Ergebnis zu erhalten.

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
// Frame-Schleife
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResults(hitTestSource);
  // machen Sie etwas mit den Treffer-Testergebnissen
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("XRHitTestResult")}}
- {{domxref("XRHitTestSource")}}
- {{domxref("XRRay")}}
