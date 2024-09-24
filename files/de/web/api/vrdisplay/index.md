---
title: VRDisplay
slug: Web/API/VRDisplay
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`VRDisplay`**-Interface der [WebVR-API](/de/docs/Web/API/WebVR_API) repräsentiert jedes VR-Gerät, das von dieser API unterstützt wird. Es enthält allgemeine Informationen wie Geräte-IDs und Beschreibungen sowie Methoden zum Starten der Darstellung einer VR-Szene, Abrufen von Augenparametern und Anzeigeoptionen und anderer wichtiger Funktionalitäten.

> [!NOTE]
> Dieses Interface war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR-Device-API](https://immersive-web.github.io/webxr/) ersetzt.

Ein Array aller angeschlossenen VR-Geräte kann durch Aufruf der Methode {{domxref("Navigator.getVRDisplays()")}} zurückgegeben werden.

## Instanz-Eigenschaften

- {{domxref("VRDisplay.capabilities")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein {{domxref("VRDisplayCapabilities")}}-Objekt zurück, das die verschiedenen Fähigkeiten des `VRDisplay` angibt.
- {{domxref("VRDisplay.depthFar")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Holt und setzt die z-Tiefe, die die Fernebene des [Augenansichtsfrustrums](https://en.wikipedia.org/wiki/Viewing_frustum) definiert, also die am weitesten sichtbare Grenze der Szene.
- {{domxref("VRDisplay.depthNear")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Holt und setzt die z-Tiefe, die die Nahebene des [Augenansichtsfrustrums](https://en.wikipedia.org/wiki/Viewing_frustum) definiert, also die nächste sichtbare Grenze der Szene.
- {{domxref("VRDisplay.displayId")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen Bezeichner für dieses bestimmte VRDisplay zurück, der auch als Verbindungspunkt in der [Gamepad-API](/de/docs/Web/API/Gamepad_API) verwendet wird (siehe {{domxref("Gamepad.displayId")}}).
- {{domxref("VRDisplay.displayName")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen menschenlesbaren Namen zurück, um das `VRDisplay` zu identifizieren.
- {{domxref("VRDisplay.isConnected")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das `VRDisplay` mit dem Computer verbunden ist.
- {{domxref("VRDisplay.isPresenting")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das `VRDisplay` derzeit Inhalte darstellt.
- {{domxref("VRDisplay.stageParameters")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein {{domxref("VRStageParameters")}}-Objekt zurück, das raumbezogene Parameter enthält, wenn das `VRDisplay` in der Lage ist, raumgroße Erlebnisse zu unterstützen.

## Instanz-Methoden

- {{domxref("VRDisplay.getEyeParameters()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt das {{domxref("VREyeParameters")}}-Objekt zurück, das die Augenparameter für das angegebene Auge enthält.
- {{domxref("VRDisplay.getFrameData()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Nimmt ein {{domxref("VRFrameData")}}-Objekt entgegen und füllt es mit den Informationen, die zum Rendern des aktuellen Rahmens erforderlich sind.
- {{domxref("VRDisplay.getImmediatePose()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein {{domxref("VRPose")}}-Objekt zurück, das die aktuelle Pose des `VRDisplay` ohne angewandte Vorhersage definiert. Dies ist nicht mehr erforderlich und wurde aus der Spezifikation entfernt.
- {{domxref("VRDisplay.getLayers()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die derzeit vom `VRDisplay` dargestellten Schichten zurück.
- {{domxref("VRDisplay.getPose()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein {{domxref("VRPose")}}-Objekt zurück, das die zukünftige vorhergesagte Pose des `VRDisplay` definiert, wie sie sein wird, wenn der aktuelle Rahmen tatsächlich dargestellt wird. **Diese Methode ist veraltet — stattdessen sollten Sie {{domxref("VRDisplay.getFrameData()")}} verwenden, das ebenfalls ein {{domxref("VRPose")}}-Objekt bereitstellt.**
- {{domxref("VRDisplay.resetPose()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Setzt die Pose für dieses `VRDisplay` zurück und behandelt die aktuelle {{domxref("VRPose.position")}} und {{domxref("VRPose.orientation")}} als "Ursprung/Null"-Werte.
- {{domxref("VRDisplay.cancelAnimationFrame()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine spezielle Implementierung von {{domxref("Window.cancelAnimationFrame")}}, die es ermöglicht, Rückrufe zu deregistrieren, die mit {{domxref("VRDisplay.requestAnimationFrame()")}} registriert wurden.
- {{domxref("VRDisplay.requestAnimationFrame()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine spezielle Implementierung von {{domxref("Window.requestAnimationFrame")}}, die eine Rückruffunktion enthält, die jedes Mal aufgerufen wird, wenn ein neuer Rahmen der `VRDisplay`-Präsentation gerendert wird.
- {{domxref("VRDisplay.requestPresent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Startet das `VRDisplay`, um eine Szene darzustellen.
- {{domxref("VRDisplay.exitPresent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Stoppt das `VRDisplay`, um eine Szene darzustellen.
- {{domxref("VRDisplay.submitFrame()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erfasst den aktuellen Zustand des zurzeit dargestellten {{domxref("VRLayerInit")}} und zeigt ihn auf dem `VRDisplay` an.

## Beispiele

```js
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 unterstützt");
  // Dann die an den Computer angeschlossenen Displays abrufen
  navigator.getVRDisplays().then((displays) => {
    // Wenn ein Display verfügbar ist, verwenden Sie es, um die Szene darzustellen
    if (displays.length > 0) {
      vrDisplay = displays[0];
      // Jetzt haben wir unser VRDisplay-Objekt und können damit machen, was wir wollen
    }
  });
}
```

> [!NOTE]
> Sie können diesen vollständigen Code in [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) sehen.

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay), die durch die [WebXR-Device-API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
