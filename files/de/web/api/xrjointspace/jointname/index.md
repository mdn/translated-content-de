---
title: "XRJointSpace: jointName-Eigenschaft"
short-title: jointName
slug: Web/API/XRJointSpace/jointName
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}

Die schreibgeschützte **`jointName`**-Eigenschaft der {{domxref("XRJointSpace")}}-Schnittstelle enthält den Namen des Gelenks, das sie verfolgt.

## Wert

Ein String, der den Namen des Gelenks angibt. Siehe die Liste der Handgelenke auf der {{domxref("XRHand")}}-Seite.

## Beispiele

### Erhalten des `jointName`

Bei einem `XRJointSpace` enthält die `jointName`-Eigenschaft den Namen des Handgelenks.

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
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("XRHand")}}
