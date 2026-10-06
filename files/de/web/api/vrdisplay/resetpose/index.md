---
title: "VRDisplay: resetPose()-Methode"
short-title: resetPose()
slug: Web/API/VRDisplay/resetPose
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Methode **`resetPose()`** der Schnittstelle [`VRDisplay`](/de/docs/Web/API/VRDisplay) setzt die Pose des `VRDisplay` zurück. Dabei werden die aktuelle [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) als Ursprungs- bzw. Nullwerte behandelt.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Nachdem `resetPost()` aufgerufen wurde, beschreiben künftig von [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose) oder [`VRDisplay.getImmediatePose()`](/de/docs/Web/API/VRDisplay/getImmediatePose) zurückgegebene Posen Positionen relativ zur Position des `VRDisplay` beim letzten Aufruf von `resetPose()`. Die Gierausrichtung des Displays zum Zeitpunkt dieses Aufrufs gilt dabei als Vorwärtsausrichtung.

Die vom VRDisplay gemeldeten Roll- und Nickwinkel ändern sich beim Aufruf von `resetPose()` nicht, da sie relativ zur Schwerkraft angegeben werden. Ein Aufruf von `resetPose()` kann die Matrix [`VRStageParameters.sittingToStandingTransform`](/de/docs/Web/API/VRStageParameters/sittingToStandingTransform) ändern.

## Syntax

```js-nolint
resetPose()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Assuming vrDisplay already contains a VRDisplay object,
// and we have a <button> referenced inside btn
btn.addEventListener("click", () => {
  vrDisplay.resetPose();
  console.log("Current pose set as origin/center");
});
```

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Eine Standardisierung ist nicht mehr vorgesehen.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
