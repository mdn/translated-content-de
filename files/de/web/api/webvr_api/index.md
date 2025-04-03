---
title: WebVR API
slug: Web/API/WebVR_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}{{Non-standard_header}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. Die WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine geringe Anzahl von Geräten.

Die WebVR-API bietet Unterstützung für die Darstellung von Virtual-Reality-Geräten — zum Beispiel Head-Mounted Displays wie Oculus Rift oder HTC Vive — in Webanwendungen. Dadurch können Entwickler Positions- und Bewegungsinformationen vom Display in Bewegung innerhalb einer 3D-Szene übersetzen. Dies hat zahlreiche interessante Anwendungen, von virtuellen Produktführungen und interaktiven Schulungs-Apps bis hin zu immersiven Ego-Shootern.

## Konzepte und Verwendung

Alle an Ihren Computer angeschlossenen VR-Geräte werden von der Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) zurückgegeben; jedes wird durch ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt repräsentiert.

![Skizze einer Person auf einem Stuhl, die eine Brille trägt, die mit "Head mounted display (HMD)" beschriftet ist und auf einen Monitor mit einer Webcam blickt, die mit "Position sensor" beschriftet ist](hw-setup.png)

[`VRDisplay`](/de/docs/Web/API/VRDisplay) ist die zentrale Schnittstelle der WebVR API — über ihre Eigenschaften und Methoden können Sie auf folgende Funktionen zugreifen:

- Abrufen nützlicher Informationen, um das Display zu identifizieren, welche Fähigkeiten es hat, welche Controller damit verbunden sind und mehr.
- Abrufen von [Frame-Daten](/de/docs/Web/API/VRFrameData) für jeden Frame, den Sie in einem Display präsentieren möchten, und Einreichung dieser Frames zur Anzeige in einer konsistenten Rate.
- Start und Stopp der Wiedergabe auf dem Display.

Eine typische (einfache) WebVR-App würde so funktionieren:

1. Mit [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) erhalten Sie eine Referenz zu Ihrem VR-Display.
2. Mit [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) beginnen Sie, auf dem VR-Display zu präsentieren.
3. Die spezielle Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) von WebVR wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholrate für das Display auszuführen.
4. In der Rendering-Schleife holen Sie die Daten ab, die benötigt werden, um den aktuellen Frame anzuzeigen ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die dargestellte Szene zweimal — einmal für die Ansicht in jedem Auge, und dann überreichen Sie die gerenderte Ansicht an das Display, um sie dem Benutzer zu zeigen ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

Darüber hinaus fügt WebVR 1.1 eine Reihe von Ereignissen am [`Window`](/de/docs/Web/API/Window)-Objekt hinzu, um es JavaScript zu ermöglichen, auf Statusänderungen des Displays zu reagieren.

> [!NOTE]
> Erfahren Sie mehr darüber, wie die API funktioniert, in unseren Artikeln [Verwendung der WebVR-API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) und [WebVR-Konzepte](/de/docs/Web/API/WebVR_API/Concepts).

### API-Verfügbarkeit

Die WebVR API, die nie als Web-Standard ratifiziert wurde, wurde zugunsten der [WebXR API](/de/docs/Web/API/WebXR_Device_API) veraltet, die gut auf dem Weg ist, den Standardisierungsprozess abzuschließen. Daher sollten Sie versuchen, bestehenden Code zu aktualisieren, um stattdessen die neuere API zu verwenden. In der Regel sollte der Übergang ziemlich schmerzlos sein.

Zudem erfordert WebVR auf einigen Geräten und/oder Browsern, dass die Seite in einem sicheren Kontext über eine HTTPS-Verbindung geladen wird. Wenn die Seite nicht vollständig sicher ist, sind die WebVR-Methoden und -Funktionen nicht verfügbar. Sie können dies leicht testen, indem Sie prüfen, ob die [`Navigator`](/de/docs/Web/API/Navigator)-Methode [`getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) `NULL` ist:

```js
if (!navigator.getVRDisplays) {
  console.error("WebVR is not available");
} else {
  /* Use WebVR */
}
```

### Verwendung von Controllern: Kombination von WebVR mit der Gamepad-API

Viele WebVR-Hardware-Setups verfügen über Controller, die mit dem Headset verwendet werden. Diese können in WebVR-Apps über die [Gamepad-API](/de/docs/Web/API/Gamepad_API) und insbesondere die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) verwendet werden, die API-Funktionen zum Zugriff auf [Controller-Posen](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt.

> [!NOTE]
> Unser Artikel [Verwendung von VR-Controllern mit WebVR](/de/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) erklärt die Grundlagen, wie man VR-Controller mit WebVR-Apps verwendet.

## WebVR-Schnittstellen

- [`VRDisplay`](/de/docs/Web/API/VRDisplay)
  - : Stellt jedes von dieser API unterstützte VR-Gerät dar. Es enthält generische Informationen wie Geräte-IDs und Beschreibungen sowie Methoden zum Starten der Präsentation einer VR-Szene, zum Abrufen von Augenparametern und Display-Fähigkeiten und anderer wichtiger Funktionen.
- [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)
  - : Beschreibt die Fähigkeiten eines [`VRDisplay`](/de/docs/Web/API/VRDisplay) — seine Funktionen können verwendet werden, um die Fähigkeiten eines VR-Geräts zu testen, zum Beispiel ob es Positionsinformationen zurückgeben kann.
- [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)
  - : Repräsentiert das Ereignisobjekt von WebVR-bezogenen Ereignissen (siehe die unten aufgeführten [Fensterereignisse](#fensterereignisse)).
- [`VRFrameData`](/de/docs/Web/API/VRFrameData)
  - : Stellt alle Informationen bereit, die benötigt werden, um einen einzelnen Frame einer VR-Szene zu rendern; erstellt durch [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData).
- [`VRPose`](/de/docs/Web/API/VRPose)
  - : Repräsentiert den Positionszustand zu einem gegebenen Zeitstempel (einschließlich Orientierung, Position, Geschwindigkeit und Beschleunigung).
- [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)
  - : Bietet Zugriff auf alle Informationen, die erforderlich sind, um eine Szene für jedes Auge korrekt zu rendern, einschließlich Informationen zur Sichtfeld.
- [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)
  - : Stellt ein Sichtfeld dar, das durch vier verschiedene Gradwerte beschrieben wird, die die Sicht von einem Mittelpunkt aus beschreiben.
- [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)
  - : Stellt eine Ebene dar, die in einem [`VRDisplay`](/de/docs/Web/API/VRDisplay) präsentiert werden soll.
- [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)
  - : Stellt die Werte dar, die den Bühnenbereich für Geräte beschreiben, die Raummaßstab-Erfahrungen unterstützen.

### Erweiterungen zu anderen Schnittstellen

Die WebVR-API erweitert die folgenden APIs, indem sie die aufgeführten Funktionen hinzufügt.

#### Gamepad

- [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) {{ReadOnlyInline}}
  - : _Gibt die [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) des zugehörigen [`VRDisplay`](/de/docs/Web/API/VRDisplay) zurück — das `VRDisplay`, das die vom Gamepad gesteuerte Szene anzeigt._

#### Navigator

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}}
  - : Gibt ein Array zurück, das jedes [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt enthält, das gerade präsentiert ([`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) ist `true`).
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays)
  - : Gibt ein Versprechen zurück, das mit einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird, die alle verfügbaren VR-Displays repräsentieren, die an den Computer angeschlossen sind.

#### Fensterereignisse

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event)
  - : Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Displays ändert — das heißt, vom Präsentieren zum Nichtpräsentieren oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event)
  - : Wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event)
  - : Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event)
  - : Wird ausgelöst, wenn ein Display präsentiert werden kann.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event)
  - : Wird ausgelöst, wenn ein Display nicht mehr präsentiert werden kann.

## Beispiele

Sie finden eine Reihe von Beispielen an diesen Orten:

- [webvr-tests](https://github.com/mdn/webvr-tests) — sehr einfache Beispiele, die die MDN WebVR-Dokumentation begleiten.
- [Carmel Starter Kit](https://github.com/facebookarchive/Carmel-Starter-Kit) — einfache, gut kommentierte Beispiele, die mit Carmel, Facebooks WebVR-Browser, verbunden sind.
- [WebVR.info-Beispiele](https://webvr.info/samples/) — etwas ausführlichere Beispiele plus Quellcode
- [A-Frame-Homepage](https://aframe.io/) — Beispiele, die die Verwendung von A-Frame zeigen

## Spezifikationen

Diese API wurde in der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) spezifiziert, die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie das [Leitfaden von Meta zur Portierung von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [A-Frame](https://aframe.io/) — Open-Source-Web-Framework zum Erstellen von VR-Erlebnissen.
- [webvr.info](https://webvr.info/) — Aktuelle Informationen über WebVR, Browsereinstellungen und Community.
- [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate) — Eine nützliche Startervorlage zum Schreiben von WebVR-Apps.
- [Web VR Polyfill](https://github.com/immersive-web/webvr-polyfill) — JavaScript-Implementierung von WebVR.
- [WebVR Directory](https://webvr.directory/) — Liste von qualitativ hochwertigen WebVR-Seiten.
