---
title: "VRDisplayEvent: reason Eigenschaft"
short-title: reason
slug: Web/API/VRDisplayEvent/reason
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`reason`** der Schnittstelle [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent) gibt einen menschenlesbaren Grund an, warum das Ereignis ausgelöst wurde.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Wert

Ein String, der den Grund angibt, warum das Ereignis ausgelöst wurde. Die verfügbaren Gründe sind im [`VRDisplayEventReason`](https://w3c.github.io/webvr/spec/1.1/#interface-vrdisplayeventreason) Enum definiert und sind wie folgt:

- `mounted` — Das [`VRDisplay`](/de/docs/Web/API/VRDisplay) hat erkannt, dass der Benutzer es aufgesetzt hat (oder es wurde anderweitig aktiviert).
- `navigation` — Die Seite wurde aus einem Kontext heraus geöffnet, der dieser Seite erlaubt, sofort mit der Präsentation zu beginnen, z.B. von einer anderen Seite, die bereits im VR-Präsentationsmodus war.
- `requested` — Der User-Agent hat angefordert, dass der VR-Präsentationsmodus gestartet wird. Dies ermöglicht es User-Agents, eine konsistente Benutzeroberfläche bereitzustellen, um VR auf verschiedenen Webseiten zu betreten.
- `unmounted` — Das [`VRDisplay`](/de/docs/Web/API/VRDisplay) hat erkannt, dass der Benutzer es abgenommen hat (oder es wurde anderweitig in den Ruhezustand/Standby versetzt).

## Beispiele

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Überleitungsleitfaden von Meta von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
