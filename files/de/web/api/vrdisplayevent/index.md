---
title: VRDisplayEvent
slug: Web/API/VRDisplayEvent
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`VRDisplayEvent`** Interface der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert das Ereignisobjekt von WebVR-bezogenen Ereignissen (siehe die [Liste der WebVR-Fenstererweiterungen](/de/docs/Web/API/WebVR_API#window_events)).

> [!NOTE]
> Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Konstruktor

- {{domxref("VRDisplayEvent.VRDisplayEvent", "VRDisplayEvent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt eine Instanz des `VRDisplayEvent`-Objekts.

## Instanz-Eigenschaften

_`VRDisplayEvent` erbt außerdem Eigenschaften von seinem Elternobjekt, {{domxref("Event")}}._

- {{domxref("VRDisplayEvent.display")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Das mit diesem Ereignis verbundene {{domxref("VRDisplay")}}.
- {{domxref("VRDisplayEvent.reason")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein lesbarer Grund, warum das Ereignis ausgelöst wurde.

## Beispiele

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

## Spezifikationen

Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [WebVR auf WebXR portieren von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
