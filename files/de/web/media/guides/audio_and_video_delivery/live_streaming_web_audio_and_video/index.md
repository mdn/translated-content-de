---
title: Livestreaming von Web-Audio und -Video
slug: Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Livestreaming-Technologie wird oft verwendet, um Live-Events wie Sport, Konzerte und allgemein TV- und Radioprogramme, die live ausgestrahlt werden, zu übertragen. Oft einfach als Streaming bezeichnet, ist Livestreaming der Prozess der Übertragung von Medien "live" an Computer und Geräte. Dies ist ein recht komplexes und noch neues Thema mit vielen Variablen, daher werden wir Ihnen in diesem Artikel das Thema vorstellen und Ihnen zeigen, wie Sie beginnen können.

Der wichtigste Aspekt beim Streamen von Medien zu einem Browser ist die Tatsache, dass wir anstelle einer festen Datei eine Datei weiterleiten, die gerade erstellt wird und deren Beginn und Ende nicht im Voraus festgelegt sind.

## Hauptunterschiede zwischen gestreamten und statischen Medien

In diesem Fall verwenden wir statische Medien, um Medien zu beschreiben, die durch eine Datei repräsentiert werden, sei es eine mp3- oder WebM-Datei. Diese Datei liegt auf einem Server und kann — wie die meisten anderen Dateien — an den Browser ausgeliefert werden. Dies wird oft als progressiver Download bezeichnet.

Livestreamed-Medien haben im Gegensatz zu einer statischen Datei keinen festgelegten Anfangs- und Endzeitpunkt, es handelt sich um einen Datenstrom, den der Server an den Browser weiterleitet und der oft adaptiv ist (siehe unten). In der Regel benötigen wir hierfür verschiedene Formate und spezielle serverseitige Software.

## Adaptives Streaming

Eine der Hauptprioritäten beim Livestreaming ist es, den Player mit dem Stream synchronisiert zu halten: Adaptives Streaming ist eine Technik, um dies bei geringer Bandbreite zu erreichen. Die Idee ist, dass die Datenübertragungsrate überwacht wird und wenn sie anscheinend nicht Schritt hält, wechseln wir zu einem Stream mit niedrigerer Bandbreite (und folglich geringerer Qualität). Um diese Fähigkeit zu haben, müssen wir Formate verwenden, die dies ermöglichen. Livestreaming-Formate erlauben in der Regel adaptives Streaming, indem sie Streams in eine Reihe kleiner Segmente aufteilen und diese Segmente in verschiedenen Qualitäten und Bitraten verfügbar machen.

## Streaming von Audio und Video auf Abruf

Streaming-Technologie wird nicht ausschließlich für Livestreams genutzt. Sie kann auch anstelle der traditionellen Methode des progressiven Downloads für Audio und Video auf Abruf verwendet werden:

Es gibt mehrere Vorteile dafür:

- Die Latenz ist im Allgemeinen geringer, sodass Medien schneller abgespielt werden
- Adaptives Streaming sorgt für bessere Erfahrungen auf einer Vielzahl von Geräten
- Medien werden gerade rechtzeitig heruntergeladen, was die Bandbreitennutzung effizienter macht

## Streaming-Protokolle

Während statische Medien normalerweise über HTTP bereitgestellt werden, gibt es mehrere Protokolle für die Bereitstellung adaptiver Streams; sehen wir uns die Optionen an.

### HTTP

Bis jetzt ist HTTP bei weitem das am häufigsten unterstützte Protokoll, das zur Übertragung von Medien auf Abruf oder live verwendet wird.

### RTMP

Das Real Time Messaging Protocol (RTMP) ist ein proprietäres Protokoll, das von Macromedia (jetzt Adobe) entwickelt wurde und vom Adobe Flash-Plugin unterstützt wird. RTMP ist in verschiedenen Varianten verfügbar, darunter RTMPE (verschlüsselt), RTMPS (sicher über TLS/SSL) und RTMPT (in HTTP-Anfragen eingekapselt).

### RTSP

> [!NOTE]
> Das Real Time Streaming Protocol (RTSP) steuert Mediensitzungen zwischen Endpunkten und wird oft zusammen mit dem Real-time Transport Protocol (RTP) und dem Real-time Control Protocol (RTCP) für die Medienstream-Lieferung verwendet. Die Verwendung von RTP mit RTCP ermöglicht adaptives Streaming. Dies wird in den meisten Browsern noch nicht nativ unterstützt.
>
> Einige Anbieter implementieren proprietäre Transportprotokolle, wie RealNetworks und ihren Real Data Transport (RDT).

### RTSP 2.0

RTSP 2.0 befindet sich derzeit in der Entwicklung und ist nicht abwärtskompatibel mit RTSP 1.0.

> [!WARNING]
> Obwohl die {{ htmlelement("audio") }} und {{ htmlelement("video") }} Tags protokollunabhängig sind, unterstützt derzeit kein Browser etwas anderes als HTTP ohne Plugins, obwohl sich das voraussichtlich ändern wird. Protokolle außer HTTP können auch durch Firewalls oder Proxy-Server blockiert werden.

## Verwendung von Streaming-Protokollen

Der Prozess der Verwendung der verschiedenen Protokolle ist beruhigend vertraut, wenn Sie es gewohnt sind, mit Medien über HTTP zu arbeiten.

Zum Beispiel:

```html
<video src="rtsp://myhost.com/mymedia.format">
  <!-- Fallback here -->
</video>
```

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript das Generieren von Medienstreams zur Wiedergabe zu ermöglichen. Dadurch, dass JavaScript das Generieren von Streams ermöglicht, werden verschiedene Anwendungsfälle wie adaptives Streaming und das zeitversetzte Abspielen von Livestreams unterstützt.

Zum Beispiel, [könnten Sie MPEG-DASH mit JavaScript implementieren und das Decoding an MSE auslagern](https://web.archive.org/web/20170504035455/https://msopentech.com/blog/2014/01/03/streaming_video_player/).

> [!NOTE]
> Zeitversetztes Fernsehen oder DVR bedeutet, dass ein Livestream zu einem späteren Zeitpunkt angesehen wird.

## Video-Streaming-Dateiformate

Einige HTTP-basierte Livestreaming-Videoformate beginnen, in Browsern unterstützt zu werden.

> [!NOTE]
> Sie finden einen Leitfaden zur Kodierung von HLS und MPEG-DASH für die Verwendung im Web unter [Einrichtung adaptiver Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources).

### MPEG-DASH

DASH steht für Dynamic Adaptive Streaming over HTTP. Es wird über Media Source Extensions unterstützt, die von JavaScript-Bibliotheken wie [DASH.js](https://github.com/Dash-Industry-Forum/dash.js/) verwendet werden. Dieser Ansatz ermöglicht es uns, Teile des Videostreams mit XHR herunterzuladen und die Teile an den Stream anzuhängen, der vom {{ htmlelement("video") }} Element abgespielt wird. So zum Beispiel, wenn wir feststellen, dass das Netzwerk langsam ist, können wir anfangen, niedrigere Qualitäts-Chunks (kleinere) anzufordern für das nächste Segment. Diese Technologie ermöglicht es auch, ein Werbesegment an den Stream anzuhängen/einzufügen.

> [!NOTE]
> Sie können auch [WebM mit dem MPEG DASH adaptierten Streaming-System verwenden](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification).

### HLS

HLS oder HTTP Live Streaming ist ein von Apple Inc. erfundenes Protokoll und wird auf iOS, Safari und den neuesten Versionen des Android-Browsers / Chrome unterstützt. HLS ist ebenfalls adaptiv.

HLS kann auch mit JavaScript dekodiert werden, was bedeutet, dass wir die neuesten Versionen von Firefox, Chrome und Safari unterstützen können. Sehen Sie diesen [HTTP Live Streaming JavaScript-Player](https://github.com/video-dev/hls.js).

Zu Beginn der Streaming-Sitzung wird eine [erweiterte M3U (m3u8) Playlist](https://en.wikipedia.org/wiki/M3U8#Extended_M3U_directives) heruntergeladen. Diese enthält die Metadaten für die verschiedenen bereitgestellten Sub-Streams.

## Audio-Streaming-Dateiformate

Es gibt auch verschiedene Audioformate:

### Opus

Opus ist ein lizenzfreies und offenes Format, das es schafft, Qualität bei verschiedenen Bitraten für verschiedene Arten von Audio zu optimieren. Musik und Sprache können auf unterschiedliche Weise optimiert werden und Opus verwendet die SILK- und CELT-Codecs, um dies zu erreichen.

Derzeit wird Opus von Firefox Desktop und mobil sowie den neuesten Versionen von Desktop Chrome und Opera unterstützt.

> **Hinweis:** [Opus ist ein obligatorisches Format](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-audio-05) für WebRTC-Browser-Implementierungen.

### MP3, AAC, Ogg Vorbis

Die meisten gängigen Audioformate können mit spezifischen serverseitigen Technologien gestreamt werden.

Hinweis: Es ist potenziell einfacher, Audio mit nicht-streaming Formaten zu streamen, weil es im Gegensatz zu Video keine Keyframes gibt.

## Serverseitige Streaming-Technologien

Um Live-Audio und -Video zu streamen, müssen Sie bestimmte Streaming-Software auf Ihrem Server ausführen oder Drittanbieter-Dienste nutzen.

### GStreamer

[GStreamer](https://gstreamer.freedesktop.org/) ist ein quelloffenes plattformübergreifendes Multimedia-Framework, das es ermöglicht, eine Vielzahl von Medien-Komponenten, einschließlich Streaming-Komponenten zu erstellen. Durch sein Plugin-System bietet GStreamer Unterstützung für mehr als hundert Codecs (einschließlich MPEG-1, MPEG-2, MPEG-4, H.261, H.263, H.264, RealVideo, MP3, WMV und FLV).

GStreamer-Plugins wie [souphttpclientsink](https://gstreamer.freedesktop.org/documentation/soup/souphttpclientsink.html?gi-language=c) und [shout2send](https://gstreamer.freedesktop.org/documentation/shout2/index.html?gi-language=c#shout2send-page) existieren um Medien über HTTP zu streamen oder Sie können sich auch mit dem Twisted-Framework von Python integrieren.

Für die RTMP-Übertragung können Sie das [Nginx RTMP-Modul](https://github.com/arut/nginx-rtmp-module) verwenden.

### SHOUTcast

[SHOUTcast](https://en.wikipedia.org/wiki/SHOUTcast) ist eine plattformübergreifende proprietäre Technologie zum Streaming von Medien. Entwickelt von Nullsoft, ermöglicht es die Übertragung von digitalen Audioinhalten im MP3- oder AAC-Format. Für den Webeinsatz werden SHOUTcast-Streams über HTTP übertragen.

> **Hinweis:** [SHOUTcast-URLs erfordern möglicherweise ein Semikolon, das an sie angehängt wird](https://stackoverflow.com/questions/2743279/how-could-i-play-a-shoutcast-icecast-stream-using-html5).

### Icecast

Der [Icecast](https://www.icecast.org/)-Server ist eine quelloffene Technologie für das Streaming von Medien. Er wird von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt und streamt Ogg Vorbis/Theora sowie MP3- und AAC-Format über das SHOUTcast-Protokoll.

> [!NOTE]
> SHOUTcast und Icecast gehören zu den etablierteren und populärsten Technologien, aber es gibt viele [weitere Streaming-Medien-Systeme verfügbar](https://en.wikipedia.org/wiki/List_of_streaming_media_systems#Servers).

### Streaming-Dienste

Obwohl Sie Software wie GStreamer, SHOUTcast und Icecast installieren können, werden Sie auch viele [Drittanbieter-Streaming-Dienste](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems) finden, die Ihnen einen Großteil der Arbeit abnehmen.

## Siehe auch

- [HTTP Live Streaming](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
- [HLS Browser Support](https://jwplayer.com/blog/http-live-streaming/)
- [HTTP Live Streaming JavaScript player](https://github.com/RReverser/mpegts)
- [The Basics of HTTP Live Streaming](https://larryjordan.com/articles/basics-of-http-live-streaming/)
- [DASH Adaptive Streaming for HTML 5 Video](/de/docs/Web/Media/Guides/DASH_Adaptive_Streaming_for_HTML_5_Video)
- [Dynamic Adaptive Streaming over HTTP (MPEG-DASH)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [MPEG-DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
- [DASH Reference Client](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html)
- [Dynamic Streaming over HTTP](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [The State of MPEG-DASH Deployment](https://www.streamingmediaglobal.com/Articles/Editorial/Featured-Articles/The-State-of-MPEG-DASH-Deployment-96144.aspx)
- [Look, no plugins: Live streaming to the browser using Media Source Extensions and MPEG-DASH](https://www.bbc.co.uk/rd/blog/2014-03-media-source-extensions)
- [Media Source Extensions (W3C)](https://w3c.github.io/media-source/)
- [Icecast](https://en.wikipedia.org/wiki/Icecast)
- [SHOUTcast](https://en.wikipedia.org/wiki/Shoutcast)
- [GStreamer](https://en.wikipedia.org/wiki/GStreamer)
- [Streaming GStreamer Pipelines Via HTTP](https://coaxion.net/blog/2013/10/streaming-gstreamer-pipelines-via-http/)
- [GStreamer and Raspberry Pi](https://nginx-rtmp.blogspot.com/2013/07/gstreamer-and-raspberry-pi.html)
- [Comparison of Streaming Media Systems](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)
- [Mozilla Hacks - Streaming Media on demand with Media Source Extensions](https://hacks.mozilla.org/2015/07/streaming-media-on-demand-with-media-source-extensions/)
