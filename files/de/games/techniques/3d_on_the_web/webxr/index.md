---
title: WebXR — Virtuelle und Erweiterte Realität für das Web
slug: Games/Techniques/3D_on_the_web/WebXR
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Die Konzepte der virtuellen Realität (VR) und der erweiterten Realität (AR) sind nicht neu, aber die Technologie ist heute zugänglicher als je zuvor. Wir können auch eine JavaScript-API nutzen, um sie in Webanwendungen zu verwenden. Dieser Artikel führt in WebXR unter dem Gesichtspunkt seiner Nutzung in Spielen ein.

> [!NOTE]
> Möglicherweise sehen Sie Verweise auf die nicht standardisierte WebVR-API. WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur wenige Geräte. Die **WebVR**-API wird durch die [**WebXR** Device API](/de/docs/Web/API/WebXR_Device_API) ersetzt.

## VR-Geräte

Mit der Beliebtheit bestehender VR-Headsets wie Meta Quest, Valve Index und PlayStation VR sieht die Zukunft rosig aus — wir haben bereits genügend Technologie, um bedeutende VR-Spielerlebnisse zu schaffen.

![Drei verschiedene VR-Geräte: die Meta Quest 3, die Valve Index und die Sony PSVR2.](hmds.jpg)

### Entwicklung von WebVR

Die [WebVR-Spezifikation](https://mozvr.github.io/webvr-spec/webvr.html) wird durch die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR kann noch in einigen Browsern verfügbar sein, während WebXR finalisiert wird.
Weitere Informationen finden Sie auf der [WebVR.info](https://webvr.info/) Website.

## Die WebXR API

Der Kern jeder WebXR-Erfahrung basiert auf zwei grundlegenden Konzepten:

1. Die Anwendung muss Echtzeitdaten über die Position Ihres Headsets und Ihrer Controller im dreidimensionalen Raum erhalten
2. Die Anwendung muss eine Echtzeit-Stereosicht auf dem/den Display(s) des Headsets basierend auf diesen Positionsdaten rendern

Die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ist die zentrale API zum Erfassen von Informationen über XR-Geräte, die mit einem Computer verbunden sind. Die API kann Position, Orientierung, Geschwindigkeit, Beschleunigung des Headsets und Controllers sowie andere Informationen erfassen, die Sie in Ihren Spielen nutzen können.

Es gibt auch andere APIs, die nützlich für die Erstellung von Spielen sind, wie die [Gamepad API](/de/docs/Web/API/Gamepad_API) für nicht-XR-Controller-Eingaben und die [Device Orientation API](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) zur Handhabung der Displayausrichtung.

### Verwendung der WebXR API

Der beste Ausgangspunkt für die WebXR API ist unser [Grundlagen der WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals) Leitfaden. Danach sehen Sie sich [WebXR-Sitzung starten und beenden](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) an.

## Werkzeuge und Techniken

[A-Frame](https://aframe.io/) ist ein Web-Framework, das einfache Bausteine für WebXR bietet, sodass Sie schnell VR-Websites und -Spiele erstellen und ausprobieren können. Sie können das MDN-Tutorial [Ein einfaches Demo mit A-Frame erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) für weitere Details lesen.

Separat dazu ist Three.js eines der beliebtesten 3D-Engines für das Web und kann für WebXR-Spiele verwendet werden. Schauen Sie sich die Three.js-Dokumentation [Wie man VR-Inhalte erstellt](https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content) an, um Ihnen zu helfen, WebXR-Spiele mit Three.js zu erstellen.

![Eine 3D-Darstellung einer Landschaft: Es ist ein rosafarbener Sonnenuntergang, mit einer blauen bergigen Landschaft im Hintergrund, umgeben von einem spiegelnden Meer und einer dunkleren blauen Insel im zweiten Plan.](sechelt.jpg)

Immersion hat Vorrang vor Gameplay und Grafik - Sie müssen sich als Teil des Erlebnisses fühlen. Es ist nicht einfach zu erreichen, aber es erfordert keine realistischen Bilder. Im Gegenteil, selbst grundlegende Formen, die mit hoher Bildrate vorbeifliegen, können spannend sein, wenn das Erlebnis immersiv ist. Denken Sie daran: Experimentieren ist der Schlüssel - zögern Sie nicht, das zu tun, was für Ihr Projekt gut funktioniert.

## Die Zukunft von WebXR

Verbrauchergeräte sind auf dem Markt verfügbar, und wir haben JavaScript-APIs, um sie im Web zu unterstützen. Da Hardware erschwinglicher wird und das Ökosystem reift, können sich Entwickler darauf konzentrieren, Erlebnisse durch gutes UX und UI zu schaffen. Es ist der perfekte Zeitpunkt, um mit WebXR einzutauchen und zu experimentieren.

## Siehe auch

- [WebVR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen der WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Ein einfaches Demo mit A-Frame erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
