---
title: Livestreaming von Web-Audio und -Video
slug: Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Livestreaming-Technologie wird häufig verwendet, um Live-Events wie Sportveranstaltungen, Konzerte und allgemein TV- und Radio-Sendungen, die live ausgestrahlt werden, zu übertragen. Oft einfach nur Streaming genannt, ist Livestreaming der Prozess, Medien "live" an Computer und Geräte zu übertragen. Dies ist ein ziemlich komplexes und neues Thema mit vielen Variablen. In diesem Artikel führen wir Sie in das Thema ein und zeigen Ihnen, wie Sie beginnen können.

Der wichtigste Aspekt beim Streaming von Medien in einen Browser ist die Tatsache, dass wir anstelle der Wiedergabe einer endlichen Datei eine Datei übertragen, die im Moment erstellt wird und keinen vorher festgelegten Anfang oder Endpunkt hat.

## Wichtige Unterschiede zwischen gestreamten und statischen Medien

In diesem Fall verwenden wir statische Medien, um Medien zu beschreiben, die durch eine Datei dargestellt werden, sei es eine mp3- oder WebM-Datei. Diese Datei befindet sich auf einem Server und kann – wie die meisten anderen Dateien – an den Browser geliefert werden. Dies wird häufig als progressiver Download bezeichnet.

Livestreams haben, im Gegensatz zu einer statischen Datei, keinen festen Anfangs- und Endpunkt, es handelt sich um einen Datenstrom, den der Server an den Browser weiterleitet und der oft adaptiv ist (siehe unten). Üblicherweise benötigen wir dafür unterschiedliche Formate und spezielle serverseitige Software.

## Adaptives Streaming

Eine der Hauptprioritäten beim Livestreaming ist es, den Player synchron mit dem Stream zu halten: Adaptives Streaming ist eine Technik, dies bei niedriger Bandbreite zu erreichen. Die Idee ist, dass die Datenübertragungsrate überwacht wird und, wenn es so aussieht, als würde sie nicht mithalten können, auf einen niedrigeren Bandbreiten- (und folglich niedrigeren Qualitäts-) Stream heruntergewechselt wird. Um dies zu ermöglichen, müssen wir Formate verwenden, die dies unterstützen. Livestreaming-Formate erlauben im Allgemeinen adaptives Streaming, indem sie Streams in eine Reihe kleiner Segmente aufteilen und diese Segmente in verschiedenen Qualitäten und Bitraten zur Verfügung stellen.

## Streaming von Audio und Video auf Abruf

Streaming-Technologie wird nicht ausschließlich für Livestreaming verwendet. Sie kann auch anstelle der traditionellen Methode des progressiven Downloads für Audio und Video auf Abruf genutzt werden:

Dafür gibt es mehrere Vorteile:

- Die Latenz ist im Allgemeinen geringer, sodass Medien schneller abgespielt werden
- Adaptives Streaming bietet bessere Erfahrungen auf einer Vielzahl von Geräten
- Medien werden rechtzeitig heruntergeladen, was die Bandbreitennutzung effizienter macht

## Streaming-Protokolle

Während statische Medien normalerweise über HTTP bereitgestellt werden, gibt es mehrere Protokolle für die Bereitstellung von adaptiven Streams; werfen wir einen Blick auf die Optionen.

### HTTP

Derzeit ist HTTP bei weitem das am häufigsten unterstützte Protokoll zur Übertragung von Medien auf Abruf oder live.

### RTMP

Das Real Time Messaging Protocol (RTMP) ist ein proprietäres Protokoll, das von Macromedia (jetzt Adobe) entwickelt wurde und vom Adobe Flash-Plugin unterstützt wird. RTMP existiert in verschiedenen Varianten, darunter RTMPE (verschlüsselt), RTMPS (sicher über TLS/SSL) und RTMPT (in HTTP-Anfragen gekapselt).

### RTSP

> [!NOTE]
> Das Real Time Streaming Protocol (RTSP) steuert Mediensitzungen zwischen Endpunkten und wird oft zusammen mit dem Real-time Transport Protocol (RTP) und dem Real-time Control Protocol (RTCP) zur Medienstromübertragung verwendet. Die Verwendung von RTP mit RTCP ermöglicht adaptives Streaming. Dies wird in den meisten Browsern noch nicht nativ unterstützt.
>
> Einige Anbieter implementieren proprietäre Transportprotokolle, wie RealNetworks und ihren Real Data Transport (RDT).

### RTSP 2.0

RTSP 2.0 befindet sich derzeit in der Entwicklung und ist nicht rückwärtskompatibel zu RTSP 1.0.

> [!WARNING]
> Obwohl die {{ htmlelement("audio") }} und {{ htmlelement("video") }} HTML-Elemente protokollagnostisch sind, wird derzeit von keinem Browser etwas anderes als HTTP unterstützt, ohne dass Plugins erforderlich sind, obwohl sich dies ändern könnte. Protokolle außer HTTP können auch durch Firewalls oder Proxy-Server blockiert werden.

## Verwendung von Streaming-Protokollen

Der Prozess der Verwendung der verschiedenen Protokolle ist beruhigend vertraut, wenn Sie an die Arbeit mit Medien über HTTP gewöhnt sind.

Beispiel:

```html
<video src="rtsp://myhost.com/mymedia.format">
  <!-- Fallback here -->
</video>
```

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript zu ermöglichen, Medienstreams zur Wiedergabe zu generieren. Die Erlaubnis, JavaScript Streams generieren zu lassen, ermöglicht eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Zeitverschiebung bei Livestreams.

Beispielsweise [könnten Sie MPEG-DASH mit JavaScript implementieren und das Decoding an MSE auslagern](https://web.archive.org/web/20170504035455/https://msopentech.com/blog/2014/01/03/streaming_video_player/).

> [!NOTE]
> Zeitverschiebung ist der Prozess, einen Livestream zu konsumieren, nachdem er passiert ist.

## Video-Streaming-Dateiformate

Einige HTTP-basierte Livestreaming-Videoformate beginnen, Unterstützung über die Browser hinweg zu gewinnen.

> [!NOTE]
> Eine Anleitung zur Kodierung von HLS und MPEG-DASH für die Webnutzung finden Sie unter [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources).

### MPEG-DASH

DASH steht für Dynamic Adaptive Streaming over HTTP. Es wird über Media Source Extensions unterstützt, die von JavaScript-Bibliotheken wie [DASH.js](https://github.com/Dash-Industry-Forum/dash.js/) verwendet werden. Dieser Ansatz ermöglicht es uns, Videostream-Chunks mithilfe von XHR herunterzuladen und "anzuhängen", die Chunks an den Stream, der vom {{ htmlelement("video") }}-Element abgespielt wird. Wenn wir beispielsweise feststellen, dass das Netzwerk langsam ist, können wir anfangen, qualitativ niedrigere (kleinere) Chunks für das nächste Segment anzufordern. Diese Technologie ermöglicht es auch, ein Werbesegment an den Stream anzuhängen/einzufügen.

> [!NOTE]
> Sie können auch [WebM mit dem MPEG DASH adaptiven Streaming-System verwenden](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification).

### HLS

HLS oder HTTP Live Streaming ist ein von Apple Inc. entwickeltes Protokoll und wird auf iOS, Safari und den neuesten Versionen des Android-Browsers / Chrome unterstützt. HLS ist ebenfalls adaptiv.

HLS kann auch mittels JavaScript dekodiert werden, was bedeutet, dass wir die neuesten Versionen von Firefox, Chrome und Safari unterstützen können. Sehen Sie sich diesen [HTTP Live Streaming JavaScript Player](https://github.com/video-dev/hls.js) an.

Zu Beginn der Streaming-Session wird eine [erweiterte M3U (m3u8) Playlist](https://en.wikipedia.org/wiki/M3U8#Extended_M3U_directives) heruntergeladen. Diese enthält die Metadaten für die verschiedenen bereitgestellten Sub-Streams.

## Audio-Streaming-Dateiformate

Es gibt auch mehrere Audioformate:

### Opus

Opus ist ein gebührenfreies und offenes Format, das die Qualität bei verschiedenen Bitraten für unterschiedliche Arten von Audio optimiert. Musik und Sprache können auf unterschiedliche Weise optimiert werden, und Opus verwendet die SILK- und CELT-Codecs, um dies zu erreichen.

Derzeit wird Opus von Firefox Desktop und Mobile sowie von den neuesten Versionen von Desktop Chrome und Opera unterstützt.

> **Hinweis:** [Opus ist ein Pflichtformat](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-audio-05) für WebRTC-Browserimplementierungen.

### MP3, AAC, Ogg Vorbis

Die meisten gängigen Audioformate können mit spezifischen serverseitigen Technologien gestreamt werden.

Hinweis: Es ist potenziell einfacher, Audio mit nicht-streaming-fähigen Formaten zu streamen, da es im Gegensatz zu Video keine Schlüsselbilder gibt.

## Server-seitige Streaming-Technologien

Um Live-Audio und -Video zu streamen, müssen Sie spezielle Streaming-Software auf Ihrem Server ausführen oder Drittanbieterdienste nutzen.

### GStreamer

[GStreamer](https://gstreamer.freedesktop.org/) ist ein Open-Source-Multimedia-Frameworks, das plattformübergreifend funktioniert und es Ihnen ermöglicht, eine Vielzahl von Medienverarbeitungskomponenten zu erstellen, einschließlich Streaming-Komponenten. Durch sein Plugin-System bietet GStreamer Unterstützung für mehr als hundert Codecs (einschließlich MPEG-1, MPEG-2, MPEG-4, H.261, H.263, H.264, RealVideo, MP3, WMV und FLV).

GStreamer Plugins wie [souphttpclientsink](https://gstreamer.freedesktop.org/documentation/soup/souphttpclientsink.html?gi-language=c) und [shout2send](https://gstreamer.freedesktop.org/documentation/shout2/index.html?gi-language=c#shout2send-page) existieren, um Medien über HTTP zu streamen oder Sie können sich in Pythons Twisted-Framework integrieren.

Für die RTMP-Übertragung können Sie das [Nginx RTMP Modul](https://github.com/arut/nginx-rtmp-module) verwenden.

### SHOUTcast

[SHOUTcast](https://en.wikipedia.org/wiki/SHOUTcast) ist eine plattformübergreifende proprietäre Technologie für das Streaming von Medien. Entwickelt von Nullsoft, ermöglicht es die Übertragung von digitalen Audioinhalten im MP3- oder AAC-Format. Für die Webnutzung werden SHOUTcast-Streams über HTTP übertragen.

> **Hinweis:** [SHOUTcast-URLs erfordern möglicherweise, dass ein Semikolon angehängt wird](https://stackoverflow.com/questions/2743279/how-could-i-play-a-shoutcast-icecast-stream-using-html5).

### Icecast

Der [Icecast](https://www.icecast.org/) Server ist eine Open-Source-Technologie für das Streaming von Medien. Verwaltet von der [Xiph.org Foundation](https://www.xiph.org/), streamt er Ogg Vorbis/Theora sowie MP3 und AAC im SHOUTcast-Protokoll.

> [!NOTE]
> SHOUTcast und Icecast sind unter den etabliertesten und beliebtesten Technologien, aber es gibt viele [weitere Streaming-Medien-Systeme](https://en.wikipedia.org/wiki/List_of_streaming_media_systems#Servers).

### Streaming-Dienste

Obwohl Sie Software wie GStreamer, SHOUTcast und Icecast installieren können, finden Sie auch viele [Streaming-Dienstanbieter](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems), die viel Arbeit für Sie übernehmen.

## Siehe auch

- [HTTP Live Streaming](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
- [HLS-Browser-Unterstützung](https://jwplayer.com/blog/http-live-streaming/)
- [HTTP Live Streaming JavaScript Player](https://github.com/RReverser/mpegts)
- [Die Grundlagen von HTTP Live Streaming](https://larryjordan.com/articles/basics-of-http-live-streaming/)
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
- [Dynamisches Adaptives Streaming über HTTP (MPEG-DASH)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [MPEG-DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
- [DASH Referenz-Client](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html)
- [Dynamisches Streaming über HTTP](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [Der Stand der MPEG-DASH-Einführung](https://www.streamingmediaglobal.com/Articles/Editorial/Featured-Articles/The-State-of-MPEG-DASH-Deployment-96144.aspx)
- [Keine Plugins benötigt: Livestreaming im Browser mit Media Source Extensions und MPEG-DASH](https://www.bbc.co.uk/rd/blog/2014-03-media-source-extensions)
- [Media Source Extensions (W3C)](https://w3c.github.io/media-source/)
- [Icecast](https://en.wikipedia.org/wiki/Icecast)
- [SHOUTcast](https://en.wikipedia.org/wiki/Shoutcast)
- [GStreamer](https://en.wikipedia.org/wiki/GStreamer)
- [Streaming GStreamer Pipelines über HTTP](https://coaxion.net/blog/2013/10/streaming-gstreamer-pipelines-via-http/)
- [GStreamer und Raspberry Pi](https://nginx-rtmp.blogspot.com/2013/07/gstreamer-and-raspberry-pi.html)
- [Vergleich von Streaming-Media-Systemen](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)
- [Mozilla Hacks - Streaming-Medien auf Anfrage mit Media Source Extensions](https://hacks.mozilla.org/2015/07/streaming-media-on-demand-with-media-source-extensions/)
