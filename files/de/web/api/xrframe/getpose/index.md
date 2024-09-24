---
title: "XRFrame: getPose()-Methode"
short-title: getPose()
slug: Web/API/XRFrame/getPose
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`getPose()`** von {{domxref("XRFrame")}} gibt die relative Position und Orientierung—die Pose—eines {{domxref("XRSpace")}} zu einem anderen Raum zurück. Damit können Sie die Bewegung von Objekten relativ zueinander und zu festen Standorten in der Szene beobachten.

Um beispielsweise die Position eines Controllers relativ zum Kopf des Betrachters zu erhalten, würden Sie den {{domxref("XRInputSource.gripSpace", "gripSpace")}} des Controllers mit dem {{domxref("XRReferenceSpace")}} vom Typ `viewer` vergleichen.

## Syntax

```js-nolint
getPose(space, baseSpace)
```

### Parameter

- `space`
  - : Ein {{domxref("XRSpace")}}, das den Raum angibt, für den ein {{domxref("XRPose")}} beschrieben wird, der die Position und Orientierung des Elements darstellt.
- `baseSpace`
  - : Ein {{domxref("XRSpace")}}, das als Basis oder Ursprung für die Berechnung der relativen Position und Orientierung verwendet wird.

### Rückgabewert

Ein {{domxref("XRPose")}}-Objekt, das die Position und Orientierung relativ zu dem durch `baseSpace` angegebenen {{domxref("XRSpace")}} spezifiziert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
