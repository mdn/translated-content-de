---
title: WebVR API
slug: Web/API/WebVR_API
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{DefaultAPISidebar("WebVR API")}}{{Non-standard_header}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und standardmäßig aktiviert sowie nur von einer kleinen Anzahl an Geräten unterstützt.

WebVR bietet Unterstützung für die Einbindung von Virtual-Reality-Geräten – wie z.B. Head-Mounted Displays wie Oculus Rift oder HTC Vive – in Webanwendungen. Dies ermöglicht Entwicklern, Positions- und Bewegungsinformationen vom Display in Bewegungen durch eine 3D-Szene zu übersetzen. Dies hat zahlreiche, interessante Anwendungen, von virtuellen Produkttouren und interaktiven Schulungs-Apps bis hin zu immersiven Ego-Spielen.

## Konzepte und Verwendung

Alle an Ihren Computer angeschlossenen VR-Geräte werden durch die Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) zurückgegeben; jedes wird durch ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt dargestellt.

![Skizze einer Person in einem Stuhl mit einer Brille, gekennzeichnet als "Head mounted display (HMD)", vor einem Monitor mit einer Webcam, gekennzeichnet als "Position sensor"](hw-setup.png)

[`VRDisplay`](/de/docs/Web/API/VRDisplay) ist das zentrale Interface in der WebVR API – über seine Eigenschaften und Methoden können Sie auf folgende Funktionen zugreifen:

- Abrufen nützlicher Informationen, um das Display zu identifizieren, welche Fähigkeiten es hat, welche Controller damit verbunden sind und mehr.
- Abrufen von [Bildwiedergabedaten](/de/docs/Web/API/VRFrameData) für jedes Bild, das Sie auf einem Display anzeigen möchten, und Einreichen dieser Bilder zur konsistenten Wiedergabe.
- Starten und Stoppen der Darstellung auf dem Display.

Eine typische (einfache) WebVR-App funktioniert folgendermaßen:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um einen Verweis auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um die Darstellung auf dem VR-Display zu starten.
3. Die dedizierte WebVR-Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholfrequenz für das Display auszuführen.
4. Innerhalb der Rendering-Schleife holen Sie sich die Daten, die zum Anzeigen des aktuellen Bildes notwendig sind ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die dargestellte Szene zweimal – einmal für jeden Blickwinkel – und reichen die gerenderte Ansicht zur Anzeige an das Display ein ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

Zusätzlich fügt WebVR 1.1 eine Reihe von Ereignissen am [`Window`](/de/docs/Web/API/Window)-Objekt hinzu, um es JavaScript zu ermöglichen, auf Statusänderungen des Displays zu reagieren.

> [!NOTE]
> Weitere Informationen darüber, wie die API funktioniert, finden Sie in unseren Artikeln [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) und [WebVR Concepts](/de/docs/Web/API/WebVR_API/Concepts).

### Verfügbarkeit der API

Die WebVR-API, die nie als Webstandard ratifiziert wurde, wurde zugunsten der [WebXR API](/de/docs/Web/API/WebXR_Device_API) veraltet, die sich auf dem Weg zur Fertigstellung des Standardisierungsprozesses befindet. Daher sollten Sie versuchen, vorhandenen Code auf die neuere API umzustellen. Im Allgemeinen sollte der Übergang relativ schmerzlos sein.

Zusätzlich erfordert WebVR bei manchen Geräten und/oder Browsern, dass die Seite in einem sicheren Kontext über eine HTTPS-Verbindung geladen wird. Wenn die Seite nicht vollständig sicher ist, sind die WebVR-Methoden und -Funktionen nicht verfügbar. Sie können dies einfach testen, indem Sie überprüfen, ob die [`Navigator`](/de/docs/Web/API/Navigator)-Methode [`getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) `NULL` ist:

```js
if (!navigator.getVRDisplays) {
  console.error("WebVR is not available");
} else {
  /* Use WebVR */
}
```

### Verwendung von Controllern: Kombinieren von WebVR mit der Gamepad-API

Viele WebVR-Hardwarekonfigurationen verfügen über Controller, die mit dem Headset einhergehen. Diese können in WebVR-Apps über die [Gamepad API](/de/docs/Web/API/Gamepad_API) genutzt werden, insbesondere die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions), die API-Funktionen zum Zugriff auf [Controller-Pose](/de/docs/Web/API/GamepadPose), [haptische Aktoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt.

> [!NOTE]
> Unser Artikel [Using VR controllers with WebVR](/de/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) erklärt die Grundlagen zur Verwendung von VR-Controllern mit WebVR-Apps.

## WebVR-Schnittstellen

- [`VRDisplay`](/de/docs/Web/API/VRDisplay)
  - : Repräsentiert jedes VR-Gerät, das von dieser API unterstützt wird. Es umfasst generische Informationen wie Geräte-IDs und Beschreibungen sowie Methoden zum Starten der Darstellung einer VR-Szene, Abrufen von Augaparametern und Anzeigeoptionen und andere wichtige Funktionen.
- [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)
  - : Beschreibt die Fähigkeiten eines [`VRDisplay`](/de/docs/Web/API/VRDisplay) – seine Merkmale können verwendet werden, um Tests zur Gerätekompatibilität durchzuführen, z.B. ob es Positionsinformationen zurückgeben kann.
- [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)
  - : Repräsentiert das Ereignisobjekt von WebVR-bezogenen Ereignissen (siehe die unten aufgeführten [Window-Ereignisse](#window-ereignisse)).
- [`VRFrameData`](/de/docs/Web/API/VRFrameData)
  - : Repräsentiert alle Informationen, die zum Rendern eines einzelnen Bildes einer VR-Szene benötigt werden; erstellt durch [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData).
- [`VRPose`](/de/docs/Web/API/VRPose)
  - : Repräsentiert den Positionsstatus zu einem gegebenen Zeitpunkt (einschließlich Orientierung, Position, Geschwindigkeit und Beschleunigung).
- [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)
  - : Bietet Zugriff auf alle Informationen, die erforderlich sind, um eine Szene für jedes gegebene Auge korrekt darzustellen, einschließlich Informationen zum Sichtfeld.
- [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)
  - : Repräsentiert ein Sichtfeld, das durch 4 verschiedene Gradwerte definiert wird, die die Ansicht von einem Mittelpunkt aus beschreiben.
- [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)
  - : Repräsentiert eine Schicht, die in einem [`VRDisplay`](/de/docs/Web/API/VRDisplay) dargestellt werden soll.
- [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)
  - : Repräsentiert die Werte, die den Bühnenbereich für Geräte beschreiben, die raumskalierte Erfahrungen unterstützen.

### Erweiterungen anderer Schnittstellen

Die WebVR-API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

#### Gamepad

- [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) {{ReadOnlyInline}}
  - : _Gibt die [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) des zugehörigen [`VRDisplay`](/de/docs/Web/API/VRDisplay) zurück – das `VRDisplay`, das die dargestellte Szene steuert._

#### Navigator

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}}
  - : Gibt ein Array zurück, das jedes [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekt enthält, das derzeit darstellt ([`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) ist `true`).
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays)
  - : Gibt ein Versprechen zurück, das in ein Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekten aufgelöst wird, die alle verfügbaren VR-Displays repräsentieren, die mit dem Computer verbunden sind.

#### Window-Ereignisse

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event)
  - : Wird ausgelöst, wenn sich der Darstellungszustand eines VR-Displays ändert, d.h. von Darstellen zu Nicht-Darstellen wechselt oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event)
  - : Wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event)
  - : Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event)
  - : Wird ausgelöst, wenn ein Display dargestellt werden kann.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event)
  - : Wird ausgelöst, wenn ein Display nicht mehr dargestellt werden kann.

## Beispiele

Eine Reihe von Beispielen finden Sie an diesen Orten:

- [webvr-tests](https://github.com/mdn/webvr-tests) — sehr einfache Beispiele zur Begleitung der MDN-WebVR-Dokumentation.
- [Carmel starter kit](https://github.com/facebookarchive/Carmel-Starter-Kit) — nette, einfache, gut kommentierte Beispiele, die mit Carmel, Facebooks WebVR-Browser, einhergehen.
- [WebVR.info samples](https://webvr.info/samples/) — etwas tiefere Beispiele sowie Quellcode
- [A-Frame-Homepage](https://aframe.io/) — Beispiele, die die Verwendung von A-Frame zeigen

## Spezifikationen

Diese API wurde in der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) spezifiziert, die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [A-Frame](https://aframe.io/) — Open-Source-Webframework zum Erstellen von VR-Erfahrungen.
- [webvr.info](https://webvr.info/) — Aktuelle Informationen über WebVR, Browser-Konfiguration und Community.
- [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate) — Eine nützliche Vorlage zum Schreiben von WebVR-Apps.
- [Web VR polyfill](https://github.com/immersive-web/webvr-polyfill) — JavaScript-Implementierung von WebVR.
- [WebVR Directory](https://webvr.directory/) — Liste von hochwertigen WebVR-Seiten.
