---
title: "XRJointPose: radius-Eigenschaft"
short-title: radius
slug: Web/API/XRJointPose/radius
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}

Die schreibgeschützte **`radius`**-Eigenschaft des {{domxref("XRJointPose")}}-Interfaces gibt den Radius (Abstand von der Haut) für ein Gelenk an.

## Wert

Eine Zahl, die den Radius in Metern angibt.

## Beispiele

### Abrufen des `radius` für ein Handgelenk

Rufen Sie {{domxref("XRFrame.getJointPose()")}} mit einem {{domxref("XRJointSpace")}} und einem {{domxref("XRReferenceSpace")}} auf, um ein `XRJointPose`-Objekt zu erhalten, das die Radius-Eigenschaft bereitstellt.

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

- {{domxref("XRHand")}}
- {{domxref("XRReferenceSpace")}}
- {{domxref("XRJointSpace")}}
- {{domxref("XRFrame.getJointPose()")}}
