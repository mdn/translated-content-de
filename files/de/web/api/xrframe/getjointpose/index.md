---
title: "XRFrame: Methode getJointPose()"
short-title: getJointPose()
slug: Web/API/XRFrame/getJointPose
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getJointPose()`**-Methode des {{domxref("XRFrame")}}-Interfaces gibt ein {{domxref("XRJointPose")}}-Objekt zurück, das die Pose eines Handgelenks (siehe {{domxref("XRHand")}}) relativ zu einem gegebenen Basisspace bereitstellt.

## Syntax

```js-nolint
getJointPose(joint, baseSpace)
```

### Parameter

- `joint`
  - : Ein {{domxref("XRJointSpace")}}, das den Raum des Handgelenks angibt, für den eine {{domxref("XRJointPose")}} angefordert wird, die die Position und Orientierung des Elements beschreibt.
- `baseSpace`
  - : Ein {{domxref("XRSpace")}}, der als Basis oder Ursprung für die relative Position und Orientierung verwendet wird.

### Rückgabewert

Ein {{domxref("XRJointPose")}}-Objekt, das die Position und Orientierung des Handgelenks angibt, relativ zu dem {{domxref("XRSpace")}}, der durch `baseSpace` angegeben ist.

## Beispiele

### Verwendung von `getJointPose()`

Rufen Sie `getJointPose()` mit einem {{domxref("XRJointSpace")}} und einem {{domxref("XRReferenceSpace")}} auf, um ein {{domxref("XRJointPose")}}-Objekt zu erhalten.

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
- {{domxref("XRJointSpace")}}
- {{domxref("XRSpace")}}
