---
title: WebVR API
slug: Web/API/WebVR_API
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}{{Non-standard_header}}

> [!NOTE]
> Die WebVR-API wurde durch die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde niemals als Standard ratifiziert, wurde in nur sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine geringe Anzahl von Geräten.

Die WebVR-API bietet Unterstützung für die Einbindung von Virtual-Reality-Geräten – zum Beispiel Head-Mounted Displays wie Oculus Rift oder HTC Vive – in Webanwendungen. Dadurch können Entwickler Positions- und Bewegungsinformationen des Displays in Bewegungen innerhalb einer 3D-Szene umsetzen. Dies hat zahlreiche interessante Anwendungen, von virtuellen Produkttouren und interaktiven Trainings-Apps bis hin zu immersiven Ego-Shootern.

## Konzepte und Nutzung

Alle VR-Geräte, die mit Ihrem Computer verbunden sind, werden von der Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) zurückgegeben; jedes wird durch ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt repräsentiert.

![Skizze einer Person auf einem Stuhl mit einer Brille, markiert als "Head mounted display (HMD)", gegenüber einem Monitor mit einer Webcam, markiert als "Position sensor"](hw-setup.png)

[`VRDisplay`](/de/docs/Web/API/VRDisplay) ist die zentrale Schnittstelle in der WebVR-API – über deren Eigenschaften und Methoden können Sie Funktionen nutzen, um:

- Nützliche Informationen abzurufen, um das Display zu identifizieren, welche Fähigkeiten es hat, welche Controller damit verbunden sind und mehr.
- [Framedaten](/de/docs/Web/API/VRFrameData) für jeden Inhalt zu erhalten, den Sie im Display darstellen möchten, und diese Bilder mit einer konstanten Rate anzuzeigen.
- Die Präsentation für das Display zu starten und zu stoppen.

Eine typische (einfache) WebVR-App würde so funktionieren:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um mit der Präsentation für das VR-Display zu beginnen.
3. Die spezielle Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) von WebVR wird verwendet, um die Rendering-Schleife der Anwendung mit der richtigen Bildwiederholfrequenz für das Display auszuführen.
4. Innerhalb der Rendering-Schleife holen Sie die Daten ab, die benötigt werden, um das aktuelle Bild anzuzeigen ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die Szene zweimal – einmal für die Ansicht in jedem Auge, und dann übergeben Sie die gerenderte Ansicht an das Display zur Anzeige für den Benutzer ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

Darüber hinaus fügt WebVR 1.1 auf dem [`Window`](/de/docs/Web/API/Window)-Objekt eine Reihe von Ereignissen hinzu, um JavaScript auf Änderungen des Status des Displays reagieren zu lassen.

> [!NOTE]
> Sie können mehr darüber erfahren, wie die API funktioniert, in unseren Artikeln [Verwendung der WebVR-API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) und [WebVR-Konzepte](/de/docs/Web/API/WebVR_API/Concepts).

### API-Verfügbarkeit

Die WebVR-API, die nie als Webstandard ratifiziert wurde, wurde zugunsten der [WebXR-API](/de/docs/Web/API/WebXR_Device_API) abgelehnt, die auf gutem Weg zur Fertigstellung des Standardisierungsprozesses ist. Deshalb sollten Sie versuchen, vorhandenen Code auf die neuere API zu aktualisieren. Der Übergang sollte im Allgemeinen relativ schmerzfrei sein.

Zusätzlich erfordern auf einigen Geräten und/oder Browsern WebVR, dass die Seite unter Verwendung eines sicheren Kontexts über eine HTTPS-Verbindung geladen wird. Wenn die Seite nicht vollständig sicher ist, sind die WebVR-Methoden und -Funktionen nicht verfügbar. Sie können dies einfach testen, indem Sie prüfen, ob die Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) `NULL` ist:

```js
if (!navigator.getVRDisplays) {
  console.error("WebVR is not available");
} else {
  /* Use WebVR */
}
```

### Verwendung von Controllern: Kombination von WebVR mit der Gamepad-API

Viele WebVR-Hardware-Setups bieten Controller, die zusammen mit dem Headset verwendet werden. Diese können in WebVR-Apps über die [Gamepad-API](/de/docs/Web/API/Gamepad_API) verwendet werden, insbesondere über die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions), die API-Funktionen für den Zugriff auf [Controller-Posen](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt.

> [!NOTE]
> Unser Artikel [Verwendung von VR-Controllern mit WebVR](/de/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) erklärt die Grundlagen der Verwendung von VR-Controllern mit WebVR-Apps.

## WebVR-Schnittstellen

- [`VRDisplay`](/de/docs/Web/API/VRDisplay)
  - : Repräsentiert jedes von dieser API unterstützte VR-Gerät. Es umfasst allgemeine Informationen wie Geräte-IDs und Beschreibungen sowie Methoden, um eine VR-Szene zu präsentieren, Augenparameter abzurufen, Anzeige-Fähigkeiten zu ermitteln und weitere wichtige Funktionen.
- [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)
  - : Beschreibt die Fähigkeiten eines [`VRDisplay`](/de/docs/Web/API/VRDisplay) — seine Merkmale können verwendet werden, um Tests zur VR-Gerätefähigkeit durchzuführen, z.B. ob es Positionsinformationen zurückgeben kann.
- [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)
  - : Repräsentiert das Ereignisobjekt von WebVR-bezogenen Ereignissen (siehe die unten aufgeführten [Fenster-Ereignisse](#fenster-ereignisse)).
- [`VRFrameData`](/de/docs/Web/API/VRFrameData)
  - : Repräsentiert alle Informationen, die benötigt werden, um ein einzelnes Bild einer VR-Szene zu rendern; erstellt durch [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData).
- [`VRPose`](/de/docs/Web/API/VRPose)
  - : Repräsentiert den Positionsstatus zu einem bestimmten Zeitpunkt (dies umfasst Orientierung, Position, Geschwindigkeit und Beschleunigung).
- [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)
  - : Bietet Zugriff auf alle Informationen, die erforderlich sind, um eine Szene für jedes gegebene Auge korrekt darzustellen, einschließlich Sichtfeldinformationen.
- [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)
  - : Repräsentiert ein Sichtfeld, definiert durch 4 verschiedene Winkelgrade, die die Ansicht von einem Mittelpunkt beschreiben.
- [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)
  - : Repräsentiert eine Schicht, die in einem [`VRDisplay`](/de/docs/Web/API/VRDisplay) präsentiert werden soll.
- [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)
  - : Repräsentiert die Werte, die den Bühnenbereich für Geräte beschreiben, die Raummaßstäbe unterstützen.

### Erweiterungen zu anderen Schnittstellen

Die WebVR-API erweitert die folgenden APIs und fügt die aufgeführten Funktionen hinzu.

#### Gamepad

- [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) {{ReadOnlyInline}}
  - : _Gibt den [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) des zugehörigen [`VRDisplay`](/de/docs/Web/API/VRDisplay) zurück — das `VRDisplay`, das die von dem Gamepad kontrollierte Szene auf dem Display darstellt._

#### Navigator

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}}
  - : Gibt ein Array zurück, das jedes [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt enthält, das aktuell präsentiert ([`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) ist `true`).
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays)
  - : Gibt ein Versprechen zurück, das mit einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird, die alle verfügbaren VR-Displays repräsentieren, die mit dem Computer verbunden sind.

#### Fenster-Ereignisse

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event)
  - : Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Displays ändert – also von präsentierend zu nicht präsentierend oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event)
  - : Wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event)
  - : Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event)
  - : Wird ausgelöst, wenn ein Display präsentiert werden kann.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event)
  - : Wird ausgelöst, wenn ein Display nicht mehr präsentiert werden kann.

## Beispiele

An folgenden Orten finden Sie eine Reihe von Beispielen:

- [webvr-tests](https://github.com/mdn/webvr-tests) — sehr einfache Beispiele, die die MDN WebVR-Dokumentation begleiten.
- [Carmel starter kit](https://github.com/facebookarchive/Carmel-Starter-Kit) — schöne, einfache, gut kommentierte Beispiele, die mit Carmel, dem WebVR-Browser von Facebook, einhergehen.
- [WebVR.info samples](https://webvr.info/samples/) — etwas tiefergehende Beispiele plus Quellcode
- [A-Frame homepage](https://aframe.io/) — Beispiele, die die Verwendung von A-Frame zeigen

## Spezifikationen

Diese API wurde in der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/) spezifiziert, die durch die [WebXR-Device-API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Portierungsleitfaden von Meta für die Umstellung von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/), um mehr Informationen zu erhalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [A-Frame](https://aframe.io/) — Open-Source-Webframework zum Erstellen von VR-Erlebnissen.
- [webvr.info](https://webvr.info/) — Aktuelle Informationen über WebVR, Browsereinrichtung und Community.
- [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate) — Eine nützliche Startvorlage für das Schreiben von WebVR-Apps.
- [Web VR polyfill](https://github.com/immersive-web/webvr-polyfill) — JavaScript-Implementierung von WebVR.
- [WebVR Directory](https://webvr.directory/) — Liste qualitativ hochwertiger WebVR-Seiten.
