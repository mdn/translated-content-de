---
title: "Gamepad: displayId-Eigenschaft"
short-title: displayId
slug: Web/API/Gamepad/displayId
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`displayId`** des {{domxref("Gamepad")}}-Interfaces _gibt die {{domxref("VRDisplay.displayId")}} des zugehörigen {{domxref("VRDisplay")}} zurück – das `VRDisplay`, das die vom Gamepad gesteuerte Szene anzeigt._

Ein Gamepad wird als zugehörig zu einem {{domxref("VRDisplay")}} betrachtet, wenn es eine Pose meldet, die sich im gleichen Raum wie die Pose des Displays befindet, siehe {{domxref("VRDisplay.getPose()")}}.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#gamepad-getvrdisplays-attribute). Sie wurde durch das [WebXR Gamepads Module](https://immersive-web.github.io/webxr-gamepads-module/) abgelöst.
>
> Es gibt keinen direkten Ersatz für diese Eigenschaft. Das mit einer {{domxref("XRInputSource")}} verknüpfte {{domxref("Gamepad")}}-Objekt kann über die {{domxref("XRInputSource.gamepad")}}-Eigenschaft abgerufen werden.

## Wert

Eine Zahl, die die zugehörige {{domxref("VRDisplay.displayId")}} darstellt. Wenn die Zahl 0 ist, dann ist das Gamepad nicht mit einem VR-Display verbunden.

## Beispiele

```js
window.addEventListener("gamepadconnected", (e) => {
  if (!e.gamepad.displayId) {
    console.log("Gamepad verbunden");
  } else {
    console.log(
      `Gamepad verbunden, assoziiert mit VR-Display ${e.gamepad.displayId}`,
    );
  }
});
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#gamepad-getvrdisplays-attribute), die durch das [WebXR Gamepads Module](https://immersive-web.github.io/webxr-gamepads-module/) abgelöst wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)