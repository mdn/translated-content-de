---
title: "XRHitTestResult: Methode getPose()"
short-title: getPose()
slug: Web/API/XRHitTestResult/getPose
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getPose()`** Methode der Schnittstelle {{domxref("XRHitTestResult")}} gibt die {{domxref("XRPose")}} des Treffer-Testergebnisses relativ zu dem angegebenen Basisraum zurück.

## Syntax

```js-nolint
getPose(baseSpace)
```

### Parameter

- `baseSpace`
  - : Ein {{domxref("XRSpace")}}, der als Basis oder Ursprung zur Berechnung der relativen Position und Orientierung der Treffer-Testergebnisse verwendet wird.

### Rückgabewert

Gibt ein {{domxref("XRPose")}} Objekt zurück.

## Beispiele

### Abrufen der Pose des Treffer-Testergebnisses

Das folgende Beispiel verwendet `getPose()`, um die Pose eines einzelnen Treffer-Testergebnisses abzufragen.

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

- {{domxref("XRFrame.getPose()")}}
