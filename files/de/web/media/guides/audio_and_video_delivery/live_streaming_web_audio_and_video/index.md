---
title: Livestreaming von Web Audio und Video
slug: Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Livestreaming-Technologie wird häufig verwendet, um Live-Ereignisse wie Sportveranstaltungen, Konzerte und im Allgemeinen TV- und Radioprogramme, die live ausgestrahlt werden, zu übertragen. Oft einfach als Streaming bezeichnet, ist das Livestreaming der Prozess der Übertragung von Medien "live" zu Computern und Geräten. Dies ist ein recht komplexes und aufstrebendes Thema mit vielen Variablen, daher werden wir Ihnen in diesem Artikel eine Einführung in das Thema geben und Ihnen zeigen, wie Sie anfangen können.

Der entscheidende Punkt beim Streaming von Medien zu einem Browser ist die Tatsache, dass wir anstatt eine feste Datei abzuspielen, eine Datei übertragen, die im Moment erstellt wird und keinen vorbestimmten Anfang oder Ende hat.

## Wichtige Unterschiede zwischen gestreamten und statischen Medien

In diesem Fall verwenden wir statische Medien, um Medien zu beschreiben, die durch eine Datei repräsentiert werden, sei es eine mp3- oder WebM-Datei. Diese Datei liegt auf einem Server und kann — wie die meisten anderen Dateien — an den Browser geliefert werden. Dies wird oft als progressiver Download bezeichnet.

Livestreamed-Medien haben kein festes Start- und Endzeit, im Gegensatz zu einer statischen Datei; sie sind ein Datenstrom, den der Server an den Browser weiterleitet und oft adaptiv ist (siehe unten). Normalerweise benötigen wir dafür unterschiedliche Formate und spezielle serverseitige Software.

## Adaptives Streaming

Eine der Hauptprioritäten beim Livestreaming ist es, den Player mit dem Stream synchron zu halten: Adaptives Streaming ist eine Technik, um dies bei geringer Bandbreite zu erreichen. Die Idee ist, dass die Datenübertragungsrate überwacht wird und wenn es scheint, dass sie nicht mithält, wechseln wir zu einem Stream mit niedrigerer Bandbreite (und folglich geringerer Qualität). Um diese Fähigkeit zu haben, müssen wir Formate verwenden, die dies erleichtern. Livestreaming-Formate ermöglichen im Allgemeinen adaptives Streaming, indem sie Streams in eine Reihe von kleinen Segmenten aufteilen und diese Segmente in unterschiedlichen Qualitäten und Bitraten verfügbar machen.

## Streaming von Audio und Video auf Abruf

Streaming-Technologie wird nicht ausschließlich für Livestreams verwendet. Sie kann auch anstelle der traditionellen progressiven Download-Methode für Audio und Video auf Abruf verwendet werden:

Es gibt mehrere Vorteile:

- Die Latenz ist in der Regel geringer, sodass Medien schneller abgespielt werden können
- Adaptives Streaming sorgt für bessere Erlebnisse auf einer Vielzahl von Geräten
- Medien werden gerade rechtzeitig heruntergeladen, was die Bandbreitennutzung effizienter macht

## Streaming-Protokolle

Während statische Medien normalerweise über HTTP bereitgestellt werden, gibt es mehrere Protokolle für die Bereitstellung adaptiver Streams; schauen wir uns die Optionen an.

### HTTP

Derzeit ist HTTP mit Abstand das am weitesten unterstützte Protokoll, das verwendet wird, um Medien auf Abruf oder live zu übertragen.

### RTMP

Real Time Messaging Protocol (RTMP) ist ein proprietäres Protokoll, das von Macromedia (jetzt Adobe) entwickelt wurde und vom Adobe Flash-Plugin unterstützt wird. RTMP gibt es in verschiedenen Varianten, darunter RTMPE (verschlüsselt), RTMPS (sicher über TLS/SSL) und RTMPT (in HTTP-Anfragen verkapselt).

### RTSP

> [!NOTE]
> Real Time Streaming Protocol (RTSP) steuert Mediensitzungen zwischen Endpunkten und wird oft zusammen mit Real-time Transport Protocol (RTP) und Real-time Control Protocol (RTCP) für die Medienstromlieferung verwendet. Die Verwendung von RTP mit RTCP ermöglicht adaptives Streaming. Dies wird noch nicht nativ in den meisten Browsern unterstützt.
>
> Einige Anbieter implementieren proprietäre Transportprotokolle, wie RealNetworks und deren Real Data Transport (RDT).

### RTSP 2.0

RTSP 2.0 befindet sich derzeit in der Entwicklung und ist nicht rückwärtskompatibel zu RTSP 1.0.

> [!WARNING]
> Obwohl die {{ htmlelement("audio") }} und {{ htmlelement("video") }} Tags protokollunabhängig sind, unterstützt derzeit kein Browser etwas anderes als HTTP, ohne dass Plugins erforderlich sind, obwohl sich dies zu ändern scheint. Protokolle außer HTTP könnten auch durch Firewalls oder Proxy-Server blockiert werden.

## Verwendung von Streaming-Protokollen

Der Prozess der Verwendung der verschiedenen Protokolle ist beruhigend vertraut, wenn Sie daran gewöhnt sind, mit Medien über HTTP zu arbeiten.

Zum Beispiel:

```html
<video src="rtsp://myhost.com/mymedia.format">
  <!-- Fallback here -->
</video>
```

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript zu ermöglichen, Medienströme für die Wiedergabe zu erzeugen. JavaScript das Erzeugen von Streams zu ermöglichen, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und zeitversetztes Livestreaming.

Zum Beispiel, [Sie könnten MPEG-DASH mit JavaScript implementieren, während die Dekodierung an MSE ausgelagert wird](https://web.archive.org/web/20170504035455/https://msopentech.com/blog/2014/01/03/streaming_video_player/).

> [!NOTE]
> Time Shifting ist der Prozess, einen Livestream zu einem späteren Zeitpunkt zu konsumieren.

## Video-Streaming-Dateiformate

Einige HTTP-basierte Livestreaming-Videoformate beginnen, in Browsern unterstützt zu werden.

> [!NOTE]
> Sie finden einen Leitfaden zum Kodieren von HLS und MPEG-DASH für die Webnutzung bei [Einrichten adaptiver Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources).

### MPEG-DASH

DASH steht für Dynamic Adaptive Streaming over HTTP. Es wird über Media Source Extensions unterstützt, die von JavaScript-Bibliotheken wie [DASH.js](https://github.com/Dash-Industry-Forum/dash.js/) verwendet werden. Dieser Ansatz ermöglicht es uns, Stücke des Videostreams mittels XHR herunterzuladen und die "append" Stücke an den Stream anzufügen, der vom {{ htmlelement("video") }} Element abgespielt wird. So können wir beispielsweise bei langsamer Netzwerkverbindung beginnen, niedrigere Qualitätsstücke (kleinere) für das nächste Segment anzufordern. Diese Technologie ermöglicht es auch, einen Werbebeitrag an den Stream anzufügen/einzufügen.

> [!NOTE]
> Sie können auch [WebM mit dem MPEG DASH adaptiven Streaming-System verwenden](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification).

### HLS

HLS oder HTTP Live Streaming ist ein von Apple Inc. erfundenes Protokoll und auf iOS, Safari und den neuesten Versionen des Android-Browsers/Chrome unterstützt. HLS ist ebenfalls adaptiv.

HLS kann auch mit JavaScript decodiert werden, was bedeutet, dass wir die neuesten Versionen von Firefox, Chrome und Safari unterstützen können. Siehe diesen [HTTP Live Streaming JavaScript Player](https://github.com/video-dev/hls.js).

Zu Beginn der Streaming-Sitzung wird eine [erweiterte M3U (m3u8) Playlist](https://en.wikipedia.org/wiki/M3U8#Extended_M3U_directives) heruntergeladen. Diese enthält die Metadaten für die verschiedenen bereitgestellten Substreams.

## Audio-Streaming-Dateiformate

Es gibt auch einige Audioformate:

### Opus

Opus ist ein lizenzfreies und offenes Format, das die Qualität bei verschiedenen Bitraten für unterschiedliche Arten von Audio optimiert. Musik und Sprache können auf unterschiedliche Weise optimiert werden, und Opus verwendet die SILK- und CELT-Codecs, um dies zu erreichen.

Derzeit wird Opus von Firefox auf Desktop und Mobilgeräten sowie den neuesten Versionen von Desktop Chrome und Opera unterstützt.

> [!NOTE] > [Opus ist ein obligatorisches Format](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-audio-05) für WebRTC-Browserimplementierungen.

### MP3, AAC, Ogg Vorbis

Die meisten gängigen Audioformate können mit bestimmten serverseitigen Technologien gestreamt werden.

Hinweis: Es ist potenziell einfacher, Audio mit nicht-streamenden Formaten zu streamen, da es im Gegensatz zu Video keine Schlüsselbilder gibt.

## Serverseitige Streaming-Technologien

Um Live-Audio und -Video zu streamen, müssen Sie spezielle Streaming-Software auf Ihrem Server ausführen oder Drittanbieterdienste verwenden.

### GStreamer

[GStreamer](https://gstreamer.freedesktop.org/) ist ein plattformübergreifendes, quelloffenes Multimedia-Framework, das Ihnen ermöglicht, eine Vielzahl von Medienkomponenten einschließlich Streaming-Komponenten zu erstellen. Durch sein Plug-in-System bietet GStreamer Unterstützung für mehr als hundert Codecs (einschließlich MPEG-1, MPEG-2, MPEG-4, H.261, H.263, H.264, RealVideo, MP3, WMV und FLV).

GStreamer-Plugins wie [souphttpclientsink](https://gstreamer.freedesktop.org/documentation/soup/souphttpclientsink.html?gi-language=c) und [shout2send](https://gstreamer.freedesktop.org/documentation/shout2/index.html?gi-language=c#shout2send-page) existieren, um Medien über HTTP zu streamen, oder Sie können auch mit dem Twisted-Framework von Python integrieren.

Für die RTMP-Übertragung können Sie das [Nginx RTMP Modul](https://github.com/arut/nginx-rtmp-module) verwenden.

### SHOUTcast

[SHOUTcast](https://en.wikipedia.org/wiki/SHOUTcast) ist eine plattformübergreifende proprietäre Technologie zum Streamen von Medien. Entwickelt von Nullsoft, ermöglicht es die Übertragung digitaler Audioinhalte im MP3- oder AAC-Format. Für die Webnutzung werden SHOUTcast-Streams über HTTP übertragen.

> [!NOTE] > [SHOUTcast-URLs müssen möglicherweise mit einem Semikolon versehen werden](https://stackoverflow.com/questions/2743279/how-could-i-play-a-shoutcast-icecast-stream-using-html5).

### Icecast

Der [Icecast](https://www.icecast.org/) Server ist eine offene Quelle Technologie zum Streamen von Medien. Er wird von der [Xiph.org Foundation](https://www.xiph.org/) verwaltet und streamt Ogg Vorbis/Theora sowie das MP3- und AAC-Format über das SHOUTcast-Protokoll.

> [!NOTE]
> SHOUTcast und Icecast gehören zu den etabliertesten und populärsten Technologielösungen, aber es gibt viele [weitere Streaming-Medien-Systeme verfügbar](https://en.wikipedia.org/wiki/List_of_streaming_media_systems#Servers).

### Streaming-Dienste

Obwohl Sie Software wie GStreamer, SHOUTcast und Icecast installieren können, finden Sie auch viele [Drittanbieter-Streaming-Dienste](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems), die viel der Arbeit für Sie erledigen.

## Siehe auch

- [HTTP Live Streaming](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
- [HLS Browser-Unterstützung](https://caniuse.com/?search=hls)
- [HTTP Live Streaming JavaScript Player](https://github.com/RReverser/mpegts)
- [Die Grundlagen des HTTP Live Streaming](https://larryjordan.com/articles/basics-of-http-live-streaming/)
- [DASH Adaptives Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
- [Dynamic Adaptive Streaming over HTTP (MPEG-DASH)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [MPEG-DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
- [DASH Reference Client](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html)
- [Dynamisches Streaming über HTTP](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [Der Stand der MPEG-DASH Einführung](https://www.streamingmediaglobal.com/Articles/Editorial/Featured-Articles/The-State-of-MPEG-DASH-Deployment-96144.aspx)
- [Schau, keine Plugins: Livestreaming zum Browser mit Media Source Extensions und MPEG-DASH](https://www.bbc.co.uk/rd/blog/2014-03-media-source-extensions)
- [Media Source Extensions (W3C)](https://w3c.github.io/media-source/)
- [Icecast](https://en.wikipedia.org/wiki/Icecast)
- [SHOUTcast](https://en.wikipedia.org/wiki/Shoutcast)
- [GStreamer](https://en.wikipedia.org/wiki/GStreamer)
- [Streaming GStreamer Pipelines Über HTTP](https://coaxion.net/blog/2013/10/streaming-gstreamer-pipelines-via-http/)
- [GStreamer und Raspberry Pi](https://nginx-rtmp.blogspot.com/2013/07/gstreamer-and-raspberry-pi.html)
- [Vergleich von Streaming-Medien-Systemen](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)
- [Mozilla Hacks - Streaming Media auf Nachfrage mit Media Source Extensions](https://hacks.mozilla.org/2015/07/streaming-media-on-demand-with-media-source-extensions/)
