---
title: "VRDisplay: resetPose()-Methode"
short-title: resetPose()
slug: Web/API/VRDisplay/resetPose
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`resetPose()`**-Methode des [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Interfaces setzt die Pose für das `VRDisplay` zurück und behandelt die aktuelle [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) als "Ursprung/Null"-Werte.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Nachdem `resetPose()` aufgerufen wurde, beschreiben zukünftige Posen, die von [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose)/[`VRDisplay.getImmediatePose()`](/de/docs/Web/API/VRDisplay/getImmediatePose) zurückgegeben werden, Positionen relativ zu der Position des `VRDisplay`, als `resetPose()` zuletzt aufgerufen wurde und behandeln die Yaw-Lage des Displays zu diesem Zeitpunkt als Vorwärtsausrichtung.

Der vom VRDisplay gemeldete Roll- und Pitch-Wert ändert sich nicht, wenn `resetPose()` aufgerufen wird, da sie relativ zur Schwerkraft sind. Der Aufruf von `resetPose()` kann die Matrix [`VRStageParameters.sittingToStandingTransform`](/de/docs/Web/API/VRStageParameters/sittingToStandingTransform) verändern.

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

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Anleitung zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
