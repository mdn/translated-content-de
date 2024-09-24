---
title: XRJointSpace
slug: Web/API/XRJointSpace
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}

Das **`XRJointSpace`** Interface ist eine {{domxref("XRSpace")}} und repräsentiert die Position und Orientierung eines Gelenks einer {{domxref("XRHand")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("XRJointSpace.jointName")}} {{ReadOnlyInline}}
  - : Der Name des Gelenks, das verfolgt wird. Siehe {{domxref("XRHand")}} für mögliche Handgelenk-Namen.

## Beispiele

### Verwendung von `XRJointSpace` Objekten

Sie können ein `XRJointSpace` Objekt und einen {{domxref("XRReferenceSpace")}} verwenden, um eine {{domxref("XRJointPose")}} zu erhalten, indem Sie {{domxref("XRFrame.getJointPose()")}} aufrufen.

```js
navigator.xr
  .requestSession({ optionalFeatures: ["hand-tracking"] })
  .then(/** … */);

function renderFrame(session, frame) {
  // …

  for (const inputSource of session.inputSources) {
    if (inputSource.hand) {
      const indexFingerTipJoint = inputSource.hand.get("index-finger-tip"); // XRJointSpace
      indexFingerTipJoint.jointName; // "index-finger-tip"
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
- {{domxref("XRJointPose")}}
- {{domxref("XRFrame.getJointPose()")}}
