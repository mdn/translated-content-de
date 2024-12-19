---
title: Web-Medientechnologien
slug: Web/Media
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Im Laufe der Jahre hat sich die Fähigkeit des Webs, Audio, Video und andere Medien zu präsentieren, zu erstellen und zu verwalten, rasant weiterentwickelt. Heute gibt es eine Vielzahl von APIs, sowie HTML-Elemente, DOM-Schnittstellen und andere Funktionen, die es nicht nur ermöglichen, diese Aufgaben zu erfüllen, sondern auch Medien in Kombination mit anderen Technologien zu verwenden, um wirklich bemerkenswerte Dinge zu tun. Dieser Artikel listet die verschiedenen APIs auf und bietet Links zu Dokumentationen, die Ihnen beim Erlernen hilfreich sein können.

## Referenzen

### HTML

Diese Artikel behandeln HTML-Funktionen für Medienentwickler.

- {{HTMLElement("audio")}}
  - : Das `<audio>`-Element wird verwendet, um Audio im Web-Kontext abzuspielen. Diese können unsichtbar als Ziel für komplexere Medien verwendet oder mit sichtbaren Steuerelementen für die benutzerkontrollierte Wiedergabe von Audiodateien bereitgestellt werden. Von JavaScript als [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Objekte zugänglich.
- {{HTMLElement("video")}}
  - : Das `<video>`-Element ist ein Endpunkt für Videoinhalte im Web-Kontext. Es kann verwendet werden, um Videodateien zu präsentieren oder als Ziel für gestreamte Videoinhalte zu dienen. `<video>` kann auch als Möglichkeit verwendet werden, Medien-APIs mit anderen HTML- und DOM-Technologien wie {{HTMLElement("canvas")}} zu verknüpfen (beispielsweise zum Frame-Grabbing und zur Manipulation). Von JavaScript als [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekte zugänglich.
- {{HTMLElement("track")}}
  - : Das HTML-`<track>`-Element kann in ein {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element eingefügt werden, um eine Referenz auf eine [WebVTT](/de/docs/Web/API/WebVTT_API)-Format-Untertitel- oder Untertitelspur bereitzustellen, die bei der Wiedergabe des Mediums verwendet werden soll. Von JavaScript als [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Objekte zugänglich.
- {{HTMLElement("source")}}
  - : Das HTML-`<source>`-Element wird in einem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element verwendet, um die zu präsentierende Quellmedien anzugeben. Mehrere Quellen können verwendet werden, um das Medium in verschiedenen Formaten, Größen oder Auflösungen bereitzustellen. Von JavaScript als [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Objekte zugänglich.

### APIs

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht es Ihnen, die Kodierungs- und Dekodierungsfähigkeiten des Geräts zu bestimmen, auf dem Ihre App oder Website läuft. Damit können Sie in Echtzeit Entscheidungen darüber treffen, welche Formate verwendet werden sollen und wann.
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
  - : Eine Referenz zur API, die es ermöglicht, Medien lokal und über ein Netzwerk zu streamen, aufzunehmen und zu manipulieren. Dies beinhaltet die Verwendung von lokalen Kameras und Mikrofonen zur Erfassung von Video, Audio und Standbildern.
- [Media Session API](/de/docs/Web/API/Media_Session_API)
  - : Die Media Session API bietet eine Möglichkeit, Medienbenachrichtigungen anzupassen. Dies wird erreicht, indem Metadaten für die Anzeige durch den Benutzeragenten für die Medien bereitgestellt werden, die Ihre Web-App spielt. Sie bietet auch Aktion-Handler, die der Browser verwenden kann, um auf Plattform-Medienschlüssel zuzugreifen, wie z.B. Hardwaretasten an Tastaturen, Headsets, Fernbedienungen und Softwaretasten in Benachrichtigungsbereichen und auf Sperrbildschirmen von mobilen Geräten.
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
  - : Die MediaStream Recording API ermöglicht es Ihnen, Medienströme zur Verarbeitung oder Filterung der Daten zu erfassen oder auf die Festplatte zu speichern.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Die Web Audio API ermöglicht es Ihnen, Sounddaten sowohl in Echtzeit als auch auf vorab aufgezeichnetem Material zu erzeugen, zu filtern und zu manipulieren und diese dann an ein Ziel wie ein `<audio>`-Element, einen Medienstrom oder auf die Festplatte zu senden.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) ermöglicht es, Live-Audio und -Video sowie beliebige Daten zwischen zwei Peers über das Internet zu streamen, ohne dass ein Vermittler erforderlich ist.

## Leitfäden

- [Verwendung von Audio und Video in HTML](/de/docs/Web/Media/HTML_media)
  - : Ein Leitfaden zur Verwendung der HTML-Elemente `<audio>` und `<video>`.
- [Verwendung von Bildern in HTML](/de/docs/Web/Media/images)
  - : Ein Leitfaden zum Hinzufügen von Bildern zu Websites, die responsiv, zugänglich und performant sind.
- [Barrierefreie Multimedia-Inhalte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : In diesem Leitfaden behandeln wir Möglichkeiten, wie Webdesigner und -entwickler Inhalte erstellen können, die für Menschen mit unterschiedlichen Fähigkeiten zugänglich sind. Dies reicht von der Verwendung des [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attributs für {{HTMLElement("img")}}-Elemente bis hin zu Untertiteln und der Kennzeichnung von Medien für Screenreader.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
  - : Ein Leitfaden zu den Dateitypen und Codecs, die für Bilder, Audio- und Videomedien im Web verfügbar sind. Dies umfasst Empfehlungen, welche Formate für welche Inhalte verwendet werden sollten, bewährte Verfahren einschließlich der Bereitstellung von Fallbacks und der Priorisierung von Medientypen, sowie allgemeine Informationen zur Browserunterstützung für jedes Mediencontainer- und Codec-Format.
- [Streaming von Audio und Video](/de/docs/Web/Media/Streaming)
  - : Ein Leitfaden, der behandelt, wie Audio und Video gestreamt werden, sowie Techniken und Technologien, die genutzt werden können, um die bestmögliche Qualität und/oder Leistung Ihrer Streams zu gewährleisten.
- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide)
  - : Unerwartete automatische Wiedergabe von Medien oder Audio kann für Benutzer eine unangenehme Überraschung sein. Während Autoplay einen Zweck erfüllt, sollte es mit Vorsicht verwendet werden. Um den Benutzern Kontrolle darüber zu geben, bieten viele Browser jetzt Formen der Autoplay-Blockierung an. Dieser Artikel ist ein Leitfaden zum Autoplay, mit Tipps, wann und wie man es verwendet und wie man mit Browsern umgehen kann, um Autoplay-Blockierung elegant zu behandeln.
- [Grundlagen der räumlichen Audiowiedergabe im Web Audio](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : In 3D-Umgebungen, die entweder 3D-Szenen sein können, die auf dem Bildschirm gerendert werden, oder eine Mixed-Reality-Erfahrung, die mit einem Headset erlebt wird, ist es wichtig, dass Audio so wiedergegeben wird, dass es so klingt, als käme es aus der Richtung seiner Quelle. Dieser Leitfaden behandelt, wie dies erreicht werden kann.

## Andere Themen

Verwandte Themen, die von Interesse sein könnten, da sie in interessanter Weise mit Medien-APIs verwendet werden können.

- [Die Canvas-API](/de/docs/Web/API/Canvas_API)
  - : Die Canvas-API ermöglicht es, in ein {{HTMLElement("canvas")}} zu zeichnen, und den Inhalt eines Bildes zu manipulieren und zu verändern. Dies kann auf viele Arten mit Medien verwendet werden, unter anderem indem ein `<canvas>`-Element als Ziel für die Videowiedergabe oder Kameraserfassung gesetzt wird, sodass Sie Videoframes erfassen und manipulieren können.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : WebGL bietet eine OpenGL ES-kompatible API auf der bestehenden Canvas-API, die es ermöglicht, leistungsstarke 3D-Grafiken im Web zu erstellen. Durch eine Canvas kann dies verwendet werden, um 3D-Bilder in Medieninhalte einzufügen.
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
  - : WebXR, das jetzt die veraltete WebVR API ersetzt hat, ist eine Technologie, die Unterstützung für die Erstellung von Virtual-Reality- (VR) und Augmented-Reality-Inhalten (AR) bietet. Die Mixed-Reality-Inhalte können dann auf dem Bildschirm des Geräts oder mit Hilfe von Brillen oder einem Headset angezeigt werden.
- [WebVR](/de/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Die Web-Virtual-Reality-API unterstützt Virtual-Reality- (VR) Geräte wie Oculus Rift oder HTC Vive, sodass Entwickler die Position und Bewegung des Benutzers in eine Bewegung innerhalb einer 3D-Szene übersetzen können, die dann auf dem Gerät präsentiert wird. WebVR wurde durch WebXR ersetzt und wird bald aus den Browsern entfernt.
