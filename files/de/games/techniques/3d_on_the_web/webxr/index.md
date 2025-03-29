---
title: WebXR — Virtuelle und Erweiterte Realität für das Web
slug: Games/Techniques/3D_on_the_web/WebXR
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{GamesSidebar}}

Die Konzepte der virtuellen Realität (VR) und der erweiterten Realität (AR) sind nicht neu, aber die Technologie ist zugänglicher denn je. Wir können auch eine JavaScript-API nutzen, um sie in Webanwendungen zu integrieren. Dieser Artikel führt in WebXR aus der Perspektive seiner Anwendung in Spielen ein.

> [!NOTE]
> Möglicherweise sehen Sie Verweise auf die nicht-standardisierte WebVR-API. WebVR wurde nie als Standard ratifiziert, wurde in nur sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur wenige Geräte. Die **WebVR**-API wird durch die [**WebXR**-Geräte-API](/de/docs/Web/API/WebXR_Device_API) ersetzt.

## VR-Geräte

Mit der Popularität bestehender VR-Headsets wie Meta Quest, Valve Index und PlayStation VR sieht die Zukunft vielversprechend aus — wir haben bereits ausreichende Technologie, um bedeutungsvolle VR-Gaming-Erlebnisse zu schaffen.

![Drei verschiedene VR-Geräte: die Meta Quest 3, das Valve Index und die Sony PSVR2.](hmds.jpg)

## Die WebXR-API

Das Herzstück jeder WebXR-Erfahrung basiert auf zwei grundlegenden Konzepten:

1. Die Anwendung muss Echtzeitdaten über die Position Ihres Headsets und Ihrer Controller im dreidimensionalen Raum erhalten.
2. Die Anwendung muss je nach diesen Positionsdaten eine Echtzeit-Stereoscopic-Ansicht auf dem Display des Headsets rendern.

Die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ist die zentrale API, um Informationen über XR-Geräte zu erfassen, die mit einem Computer verbunden sind. Die API kann Position, Orientierung, Geschwindigkeit, Beschleunigung und andere Informationen des Headsets und der Controller erfassen, die Sie in Ihren Spielen verwenden können.

Es gibt andere APIs, die nützlich für die Erstellung von Spielen sind, wie die [Gamepad API](/de/docs/Web/API/Gamepad_API) für nicht-XR-Controller-Eingaben und die [Device Orientation API](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) zur Handhabung der Displayausrichtung.

### Verwendung der WebXR-API

Der beste Ausgangspunkt für die WebXR-API ist unser [Leitfaden zu den Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals). Danach sollten Sie sich [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) ansehen.

## Werkzeuge und Techniken

[A-Frame](https://aframe.io/) ist ein Web-Framework, das einfache Bausteine für WebXR anbietet, sodass Sie schnell VR-Websites und -Spiele erstellen und experimentieren können. Sie können in MDNs Anleitung [Erstellen eines einfachen Demos mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) weitere Details nachlesen.

Unabhängig davon ist Three.js eine der beliebtesten 3D-Engines für das Web und kann für WebXR-Spiele verwendet werden. Schauen Sie sich die Three.js-Dokumentation [Anleitung zur Erstellung von VR-Inhalten](https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content) an, um Ihnen beim Erstellen von WebXR-Spielen mit Three.js zu helfen.

![Eine 3D-Darstellung einer Landschaft: Es ist ein rosafarbener Sonnenuntergang, mit einem blauen bergigen Land im Hintergrund, umgeben von einem spiegelnden Meer und einer dunkleren blauen Insel im zweiten Plan.](sechelt.jpg)

Immersion hat Vorrang vor Gameplay und Grafik - Sie müssen sich als Teil der Erfahrung fühlen. Das ist nicht einfach zu erreichen, aber es erfordert keine realistischen Bilder. Im Gegenteil, selbst einfache Formen, die mit hohen Bildraten vorbeiziehen, können aufregend sein, wenn die Erfahrung immersiv ist. Denken Sie daran: Experimentieren ist der Schlüssel - fühlen Sie sich frei, das zu tun, was für Ihr Projekt gut funktioniert.

## Die Zukunft von WebXR

Verbrauchergeräte sind auf dem Markt erhältlich, und wir haben JavaScript-APIs, um sie im Web zu unterstützen. Da die Hardware erschwinglicher wird und das Ökosystem reift, können sich Entwickler darauf konzentrieren, Erfahrungen durch gutes UX und UI zu gestalten. Es ist der perfekte Zeitpunkt, um in die Welt von WebXR einzutauchen und zu experimentieren.

## Siehe auch

- [WebVR-Geräte-API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Erstellen eines einfachen Demos mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
