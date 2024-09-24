---
title: Livestreaming von Web-Audio und -Video
slug: Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Livestreaming-Technologie wird oft verwendet, um Live-Ereignisse wie Sportveranstaltungen, Konzerte und im Allgemeinen Live-TV- und Radioprogramme zu übertragen. Häufig zu Streaming abgekürzt, ist Livestreaming der Prozess, Medien 'live' an Computer und Geräte zu übertragen. Es handelt sich um ein ziemlich komplexes und neu aufkommendes Thema mit vielen Variablen, daher werden wir Sie in diesem Artikel in das Thema einführen und Ihnen zeigen, wie Sie anfangen können.

Der wichtigste Aspekt beim Streaming von Medien in einen Browser ist die Tatsache, dass wir anstelle einer festen Datei eine Datei übertragen, die spontan erstellt wird und keinen vordefinierten Anfang oder Ende hat.

## Wichtige Unterschiede zwischen gestreamten und statischen Medien

In diesem Fall verwenden wir statische Medien, um Medien zu beschreiben, die durch eine Datei repräsentiert werden, sei es eine MP3- oder WebM-Datei. Diese Datei befindet sich auf einem Server und kann – wie die meisten anderen Dateien – an den Browser geliefert werden. Dies ist oft als progressiver Download bekannt.

Livestreamed-Medien haben im Gegensatz zu statischen Dateien keinen festgelegten Anfangs- und Endzeitpunkt, es handelt sich um einen Datenstrom, den der Server an den Browser weiterleitet und der oft adaptiv ist (siehe unten). In der Regel benötigen wir dafür verschiedene Formate und spezielle serverseitige Software.

## Adaptives Streaming

Eine der Hauptprioritäten beim Livestreaming ist es, den Player mit dem Strom synchron zu halten: Adaptives Streaming ist eine Technik, um dies bei niedriger Bandbreite zu erreichen. Die Idee ist, dass die Datenübertragungsrate überwacht wird und wenn es scheint, als würde sie nicht mithalten, schalten wir auf einen niedrigeren Bandbreite (und folglich auf eine geringere Qualitäts-)Stream um. Damit dies möglich ist, müssen wir Formate verwenden, die dies unterstützen. Livestreaming-Formate ermöglichen in der Regel adaptives Streaming, indem sie Streams in eine Reihe kleiner Segmente aufteilen und diese Segmente in unterschiedlichen Qualitäten und Bitraten verfügbar machen.

## Streaming von Audio und Video auf Abruf

Streaming-Technologie wird nicht ausschließlich für Livestreams verwendet. Sie kann auch anstelle der traditionellen Methode des progressiven Downloads für Audio und Video auf Abruf verwendet werden:

Es gibt dazu mehrere Vorteile:

- Die Latenz ist in der Regel geringer, sodass Medien schneller starten
- Adaptives Streaming sorgt für bessere Erlebnisse auf unterschiedlichen Geräten
- Medien werden just-in-time heruntergeladen, was die Nutzung der Bandbreite effizienter macht

## Streaming-Protokolle

Während statische Medien normalerweise über HTTP bereitgestellt werden, gibt es mehrere Protokolle zum Bereitstellen adaptiver Streams; lassen Sie uns einen Blick auf die Optionen werfen.

### HTTP

Bis jetzt ist HTTP mit Abstand das am meisten unterstützte Protokoll, das verwendet wird, um Medien auf Abruf oder live zu übertragen.

### RTMP

Real Time Messaging Protocol (RTMP) ist ein proprietäres Protokoll, das von Macromedia (heute Adobe) entwickelt wurde und vom Adobe Flash-Plugin unterstützt wird. RTMP gibt es in verschiedenen Ausführungen, einschließlich RTMPE (verschlüsselt), RTMPS (sicher über TLS/SSL) und RTMPT (in HTTP-Anfragen gekapselt).

### RTSP

> [!NOTE]
> Das Real Time Streaming Protocol (RTSP) steuert Mediensitzungen zwischen Endpunkten und wird oft zusammen mit dem Real-time Transport Protocol (RTP) und dem Real-time Control Protocol (RTCP) zur Bereitstellung von Medienstreams verwendet. Die Verwendung von RTP mit RTCP ermöglicht adaptives Streaming. Dies wird in den meisten Browsern noch nicht nativ unterstützt.
>
> Einige Anbieter implementieren proprietäre Transportprotokolle, wie RealNetworks und dessen Real Data Transport (RDT).

### RTSP 2.0

RTSP 2.0 befindet sich derzeit in Entwicklung und ist nicht rückwärtskompatibel mit RTSP 1.0.

> [!WARNING]
> Obwohl die {{ htmlelement("audio") }}- und {{ htmlelement("video") }}-Tags protokollunabhängig sind, unterstützt derzeit kein Browser außer HTTP ohne Plugins, obwohl sich dies zu ändern scheint. Protokolle, die nicht HTTP sind, können auch von Firewalls oder Proxy-Servern blockiert werden.

## Verwendung von Streaming-Protokollen

Der Prozess der Verwendung der verschiedenen Protokolle ist beruhigend vertraut, wenn Sie es gewohnt sind, mit Medien über HTTP zu arbeiten.

Zum Beispiel:

```html
<video src="rtsp://myhost.com/mymedia.format">
  <!-- Fallback here -->
</video>
```

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, {{ domxref("HTMLMediaElement") }} zu erweitern, um JavaScript das Erzeugen von Medienströmen zur Wiedergabe zu ermöglichen. Das Erzeugen von Streams durch JavaScript ermöglicht eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Zeitverschiebung bei Livestreams.

Zum Beispiel [könnten Sie MPEG-DASH mit JavaScript implementieren und das Decodieren an MSE auslagern](https://web.archive.org/web/20170504035455/https://msopentech.com/blog/2014/01/03/streaming_video_player/).

> [!NOTE]
> Timeshifting ist der Prozess des Konsumierens eines Livestreams zu einem späteren Zeitpunkt.

## Video-Streaming-Dateiformate

Einige HTTP-basierte Livestreaming-Videoformate beginnen in Browsern Unterstützung zu erhalten.

> [!NOTE]
> Sie finden eine Anleitung zum Kodieren von HLS und MPEG-DASH für die Nutzung im Web unter [Einrichten adaptiver Streaming-Medienquellen](/de/docs/Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources).

### MPEG-DASH

DASH steht für Dynamic Adaptive Streaming over HTTP. Es wird über Media Source Extensions unterstützt, die von JavaScript-Bibliotheken wie [DASH.js](https://github.com/Dash-Industry-Forum/dash.js/) verwendet werden. Dieser Ansatz ermöglicht es uns, Video-Stream-Chunks mit XHR herunterzuladen und diese Chunks dem Stream, der vom {{ htmlelement("video") }}-Element abgespielt wird, "anzuhängen". Wenn wir beispielsweise feststellen, dass das Netzwerk langsam ist, können wir anfangen, für das nächste Segment niedrigere Qualitäts- (kleinere) Chunks anzufordern. Diese Technologie ermöglicht auch das Anhängen/Einschieben eines Werbesegments in den Stream.

> [!NOTE]
> Sie können auch [WebM mit dem MPEG-DASH-adaptiven Streaming-System verwenden](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification).

### HLS

HLS oder HTTP Live Streaming ist ein von Apple Inc. entwickeltes Protokoll, das auf iOS, Safari und den neuesten Versionen des Android-Browsers / Chrome unterstützt wird. HLS ist auch adaptiv.

HLS kann auch mit JavaScript dekodiert werden, was bedeutet, dass wir die neuesten Versionen von Firefox, Chrome und Safari unterstützen können. Siehe diesen [HTTP Live Streaming JavaScript-Player](https://github.com/video-dev/hls.js).

Zu Beginn der Streaming-Sitzung wird eine [erweiterte M3U (m3u8) Playlist](https://en.wikipedia.org/wiki/M3U8#Extended_M3U_directives) heruntergeladen. Diese enthält die Metadaten für die verschiedenen bereitgestellten Sub-Streams.

## Audio-Streaming-Dateiformate

Es gibt auch mehrere Audio-Formate:

### Opus

Opus ist ein lizenzfreies und offenes Format, das die Qualität bei verschiedenen Bitraten für unterschiedliche Arten von Audio optimiert. Musik und Sprache können auf unterschiedliche Weise optimiert werden und Opus verwendet die SILK- und CELT-Codecs, um dies zu erreichen.

Derzeit wird Opus von Firefox Desktop und Mobile sowie den neuesten Versionen von Desktop Chrome und Opera unterstützt.

> **Note:** [Opus ist ein obligatorisches Format](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-audio-05) für WebRTC-Browserimplementierungen.

### MP3, AAC, Ogg Vorbis

Die meisten gängigen Audio-Formate können mit spezifischen serverseitigen Technologien gestreamt werden.

Hinweis: Es ist potenziell einfacher, Audio mit Nicht-Streaming-Formaten zu streamen, da es im Gegensatz zu Video keine Schlüsselbilder gibt.

## Serverseitige Streaming-Technologien

Um Live-Audio und -Video zu streamen, müssen Sie eine spezielle Streaming-Software auf Ihrem Server ausführen oder Drittanbieter-Dienste nutzen.

### GStreamer

[GStreamer](https://gstreamer.freedesktop.org/) ist ein plattformübergreifendes Open-Source-Multimedia-Framework, das es Ihnen ermöglicht, eine Vielzahl von Medienverarbeitungskomponenten, einschließlich Streaming-Komponenten, zu erstellen. Durch sein Pluginsystem bietet GStreamer Unterstützung für mehr als hundert Codecs (einschließlich MPEG-1, MPEG-2, MPEG-4, H.261, H.263, H.264, RealVideo, MP3, WMV und FLV.)

GStreamer-Plugins wie [souphttpclientsink](https://gstreamer.freedesktop.org/documentation/soup/souphttpclientsink.html?gi-language=c) und [shout2send](https://gstreamer.freedesktop.org/documentation/shout2/index.html?gi-language=c#shout2send-page) existieren, um Medien über HTTP zu streamen, oder Sie können auch mit dem Twisted-Framework von Python integrieren.

Für RTMP-Übertragungen können Sie das [Nginx RTMP-Modul](https://github.com/arut/nginx-rtmp-module) verwenden.

### SHOUTcast

[SHOUTcast](https://en.wikipedia.org/wiki/SHOUTcast) ist eine plattformübergreifende proprietäre Technologie zum Streamen von Medien. Entwickelt von Nullsoft, ermöglicht sie das Senden digitaler Audioinhalte im MP3- oder AAC-Format. Für die Web-Nutzung werden SHOUTcast-Streams über HTTP übertragen.

> **Note:** [SHOUTcast-URLs erfordern möglicherweise, dass ihnen ein Semikolon hinzugefügt wird](https://stackoverflow.com/questions/2743279/how-could-i-play-a-shoutcast-icecast-stream-using-html5).

### Icecast

Der [Icecast](https://www.icecast.org/)-Server ist eine Open-Source-Technologie zum Streamen von Medien. Er wird von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt und streamt Ogg Vorbis/Theora sowie MP3- und AAC-Formate über das SHOUTcast-Protokoll.

> [!NOTE]
> SHOUTcast und Icecast gehören zu den etabliertesten und beliebtesten Technologien, es gibt jedoch viele [weitere verfügbare Streaming-Medien-Systeme](https://en.wikipedia.org/wiki/List_of_streaming_media_systems#Servers).

### Streaming-Dienste

Obwohl Sie Software wie GStreamer, SHOUTcast und Icecast installieren können, finden Sie auch viele [Drittanbieter-Streaming-Dienste](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems), die einen Großteil der Arbeit für Sie übernehmen.

## Siehe auch

- [HTTP Live Streaming](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
- [HLS-Browserunterstützung](https://jwplayer.com/blog/http-live-streaming/)
- [HTTP Live Streaming JavaScript-Player](https://github.com/RReverser/mpegts)
- [Die Grundlagen des HTTP-Live-Streamings](https://larryjordan.com/articles/basics-of-http-live-streaming/)
- [DASH Adaptive Streaming für HTML5-Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
- [Dynamic Adaptive Streaming über HTTP (MPEG-DASH)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [MPEG-DASH-Medienquelle Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
- [DASH-Referenz-Client](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html)
- [Dynamisches Streaming über HTTP](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [Der Stand der MPEG-DASH-Einführung](https://www.streamingmediaglobal.com/Articles/Editorial/Featured-Articles/The-State-of-MPEG-DASH-Deployment-96144.aspx)
- [Ohne Plugins: Livestreaming im Browser mit Media Source Extensions und MPEG-DASH](https://www.bbc.co.uk/rd/blog/2014-03-media-source-extensions)
- [Media Source Extensions (W3C)](https://w3c.github.io/media-source/)
- [Icecast](https://en.wikipedia.org/wiki/Icecast)
- [SHOUTcast](https://en.wikipedia.org/wiki/Shoutcast)
- [GStreamer](https://en.wikipedia.org/wiki/GStreamer)
- [Streaming von GStreamer-Pipelines über HTTP](https://coaxion.net/blog/2013/10/streaming-gstreamer-pipelines-via-http/)
- [GStreamer und Raspberry Pi](https://nginx-rtmp.blogspot.com/2013/07/gstreamer-and-raspberry-pi.html)
- [Vergleich von Streaming-Medien-Systemen](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)
- [Mozilla Hacks - Streaming von Medien auf Abruf mit Media Source Extensions](https://hacks.mozilla.org/2015/07/streaming-media-on-demand-with-media-source-extensions/)
