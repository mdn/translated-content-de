---
title: WebXR — Virtuelle und erweiterte Realität für das Web
slug: Games/Techniques/3D_on_the_web/WebXR
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Die Konzepte der virtuellen Realität (VR) und der erweiterten Realität (AR) sind nicht neu, aber die Technologie ist zugänglicher als je zuvor. Wir können auch eine JavaScript-API nutzen, um sie in Webanwendungen einzusetzen. Dieser Artikel führt in WebXR aus der Perspektive seiner Nutzung in Spielen ein.

> [!NOTE]
> Möglicherweise sehen Sie Verweise auf die nicht-standardisierte WebVR-API. WebVR wurde nie als Standard ratifiziert, nur in sehr wenigen Browsern implementiert und standardmäßig aktiviert sowie nur von wenigen Geräten unterstützt. Die **WebVR**-API wird durch die [**WebXR** Device API](/de/docs/Web/API/WebXR_Device_API) ersetzt.

## VR-Geräte

Mit der Beliebtheit bestehender VR-Headsets wie Meta Quest, Valve Index und PlayStation VR sieht die Zukunft vielversprechend aus — wir haben bereits genügend Technologie, um bedeutungsvolle VR-Spielerlebnisse zu schaffen.

![Drei verschiedene VR-Geräte: die Meta Quest 3, das Valve Index und das Sony PSVR2.](hmds.jpg)

### Entwicklung von WebVR

Die [WebVR-Spezifikation](https://mozvr.github.io/webvr-spec/webvr.html) wird durch die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR könnte in einigen Browsern weiterhin verfügbar sein, während WebXR finalisiert wird.
Für weitere Informationen besuchen Sie die Website [WebVR.info](https://webvr.info/).

## Die WebXR-API

Das Herzstück jeder WebXR-Erfahrung basiert auf zwei grundlegenden Konzepten:

1. Die Anwendung muss Echtzeitdaten über die Position Ihres Headsets und Ihrer Controller im dreidimensionalen Raum empfangen
2. Die Anwendung muss eine Echtzeit-Stereoskopansicht auf dem Display(s) des Headsets entsprechend diesen Positionsdaten rendern

Die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ist die zentrale API zum Erfassen von Informationen über XR-Geräte, die mit einem Computer verbunden sind. Die API kann Informationen zur Position, Orientierung, Geschwindigkeit, Beschleunigung von Headset und Controllern sowie andere Informationen erfassen, die Sie in Ihren Spielen verwenden können.

Es gibt andere APIs, die nützlich für die Erstellung von Spielen sind, wie die [Gamepad-API](/de/docs/Web/API/Gamepad_API) für nicht-XR-Controller-Eingaben und die [Device Orientation API](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) zur Handhabung der Display-Orientierung.

### Verwendung der WebXR-API

Der beste Ausgangspunkt mit der WebXR-API ist unser Leitfaden [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals). Anschließend sehen Sie sich [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) an.

## Werkzeuge und Techniken

[A-Frame](https://aframe.io/) ist ein Web-Framework, das einfache Bausteine für WebXR bietet, so dass Sie schnell VR-Websites und -Spiele erstellen und experimentieren können. Sie können das MDN-Tutorial [Grundlegende Demo mit A-Frame aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) lesen, um weitere Details zu erfahren.

Unabhängig davon ist Three.js einer der beliebtesten 3D-Engines für das Web und kann für WebXR-Spiele verwendet werden. Schauen Sie sich Three.js' Dokumentation [How to create VR content](https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content) an, um Ihnen zu helfen, WebXR-Spiele mit Three.js zu erstellen.

![Eine 3D-Darstellung einer Landschaft: Es ist ein rosa Sonnenuntergang, mit einer blauen gebirgigen Landschaft im Hintergrund, umgeben von einem spiegelnden Meer und einer dunkleren blauen Insel im zweiten Plan.](sechelt.jpg)

Eintauchen hat Vorrang vor Gameplay und Grafik - Sie müssen sich als Teil des Erlebnisses fühlen. Es ist nicht leicht zu erreichen, aber es erfordert keine realistischen Bilder. Im Gegenteil, selbst einfache Formen, die mit hoher Bildfrequenz vorbeigleiten, können aufregend sein, wenn das Erlebnis immersiv ist. Denken Sie daran: Experimentieren ist der Schlüssel - gehen Sie ruhig den Weg, der für Ihr Projekt gut funktioniert.

## Die Zukunft von WebXR

Konsumentengeräte sind auf dem Markt verfügbar, und wir haben JavaScript-APIs, um sie im Web zu unterstützen. Da die Hardware erschwinglicher wird und das Ökosystem reift, können sich Entwickler darauf konzentrieren, Erlebnisse durch gutes UX und UI zu gestalten. Es ist der perfekte Zeitpunkt, um einzutauchen und mit WebXR zu experimentieren.

## Siehe auch

- [WebVR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Grundlegende Demo mit A-Frame aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
