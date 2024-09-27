---
title: "XRFrame: createAnchor()-Methode"
short-title: createAnchor()
slug: Web/API/XRFrame/createAnchor
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createAnchor()`**-Methode der [`XRFrame`](/de/docs/Web/API/XRFrame)-Schnittstelle erstellt einen frei schwebenden [`XRAnchor`](/de/docs/Web/API/XRAnchor), der relativ zur realen Welt fixiert wird.

Siehe [`XRHitTestResult.createAnchor()`](/de/docs/Web/API/XRHitTestResult/createAnchor) für das Erstellen eines Ankers aus einem Trefferergebnis, das an ein Objekt in der realen Welt gebunden ist.

## Syntax

```js-nolint
createAnchor(pose, space)
```

### Parameter

- `pose`
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt mit der anfänglichen Pose, an der der Anker erstellt werden soll. Das System stellt sicher, dass die in diesem Moment hergestellte Beziehung zur physischen Welt aufrechterhalten wird, während sich das Verständnis des Trackingsystems von der Welt weiterentwickelt.
- `space`
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt, relativ zu dem die Pose ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`XRAnchor`](/de/docs/Web/API/XRAnchor)-Objekt aufgelöst wird.

## Beispiele

### Erstellen eines Ankers

```js
frame.createAnchor(anchorPose, referenceSpace).then(
  (anchor) => {
    // Do stuff with the anchor (assign objects that will be relative to this anchor)
  },
  (error) => {
    console.error(`Could not create anchor: ${error}`);
  },
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRHitTestResult.createAnchor()`](/de/docs/Web/API/XRHitTestResult/createAnchor)
