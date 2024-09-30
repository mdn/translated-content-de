---
title: WebXR — Virtuelle und Erweiterte Realität für das Web
slug: Games/Techniques/3D_on_the_web/WebXR
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Die Konzepte der virtuellen Realität (VR) und der erweiterten Realität (AR) sind nicht neu, aber die Technologie ist zugänglicher denn je. Wir können auch eine JavaScript-API verwenden, um sie in Webanwendungen zu nutzen. Dieser Artikel führt WebXR aus der Perspektive seiner Nutzung in Spielen ein.

> [!NOTE]
> Sie könnten auf Verweise zur nicht standardisierten WebVR-API stoßen. WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und standardmäßig aktiviert, und unterstützte nur wenige Geräte. Die **WebVR**-API wird durch die [**WebXR**-Geräte-API](/de/docs/Web/API/WebXR_Device_API) ersetzt.

## VR-Geräte

Mit der Popularität bestehender VR-Headsets wie Meta Quest, Valve Index und PlayStation VR sieht die Zukunft rosig aus — wir haben bereits ausreichende Technologie, um bedeutungsvolle VR-Spielerfahrungen zu schaffen.

![Drei verschiedene VR-Geräte: das Meta Quest 3, das Valve Index und das Sony PSVR2.](hmds.jpg)

### Entwicklung von WebVR

Die [WebVR-Spezifikation](https://mozvr.github.io/webvr-spec/webvr.html) wird durch die [WebXR-Geräte-API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR kann noch in einigen Browsern verfügbar sein, während WebXR finalisiert wird.
Für weitere Informationen siehe die [WebVR.info](https://webvr.info/) Website.

## Die WebXR-API

Der Kern jeder WebXR-Erfahrung basiert auf zwei grundlegenden Konzepten:

1. Die Anwendung muss Echtzeitdaten über die Position Ihres Headsets und die Positionen Ihrer Controller im dreidimensionalen Raum erhalten.
2. Die Anwendung muss eine Echtzeit-, stereoskopische Ansicht auf dem Display des Headsets basierend auf diesen Positionsdaten rendern.

Die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ist die zentrale API zur Erfassung von Informationen über mit einem Computer verbundene XR-Geräte. Die API kann Informationen über die Position, Orientierung, Geschwindigkeit, Beschleunigung und andere Daten von Headsets und Controllern erfassen, die Sie in Ihren Spielen verwenden können.

Es gibt auch andere APIs, die nützlich für die Erstellung von Spielen sind, wie die [Gamepad-API](/de/docs/Web/API/Gamepad_API) für nicht-XR-Controller-Eingaben und die [Geräteorientierungs-API](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) für die Handhabung der Anzeigenausrichtung.

### Verwendung der WebXR-API

Der beste Ausgangspunkt für die Arbeit mit der WebXR-API ist unser [Fundamentals of WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)-Leitfaden. Anschließend sehen Sie sich [Sitzung starten und beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) an.

## Werkzeuge und Techniken

[A-Frame](https://aframe.io/) ist ein Web-Framework, das einfache Bausteine für WebXR bietet, sodass Sie schnell VR-Websites und -Spiele entwickeln und experimentieren können. Sie können das MDN-[Tutorial zum Aufbau eines einfachen Demos mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) lesen, um mehr Details zu erhalten.

Darüber hinaus ist Three.js einer der beliebtesten 3D-Engines für das Web und kann für WebXR-Spiele verwendet werden. Schauen Sie sich die Three.js-[Anleitung zur Erstellung von VR-Inhalten](https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content) an, um Ihnen dabei zu helfen, WebXR-Spiele mit Three.js zu erstellen.

![Eine 3D-Darstellung einer Landschaft: Es ist ein rötlicher Sonnenuntergang, mit einem blauen gebirgigen Land im Hintergrund, umgeben von einem spiegelnden Meer und einer dunkleren blauen Insel im zweiten Plan.](sechelt.jpg)

Immersion hat Vorrang vor Gameplay und Grafik - Sie müssen sich als Teil der Erfahrung fühlen. Es ist nicht einfach zu erreichen, aber es erfordert keine realistischen Bilder. Im Gegenteil, selbst einfache Formen, die mit hoher Bildrate vorbeiziehen, können aufregend sein, wenn das Erlebnis immersiv ist. Denken Sie daran: Experimentieren ist entscheidend - fühlen Sie sich frei, was gut für Ihr Projekt funktioniert, zu übernehmen.

## Die Zukunft von WebXR

Verbrauchergeräte sind auf dem Markt verfügbar, und wir haben JavaScript-APIs, um sie im Web zu unterstützen. Da Hardware erschwinglicher wird und das Ökosystem sich weiterentwickelt, können Entwickler sich darauf konzentrieren, Erlebnisse durch gutes UX und UI zu gestalten. Es ist der perfekte Zeitpunkt, um in WebXR einzusteigen und zu experimentieren.

## Siehe auch

- [WebVR-Geräte-API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Aufbau eines einfachen Demos mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
