---
title: "XRHitTestResult: getPose()-Methode"
short-title: getPose()
slug: Web/API/XRHitTestResult/getPose
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getPose()`**-Methode des [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Interfaces gibt die [`XRPose`](/de/docs/Web/API/XRPose) des Trefferergebnisses relativ zum angegebenen Basisspace zurück.

## Syntax

```js-nolint
getPose(baseSpace)
```

### Parameter

- `baseSpace`
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), das als Basis oder Ursprung zur Berechnung der relativen Position und Orientierung der Trefferergebnisse verwendet wird.

### Rückgabewert

Gibt ein [`XRPose`](/de/docs/Web/API/XRPose)-Objekt zurück.

## Beispiele

### Erhalten der Pose des Trefferergebnisses

Im folgenden Beispiel wird `getPose()` verwendet, um die Pose eines einzelnen Trefferergebnisses abzufragen.

```js
let hitTestResults = xrFrame.getHitTestResults(hitTestSource);

if (hitTestResults.length > 0) {
  let pose = hitTestResults[0].getPose(referenceSpace);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose)
