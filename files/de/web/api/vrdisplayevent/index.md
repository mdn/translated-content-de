---
title: VRDisplayEvent
slug: Web/API/VRDisplayEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Das **`VRDisplayEvent`**-Interface der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert das Ereignisobjekt von WebVR-bezogenen Ereignissen (sehen Sie die [Liste der WebVR-Fenstererweiterungen](/de/docs/Web/API/WebVR_API#window_events)).

> [!NOTE]
> Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Konstruktor

- [`VRDisplayEvent()`](/de/docs/Web/API/VRDisplayEvent/VRDisplayEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erzeugt eine Instanz eines `VRDisplayEvent`-Objekts.

## Instanz-Eigenschaften

_`VRDisplayEvent` erbt auch Eigenschaften von seinem übergeordneten Objekt, [`Event`](/de/docs/Web/API/Event)._

- [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Das mit diesem Ereignis assoziierte [`VRDisplay`](/de/docs/Web/API/VRDisplay).
- [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein für den Menschen lesbarer Grund, warum das Ereignis ausgelöst wurde.

## Beispiele

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

## Spezifikationen

Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta für den Umstieg von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
