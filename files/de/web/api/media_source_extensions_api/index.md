---
title: Media Source API
slug: Web/API/Media_Source_Extensions_API
l10n:
  sourceCommit: f5ea8950d5cc7bc42691e0bb8a3e634160814bac
---

{{DefaultAPISidebar("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Media Source API**, offiziell als **Media Source Extensions** (**MSE**) bezeichnet, bietet Funktionen, die pluginfreies webbasiertes Streaming von Medien ermöglichen. Mit MSE können Medienstreams über JavaScript erstellt und mithilfe der Elemente {{htmlelement("audio")}} und {{htmlelement("video")}} wiedergegeben werden.

## Konzepte und Verwendung

Die Wiedergabe von Video und Audio ist in Webanwendungen seit einigen Jahren ohne Plugins möglich, doch die angebotenen grundlegenden Funktionen waren bislang eigentlich nur für die Wiedergabe einzelner vollständiger Titel nützlich. Wir können beispielsweise keine ArrayBuffer zusammenführen oder aufteilen. Streaming-Medien waren bis vor Kurzem die Domäne von Flash, wobei Technologien wie Flash Media Server Videostreams über das RTMP-Protokoll bereitstellten.

### Der MSE-Standard

Mit Media Source Extensions (MSE) ändert sich dies. MSE ermöglicht es uns, die übliche einzelne progressive `src`-URI, die Medienelementen zugeführt wird, durch eine Referenz auf ein `MediaSource`-Objekt zu ersetzen. Dieses ist ein Container für Informationen wie den Bereitschaftszustand des wiederzugebenden Mediums sowie Referenzen auf mehrere `SourceBuffer`-Objekte, die die verschiedenen Medienabschnitte darstellen, aus denen der gesamte Stream besteht. MSE gibt uns eine präzisere Kontrolle darüber, wie viele Inhalte und wie häufig sie abgerufen werden, sowie eine gewisse Kontrolle über Details der Speichernutzung, beispielsweise darüber, wann Pufferinhalte verworfen werden. Es schafft die Grundlage für Clients für adaptives Bitratenstreaming, etwa solche, die DASH oder HLS verwenden, die auf seiner erweiterbaren API aufgebaut werden können.

Das Erstellen von Ressourcen, die mit MSE in modernen Browsern funktionieren, ist ein aufwendiger Prozess, der erheblich Zeit, Rechenleistung und Energie beansprucht. Die Verwendung externer Dienstprogramme, um die Inhalte in ein geeignetes Format zu bringen, ist erforderlich. Obwohl die Browserunterstützung für die verschiedenen Mediencontainer mit MSE uneinheitlich ist, bilden die Verwendung des H.264-Videocodecs, des AAC-Audiocodecs und des MP4-Containerformats eine gängige Grundlage. MSE bietet außerdem eine API zur Laufzeiterkennung der Unterstützung von Containern und Codecs.

Wenn Sie keine explizite Kontrolle über die Videoqualität im Zeitverlauf, die Geschwindigkeit des Inhaltsabrufs oder die Geschwindigkeit des Speicherverwerfens benötigen, können die Tags {{htmlelement("video")}} und {{htmlelement("source")}} eine einfache und ausreichende Lösung sein.

### DASH

Dynamic Adaptive Streaming over HTTP (DASH) ist ein Protokoll zur Festlegung, wie adaptive Inhalte abgerufen werden sollen. Es ist praktisch eine auf MSE aufbauende Schicht zum Erstellen von Clients für adaptives Bitratenstreaming. Obwohl andere Protokolle verfügbar sind, etwa HTTP Live Streaming (HLS), verfügt DASH über die breiteste Plattformunterstützung.

DASH verlagert viel Logik aus dem Netzwerkprotokoll in die clientseitige Anwendungslogik und verwendet das einfachere HTTP-Protokoll zum Abrufen von Dateien. Tatsächlich kann DASH mit einem einfachen statischen Dateiserver unterstützt werden, was auch für CDNs hervorragend ist. Dies steht in direktem Gegensatz zu früheren Streaming-Lösungen, die teure Lizenzen für proprietäre, nicht standardisierte Client/Server-Protokollimplementierungen erforderten.

Die beiden häufigsten Anwendungsfälle für DASH sind das Ansehen von Inhalten „on demand“ oder „live“. On demand ermöglicht es Entwicklerinnen und Entwicklern, sich beim Transcodieren der Ressourcen in mehrere Auflösungen unterschiedlicher Qualität Zeit zu nehmen.

Inhalte mit Live-Profil können durch ihre Transcodierung und Übertragung Latenz verursachen. Daher ist DASH nicht für Echtzeitkommunikation wie [WebRTC](/de/docs/Web/API/WebRTC_API) geeignet. Es kann jedoch deutlich mehr Clientverbindungen als WebRTC unterstützen.

Es gibt zahlreiche frei verfügbare Open-Source-Werkzeuge zum Transcodieren von Inhalten und zur Vorbereitung für die Verwendung mit DASH, DASH-Dateiserver sowie in JavaScript geschriebene DASH-Clientbibliotheken. Der Artikel [DASH Adaptive Streaming für HTML-Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming) bietet ein Beispiel für die Verwendung von DASH mit MSE.

### Verfügbarkeit in Workern

Seit Chrome 108 sind MSE-Funktionen in dedizierten [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar. Dies ermöglicht eine bessere Leistung bei der Bearbeitung von [`MediaSource`](/de/docs/Web/API/MediaSource)s und [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)s. Zur Wiedergabe der Medien wird die Eigenschaft [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle) verwendet, um eine Referenz auf ein [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zu erhalten. Dabei handelt es sich um einen Proxy für die `MediaSource`, der zurück an den Hauptthread übertragen und über dessen Eigenschaft [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) an ein Medienelement angehängt werden kann.

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
  - : Eine [`MediaSource`](/de/docs/Web/API/MediaSource), die ihre Speicherinhalte aktiv verwaltet. Anders als eine reguläre `MediaSource` kann eine `ManagedMediaSource` Inhalte aus ihren Quellpuffern jederzeit aus Gründen wie Speicher- oder Hardwarebeschränkungen verwerfen.
- [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)
  - : Ein von einer `ManagedMediaSource` erstellter [`SourceBuffer`](/de/docs/Web/API/SourceBuffer). Löst [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event)-Ereignisse aus, um die Anwendung zu benachrichtigen, wenn gepufferte Bereiche geändert werden, auch wenn der User Agent Inhalte verwirft.
- [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent)
  - : Das Ereignisobjekt für das Ereignis [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event), das [`TimeRanges`](/de/docs/Web/API/TimeRanges) enthält, welche die hinzugefügten und entfernten gepufferten Bereiche darstellen.
- [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)
  - : Enthält Informationen über die Qualität eines von einem {{htmlelement("video")}}-Element wiedergegebenen Videos, beispielsweise die Anzahl verworfener oder beschädigter Frames. Wird von der Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) zurückgegeben.

### Erweiterungen anderer Schnittstellen

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered)
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle angibt, die der Browser zum Zeitpunkt des Zugriffs auf die Eigenschaft `buffered` gegebenenfalls gepuffert hat.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, zu denen die Benutzerin oder der Benutzer gegebenenfalls springen kann.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Medienanbieterobjekt, das die wiederzugebende oder im aktuellen `HTMLMediaElement` wiedergegebene Medienressource darstellt, oder `null`, wenn nichts zugewiesen wurde.
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt für das aktuell wiedergegebene Video zurück.
- [`AudioTrack.sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer), [`VideoTrack.sourceBuffer`](/de/docs/Web/API/VideoTrack/sourceBuffer), [`TextTrack.sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer)
  - : Gibt den [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) zurück, der den betreffenden Track erstellt hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Ressourcen für Media Source Extensions transcodieren](/de/docs/Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE)
- MSE verwenden, um einen grundlegenden Streaming-Dienst zu erstellen (TBD)
- MPEG DASH verwenden, um eine Streaming-Anwendung zu erstellen (TBD)
- Die Elemente {{htmlelement("audio")}} und {{htmlelement("video")}}.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).
