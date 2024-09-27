---
title: "XRFrame: getJointPose() Methode"
short-title: getJointPose()
slug: Web/API/XRFrame/getJointPose
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getJointPose()`**-Methode der [`XRFrame`](/de/docs/Web/API/XRFrame)-Schnittstelle gibt ein [`XRJointPose`](/de/docs/Web/API/XRJointPose)-Objekt zurück, das die Pose eines Handgelenks (siehe [`XRHand`](/de/docs/Web/API/XRHand)) relativ zu einem gegebenen Basisspace bereitstellt.

## Syntax

```js-nolint
getJointPose(joint, baseSpace)
```

### Parameter

- `joint`
  - : Ein [`XRJointSpace`](/de/docs/Web/API/XRJointSpace), das den Handgelenkraum angibt, für den ein [`XRJointPose`](/de/docs/Web/API/XRJointPose) zur Beschreibung der Position und Ausrichtung des Elements abgerufen werden soll.
- `baseSpace`
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), der als Basis oder Ursprung für die relative Position und Ausrichtung verwendet wird.

### Rückgabewert

Ein [`XRJointPose`](/de/docs/Web/API/XRJointPose)-Objekt, das die Position und Ausrichtung des Handgelenks relativ zu dem durch `baseSpace` angegebenen [`XRSpace`](/de/docs/Web/API/XRSpace) angibt.

## Beispiele

### Verwendung von `getJointPose()`

Rufen Sie `getJointPose()` mit einem [`XRJointSpace`](/de/docs/Web/API/XRJointSpace) und einem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) auf, um ein [`XRJointPose`](/de/docs/Web/API/XRJointPose)-Objekt zu erhalten.

```js
navigator.xr
  .requestSession({ optionalFeatures: ["hand-tracking"] })
  .then(/* … */);

function renderFrame(session, frame) {
  // …

  for (const inputSource of session.inputSources) {
    if (inputSource.hand) {
      const indexFingerTipJoint = inputSource.hand.get("index-finger-tip");
      frame.getJointPose(indexFingerTipJoint, referenceSpace); // XRJointPose
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRHand`](/de/docs/Web/API/XRHand)
- [`XRJointSpace`](/de/docs/Web/API/XRJointSpace)
- [`XRSpace`](/de/docs/Web/API/XRSpace)
