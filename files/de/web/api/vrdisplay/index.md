---
title: VRDisplay
slug: Web/API/VRDisplay
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Das **`VRDisplay`** Interface der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert jedes VR-Gerät, das von dieser API unterstützt wird. Es enthält allgemeine Informationen wie Geräte-IDs und Beschreibungen sowie Methoden zum Starten der Präsentation einer VR-Szene, Abrufen von Augenparametern und Anzeigeeigenschaften und anderen wichtigen Funktionen.

> [!NOTE]
> Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Ein Array aller angeschlossenen VR-Geräte kann durch Aufruf der Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) zurückgegeben werden.

## Instanz-Eigenschaften

- [`VRDisplay.capabilities`](/de/docs/Web/API/VRDisplay/capabilities) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Objekt zurück, das die verschiedenen Fähigkeiten des `VRDisplay` anzeigt.
- [`VRDisplay.depthFar`](/de/docs/Web/API/VRDisplay/depthFar) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ruft die z-Tiefe ab und legt diese fest, die die Fernebene des [Frustums des Augenblicks](https://en.wikipedia.org/wiki/Viewing_frustum) definiert, d.h. die am weitesten sichtbare Grenze der Szene.
- [`VRDisplay.depthNear`](/de/docs/Web/API/VRDisplay/depthNear) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ruft die z-Tiefe ab und legt diese fest, die die Nahebene des [Frustums des Augenblicks](https://en.wikipedia.org/wiki/Viewing_frustum) definiert, d.h. die am nächsten sichtbare Grenze der Szene.
- [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen Bezeichner für dieses spezielle `VRDisplay` zurück, der auch als Verknüpfungspunkt in der [Gamepad API](/de/docs/Web/API/Gamepad_API) verwendet wird (siehe [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId)).
- [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen menschenlesbaren Namen zurück, um das `VRDisplay` zu identifizieren.
- [`VRDisplay.isConnected`](/de/docs/Web/API/VRDisplay/isConnected) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das `VRDisplay` mit dem Computer verbunden ist.
- [`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das `VRDisplay` derzeit Inhalte präsentiert.
- [`VRDisplay.stageParameters`](/de/docs/Web/API/VRDisplay/stageParameters) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Objekt zurück, das Raummaßstab-Parameter enthält, wenn das `VRDisplay` in der Lage ist, Erlebnisse im Raummaßstab zu unterstützen.

## Instanz-Methoden

- [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt das [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Objekt zurück, das die Augenparameter für das angegebene Auge enthält.
- [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Akzeptiert ein [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt und füllt es mit den Informationen, die erforderlich sind, um das aktuelle Bild darzustellen.
- [`VRDisplay.getImmediatePose()`](/de/docs/Web/API/VRDisplay/getImmediatePose) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt zurück, das die aktuelle Pose des `VRDisplay` definiert, ohne Vorhersage angewendet. Dies ist nicht mehr notwendig und wurde aus der Spezifikation entfernt.
- [`VRDisplay.getLayers()`](/de/docs/Web/API/VRDisplay/getLayers) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die aktuell vom `VRDisplay` präsentierten Ebenen zurück.
- [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt zurück, das die zukünftige vorhergesagte Pose des `VRDisplay` definiert, wie sie sein wird, wenn das aktuelle Bild tatsächlich präsentiert wird. **Diese Methode ist veraltet — stattdessen sollten Sie [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) verwenden, das ebenfalls ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt bereitstellt.**
- [`VRDisplay.resetPose()`](/de/docs/Web/API/VRDisplay/resetPose) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Setzt die Pose für dieses `VRDisplay` zurück und behandelt dessen aktuelle [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) als "Ursprungs-/Nullwerte".
- [`VRDisplay.cancelAnimationFrame()`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine spezielle Implementierung von [`Window.cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame), die es ermöglicht, Rückrufe, die mit [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) registriert wurden, abzumelden.
- [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine spezielle Implementierung von [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame), die eine Rückruffunktion enthält, die jedes Mal aufgerufen wird, wenn ein neues Bild der `VRDisplay`-Präsentation gerendert wird.
- [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Beginnt mit der Präsentation einer Szene durch das `VRDisplay`.
- [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Beendet die Präsentation einer Szene durch das `VRDisplay`.
- [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erfasst den aktuellen Zustand des derzeit präsentierten [`VRLayerInit`](/de/docs/Web/API/VRLayerInit) und zeigt ihn auf dem `VRDisplay` an.

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
> Sie können diesen vollständigen Code im [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) einsehen.

## Spezifikationen

Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden "Meta's Porting from WebVR to WebXR"](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
