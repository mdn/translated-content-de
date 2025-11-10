---
title: Medientechnologien im Web
short-title: Media
slug: Web/Media
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

Im Laufe der Jahre hat sich die Fähigkeit des Webs zur Darstellung, Erstellung und Verwaltung von Audio, Video und anderen Medien erheblich weiterentwickelt. Es gibt nun eine Vielzahl von APIs sowie HTML-Elemente, DOM-Schnittstellen und andere Funktionen, die es ermöglichen, mit Medien auf aufregende und immersive Weise zu arbeiten. Dieser Artikel listet Leitfäden und Referenzen für verschiedene Funktionen auf, die Sie verwenden können, wenn Sie Medien in Ihre Projekte integrieren.

## Leitfäden

Die [Medien-Leitfäden](/de/docs/Web/Media/Guides) sind Ressourcen, die Ihnen helfen, Medien im Web zu verstehen, zu transformieren und zu optimieren, einschließlich Audio, Video und Bilder mit modernen Webtechnologien.

- [Bereitstellung von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
  - : Wir können Audio und Video auf verschiedene Weise im Web bereitstellen, von „statischen“ Mediendateien bis zu adaptiven Live-Streams. Dieser Artikel dient als Ausgangspunkt zur Erkundung der verschiedenen Bereitstellungsmechanismen webbasierter Medien und der Kompatibilität mit gängigen Browsern.
- [Manipulation von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_manipulation)
  - : Da Audio und Video nativ im Browser verfügbar sind, können wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio und Video direkt zu modifizieren, z. B. Hall-/Kompressionseffekte zu Audio hinzuzufügen oder Graustufen-/Sepiafilter zu Video anzuwenden.
- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay)
  - : Unerwartete automatische Medien- oder Audiowiedergabe kann für Benutzer eine unangenehme Überraschung sein. Obwohl Autoplay einen Zweck erfüllt, sollte es mit Bedacht eingesetzt werden. Um den Benutzern die Kontrolle darüber zu geben, bieten viele Browser jetzt Formen des Autoplay-Blockings an. Dieser Artikel ist ein Leitfaden zum Autoplay mit Tipps, wann und wie es verwendet werden sollte und wie man mit Browsern zusammenarbeitet, um Autoplay-Blocking elegant zu handhaben.
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Dynamic Adaptive Streaming over HTTP (DASH) ist ein adaptives Streaming-Protokoll. Das bedeutet, dass es ermöglicht, einen Videostream basierend auf der Netzwerkperformance zwischen Bitraten zu wechseln, um ein Video in der Wiedergabe zu halten.
- [Streaming von Audio und Video](/de/docs/Web/Media/Guides/Streaming)
  - : Ein Leitfaden, der beschreibt, wie man Audio und Video streamt, sowie Techniken und Technologien, die genutzt werden können, um die bestmögliche Qualität und/oder Leistung der Streams zu gewährleisten.
- [Medientypen und -formate im Web](/de/docs/Web/Media/Guides/Formats)
  - : Ein Leitfaden zu den Dateitypen und Codecs, die für Bilder, Audio und Video im Web verfügbar sind. Dazu gehören Empfehlungen, welche Formate für welche Art von Inhalten verwendet werden sollten, bewährte Praktiken, einschließlich der Bereitstellung von Fallbacks und Priorisierung von Medientypen, sowie allgemeine Informationen zur Browserunterstützung für jedes Mediencontainer- und Codecformat.
- [Verwendung von Bildern in HTML](/de/docs/Web/Media/Guides/Images)
  - : Ein Leitfaden zum Hinzufügen von Bildern zu Webseiten, die reaktionsschnell, zugänglich und performant sind.

## Referenzen

### HTML

Die folgenden HTML-Elemente werden verwendet, um Medien auf einer Seite einzufügen.

- {{HTMLElement("audio")}}
  - : Das `<audio>`-Element wird verwendet, um Audio abzuspielen. Es kann unsichtbar als Ziel für komplexere Medien oder mit sichtbaren Steuerelementen für die benutzergesteuerte Wiedergabe von Audiodateien verwendet werden. Vom JavaScript aus zugänglich als [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Objekte.
- {{HTMLElement("video")}}
  - : Das `<video>`-Element wird verwendet, um Videoinhalte abzuspielen. Es kann verwendet werden, um Videodateien zu präsentieren oder als Ziel für gestreamte Videoinhalte. `<video>` kann auch als Mittel verwendet werden, um Medien-APIs mit anderen HTML- und DOM-Technologien zu verknüpfen, einschließlich {{HTMLElement("canvas")}} (für Frame-Erfassung und -Manipulation), zum Beispiel. Vom JavaScript aus zugänglich als [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekte.
- {{HTMLElement("track")}}
  - : Das HTML-Element `<track>` kann innerhalb eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Elements platziert werden, um eine Referenz zu einem [WebVTT](/de/docs/Web/API/WebVTT_API)-Format-Untertitel oder einer Bildunterschrift bereitzustellen, die beim Abspielen der Medien verwendet wird. Vom JavaScript aus zugänglich als [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Objekte.
- {{HTMLElement("source")}}
  - : Das HTML-Element `<source>` wird innerhalb eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Elements verwendet, um die zu präsentierende Medienquelle anzugeben. Mehrere Quellen können verwendet werden, um das Medium in verschiedenen Formaten, Größen oder Auflösungen bereitzustellen. Vom JavaScript aus zugänglich als [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Objekte.

### APIs

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht es Ihnen, die Kodierungs- und Dekodierungsfähigkeiten des Geräts zu bestimmen, auf dem Ihre App oder Website läuft. Dadurch können Sie in Echtzeit Entscheidungen treffen, welche Formate verwendet werden sollen und wann.
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
  - : Eine Referenz für die API, die es ermöglicht, Medien sowohl lokal als auch über ein Netzwerk zu streamen, aufzuzeichnen und zu manipulieren. Dazu gehört die Verwendung lokaler Kameras und Mikrofone, um Video, Audio und Standbilder aufzunehmen.
- [Media Session API](/de/docs/Web/API/Media_Session_API)
  - : Die Media Session API bietet eine Möglichkeit, Medienbenachrichtigungen anzupassen. Sie stellt Metadaten bereit, die vom User-Agent für die Medien, die Ihre Web-App abspielt, angezeigt werden. Sie bietet außerdem Aktionshandler, die der Browser verwenden kann, um auf Medienplattform-Tasten wie Hardware-Tasten auf Tastaturen, Headsets, Fernbedienungen und Software-Tasten in Benachrichtigungsbereichen und auf Sperrbildschirmen von Mobilgeräten zuzugreifen.
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
  - : Die MediaStream Recording API erlaubt es Ihnen, Medien-Streams zu erfassen, um die Daten zu verarbeiten oder zu filtern oder sie auf die Festplatte zu speichern.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Die Web Audio API ermöglicht es Ihnen, Klangdaten sowohl in Echtzeit als auch bei vorab aufgenommenem Material zu erzeugen, zu filtern und zu manipulieren und dann dieses Audio an ein Ziel wie ein `<audio>`-Element, einen Medien-Stream oder auf die Festplatte zu senden.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) ermöglicht es, Live-Audio und -Video zu streamen sowie beliebige Daten zwischen zwei Peers über das Internet zu übertragen, ohne dass ein Vermittler erforderlich ist.

## Verwandte Themen

Verwandte Themen, die von Interesse sein könnten, da sie zusammen mit Medien-APIs auf interessante Weise genutzt werden können.

- [Barrierefreie Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : In diesem Leitfaden behandeln wir Möglichkeiten, wie Webdesigner und -entwickler Inhalte erstellen können, die für Menschen mit unterschiedlichen Fähigkeiten zugänglich sind. Dies reicht von der Verwendung des [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attributs bei {{HTMLElement("img")}}-Elementen über Bildunterschriften bis hin zum Taggen von Medien für Screenreader.
- [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Die Canvas API ermöglicht es Ihnen, in ein {{HTMLElement("canvas")}} zu zeichnen und den Inhalt eines Bildes zu manipulieren und zu verändern. Dies kann auf viele Arten mit Medien verwendet werden, einschließlich der Festlegung eines `<canvas>`-Elements als Ziel für die Videowiedergabe oder Kameraaufnahme, um Videoframes zu erfassen und zu manipulieren.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : WebGL bietet eine OpenGL ES-kompatible API auf der bestehenden Canvas API, die es ermöglicht, leistungsstarke 3D-Grafiken im Web zu erstellen. Über ein Canvas kann dies verwendet werden, um 3D-Visualisierungen zu Medieninhalten hinzuzufügen.
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
  - : WebXR, das die nun veraltete WebVR API ersetzt hat, ist eine Technologie, die Unterstützung für die Erstellung von Virtual Reality (VR) und Augmented Reality (AR) Inhalten bietet. Die gemischten Realität-Inhalte können dann auf dem Bildschirm des Geräts oder mit einer Brille oder einem Headset angezeigt werden.
- [WebVR](/de/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Die Web Virtual Reality API unterstützt Virtual-Reality-Geräte wie die Oculus Rift oder die HTC Vive und ermöglicht es Entwicklern, die Position und Bewegung des Benutzers in Bewegung innerhalb einer 3D-Szene zu übersetzen, die dann auf dem Gerät angezeigt wird. WebVR wurde durch WebXR ersetzt und wird bald aus den Browsern entfernt.
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : In 3D-Umgebungen, die entweder als 3D-Szenen auf dem Bildschirm gerendert oder als Mixed-Reality-Erlebnis mit einem Headset erlebt werden können, ist es wichtig, dass Audio so abgespielt wird, dass es aus der Richtung seines Ursprungs zu kommen scheint. In diesem Leitfaden wird beschrieben, wie dies erreicht werden kann.
