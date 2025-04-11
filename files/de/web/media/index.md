---
title: Medientechnologien im Web
short-title: Media
slug: Web/Media
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Im Laufe der Jahre hat sich die Fähigkeit des Webs, Audio, Video und andere Medien darzustellen, zu erstellen und zu verwalten, weiterentwickelt. Es gibt jetzt eine Vielzahl von APIs sowie HTML-Elemente, DOM-Schnittstellen und andere Funktionen, die es ermöglichen, mit Medien auf spannende und eindrucksvolle Weise zu arbeiten. Dieser Artikel listet Leitfäden und Referenzen für verschiedene Funktionen auf, die Sie bei der Integration von Medien in Ihre Projekte verwenden können.

## Leitfäden

- [Audio- und Videolieferung](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
  - : Audio und Video können auf verschiedene Weisen im Web bereitgestellt werden, von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel soll als Ausgangspunkt dienen, um die verschiedenen Liefermechanismen von webbasierten Medien und die Kompatibilität mit gängigen Browsern zu erkunden.
- [Audio- und Videomanipulation](/de/docs/Web/Media/Guides/Audio_and_video_manipulation)
  - : Durch native Audio- und Videounterstützung im Browser können wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder [Web Audio API](/de/docs/Web/API/Web_Audio_API) direkt bearbeiten, zum Beispiel um Hall-/Kompressionseffekte zu Audio hinzuzufügen oder Graustufen-/Sepiafilter auf Videos anzuwenden.
- [Autoplay-Anleitung für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay)
  - : Unerwartete automatische Wiedergabe von Medien oder Audio kann für Benutzer eine unangenehme Überraschung sein. Während Autoplay einen Zweck erfüllt, sollte es sorgfältig eingesetzt werden. Um Benutzern die Kontrolle darüber zu geben, bieten viele Browser jetzt Formen der Autoplay-Blockierung. Dieser Artikel ist ein Leitfaden zu Autoplay, mit Tipps, wann und wie es verwendet werden sollte und wie man mit Browsern arbeitet, um Autoplay-Blockierung elegant zu handhaben.
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Dynamic Adaptive Streaming über HTTP (DASH) ist ein adaptives Streaming-Protokoll. Das bedeutet, dass ein Videostream basierend auf der Netzwerkleistung zwischen Bitraten wechseln kann, um die Wiedergabe fortzusetzen.
- [Audio- und Videostreaming](/de/docs/Web/Media/Guides/Streaming)
  - : Ein Leitfaden, der behandelt, wie man Audio und Video streamen kann, sowie Techniken und Technologien, die Sie nutzen können, um die bestmögliche Qualität und/oder Leistung Ihrer Streams sicherzustellen.
- [Medientypen und -formate im Web](/de/docs/Web/Media/Guides/Formats)
  - : Ein Leitfaden zu den Dateitypen und Codecs, die für Bild-, Audio- und Videomedien im Web verfügbar sind. Dies beinhaltet Empfehlungen, welche Formate für welche Arten von Inhalten verwendet werden sollten, bewährte Verfahren, einschließlich wie man Fallbacks bereitstellt und Medientypen priorisiert, sowie allgemeine Informationen zur Browser-Unterstützung für jedes Mediencontainer- und Codec-Format.
- [Bilder in HTML verwenden](/de/docs/Web/Media/Guides/Images)
  - : Ein Leitfaden zum Hinzufügen von Bildern zu Websites, die reaktionsschnell, zugänglich und performant sind.

## Referenzen

### HTML

Diese Artikel beschreiben die HTML-Elemente, die zur Einbindung von Medien verwendet werden:

- {{HTMLElement("audio")}}
  - : Das `<audio>`-Element wird verwendet, um Audio abzuspielen. Diese können unsichtbar als Ziel für komplexere Medien verwendet werden oder mit sichtbaren Steuerelementen für benutzergesteuerte Wiedergabe von Audiodateien. Zugriff über JavaScript als [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Objekte.
- {{HTMLElement("video")}}
  - : Das `<video>`-Element wird verwendet, um Videoinhalte abzuspielen. Es kann verwendet werden, um Videodateien darzustellen oder als Ziel für gestreamte Videoinhalte. `<video>` kann auch genutzt werden, um Medien-APIs mit anderen HTML- und DOM-Technologien zu verknüpfen, z.B. mit {{HTMLElement("canvas")}} (zum Frame-Grabbing und zur Manipulation). Zugriff über JavaScript als [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekte.
- {{HTMLElement("track")}}
  - : Das HTML-`<track>`-Element kann innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements platziert werden, um einen Verweis auf ein [WebVTT](/de/docs/Web/API/WebVTT_API)-Format-Untertitel oder eine Beschriftungsspur bereitzustellen, die zur Medienwiedergabe verwendet werden soll. Zugriff über JavaScript als [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Objekte.
- {{HTMLElement("source")}}
  - : Das HTML-`<source>`-Element wird innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet, um eine Quellmedienpräsentation zu spezifizieren. Mehrere Quellen können verwendet werden, um die Medien in unterschiedlichen Formaten, Größen oder Auflösungen bereitzustellen. Zugriff über JavaScript als [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Objekte.

### APIs

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht es Ihnen, die Codierungs- und Decodierungsfähigkeiten des Geräts zu bestimmen, auf dem Ihre Anwendung oder Website läuft. Dadurch können in Echtzeit Entscheidungen darüber getroffen werden, welche Formate verwendet werden sollen und wann.
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
  - : Eine Referenz für die API, die es ermöglicht, Medien sowohl lokal als auch über ein Netzwerk zu streamen, aufzunehmen und zu bearbeiten. Dazu gehört die Nutzung lokaler Kameras und Mikrofone zur Erfassung von Video-, Audio- und Standbildern.
- [Media Session API](/de/docs/Web/API/Media_Session_API)
  - : Die Media Session API bietet eine Möglichkeit, Medienbenachrichtigungen anzupassen. Dies geschieht durch die Bereitstellung von Metadaten für die Anzeige durch den Benutzeragenten für die Medien, die Ihre Web-App abspielt. Sie bietet auch Aktions-Handler, die der Browser verwenden kann, um auf Plattformmedientasten zuzugreifen, wie z.B. Hardwaretasten auf Tastaturen, Headsets, Fernbedienungen und Softwaretasten, die in Benachrichtigungsbereichen und auf Sperrbildschirmen mobiler Geräte gefunden werden.
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
  - : Die MediaStream Recording API ermöglicht es, Medienstreams zu erfassen, um die Daten zu verarbeiten oder zu filtern oder sie auf die Festplatte zu speichern.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Die Web Audio API ermöglicht es, Klangdaten sowohl in Echtzeit als auch auf bereits aufgenommenem Material zu erzeugen, zu filtern und zu manipulieren und diese dann an ein Ziel wie ein `<audio>`-Element, einen Medienstream oder auf die Festplatte zu senden.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) ermöglicht es, Live-Audio und -Video zu streamen sowie beliebige Daten zwischen zwei Peers über das Internet zu übertragen, ohne dass ein Vermittler erforderlich ist.

## Verwandte Themen

Verwandte Themen, die interessant sein könnten, da sie in interessanter Weise mit Medien-APIs verwendet werden können.

- [Barrierefreie multimediale Inhalte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : In diesem Leitfaden wird beschrieben, wie Webdesigner und Entwickler Inhalte erstellen können, die für Menschen mit unterschiedlichen Fähigkeiten zugänglich sind. Dies reicht von der Verwendung des [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attributs auf {{HTMLElement("img")}}-Elementen bis hin zu Untertiteln und dem Taggen von Medien für Bildschirmlesegeräte.
- [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Die Canvas API ermöglicht es, in ein {{HTMLElement("canvas")}} zu zeichnen und den Inhalt eines Bildes zu manipulieren und zu ändern. Dies kann auf viele Arten mit Medien verwendet werden, einschließlich durch das Setzen eines `<canvas>`-Elements als Ziel für die Videowiedergabe oder Kameraaufnahmen, sodass man Videoframes erfassen und manipulieren kann.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : WebGL stellt eine OpenGL ES-kompatible API über der bestehenden Canvas API bereit und ermöglicht so leistungsfähige 3D-Grafiken im Web. Über eine Canvas kann dies genutzt werden, um 3D-Bilder zu Medieninhalten hinzuzufügen.
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
  - : WebXR, das die jetzt veraltete WebVR API ersetzt hat, ist eine Technologie, die Unterstützung für die Erstellung von Virtual-Reality- (VR) und Augmented-Reality-Inhalten (AR) bietet. Die gemischten Realität Inhalte können dann auf dem Bildschirm des Geräts oder mit einer Brille oder einem Headset angezeigt werden.
- [WebVR](/de/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Die Web Virtual Reality API unterstützt Virtual Reality (VR)-Geräte wie die Oculus Rift oder das HTC Vive und ermöglicht es Entwicklern, die Position und Bewegung des Benutzers in Bewegung innerhalb einer 3D-Szene zu übersetzen, die dann auf dem Gerät dargestellt wird. WebVR wurde durch WebXR ersetzt und soll bald aus den Browsern entfernt werden.
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : In 3D-Umgebungen, die entweder 3D-Szenen sein können, die auf den Bildschirm gerendert werden, oder ein Mixed-Reality-Erlebnis, das mit einem Headset erlebt wird, ist es wichtig, dass Audio so dargeboten wird, als käme es aus der Richtung seiner Quelle. Dieser Leitfaden behandelt, wie dies verwirklicht werden kann.
