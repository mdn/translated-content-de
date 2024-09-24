---
title: "VRDisplayEvent: reason-Eigenschaft"
short-title: reason
slug: Web/API/VRDisplayEvent/reason
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`reason`**-Eigenschaft des {{domxref("VRDisplayEvent")}}-Interfaces gibt einen menschenlesbaren Grund an, warum das Ereignis ausgelöst wurde.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein String, der den Grund angibt, warum das Ereignis ausgelöst wurde. Die verfügbaren Gründe sind im [`VRDisplayEventReason`](https://w3c.github.io/webvr/spec/1.1/#interface-vrdisplayeventreason)-Enum definiert und sind wie folgt:

- `mounted` — Die {{domxref("VRDisplay")}} hat erkannt, dass der Benutzer es aufgesetzt hat (oder es wurde anderweitig aktiviert).
- `navigation` — Die Seite wurde aus einem Kontext heraus aufgerufen, der es dieser Seite ermöglicht, sofort mit der Präsentation zu beginnen, zum Beispiel von einer anderen Seite, die bereits im VR-Präsentationsmodus war.
- `requested` — Der Benutzeragent hat angefordert, dass der VR-Präsentationsmodus gestartet wird. Dies ermöglicht es Benutzeragenten, eine konsistente Benutzeroberfläche zum Betreten von VR über verschiedene Seiten hinweg bereitzustellen.
- `unmounted` — Die {{domxref("VRDisplay")}} hat erkannt, dass der Benutzer es abgenommen hat (oder es wurde anderweitig in den Ruhezustand versetzt/standby geschaltet).

## Beispiele

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Das Display ${e.display.displayId} Präsentation hat sich geändert. Angegebener Grund: ${e.reason}.`,
  );
});
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie die Anleitung [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
