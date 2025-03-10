---
title: Medien-Technologien im Web
short-title: Media
slug: Web/Media
l10n:
  sourceCommit: 226c823808b3ee9f2e48fd019ca92a7b51fc474f
---

Im Laufe der Jahre hat sich die Fähigkeit des Webs, Audio, Video und andere Medien zu präsentieren, zu erstellen und zu verwalten, weiterentwickelt. Es gibt mittlerweile eine große Anzahl an APIs sowie HTML-Elemente, DOM-Schnittstellen und andere Funktionen, die es ermöglichen, auf spannende und immersive Weise mit Medien zu arbeiten. Dieser Artikel listet Leitfäden und Referenzen für verschiedene Funktionen auf, die Sie verwenden können, wenn Sie Medien in Ihre Projekte einbinden.

## Leitfäden

- [Audio und Video Übertragung](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
  - : Wir können Audio und Video im Web auf verschiedene Arten übertragen, von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel dient als Ausgangspunkt, um die verschiedenen Übertragungsmechanismen von web-basierten Medien und die Kompatibilität mit gängigen Browsern zu erkunden.
- [Audio- und Videomanipulation](/de/docs/Web/Media/Guides/Audio_and_video_manipulation)
  - : Die native Unterstützung von Audio und Video im Browser ermöglicht es uns, diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder [Web Audio API](/de/docs/Web/API/Web_Audio_API) direkt zu modifizieren, z. B. Nachhall-/Kompressionseffekte zu Audio hinzuzufügen oder Graustufen-/Sepia-Filter zu Video anzuwenden.
- [Leitfaden für Autoplay für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay)
  - : Unerwartete automatische Wiedergabe von Medien oder Audio kann für Nutzer eine unangenehme Überraschung sein. Während Autoplay einen Zweck erfüllt, sollte es mit Bedacht eingesetzt werden. Um den Nutzern die Kontrolle darüber zu geben, bieten viele Browser nun verschiedene Formen des Autoplay-Blockierens an. Dieser Artikel ist ein Leitfaden für Autoplay, mit Tipps, wann und wie es verwendet werden sollte und wie man mit Browsern zusammenarbeitet, um Autoplay-Blockaden elegant zu handhaben.
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Dynamic Adaptive Streaming over HTTP (DASH) ist ein adaptives Streaming-Protokoll. Das bedeutet, dass es einen Video-Stream ermöglicht, zwischen Bitraten auf Basis der Netzwerk-Performance zu wechseln, um ein kontinuierliches Abspielen des Videos sicherzustellen.
- [Streaming von Audio und Video](/de/docs/Web/Media/Guides/Streaming)
  - : Ein Leitfaden, der abdeckt, wie man Audio und Video streamt, sowie Techniken und Technologien, die Sie nutzen können, um die bestmögliche Qualität und/oder Leistung Ihrer Streams sicherzustellen.
- [Medientypen und -formate im Web](/de/docs/Web/Media/Guides/Formats)
  - : Ein Leitfaden zu den Dateitypen und Codecs, die für Bilder, Audio und Video im Web verfügbar sind. Dies beinhaltet Empfehlungen, welche Formate für welche Inhalte verwendet werden sollten, bewährte Praktiken, einschließlich der Bereitstellung von Fallbacks und der Priorisierung von Medientypen, und allgemeine Informationen zur Browser-Unterstützung für jeden Mediencontainer und Codec.
- [Bilder in HTML verwenden](/de/docs/Web/Media/Guides/Images)
  - : Ein Leitfaden zum Hinzufügen von Bildern zu Websites, die reaktionsfähig, zugänglich und leistungsstark sind.

## Referenzen

### HTML

Diese Artikel beschreiben die HTML-Elemente zur Einbindung von Medien:

- {{HTMLElement("audio")}}
  - : Das `<audio>`-Element wird verwendet, um Audio abzuspielen. Diese können unsichtbar als Ziel für anspruchsvollere Medien oder mit sichtbaren Steuerelementen zur benutzerkontrollierten Wiedergabe von Audiodateien verwendet werden. Von JavaScript zugänglich als [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Objekte.
- {{HTMLElement("video")}}
  - : Das `<video>`-Element wird verwendet, um Videoinhalte abzuspielen. Es kann verwendet werden, um Videodateien zu präsentieren oder als Ziel für gestreamte Videoinhalte. `<video>` kann auch als Möglichkeit genutzt werden, Medien-APIs mit anderen HTML- und DOM-Technologien, einschließlich {{HTMLElement("canvas")}} (für das Ergreifen und Bearbeiten von Frames), zu verknüpfen. Es ist von JavaScript aus zugänglich als [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekte.
- {{HTMLElement("track")}}
  - : Das HTML-`<track>`-Element kann innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements platziert werden, um eine Referenz zu einer [WebVTT](/de/docs/Web/API/WebVTT_API)-Format-Untertitel- oder Beschriftungsspur bereitzustellen, die bei der Wiedergabe des Mediums verwendet werden soll. Von JavaScript zugänglich als [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Objekte.
- {{HTMLElement("source")}}
  - : Das HTML-`<source>`-Element wird innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet, um Medienquellen zur Präsentation anzugeben. Mehrere Quellen können verwendet werden, um das Medium in verschiedenen Formaten, Größen oder Auflösungen bereitzustellen. Von JavaScript zugänglich als [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Objekte.

### APIs

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht es Ihnen, die Kodierungs- und Dekodierungsfähigkeiten des Geräts zu bestimmen, auf dem Ihre App oder Website läuft. Dadurch können Sie in Echtzeit Entscheidungen darüber treffen, welche Formate verwendet werden sollen und wann.
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
  - : Eine Referenz zur API, die es ermöglicht, Medien sowohl lokal als auch über ein Netzwerk zu streamen, aufzuzeichnen und zu manipulieren. Dies umfasst die Verwendung lokaler Kameras und Mikrofone zum Erfassen von Video, Audio und Standbildern.
- [Media Session API](/de/docs/Web/API/Media_Session_API)
  - : Die Media Session API bietet eine Möglichkeit, Medienbenachrichtigungen anzupassen. Dies geschieht durch Bereitstellung von Metadaten, die vom Benutzeragenten für die Medien, die Ihre Web-App abspielt, angezeigt werden. Es stellt auch Aktionshandler bereit, die der Browser verwenden kann, um auf Plattformmedia-Tasten zuzugreifen, wie Hardware-Tasten auf Tastaturen, Headsets, Fernbedienungen und Software-Tasten in Benachrichtigungsbereichen und auf Sperrbildschirmen mobiler Geräte.
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
  - : Die MediaStream Recording API ermöglicht es Ihnen, Medienströme zu erfassen, um die Daten zu verarbeiten oder zu filtern oder sie auf die Festplatte aufzuzeichnen.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Die Web Audio API ermöglicht es Ihnen, Klangeffekte sowohl in Echtzeit als auch auf zuvor aufgenommenem Material zu generieren, zu filtern und zu manipulieren, und dann diesen Ton an ein Ziel wie ein `<audio>`-Element, einen Medienstrom oder auf die Festplatte zu senden.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) ermöglicht es, Live-Audio und -Video zu streamen, sowie beliebige Daten zwischen zwei Peers über das Internet zu übertragen, ohne dass ein Vermittler erforderlich ist.

## Verwandte Themen

Verwandte Themen, die von Interesse sein könnten, da sie in interessanter Weise in Verbindung mit Medien-APIs verwendet werden können.

- [Barrierefreie Multimedia-Inhalte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : In diesem Leitfaden gehen wir darauf ein, wie Webdesigner und Entwickler Inhalte erstellen können, die für Menschen mit unterschiedlichen Fähigkeiten zugänglich sind. Dies reicht von der Verwendung des [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attributs auf {{HTMLElement("img")}}-Elementen bis hin zu Untertiteln und der Kennzeichnung von Medien für Screenreader.
- [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Die Canvas API ermöglicht es Ihnen, in ein {{HTMLElement("canvas")}} zu zeichnen und den Inhalt eines Bildes zu manipulieren und zu verändern. Dies kann auf vielfältige Weise mit Medien genutzt werden, einschließlich indem Sie ein `<canvas>`-Element als Ziel für die Videowiedergabe oder Kameraaufnahmen festlegen, sodass Sie Video-Frames erfassen und manipulieren können.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : WebGL stellt eine mit OpenGL ES kompatible API auf Basis der bestehenden Canvas API zur Verfügung, die leistungsfähige 3D-Grafiken im Web ermöglicht. Durch ein Canvas kann dies verwendet werden, um 3D-Grafiken zu Medieninhalten hinzuzufügen.
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
  - : WebXR, das die nun veraltete WebVR API ersetzt hat, ist eine Technologie, die Unterstützung für die Erstellung von Virtual-Reality- (VR) und Augmented-Reality- (AR) Inhalten bietet. Die Mixed-Reality-Inhalte können dann auf dem Bildschirm des Geräts oder mit Brillen oder einem Headset angezeigt werden.
- [WebVR](/de/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Die Web Virtual Reality API unterstützt Virtual-Reality- (VR) Geräte wie das Oculus Rift oder das HTC Vive und ermöglicht es Entwicklern, die Position und Bewegung des Nutzers in Bewegung innerhalb einer 3D-Szene umzuwandeln, die dann auf dem Gerät dargestellt wird. WebVR wurde durch WebXR ersetzt und soll bald aus den Browsern entfernt werden.
- [Grundlagen der Web Audio-Raumanpassung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : In 3D-Umgebungen, die entweder als 3D-Szenen auf dem Bildschirm dargestellt oder als Mixed-Reality-Erfahrung mit einem Headset erlebt werden, ist es wichtig, dass Audio so ausgeführt wird, dass es aus der Richtung seiner Quelle zu kommen scheint. Dieser Leitfaden behandelt, wie dies erreicht werden kann.
