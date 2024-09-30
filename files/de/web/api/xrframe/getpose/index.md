---
title: "XRFrame: getPose() Methode"
short-title: getPose()
slug: Web/API/XRFrame/getPose
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`getPose()`** des [`XRFrame`](/de/docs/Web/API/XRFrame) gibt die relative Position und Orientierung—die Pose—eines [`XRSpace`](/de/docs/Web/API/XRSpace) zu einem anderen Raum zurück. Damit können Sie die Bewegung von Objekten relativ zueinander und zu festen Positionen in der gesamten Szene beobachten.

Um beispielsweise die Position eines Controllers relativ zum Kopf des Betrachters zu erhalten, würden Sie den [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) des Controllers mit dem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) vom Typ `viewer` vergleichen.

## Syntax

```js-nolint
getPose(space, baseSpace)
```

### Parameter

- `space`
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), der den Raum angibt, für den eine [`XRPose`](/de/docs/Web/API/XRPose) erhalten werden soll, die die Position und Orientierung des Objekts beschreibt.
- `baseSpace`
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), der als Basis oder Ursprung für die Berechnung der relativen Position und Orientierung verwendet wird.

### Rückgabewert

Ein [`XRPose`](/de/docs/Web/API/XRPose) Objekt, das die Position und Orientierung relativ zu dem angegebenen [`XRSpace`](/de/docs/Web/API/XRSpace) von `baseSpace` angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
