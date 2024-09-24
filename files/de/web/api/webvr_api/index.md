---
title: WebVR-API
slug: Web/API/WebVR_API
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}{{Non-standard_header}}

> [!NOTE]
> Die WebVR-API wurde durch die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde in nur sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

WebVR bietet Unterstützung für die Einbindung von Virtual-Reality-Geräten — beispielsweise Head-mounted Displays wie Oculus Rift oder HTC Vive — in Web-Apps. Dadurch können Entwickler Positions- und Bewegungsinformationen vom Display in Bewegungen in einer 3D-Szene umsetzen. Dies bietet zahlreiche interessante Anwendungen, von virtuellen Produktführungen und interaktiven Trainings-Apps bis hin zu immersiven First-Person-Spielen.

## Konzepte und Nutzung

Alle an Ihren Computer angeschlossenen VR-Geräte werden von der Methode {{DOMxRef("Navigator.getVRDisplays()")}} zurückgegeben; jedes Gerät wird durch ein {{DOMxRef("VRDisplay")}}-Objekt dargestellt.

![Skizze einer Person in einem Stuhl, die eine Brille trägt, die mit "Head mounted display (HMD)" bezeichnet ist, gegenüber einem Monitor mit einer Webcam, die als "Position sensor" bezeichnet wird](hw-setup.png)

{{DOMxRef("VRDisplay")}} ist die zentrale Schnittstelle in der WebVR-API — über ihre Eigenschaften und Methoden können Sie folgende Funktionen nutzen:

- Abrufen nützlicher Informationen, um das Display zu identifizieren, seine Fähigkeiten zu erkennen, assoziierte Controller zu finden und mehr.
- Abrufen von [Frame-Daten](/de/docs/Web/API/VRFrameData) für jeden Frame des Inhalts, den Sie in einem Display präsentieren möchten, und Einreichen dieser Frames zur Darstellung mit konstanter Rate.
- Starten und Stoppen der Präsentation auf dem Display.

Eine typische (einfache) WebVR-App würde so funktionieren:

1. Mit {{DOMxRef("Navigator.getVRDisplays()")}} erhalten Sie eine Referenz zu Ihrem VR-Display.
2. {{DOMxRef("VRDisplay.requestPresent()")}} wird verwendet, um mit der Präsentation auf dem VR-Display zu beginnen.
3. WebVR's dedizierte Methode {{DOMxRef("VRDisplay.requestAnimationFrame()")}} wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholrate für das Display auszuführen.
4. Innerhalb der Rendering-Schleife erfassen Sie die Daten, die für die Darstellung des aktuellen Frames erforderlich sind ({{DOMxRef("VRDisplay.getFrameData()")}}), zeichnen die angezeigte Szene zweimal — einmal für den Blick aus jedem Auge — und übermitteln dann die gerenderte Ansicht an das Display, um sie dem Benutzer zu zeigen ({{DOMxRef("VRDisplay.submitFrame()")}}).

Darüber hinaus fügt WebVR 1.1 dem {{DOMxRef("Window")}}-Objekt eine Reihe von Ereignissen hinzu, mit denen JavaScript auf Änderungen des Status des Displays reagieren kann.

> [!NOTE]
> Sie können mehr darüber erfahren, wie die API funktioniert, in unseren Artikeln [WebVR-API verwenden](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) und [WebVR-Konzepte](/de/docs/Web/API/WebVR_API/Concepts).

### API-Verfügbarkeit

Die WebVR-API, die nie als Webstandard ratifiziert wurde, wurde zugunsten der [WebXR-API](/de/docs/Web/API/WebXR_Device_API) veraltet, welche sich gut auf dem Weg zur Fertigstellung des Standardisierungsprozesses befindet. Daher sollten Sie versuchen, vorhandenen Code auf die neuere API zu aktualisieren. Im Allgemeinen sollte der Übergang ziemlich schmerzlos sein.

Zusätzlich erfordert WebVR auf einigen Geräten und/oder Browsern, dass die Seite über einen sicheren Kontext, d.h. über eine HTTPS-Verbindung, geladen wird. Wenn die Seite nicht vollständig sicher ist, werden die WebVR-Methoden und Funktionen nicht verfügbar sein. Sie können dies leicht testen, indem Sie prüfen, ob die {{domxref("Navigator")}}-Methode {{domxref("Navigator.getVRDisplays", "getVRDisplays()")}} `NULL` ist:

```js
if (!navigator.getVRDisplays) {
  console.error("WebVR is not available");
} else {
  /* Use WebVR */
}
```

### Verwendung von Controllern: Kombination von WebVR mit der Gamepad-API

Viele WebVR-Hardware-Konfigurationen verfügen über Controller, die zusammen mit dem Headset eingesetzt werden. Diese können in WebVR-Apps über die [Gamepad-API](/de/docs/Web/API/Gamepad_API) und speziell die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) verwendet werden, die API-Funktionen zum Zugriff auf [Controller-Pose](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt.

> [!NOTE]
> Unser Artikel [VR-Controller mit WebVR verwenden](/de/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) erklärt die Grundlagen, wie man VR-Controller mit WebVR-Apps verwendet.

## WebVR-Schnittstellen

- {{DOMxRef("VRDisplay")}}
  - : Stellt jedes von dieser API unterstützte VR-Gerät dar. Es enthält allgemeine Informationen wie Gerätekennungen und Beschreibungen sowie Methoden zum Starten der Präsentation einer VR-Szene, zum Abrufen von Augaparametern und Anzeigeeigenschaften und anderer wichtiger Funktionen.
- {{DOMxRef("VRDisplayCapabilities")}}
  - : Beschreibt die Fähigkeiten eines {{DOMxRef("VRDisplay")}} — seine Merkmale können verwendet werden, um Tests der VR-Gerätefähigkeiten durchzuführen, z.B. ob es Positionsinformationen zurückgeben kann.
- {{DOMxRef("VRDisplayEvent")}}
  - : Stellt das Ereignisobjekt von WebVR-bezogenen Ereignissen dar (siehe die unten aufgeführten [Window-Ereignisse](#window-ereignisse)).
- {{DOMxRef("VRFrameData")}}
  - : Stellt alle Informationen dar, die benötigt werden, um einen einzelnen Frame einer VR-Szene zu rendern; wird durch {{DOMxRef("VRDisplay.getFrameData()")}} konstruiert.
- {{DOMxRef("VRPose")}}
  - : Repräsentiert den Positionszustand zu einem bestimmten Zeitpunkt (einschließlich Orientierung, Position, Geschwindigkeit und Beschleunigung).
- {{DOMxRef("VREyeParameters")}}
  - : Bietet Zugriff auf alle erforderlichen Informationen, um eine Szene für jedes gegebene Auge korrekt zu rendern, einschließlich Sichtfeldinformationen.
- {{DOMxRef("VRFieldOfView")}}
  - : Stellt ein Sichtfeld dar, das durch 4 verschiedene Gradwerte definiert wird, die die Sicht von einem Mittelpunkt beschreiben.
- {{DOMxRef("VRLayerInit")}}
  - : Stellt eine Schicht dar, die in einem {{DOMxRef("VRDisplay")}} präsentiert werden soll.
- {{DOMxRef("VRStageParameters")}}
  - : Repräsentiert die Werte, die den Bereich der Bühne für Geräte beschreiben, die raumskalierte Erlebnisse unterstützen.

### Erweiterungen zu anderen Schnittstellen

Die WebVR-API erweitert die folgenden APIs und fügt die gelisteten Funktionen hinzu.

#### Gamepad

- {{DOMxRef("Gamepad.displayId")}} {{ReadOnlyInline}}
  - : _Gibt die {{DOMxRef("VRDisplay.displayId")}} des zugehörigen {{DOMxRef("VRDisplay")}} zurück — das `VRDisplay`, das die von dem Gamepad gesteuerte Szene darstellt._

#### Navigator

- {{DOMxRef("Navigator.activeVRDisplays")}} {{ReadOnlyInline}}
  - : Gibt ein Array zurück, das jedes {{DOMxRef("VRDisplay")}}-Objekt enthält, das derzeit präsentiert ({{DOMxRef("VRDisplay.ispresenting")}} ist `true`).
- {{DOMxRef("Navigator.getVRDisplays()")}}
  - : Gibt ein Versprechen zurück, das zu einem Array von {{DOMxRef("VRDisplay")}}-Objekten aufgelöst wird, die alle verfügbaren VR-Displays repräsentieren, die mit dem Computer verbunden sind.

#### Window-Ereignisse

- {{DOMxRef("Window.vrdisplaypresentchange_event", "vrdisplaypresentchange")}}
  - : Wird ausgelöst, wenn sich der Präsentationszustand eines VR-Displays ändert — d.h. von Präsentieren zu Nicht-Präsentieren wechselt oder umgekehrt.
- {{DOMxRef("Window.vrdisplayconnect_event", "vrdisplayconnect")}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- {{DOMxRef("Window.vrdisplaydisconnect_event", "vrdisplaydisconnect")}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.
- {{DOMxRef("Window.vrdisplayactivate_event", "vrdisplayactivate")}}
  - : Wird ausgelöst, wenn ein Display präsentiert werden kann.
- {{DOMxRef("Window.vrdisplaydeactivate_event", "vrdisplaydeactivate")}}
  - : Wird ausgelöst, wenn ein Display nicht mehr präsentiert werden kann.

## Beispiele

An folgenden Orten finden Sie eine Vielzahl von Beispielen:

- [webvr-tests](https://github.com/mdn/webvr-tests) — sehr einfache Beispiele, die die MDN WebVR-Dokumentation begleiten.
- [Carmel starter kit](https://github.com/facebookarchive/Carmel-Starter-Kit) — schöne, einfache, gut kommentierte Beispiele, die zu Carmel, dem WebVR-Browser von Facebook, passen.
- [WebVR.info samples](https://webvr.info/samples/) — etwas ausführlichere Beispiele plus Quellcode
- [A-Frame homepage](https://aframe.io/) — Beispiele mit A-Frame-Nutzung

## Spezifikationen

Diese API wurde in der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/) spezifiziert, die von der [WebXR-Device-API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder eine [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [A-Frame](https://aframe.io/) — Open-Source-Web-Framework für den Aufbau von VR-Erlebnissen.
- [webvr.info](https://webvr.info/) — Aktuelle Informationen über WebVR, Browser-Setup und Community.
- [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate) — Eine nützliche Startervorlage zum Schreiben von WebVR-Apps.
- [Web VR polyfill](https://github.com/immersive-web/webvr-polyfill) — JavaScript-Implementierung von WebVR.
- [WebVR Directory](https://webvr.directory/) — Liste von qualitativ hochwertigen WebVR-Seiten.
