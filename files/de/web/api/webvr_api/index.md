---
title: WebVR API
slug: Web/API/WebVR_API
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{DefaultAPISidebar("WebVR API")}}{{Non-standard_header}}

> [!NOTE]
> Die WebVR-API wurde durch die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

WebVR bietet Unterstützung für die Einbindung von Virtual-Reality-Geräten – zum Beispiel Head-Mounted Displays wie das Oculus Rift oder HTC Vive – in Web-Apps, wodurch Entwickler die Möglichkeit haben, Positions- und Bewegungsinformationen vom Display in Bewegungen in einer 3D-Szene umzusetzen. Dies hat zahlreiche interessante Anwendungen, von virtuellen Produktpräsentationen und interaktiven Trainings-Apps bis hin zu immersiven Ego-Spielen.

## Konzepte und Nutzung

Alle an Ihren Computer angeschlossenen VR-Geräte werden durch die Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) zurückgegeben; jedes wird durch ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt repräsentiert.

![Skizze einer Person in einem Stuhl mit einer Brille, beschriftet mit "Head mounted display (HMD)" vor einem Monitor mit einer Webcam, beschriftet als "Positionssensor"](hw-setup.png)

[`VRDisplay`](/de/docs/Web/API/VRDisplay) ist die zentrale Schnittstelle in der WebVR-API — über ihre Eigenschaften und Methoden können Sie auf Funktionen zugreifen, um:

- Nützliche Informationen abzurufen, die es uns ermöglichen, das Display zu identifizieren, welche Fähigkeiten es hat, welche Controller damit verbunden sind und mehr.
- [Frame-Daten](/de/docs/Web/API/VRFrameData) für jeden Frame von Inhalten abzurufen, den Sie auf einem Display präsentieren möchten, und diese Frames mit einer konsistenten Rate zur Anzeige bereitzustellen.
- Präsentieren auf dem Display zu starten und zu stoppen.

Eine typische (einfache) WebVR-App würde so funktionieren:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um einen Verweis auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um mit der Präsentation auf dem VR-Display zu beginnen.
3. Die dedizierte Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) von WebVR wird verwendet, um die Render-Schleife der App mit der richtigen Bildwiederholrate für das Display auszuführen.
4. In der Render-Schleife greifen Sie auf die Daten zu, die benötigt werden, um den aktuellen Frame anzuzeigen ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die angezeigte Szene zweimal – einmal für die Ansicht in jedem Auge – und übergeben dann die gerenderte Ansicht an das Display, um sie dem Benutzer anzuzeigen ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

Darüber hinaus fügt WebVR 1.1 eine Reihe von Ereignissen am [`Window`](/de/docs/Web/API/Window)-Objekt hinzu, die es JavaScript ermöglichen, auf Änderungen des Display-Status zu reagieren.

> [!NOTE]
> Sie können viel mehr darüber erfahren, wie die API funktioniert, in unseren Artikeln [Verwendung der WebVR-API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) und [WebVR-Konzepte](/de/docs/Web/API/WebVR_API/Concepts).

### API-Verfügbarkeit

Die WebVR-API, die nie als Webstandard ratifiziert wurde, wurde zugunsten der [WebXR-API](/de/docs/Web/API/WebXR_Device_API) veraltet, welche sich gut auf dem Weg befindet, den Standardisierungsprozess abzuschließen. Daher sollten Sie versuchen, vorhandenen Code auf die neuere API zu aktualisieren. Im Allgemeinen sollte der Übergang relativ schmerzlos sein.

Darüber hinaus erfordert WebVR auf einigen Geräten und/oder Browsern, dass die Seite über einen sicheren Kontext geladen wird, also über eine HTTPS-Verbindung. Wenn die Seite nicht vollständig sicher ist, sind die WebVR-Methoden und -Funktionen nicht verfügbar. Sie können dies leicht testen, indem Sie überprüfen, ob die [`Navigator`](/de/docs/Web/API/Navigator)-Methode [`getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) `NULL` ist:

```js
if (!navigator.getVRDisplays) {
  console.error("WebVR is not available");
} else {
  /* Use WebVR */
}
```

### Verwendung von Controllern: Kombination von WebVR mit der Gamepad-API

Viele WebVR-Hardware-Setups enthalten Controller, die zusammen mit dem Headset verwendet werden. Diese können in WebVR-Anwendungen über die [Gamepad-API](/de/docs/Web/API/Gamepad_API) und speziell die [Gamepad Extensions-API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) genutzt werden, die API-Features für den Zugriff auf [Controller-Posen](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt.

> [!NOTE]
> Unser Artikel [Verwendung von VR-Controllern mit WebVR](/de/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) erklärt die Grundlagen, wie VR-Controller mit WebVR-Apps verwendet werden.

## WebVR-Schnittstellen

- [`VRDisplay`](/de/docs/Web/API/VRDisplay)
  - : Repräsentiert jedes VR-Gerät, das von dieser API unterstützt wird. Es enthält generische Informationen wie Geräte-IDs und Beschreibungen sowie Methoden zum Starten der Präsentation einer VR-Szene, zum Abrufen von Augenparametern und Anzeigeoptionen sowie anderer wichtiger Funktionen.
- [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)
  - : Beschreibt die Fähigkeiten eines [`VRDisplay`](/de/docs/Web/API/VRDisplay) – seine Merkmale können verwendet werden, um VR-Gerätefähigkeitsprüfungen durchzuführen, z. B. ob es Positionsinformationen zurückgeben kann.
- [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)
  - : Repräsentiert das Ereignisobjekt von WebVR-bezogenen Ereignissen (siehe die unten aufgeführten [Fenster-Ereignisse](#fenster-ereignisse)).
- [`VRFrameData`](/de/docs/Web/API/VRFrameData)
  - : Repräsentiert alle Informationen, die benötigt werden, um einen einzelnen Frame einer VR-Szene zu rendern; wird von [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) konstruiert.
- [`VRPose`](/de/docs/Web/API/VRPose)
  - : Repräsentiert den Positionszustand zu einem gegebenen Zeitpunkt (einschließlich Orientierung, Position, Geschwindigkeit und Beschleunigung).
- [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)
  - : Bietet Zugriff auf alle Informationen, die erforderlich sind, um eine Szene für jedes Auge korrekt zu rendern, einschließlich Sichtfeldinformationen.
- [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)
  - : Repräsentiert ein Sichtfeld, das durch 4 verschiedene Grad-Werte beschrieben wird, die die Ansicht von einem Mittelpunkt aus beschreiben.
- [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)
  - : Repräsentiert eine Ebene, die in einem [`VRDisplay`](/de/docs/Web/API/VRDisplay) präsentiert werden soll.
- [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)
  - : Repräsentiert die Werte, die den Bühnenbereich für Geräte beschreiben, die raumgroße Erlebnisse unterstützen.

### Erweiterungen zu anderen Schnittstellen

Die WebVR-API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

#### Gamepad

- [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) {{ReadOnlyInline}}
  - : _Gibt die [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) des zugehörigen [`VRDisplay`](/de/docs/Web/API/VRDisplay) zurück – das `VRDisplay`, dessen Szenenanzeige das Gamepad steuert._

#### Navigator

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}}
  - : Gibt ein Array zurück, das jedes [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt enthält, das derzeit präsentiert ([`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) ist `true`).
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays)
  - : Gibt ein Promise zurück, das in ein Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird, die alle verfügbaren, mit dem Computer verbundenen VR-Displays repräsentieren.

#### Fenster-Ereignisse

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event)
  - : Wird ausgelöst, wenn sich der Präsentationszustand eines VR-Displays ändert – z. B. von Präsentation zu keine Präsentation oder umgekehrt.
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

- [webvr-tests](https://github.com/mdn/webvr-tests) — sehr einfache Beispiele, die die MDN-WebVR-Dokumentation begleiten.
- [Carmel-Starter-Kit](https://github.com/facebookarchive/Carmel-Starter-Kit) — schöne einfache, gut kommentierte Beispiele, die mit Carmel, Facebooks WebVR-Browser, einhergehen.
- [WebVR.info-Beispiele](https://webvr.info/samples/) — etwas ausführlichere Beispiele plus Quellcode
- [A-Frame-Homepage](https://aframe.io/) — Beispiele, die die Verwendung von A-Frame zeigen

## Spezifikationen

Diese API wurde in der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) spezifiziert, die von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr im Standardisierungsprozess.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie Metas Anleitung [Portierung von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [A-Frame](https://aframe.io/) — Open-Source-Webframework für den Bau von VR-Erlebnissen.
- [webvr.info](https://webvr.info/) — Aktuelle Informationen über WebVR, Browser-Einrichtung und Community.
- [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate) — Eine nützliche Startervorlage zum Schreiben von WebVR-Apps.
- [Web VR-Polyfill](https://github.com/immersive-web/webvr-polyfill) — JavaScript-Implementierung von WebVR.
- [WebVR-Verzeichnis](https://webvr.directory/) — Liste qualitativ hochwertiger WebVR-Sites.
