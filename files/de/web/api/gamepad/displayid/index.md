---
title: "Gamepad: displayId-Eigenschaft"
short-title: displayId
slug: Web/API/Gamepad/displayId
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`displayId`**-Eigenschaft der [`Gamepad`](/de/docs/Web/API/Gamepad)-Schnittstelle ist eine schreibgeschützte Eigenschaft und gibt die [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) des zugehörigen [`VRDisplay`](/de/docs/Web/API/VRDisplay) zurück — das `VRDisplay`, das die angezeigte Szene steuert, in der das Gamepad verwendet wird.

Ein Gamepad wird als mit einem [`VRDisplay`](/de/docs/Web/API/VRDisplay) verbunden betrachtet, wenn es eine Pose berichtet, die sich im gleichen Raum wie die Pose des Displays befindet, siehe [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose).

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#gamepad-getvrdisplays-attribute). Sie wurde durch das [WebXR Gamepads Module](https://immersive-web.github.io/webxr-gamepads-module/) ersetzt.
>
> Es gibt keinen direkten Ersatz für diese Eigenschaft. Das mit einer [`XRInputSource`](/de/docs/Web/API/XRInputSource) verbundene [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt kann über die [`XRInputSource.gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft abgerufen werden.

## Wert

Eine Zahl, die die zugehörige [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) darstellt. Wenn die Zahl 0 ist, ist das Gamepad nicht mit einem VR-Display verbunden.

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

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#gamepad-getvrdisplays-attribute), die durch das [WebXR Gamepads Module](https://immersive-web.github.io/webxr-gamepads-module/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zum Portieren von WebVR nach WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
