---
title: WebVR API
slug: Web/API/WebVR_API
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{DefaultAPISidebar("WebVR API")}}{{Non-standard_header}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard verabschiedet, nur in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

WebVR ermöglicht es, Virtual-Reality-Geräte – beispielsweise Head-Mounted Displays wie die Oculus Rift oder HTC Vive – für Web-Apps zugänglich zu machen. So können Entwickler Positions- und Bewegungsinformationen des Displays in Bewegungen innerhalb einer 3D-Szene umsetzen. Dafür gibt es zahlreiche interessante Anwendungen, von virtuellen Produktführungen und interaktiven Trainings-Apps bis hin zu immersiven Spielen aus der Ich-Perspektive.

## Konzepte und Verwendung

Alle mit Ihrem Computer verbundenen VR-Geräte werden von der Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) zurückgegeben; jedes wird durch ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt repräsentiert.

![Skizze einer Person auf einem Stuhl, die eine mit „Head mounted display (HMD)“ beschriftete Brille trägt und auf einen Monitor mit einer als „Position sensor“ beschrifteten Webcam blickt](hw-setup.png)

[`VRDisplay`](/de/docs/Web/API/VRDisplay) ist das zentrale Interface der WebVR API. Über seine Eigenschaften und Methoden können Sie:

- Informationen abrufen, um das Display, seine Fähigkeiten, zugehörige Controller und mehr zu ermitteln.
- Für jeden Frame, den Sie auf einem Display anzeigen möchten, [Frame-Daten](/de/docs/Web/API/VRFrameData) abrufen und die Frames mit einer gleichmäßigen Bildrate zur Anzeige übermitteln.
- Die Anzeige auf dem Display starten und beenden.

Eine typische, einfache WebVR-App funktioniert folgendermaßen:

1. Mit [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird eine Referenz auf das VR-Display abgerufen.
2. Mit [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird die Anzeige auf dem VR-Display gestartet.
3. Mit der WebVR-spezifischen Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) wird die Rendering-Schleife der App mit der richtigen Bildwiederholrate für das Display ausgeführt.
4. Innerhalb der Rendering-Schleife werden die für den aktuellen Frame benötigten Daten abgerufen ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)). Anschließend wird die Szene zweimal gezeichnet – einmal für jedes Auge – und die gerenderte Ansicht zur Anzeige an das Display übermittelt ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

Darüber hinaus fügt WebVR 1.1 dem [`Window`](/de/docs/Web/API/Window)-Objekt mehrere Events hinzu, damit JavaScript auf Änderungen des Display-Status reagieren kann.

> [!NOTE]
> Weitere Informationen zur Funktionsweise der API finden Sie in unseren Artikeln [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) und [WebVR-Konzepte](/de/docs/Web/API/WebVR_API/Concepts).

### Verfügbarkeit der API

Die WebVR API wurde nie als Webstandard verabschiedet und zugunsten der [WebXR API](/de/docs/Web/API/WebXR_Device_API) eingestellt, deren Standardisierung bereits weit fortgeschritten ist. Daher sollten Sie versuchen, bestehenden Code auf die neuere API umzustellen. Im Allgemeinen sollte der Umstieg recht unkompliziert sein.

Auf einigen Geräten und/oder in einigen Browsern setzt WebVR außerdem voraus, dass die Seite in einem sicheren Kontext über eine HTTPS-Verbindung geladen wird. Ist die Seite nicht vollständig sicher, stehen die Methoden und Funktionen von WebVR nicht zur Verfügung. Sie können dies einfach überprüfen, indem Sie feststellen, ob die [`Navigator`](/de/docs/Web/API/Navigator)-Methode [`getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) `NULL` ist:

```js
if (!navigator.getVRDisplays) {
  console.error("WebVR is not available");
} else {
  /* Use WebVR */
}
```

### Controller verwenden: WebVR mit der Gamepad API kombinieren

Viele WebVR-Hardwarekonfigurationen umfassen Controller, die zum Headset gehören. Diese lassen sich in WebVR-Apps über die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden, insbesondere über die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions). Diese ergänzt API-Funktionen für den Zugriff auf die [Position und Ausrichtung von Controllern](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr.

> [!NOTE]
> Unser Artikel [VR-Controller mit WebVR verwenden](/de/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) erläutert die Grundlagen der Verwendung von VR-Controllern in WebVR-Apps.

## WebVR-Interfaces

- [`VRDisplay`](/de/docs/Web/API/VRDisplay)
  - : Repräsentiert jedes von dieser API unterstützte VR-Gerät. Das Interface umfasst allgemeine Informationen wie Geräte-IDs und Beschreibungen sowie Methoden zum Starten der Anzeige einer VR-Szene, zum Abrufen von Parametern für jedes Auge und der Fähigkeiten des Displays sowie weitere wichtige Funktionen.
- [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)
  - : Beschreibt die Fähigkeiten eines [`VRDisplay`](/de/docs/Web/API/VRDisplay). Anhand seiner Eigenschaften lässt sich beispielsweise prüfen, ob ein VR-Gerät Positionsinformationen zurückgeben kann.
- [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)
  - : Repräsentiert das Event-Objekt von WebVR-bezogenen Events (siehe die unten aufgeführten [Window-Events](#window-events)).
- [`VRFrameData`](/de/docs/Web/API/VRFrameData)
  - : Repräsentiert alle Informationen, die zum Rendern eines einzelnen Frames einer VR-Szene benötigt werden; wird durch [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) erzeugt.
- [`VRPose`](/de/docs/Web/API/VRPose)
  - : Repräsentiert den Positionszustand zu einem bestimmten Zeitpunkt, einschließlich Orientierung, Position, Geschwindigkeit und Beschleunigung.
- [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)
  - : Ermöglicht den Zugriff auf alle Informationen, die benötigt werden, um eine Szene für das jeweilige Auge korrekt zu rendern, einschließlich Informationen zum Sichtfeld.
- [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)
  - : Repräsentiert ein Sichtfeld, das durch vier verschiedene Winkelwerte definiert ist, die die Sicht von einem Mittelpunkt aus beschreiben.
- [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)
  - : Repräsentiert eine Ebene, die auf einem [`VRDisplay`](/de/docs/Web/API/VRDisplay) angezeigt werden soll.
- [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)
  - : Repräsentiert die Werte, die den Bewegungsbereich für Geräte beschreiben, die raumfüllende VR-Erlebnisse unterstützen.

### Erweiterungen anderer Interfaces

Die WebVR API erweitert die folgenden APIs um die aufgeführten Funktionen.

#### Gamepad

- [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) {{ReadOnlyInline}}
  - : _Gibt die [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) des zugehörigen [`VRDisplay`](/de/docs/Web/API/VRDisplay) zurück – des `VRDisplay`, dessen angezeigte Szene das Gamepad steuert._

#### Navigator

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}}
  - : Gibt ein Array mit allen [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten zurück, die derzeit Inhalte anzeigen ([`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) ist `true`).
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays)
  - : Gibt ein Promise zurück, das mit einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten erfüllt wird, die alle verfügbaren, mit dem Computer verbundenen VR-Displays repräsentieren.

#### Window-Events

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event)
  - : Wird ausgelöst, wenn sich der Anzeigestatus eines VR-Displays ändert, es also beginnt oder aufhört, Inhalte anzuzeigen.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event)
  - : Wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event)
  - : Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event)
  - : Wird ausgelöst, wenn ein Display bereit ist, Inhalte anzuzeigen.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event)
  - : Wird ausgelöst, wenn ein Display keine Inhalte mehr anzeigen kann.

## Beispiele

Unter den folgenden Adressen finden Sie mehrere Beispiele:

- [webvr-tests](https://github.com/mdn/webvr-tests) – sehr einfache Beispiele zur Ergänzung der MDN-WebVR-Dokumentation.
- [Carmel Starter Kit](https://github.com/facebookarchive/Carmel-Starter-Kit) – einfache, gut kommentierte Beispiele für Carmel, den WebVR-Browser von Facebook.
- [WebVR.info-Beispiele](https://webvr.info/samples/) – etwas ausführlichere Beispiele mit Quellcode.
- [A-Frame-Startseite](https://aframe.io/) – Beispiele für die Verwendung von A-Frame.

## Spezifikationen

Diese API wurde in der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) spezifiziert, die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [A-Frame](https://aframe.io/) – Open-Source-Webframework zum Erstellen von VR-Erlebnissen.
- [webvr.info](https://webvr.info/) – aktuelle Informationen zu WebVR, zur Browser-Einrichtung und zur Community.
- [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate) – eine nützliche Vorlage für den Einstieg in die Entwicklung von WebVR-Apps.
- [Web VR polyfill](https://github.com/immersive-web/webvr-polyfill) – JavaScript-Implementierung von WebVR.
- [WebVR Directory](https://webvr.directory/) – Verzeichnis hochwertiger WebVR-Websites.
