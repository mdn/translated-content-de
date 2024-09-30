---
title: "XRJointPose: radius-Eigenschaft"
short-title: radius
slug: Web/API/XRJointPose/radius
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}

Die schreibgeschützte **`radius`**-Eigenschaft der [`XRJointPose`](/de/docs/Web/API/XRJointPose)-Schnittstelle gibt den Radius (Abstand von der Haut) für ein Gelenk an.

## Wert

Eine Zahl, die den Radius in Metern angibt.

## Beispiele

### Ermitteln des `radius` für ein Handgelenk

Rufen Sie [`XRFrame.getJointPose()`](/de/docs/Web/API/XRFrame/getJointPose) mit einem [`XRJointSpace`](/de/docs/Web/API/XRJointSpace) und einem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) auf, um ein `XRJointPose`-Objekt zu erhalten, das die radius-Eigenschaft bereitstellt.

```js
navigator.xr
  .requestSession({ optionalFeatures: ["hand-tracking"] })
  .then(/** … */);

function renderFrame(session, frame) {
  // …

  for (const inputSource of session.inputSources) {
    if (inputSource.hand) {
      const indexFingerTipJoint = inputSource.hand.get("index-finger-tip");
      const radius = frame.getJointPose(
        indexFingerTipJoint,
        referenceSpace,
      ).radius;
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
- [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)
- [`XRJointSpace`](/de/docs/Web/API/XRJointSpace)
- [`XRFrame.getJointPose()`](/de/docs/Web/API/XRFrame/getJointPose)
