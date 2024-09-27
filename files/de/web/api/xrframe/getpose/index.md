---
title: "XRFrame: getPose()-Methode"
short-title: getPose()
slug: Web/API/XRFrame/getPose
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode **`getPose()`** liefert die relative Position und Orientierung—die Pose—eines [`XRSpace`](/de/docs/Web/API/XRSpace) im Vergleich zu einem anderen Raum. Damit können Sie die Bewegung von Objekten relativ zueinander und zu festen Standorten in der gesamten Szene beobachten.

Um beispielsweise die Position eines Controllers relativ zum Kopf des Betrachters zu erhalten, würden Sie den [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) des Controllers mit dem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) vom Typ `viewer` vergleichen.

## Syntax

```js-nolint
getPose(space, baseSpace)
```

### Parameter

- `space`
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), der den Raum spezifiziert, für den ein [`XRPose`](/de/docs/Web/API/XRPose) beschrieben werden soll, das die Position und Orientierung des Objekts angibt.
- `baseSpace`
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), der als Basis oder Ursprung für die Berechnung der relativen Position und Orientierung dient.

### Rückgabewert

Ein [`XRPose`](/de/docs/Web/API/XRPose)-Objekt, das die Position und Orientierung relativ zum von `baseSpace` angegebenen [`XRSpace`](/de/docs/Web/API/XRSpace) angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
