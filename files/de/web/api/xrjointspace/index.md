---
title: XRJointSpace
slug: Web/API/XRJointSpace
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}

Die **`XRJointSpace`**-Schnittstelle ist ein [`XRSpace`](/de/docs/Web/API/XRSpace) und repräsentiert die Position und Ausrichtung eines [`XRHand`](/de/docs/Web/API/XRHand)-Gelenks.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`XRJointSpace.jointName`](/de/docs/Web/API/XRJointSpace/jointName) {{ReadOnlyInline}}
  - : Der Name des verfolgten Gelenks. Siehe [`XRHand`](/de/docs/Web/API/XRHand) für mögliche Namen von Handgelenken.

## Beispiele

### Verwendung von `XRJointSpace`-Objekten

Sie können ein `XRJointSpace`-Objekt und ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) verwenden, um eine [`XRJointPose`](/de/docs/Web/API/XRJointPose) zu erhalten, indem Sie [`XRFrame.getJointPose()`](/de/docs/Web/API/XRFrame/getJointPose) aufrufen.

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

- [`XRHand`](/de/docs/Web/API/XRHand)
- [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)
- [`XRJointPose`](/de/docs/Web/API/XRJointPose)
- [`XRFrame.getJointPose()`](/de/docs/Web/API/XRFrame/getJointPose)
