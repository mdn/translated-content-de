---
title: Medientechnologien im Web
short-title: Media
slug: Web/Media
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Im Laufe der Jahre hat sich die Fähigkeit des Webs, Audio, Video und andere Medien bereitzustellen, zu erstellen und zu verwalten, weiterentwickelt. Es gibt jetzt eine große Anzahl an APIs sowie HTML-Elemente, DOM-Schnittstellen und andere Funktionen, die es ermöglichen, auf spannende und immersive Weise mit Medien zu arbeiten. Dieser Artikel listet Leitfäden und Referenzen für verschiedene Funktionen auf, die Sie verwenden können, wenn Sie Medien in Ihre Projekte integrieren.

## Leitfäden

- [Übertragung von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
  - : Wir können Audio und Video auf verschiedene Weise im Web bereitstellen, von „statischen“ Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel ist als Ausgangspunkt gedacht, um die verschiedenen Übertragungsmechanismen von webbasierten Medien und die Kompatibilität mit gängigen Browsern zu erkunden.
- [Manipulation von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_manipulation)
  - : Durch native Audio- und Videounterstützung im Browser können wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder [Web Audio API](/de/docs/Web/API/Web_Audio_API) direkt modifizieren, z. B. durch Hinzufügen von Hall-/Kompressionseffekten zu Audio oder Graustufen-/Sepiafiltern zu Video.
- [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
  - : Unerwartete automatische Wiedergabe von Medien oder Audio kann eine unwillkommene Überraschung für Benutzer sein. Während Autoplay einen Zweck erfüllt, sollte es mit Bedacht verwendet werden. Um den Nutzern Kontrolle zu geben, bieten viele Browser nun Formen der Autoplay-Blockierung an. Dieser Artikel ist ein Leitfaden zu Autoplay, mit Tipps, wann und wie es verwendet werden sollte, und wie man mit Browsern zusammenarbeitet, um Autoplay-Blockierungen reibungslos zu handhaben.
- [DASH Adaptive Streaming für HTML-5-Video](Web/Media/Guides/DASH_Adaptive_Streaming_for_HTML_5_Video)
  - : Dynamic Adaptive Streaming over HTTP (DASH) ist ein adaptives Streaming-Protokoll. Dies bedeutet, dass es erlaubt, dass ein Videostream je nach Netzwerkleistung zwischen Bitraten wechselt, um die Wiedergabe eines Videos aufrechtzuerhalten.
- [Streaming von Audio und Video](/de/docs/Web/Media/Guides/Streaming)
  - : Ein Leitfaden, der beschreibt, wie Audio und Video gestreamt werden können, sowie Techniken und Technologien, die genutzt werden können, um die bestmögliche Qualität und/oder Leistung Ihrer Streams sicherzustellen.
- [Medientypen und Formate im Web](/de/docs/Web/Media/Guides/Formats)
  - : Ein Leitfaden zu den Dateitypen und Codecs, die für Bilder, Audio- und Videomedien im Web verfügbar sind. Dazu gehören Empfehlungen, welche Formate für welche Art von Inhalten verwendet werden sollten, bewährte Praktiken einschließlich der Bereitstellung von Fallbacks und der Priorisierung von Medientypen, sowie allgemeine Browser-Unterstützungsinformationen für jedes Mediencontainer- und Codecformat.
- [Bilder in HTML verwenden](/de/docs/Web/Media/Guides/Images)
  - : Ein Leitfaden zum Hinzufügen von Bildern zu Websites, die reaktionsfähig, barrierefrei und performant sind.

## Referenzen

### HTML

Diese Artikel beschreiben die HTML-Elemente, die zur Einbindung von Medien verwendet werden:

- {{HTMLElement("audio")}}
  - : Das `<audio>`-Element wird verwendet, um Audio abzuspielen. Diese können unsichtbar als Ziel für komplexere Medien oder mit sichtbaren Steuerelementen für die benutzergesteuerte Wiedergabe von Audiodateien verwendet werden. Über JavaScript zugänglich als [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Objekte.
- {{HTMLElement("video")}}
  - : Das `<video>`-Element wird verwendet, um Video-Inhalte abzuspielen. Es kann verwendet werden, um Videodateien zu präsentieren oder als Ziel für gestreamte Videoinhalte. `<video>` kann auch als Bindeglied zwischen Medien-APIs und anderen HTML- und DOM-Technologien, einschließlich {{HTMLElement("canvas")}} (zum Frame-Grabbing und zur Manipulation), genutzt werden. Über JavaScript zugänglich als [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekte.
- {{HTMLElement("track")}}
  - : Das HTML-Element `<track>` kann innerhalb eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements platziert werden, um einen Verweis auf eine [WebVTT](/de/docs/Web/API/WebVTT_API)-Formatsubtitel- oder -Captionspur bereitzustellen, die bei der Wiedergabe der Medien verwendet wird. Über JavaScript zugänglich als [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Objekte.
- {{HTMLElement("source")}}
  - : Das HTML-Element `<source>` wird innerhalb eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements verwendet, um die Quellmedien anzugeben, die präsentiert werden sollen. Mehrere Quellen können verwendet werden, um die Medien in verschiedenen Formaten, Größen oder Auflösungen bereitzustellen. Über JavaScript zugänglich als [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Objekte.

### APIs

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht es Ihnen, die Codierungs- und Decodierungsfähigkeiten des Geräts zu bestimmen, auf dem Ihre App oder Website läuft. Dadurch können Sie in Echtzeit Entscheidungen darüber treffen, welche Formate verwendet werden sollen und wann.
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
  - : Eine Referenz für die API, die es ermöglicht, Medien sowohl lokal als auch über ein Netzwerk zu streamen, aufzuzeichnen und zu manipulieren. Dazu gehört die Verwendung lokaler Kameras und Mikrofone zur Erfassung von Video-, Audio- und Standbildern.
- [Media Session API](/de/docs/Web/API/Media_Session_API)
  - : Die Media Session API bietet eine Möglichkeit zur Anpassung von Medienbenachrichtigungen. Dies geschieht durch Bereitstellung von Metadaten zur Anzeige durch den User Agent für die Medien, die Ihre Web-App abspielt. Außerdem bietet sie Aktionshandler, die der Browser verwenden kann, um auf Plattform-Mediatasten wie Hardware-Tasten auf Tastaturen, Headsets, Fernbedienungen und Software-Tasten in Benachrichtigungsbereichen und auf Sperrbildschirmen von Mobilgeräten zuzugreifen.
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
  - : Die MediaStream Recording API ermöglicht es Ihnen, Medienströme zu erfassen, um die Daten zu verarbeiten oder zu filtern oder sie auf einer Festplatte zu speichern.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Die Web Audio API ermöglicht es Ihnen, Klangdaten sowohl in Echtzeit als auch auf voraufgezeichnetem Material zu erzeugen, zu filtern und zu manipulieren und diese dann an ein Ziel wie ein `<audio>`-Element, einen Medienstrom oder auf einer Festplatte zu senden.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) macht es möglich, Live-Audio und -Video zu streamen sowie beliebige Daten zwischen zwei Peers über das Internet zu übertragen, ohne dass ein Zwischenserver erforderlich ist.

## Verwandte Themen

Verwandte Themen, die von Interesse sein könnten, da sie in interessanter Weise zusammen mit Medien-APIs verwendet werden können.

- [Barrierefreie Multimedia-Inhalte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : In diesem Leitfaden behandeln wir Möglichkeiten, wie Webdesigner und Entwickler Inhalte erstellen können, die für Menschen mit unterschiedlichen Fähigkeiten zugänglich sind. Dies reicht von der Verwendung des [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attributs auf {{HTMLElement("img")}}-Elementen bis hin zu Untertiteln und dem Tagging von Medien für Screenreader.
- [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Die Canvas API ermöglicht es Ihnen, in ein {{HTMLElement("canvas")}} zu zeichnen und den Inhalt eines Bildes zu manipulieren und zu ändern. Dies kann auf vielfältige Weise mit Medien verwendet werden, einschließlich indem ein `<canvas>`-Element als Ziel für die Videowiedergabe oder Kameraufnahme festgelegt wird, damit Sie Videoframes erfassen und manipulieren können.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : WebGL bietet eine OpenGL ES-kompatible API zusätzlich zur vorhandenen Canvas API, die leistungsstarke 3D-Grafiken im Web ermöglicht. Über ein Canvas kann dies zur Hinzufügung von 3D-Bildern zu Medieninhalten verwendet werden.
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
  - : WebXR, das die inzwischen veraltete WebVR API ersetzt hat, ist eine Technologie, die Unterstützung bei der Erstellung von Virtual-Reality- (VR) und Augmented-Reality- (AR) Inhalten bietet. Die Inhalte der gemischten Realität können dann auf dem Bildschirm des Geräts angezeigt oder mit einer Schutzbrille oder einem Headset verwendet werden.
- [WebVR](/de/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Die Web Virtual Reality API unterstützt virtuelle Realitätsgeräte wie Oculus Rift oder HTC Vive und ermöglicht es Entwicklern, die Position und Bewegung des Benutzers in eine Bewegung innerhalb einer 3D-Szene zu übersetzen, die dann auf dem Gerät präsentiert wird. WebVR wurde durch WebXR ersetzt und wird bald aus Browsern entfernt werden.
- [Grundlagen der Web-Audio-Raumklanggestaltung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : In 3D-Umgebungen, die entweder 3D-Szenen sein können, die auf den Bildschirm gerendert werden, oder eine mit einem Headset erlebte Mixed-Reality-Erfahrung, ist es wichtig, dass Audio so wiedergegeben wird, dass es sich anhört, als käme es aus der Richtung seiner Quelle. Dieser Leitfaden behandelt, wie dies erreicht werden kann.
