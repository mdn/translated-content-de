---
title: "VRDisplay: isPresenting-Eigenschaft"
short-title: isPresenting
slug: Web/API/VRDisplay/isPresenting
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`isPresenting`** schreibgeschützte Eigenschaft des {{domxref("VRDisplay")}}-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob der `VRDisplay` derzeit Inhalte präsentiert.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Wert

Ein boolescher Wert; `true` bedeutet, das Display präsentiert; `false` bedeutet, es präsentiert nicht.

## Beispiele

```js
function onVRExitPresent() {
  // Kein Sinn, die Präsentation zu beenden, wenn wir nicht tatsächlich präsentieren.
  // (Dies kann passieren, wenn wir ein Ereignis wie vrdisplaydeactivate erhalten,
  // während wir nicht präsentiert haben.)
  if (!vrDisplay.isPresenting) return;
  vrDisplay.exitPresent().then(
    () => {
      // Nichts zu tun, da wir die Dinge in onVRPresentChange behandeln.
    },
    (err) => {
      let errMsg = "exitPresent failed.";
      if (err && err.message) {
        errMsg += `<br/>${err.message}`;
      }
      VRSamplesUtil.addError(errMsg, 2000);
    },
  );
}
```

> [!NOTE]
> Code-Snippet aus [Googles VR-Präsentationsdemo](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html) entnommen.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Solange noch nicht alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Metas Porting von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
