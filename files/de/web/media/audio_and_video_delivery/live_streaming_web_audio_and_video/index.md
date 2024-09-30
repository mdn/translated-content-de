---
title: Livestreaming von Web-Audio und -Video
slug: Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Livestreaming-Technologie wird oft eingesetzt, um Live-Ereignisse wie Sportveranstaltungen, Konzerte und allgemein Live-Ausgaben von TV- und Radioprogrammen zu übertragen. Häufig einfach als Streaming bezeichnet, ist Livestreaming der Prozess der Übertragung von Medien "live" an Computer und Geräte. Dies ist ein recht komplexes und aufstrebendes Thema mit vielen Variablen, daher werden wir Sie in diesem Artikel in das Thema einführen und Ihnen zeigen, wie Sie beginnen können.

Der wichtigste Aspekt beim Streaming von Medien in einen Browser ist die Tatsache, dass wir anstelle eines festen Files ein File übertragen, das gerade in Echtzeit erstellt wird und keinen vorbestimmten Anfang oder Ende hat.

## Wichtige Unterschiede zwischen gestreamten und statischen Medien

In diesem Fall verwenden wir statische Medien, um Medien zu beschreiben, die durch eine Datei repräsentiert werden, sei es eine mp3- oder WebM-Datei. Diese Datei liegt auf einem Server und kann — wie die meisten anderen Dateien — an den Browser ausgeliefert werden. Dies ist oft als progressiver Download bekannt.

Gestreamte Medien haben im Gegensatz zu einer statischen Datei keine feste Start- und Endzeit, es handelt sich um einen Datenstrom, den der Server an den Browser weiterleitet und der oft adaptiv ist (siehe unten). In der Regel benötigen wir hierfür unterschiedliche Formate und spezielle serverseitige Software.

## Adaptives Streaming

Eines der Hauptziele beim Livestreaming ist es, den Player mit dem Stream synchronisiert zu halten: Adaptives Streaming ist eine Technik, um dies bei niedriger Bandbreite zu erreichen. Die Idee ist, dass die Datenübertragungsrate überwacht wird und falls sie nicht ausreicht, wird auf einen Stream mit niedrigerer Bandbreite (und folglich geringerer Qualität) umgestellt. Um diese Fähigkeit zu haben, müssen wir Formate verwenden, die dies erleichtern. Livestreaming-Formate ermöglichen allgemein adaptives Streaming, indem sie Streams in eine Reihe kleiner Segmente aufteilen und diese Segmente in unterschiedlichen Qualitäten und Bitraten zur Verfügung stellen.

## Streaming-Audio und -Video auf abruf

Streaming-Technologie wird nicht ausschließlich für Live-Streams verwendet. Sie kann auch anstelle der traditionellen Methode des progressiven Downloads für Audio und Video auf Abruf verwendet werden:

Es gibt mehrere Vorteile davon:

- Die Latenz ist in der Regel geringer, sodass Medien schneller abgespielt werden
- Adaptives Streaming sorgt für bessere Erlebnisse auf einer Vielzahl von Geräten
- Medien werden just-in-time heruntergeladen, was die Bandbreitennutzung effizienter macht

## Streaming-Protokolle

Während statische Medien normalerweise über HTTP bereitgestellt werden, gibt es mehrere Protokolle für die Bereitstellung adaptiver Streams; werfen wir einen Blick auf die Optionen.

### HTTP

Derzeit ist HTTP mit Abstand das am häufigsten unterstützte Protokoll zur Übertragung von Medien auf Abruf oder live.

### RTMP

Real Time Messaging Protocol (RTMP) ist ein proprietäres Protokoll, das von Macromedia (jetzt Adobe) entwickelt wurde und vom Adobe Flash Plugin unterstützt wird. RTMP gibt es in verschiedenen Varianten, darunter RTMPE (verschlüsselt), RTMPS (sicher über TLS/SSL) und RTMPT (in HTTP-Anfragen eingebettet).

### RTSP

> [!NOTE]
> Real Time Streaming Protocol (RTSP) steuert Mediensitzungen zwischen Endpunkten und wird oft zusammen mit dem Real-time Transport Protocol (RTP) und dem Real-time Control Protocol (RTCP) für die Auslieferung von Medienströmen verwendet. Die Verwendung von RTP mit RTCP ermöglicht adaptives Streaming. Dies wird in den meisten Browsern jedoch noch nicht nativ unterstützt.
>
> Einige Anbieter implementieren proprietäre Transportprotokolle, wie RealNetworks und deren Real Data Transport (RDT).

### RTSP 2.0

RTSP 2.0 befindet sich derzeit in Entwicklung und ist nicht abwärtskompatibel mit RTSP 1.0.

> [!WARNING]
> Auch wenn die {{ htmlelement("audio") }}- und {{ htmlelement("video") }}-Tags protokollunabhängig sind, unterstützt derzeit kein Browser etwas anderes als HTTP ohne Plugins, obwohl sich dies wahrscheinlich ändern wird. Protokolle, die nicht HTTP sind, können auch von Firewalls oder Proxy-Servern blockiert werden.

## Verwendung von Streaming-Protokollen

Der Einsatz der verschiedenen Protokolle ist beruhigend vertraut, wenn Sie bereits mit Medien über HTTP gearbeitet haben.

Zum Beispiel:

```html
<video src="rtsp://myhost.com/mymedia.format">
  <!-- Fallback here -->
</video>
```

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Erstellung von Medienströmen zur Wiedergabe zu ermöglichen. Die Erlaubnis für JavaScript, Streams zu erzeugen, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und zeitversetztes Livestreaming.

Zum Beispiel, [könnten Sie MPEG-DASH mit JavaScript implementieren und das Dekodieren auf MSE auslagern](https://web.archive.org/web/20170504035455/https://msopentech.com/blog/2014/01/03/streaming_video_player/).

> [!NOTE]
> Time Shifting ist der Prozess des Konsumierens eines Livestreams zu einem späteren Zeitpunkt.

## Video-Streaming-Dateiformate

Einige auf HTTP basierende Livestreaming-Videoformate beginnen, Unterstützung in Browsern zu finden.

> [!NOTE]
> Sie finden eine Anleitung zur Codierung von HLS und MPEG-DASH für den Einsatz im Web unter [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources).

### MPEG-DASH

DASH steht für Dynamic Adaptive Streaming over HTTP. Es wird über Media Source Extensions unterstützt, die von JavaScript-Bibliotheken wie [DASH.js](https://github.com/Dash-Industry-Forum/dash.js/) verwendet werden. Dieser Ansatz erlaubt es uns, Videostreams in Stücken mit XHR herunterzuladen und die Stücke an den Stream anzuhängen, der vom {{ htmlelement("video") }}-Element wiedergegeben wird. Wenn also beispielsweise festgestellt wird, dass das Netzwerk langsam ist, können wir beginnen, kleinere (niedrigere Qualität) Stücke für das nächste Segment anzufordern. Diese Technologie erlaubt es uns auch, einen Werbeblock in den Stream einzufügen.

> [!NOTE]
> Sie können auch [WebM mit dem MPEG DASH adaptiven Streaming-System verwenden](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification).

### HLS

HLS oder HTTP Live Streaming ist ein von Apple Inc. entwickeltes Protokoll und wird auf iOS, Safari und den neuesten Versionen des Android-Browsers / Chrome unterstützt. HLS ist ebenfalls adaptiv.

HLS kann auch mit JavaScript dekodiert werden, was bedeutet, dass wir die neuesten Versionen von Firefox, Chrome und Safari unterstützen können. Sehen Sie sich diesen [HTTP Live Streaming JavaScript-Player](https://github.com/video-dev/hls.js) an.

Zu Beginn der Streaming-Sitzung wird eine [erweiterte M3U (m3u8) Playlist](https://en.wikipedia.org/wiki/M3U8#Extended_M3U_directives) heruntergeladen. Diese enthält die Metadaten für die verschiedenen bereitgestellten Sub-Streams.

## Audio-Streaming-Dateiformate

Es gibt auch mehrere Audioformate:

### Opus

Opus ist ein lizenzfreies und offenes Format, das es ermöglicht, die Qualität bei verschiedenen Bitraten für verschiedene Arten von Audio zu optimieren. Musik und Sprache können auf unterschiedliche Weise optimiert werden und Opus verwendet die SILK- und CELT-Codecs, um dies zu erreichen.

Derzeit wird Opus von Firefox Desktop und Mobile sowie den neuesten Versionen von Chrome Desktop und Opera unterstützt.

> **Hinweis:** [Opus ist ein obligatorisches Format](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-audio-05) für WebRTC-Browserimplementierungen.

### MP3, AAC, Ogg Vorbis

Die meisten gängigen Audioformate können mit speziellen serverseitigen Techniken gestreamt werden.

Hinweis: Es ist potenziell einfacher, Audio mit nicht-streaming-Formaten zu streamen, da im Gegensatz zum Video keine Keyframes erforderlich sind.

## Serverseitige Streaming-Technologien

Um Live-Audio und -Video zu streamen, müssen Sie spezielle Streaming-Software auf Ihrem Server ausführen oder Drittanbieterdienste nutzen.

### GStreamer

[GStreamer](https://gstreamer.freedesktop.org/) ist ein Open-Source- und plattformübergreifendes Multimedia-Framework, das es ermöglicht, eine Vielzahl von Medienkomponenten, einschließlich Streaming-Komponenten, zu erstellen. Durch sein Plugin-System bietet GStreamer Unterstützung für mehr als hundert Codecs (einschließlich MPEG-1, MPEG-2, MPEG-4, H.261, H.263, H.264, RealVideo, MP3, WMV und FLV).

GStreamer-Plugins wie [souphttpclientsink](https://gstreamer.freedesktop.org/documentation/soup/souphttpclientsink.html?gi-language=c) und [shout2send](https://gstreamer.freedesktop.org/documentation/shout2/index.html?gi-language=c#shout2send-page) existieren, um Medien über HTTP zu streamen, oder Sie können auch die Integration mit Pythons Twisted-Framework nutzen.

Für die RTMP-Übertragung können Sie das [Nginx RTMP Module](https://github.com/arut/nginx-rtmp-module) verwenden.

### SHOUTcast

[SHOUTcast](https://en.wikipedia.org/wiki/SHOUTcast) ist eine plattformübergreifende proprietäre Technologie zum Streamen von Medien. Entwickelt von Nullsoft, ermöglicht es die Übertragung digitaler Audioinhalte im MP3- oder AAC-Format. Für den Webeinsatz werden SHOUTcast-Streams über HTTP übertragen.

> **Hinweis:** [SHOUTcast-URLs benötigen möglicherweise ein Semikolon, das angehängt werden muss](https://stackoverflow.com/questions/2743279/how-could-i-play-a-shoutcast-icecast-stream-using-html5).

### Icecast

Der [Icecast](https://www.icecast.org/)-Server ist eine Open-Source-Technologie zum Streamen von Medien. Er wird von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt und streamt Ogg Vorbis/Theora sowie MP3- und AAC-Format über das SHOUTcast-Protokoll.

> [!NOTE]
> SHOUTcast und Icecast gehören zu den am besten etablierten und beliebtesten Technologien, aber es gibt viele [weitere Streaming-Mediasysteme](https://en.wikipedia.org/wiki/List_of_streaming_media_systems#Servers).

### Streaming Dienste

Obwohl Sie Software wie GStreamer, SHOUTcast und Icecast installieren können, finden Sie auch viele [Drittanbieter-Streaming-Dienste](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems), die Ihnen viel Arbeit abnehmen.

## Siehe auch

- [HTTP Live Streaming](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
- [HLS Browserunterstützung](https://jwplayer.com/blog/http-live-streaming/)
- [HTTP Live Streaming JavaScript-Player](https://github.com/RReverser/mpegts)
- [Die Grundlagen des HTTP Live Streaming](https://larryjordan.com/articles/basics-of-http-live-streaming/)
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
- [Dynamic Adaptive Streaming over HTTP (MPEG-DASH)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [MPEG-DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
- [DASH-Referenz-Client](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html)
- [Dynamisches Streaming über HTTP](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [Der Stand der MPEG-DASH-Bereitstellung](https://www.streamingmediaglobal.com/Articles/Editorial/Featured-Articles/The-State-of-MPEG-DASH-Deployment-96144.aspx)
- [Schau, keine Plugins: Livestreaming für den Browser mit Media Source Extensions und MPEG-DASH](https://www.bbc.co.uk/rd/blog/2014-03-media-source-extensions)
- [Media Source Extensions (W3C)](https://w3c.github.io/media-source/)
- [Icecast](https://en.wikipedia.org/wiki/Icecast)
- [SHOUTcast](https://en.wikipedia.org/wiki/Shoutcast)
- [GStreamer](https://en.wikipedia.org/wiki/GStreamer)
- [Streaming von GStreamer-Pipelines über HTTP](https://coaxion.net/blog/2013/10/streaming-gstreamer-pipelines-via-http/)
- [GStreamer und Raspberry Pi](https://nginx-rtmp.blogspot.com/2013/07/gstreamer-and-raspberry-pi.html)
- [Vergleich von Streaming-Mediasystemen](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)
- [Mozilla Hacks - Medien-Streaming auf Abruf mit Media Source Extensions](https://hacks.mozilla.org/2015/07/streaming-media-on-demand-with-media-source-extensions/)
