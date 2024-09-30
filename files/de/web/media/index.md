---
title: Web-Medientechnologien
slug: Web/Media
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Im Laufe der Jahre hat die Fähigkeit des Webs, Audio, Video und andere Medien zu präsentieren, zu erstellen und zu verwalten, stetig zugenommen. Heute stehen eine Vielzahl von APIs zur Verfügung, ebenso wie HTML-Elemente, DOM-Schnittstellen und andere Funktionen, die es ermöglichen, diese Aufgaben nicht nur zu erledigen, sondern Medien in Verbindung mit anderen Technologien zu nutzen, um wirklich bemerkenswerte Dinge zu schaffen. Dieser Artikel listet die verschiedenen APIs mit Links zu deren Dokumentation auf, die Ihnen beim Erlernen hilfreich sein können.

## Referenzen

### HTML

Diese Artikel behandeln HTML-Funktionen für Medienentwickler.

- {{HTMLElement("audio")}}
  - : Das `<audio>`-Element wird verwendet, um Audio in einem Web-Kontext abzuspielen. Diese können unsichtbar als Ziel für komplexere Medien verwendet werden oder mit sichtbaren Steuerelementen für eine benutzergesteuerte Wiedergabe von Audiodateien. Über JavaScript zugänglich als [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Objekte.
- {{HTMLElement("video")}}
  - : Das `<video>`-Element ist ein Endpunkt für Videoinhalte in einem Web-Kontext. Es kann verwendet werden, um Videodateien darzustellen oder als Ziel für gestreamte Videoinhalte. `<video>` kann auch als Möglichkeit genutzt werden, Medien-APIs mit anderen HTML- und DOM-Technologien, einschließlich {{HTMLElement("canvas")}} (zum Erfassen und Bearbeiten von Frames), zu verknüpfen. Über JavaScript zugänglich als [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekte.
- {{HTMLElement("track")}}
  - : Das HTML-Element `<track>` kann innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements platziert werden, um einen Verweis auf eine [WebVTT](/de/docs/Web/API/WebVTT_API)-Format-Untertitel- oder -Caption-Spur bereitzustellen, die bei der Medienwiedergabe verwendet werden soll. Über JavaScript zugänglich als [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Objekte.
- {{HTMLElement("source")}}
  - : Das HTML-Element `<source>` wird innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet, um die darzustellenden Medienquellen anzugeben. Mehrere Quellen können verwendet werden, um die Medien in verschiedenen Formaten, Größen oder Auflösungen bereitzustellen. Über JavaScript zugänglich als [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Objekte.

### APIs

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht es Ihnen, die Codierungs- und Decodierungsfähigkeiten des Geräts zu bestimmen, auf dem Ihre App oder Website läuft. Dadurch können Sie in Echtzeit Entscheidungen darüber treffen, welche Formate wann verwendet werden sollen.
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
  - : Eine Referenz für die API, die das Streamen, Aufnehmen und Bearbeiten von Medien sowohl lokal als auch über ein Netzwerk ermöglicht. Dies umfasst die Verwendung lokaler Kameras und Mikrofone zur Video-, Audio- und Standbildaufnahme.
- [Media Session API](/de/docs/Web/API/Media_Session_API)
  - : Die Media Session API bietet eine Möglichkeit, Medienbenachrichtigungen anzupassen, indem Metadaten für die vom Benutzeragenten angezeigten Medien bereitgestellt werden, die Ihre Web-App abspielt. Außerdem bietet sie Aktionshandler, die der Browser verwenden kann, um auf Plattform-Medien-Schlüsseln wie Hardware-Tasten auf Tastaturen, Headsets, Fernbedienungen und Software-Tasten zuzugreifen, die in Benachrichtigungsbereichen und auf Sperrbildschirmen mobiler Geräte zu finden sind.
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
  - : Die MediaStream Recording API ermöglicht es Ihnen, Medienströme zu erfassen, um die Daten zu verarbeiten oder zu filtern oder sie auf eine Festplatte zu speichern.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Die Web Audio API ermöglicht es Ihnen, Klangdaten sowohl in Echtzeit als auch auf vorab aufgezeichnetem Material zu generieren, zu filtern und zu bearbeiten und dann diese Audiodaten an ein Ziel wie ein `<audio>`-Element, einen Medienstrom oder auf eine Festplatte zu senden.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) macht es möglich, Live-Audio und -Video zu streamen sowie beliebige Daten zwischen zwei Peers über das Internet zu übertragen, ohne dass ein Vermittler erforderlich ist.

## Leitfäden

- [Verwendung von Audio und Video in HTML](/de/docs/Web/Media/HTML_media)
  - : Ein Leitfaden zur Verwendung der HTML-Elemente `<audio>` und `<video>`.
- [Verwendung von Bildern in HTML](/de/docs/Web/Media/images)
  - : Ein Leitfaden zum Hinzufügen von Bildern zu Websites, die reaktionsfähig, zugänglich und leistungsfähig sind.
- [Zugängliche Multimedia](/de/docs/Learn/Accessibility/Multimedia)
  - : In diesem Leitfaden behandeln wir Möglichkeiten für Web-Designer und Entwickler, Inhalte zu erstellen, die für Menschen mit unterschiedlichen Fähigkeiten zugänglich sind. Dies reicht von der Verwendung des [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attributs auf {{HTMLElement("img")}}-Elementen bis hin zu Untertiteln und der Kennzeichnung von Medien für Screenreader.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
  - : Ein Leitfaden zu den Dateitypen und Codecs, die für Bild-, Audio- und Video-Medien im Web verfügbar sind. Dies beinhaltet Empfehlungen, welche Formate für welche Art von Inhalten verwendet werden sollen, bewährte Praktiken, einschließlich des Bereitstellens von Fallbacks und Priorisieren von Medientypen, sowie allgemeine Informationen zur Browserunterstützung für jedes Mediencontainer- und Codec-Format.
- [Streaming von Audio und Video](/de/docs/Web/Media/Streaming)
  - : Ein Leitfaden, der behandelt, wie Audio- und Video-Streams gestreamt werden können, sowie Techniken und Technologien, die genutzt werden können, um die bestmögliche Qualität und/oder Leistung Ihrer Streams sicherzustellen.
- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide)
  - : Unverhoffte automatische Wiedergabe von Medien oder Audio kann für Benutzer eine unwillkommene Überraschung sein. Während Autoplay einem Zweck dient, sollte es mit Bedacht eingesetzt werden. Um den Benutzern die Kontrolle darüber zu geben, bieten viele Browser jetzt Formen der Autoplay-Blockierung an. Dieser Artikel ist ein Leitfaden zu Autoplay, mit Tipps, wann und wie es verwendet werden sollte und wie man mit Browsern zusammenarbeitet, um Autoplay-Blockierungen elegant zu handhaben.
- [Web Audio Spatialization-Grundlagen](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : In 3D-Umgebungen, die entweder auf dem Bildschirm gerenderte 3D-Szenen oder ein Mixed-Reality-Erlebnis mit einem Headset sein können, ist es wichtig, dass Audio so abgespielt wird, dass es aus der Richtung seiner Quelle kommt. Dieser Leitfaden behandelt, wie dies erreicht werden kann.

## Andere Themen

Verwandte Themen, die von Interesse sein könnten, da sie in interessanter Weise mit Medien-APIs verwendet werden können.

- [Die Canvas API](/de/docs/Web/API/Canvas_API)
  - : Die Canvas API ermöglicht es Ihnen, in ein {{HTMLElement("canvas")}} zu zeichnen und den Inhalt eines Bildes zu manipulieren und zu verändern. Dies kann auf vielfältige Weise mit Medien genutzt werden, einschließlich der Festlegung eines `<canvas>`-Elements als Ziel für die Videowiedergabe oder Kamerafunktion, um Video-Frames zu erfassen und zu bearbeiten.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : WebGL bietet eine OpenGL ES-kompatible API auf der bestehenden Canvas API, was es möglich macht, leistungsstarke 3D-Grafiken im Web zu erstellen. Über ein Canvas kann dies verwendet werden, um 3D-Bilder zu Medieninhalten hinzuzufügen.
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
  - : WebXR, das die mittlerweile veraltete WebVR API ersetzt hat, ist eine Technologie, die Unterstützung für die Erstellung von Virtual-Reality (VR) und Augmented-Reality (AR) Inhalten bietet. Die Mixed-Reality-Inhalte können dann auf dem Bildschirm des Geräts oder mit einer Brille oder einem Headset angezeigt werden.
- [WebVR](/de/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Die Web Virtual Reality API unterstützt Virtual-Reality-Geräte wie die Oculus Rift oder HTC Vive, wodurch Entwickler die Position und Bewegung des Benutzers in Bewegungen innerhalb einer 3D-Szene umsetzen können, die dann auf dem Gerät präsentiert wird. WebVR wurde durch WebXR ersetzt und wird bald aus den Browsern entfernt.
