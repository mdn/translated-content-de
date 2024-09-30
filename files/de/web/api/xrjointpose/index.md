---
title: XRJointPose
slug: Web/API/XRJointPose
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}

Die **`XRJointPose`**-Schnittstelle ist ein [`XRPose`](/de/docs/Web/API/XRPose) mit zusätzlichen Informationen über die Größe des Skelettgelenks, das sie darstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`XRJointPose.radius`](/de/docs/Web/API/XRJointPose/radius) {{ReadOnlyInline}}
  - : Der Radius (Abstand von der Haut) eines Gelenks.

## Beispiele

### Verwendung von `XRJointPose`-Objekten

Rufen Sie [`XRFrame.getJointPose()`](/de/docs/Web/API/XRFrame/getJointPose) mit einem [`XRJointSpace`](/de/docs/Web/API/XRJointSpace) und einem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) auf, um ein `XRJointPose`-Objekt zu erhalten.

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
- [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)
- [`XRJointSpace`](/de/docs/Web/API/XRJointSpace)
- [`XRFrame.getJointPose()`](/de/docs/Web/API/XRFrame/getJointPose)
