---
title: WebVR API
slug: Web/API/WebVR_API
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}{{Non-standard_header}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, war in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

WebVR bietet Unterstützung für die Offenlegung von Virtual-Reality-Geräten – wie zum Beispiel Head-Mounted Displays wie das Oculus Rift oder HTC Vive – für Web-Apps. Dadurch können Entwickler Positions- und Bewegungsinformationen vom Display in Bewegungen in einer 3D-Szene übersetzen. Dies hat zahlreiche interessante Anwendungen, von virtuellen Produktführungen und interaktiven Trainings-Apps bis hin zu immersiven Ego-Spielen.

## Konzepte und Verwendung

Alle VR-Geräte, die an Ihren Computer angeschlossen sind, werden von der Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) zurückgegeben; jedes wird durch ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt repräsentiert.

![Skizze einer Person auf einem Stuhl mit einer Brille, die mit "Head mounted display (HMD)" beschriftet ist, vor einem Monitor mit einer Webcam, die als "Position sensor" beschriftet ist](hw-setup.png)

[`VRDisplay`](/de/docs/Web/API/VRDisplay) ist die zentrale Schnittstelle in der WebVR API — über seine Eigenschaften und Methoden können Sie auf Funktionen zugreifen, um:

- Nützliche Informationen abzurufen, die es uns ermöglichen, das Display zu identifizieren, welche Fähigkeiten es hat, zugehörige Controller und mehr.
- [Frame-Daten](/de/docs/Web/API/VRFrameData) für jeden Frame von Inhalten abzurufen, die Sie in einem Display anzeigen möchten, und diese Frames mit einer konsistenten Rate zur Anzeige zu bringen.
- Anfangen und stoppen, Inhalte auf dem Display zu präsentieren.

Eine typische (einfache) WebVR-App würde folgendermaßen funktionieren:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um die Präsentation auf dem VR-Display zu starten.
3. Die dedizierte Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) von WebVR wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholrate für das Display auszuführen.
4. Innerhalb der Rendering-Schleife holen Sie sich die Daten, die erforderlich sind, um den aktuellen Frame anzuzeigen ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die angezeigte Szene zweimal – einmal für das Sichtfeld jedes Auges, dann übermitteln Sie die gerenderte Ansicht an das Display, um sie dem Benutzer anzuzeigen ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

Darüber hinaus fügt WebVR 1.1 dem [`Window`](/de/docs/Web/API/Window)-Objekt eine Reihe von Ereignissen hinzu, die es JavaScript ermöglichen, auf Änderungen des Anzeigestatus zu reagieren.

> [!NOTE]
> In unseren Artikeln [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) und [WebVR Konzepte](/de/docs/Web/API/WebVR_API/Concepts) finden Sie weitere Informationen darüber, wie die API funktioniert.

### API-Verfügbarkeit

Die WebVR API, die nie als Webstandard ratifiziert wurde, ist zugunsten der [WebXR API](/de/docs/Web/API/WebXR_Device_API) eingestellt worden, die gut auf dem Weg ist, den Standardisierungsprozess abzuschließen. Daher sollten Sie versuchen, bestehenden Code auf die neuere API zu aktualisieren. Im Allgemeinen sollte der Übergang relativ schmerzlos sein.

Darüber hinaus erfordert WebVR auf einigen Geräten und/oder Browsern, dass die Seite über einen sicheren Kontext geladen wird, also über eine HTTPS-Verbindung. Wenn die Seite nicht vollständig abgesichert ist, sind die WebVR-Methoden und -Funktionen nicht verfügbar. Sie können dies einfach testen, indem Sie überprüfen, ob die Methode [`getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) `NULL` ist:

```js
if (!navigator.getVRDisplays) {
  console.error("WebVR is not available");
} else {
  /* Use WebVR */
}
```

### Verwendung von Controllern: Kombination von WebVR mit der Gamepad-API

Viele WebVR-Hardware-Setups verfügen über Controller, die zum Headset gehören. Diese können in WebVR-Apps über die [Gamepad API](/de/docs/Web/API/Gamepad_API) und speziell die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) verwendet werden, die API-Funktionen zum Zugriff auf [Controller Pose](/de/docs/Web/API/GamepadPose), [Haptic Actuators](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügen.

> [!NOTE]
> Unser Artikel [Verwendung von VR-Controllern mit WebVR](/de/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) erklärt die Grundlagen der Verwendung von VR-Controllern mit WebVR-Apps.

## WebVR Schnittstellen

- [`VRDisplay`](/de/docs/Web/API/VRDisplay)
  - : Repräsentiert jedes VR-Gerät, das von dieser API unterstützt wird. Es enthält allgemeine Informationen wie Geräte-IDs und Beschreibungen sowie Methoden zum Starten der Präsentation einer VR-Szene, Abrufen von Augenparametern und Anzeigefähigkeiten und anderer wichtiger Funktionalitäten.
- [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)
  - : Beschreibt die Fähigkeiten eines [`VRDisplay`](/de/docs/Web/API/VRDisplay) – seine Merkmale können verwendet werden, um Tests der VR-Gerätekapazitäten durchzuführen, zum Beispiel ob es Positionsinformationen zurückgeben kann.
- [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)
  - : Repräsentiert das Ereignisobjekt von WebVR-bezogenen Ereignissen (siehe die unten aufgeführten [Fensterereignisse](#fensterereignisse)).
- [`VRFrameData`](/de/docs/Web/API/VRFrameData)
  - : Repräsentiert alle Informationen, die zum Rendern eines einzelnen Frames einer VR-Szene benötigt werden; zusammengestellt durch [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData).
- [`VRPose`](/de/docs/Web/API/VRPose)
  - : Repräsentiert den Positionszustand zu einem bestimmten Zeitpunkt (einschließlich Orientierung, Position, Geschwindigkeit und Beschleunigung).
- [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)
  - : Bietet Zugriff auf alle Informationen, die erforderlich sind, um eine Szene für jedes gegebenene Auge korrekt zu rendern, einschließlich Feldsichtsinformationen.
- [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)
  - : Repräsentiert ein Sichtfeld, das durch 4 verschiedene Gradwerte beschrieben wird, die die Sicht von einem Mittelpunkt aus darstellen.
- [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)
  - : Repräsentiert eine Schicht, die in einem [`VRDisplay`](/de/docs/Web/API/VRDisplay) präsentiert werden soll.
- [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)
  - : Repräsentiert die Werte, die den Bühnenbereich für Geräte beschreiben, die raumgroße Erfahrungen unterstützen.

### Erweiterungen zu anderen Schnittstellen

Die WebVR-API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

#### Gamepad

- [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) {{ReadOnlyInline}}
  - : _Gibt die [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) des zugehörigen [`VRDisplay`](/de/docs/Web/API/VRDisplay) zurück — das `VRDisplay`, das durch das Gamepad die angezeigte Szene steuert._

#### Navigator

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}}
  - : Gibt ein Array zurück, das jedes [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt enthält, das derzeit präsentiert ([`VRDisplay.ispresenting`](/de/docs/Web/API/VRDisplay/ispresenting) ist `true`).
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays)
  - : Gibt ein Versprechen zurück, das in ein Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird, die alle verfügbaren VR-Displays repräsentieren, die mit dem Computer verbunden sind.

#### Fensterereignisse

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event)
  - : Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Displays ändert – also vom Präsentieren zum Nicht-Präsentieren oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event)
  - : Wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event)
  - : Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event)
  - : Wird ausgelöst, wenn auf einem Display präsentiert werden kann.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event)
  - : Wird ausgelöst, wenn auf einem Display nicht mehr präsentiert werden kann.

## Beispiele

Sie finden eine Reihe von Beispielen an folgenden Orten:

- [webvr-tests](https://github.com/mdn/webvr-tests) — sehr einfache Beispiele, die die MDN WebVR Dokumentation begleiten.
- [Carmel starter kit](https://github.com/facebookarchive/Carmel-Starter-Kit) — nette, einfache, gut kommentierte Beispiele, die mit Carmel, Facebooks WebVR-Browser, einhergehen.
- [WebVR.info samples](https://webvr.info/samples/) — etwas eingehendere Beispiele plus Quellcode.
- [A-Frame homepage](https://aframe.io/) — Beispiele für die Verwendung von A-Frame.

## Spezifikationen

Diese API wurde in der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) spezifiziert, die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr geplant, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Weitere Informationen finden Sie im [Portierungsleitfaden von Meta von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [A-Frame](https://aframe.io/) — Open-Source-Web-Framework zum Erstellen von VR-Erlebnissen.
- [webvr.info](https://webvr.info/) — Aktuelle Informationen über WebVR, Browsereinstellungen und Community.
- [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate) — Eine nützliche Startervorlage zum Schreiben von WebVR-Apps.
- [Web VR polyfill](https://github.com/immersive-web/webvr-polyfill) — JavaScript-Implementierung von WebVR.
- [WebVR Directory](https://webvr.directory/) — Liste von hochwertigen WebVR-Sites.
