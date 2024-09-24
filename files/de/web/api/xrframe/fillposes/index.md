---
title: "XRFrame: fillPoses()-Methode"
short-title: fillPoses()
slug: Web/API/XRFrame/fillPoses
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`fillPoses()`** Methode der {{domxref("XRFrame")}}-Schnittstelle füllt ein {{jsxref("Float32Array")}} mit den Matrizen der Posen relativ zu einem gegebenen Basisspace und gibt `true` zurück, wenn dies für alle Spaces erfolgreich ist.

## Syntax

```js-nolint
fillPoses(spaces, baseSpace, transforms)
```

### Parameter

- `spaces`
  - : Ein Array von {{domxref("XRSpace")}}-Objekten, für die die Posen ermittelt werden sollen.
- `baseSpace`
  - : Ein {{domxref("XRSpace")}}-Objekt, das als Basis oder Ursprung für die relative Position und Orientierung verwendet wird.
- `transforms`
  - : Ein {{jsxref("Float32Array")}}, das mit den Matrizen der Posen relativ zum gegebenen `baseSpace` gefüllt wird.

### Rückgabewert

Ein boolescher Wert, der angibt, ob alle Spaces eine gültige Pose haben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Länge von `spaces` multipliziert mit 16 größer ist als die Anzahl der Elemente in `transforms`.

## Beispiele

### Ermitteln der Posen für alle Gelenke einer Hand

Um effizient alle Posen für alle 25 Gelenke jeder {{domxref("XRHand")}} zu erhalten, können Sie die Methode `fillPoses()` verwenden.

```js
let poses1 = new Float32Array(16 * 25);
let poses2 = new Float32Array(16 * 25);

function onXRFrame(xrFrame, renderer) {
  let hand1 = xrFrame.session.inputSources[0].hand;
  xrFrame.fillPoses(hand1.values(), renderer.referenceSpace, poses1);
  let hand2 = xrFrame.session.inputSources[1].hand;
  xrFrame.fillPoses(hand2.values(), renderer.referenceSpace, poses2);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRHand")}}
- {{domxref("XRJointSpace")}}
- {{jsxref("Float32Array")}}
