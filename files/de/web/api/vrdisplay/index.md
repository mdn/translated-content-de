---
title: VRDisplay
slug: Web/API/VRDisplay
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`VRDisplay`** Interface der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert jedes VR-Gerät, das von dieser API unterstützt wird. Es umfasst generische Informationen wie Geräte-IDs und Beschreibungen sowie Methoden zum Starten der Darstellung einer VR-Szene, zum Abrufen von Augenparametern und Anzeigeeigenschaften und anderer wichtiger Funktionen.

> [!NOTE]
> Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Ein Array aller angeschlossenen VR-Geräte kann durch Aufrufen der Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) zurückgegeben werden.

## Instanz-Eigenschaften

- [`VRDisplay.capabilities`](/de/docs/Web/API/VRDisplay/capabilities) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities) Objekt zurück, das die verschiedenen Fähigkeiten des `VRDisplay` anzeigt.
- [`VRDisplay.depthFar`](/de/docs/Web/API/VRDisplay/depthFar) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ermittelt und setzt die z-Tiefe, die die Fernebene des [Blickfelds](https://en.wikipedia.org/wiki/Viewing_frustum) definiert, d.h. die am weitesten sichtbare Grenze der Szene.
- [`VRDisplay.depthNear`](/de/docs/Web/API/VRDisplay/depthNear) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ermittelt und setzt die z-Tiefe, die die Nahebenene des [Blickfelds](https://en.wikipedia.org/wiki/Viewing_frustum) definiert, d.h. die nächstgelegene sichtbare Grenze der Szene.
- [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Kennung für dieses spezielle VRDisplay zurück, die auch als Assoziationspunkt in der [Gamepad API](/de/docs/Web/API/Gamepad_API) verwendet wird (siehe [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId)).
- [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen lesbaren Namen zurück, um das `VRDisplay` zu identifizieren.
- [`VRDisplay.isConnected`](/de/docs/Web/API/VRDisplay/isConnected) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das `VRDisplay` mit dem Computer verbunden ist.
- [`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das `VRDisplay` derzeit Inhalte präsentiert.
- [`VRDisplay.stageParameters`](/de/docs/Web/API/VRDisplay/stageParameters) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein [`VRStageParameters`](/de/docs/Web/API/VRStageParameters) Objekt zurück, das Raummaßstab-Parameter enthält, wenn das `VRDisplay` in der Lage ist, Erfahrungen im Raummaßstab zu unterstützen.

## Instanz-Methoden

- [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt das [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) Objekt zurück, das die Augenparameter für das angegebene Auge enthält.
- [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Akzeptiert ein [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt und füllt es mit den Informationen, die zum Rendern des aktuellen Frames erforderlich sind.
- [`VRDisplay.getImmediatePose()`](/de/docs/Web/API/VRDisplay/getImmediatePose) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein [`VRPose`](/de/docs/Web/API/VRPose) Objekt zurück, das die aktuelle Pose des `VRDisplay` definiert, ohne Vorhersage angewendet. Dies wird nicht mehr benötigt und wurde aus der Spezifikation entfernt.
- [`VRDisplay.getLayers()`](/de/docs/Web/API/VRDisplay/getLayers) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die Schichten zurück, die derzeit vom `VRDisplay` dargestellt werden.
- [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein [`VRPose`](/de/docs/Web/API/VRPose) Objekt zurück, das die vorhergesagte zukünftige Pose des `VRDisplay` definiert, wie sie sein wird, wenn der aktuelle Frame tatsächlich präsentiert wird. **Diese Methode ist veraltet — stattdessen sollten Sie [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) verwenden, das ebenfalls ein [`VRPose`](/de/docs/Web/API/VRPose) Objekt bereitstellt.**
- [`VRDisplay.resetPose()`](/de/docs/Web/API/VRDisplay/resetPose) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Setzt die Pose für dieses `VRDisplay` zurück und behandelt dessen aktuelle [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) als "Ursprung/Null"-Werte.
- [`VRDisplay.cancelAnimationFrame()`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine spezielle Implementierung von [`Window.cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame), die es erlaubt, Rückrufe, die mit [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) registriert wurden, abzumelden.
- [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine spezielle Implementierung von [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame), die eine Rückruffunktion enthält, die jedes Mal aufgerufen wird, wenn ein neuer Frame der `VRDisplay` Präsentation gerendert wird.
- [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Startet die Präsentation einer Szene mit dem `VRDisplay`.
- [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Beendet die Präsentation einer Szene mit dem `VRDisplay`.
- [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erfasst den aktuellen Zustand des [`VRLayerInit`](/de/docs/Web/API/VRLayerInit), der derzeit präsentiert wird, und zeigt ihn auf dem `VRDisplay` an.

## Beispiele

```js
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then((displays) => {
    // If a display is available, use it to present the scene
    if (displays.length > 0) {
      vrDisplay = displays[0];
      // Now we have our VRDisplay object and can do what we want with it
    }
  });
}
```

> [!NOTE]
> Sie können diesen kompletten Code im [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) sehen.

## Spezifikationen

Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg dazu, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die auf allen Browsern funktionieren. Lesen Sie [Metas Anleitung zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
