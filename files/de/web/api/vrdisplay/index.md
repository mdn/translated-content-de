---
title: VRDisplay
slug: Web/API/VRDisplay
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Schnittstelle **`VRDisplay`** der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert jedes von dieser API unterstützte VR-Gerät. Sie stellt allgemeine Informationen wie Geräte-IDs und Beschreibungen bereit sowie Methoden, um die Darstellung einer VR-Szene zu starten, Augenparameter und Anzeigefunktionen abzurufen und weitere wichtige Aufgaben auszuführen.

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Ein Array aller verbundenen VR-Geräte kann durch Aufrufen der Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) abgerufen werden.

## Instanzeigenschaften

- [`VRDisplay.capabilities`](/de/docs/Web/API/VRDisplay/capabilities) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Objekt zurück, das die verschiedenen Funktionen des `VRDisplay` angibt.
- [`VRDisplay.depthFar`](/de/docs/Web/API/VRDisplay/depthFar) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ruft die z-Tiefe ab und legt sie fest. Diese definiert die ferne Ebene des [Sichtfrustums für das Auge](https://en.wikipedia.org/wiki/Viewing_frustum), also die am weitesten entfernte sichtbare Grenze der Szene.
- [`VRDisplay.depthNear`](/de/docs/Web/API/VRDisplay/depthNear) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ruft die z-Tiefe ab und legt sie fest. Diese definiert die nahe Ebene des [Sichtfrustums für das Auge](https://en.wikipedia.org/wiki/Viewing_frustum), also die nächstgelegene sichtbare Grenze der Szene.
- [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Kennung für dieses `VRDisplay` zurück, die auch zur Zuordnung in der [Gamepad API](/de/docs/Web/API/Gamepad_API) verwendet wird (siehe [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId)).
- [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen für Menschen lesbaren Namen zur Identifizierung des `VRDisplay` zurück.
- [`VRDisplay.isConnected`](/de/docs/Web/API/VRDisplay/isConnected) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das `VRDisplay` mit dem Computer verbunden ist.
- [`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob über das `VRDisplay` derzeit Inhalte dargestellt werden.
- [`VRDisplay.stageParameters`](/de/docs/Web/API/VRDisplay/stageParameters) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Objekt mit Parametern für raumfüllende VR-Erlebnisse zurück, sofern das `VRDisplay` solche Erlebnisse unterstützt.

## Instanzmethoden

- [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt das [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Objekt mit den Augenparametern für das angegebene Auge zurück.
- [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Nimmt ein [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt entgegen und befüllt es mit den Informationen, die zum Rendern des aktuellen Frames erforderlich sind.
- [`VRDisplay.getImmediatePose()`](/de/docs/Web/API/VRDisplay/getImmediatePose) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt zurück, das die aktuelle Position und Ausrichtung des `VRDisplay` ohne angewendete Vorhersage beschreibt. Diese Methode wird nicht mehr benötigt und wurde aus der Spezifikation entfernt.
- [`VRDisplay.getLayers()`](/de/docs/Web/API/VRDisplay/getLayers) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die Ebenen zurück, die derzeit vom `VRDisplay` dargestellt werden.
- [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt zurück, das die vorhergesagte zukünftige Position und Ausrichtung des `VRDisplay` zum Zeitpunkt der tatsächlichen Darstellung des aktuellen Frames beschreibt. **Diese Methode ist veraltet. Verwenden Sie stattdessen [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData), das ebenfalls ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt bereitstellt.**
- [`VRDisplay.resetPose()`](/de/docs/Web/API/VRDisplay/resetPose) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Setzt die Position und Ausrichtung dieses `VRDisplay` zurück, indem die aktuellen Werte von [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) als Ursprungs- beziehungsweise Nullwerte behandelt werden.
- [`VRDisplay.cancelAnimationFrame()`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine spezielle Implementierung von [`Window.cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame), mit der sich über [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) registrierte Callback-Funktionen wieder abmelden lassen.
- [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine spezielle Implementierung von [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame), die eine Callback-Funktion entgegennimmt. Diese wird jedes Mal aufgerufen, wenn ein neuer Frame für die Darstellung durch das `VRDisplay` gerendert wird.
- [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Startet die Darstellung einer Szene durch das `VRDisplay`.
- [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Beendet die Darstellung einer Szene durch das `VRDisplay`.
- [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erfasst den aktuellen Zustand des derzeit dargestellten [`VRLayerInit`](/de/docs/Web/API/VRLayerInit) und zeigt ihn auf dem `VRDisplay` an.

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
> Den vollständigen Code finden Sie unter [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js).

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
