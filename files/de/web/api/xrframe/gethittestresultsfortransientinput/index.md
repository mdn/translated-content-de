---
title: "XRFrame: getHitTestResultsForTransientInput()-Methode"
short-title: getHitTestResultsForTransientInput()
slug: Web/API/XRFrame/getHitTestResultsForTransientInput
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getHitTestResultsForTransientInput()`**-Methode des [`XRFrame`](/de/docs/Web/API/XRFrame)-Interfaces liefert ein Array von [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)-Objekten, die transiente Eingabe-Hit-Test-Ergebnisse für eine gegebene [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource) enthalten.

## Syntax

```js-nolint
getHitTestResultsForTransientInput(hitTestSource)
```

### Parameter

- `hitTestSource`
  - : Ein [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)-Objekt, das transiente Eingabe-Hit-Test-Abonnements enthält.

### Rückgabewert

Ein Array von [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)-Objekten.

## Beispiele

### Abrufen von transienten Eingabe-Hit-Test-Ergebnissen

Um eine Quelle für transiente Eingabe-Hit-Tests anzufordern, starten Sie eine [`XRSession`](/de/docs/Web/API/XRSession) mit dem aktivierten `hit-test`-Sitzungsfeature. Fordern Sie anschließend die Hit-Test-Quelle mit [`XRSession.requestHitTestSourceForTransientInput()`](/de/docs/Web/API/XRSession/requestHitTestSourceForTransientInput) an und speichern Sie sie für die spätere Verwendung in der Frame-Schleife. Rufen Sie schließlich `getHitTestResultsForTransientInput()` auf, um das Ergebnis zu erhalten.

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

- [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)
- [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)
- [`XRRay`](/de/docs/Web/API/XRRay)
