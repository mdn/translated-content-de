---
title: Livestreaming von Web-Audio und -Video
slug: Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

Livestreaming-Technologie wird oft eingesetzt, um Live-Events wie Sport, Konzerte und allgemein TV- und Radioprogramme, die live ausgestrahlt werden, zu übertragen. Oft auf Streaming verkürzt, bezeichnet Livestreaming den Prozess der Übertragung von Medien 'live' auf Computer und Geräte. Dies ist ein ziemlich komplexes und neues Thema mit vielen Variablen. In diesem Artikel führen wir Sie in das Thema ein und zeigen Ihnen, wie Sie beginnen können.

Der entscheidende Faktor beim Streaming von Medien in einen Browser ist, dass wir anstatt einer abgeschlossenen Datei eine Datei übertragen, die spontan erstellt wird und keine vordefinierte Start- oder Endzeit hat.

## Wichtige Unterschiede zwischen gestreamten und statischen Medien

In diesem Fall verwenden wir statische Medien, um Medien zu beschreiben, die durch eine Datei wie eine MP3- oder WebM-Datei dargestellt werden. Diese Datei befindet sich auf einem Server und kann wie die meisten anderen Dateien an den Browser geliefert werden. Dies wird oft als progressiver Download bezeichnet.

Livestreamed Medien haben im Gegensatz zu einer statischen Datei keine feste Start- und Endzeit, sondern sind ein Datenstrom, den der Server an den Browser weiterleitet und der oft adaptiv ist (siehe unten). In der Regel benötigen wir verschiedene Formate und spezielle serverseitige Software, um dies zu erreichen.

## Adaptives Streaming

Eines der Hauptziele beim Livestreaming ist es, den Player mit dem Stream synchron zu halten: Adaptives Streaming ist eine Technik, um dies im Falle von geringer Bandbreite zu erreichen. Die Idee ist, dass die Datenübertragungsrate überwacht wird und wenn es scheint, dass diese nicht ausreicht, wechseln wir zu einem Stream mit niedrigerer Bandbreite (und folglich geringerer Qualität). Um diese Fähigkeit zu haben, müssen wir Formate verwenden, die dies ermöglichen. Livestreaming-Formate erlauben im Allgemeinen adaptives Streaming, indem Streams in eine Reihe von kleinen Segmenten unterteilt und diese Segmente in unterschiedlichen Qualitäten und Bitraten bereitgestellt werden.

## Streaming Audio und Video auf Abruf

Streaming-Technologie wird nicht ausschließlich für Livestreams verwendet. Sie kann auch anstelle der traditionellen progressiven Download-Methode für Audio und Video auf Abruf genutzt werden:

Es gibt mehrere Vorteile hierfür:

- Die Latenz ist im Allgemeinen niedriger, sodass Medien schneller abgespielt werden
- Adaptives Streaming sorgt für bessere Erfahrungen auf einer Vielzahl von Geräten
- Medien werden just-in-time heruntergeladen, was die Bandbreitennutzung effizienter macht

## Streaming-Protokolle

Während statische Medien in der Regel über HTTP bereitgestellt werden, gibt es mehrere Protokolle für die Bereitstellung von adaptiven Streams; lassen Sie uns die Optionen ansehen.

### HTTP

Derzeit ist HTTP bei weitem das am häufigsten unterstützte Protokoll, das verwendet wird, um Medien auf Abruf oder live zu übertragen.

### RTMP

Real Time Messaging Protocol (RTMP) ist ein proprietäres Protokoll, das von Macromedia (jetzt Adobe) entwickelt wurde und vom Adobe Flash-Plugin unterstützt wird. RTMP gibt es in verschiedenen Varianten, einschließlich RTMPE (verschlüsselt), RTMPS (sicher über TLS/SSL) und RTMPT (in HTTP-Anfragen eingeschlossen).

### RTSP

> [!NOTE]
> Real Time Streaming Protocol (RTSP) steuert Mediensitzungen zwischen Endpunkten und wird oft zusammen mit Real-time Transport Protocol (RTP) und Real-time Control Protocol (RTCP) für die Bereitstellung von Medienstreams verwendet. Die Verwendung von RTP mit RTCP ermöglicht adaptives Streaming. Dies wird derzeit in den meisten Browsern noch nicht nativ unterstützt.
>
> Einige Anbieter implementieren proprietäre Transportprotokolle, wie RealNetworks und ihr Real Data Transport (RDT).

### RTSP 2.0

RTSP 2.0 ist derzeit in der Entwicklung und ist nicht rückwärtskompatibel mit RTSP 1.0.

> [!WARNING]
> Obwohl die {{ htmlelement("audio") }} und {{ htmlelement("video") }} Tags protokollunabhängig sind, unterstützt derzeit kein Browser außer HTTP ein anderes Protokoll ohne Plugins, obwohl sich dies zu ändern scheint. Protokolle außer HTTP können ebenfalls von Firewalls oder Proxy-Servern blockiert werden.

## Die Verwendung von Streaming-Protokollen

Der Prozess der Verwendung der verschiedenen Protokolle ist beruhigend vertraut, wenn Sie es gewohnt sind, mit Medien über HTTP zu arbeiten.

Zum Beispiel:

```html
<video src="rtsp://myhost.com/mymedia.format">
  <!-- Fallback here -->
</video>
```

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript zu ermöglichen, Medienstreams zur Wiedergabe zu generieren. Die Möglichkeit für JavaScript, Streams zu generieren, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und zeitversetzte Livestreams.

Zum Beispiel könnten [Sie MPEG-DASH mit JavaScript implementieren und das Dekodieren an MSE auslagern](https://web.archive.org/web/20170504035455/https://msopentech.com/blog/2014/01/03/streaming_video_player/).

> [!NOTE]
> Zeitversetztes Streaming ist der Prozess des Konsumierens eines Livestreams einige Zeit nach der tatsächlichen Ausstrahlung.

## Video-Streaming-Dateiformate

Einige HTTP-basierte Livestreaming-Videoformate beginnen Unterstützung in Browsern zu sehen.

> [!NOTE]
> Sie finden einen Leitfaden zum Kodieren von HLS und MPEG-DASH für die Verwendung im Web unter [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources).

### MPEG-DASH

DASH steht für Dynamic Adaptive Streaming over HTTP. Es wird über Media Source Extensions unterstützt, die von JavaScript-Bibliotheken wie [DASH.js](https://github.com/Dash-Industry-Forum/dash.js/) verwendet werden. Dieser Ansatz erlaubt es uns, "Chunks" des Videostreams mittels XHR herunterzuladen und die "Chunks" an den Stream anzuhängen, der vom {{ htmlelement("video") }}-Element abgespielt wird. Wenn wir also feststellen, dass das Netzwerk langsam ist, können wir beginnen, für das nächste Segment kleinere Chunks niedriger Qualität anzufordern. Diese Technologie ermöglicht auch, dass ein Werbesegment an den Stream angehängt/eingefügt wird.

> [!NOTE]
> Sie können auch [WebM mit dem MPEG DASH adaptiven Streaming-System verwenden](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification).

### HLS

HLS oder HTTP Live Streaming ist ein Protokoll, das von Apple Inc. erfunden wurde und auf iOS, Safari und den neuesten Versionen der Android-Browser/Chrome unterstützt wird. HLS ist ebenfalls adaptiv.

HLS kann auch mit JavaScript dekodiert werden, was bedeutet, dass wir die neuesten Versionen von Firefox, Chrome und Safari unterstützen können. Siehe diesen [HTTP Live Streaming JavaScript-Player](https://github.com/video-dev/hls.js).

Am Anfang der Streaming-Sitzung wird eine [erweiterte M3U (m3u8) Playlist](https://en.wikipedia.org/wiki/M3U8#Extended_M3U_directives) heruntergeladen. Diese enthält die Metadaten für die verschiedenen angebotenen Substreams.

## Audio-Streaming-Dateiformate

Es gibt auch verschiedene Audioformate:

### Opus

Opus ist ein gebührenfreies und offenes Format, das die Qualität bei verschiedenen Bitraten für unterschiedliche Arten von Audio optimiert. Musik und Sprache können auf unterschiedliche Weise optimiert werden und Opus verwendet die SILK- und CELT-Codecs, um dies zu erreichen.

Derzeit wird Opus von Firefox auf Desktop und Mobilgeräten sowie den neuesten Versionen von Chrome und Opera auf Desktops unterstützt.

> [!NOTE]
> [Opus ist ein obligatorisches Format](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-audio-05) für WebRTC-Browserimplementierungen.

### MP3, AAC, Ogg Vorbis

Die meisten gängigen Audioformate können mit spezifischen serverseitigen Technologien gestreamt werden.

Hinweis: Es ist potenziell einfacher, Audio mit nicht-streamenden Formaten zu streamen, da es im Gegensatz zu Video keine Keyframes gibt.

## Serverseitige Streaming-Technologien

Um Live-Audio und -Video zu streamen, müssen Sie spezifische Streaming-Software auf Ihrem Server ausführen oder Drittanbieterdienste nutzen.

### GStreamer

[GStreamer](https://gstreamer.freedesktop.org/) ist ein Open-Source Multimedia-Framework, das plattformübergreifend Medienkomponenten, einschließlich Streaming-Komponenten, erstellt. Durch sein Pluginsystem bietet GStreamer Unterstützung für mehr als hundert Codecs (einschließlich MPEG-1, MPEG-2, MPEG-4, H.261, H.263, H.264, RealVideo, MP3, WMV und FLV).

GStreamer-Plugins wie [souphttpclientsink](https://gstreamer.freedesktop.org/documentation/soup/souphttpclientsink.html?gi-language=c) und [shout2send](https://gstreamer.freedesktop.org/documentation/shout2/index.html?gi-language=c#shout2send-page) existieren, um Medien über HTTP zu streamen, oder Sie können sich auch in das Twisted-Framework von Python integrieren.

Für den RTMP-Transfer können Sie das [Nginx RTMP-Modul](https://github.com/arut/nginx-rtmp-module) verwenden.

### SHOUTcast

[SHOUTcast](https://en.wikipedia.org/wiki/SHOUTcast) ist eine plattformübergreifende proprietäre Technologie für das Streaming von Medien. Entwickelt von Nullsoft, ermöglicht es die Übertragung digitaler Audiodaten im MP3- oder AAC-Format. Für den Webeinsatz werden SHOUTcast-Streams über HTTP übertragen.

> [!NOTE]
> [SHOUTcast-URLs erfordern möglicherweise ein Semikolon am Ende](https://stackoverflow.com/questions/2743279/how-could-i-play-a-shoutcast-icecast-stream-using-html5).

### Icecast

Der [Icecast](https://www.icecast.org/) Server ist eine Open-Source-Technologie für das Streaming von Medien. Verwaltet von der [Xiph.org Foundation](https://www.xiph.org/), streamt er Ogg Vorbis/Theora sowie MP3 und AAC-Format über das SHOUTcast-Protokoll.

> [!NOTE]
> SHOUTcast und Icecast gehören zu den etabliertesten und beliebtesten Technologien, aber es gibt viele [weitere Streaming-Medien-Systeme](https://en.wikipedia.org/wiki/List_of_streaming_media_systems#Servers).

### Streaming-Dienste

Obwohl Sie Software wie GStreamer, SHOUTcast und Icecast installieren können, finden Sie auch viele [Drittanbieter-Streaming-Dienste](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems), die einen Großteil der Arbeit für Sie erledigen.

## Siehe auch

- [HTTP Live Streaming](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
- [HLS Browser Unterstützung](https://caniuse.com/?search=hls)
- [HTTP Live Streaming JavaScript Player](https://github.com/RReverser/mpegts)
- [Die Grundlagen des HTTP Live Streaming](https://larryjordan.com/articles/basics-of-http-live-streaming/)
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
- [Dynamisches Adaptive Streaming über HTTP (MPEG-DASH)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [MPEG-DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
- [DASH Referenzclient](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html)
- [Dynamisches Streaming über HTTP](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [Der Stand der MPEG-DASH-Implementierung](https://www.streamingmediaglobal.com/Articles/Editorial/Featured-Articles/The-State-of-MPEG-DASH-Deployment-96144.aspx)
- [Kein Plugin erforderlich: Live-Streaming in den Browser mit Media Source Extensions und MPEG-DASH](https://www.bbc.co.uk/rd/blog/2014-03-media-source-extensions)
- [Media Source Extensions (W3C)](https://w3c.github.io/media-source/)
- [Icecast](https://en.wikipedia.org/wiki/Icecast)
- [SHOUTcast](https://en.wikipedia.org/wiki/Shoutcast)
- [GStreamer](https://en.wikipedia.org/wiki/GStreamer)
- [Streaming GStreamer Pipelines über HTTP](https://coaxion.net/blog/2013/10/streaming-gstreamer-pipelines-via-http/)
- [GStreamer und Raspberry Pi](https://nginx-rtmp.blogspot.com/2013/07/gstreamer-and-raspberry-pi.html)
- [Vergleich von Streaming-Medien-Systemen](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)
- [Mozilla Hacks - Streaming Media on demand mit Media Source Extensions](https://hacks.mozilla.org/2015/07/streaming-media-on-demand-with-media-source-extensions/)
