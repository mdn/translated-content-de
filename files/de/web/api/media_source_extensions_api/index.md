---
title: Media Source API
slug: Web/API/Media_Source_Extensions_API
l10n:
  sourceCommit: da7287ff61b6ea4db7f9a5e07be11263b525b7d0
---

{{DefaultAPISidebar("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Media Source API**, formell als **Media Source Extensions** (**MSE**) bekannt, bietet Funktionen, die pluginfreies webbasiertes Streaming von Medien ermöglichen. Mit MSE können Medientröme über JavaScript erstellt und mithilfe der Elemente {{htmlelement("audio")}} und {{htmlelement("video")}} wiedergegeben werden.

## Konzepte und Nutzung

Die Wiedergabe von Video und Audio ist in Webanwendungen seit einigen Jahren ohne Plugins möglich, aber die angebotenen Grundfunktionen waren tatsächlich nur für die Wiedergabe einzelner vollständiger Titel nützlich. Beispielsweise können wir keine ArrayBuffers kombinieren oder aufteilen. Streaming-Medien waren bis vor Kurzem die Domäne von Flash, wobei Technologien wie Flash Media Server Videoströme über das RTMP-Protokoll bereitstellten.

### Der MSE-Standard

Mit Media Source Extensions (MSE) ändert sich dies. MSE ermöglicht es uns, die übliche einzelne progressive `src`-URI, die Medienelementen zugeführt wird, durch einen Verweis auf ein `MediaSource`-Objekt zu ersetzen. Dieses ist ein Container für Informationen wie den Bereitschaftszustand des wiederzugebenden Mediums und Verweise auf mehrere `SourceBuffer`-Objekte, die die verschiedenen Medienabschnitte darstellen, aus denen der gesamte Stream besteht. MSE ermöglicht uns eine feinere Kontrolle darüber, wie viel und wie oft Inhalte abgerufen werden, sowie eine gewisse Kontrolle über Details der Speichernutzung, beispielsweise darüber, wann Puffer verworfen werden. Es schafft die Grundlage für Clients für adaptives Bitraten-Streaming (etwa solche, die DASH oder HLS verwenden), die auf seiner erweiterbaren API aufgebaut sind.

Das Erstellen von Assets, die in modernen Browsern mit MSE funktionieren, ist ein aufwendiger Prozess, der viel Zeit, Rechenleistung und Energie erfordert. Die Verwendung externer Dienstprogramme, um die Inhalte in ein geeignetes Format zu bringen, ist erforderlich. Während die Browserunterstützung für die verschiedenen Mediencontainer mit MSE lückenhaft ist, bilden die Verwendung des H.264-Videocodecs, des AAC-Audiocodecs und des MP4-Containerformats eine gängige Grundlage. MSE stellt außerdem eine API zur Laufzeiterkennung der Unterstützung von Containern und Codecs bereit.

Wenn Sie keine explizite Kontrolle über die Videoqualität im Zeitverlauf, die Rate, mit der Inhalte abgerufen werden, oder die Rate, mit der Speicher verworfen wird, benötigen, können die Tags {{htmlelement("video")}} und {{htmlelement("source")}} eine einfache und ausreichende Lösung sein.

### DASH

Dynamic Adaptive Streaming over HTTP (DASH) ist ein Protokoll zur Festlegung, wie adaptive Inhalte abgerufen werden sollen. Es ist praktisch eine auf MSE aufbauende Schicht zum Erstellen von Clients für adaptives Bitraten-Streaming. Obwohl andere Protokolle verfügbar sind (wie HTTP Live Streaming (HLS)), wird DASH von den meisten Plattformen unterstützt.

DASH verlagert viel Logik aus dem Netzwerkprotokoll in die clientseitige Anwendungslogik und verwendet das einfachere HTTP-Protokoll zum Abrufen von Dateien. Tatsächlich kann DASH mit einem einfachen statischen Dateiserver unterstützt werden, was auch für CDNs vorteilhaft ist. Dies steht im direkten Gegensatz zu früheren Streaming-Lösungen, die teure Lizenzen für proprietäre, nicht standardisierte Client-/Server-Protokollimplementierungen erforderten.

Die beiden häufigsten Anwendungsfälle für DASH bestehen darin, Inhalte „on demand“ oder „live“ anzusehen. On demand ermöglicht es Entwicklern, sich Zeit zu nehmen, die Assets in mehrere Auflösungen unterschiedlicher Qualität zu transkodieren.

Inhalte des Live-Profils können aufgrund ihrer Transkodierung und Übertragung Latenz verursachen. Daher eignet sich DASH nicht für Echtzeitkommunikation wie [WebRTC](/de/docs/Web/API/WebRTC_API). Es kann jedoch deutlich mehr Clientverbindungen unterstützen als WebRTC.

Es gibt zahlreiche frei verfügbare Open-Source-Tools zum Transkodieren von Inhalten und zu deren Vorbereitung für die Verwendung mit DASH, DASH-Dateiserver und in JavaScript geschriebene DASH-Clientbibliotheken. Der Artikel [DASH Adaptive Streaming für HTML-Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming) bietet ein Beispiel dafür, wie DASH mit MSE verwendet wird.

### Verfügbarkeit in Workern

Ab Chrome 108 sind MSE-Funktionen in dedizierten [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar. Dies ermöglicht eine bessere Leistung bei der Bearbeitung von [`MediaSource`](/de/docs/Web/API/MediaSource)s und [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)s. Zur Wiedergabe der Medien wird die Eigenschaft [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle) verwendet, um einen Verweis auf ein [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt abzurufen, einen Proxy für die `MediaSource`, der zurück an den Hauptthread übertragen und über seine Eigenschaft [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) an ein Medienelement angehängt werden kann.

Ein Live-Beispiel finden Sie in der [MSE-in-Workers-Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html).

## Schnittstellen

- [`MediaSource`](/de/docs/Web/API/MediaSource)
  - : Repräsentiert eine Medienquelle, die über ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt wiedergegeben werden soll.
- [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)
  - : Ein Proxy für eine [`MediaSource`](/de/docs/Web/API/MediaSource), der von einem dedizierten Worker zurück an den Hauptthread übertragen und über seine Eigenschaft [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) an ein Medienelement angehängt werden kann.
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
  - : Repräsentiert einen Medienabschnitt, der über ein `MediaSource`-Objekt an ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) übergeben werden soll.
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
  - : Eine einfache Containerliste für mehrere `SourceBuffer`-Objekte.
- [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)
  - : Eine [`MediaSource`](/de/docs/Web/API/MediaSource), die ihren Speicherinhalt aktiv verwaltet. Anders als eine reguläre `MediaSource` kann eine `ManagedMediaSource` aus Gründen wie Speicher- oder Hardwarebeschränkungen jederzeit Inhalte aus ihren Quellpuffern verwerfen.
- [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)
  - : Ein [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der von einer `ManagedMediaSource` erstellt wurde. Löst [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event)-Ereignisse aus, um die Anwendung zu benachrichtigen, wenn gepufferte Bereiche geändert werden, einschließlich dann, wenn der User Agent Inhalte verwirft.
- [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent)
  - : Das Ereignisobjekt für das [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event)-Ereignis, das [`TimeRanges`](/de/docs/Web/API/TimeRanges) enthält, welche die hinzugefügten und entfernten gepufferten Bereiche repräsentieren.
- [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)
  - : Enthält Informationen über die Qualität des Videos, das von einem {{htmlelement("video")}}-Element wiedergegeben wird, beispielsweise die Anzahl ausgelassener oder beschädigter Frames. Wird von der Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) zurückgegeben.

### Erweiterungen anderer Schnittstellen

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered)
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle angibt, die der Browser zum Zeitpunkt des Zugriffs auf die Eigenschaft `buffered` gegebenenfalls gepuffert hat.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, zu denen der Benutzer gegebenenfalls springen kann.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Medienanbieterobjekt, das die wiederzugebende oder im aktuellen `HTMLMediaElement` wiedergegebene Medienressource repräsentiert, oder `null`, wenn keines zugewiesen ist.
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt für das aktuell wiedergegebene Video zurück.
- [`AudioTrack.sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer), [`VideoTrack.sourceBuffer`](/de/docs/Web/API/VideoTrack/sourceBuffer), [`TextTrack.sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer)
  - : Gibt den [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) zurück, der den betreffenden Track erstellt hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Assets für Media Source Extensions transkodieren](/de/docs/Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE)
- MSE verwenden, um einen grundlegenden Streaming-Dienst zu erstellen (TBD)
- MPEG DASH verwenden, um eine Streaming-Anwendung zu erstellen (TBD)
- Die Elemente {{htmlelement("audio")}} und {{htmlelement("video")}}.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).
