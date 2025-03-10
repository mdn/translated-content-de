---
title: Livestreaming von Web-Audio und -Video
slug: Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video
l10n:
  sourceCommit: 226c823808b3ee9f2e48fd019ca92a7b51fc474f
---

Livestreaming-Technologie wird häufig eingesetzt, um Live-Events wie Sportveranstaltungen, Konzerte und allgemein TV- und Radioprogramme, die live übertragen werden, zu übermitteln. Oft einfach zu Streaming verkürzt, ist Livestreaming der Prozess der Übertragung von Medien „live“ an Computer und Geräte. Dies ist ein ziemlich komplexes und neuartiges Thema mit vielen Variablen, daher werden wir Ihnen in diesem Artikel das Thema vorstellen und Sie wissen lassen, wie Sie starten können.

Die wichtigste Überlegung beim Streaming von Medien zu einem Browser ist die Tatsache, dass wir anstelle der Wiedergabe einer endlichen Datei eine Datei übertragen, die spontan erstellt wird und keinen vorbestimmten Anfang oder Ende hat.

## Wichtige Unterschiede zwischen gestreamten und statischen Medien

In diesem Fall verwenden wir statische Medien, um Medien zu beschreiben, die durch eine Datei dargestellt werden, sei es eine mp3- oder WebM-Datei. Diese Datei liegt auf einem Server und kann – wie die meisten anderen Dateien – an den Browser geliefert werden. Dies wird oft als progressiver Download bezeichnet.

Livestreamed Medien haben keinen festen Anfangs- und Endzeitpunkt im Gegensatz zu einer statischen Datei, es ist ein Datenstrom, den der Server an den Browser weiterleitet und ist oft adaptiv (siehe unten). Normalerweise benötigen wir unterschiedliche Formate und spezielle serverseitige Software, um dies zu erreichen.

## Adaptives Streaming

Eine der Hauptprioritäten beim Livestreaming ist es, den Player mit dem Stream synchronisiert zu halten: Adaptives Streaming ist eine Technik, um dies im Falle von geringer Bandbreite zu tun. Die Idee ist, dass die Datentransferrate überwacht wird, und wenn es scheint, dass sie nicht Schritt hält, wechseln wir zu einem Stream mit niedrigerer Bandbreite (und folglich geringerer Qualität). Um diese Fähigkeit zu haben, müssen wir Formate verwenden, die dies ermöglichen. Livestreaming-Formate erlauben im Allgemeinen adaptives Streaming, indem sie Streams in eine Reihe von kleinen Segmenten aufteilen und diese Segmente in unterschiedlichen Qualitäten und Bitraten verfügbar machen.

## Streaming von Audio und Video auf Abruf

Streaming-Technologie wird nicht ausschließlich für Livestreams verwendet. Sie kann auch anstelle der traditionellen Methode des progressiven Downloads für Audio und Video auf Abruf verwendet werden:

Es gibt mehrere Vorteile:

- Die Latenz ist im Allgemeinen geringer, sodass Medien schneller abgespielt werden
- Adaptives Streaming sorgt für bessere Erlebnisse auf einer Vielzahl von Geräten
- Medien werden genau zur richtigen Zeit heruntergeladen, was den Bandbreitenverbrauch effizienter macht

## Streaming-Protokolle

Während statische Medien normalerweise über HTTP bereitgestellt werden, gibt es mehrere Protokolle für die Bereitstellung adaptiver Streams; lassen Sie uns einen Blick auf die Optionen werfen.

### HTTP

Derzeit ist HTTP mit Abstand das am weitesten unterstützte Protokoll, das für die Übertragung von Medien auf Abruf oder live verwendet wird.

### RTMP

Real Time Messaging Protocol (RTMP) ist ein proprietäres Protokoll, das von Macromedia (jetzt Adobe) entwickelt wurde und vom Adobe Flash-Plugin unterstützt wird. RTMP gibt es in verschiedenen Varianten, einschließlich RTMPE (verschlüsselt), RTMPS (sicher über TLS/SSL) und RTMPT (in HTTP-Anforderungen eingekapselt).

### RTSP

> [!NOTE]
> Real Time Streaming Protocol (RTSP) steuert Mediensesseions zwischen Endpunkten und wird oft zusammen mit Real-time Transport Protocol (RTP) und mit Real-time Control Protocol (RTCP) für die Medienstream-Lieferung verwendet. Die Verwendung von RTP mit RTCP ermöglicht adaptives Streaming. Dies wird in den meisten Browsern noch nicht nativ unterstützt.
>
> Einige Anbieter implementieren proprietäre Transportprotokolle, wie RealNetworks und ihr Real Data Transport (RDT).

### RTSP 2.0

RTSP 2.0 befindet sich derzeit in der Entwicklung und ist nicht abwärtskompatibel mit RTSP 1.0.

> [!WARNING]
> Obwohl die {{ htmlelement("audio") }} und {{ htmlelement("video") }} Tags protokollagnostisch sind, unterstützt derzeit kein Browser etwas anderes als HTTP, ohne Plugins zu erfordern, obwohl dies voraussichtlich geändert wird. Andere Protokolle als HTTP können auch einer Blockierung durch Firewalls oder Proxy-Server unterliegen.

## Verwendung von Streaming-Protokollen

Der Prozess der Verwendung der verschiedenen Protokolle ist beruhigend vertraut, wenn Sie es gewohnt sind, mit Medien über HTTP zu arbeiten.

Zum Beispiel:

```html
<video src="rtsp://myhost.com/mymedia.format">
  <!-- Fallback here -->
</video>
```

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript zu ermöglichen, Medienstreams für die Wiedergabe zu generieren. Die Möglichkeit, JavaScript zu nutzen, um Streams zu generieren, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Timeshifting von Livestreams.

Zum Beispiel, [könnten Sie MPEG-DASH mit JavaScript implementieren, während Sie das Decoding an MSE auslagern](https://web.archive.org/web/20170504035455/https://msopentech.com/blog/2014/01/03/streaming_video_player/).

> [!NOTE]
> Timeshifting ist der Prozess des Konsumierens eines Livestreams zu einem späteren Zeitpunkt nach seiner Ausstrahlung.

## Videostreaming-Dateiformate

Einige auf HTTP-basierte Livestreaming-Videoformate beginnen in verschiedenen Browsern Unterstützung zu finden.

> [!NOTE]
> Sie finden einen Leitfaden zur Kodierung von HLS und MPEG-DASH für die Nutzung im Web unter [Einrichtung von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources).

### MPEG-DASH

DASH steht für Dynamic Adaptive Streaming over HTTP. Es wird über Media Source Extensions unterstützt, die von JavaScript-Bibliotheken wie [DASH.js](https://github.com/Dash-Industry-Forum/dash.js/) verwendet werden. Dieser Ansatz ermöglicht es uns, Teile des Videostreams mit XHR herunterzuladen und diese Teile dem Stream hinzuzufügen, der vom {{ htmlelement("video") }} Element wiedergegeben wird. So können wir zum Beispiel bei langsamer Netzwerkanbindung anfangen, die nächsten Segmente in niedrigerer Qualität (kleinere Stücke) anzufordern. Diese Technologie ermöglicht es auch, ein Werbesegment in den Stream einzufügen.

> [!NOTE]
> Sie können auch [WebM mit dem MPEG DASH adaptiven Streaming-System verwenden](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification).

### HLS

HLS oder HTTP Live Streaming ist ein Protokoll, das von Apple Inc. entwickelt wurde und auf iOS, Safari und den neuesten Versionen des Android-Browsers / Chrome unterstützt wird. HLS ist ebenfalls adaptiv.

HLS kann auch mit JavaScript dekodiert werden, was bedeutet, dass wir die neuesten Versionen von Firefox, Chrome und Safari unterstützen können. Sehen Sie sich diesen [HTTP Live Streaming JavaScript-Player](https://github.com/video-dev/hls.js) an.

Zu Beginn der Streaming-Session wird eine [erweiterte M3U (m3u8) Playlist](https://en.wikipedia.org/wiki/M3U8#Extended_M3U_directives) heruntergeladen. Diese enthält die Metadaten für die verschiedenen angebotenen Substreams.

## Audiostreaming-Dateiformate

Es gibt auch verschiedene Audioformate:

### Opus

Opus ist ein lizenzfreies und offenes Format, das die Qualität bei verschiedenen Bitraten für unterschiedliche Arten von Audio optimiert. Musik und Sprache können auf unterschiedliche Weise optimiert werden, und Opus verwendet die SILK und CELT Codecs, um dies zu erreichen.

Derzeit wird Opus von Firefox auf Desktop- und Mobilgeräten sowie von den neuesten Versionen von Desktop Chrome und Opera unterstützt.

> **Hinweis:** [Opus ist ein obligatorisches Format](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-audio-05) für WebRTC-Browserimplementierungen.

### MP3, AAC, Ogg Vorbis

Die meisten gängigen Audioformate können mit spezifischen serverseitigen Technologien gestreamt werden.

Hinweis: Es ist potenziell einfacher, Audio mit nicht-streamenden Formaten zu streamen, da im Gegensatz zu Video keine Keyframes vorhanden sind.

## Serverseitige Streaming-Technologien

Um Live-Audio und -Video zu streamen, müssen Sie spezielle Streaming-Software auf Ihrem Server ausführen oder Drittanbieterdienste verwenden.

### GStreamer

[GStreamer](https://gstreamer.freedesktop.org/) ist ein plattformübergreifendes Open-Source-Multimedia-Framework, das es Ihnen ermöglicht, eine Vielzahl von Medienverarbeitungskomponenten zu erstellen, einschließlich Streaming-Komponenten. Durch sein Plug-in-System bietet GStreamer Unterstützung für mehr als hundert Codecs (einschließlich MPEG-1, MPEG-2, MPEG-4, H.261, H.263, H.264, RealVideo, MP3, WMV und FLV).

GStreamer-Plugins wie [souphttpclientsink](https://gstreamer.freedesktop.org/documentation/soup/souphttpclientsink.html?gi-language=c) und [shout2send](https://gstreamer.freedesktop.org/documentation/shout2/index.html?gi-language=c#shout2send-page) existieren, um Medien über HTTP zu streamen, oder Sie können auch mit Pythons Twisted Framework integrieren.

Für den RTMP-Transfer können Sie das [Nginx RTMP Module](https://github.com/arut/nginx-rtmp-module) verwenden.

### SHOUTcast

[SHOUTcast](https://de.wikipedia.org/wiki/SHOUTcast) ist eine plattformübergreifende proprietäre Technologie zum Streaming von Medien. Entwickelt von Nullsoft, ermöglicht es die Übertragung digitaler Audioinhalte im MP3- oder AAC-Format. Für die Nutzung im Web werden SHOUTcast-Streams über HTTP übertragen.

> **Hinweis:** [SHOUTcast URLs benötigen möglicherweise ein angehängtes Semikolon](https://stackoverflow.com/questions/2743279/how-could-i-play-a-shoutcast-icecast-stream-using-html5).

### Icecast

Der [Icecast](https://www.icecast.org/) Server ist eine Open-Source-Technologie zum Streaming von Medien. Er wird von der [Xiph.org Foundation](https://www.xiph.org/) gewartet und streamt Ogg Vorbis/Theora sowie MP3- und AAC-Formate über das SHOUTcast-Protokoll.

> [!NOTE]
> SHOUTcast und Icecast gehören zu den etabliertesten und beliebtesten Technologien, aber es gibt viele [weitere verfügbare Streaming-Media-Systeme](https://de.wikipedia.org/wiki/Liste_von_Streaming-Media-Systemen#Servers).

### Streaming-Dienste

Obwohl Sie Software wie GStreamer, SHOUTcast und Icecast installieren können, werden Sie auch viele [Drittanbieter-Streaming-Dienste](https://de.wikipedia.org/wiki/Comparison_of_streaming_media_systems) finden, die einen Großteil der Arbeit für Sie erledigen.

## Siehe auch

- [HTTP Live Streaming](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
- [HLS Browserunterstützung](https://jwplayer.com/blog/http-live-streaming/)
- [HTTP Live Streaming JavaScript player](https://github.com/RReverser/mpegts)
- [Die Grundlagen des HTTP Live Streaming](https://larryjordan.com/articles/basics-of-http-live-streaming/)
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
- [Dynamic Adaptive Streaming over HTTP (MPEG-DASH)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [MPEG-DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
- [DASH Referenz Client](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html)
- [Dynamisches Streaming über HTTP](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [Der Stand der MPEG-DASH-Implementierung](https://www.streamingmediaglobal.com/Articles/Editorial/Featured-Articles/The-State-of-MPEG-DASH-Deployment-96144.aspx)
- [Ohne Plugins: Live-Streaming im Browser mit Media Source Extensions und MPEG-DASH](https://www.bbc.co.uk/rd/blog/2014-03-media-source-extensions)
- [Media Source Extensions (W3C)](https://w3c.github.io/media-source/)
- [Icecast](https://de.wikipedia.org/wiki/Icecast)
- [SHOUTcast](https://de.wikipedia.org/wiki/Shoutcast)
- [GStreamer](https://de.wikipedia.org/wiki/GStreamer)
- [Streaming GStreamer Pipelines über HTTP](https://coaxion.net/blog/2013/10/streaming-gstreamer-pipelines-via-http/)
- [GStreamer und Raspberry Pi](https://nginx-rtmp.blogspot.com/2013/07/gstreamer-and-raspberry-pi.html)
- [Vergleich von Streaming-Media-Systemen](https://de.wikipedia.org/wiki/Vergleich_von_Streaming-Media-Systemen)
- [Mozilla Hacks - On-Demand-Streaming mit Media Source Extensions](https://hacks.mozilla.org/2015/07/streaming-media-on-demand-with-media-source-extensions/)
