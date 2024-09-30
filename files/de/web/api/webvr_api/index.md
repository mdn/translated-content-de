---
title: WebVR API
slug: Web/API/WebVR_API
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}{{Non-standard_header}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. Die WebVR wurde nie als Standard ratifiziert, wurde in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte eine kleine Anzahl von Geräten.

WebVR bietet Unterstützung für die Offenlegung von Virtual-Reality-Geräten — zum Beispiel Head-Mounted Displays wie die Oculus Rift oder HTC Vive — für Webanwendungen, wodurch Entwickler die Position und Bewegungsinformationen des Displays in Bewegung innerhalb einer 3D-Szene übersetzen können. Dies hat zahlreiche interessante Anwendungen, von virtuellen Produktpräsentationen und interaktiven Trainingsanwendungen bis hin zu immersiven Ego-Spielen.

## Konzepte und Verwendung

Alle an Ihren Computer angeschlossenen VR-Geräte werden von der Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) zurückgegeben; jedes davon wird durch ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt dargestellt.

![Skizze einer Person auf einem Stuhl mit einer Brille, die als "Head Mounted Display (HMD)" bezeichnet wird, einem Monitor zugewandt mit einer Webcam, die als "Positionssensor" bezeichnet wird](hw-setup.png)

[`VRDisplay`](/de/docs/Web/API/VRDisplay) ist die zentrale Schnittstelle der WebVR API — über deren Eigenschaften und Methoden können Sie auf folgende Funktionen zugreifen:

- Nützliche Informationen abrufen, um das Display zu identifizieren, welche Fähigkeiten es hat, welche Controller damit verbunden sind und mehr.
- [Frame-Daten](/de/docs/Web/API/VRFrameData) für jeden Frame von Inhalten, die Sie im Display präsentieren möchten, abrufen und diese Frames mit konstanter Rate im Display anzeigen.
- Präsentieren auf dem Display starten und stoppen.

Eine typische (einfache) WebVR-App funktioniert folgendermaßen:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um mit der Präsentation auf dem VR-Display zu beginnen.
3. Die dedizierte Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) von WebVR wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholrate für das Display auszuführen.
4. In der Rendering-Schleife erfassen Sie die Daten, die zur Anzeige des aktuellen Frames erforderlich sind ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die dargestellte Szene zweimal – einmal für die Ansicht in jedem Auge – und übergeben dann die gerenderte Ansicht an das Display, um sie dem Benutzer zu zeigen ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

Darüber hinaus fügt WebVR 1.1 eine Reihe von Ereignissen am [`Window`](/de/docs/Web/API/Window)-Objekt hinzu, um JavaScript die Möglichkeit zu geben, auf Änderungen des Status des Displays zu reagieren.

> [!NOTE]
> Sie können viel mehr darüber erfahren, wie die API funktioniert, in unseren Artikeln [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) und [WebVR Concepts](/de/docs/Web/API/WebVR_API/Concepts).

### API-Verfügbarkeit

Die WebVR API, die nie als Webstandard ratifiziert wurde, wurde zugunsten der [WebXR API](/de/docs/Web/API/WebXR_Device_API) veraltet, die auf gutem Weg ist, den Standardisierungsprozess abzuschließen. Daher sollten Sie versuchen, vorhandenen Code zu aktualisieren, um die neuere API zu verwenden. Allgemein sollte der Übergang relativ schmerzlos sein.

Zusätzlich erfordert auf einigen Geräten und/oder Browsern WebVR, dass die Seite in einem sicheren Kontext über eine HTTPS-Verbindung geladen wird. Wenn die Seite nicht vollständig sicher ist, stehen die WebVR-Methoden und -Funktionen nicht zur Verfügung. Dies können Sie leicht testen, indem Sie überprüfen, ob die [`Navigator`](/de/docs/Web/API/Navigator)-Methode [`getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) `NULL` ist:

```js
if (!navigator.getVRDisplays) {
  console.error("WebVR is not available");
} else {
  /* Use WebVR */
}
```

### Verwendung von Controllern: Kombination von WebVR mit der Gamepad-API

Viele WebVR-Hardware-Setups verfügen über Controller, die zusammen mit dem Headset verwendet werden. Diese können in WebVR-Anwendungen über die [Gamepad-API](/de/docs/Web/API/Gamepad_API) und spezifisch die [Gamepad-Erweiterungen-API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) verwendet werden, die API-Funktionen für den Zugriff auf [Controller-Positionen](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt.

> [!NOTE]
> Unser Artikel [Using VR controllers with WebVR](/de/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) erklärt die Grundlagen der Verwendung von VR-Controllern mit WebVR-Apps.

## WebVR-Schnittstellen

- [`VRDisplay`](/de/docs/Web/API/VRDisplay)
  - : Repräsentiert jedes VR-Gerät, das von dieser API unterstützt wird. Es enthält generische Informationen wie Geräte-IDs und Beschreibungen sowie Methoden zum Starten der Präsentation einer VR-Szene, Abrufen von Augenparametern und Anzeigeeigenschaften und anderer wichtiger Funktionen.
- [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)
  - : Beschreibt die Fähigkeiten eines [`VRDisplay`](/de/docs/Web/API/VRDisplay) — seine Merkmale können verwendet werden, um VR-Geräteeigenschaftentests durchzuführen, z. B. ob es Positionsinformationen zurückgeben kann.
- [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)
  - : Repräsentiert das Ereignisobjekt von WebVR-bezogenen Ereignissen (siehe die unten aufgeführten [Window-Ereignisse](#window-ereignisse)).
- [`VRFrameData`](/de/docs/Web/API/VRFrameData)
  - : Repräsentiert alle Informationen, die benötigt werden, um einen einzelnen Frame einer VR-Szene zu rendern; erstellt durch [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData).
- [`VRPose`](/de/docs/Web/API/VRPose)
  - : Repräsentiert den Positionsstatus zu einem gegebenen Zeitpunkt (der Orientierung, Position, Geschwindigkeit und Beschleunigung umfasst).
- [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)
  - : Bietet Zugriff auf alle Informationen, die erforderlich sind, um eine Szene für jedes gegebene Auge korrekt zu rendern, einschließlich Sichtfeldinformationen.
- [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)
  - : Repräsentiert ein Sichtfeld, das durch 4 verschiedene Gradwerte beschrieben wird, die die Ansicht von einem Mittelpunkt aus beschreiben.
- [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)
  - : Repräsentiert eine Ebene, die in einem [`VRDisplay`](/de/docs/Web/API/VRDisplay) präsentiert werden soll.
- [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)
  - : Repräsentiert die Werte, die den Bühnenbereich für Geräte beschreiben, die Raumskalenerlebnisse unterstützen.

### Erweiterungen zu anderen Schnittstellen

Die WebVR API erweitert die folgenden APIs, indem sie die aufgeführten Funktionen hinzufügt.

#### Gamepad

- [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) {{ReadOnlyInline}}
  - : _Gibt die [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) des zugehörigen [`VRDisplay`](/de/docs/Web/API/VRDisplay) zurück — das `VRDisplay`, das die vom Gamepad gesteuerte Szene anzeigt._

#### Navigator

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}}
  - : Gibt ein Array zurück, das jedes [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt enthält, das derzeit präsentiert ([`VRDisplay.ispresenting`](/de/docs/Web/API/VRDisplay/ispresenting) ist `true`).
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays)
  - : Gibt ein Versprechen zurück, das ein Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten auflöst, die alle verfügbaren, an den Computer angeschlossenen VR-Displays darstellen.

#### Window-Ereignisse

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event)
  - : Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Displays ändert — d. h. von Präsentieren zu nicht Präsentieren wechselt oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event)
  - : Wird ausgelöst, wenn ein kompatibles VR-Display an den Computer angeschlossen wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event)
  - : Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event)
  - : Wird ausgelöst, wenn ein Display präsentiert werden kann.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event)
  - : Wird ausgelöst, wenn ein Display nicht mehr präsentiert werden kann.

## Beispiele

Sie können eine Reihe von Beispielen an diesen Standorten finden:

- [webvr-tests](https://github.com/mdn/webvr-tests) — sehr einfache Beispiele zur Unterlegung der MDN-WebVR-Dokumentation.
- [Carmel starter kit](https://github.com/facebookarchive/Carmel-Starter-Kit) — schöne, einfache, gut kommentierte Beispiele, die zusammen mit Carmel, Facebooks WebVR-Browser, verwendet werden können.
- [WebVR.info samples](https://webvr.info/samples/) — etwas detailliertere Beispiele plus Quellcode.
- [A-Frame homepage](https://aframe.io/) — Beispiele, die die Verwendung von A-Frame zeigen.

## Spezifikationen

Diese API wurde in der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) spezifiziert, die von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie das [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/)-Leitfaden für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [A-Frame](https://aframe.io/) — Open Source-Web-Framework zum Erstellen von VR-Erlebnissen.
- [webvr.info](https://webvr.info/) — Aktuelle Informationen über WebVR, Browsereinstellung und Community.
- [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate) — Eine nützliche Startervorlage zum Schreiben von WebVR-Apps.
- [Web VR polyfill](https://github.com/immersive-web/webvr-polyfill) — JavaScript-Implementierung von WebVR.
- [WebVR Directory](https://webvr.directory/) — Liste von hochwertigen WebVR-Seiten.
