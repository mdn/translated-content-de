---
title: XRJointPose
slug: Web/API/XRJointPose
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}

Das **`XRJointPose`**-Interface ist ein {{domxref("XRPose")}} mit zusätzlichen Informationen über die Größe des repräsentierten Skelettgelenks.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("XRJointPose.radius")}} {{ReadOnlyInline}}
  - : Der Radius (Abstand von der Haut) für ein Gelenk.

## Beispiele

### Verwenden von `XRJointPose`-Objekten

Rufen Sie {{domxref("XRFrame.getJointPose()")}} mit einem {{domxref("XRJointSpace")}} und einem {{domxref("XRReferenceSpace")}} auf, um ein `XRJointPose`-Objekt zu erhalten.

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

- {{domxref("XRHand")}}
- {{domxref("XRReferenceSpace")}}
- {{domxref("XRJointSpace")}}
- {{domxref("XRFrame.getJointPose()")}}
