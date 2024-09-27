---
title: Web-Medien-Technologien
slug: Web/Media
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Im Laufe der Jahre hat sich die Fähigkeit des Webs, Audio, Video und andere Medien darzustellen, zu erstellen und zu verwalten, in immer schnellerem Tempo entwickelt. Heute stehen eine Vielzahl von APIs zur Verfügung, ebenso wie HTML-Elemente, DOM-Schnittstellen und andere Funktionen, die nicht nur das Ausführen dieser Aufgaben ermöglichen, sondern auch die Nutzung von Medien in Kombination mit anderen Technologien, um wirklich bemerkenswerte Dinge zu tun. Dieser Artikel listet die verschiedenen APIs mit Links zu Dokumentationen auf, die Ihnen beim Erlernen hilfreich sein könnten.

## Referenzen

### HTML

Diese Artikel behandeln HTML-Funktionen für Medienentwickler.

- {{HTMLElement("audio")}}
  - : Das `<audio>`-Element wird verwendet, um Audio im Web-Kontext abzuspielen. Diese können unsichtbar als Ziel für komplexere Medien oder mit sichtbaren Steuerungen für die benutzerkontrollierte Wiedergabe von Audiodateien verwendet werden. Zugriff von JavaScript als [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Objekte.
- {{HTMLElement("video")}}
  - : Das `<video>`-Element ist ein Endpunkt für Videoinhalte im Web-Kontext. Es kann verwendet werden, um Videodateien darzustellen oder als Ziel für gestreamte Videoinhalte. `<video>` kann auch als Möglichkeit genutzt werden, Medien-APIs mit anderen HTML- und DOM-Technologien zu verknüpfen, einschließlich {{HTMLElement("canvas")}} (zum Beispiel für das Erfassen und Manipulieren von Frames). Zugriff von JavaScript als [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekte.
- {{HTMLElement("track")}}
  - : Das HTML-`<track>`-Element kann innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements platziert werden, um einen Verweis auf eine [WebVTT](/de/docs/Web/API/WebVTT_API)-Format-Untertitel- oder Beschriftungsspur bereitzustellen, die bei der Wiedergabe der Medien verwendet werden soll. Zugriff von JavaScript als [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Objekte.
- {{HTMLElement("source")}}
  - : Das HTML-`<source>`-Element wird innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet, um die anzubietenden Medienquelle anzugeben. Mehrere Quellen können verwendet werden, um die Medien in verschiedenen Formaten, Größen oder Auflösungen bereitzustellen. Zugriff von JavaScript als [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Objekte.

### APIs

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht es Ihnen, die Kodierungs- und Dekodierungsfähigkeiten des Geräts zu bestimmen, auf dem Ihre App oder Website ausgeführt wird. Dies ermöglicht Ihnen Echtzeitentscheidungen darüber zu treffen, welche Formate verwendet werden sollen und wann.
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
  - : Ein Referenzhandbuch für die API, die es ermöglicht, Medien sowohl lokal als auch über ein Netzwerk zu streamen, aufzunehmen und zu manipulieren. Dies umfasst die Verwendung lokaler Kameras und Mikrofone zur Aufnahme von Videos, Audio und Standbildern.
- [Media Session API](/de/docs/Web/API/Media_Session_API)
  - : Die Media Session API bietet eine Möglichkeit, Medienbenachrichtigungen anzupassen. Dies erfolgt durch die Bereitstellung von Metadaten für die Anzeige durch den Benutzeragent für die Medien, die Ihre Web-App abspielt. Sie bietet auch Aktionshandler, die der Browser verwenden kann, um auf Plattform-Mediaschlüssel zuzugreifen, wie Hardware-Tasten auf Tastaturen, Headsets, Fernbedienungen, und Software-Tasten in Benachrichtigungsbereichen und auf Sperrbildschirmen von mobilen Geräten.
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
  - : Die MediaStream Recording API ermöglicht es Ihnen, Medienströme zu erfassen, um die Daten zu verarbeiten oder zu filtern oder sie auf die Festplatte aufzuzeichnen.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Die Web Audio API ermöglicht es Ihnen, Klangdaten sowohl in Echtzeit als auch auf vorab aufgenommenem Material zu erzeugen, zu filtern und zu manipulieren und dann diese Audio an ein Ziel wie ein `<audio>`-Element, einen Medienstrom oder auf die Festplatte zu senden.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) ermöglicht es, Live-Audio und -Video zu streamen sowie beliebige Daten zwischen zwei Peers über das Internet zu übertragen, ohne dass ein Vermittler erforderlich ist.

## Leitfäden

- [Verwendung von Audio und Video in HTML](/de/docs/Web/Media/HTML_media)
  - : Ein Leitfaden zur Verwendung der HTML-Elemente `<audio>` und `<video>`.
- [Verwendung von Bildern in HTML](/de/docs/Web/Media/images)
  - : Ein Leitfaden zur Einbindung von Bildern auf Websites, die reaktionsschnell, barrierefrei und leistungsfähig sind.
- [Barrierefreies Multimedia](/de/docs/Learn/Accessibility/Multimedia)
  - : In diesem Leitfaden behandeln wir Möglichkeiten, wie Webdesigner und Entwickler Inhalte erstellen können, die für Menschen mit unterschiedlichen Fähigkeiten zugänglich sind. Dies reicht von der Verwendung des [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attributes auf {{HTMLElement("img")}}-Elementen bis hin zu Untertiteln und der Kennzeichnung von Medien für Screenreader.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
  - : Ein Leitfaden zu den Dateitypen und Codecs, die für Bilder, Audio und Videomedien im Web verfügbar sind. Dies umfasst Empfehlungen, welche Formate für welche Arten von Inhalten verwendet werden sollen, bewährte Verfahren, einschließlich wie man Fallbacks bereitstellt und Medientypen priorisiert, und enthält allgemeine Informationen zur Browser-Unterstützung für jedes Mediencontainer- und Codec-Format.
- [Streaming von Audio und Video](/de/docs/Web/Media/Streaming)
  - : Ein Leitfaden, der behandelt, wie man Audio und Video streamt, sowie Techniken und Technologien, die Sie nutzen können, um die bestmögliche Qualität und/oder Leistung Ihrer Streams sicherzustellen.
- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide)
  - : Unerwartete automatische Wiedergabe von Medien oder Audio kann für Benutzer eine unerwünschte Überraschung sein. Während Autoplay einem Zweck dient, sollte es mit Bedacht eingesetzt werden. Um Benutzern die Kontrolle darüber zu geben, bieten viele Browser mittlerweile Formen des Autoplay-Blockierens an. Dieser Artikel ist ein Leitfaden zu Autoplay, mit Tipps, wann und wie es verwendet werden sollte und wie man mit Browsern arbeitet, um das Autoplay-Blockieren elegant zu handhaben.
- [Grundlagen der Web Audio-Umgebung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : In 3D-Umgebungen, die entweder 3D-Szenen sind, die auf den Bildschirm gerendert werden, oder eine Mixed-Reality-Erfahrung, die mit einem Headset erlebt wird, ist es wichtig, dass Audio so ausgeführt wird, dass es so klingt, als käme es aus der Richtung der Quelle. Dieser Leitfaden behandelt, wie man dies erreicht.

## Weitere Themen

Verwandte Themen, die von Interesse sein könnten, da sie auf interessante Weise zusammen mit Medien-APIs verwendet werden können.

- [Die Canvas API](/de/docs/Web/API/Canvas_API)
  - : Die Canvas API ermöglicht es, in ein {{HTMLElement("canvas")}} zu zeichnen, indem der Inhalt eines Bildes manipuliert und verändert wird. Dies kann auf viele Arten mit Medien verwendet werden, einschließlich durch Setzen eines `<canvas>`-Elements als Ziel für die Videowiedergabe oder Kamerafreigabe, sodass Sie Videoframes erfassen und manipulieren können.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : WebGL bietet eine OpenGL ES-kompatible API auf Basis der vorhandenen Canvas API, die es ermöglicht, leistungsstarke 3D-Grafiken im Web zu erstellen. Durch ein Canvas kann dies verwendet werden, um 3D-Bilder zu Medieninhalten hinzuzufügen.
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
  - : WebXR, das die jetzt veraltete WebVR-API ersetzt hat, ist eine Technologie, die Unterstützung für die Erstellung von Virtual-Reality-(VR)- und Augmented-Reality-(AR)-Inhalten bietet. Die Mixed-Reality-Inhalte können dann auf dem Bildschirm des Gerätes oder mit Brillen oder einem Headset angezeigt werden.
- [WebVR](/de/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Die Web Virtual Reality API unterstützt Virtual-Reality-(VR)-Geräte wie die Oculus Rift oder das HTC Vive und macht es Entwicklern möglich, Benutzerposition und -bewegungen in Bewegungen innerhalb einer 3D-Szene zu übersetzen, die dann auf dem Gerät präsentiert wird. WebVR wurde durch WebXR ersetzt und wird bald aus Browsern entfernt.
