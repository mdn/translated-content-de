---
title: "XRHitTestResult: getPose()-Methode"
short-title: getPose()
slug: Web/API/XRHitTestResult/getPose
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getPose()`**-Methode der [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Schnittstelle gibt die [`XRPose`](/de/docs/Web/API/XRPose) des Ergebnis des Treffertests relativ zum angegebenen Basisraum zurück.

## Syntax

```js-nolint
getPose(baseSpace)
```

### Parameter

- `baseSpace`
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), der als Basis oder Ursprung für die Berechnung der relativen Position und Ausrichtung der Treffertestergebnisse verwendet wird.

### Rückgabewert

Gibt ein [`XRPose`](/de/docs/Web/API/XRPose)-Objekt zurück.

## Beispiele

### Den Pose des Treffertestergebnisses abrufen

Das folgende Beispiel verwendet `getPose()`, um die Pose eines einzelnen Treffertestergebnisses abzufragen.

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
