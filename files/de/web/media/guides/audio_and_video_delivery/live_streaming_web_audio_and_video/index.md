---
title: Livestreaming von Web-Audio und -Video
slug: Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

Livestreaming-Technologie wird oft verwendet, um Live-Events wie Sport, Konzerte und im Allgemeinen Live-TV- und Radioprogramme zu übertragen. Oft einfach als Streaming abgekürzt, bezeichnet Livestreaming den Prozess der Echtzeitübertragung von Medien an Computer und Geräte. Dies ist ein recht komplexes und noch junges Thema mit vielen Variablen, daher werden wir Ihnen in diesem Artikel eine Einführung geben und zeigen, wie Sie beginnen können.

Der wichtigste Aspekt beim Streamen von Medien zu einem Browser ist, dass wir statt einer festen Datei eine Datei übertragen, die in Echtzeit erstellt wird und keinen vorbestimmten Anfang oder Ende hat.

## Wichtige Unterschiede zwischen gestreamten und statischen Medien

In diesem Fall verwenden wir statische Medien, um Medien zu beschreiben, die durch eine Datei repräsentiert werden, sei es eine mp3- oder WebM-Datei. Diese Datei liegt auf einem Server und kann — wie die meisten anderen Dateien — an den Browser ausgeliefert werden. Dies wird oft als fortschreitender Download bezeichnet.

Im Gegensatz zu einer statischen Datei hat Livestreamed-Medien keine feste Start- und Endzeit, sondern es handelt sich um einen Datenstrom, den der Server an den Browser weiterleitet und der oft adaptiv ist (siehe unten). Normalerweise benötigen wir hierfür unterschiedliche Formate und spezielle Server-Software.

## Adaptives Streaming

Eine der Hauptprioritäten beim Livestreaming ist es, den Player mit dem Stream synchron zu halten: Adaptives Streaming ist eine Technik, um dies bei niedriger Bandbreite zu gewährleisten. Die Idee ist, dass die Datenübertragungsrate überwacht wird, und wenn es aussieht, als ob sie nicht ausreicht, wechseln wir zu einem Stream mit niedrigerer Bandbreite (und folglich niedrigerer Qualität). Um diese Fähigkeit zu haben, müssen wir Formate verwenden, die dies erleichtern. Livestreaming-Formate ermöglichen im Allgemeinen adaptives Streaming, indem sie Streams in eine Reihe kleiner Segmente unterteilen und diese Segmente in unterschiedlichen Qualitäten und Bitraten zur Verfügung stellen.

## Streaming von Audio und Video auf Abruf

Streaming-Technologie wird nicht ausschließlich für Live-Übertragungen genutzt. Sie kann auch anstelle der traditionellen Methode des fortschreitenden Downloads für Audio und Video auf Abruf verwendet werden:

Es gibt mehrere Vorteile:

- Die Latenz ist im Allgemeinen niedriger, sodass Medien schneller abgespielt werden
- Adaptives Streaming sorgt für bessere Erfahrungen auf einer Vielzahl von Geräten
- Medien werden genau zu dem Zeitpunkt heruntergeladen, was die Bandbreitennutzung effizienter macht

## Streaming-Protokolle

Während statische Medien normalerweise über HTTP bereitgestellt werden, gibt es mehrere Protokolle für die Bereitstellung von adaptiven Streams; werfen wir einen Blick auf die Optionen.

### HTTP

Derzeit ist HTTP mit Abstand das am häufigsten unterstützte Protokoll, das für die Übertragung von Medien auf Abruf oder live verwendet wird.

### RTMP

Das Real Time Messaging Protocol (RTMP) ist ein proprietäres Protokoll, das von Macromedia (heute Adobe) entwickelt wurde und vom Adobe Flash Plugin unterstützt wird. RTMP ist in verschiedenen Varianten verfügbar, darunter RTMPE (verschlüsselt), RTMPS (sicher über TLS/SSL) und RTMPT (in HTTP-Anfragen gekapselt).

### RTSP

> [!NOTE]
> Das Real Time Streaming Protocol (RTSP) steuert Mediensitzungen zwischen Endpunkten und wird häufig zusammen mit dem Real-time Transport Protocol (RTP) und dem Real-time Control Protocol (RTCP) für die Medienstromübertragung verwendet. Die Verwendung von RTP mit RTCP ermöglicht adaptives Streaming. Dies wird derzeit noch nicht nativ von den meisten Browsern unterstützt.
>
> Einige Anbieter implementieren proprietäre Transportprotokolle, wie RealNetworks mit ihrem Real Data Transport (RDT).

### RTSP 2.0

RTSP 2.0 befindet sich derzeit in der Entwicklung und ist nicht abwärtskompatibel mit RTSP 1.0.

> [!WARNING]
> Obwohl die {{ htmlelement("audio") }} und {{ htmlelement("video") }} Tags protokollagnostisch sind, unterstützt derzeit kein Browser etwas anderes als HTTP, ohne dass Plugins erforderlich sind, obwohl sich dies wahrscheinlich ändern wird. Protokolle, die nicht auf HTTP basieren, können auch durch Firewalls oder Proxy-Server blockiert werden.

## Verwendung von Streaming-Protokollen

Das Verfahren zur Nutzung der verschiedenen Protokolle ist beruhigend vertraut, wenn Sie mit Medien über HTTP gearbeitet haben.

Zum Beispiel:

```html
<video src="rtsp://myhost.com/mymedia.format">
  <!-- Fallback here -->
</video>
```

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Generierung von Medienströmen zur Wiedergabe zu ermöglichen. Die Erlaubnis, dass JavaScript Streams generiert, ermöglicht eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Zeitverschiebung von Live-Streams.

Zum Beispiel können Sie [MPEG-DASH mit JavaScript implementieren, während das Decodieren an MSE ausgelagert wird](https://web.archive.org/web/20170504035455/https://msopentech.com/blog/2014/01/03/streaming_video_player/).

> [!NOTE]
> Zeitverschiebung ist das Verfahren, einen Live-Stream zu einem späteren Zeitpunkt zu konsumieren, nachdem er stattgefunden hat.

## Video-Streaming-Dateiformate

Einige HTTP-basierte Livestreaming-Videoformate finden allmählich Unterstützung über die Browser hinweg.

> [!NOTE]
> Sie finden einen Leitfaden zum Kodieren von HLS und MPEG-DASH für den Einsatz im Web unter [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources).

### MPEG-DASH

DASH steht für Dynamic Adaptive Streaming over HTTP. Es wird über Media Source Extensions unterstützt, die von JavaScript-Bibliotheken wie [DASH.js](https://github.com/Dash-Industry-Forum/dash.js/) verwendet werden. Dieser Ansatz ermöglicht es uns, Teile des Videostreams mittels XHR herunterzuladen und die Teile dem Stream hinzuzufügen, der vom {{ htmlelement("video") }} Element abgespielt wird. Wenn wir zum Beispiel feststellen, dass das Netzwerk langsam ist, können wir beginnen, für das nächste Segment niedrigere Qualität (kleinere) Teile anzufordern. Diese Technologie ermöglicht es auch, ein Werbesegment in den Stream einzufügen.

> [!NOTE]
> Sie können auch [WebM mit dem MPEG DASH adaptiven Streaming-System verwenden](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification).

### HLS

HLS oder HTTP Live Streaming ist ein von Apple Inc erfundenes Protokoll, das auf iOS, Safari und den neuesten Versionen des Android-Browsers/Chrome unterstützt wird. HLS ist ebenfalls adaptiv.

HLS kann auch mit JavaScript dekodiert werden, was bedeutet, dass wir die neuesten Versionen von Firefox, Chrome und Safari unterstützen können. Sehen Sie diesen [HTTP Live Streaming JavaScript Player](https://github.com/video-dev/hls.js).

Zu Beginn der Streaming-Sitzung wird eine [erweiterte M3U (m3u8) Wiedergabeliste](https://en.wikipedia.org/wiki/M3U8#Extended_M3U_directives) heruntergeladen. Diese enthält die Metadaten für die verschiedenen bereitgestellten Sub-Streams.

## Audio-Streaming-Dateiformate

Es gibt auch mehrere Audioformate:

### Opus

Opus ist ein lizenzfreies und offenes Format, das die Qualität bei verschiedenen Bitraten für verschiedene Arten von Audio optimiert. Musik und Sprache können auf unterschiedliche Weise optimiert werden, und Opus verwendet die SILK- und CELT-Codecs, um dies zu erreichen.

Derzeit wird Opus von Firefox für Desktop und Mobilgeräte sowie den neuesten Versionen von Desktop-Chrome und Opera unterstützt.

> **Hinweis:** [Opus ist ein Pflichtformat](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-audio-05) für WebRTC-Browserimplementierungen.

### MP3, AAC, Ogg Vorbis

Die meisten gängigen Audioformate können mit bestimmten serverseitigen Technologien gestreamt werden.

Hinweis: Es könnte potenziell einfacher sein, Audio mit nicht-streaming-fähigen Formaten zu streamen, da es im Gegensatz zu Video keine Schlüsselbilder gibt.

## Serverseitige Streaming-Technologien

Um Live-Audio und -Video zu streamen, müssen Sie spezielle Streaming-Software auf Ihrem Server ausführen oder Drittanbieterdienste nutzen.

### GStreamer

[GStreamer](https://gstreamer.freedesktop.org/) ist ein plattformübergreifendes Open-Source-Multimedia-Framework, mit dem Sie eine Vielzahl von Medienverarbeitungskomponenten erstellen können, einschließlich Streaming-Komponenten. Durch sein Plugin-System bietet GStreamer Unterstützung für mehr als hundert Codecs (einschließlich MPEG-1, MPEG-2, MPEG-4, H.261, H.263, H.264, RealVideo, MP3, WMV und FLV).

GStreamer-Plugins wie [souphttpclientsink](https://gstreamer.freedesktop.org/documentation/soup/souphttpclientsink.html?gi-language=c) und [shout2send](https://gstreamer.freedesktop.org/documentation/shout2/index.html?gi-language=c#shout2send-page) existieren, um Medien über HTTP zu streamen, oder Sie können auch die Integration mit dem Twisted-Framework von Python nutzen.

Für den RTMP-Transfer können Sie das [Nginx RTMP Module](https://github.com/arut/nginx-rtmp-module) verwenden.

### SHOUTcast

[SHOUTcast](https://en.wikipedia.org/wiki/SHOUTcast) ist eine plattformübergreifende proprietäre Technologie zum Streamen von Medien. Entwickelt von Nullsoft, ermöglicht es die Ausstrahlung digitaler Audioinhalte im MP3- oder AAC-Format. Für die Web-Nutzung werden SHOUTcast-Streams über HTTP übertragen.

> **Hinweis:** [SHOUTcast URLs erfordern möglicherweise, dass ihnen ein Semikolon angehängt wird](https://stackoverflow.com/questions/2743279/how-could-i-play-a-shoutcast-icecast-stream-using-html5).

### Icecast

Der [Icecast](https://www.icecast.org/) Server ist eine Open-Source-Technologie zum Streaming von Medien. Er wird von der [Xiph.org Foundation](https://www.xiph.org/) verwaltet und streamt Ogg Vorbis/Theora sowie MP3 und AAC Format über das SHOUTcast-Protokoll.

> [!NOTE]
> SHOUTcast und Icecast gehören zu den etabliertesten und beliebtesten Technologien, aber es gibt viele [weitere Streaming-Medien-Systeme](https://en.wikipedia.org/wiki/List_of_streaming_media_systems#Servers).

### Streaming-Dienste

Obwohl Sie Software wie GStreamer, SHOUTcast und Icecast installieren können, werden Sie auch zahlreiche [Drittanbieter-Streaming-Dienste](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems) finden, die einen Großteil der Arbeit für Sie erledigen.

## Siehe auch

- [HTTP Live Streaming](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
- [HLS Browser-Unterstützung](https://caniuse.com/?search=hls)
- [HTTP Live Streaming JavaScript Player](https://github.com/RReverser/mpegts)
- [Die Grundlagen des HTTP Live Streamings](https://larryjordan.com/articles/basics-of-http-live-streaming/)
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
- [Dynamic Adaptive Streaming über HTTP (MPEG-DASH)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [MPEG-DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
- [DASH Reference Client](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html)
- [Dynamic Streaming über HTTP](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [Der Stand der MPEG-DASH-Bereitstellung](https://www.streamingmediaglobal.com/Articles/Editorial/Featured-Articles/The-State-of-MPEG-DASH-Deployment-96144.aspx)
- [Live-Streaming im Browser ohne Plugins mit Media Source Extensions und MPEG-DASH]https://www.bbc.co.uk/rd/blog/2014-03-media-source-extensions)
- [Media Source Extensions (W3C)](https://w3c.github.io/media-source/)
- [Icecast](https://en.wikipedia.org/wiki/Icecast)
- [SHOUTcast](https://en.wikipedia.org/wiki/Shoutcast)
- [GStreamer](https://en.wikipedia.org/wiki/GStreamer)
- [Streaming von GStreamer-Pipelines über HTTP](https://coaxion.net/blog/2013/10/streaming-gstreamer-pipelines-via-http/)
- [GStreamer und Raspberry Pi](https://nginx-rtmp.blogspot.com/2013/07/gstreamer-and-raspberry-pi.html)
- [Vergleich von Streaming-Media-Systemen](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)
- [Mozilla Hacks - Streaming Media auf Abruf mit Media Source Extensions](https://hacks.mozilla.org/2015/07/streaming-media-on-demand-with-media-source-extensions/)
