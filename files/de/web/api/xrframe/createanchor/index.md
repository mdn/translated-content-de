---
title: "XRFrame: createAnchor()-Methode"
short-title: createAnchor()
slug: Web/API/XRFrame/createAnchor
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createAnchor()`**-Methode der {{domxref("XRFrame")}}-Schnittstelle erstellt ein freischwebendes {{domxref("XRAnchor")}}, das relativ zur realen Welt fixiert wird.

Siehe {{domxref("XRHitTestResult.createAnchor()")}} für das Erstellen eines Ankers aus einem Treffergebnis, das an ein reales Objekt angehängt ist.

## Syntax

```js-nolint
createAnchor(pose, space)
```

### Parameter

- `pose`
  - : Ein {{domxref("XRRigidTransform")}}-Objekt mit der anfänglichen Pose, an der der Anker erstellt werden soll. Das System wird sicherstellen, dass die Beziehung zur physischen Welt, die in diesem Moment hergestellt wird, aufrechterhalten wird, während sich das Verständnis des Trackingsystems für die Welt weiterentwickelt.
- `space`
  - : Ein {{domxref("XRSpace")}}-Objekt, auf das sich die Pose bezieht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem {{domxref("XRAnchor")}}-Objekt aufgelöst wird.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("XRHitTestResult.createAnchor()")}}
