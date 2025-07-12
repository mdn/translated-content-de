---
title: Media Source API
slug: Web/API/Media_Source_Extensions_API
l10n:
  sourceCommit: db01d0c8b4cbf8a4467b1db65e17f6724d0ce710
---

{{DefaultAPISidebar("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Media Source API**, formal bekannt als **Media Source Extensions** (**MSE**), bietet Funktionen, die plugin-freies, webbasiertes Streaming von Medien ermöglichen. Mithilfe von MSE können Medienströme über JavaScript erstellt und mit {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen abgespielt werden.

## Konzepte und Verwendung

Video- und Audiowiedergabe in Webanwendungen war schon seit einigen Jahren ohne Plugins möglich, doch die grundlegenden Funktionen waren meist nur für die Wiedergabe einzelner kompletter Tracks nützlich. Beispielsweise können wir keine Arraypuffer kombinieren/teilen. Bis vor kurzem war das Streaming von Medien das Gebiet von Flash, wobei Technologien wie der Flash Media Server Videostreams über das RTMP-Protokoll bereitstellten.

### Der MSE-Standard

Mit den Media Source Extensions (MSE) ändert sich dies. MSE erlaubt uns, den üblichen einzelnen progressiven `src`-URI, der an Medienelemente übergeben wird, durch eine Referenz zu einem `MediaSource`-Objekt zu ersetzen. Dieses ist ein Container für Informationen wie den Bereitschaftszustand der Medien für die Wiedergabe sowie Referenzen zu mehreren `SourceBuffer`-Objekten, die die verschiedenen Abschnitte der Medien repräsentieren, die den gesamten Stream ausmachen. MSE bietet uns eine feinere Kontrolle darüber, wie viel und wie oft Inhalte abgerufen werden, sowie eine gewisse Kontrolle über Details zur Speichernutzung, etwa wann Puffer gelöscht werden. Es legt den Grundstein für die Entwicklung von Clients für adaptives Streaming mit variabler Bitrate (wie die Verwendung von DASH oder HLS) auf seiner erweiterbaren API.

Die Erstellung von Medieninhalten, die mit MSE in modernen Browsern funktionieren, ist ein mühsamer Prozess, der viel Zeit, Rechenleistung und Energie erfordert. Die Verwendung externer Hilfsmittel ist erforderlich, um die Inhalte in ein geeignetes Format zu bringen. Während die Unterstützung der verschiedenen Mediencontainer mit MSE uneinheitlich ist, bietet die Verwendung des H.264-Videocodecs, des AAC-Audiocodecs und des MP4-Containerformats eine gemeinsame Basis. MSE bietet außerdem eine API zur Laufzeit-Erkennung von Container- und Codec-Unterstützung.

Wenn Sie keine explizite Kontrolle über die Videoqualität im Laufe der Zeit, die Rate, mit der Inhalte abgerufen werden, oder die Rate, mit der Speicher geleert wird, benötigen, können die {{htmlelement("video")}}- und {{htmlelement("source")}}-Tags eine einfache und angemessene Lösung darstellen.

### DASH

Dynamic Adaptive Streaming over HTTP (DASH) ist ein Protokoll, das spezifiziert, wie adaptive Inhalte abgerufen werden sollen. Es ist effektiv eine Schicht, die auf MSE aufbaut, um Clients für adaptives Streaming mit variabler Bitrate zu erstellen. Während es andere Protokolle gibt (wie HTTP Live Streaming (HLS)), hat DASH die meiste Plattformunterstützung.

DASH verschiebt viel Logik aus dem Netzwerkprotokoll in die Applikationslogik auf Client-Seite und verwendet das einfachere HTTP-Protokoll zum Abrufen von Dateien. Tatsächlich kann man DASH mit einem einfachen statischen File-Server unterstützen, was auch für CDNs hervorragend ist. Dies steht im direkten Gegensatz zu früheren Streaming-Lösungen, die teure Lizenzen für proprietäre nicht standardisierte Client/Server-Protokoll-Implementierungen erforderten.

Die beiden häufigsten Anwendungsfälle für DASH beinhalten das Ansehen von Inhalten "on demand" oder "live". Bei On-Demand-Inhalten kann ein Entwickler seine Zeit damit verbringen, die Assets in mehrere Auflösungen von unterschiedlicher Qualität zu transkodieren.

Bei Live-Profil-Inhalten kann es aufgrund von Transkodierung und Übertragung zu Verzögerungen kommen, daher ist DASH nicht für Echtzeitkommunikation wie [WebRTC](/de/docs/Web/API/WebRTC_API) geeignet. Es kann jedoch weitaus mehr Client-Verbindungen als WebRTC unterstützen.

Es gibt zahlreiche verfügbare kostenlose und Open-Source-Tools zum Transkodieren von Inhalten und zur Vorbereitung für die Verwendung mit DASH, DASH-File-Server und DASH-Client-Bibliotheken, die in JavaScript geschrieben sind. Der Artikel [DASH Adaptive Streaming for HTML video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming) bietet ein Beispiel dafür, wie DASH mit MSE genutzt werden kann.

### Verfügbarkeit in Workern

Ab Chrome 108 sind MSE-Funktionen in dedizierten [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar, was eine verbesserte Leistung bei der Manipulation von [`MediaSource`](/de/docs/Web/API/MediaSource)- und [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekten ermöglicht. Zur Wiedergabe der Medien wird die [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle)-Eigenschaft verwendet, um eine Referenz zu einem [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zu erhalten, einem Proxy für die `MediaSource`, die zurück an den Haupt-Thread übertragen und über die [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft einem Medienelement angehängt werden kann.

Siehe [MSE-in-Workers Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html) für ein Live-Beispiel.

## Schnittstellen

- [`MediaSource`](/de/docs/Web/API/MediaSource)
  - : Repräsentiert eine Medienquelle, die über ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt abgespielt wird.
- [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)
  - : Ein Proxy für eine [`MediaSource`](/de/docs/Web/API/MediaSource), die von einem dedizierten Worker zurück an den Haupt-Thread übertragen und einem Medienelement über die [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft angehängt werden kann.
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
  - : Repräsentiert ein Medienstück, das über ein `MediaSource`-Objekt in ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) eingespeist wird.
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
  - : Eine einfache Containerliste für mehrere `SourceBuffer`-Objekte.
- [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)
  - : Enthält Informationen über die Qualität des von einem {{htmlelement("video")}}-Element abgespielten Videos, wie die Anzahl der übersprungenen oder beschädigten Frames. Wird von der Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) zurückgegeben.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered)
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle angibt, die der Browser zwischengespeichert hat (falls vorhanden), wenn die `buffered`-Eigenschaft aufgerufen wird.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, zu denen der Benutzer eventuell spulen kann.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Medienprovider-Objekt, das die abzuspielende oder in dem aktuellen `HTMLMediaElement` bereits abgespielte Medienressource repräsentiert, oder `null`, wenn nicht zugewiesen.
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt für das gerade abgespielte Video zurück.
- [`AudioTrack.sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer), [`VideoTrack.sourceBuffer`](/de/docs/Web/API/VideoTrack/sourceBuffer), [`TextTrack.sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer)
  - : Gibt den [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) zurück, der den betreffenden Track erstellt hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Transkodierung von Assets für Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE)
- Verwendung von MSE zur Erstellung eines einfachen Streaming-Dienstes (TBD)
- Verwendung von MPEG DASH zur Erstellung einer Streaming-Anwendung (TBD)
- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).
