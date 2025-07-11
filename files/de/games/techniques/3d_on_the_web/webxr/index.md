---
title: WebXR — Virtuelle und Erweiterte Realität für das Web
slug: Games/Techniques/3D_on_the_web/WebXR
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Die Konzepte der virtuellen Realität (VR) und der erweiterten Realität (AR) sind nicht neu, aber die Technologie ist zugänglicher als je zuvor. Wir können auch eine JavaScript-API verwenden, um sie in Webanwendungen zu nutzen. Dieser Artikel führt in WebXR aus der Perspektive seiner Verwendung in Spielen ein.

> [!NOTE]
> Sie könnten auf Verweise zur nicht-standardisierten WebVR-API stoßen. WebVR wurde nie als Standard ratifiziert und war nur in wenigen Browsern implementiert und standardmäßig aktiviert, wobei sie nur wenige Geräte unterstützte. Die **WebVR**-API wird durch die [**WebXR**-Device-API](/de/docs/Web/API/WebXR_Device_API) ersetzt.

## VR-Geräte

Mit der Popularität bestehender VR-Headsets wie Meta Quest, Valve Index und PlayStation VR sieht die Zukunft vielversprechend aus — wir verfügen bereits über ausreichende Technologie, um bedeutungsvolle VR-Spielerlebnisse zu schaffen.

![Drei verschiedene VR-Geräte: die Meta Quest 3, die Valve Index und die Sony PSVR2.](hmds.jpg)

## Die WebXR-API

Das Fundament jeder WebXR-Erfahrung basiert auf zwei grundlegenden Konzepten:

1. Die Anwendung muss Echtzeitdaten über die Position Ihres Headsets und Ihrer Controller im dreidimensionalen Raum erhalten.
2. Die Anwendung muss basierend auf diesen Positionsdaten eine Echtzeit-, stereoskopische Ansicht auf dem Display des Headsets rendern.

Die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ist die zentrale API für das Erfassen von Informationen über XR-Geräte, die an einen Computer angeschlossen sind. Die API kann die Position, Orientierung, Geschwindigkeit, Beschleunigung und andere Informationen von Headset und Controllern erfassen, die Sie in Ihren Spielen verwenden können.

Es gibt andere APIs, die nützlich sind, um Spiele zu erstellen, wie z.B. die [Gamepad-API](/de/docs/Web/API/Gamepad_API) für nicht-XR-Controller-Eingaben und die [Device Orientation-API](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) zur Handhabung der Anzeigeorientierung.

### Verwendung der WebXR-API

Der beste Startpunkt mit der WebXR-API ist unser [Grundlagen der WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)-Leitfaden. Danach sollten Sie [Startup and shutdown a WebXR session](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) ansehen.

## Werkzeuge und Techniken

[A-Frame](https://aframe.io/) ist ein Web-Framework, das einfache Bausteine für WebXR bietet, sodass Sie schnell VR-Websites und Spiele erstellen und experimentieren können. MDNs Tutorial [Building up a basic demo with A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) bietet weitere Details.

Darüber hinaus gehört Three.js zu den beliebtesten 3D-Engines für das Web und kann für WebXR-Spiele verwendet werden. Schauen Sie sich die [How to create VR content](https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content) Dokumentation von Three.js an, um WebXR-Spiele mit Three.js zu erstellen.

![Eine 3D-Darstellung einer Landschaft: Es ist ein rosiger Sonnenuntergang mit einem blauen Gebirgsland im Hintergrund, umgeben von einem spiegelglatten Meer und einer dunkler blauen Insel im Hintergrund.](sechelt.jpg)

Eintauchen steht über Gameplay und Grafik - Sie müssen sich als Teil der Erfahrung fühlen. Es ist nicht einfach zu erreichen, aber es erfordert keine realistischen Bilder. Im Gegenteil, selbst grundlegende Formen, die mit hoher Bildfrequenz vorbeiziehen, können spannend sein, wenn die Erfahrung immersiv ist. Denken Sie daran: Experimentieren ist entscheidend - wählen Sie das, was für Ihr Projekt gut funktioniert.

## Die Zukunft von WebXR

Verbrauchergeräte sind auf dem Markt erhältlich, und wir haben JavaScript-APIs, um sie im Web zu unterstützen. Da Hardware erschwinglicher wird und das Ökosystem reift, können Entwickler sich auf das Schaffen von Erlebnissen durch gutes UX und UI konzentrieren. Es ist der perfekte Zeitpunkt, um in WebXR einzutauchen und zu experimentieren.

## Siehe auch

- [WebVR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen der WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Building up a basic demo with A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
