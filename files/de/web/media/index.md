---
title: Medientechnologien im Web
short-title: Media
slug: Web/Media
l10n:
  sourceCommit: f8fc4cb75e6f0f99bd6f9cb766feafb71af068ec
---

Im Laufe der Jahre hat sich die Fähigkeit des Webs, Audio, Video und andere Medien zu präsentieren, zu erstellen und zu verwalten, weiterentwickelt.
Es gibt mittlerweile eine große Anzahl von APIs sowie HTML-Elemente, DOM-Schnittstellen und andere Funktionen, die es ermöglichen, mit Medien auf spannende und immersive Weise zu arbeiten.
Dieser Artikel listet Leitfäden und Referenzen zu verschiedenen Funktionen auf, die Sie bei der Einbindung von Medien in Ihre Projekte nutzen können.

## Leitfäden

- [Audio- und Video-Bereitstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
  - : Wir können Audio und Video auf verschiedene Arten im Web bereitstellen, von „statischen“ Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel dient als Ausgangspunkt, um die verschiedenen Bereitstellungsmechanismen webbasierter Medien und die Kompatibilität mit gängigen Browsern zu erkunden.
- [Manipulation von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_manipulation)
  - : Native Audio- und Video-Unterstützung im Browser ermöglicht es uns, diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder der [Web Audio API](/de/docs/Web/API/Web_Audio_API) direkt zu modifizieren, z. B. um Nachhall-/Kompressionseffekte auf Audio oder Graustufen-/Sepia-Filter auf Videos anzuwenden.
- [Autoplay-Anleitung für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay)
  - : Unerwartete automatische Wiedergabe von Medien oder Audio kann für Nutzer eine unangenehme Überraschung sein. Autoplay hat zwar seinen Zweck, sollte jedoch sorgfältig eingesetzt werden. Um den Nutzern die Kontrolle zu geben, bieten viele Browser inzwischen Formen der Autoplay-Blockierung. Dieser Artikel ist ein Leitfaden zu Autoplay mit Tipps, wann und wie es zu verwenden ist und wie man mit Browsern arbeiten kann, um Autoplay-Blockierung angemessen zu handhaben.
- [DASH Adaptive Streaming für HTML 5-Video](/de/docs/Web/Media/Guides/DASH_Adaptive_Streaming_for_HTML_5_Video)
  - : Dynamic Adaptive Streaming over HTTP (DASH) ist ein adaptives Streaming-Protokoll. Es ermöglicht einem Videostream, je nach Netzwerkleistung zwischen Bitraten zu wechseln, um eine kontinuierliche Videowiedergabe zu gewährleisten.
- [Streaming von Audio und Video](/de/docs/Web/Media/Guides/Streaming)
  - : Ein Leitfaden, der beschreibt, wie man Audio und Video streamen kann, sowie Techniken und Technologien, die genutzt werden können, um die bestmögliche Qualität und/oder Leistung der Streams sicherzustellen.
- [Medientypen und -formate im Web](/de/docs/Web/Media/Guides/Formats)
  - : Ein Leitfaden zu den Dateitypen und Codecs, die für Bilder, Audio und Video im Web verfügbar sind. Dazu gehören Empfehlungen, welche Formate für welche Inhalte verwendet werden sollen, Best Practices, einschließlich der Bereitstellung von Fallbacks und der Priorisierung von Medientypen, sowie allgemeine Informationen zur Browser-Unterstützung für jedes Medienformat und jeden Codec.
- [Verwendung von Bildern in HTML](/de/docs/Web/Media/Guides/Images)
  - : Ein Leitfaden zum Hinzufügen von Bildern zu Websites, die reaktionsfähig, barrierefrei und leistungsstark sind.

## Referenzen

### HTML

Diese Artikel beschreiben die HTML-Elemente, die zur Einbindung von Medien verwendet werden:

- {{HTMLElement("audio")}}
  - : Das `<audio>`-Element wird zur Wiedergabe von Audio verwendet. Es kann unsichtbar als Ziel für komplexere Medien genutzt werden oder mit sichtbaren Steuerelementen für die benutzerkontrollierte Wiedergabe von Audiodateien. Im JavaScript zugänglich als [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Objekte.
- {{HTMLElement("video")}}
  - : Das `<video>`-Element wird zur Wiedergabe von Videoinhalten verwendet. Es kann zur Anzeige von Videodateien oder als Ziel für gestreamte Videoinhalte genutzt werden. `<video>` kann auch als Verbindung zwischen Medien-APIs und anderen HTML- und DOM-Technologien, einschließlich {{HTMLElement("canvas")}} (z. B. für Frame-Grabbing und Manipulation), verwendet werden. Im JavaScript zugänglich als [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekte.
- {{HTMLElement("track")}}
  - : Das HTML-Element `<track>` kann innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements platziert werden, um eine Referenz zu einer [WebVTT](/de/docs/Web/API/WebVTT_API)-Format-Untertitel- oder Caption-Spur bereitzustellen, die bei der Wiedergabe der Medien verwendet wird. Im JavaScript zugänglich als [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Objekte.
- {{HTMLElement("source")}}
  - : Das HTML-Element `<source>` wird innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet, um die Quelle der anzuzeigenden Medien anzugeben. Mehrere Quellen können verwendet werden, um die Medien in verschiedenen Formaten, Größen oder Auflösungen bereitzustellen. Im JavaScript zugänglich als [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Objekte.

### APIs

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API erlaubt es, die Kodierungs- und Dekodierungsfähigkeiten des Geräts zu bestimmen, auf dem Ihre App oder Ihre Website läuft. So können Sie in Echtzeit Entscheidungen darüber treffen, welche Formate genutzt werden sollen und wann.
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
  - : Eine Referenz für die API, die es ermöglicht, Medien lokal oder über ein Netzwerk zu streamen, aufzuzeichnen und zu bearbeiten. Dazu gehört die Verwendung lokaler Kameras und Mikrofone zur Erfassung von Video, Audio und Standbildern.
- [Media Session API](/de/docs/Web/API/Media_Session_API)
  - : Die Media Session API bietet eine Möglichkeit, Medienbenachrichtigungen anzupassen. Sie stellt Metadaten für die Anzeige durch den User-Agent für die Medien Ihrer Web-App bereit. Außerdem bietet sie Aktions-Handler, die der Browser nutzen kann, um auf Plattform-Mediendatentasten wie Hardwaretasten auf Tastaturen, Headsets, Fernbedienungen und Softwaretasten in Benachrichtigungsbereichen und Sperrbildschirmen von Mobilgeräten zuzugreifen.
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
  - : Die MediaStream Recording API ermöglicht das Erfassen von Medienströmen, um die Daten zu verarbeiten, zu filtern oder auf der Festplatte zu speichern.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Die Web Audio API ermöglicht es, Sounddaten sowohl in Echtzeit als auch in vorab aufgezeichnetem Material zu generieren, zu filtern und zu bearbeiten und diese Audiodaten dann zu einem Ziel weiterzuleiten, etwa einem `<audio>`-Element, einem Medienstrom oder der Festplatte.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) ermöglicht das Streamen von Live-Audio und -Video sowie die Übertragung beliebiger Daten zwischen zwei Peers über das Internet, ohne dass ein Vermittler erforderlich ist.

## Verwandte Themen

Verwandte Themen, die interessant sein könnten, da sie in Kombination mit Medien-APIs auf interessante Weise verwendet werden können.

- [Barrierefreie Multimedia-Inhalte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : In diesem Leitfaden behandeln wir Möglichkeiten, wie Webdesigner:innen und Entwickler:innen Inhalte erstellen können, die für Menschen mit unterschiedlichen Fähigkeiten zugänglich sind. Dies reicht von der Verwendung des [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attributs in {{HTMLElement("img")}}-Elementen über Untertitel bis hin zum Tagging von Medien für Screenreader.
- [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Die Canvas API ermöglicht es, in ein {{HTMLElement("canvas")}} zu zeichnen und den Bildinhalt zu manipulieren und zu ändern. Dies kann auf viele Arten mit Medien kombiniert werden, z. B. indem ein `<canvas>`-Element als Ziel für Videowiedergabe oder Kamerafunktionen verwendet wird, um Videobilder zu erfassen und zu manipulieren.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : WebGL stellt eine OpenGL ES-kompatible API auf Basis der existierenden Canvas API bereit, die es ermöglicht, leistungsfähige 3D-Grafiken im Web zu erstellen. Über ein Canvas kann diese Technologie verwendet werden, um 3D-Bilder zu Medieninhalten hinzuzufügen.
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
  - : WebXR, das die nun veraltete WebVR API ersetzt hat, ist eine Technologie, die Unterstützung für die Erstellung von Virtual Reality (VR)- und Augmented Reality (AR)-Inhalten bietet. Die gemischten Realitätserfahrungen können dann auf dem Bildschirm des Geräts oder mit Brillen oder Headsets angezeigt werden.
- [WebVR](/de/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Die Web Virtual Reality API unterstützt Virtual-Reality-Geräte wie die Oculus Rift oder HTC Vive und ermöglicht Entwicklern, die Position und Bewegung des Nutzers in Bewegungen innerhalb einer 3D-Szene umzusetzen, die dann auf dem Gerät angezeigt wird. WebVR wurde durch WebXR ersetzt und soll bald aus den Browsern entfernt werden.
- [Grundlagen der Web Audio-Raumklangsteuerung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : In 3D-Umgebungen, die entweder als 3D-Szenen auf dem Bildschirm gerendert oder als Mixed-Reality-Erfahrung mit einem Headset erlebt werden, ist es wichtig, Audio so darzustellen, dass es aus der Richtung seines Ursprungs zu kommen scheint. Dieser Leitfaden behandelt, wie man dies erreicht.
