---
title: Media Source API
slug: Web/API/Media_Source_Extensions_API
l10n:
  sourceCommit: 4be29f6917b698805c919c5d290359bc13c62384
---

{{DefaultAPISidebar("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Media Source API**, formal bekannt als **Media Source Extensions** (**MSE**), bietet Funktionen, die plugin-freies, web-basiertes Streaming von Medien ermöglichen. Mit MSE können Medienströme über JavaScript erstellt und mit den {{htmlelement("audio")}} und {{htmlelement("video")}}-Elementen wiedergegeben werden.

## Konzepte und Nutzung

Wiedergabe von Video und Audio ist seit einigen Jahren in Webanwendungen ohne Plugins möglich, jedoch waren die angebotenen Basisfunktionen wirklich nur nützlich für die Wiedergabe einzelner kompletter Tracks. Beispielsweise können wir keine `arraybuffers` kombinieren/trennen. Streaming-Medien waren bis vor kurzem das Gebiet von Flash, wobei Technologien wie der Flash Media Server Videostreams mithilfe des RTMP-Protokolls bereitstellten.

### Der MSE-Standard

Mit den Media Source Extensions (MSE) ändert sich dies. MSE ermöglicht es uns, den üblichen einzelnen progressiven `src` URI, der an Medienelemente übergeben wird, durch einen Verweis auf ein `MediaSource`-Objekt zu ersetzen. Dieses Objekt ist ein Container für Informationen wie den Bereitschaftszustand der Medien zur Wiedergabe und Verweise auf mehrere `SourceBuffer`-Objekte, die die verschiedenen Medienstücke darstellen, aus denen der gesamte Stream besteht. MSE gibt uns die Möglichkeit zur feineren Steuerung darüber, wie viel und wie oft Inhalte abgerufen werden, sowie eine gewisse Kontrolle über die Details zur Speichernutzung, wie zum Beispiel, wann Puffer gelöscht werden. Es legt den Grundstein für adaptiven Bitraten-Streaming-Clients (wie beispielsweise solche, die DASH oder HLS verwenden), die auf seiner erweiterbaren API aufgebaut werden können.

Das Erstellen von Assets, die mit MSE in modernen Browsern funktionieren, ist ein mühsamer Prozess, der beträchtliche Zeit, Rechenleistung und Energie erfordert. Die Verwendung externer Werkzeuge, um den Inhalt in ein geeignetes Format zu bringen, ist erforderlich. Während der Browser-Support für die verschiedenen Mediencontainer mit MSE lückenhaft ist, ist die Verwendung des H.264-Videocodecs, AAC-Audiocodecs und des MP4-Containerformats ein üblicher Ausgangspunkt. MSE bietet auch eine API zur Laufzeit-Erkennung von Container- und Codecs-Unterstützung.

Wenn Sie keine explizite Steuerung der Videoqualität über die Zeit, der Rate, mit der Inhalte abgerufen werden, oder der Rate, mit der Speicher gelöscht wird, benötigen, dann sind die {{htmlelement("video")}} und {{htmlelement("source")}} Tags möglicherweise eine einfache und ausreichende Lösung.

### DASH

Dynamic Adaptive Streaming over HTTP (DASH) ist ein Protokoll zur Spezifikation, wie adaptive Inhalte abgerufen werden sollten. Es ist effektiv eine Schicht, die auf MSE aufbaut, um adaptive Bitraten-Streaming-Clients zu erstellen. Obwohl es andere verfügbare Protokolle gibt (wie HTTP Live Streaming (HLS)), hat DASH die meiste Plattformunterstützung.

DASH verlagert viel Logik aus dem Netzwerkprotokoll in die Anwendungslogik auf der Clientseite und nutzt das einfachere HTTP-Protokoll, um Dateien abzurufen. Tatsächlich kann man DASH mit einem einfachen statischen Dateiserver unterstützen, was auch für CDNs von Vorteil ist. Dies steht im direkten Gegensatz zu früheren Streaming-Lösungen, die teure Lizenzen für proprietäre, nicht-standardisierte Client/Server-Protokollimplementierungen erforderten.

Die beiden häufigsten Anwendungsfälle für DASH betreffen das Anschauen von Inhalten "on demand" oder "live". On demand ermöglicht es einem Entwickler, sich Zeit zu nehmen, um die Assets in mehreren Auflösungen von unterschiedlicher Qualität zu transkodieren.

Live-Profile-Inhalte können aufgrund ihrer Transkodierung und Übertragung Latenz einführen, weshalb DASH nicht für Echtzeitkommunikation wie [WebRTC](/de/docs/Web/API/WebRTC_API) geeignet ist. Es kann jedoch erheblich mehr Clientverbindungen als WebRTC unterstützen.

Es gibt zahlreiche verfügbare kostenlose und quelloffene Tools zur Transkodierung von Inhalten und zur Vorbereitung für die Nutzung mit DASH, DASH-Dateiserver und DASH-Clientbibliotheken, die in JavaScript geschrieben sind. Der Artikel [DASH Adaptive Streaming für HTML-Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming) bietet ein Beispiel dafür, wie DASH mit MSE verwendet wird.

### Verfügbarkeit in Workern

Ab Chrome 108 sind MSE-Funktionen in dedizierten [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar, was eine verbesserte Leistung beim Manipulieren von [`MediaSource`](/de/docs/Web/API/MediaSource)s und [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)s ermöglicht. Um die Medien abzuspielen, wird die [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle)-Eigenschaft verwendet, um eine Referenz zu einem [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zu erhalten, einem Proxy für die `MediaSource`, der zurück an den Hauptthread übertragen und über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Medienelement angehängt werden kann.

Sehen Sie [MSE-in-Workers Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html) für ein Live-Beispiel.

## Schnittstellen

- [`MediaSource`](/de/docs/Web/API/MediaSource)
  - : Stellt eine Medienquelle dar, die über ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt abgespielt werden soll.
- [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)
  - : Ein Proxy für eine [`MediaSource`](/de/docs/Web/API/MediaSource), der von einem dedizierten Worker zurück in den Hauptthread übertragen und über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Medienelement angehängt werden kann.
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
  - : Stellt ein Stück Medien dar, das über ein `MediaSource`-Objekt in ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) übergeben wird.
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
  - : Eine einfache Containerliste für mehrere `SourceBuffer`-Objekte.
- [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)
  - : Eine [`MediaSource`](/de/docs/Web/API/MediaSource), die ihre Speicherinhalte aktiv verwaltet. Im Gegensatz zu einer regulären `MediaSource` kann eine `ManagedMediaSource` Inhalte jederzeit aus ihren Quellpuffern löschen, beispielsweise aufgrund von Speicher- oder Hardwarebeschränkungen.
- [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)
  - : Ein [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der von einer `ManagedMediaSource` erstellt wurde. Er löst [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event)-Events aus, um die Anwendung zu benachrichtigen, wenn zwischengespeicherte Bereiche geändert werden, einschließlich wenn der Benutzeragent Inhalte löscht.
- [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent)
  - : Das Ereignisobjekt für das [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event)-Ereignis, das [`TimeRanges`](/de/docs/Web/API/TimeRanges) enthält, die die hinzugefügten und entfernten zwischengespeicherten Bereiche darstellen.
- [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)
  - : Enthält Informationen über die Qualität des von einem {{htmlelement("video")}}-Element abgespielten Videos, wie die Anzahl der verworfenen oder beschädigten Frames. Wird von der Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) zurückgegeben.

### Erweiterungen anderer Schnittstellen

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered)
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle angibt, die der Browser im Moment zwischengespeichert hat (falls vorhanden), wenn die `buffered`-Eigenschaft zugegriffen wird.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, die der Benutzer ansteuern kann, falls vorhanden.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Medienanbieter-Objekt, das die abzuspielende oder die aktuell im `HTMLMediaElement` abgespielte Medienressource darstellt, oder `null`, wenn nicht zugewiesen.
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt für das aktuell abgespielte Video zurück.
- [`AudioTrack.sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer), [`VideoTrack.sourceBuffer`](/de/docs/Web/API/VideoTrack/sourceBuffer), [`TextTrack.sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer)
  - : Gibt den [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) zurück, der den betreffenden Track erstellt hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Transkodierung von Assets für Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE)
- Verwendung von MSE zur Erstellung eines grundlegenden Streaming-Dienstes (TBD)
- Verwendung von MPEG DASH zur Erstellung einer Streaming-Anwendung (TBD)
- Die {{htmlelement("audio")}} und {{htmlelement("video")}}-Elemente.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).
