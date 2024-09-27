---
title: Einrichten von adaptiven Streaming-Medienquellen
slug: Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, um sie innerhalb eines HTML-Medienelements zu nutzen. Wie würden Sie das machen? Dieser Artikel erklärt, wie es geht, und betrachtet zwei der gängigsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).

## Auswahl von Formaten

In Bezug auf adaptive Streaming-Formate gibt es viele zur Auswahl; wir haben uns für die folgenden zwei entschieden, da wir mit ihnen die meisten modernen Browser unterstützen können.

- MPEG-DASH
- HLS (HTTP Live Streaming)

Um Medien adaptiv zu streamen, müssen wir die Medien in Stücke aufteilen. Wir sind verpflichtet, mehrere Dateien unterschiedlicher Qualität bereitzustellen, die über mehrere Zeitpunkte verteilt sind. Je mehr Qualitäten und Zeitpunkte es gibt, desto "adaptiver" wird Ihr Stream sein, aber wir möchten normalerweise ein pragmatisches Gleichgewicht zwischen Größe, Kodierungszeit und Adaptivität finden.

Die gute Nachricht ist, dass wir, sobald wir unsere Medien im entsprechenden Format kodiert haben, ziemlich gut vorbereitet sind. Für adaptives Streaming über HTTP sind keine speziellen serverseitigen Komponenten erforderlich.

Sowohl MPEG-DASH als auch HLS nutzen ein Playlisten-Format, um die Komponentenstücke der Medien zu strukturieren, die die möglichen Streams bilden. Verschiedene Bitraten-Streams werden in Segmente unterteilt und in geeigneten Serverordnern platziert — wir müssen unseren Mediaplayern einen Link geben, um Dateien oder Playlisten zu suchen, die den Namen und den Standort dieser Stream-Ordner angeben.

## MPEG-DASH-Kodierung

MPEG-DASH ist eine adaptive Bitraten-Streaming-Technik, die es ermöglicht, Medieninhalte über das Internet von konventionellen HTTP-Webservern zu streamen.

Eine Media Presentation Description (MPD)-Datei wird verwendet, um die Informationen über die verschiedenen Streams und die mit ihnen verbundenen Bandbreiten zu halten. Im `src`-Attribut Ihrer Videoquelle verweisen Sie auf die MPD anstelle der Mediendatei, wie Sie es mit nicht-adaptiven Medien tun würden.

Die MPD-Datei teilt dem Browser mit, wo sich die verschiedenen Medienteile befinden. Sie enthält auch Metadaten wie `mimeType` und `codecs`, und es gibt weitere Details wie Byte-Bereiche – es handelt sich um ein XML-Dokument und wird in vielen Fällen für Sie generiert.

Es gibt einige Profile, die wir verwenden können. Wir werden uns das On-Demand-Profil für Video on Demand (VOD) und das LIVE-Profil ansehen.

Für das Streaming von Live-Diensten ist das LIVE-Profil eine Anforderung. Die Stream-Switching-Fähigkeiten sind zwischen den Profilen identisch.

Weitere Gründe, das LIVE-Profil gegenüber On-Demand für VOD-Inhalte zu verwenden, können sein:

1. Ihr Client oder Server unterstützt keine [Bereichsanfragen](/de/docs/Web/HTTP/Range_requests)
2. Ihr Server kann Bereichsanfragen nicht effizient zwischenspeichern
3. Ihr Server kann Bereichsanfragen nicht effizient vorausladen
4. Das SIDX\* ist groß, und es zuerst laden zu müssen, verlangsamt den Start etwas
5. Sie möchten die Originaldateien sowohl für DASH als auch für andere Formen der Auslieferung (wie Microsoft Smooth Streaming) als Übergangsstrategie verwenden
6. Sie können dieselben Mediendateien sowohl für die Live-Übertragung als auch für VOD zu einem späteren Zeitpunkt verwenden

\*SIDX oder SegmentIndexBox ist eine Struktur, die ein Segment beschreibt, indem es seine früheste Präsentationszeit und andere Metadaten angibt und kann oft einen großen Teil der MPD-Datei ausmachen.

### On-Demand-Profil

Dieses Profil ermöglicht es, zwischen Streams "on demand" zu wechseln - das heißt, Sie müssen nur eine Reihe von zusammenhängenden Dateien bereitstellen und die Bandbreite für jede angeben, und es wird automatisch die entsprechende Datei ausgewählt.

Hier ist ein einfaches Beispiel, das eine Audio-Track-Darstellung und vier separate Video-Darstellungen bietet.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="urn:mpeg:dash:schema:mpd:2011"
  xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 DASH-MPD.xsd"
  type="static"
  mediaPresentationDuration="PT654S"
  minBufferTime="PT2S"
  profiles="urn:mpeg:dash:profile:isoff-on-demand:2011">

  <BaseURL>http://example.com/ondemand/</BaseURL>
  <Period>
    <!-- English Audio -->
    <AdaptationSet mimeType="audio/mp4" codecs="mp4a.40.5" lang="en" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
      <Representation id="1" bandwidth="64000">
        <BaseURL>ElephantsDream_AAC48K_064.mp4.dash</BaseURL>
      </Representation>
    </AdaptationSet>
    <!-- Video -->
    <AdaptationSet mimeType="video/mp4" codecs="avc1.42401E" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
      <Representation id="2" bandwidth="100000" width="480" height="360">
        <BaseURL>ElephantsDream_H264BPL30_0100.264.dash</BaseURL>
      </Representation>
      <Representation id="3" bandwidth="175000" width="480" height="360">
        <BaseURL>ElephantsDream_H264BPL30_0175.264.dash</BaseURL>
      </Representation>
      <Representation id="4" bandwidth="250000" width="480" height="360">
        <BaseURL>ElephantsDream_H264BPL30_0250.264.dash</BaseURL>
      </Representation>
      <Representation id="5" bandwidth="500000" width="480" height="360">
        <BaseURL>ElephantsDream_H264BPL30_0500.264.dash</BaseURL>
      </Representation>
    </AdaptationSet>
  </Period>
</MPD>
```

Sobald Sie Ihre MPD-Datei erstellt haben, können Sie sie innerhalb des Video-Tags referenzieren.

```html
<video src="my.mpd" type="application/dash+xml"></video>
```

Es wäre ratsam, einen Fallback für Browser bereitzustellen, die MPEG-DASH noch nicht unterstützen:

```html
<video>
  <source src="my.mpd" type="application/dash+xml" />
  <!-- fallback -->
  <source src="my.mp4" type="video/mp4" />
  <source src="my.webm" type="video/webm" />
</video>
```

### LIVE-Profil

Ein nützliches Stück Software bei der Arbeit mit MPEG-DASH ist [Dash Encoder](https://github.com/slederer/DASHEncoder). Es verwendet [MP4Box](https://github.com/gpac/gpac/wiki/mp4box-dash-opts), um Medien in das MPEG-DASH-Format zu kodieren.

> [!NOTE]
> Sie müssen mit Makefiles und der Installation von Abhängigkeiten vertraut sein, um diese Software zum Laufen zu bringen.

> [!NOTE]
> Da die MPEG-DASH-Dekodierung teilweise mit JavaScript erfolgt und MSE-Dateien oft mit XHR abgerufen werden, beachten Sie die Same-Origin-Regeln.

> [!NOTE]
> Wenn Sie WebM verwenden, können Sie die in diesem Tutorial gezeigten Methoden nutzen [DASH Adaptive Streaming for HTML 5 Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video).

Sobald Ihre Dateien kodiert sind, sieht Ihre Dateistruktur möglicherweise so aus:

```plain
play list ->                /segments/news.mp4.mpd

main segment folder ->      /segments/main/

100 Kbps segment folder ->  /segments/main/news100 contains (1.m4s, 2.m4s, 3.m4s … )

200 Kbps segment folder ->  /segments/main/news200 contains (1.m4s, 2.m4s, 3.m4s … )

300 Kbps segment folder ->  /segments/main/news300 contains (1.m4s, 2.m4s, 3.m4s … )

400 Kbps segment folder ->  /segments/main/news400 contains (1.m4s, 2.m4s, 3.m4s … )
```

Die Playlist- oder `.mpd`-Datei enthält XML, das explizit angibt, wo sich alle verschiedenen Bitraten-Dateien befinden.

```xml
<?xml version="1.0"?>
  <MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:mpeg:DASH:schema:MPD:2011" xsi:schemaLocation="urn:mpeg:DASH:schema:MPD:2011" profiles="urn:mpeg:dash:profile:isoff-main:2011" type="static" mediaPresentationDuration="PT0H9M56.46S">
    <BaseURL>
      http://example.com/segments
    </BaseURL>
    <Period start="PT0S">
      <AdaptationSet bitstreamSwitching="true">

        <Representation id="0" codecs="avc1" mimeType="video/mp4" width="320" height="240" startWithSAP="1" bandwidth="46986">
          <SegmentBase>
            <Initialization sourceURL="main/news100/1.m4s" range="0-862"/>
          </SegmentBase>
          <SegmentList duration="1">
            <SegmentURL media="main/news100/2.m4s" mediaRange="863-7113"/>
            <SegmentURL media="main/news100/3.m4s" mediaRange="7114-14104"/>
            <SegmentURL media="main/news100/4.m4s" mediaRange="14105-17990"/>
          </SegmentList>
        </Representation>

        <Representation id="1" codecs="avc1" mimeType="video/mp4" width="320" height="240" startWithSAP="1" bandwidth="91932">
          <SegmentBase>
            <Initialization sourceURL="main/news200/1.m4s" range="0-864"/>
          </SegmentBase>
          <SegmentList duration="1">
            <SegmentURL media="main/news200/2.m4s" mediaRange="865-11523"/>
            <SegmentURL media="main/news200/3.m4s" mediaRange="11524-25621"/>
            <SegmentURL media="main/news200/4.m4s" mediaRange="25622-33693"/>
          </SegmentList>
        </Representation>

        <Representation id="1" codecs="avc1" mimeType="video/mp4" width="320" height="240" startWithSAP="1" bandwidth="270370">
          <SegmentBase>
            <Initialization sourceURL="main/news300/1.m4s" range="0-865"/>
          </SegmentBase>
          <SegmentList duration="1">
            <SegmentURL media="main/news300/2.m4s" mediaRange="866-26970"/>
            <SegmentURL media="main/news300/3.m4s" mediaRange="26971-72543"/>
            <SegmentURL media="main/news300/4.m4s" mediaRange="72544-95972"/>
          </SegmentList>
        </Representation>

        …

      </AdaptationSet>
    </Period>
  </MPD>
```

Die MPD-Datei teilt dem Browser mit, wo sich die verschiedenen Medienteile befinden. Sie enthält auch Metadaten wie `mimeType` und `codecs`, und es gibt weitere Details wie Byte-Bereiche. Diese Dateien werden in der Regel für Sie generiert.

> [!NOTE]
> Sie können Ihre Audio- und Video-Streams auch in separate Dateien aufteilen, die dann je nach Bandbreite priorisiert und separat bereitgestellt werden können.

Sobald Sie Ihre MPD-Datei erstellt haben, können Sie sie wie erwartet im {{ htmlelement("video") }}-Element referenzieren:

```html
<video src="my.mpd" type="application/dash+xml"></video>
```

Es wäre ratsam, einen Fallback bereitzustellen:

```html
<video>
  <source src="my.mpd" type="application/dash+xml" />
  <!-- fallback -->
  <source src="my.mp4" type="video/mp4" />
  <source src="my.webm" type="video/webm" />
</video>
```

> [!NOTE]
> Die Wiedergabe von MPEG-DASH hängt von [dash.js](https://github.com/Dash-Industry-Forum/dash.js/) und der Browserunterstützung für [Media Source Extensions](https://w3c.github.io/media-source/) ab, siehe den aktuellen [dash.js Referenz-Player](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html).

## HLS-Kodierung

HTTP Live Streaming (HLS) ist ein HTTP-basiertes Medien-Streaming-Protokoll, das von Apple implementiert wurde. Es ist in iOS- und OSX-Plattformen integriert und funktioniert gut auf [mobilen und Desktop-Safari und den meisten Android-Geräten mit einigen Einschränkungen](https://jwplayer.com/blog/http-live-streaming/).

Medien werden normalerweise als MPEG-4 (H.264-Video und AAC-Audio) kodiert und in einen MPEG-2-Transportstrom verpackt, der dann in Segmente unterteilt und als eine oder mehrere `.ts`-Mediendateien gespeichert wird. Apple stellt Werkzeuge bereit, um Mediendateien in das entsprechende Format zu konvertieren.

### HLS-Kodierungswerkzeuge

Es gibt eine Reihe nützlicher Werkzeuge für die HLS-Kodierung

- Der Stream Segmenter — von Apple für Mac-Plattformen bereitgestellt — nimmt einen Medienstream von einem lokalen Netzwerk und zerlegt Medien in gleich große Mediendateien zusammen mit einer Indexdatei.
- Apple bietet auch einen File Segmenter für Mac an — der eine entsprechend kodierte Datei nimmt, sie aufteilt und eine Indexdatei erstellt, ähnlich dem Stream Segmenter.

> [!NOTE]
> Weitere Details zu diesen Werkzeugen finden Sie unter [Using HTTP Live Streaming](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/UsingHTTPLiveStreaming/UsingHTTPLiveStreaming.html).

### Indexdateien (Playlists)

Die HLS-Indexdatei (ähnlich der `.mpd`-Datei von MPEG-DASH) enthält die Informationen darüber, wo sich alle Mediensemente befinden, sowie andere Metadaten wie Bandbreitenanwendungen. Apple verwendet das `.m3u8`-Format (eine Erweiterung seines `.m3u`-Playlist-Formats) für Indexdateien — siehe unten ein Beispiel:

```plain
#EXT-X-VERSION:3
#EXTM3U
#EXT-X-TARGETDURATION:10
#EXT-X-MEDIA-SEQUENCE:1

# Old-style integer duration; avoid for newer clients.
#EXTINF:10,
http://media.example.com/segment0.ts

# New-style floating-point duration; use for modern clients.
#EXTINF:10.0,
http://media.example.com/segment1.ts
#EXTINF:9.5,
http://media.example.com/segment2.ts
#EXT-X-ENDLIST
```

> [!NOTE]
> Umfassende Informationen darüber, wie Medien für das HLS-Format von Apple kodiert werden können, finden Sie auf den [Developer-Seiten von Apple](https://developer.apple.com/streaming/).

## Siehe auch

Weitere Ressourcen zum adaptiven Streaming.

### Allgemeine Informationen

- [Adaptive Streaming in the Field](https://www.streamingmedia.com/Articles/Editorial/Featured-Articles/Adaptive-Streaming-in-the-Field-73017.aspx)

### HLS-Übersicht und Referenzen

- [HTTP Live Streaming](https://developer.apple.com/streaming/)
- [What is HLS (HTTP-Live-Streaming)?](<https://www.streamingmedia.com/Articles/Editorial/What-Is-.../What-is-HLS-(HTTP-Live-Streaming)-78221.aspx>)
- [HTTP Live Streaming Overview](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/Introduction/Introduction.html)

### MPEG-DASH-Übersicht und Referenzen

- [Dynamic Adaptive Streaming over HTTP Dataset](https://www-itec.uni-klu.ac.at/bib/files/p89-lederer.pdf)
- [DASH Adaptive Streaming for HTML 5 Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
- [Dynamic Adaptive Streaming over HTTP: From Content Creation to Consumption](https://www.slideshare.net/slideshow/dynamic-adaptive-streaming-over-http-from-content-creation-to-consumption/14933566)

### MPEG-DASH-Werkzeuge

- [DASHEncoder](https://github.com/slederer/DASHEncoder)
- [MP4Box](https://github.com/gpac/gpac/wiki/MP4Box)
- [DASH.js Wiki](https://github.com/Dash-Industry-Forum/dash.js/wiki)
- [DASH.js Google Group](https://groups.google.com/forum/#!forum/dashjs)

Beispiele für adaptives Streaming

- [ITEC – Dynamic Adaptive Streaming over HTTP](https://dash.itec.aau.at/dash-dataset/)
- [MPEG DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
