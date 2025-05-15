---
title: Medientechnologien im Web
short-title: Media
slug: Web/Media
l10n:
  sourceCommit: d37026a4d0e1e3a5a2ab82d34566689aada039f7
---

Im Laufe der Jahre hat sich die Fähigkeit des Webs weiterentwickelt, Audio, Video und andere Medien zu präsentieren, zu erstellen und zu verwalten.
Es gibt jetzt eine Vielzahl von APIs sowie HTML-Elemente, DOM-Schnittstellen und andere Funktionen, die es ermöglichen, auf spannende und eindringliche Weise mit Medien zu arbeiten.
Dieser Artikel listet Leitfäden und Referenzen für verschiedene Funktionen auf, die Sie bei der Integration von Medien in Ihre Projekte nutzen können.

## Leitfäden

Die [Medien-Leitfäden](/de/docs/Web/Media/Guides) sind Ressourcen, die Ihnen helfen, Medien im Web zu verstehen, zu transformieren und zu optimieren, darunter Audio, Video und Bilder mit modernen Webtechnologien.

- [Audio- und Videowiedergabe](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
  - : Wir können Audio und Video im Web auf verschiedene Weise bereitstellen, von 'statischen' Mediendateien bis hin zu adaptiven Livestreams. Dieser Artikel dient als Ausgangspunkt für die Erforschung der verschiedenen Liefermechanismen von webbasierten Medien und deren Kompatibilität mit gängigen Browsern.
- [Manipulation von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_manipulation)
  - : Die native Unterstützung von Audio und Video im Browser ermöglicht es, diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder [Web Audio API](/de/docs/Web/API/Web_Audio_API) direkt zu ändern, z. B. durch Hinzufügen von Hall-/Kompressionseffekten zu Audio oder Graustufen-/Sepia-Filtern zu Video.
- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay)
  - : Unerwartete automatische Wiedergabe von Medien oder Audio kann für Nutzer eine unwillkommene Überraschung sein. Obwohl Autoplay einen Zweck erfüllt, sollte es mit Bedacht eingesetzt werden. Um den Nutzern die Kontrolle darüber zu geben, bieten viele Browser mittlerweile Formen der Autoplay-Blockierung an. Dieser Artikel ist ein Leitfaden zum Autoplay mit Tipps, wann und wie es eingesetzt werden sollte und wie man mit Browsern umgeht, um Autoplay-Blockierungen elegant zu handhaben.
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Dynamic Adaptive Streaming über HTTP (DASH) ist ein adaptives Streaming-Protokoll. Das bedeutet, dass es ermöglicht, dass ein Videostream basierend auf der Netzwerkleistung zwischen Bitraten wechselt, um die Videowiedergabe aufrechtzuerhalten.
- [Streaming von Audio und Video](/de/docs/Web/Media/Guides/Streaming)
  - : Ein Leitfaden, der erklärt, wie Audio und Video gestreamt werden können, sowie Techniken und Technologien, die Sie nutzen können, um die bestmögliche Qualität und/oder Leistung Ihrer Streams zu gewährleisten.
- [Medientypen und -formate im Web](/de/docs/Web/Media/Guides/Formats)
  - : Ein Leitfaden zu den Dateitypen und Codecs, die für Bilder, Audio- und Videomedien im Web verfügbar sind. Dies beinhaltet Empfehlungen, welche Formate für welche Arten von Inhalten verwendet werden sollten, Best Practices, wie man Fallbacks bereitstellt und Medientypen priorisiert, sowie allgemeine Informationen zur Browserunterstützung für jedes Mediencontainer und Codec.
- [Verwendung von Bildern in HTML](/de/docs/Web/Media/Guides/Images)
  - : Ein Leitfaden zum Hinzufügen von Bildern zu Websites, die responsiv, zugänglich und performant sind.

## Referenzen

### HTML

Die folgenden HTML-Elemente werden verwendet, um Medien auf einer Seite einzubinden.

- {{HTMLElement("audio")}}
  - : Das `<audio>` Element wird verwendet, um Audio abzuspielen. Diese können unsichtbar als Ziel für komplexere Medien oder mit sichtbaren Bedienelementen für die benutzergesteuerte Wiedergabe von Audiodateien verwendet werden. Von JavaScript aus zugänglich als [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Objekte.
- {{HTMLElement("video")}}
  - : Das `<video>` Element wird verwendet, um Videoinhalte abzuspielen. Es kann verwendet werden, um Videodateien zu präsentieren oder als Ziel für gestreamte Videoinhalte. `<video>` kann auch als Möglichkeit genutzt werden, Medien-APIs mit anderen HTML- und DOM-Technologien, einschließlich {{HTMLElement("canvas")}} (zum Erfassen und Bearbeiten von Frames), zu verbinden. Von JavaScript aus zugänglich als [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekte.
- {{HTMLElement("track")}}
  - : Das HTML `<track>`-Element kann innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements platziert werden, um einen Verweis auf eine [WebVTT](/de/docs/Web/API/WebVTT_API) Format-Untertitel- oder Untertitelspur bereitzustellen, die bei der Wiedergabe der Medien verwendet werden kann. Von JavaScript aus zugänglich als [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Objekte.
- {{HTMLElement("source")}}
  - : Das HTML `<source>`-Element wird innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet, um die bereitgestellte Medienquelle festzulegen. Mehrere Quellen können verwendet werden, um das Medium in verschiedenen Formaten, Größen oder Auflösungen bereitzustellen. Von JavaScript aus zugänglich als [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Objekte.

### APIs

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht es Ihnen, die Codierungs- und Decodierungsfähigkeiten des Geräts zu bestimmen, auf dem Ihre App oder Website läuft. Dies ermöglicht es Ihnen, in Echtzeit Entscheidungen darüber zu treffen, welche Formate verwendet werden sollen und wann.
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
  - : Eine Referenz für die API, die es ermöglicht, Medien sowohl lokal als auch über ein Netzwerk zu streamen, aufzuzeichnen und zu manipulieren. Dazu gehört die Nutzung lokaler Kameras und Mikrofone zum Erfassen von Video, Audio und Standbildern.
- [Media Session API](/de/docs/Web/API/Media_Session_API)
  - : Die Media Session API bietet eine Möglichkeit zur Anpassung von Medienbenachrichtigungen. Sie tut dies, indem sie Metadaten bereitstellt, die vom Benutzeragenten für die Medien angezeigt werden, die Ihre Web-App abspielt. Sie bietet auch Aktionshandler, die der Browser verwenden kann, um auf Plattform-Medienschlüssel wie Hardwaretasten auf Tastaturen, Headsets, Fernbedienungen und Softwaretasten in Benachrichtigungsbereichen und auf den Sperrbildschirmen von Mobilgeräten zuzugreifen.
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
  - : Die MediaStream Recording API ermöglicht es Ihnen, Medienstreams zu erfassen, um die Daten zu verarbeiten oder zu filtern oder sie auf die Festplatte zu schreiben.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Die Web Audio API ermöglicht das Erzeugen, Filtern und Manipulieren von Sounddaten sowohl in Echtzeit als auch in vorab aufgenommenem Material, und dann das Senden dieses Audios an ein Ziel wie ein `<audio>`-Element, einen Medienstrom oder auf die Festplatte.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) ermöglicht das Streamen von Live-Audio und -Video sowie die Übertragung beliebiger Daten zwischen zwei Peers über das Internet, ohne dass ein Vermittler erforderlich ist.

## Verwandte Themen

Verwandte Themen, die von Interesse sein könnten, da sie auf interessante Weise in Verbindung mit Medien-APIs verwendet werden können.

- [Barrierefreie Multimedia-Inhalte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : In diesem Leitfaden erklären wir, wie Webdesigner und -entwickler Inhalte erstellen können, die für Menschen mit unterschiedlichen Fähigkeiten zugänglich sind. Dies reicht von der Verwendung des [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attributs bei {{HTMLElement("img")}}-Elementen bis hin zu Untertiteln und der Kennzeichnung von Medien für Screenreader.
- [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Die Canvas API ermöglicht das Zeichnen in ein {{HTMLElement("canvas")}}-Element, das Manipulieren und Ändern des Inhalts eines Bildes. Dies kann auf vielfältige Weise mit Medien verwendet werden, unter anderem, indem ein `<canvas>`-Element als Ziel für die Videowiedergabe oder Kameraufzeichnung festgelegt wird, sodass Sie Video-Frames erfassen und manipulieren können.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : WebGL bietet eine OpenGL ES-kompatible API über der vorhandenen Canvas-API, was es ermöglicht, leistungsstarke 3D-Grafiken im Web zu erstellen. Über ein Canvas kann dies verwendet werden, um 3D-Grafiken zu Medieninhalten hinzuzufügen.
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
  - : WebXR, das die jetzt veraltete WebVR-API ersetzt hat, ist eine Technologie, die die Unterstützung für die Erstellung von Virtual Reality (VR) und Augmented Reality (AR) Inhalten bietet. Die gemischten Realitätsinhalte können dann auf dem Bildschirm des Geräts oder mit Brillen oder einem Headset angezeigt werden.
- [WebVR](/de/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Die Web Virtual Reality API unterstützt Virtual-Reality-(VR-)Geräte wie Oculus Rift oder HTC Vive und ermöglicht es Entwicklern, die Position und Bewegung des Benutzers in Bewegung innerhalb einer 3D-Szene zu übersetzen, die dann auf dem Gerät dargestellt wird. WebVR wurde durch WebXR ersetzt und soll bald aus den Browsern entfernt werden.
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : In 3D-Umgebungen, die entweder 3D-Szenen sind, die auf den Bildschirm gerendert werden, oder eine gemischte Realitätserfahrung mit einem Headset umfassen, ist es wichtig, dass das Audio so aufgeführt wird, dass es klingt, als käme es aus der Richtung seiner Quelle. Dieser Leitfaden erklärt, wie dies erreicht werden kann.
