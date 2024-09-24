---
title: Web-Medientechnologien
slug: Web/Media
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Im Laufe der Jahre hat sich die Fähigkeit des Webs, Audio-, Video- und andere Medien zu präsentieren, zu erstellen und zu verwalten, in einem zunehmenden Tempo entwickelt. Heute gibt es eine Vielzahl von APIs, sowie HTML-Elemente, DOM-Schnittstellen und andere Funktionen, die es ermöglichen, diese Aufgaben nicht nur auszuführen, sondern Medien in Kombination mit anderen Technologien zu nutzen, um wirklich bemerkenswerte Dinge zu tun. Dieser Artikel listet die verschiedenen APIs mit Links zur Dokumentation auf, die Ihnen beim Meistern dieser APIs hilfreich sein könnten.

## Referenzen

### HTML

Diese Artikel behandeln HTML-Funktionen für Medienentwickler.

- {{HTMLElement("audio")}}
  - : Das `<audio>`-Element wird verwendet, um Audio in einem Webkontext abzuspielen. Diese können unsichtbar als Ziel für komplexere Medien verwendet werden oder mit sichtbaren Steuerelementen für benutzerkontrollierte Wiedergabe von Audiodateien. Vom JavaScript aus zugänglich als {{domxref("HTMLAudioElement")}} Objekte.
- {{HTMLElement("video")}}
  - : Das `<video>`-Element ist ein Endpunkt für Videoinhalte in einem Webkontext. Es kann verwendet werden, um Videodateien zu präsentieren oder als Ziel für gestreamte Videoinhalte. `<video>` kann auch als Möglichkeit verwendet werden, Medien-APIs mit anderen HTML- und DOM-Technologien zu verknüpfen, einschließlich {{HTMLElement("canvas")}} (für das Erfassen und Bearbeiten von Frames) zum Beispiel. Vom JavaScript aus zugänglich als {{domxref("HTMLVideoElement")}} Objekte.
- {{HTMLElement("track")}}
  - : Das HTML-Element `<track>` kann innerhalb eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements platziert werden, um einen Verweis auf eine [WebVTT](/de/docs/Web/API/WebVTT_API) Format-Untertitel- oder Caption-Spur bereitzustellen, die beim Abspielen der Medien verwendet werden soll. Vom JavaScript aus zugänglich als {{domxref("HTMLTrackElement")}} Objekte.
- {{HTMLElement("source")}}
  - : Das HTML-Element `<source>` wird innerhalb eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements verwendet, um Quellmedien anzugeben, die präsentiert werden sollen. Mehrere Quellen können verwendet werden, um die Medien in verschiedenen Formaten, Größen oder Auflösungen bereitzustellen. Vom JavaScript aus zugänglich als {{domxref("HTMLSourceElement")}} Objekte.

### APIs

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht es, die Codierungs- und Decodierungsfähigkeiten des Geräts zu bestimmen, auf dem Ihre App oder Website ausgeführt wird. Dies ermöglicht es, in Echtzeit Entscheidungen darüber zu treffen, welche Formate verwendet werden sollen und wann.
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
  - : Eine Referenz für die API, die es ermöglicht, Medien lokal und über ein Netzwerk zu streamen, aufzunehmen und zu manipulieren. Dies umfasst die Verwendung lokaler Kameras und Mikrofone zur Aufnahme von Videos, Audios und Standbildern.
- [Media Session API](/de/docs/Web/API/Media_Session_API)
  - : Die Media Session API bietet eine Möglichkeit, Medienbenachrichtigungen anzupassen. Dies geschieht durch Bereitstellung von Metadaten zur Anzeige durch den User-Agent für die Medien, die Ihre Web-App abspielt. Sie bietet auch Aktionshandler, die der Browser verwenden kann, um auf Plattform-Medienschlüssel wie Hardwaretasten auf Tastaturen, Headsets, Fernbedienungen und Softwaretasten in Benachrichtigungsbereichen und auf Sperrbildschirmen mobiler Geräte zuzugreifen.
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
  - : Die MediaStream Recording API ermöglicht es, Medienstreams zu erfassen, um die Daten zu verarbeiten oder zu filtern oder sie auf die Festplatte aufzunehmen.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Die Web Audio API ermöglicht es, Klangdaten sowohl in Echtzeit als auch auf voraufgezeichnetem Material zu erzeugen, zu filtern und zu manipulieren und dann dieses Audio an ein Ziel wie ein `<audio>`-Element, einen Medienstream oder auf die Festplatte zu senden.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) ermöglicht es, Live-Audio und -Video zu streamen sowie beliebige Daten zwischen zwei Peers über das Internet zu übertragen, ohne dass ein Vermittler erforderlich ist.

## Handbücher

- [Verwendung von Audio und Video in HTML](/de/docs/Web/Media/HTML_media)
  - : Ein Leitfaden zur Verwendung der HTML-Elemente `<audio>` und `<video>`.
- [Verwendung von Bildern in HTML](/de/docs/Web/Media/images)
  - : Ein Leitfaden zum Hinzufügen von Bildern zu Websites, die reaktionsschnell, barrierefrei und leistungsfähig sind.
- [Barrierefreie Multimedia-Inhalte](/de/docs/Learn/Accessibility/Multimedia)
  - : In diesem Leitfaden behandeln wir Möglichkeiten, wie Webdesigner und -entwickler Inhalte erstellen können, die für Menschen mit unterschiedlichen Fähigkeiten zugänglich sind. Dies reicht von der Verwendung des [`alt`](/de/docs/Web/HTML/Element/img#alt) Attributs bei {{HTMLElement("img")}} Elementen bis hin zu Untertiteln und dem Tagging von Medien für Screenreader.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
  - : Ein Leitfaden zu den Dateitypen und Codecs, die für Bilder, Audio- und Videomedien im Web verfügbar sind. Dies umfasst Empfehlungen, welche Formate für welche Arten von Inhalten verwendet werden sollen, Best Practices einschließlich der Bereitstellung von Fallbacks und der Priorisierung von Medientypen sowie allgemeine Informationen zur Browserunterstützung für jeden Mediencontainer und Codec.
- [Streaming von Audio und Video](/de/docs/Web/Media/Streaming)
  - : Ein Leitfaden, der behandelt, wie man Audio und Video streamt, sowie Techniken und Technologien, die genutzt werden können, um die bestmögliche Qualität und/oder Leistung Ihrer Streams sicherzustellen.
- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide)
  - : Unerwartete automatische Wiedergabe von Medien oder Audio kann eine unwillkommene Überraschung für Benutzer sein. Während Autoplay einen Zweck erfüllt, sollte es sorgfältig eingesetzt werden. Um den Benutzern die Kontrolle darüber zu geben, bieten viele Browser jetzt Formen der Autoplay-Blockierung an. Dieser Artikel ist ein Leitfaden zu Autoplay, mit Tipps, wann und wie man es verwendet und wie man mit Browsern zusammenarbeitet, um Autoplay-Blockierung elegant zu handhaben.
- [Grundlagen der Web Audio-Raumklangverarbeitung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : In 3D-Umgebungen, die entweder als 3D-Szenen auf dem Bildschirm gerendert oder als gemischte Realitätserfahrung mit einem Headset erlebt werden, ist es wichtig, dass Audio so ausgeführt wird, dass es sich anhört, als käme es aus der Richtung der Quelle. Dieser Leitfaden behandelt, wie dies erreicht werden kann.

## Andere Themen

Verwandte Themen, die von Interesse sein könnten, da sie in interessanten Kombinationen mit Medien-APIs verwendet werden können.

- [Die Canvas API](/de/docs/Web/API/Canvas_API)
  - : Die Canvas API ermöglicht es, in ein {{HTMLElement("canvas")}} zu zeichnen und den Inhalt eines Bildes zu manipulieren und zu verändern. Dies kann auf vielfältige Weise mit Medien genutzt werden, einschließlich durch das Festlegen eines `<canvas>` Elements als Ziel für Videowiedergabe oder Kameraaufnahme, um Videoframes zu erfassen und zu manipulieren.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : WebGL bietet eine OpenGL ES kompatible API über der bestehenden Canvas API und ermöglicht es, leistungsstarke 3D-Grafiken im Web zu erstellen. Durch eine Canvas kann dies verwendet werden, um 3D-Bilder zu Medieninhalten hinzuzufügen.
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
  - : WebXR, das die nun veraltete WebVR API ersetzt hat, ist eine Technologie, die Unterstützung für die Erstellung von Virtual Reality (VR) und Augmented Reality (AR) Inhalten bietet. Die Inhalte der gemischten Realität können dann auf dem Bildschirm des Geräts angezeigt oder mit einer Brille oder einem Headset erlebt werden.
- [WebVR](/de/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Die Web Virtual Reality API unterstützt virtuelle Reality-Geräte wie das Oculus Rift oder HTC Vive und ermöglicht es Entwicklern, Position und Bewegung des Benutzers in Bewegung innerhalb einer 3D-Szene zu übersetzen, die dann auf dem Gerät präsentiert wird. WebVR wurde durch WebXR ersetzt und wird bald aus den Browsern entfernt.
