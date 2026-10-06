---
title: "Gamepad: displayId-Eigenschaft"
short-title: displayId
slug: Web/API/Gamepad/displayId
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`displayId`** des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces _gibt die [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) des zugehörigen [`VRDisplay`](/de/docs/Web/API/VRDisplay) zurück – also des `VRDisplay`, dessen angezeigte Szene das Gamepad steuert._

Ein Gamepad gilt als einem [`VRDisplay`](/de/docs/Web/API/VRDisplay) zugeordnet, wenn es eine Pose meldet, die sich im selben Raum wie die Pose des Displays befindet. Siehe [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose).

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#gamepad-getvrdisplays-attribute). Sie wurde durch das [WebXR Gamepads Module](https://immersive-web.github.io/webxr-gamepads-module/) abgelöst.
>
> Für diese Eigenschaft gibt es keinen direkten Ersatz. Das einem [`XRInputSource`](/de/docs/Web/API/XRInputSource) zugeordnete [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt kann über die Eigenschaft [`XRInputSource.gamepad`](/de/docs/Web/API/XRInputSource/gamepad) abgerufen werden.

## Wert

Eine Zahl, die die zugehörige [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) angibt. Ist die Zahl 0, ist das Gamepad keinem VR-Display zugeordnet.

## Beispiele

```js
window.addEventListener("gamepadconnected", (e) => {
  if (!e.gamepad.displayId) {
    console.log("Gamepad connected");
  } else {
    console.log(
      `Gamepad connected, associated with VR display ${e.gamepad.displayId}`,
    );
  }
});
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#gamepad-getvrdisplays-attribute), die durch das [WebXR Gamepads Module](https://immersive-web.github.io/webxr-gamepads-module/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
