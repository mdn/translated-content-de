---
title: "XRFrame: getHitTestResultsForTransientInput()-Methode"
short-title: getHitTestResultsForTransientInput()
slug: Web/API/XRFrame/getHitTestResultsForTransientInput
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getHitTestResultsForTransientInput()`**-Methode der {{domxref("XRFrame")}}-Schnittstelle gibt ein Array von {{domxref("XRTransientInputHitTestResult")}}-Objekten zurück, die vorübergehende Eingabetreffertestergebnisse für eine gegebene {{domxref("XRTransientInputHitTestSource")}} enthalten.

## Syntax

```js-nolint
getHitTestResultsForTransientInput(hitTestSource)
```

### Parameter

- `hitTestSource`
  - : Ein {{domxref("XRTransientInputHitTestSource")}}-Objekt, das vorübergehende Eingabetreffertest-Abonnements enthält.

### Rückgabewert

Ein Array von {{domxref("XRTransientInputHitTestResult")}}-Objekten.

## Beispiele

### Abrufen von vorübergehenden Eingabetreffertestergebnissen

Um eine vorübergehende Eingabetreffertestquelle anzufordern, starten Sie eine {{domxref("XRSession")}} mit der aktivierten `hit-test`-Sitzungsfunktion. Fordern Sie als nächstes die Treffertestquelle mit {{domxref("XRSession.requestHitTestSourceForTransientInput()")}} an und speichern Sie sie für die spätere Verwendung in der Frame-Schleife. Rufen Sie schließlich `getHitTestResultsForTransientInput()` auf, um das Ergebnis zu erhalten.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRTransientInputHitTestResult")}}
- {{domxref("XRTransientInputHitTestSource")}}
- {{domxref("XRRay")}}
