---
title: Einrichten adaptiver Streaming-Medienquellen
slug: Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, um sie in einem HTML-Medienelement zu verwenden. Wie würden Sie das tun? Dieser Artikel erklärt, wie das funktioniert, indem er zwei der gängigsten Formate betrachtet: MPEG-DASH und HLS (HTTP Live Streaming).

## Auswahl von Formaten

Es gibt viele adaptive Streaming-Formate zur Auswahl; wir haben uns für die folgenden zwei entschieden, da sie die meisten modernen Browser unterstützen können.

- MPEG-DASH
- HLS (HTTP Live Streaming)

Um Medien adaptiv streamen zu können, müssen wir die Medien in Stücke aufteilen. Wir müssen mehrere Qualitätsdateien zu verschiedenen Zeitpunkten bereitstellen. Je mehr Qualitäten und Zeitpunkte es gibt, desto 'adaptiver' wird Ihr Stream sein, aber normalerweise möchten wir ein pragmatisches Gleichgewicht zwischen Größe, Codierzeit und Adaptivität finden.

Die gute Nachricht ist, dass, sobald wir unsere Medien im passenden Format kodiert haben, wir bereit sind, loszulegen. Für adaptives Streaming über HTTP sind keine speziellen serverseitigen Komponenten erforderlich.

Sowohl MPEG-DASH als auch HLS verwenden ein Playlist-Format, um die Komponentenmedien zu strukturieren, die die möglichen Streams bilden. Verschiedene Bitraten-Streams werden in Segmente aufgeteilt und in geeignete Serverordner gelegt — wir müssen unseren Media-Playern einen Link bereitstellen, um Dateien oder Playlists nachzuschlagen, die den Namen und den Standort dieser Stream-Ordner angeben.

## MPEG-DASH Kodierung

MPEG-DASH ist eine adaptive Bitrate-Streaming-Technik, die das Streaming von Medieninhalten über das Internet ermöglicht, die von herkömmlichen HTTP-Webservern geliefert werden.

Eine Media Presentation Description (MPD) Datei wird verwendet, um die Informationen zu den verschiedenen Streams und den Bandbreiten, mit denen sie verbunden sind, zu halten. In Ihrem Videoquellen-Attribut (src) weisen Sie auf die MPD hin, anstatt auf die Mediendatei, wie Sie es mit nicht-adaptiven Medien tun würden.

Die MPD-Datei teilt dem Browser mit, wo sich die verschiedenen Medienteile befinden. Sie enthält auch Metadaten wie mimeType und Codec und dort sind auch andere Details wie Byte-Bereiche enthalten - es handelt sich um ein XML-Dokument und wird in vielen Fällen für Sie generiert.

Es gibt einige Profile, die wir verwenden können. Wir werden uns das On-Demand-Profil für Video on Demand (VOD) und das LIVE-Profil ansehen.

Für Live-Dienste ist das LIVE-Profil eine Anforderung. Die Stream-Umschaltfähigkeiten sind zwischen den Profilen identisch.

Andere Gründe, das LIVE-Profil über das On-Demand-Profil für VOD-Inhalte zu verwenden, können sein:

1. Ihr Client oder Server unterstützt keine [Bereichsanfragen](/de/docs/Web/HTTP/Range_requests)
2. Ihr Server kann Bereichsanfragen nicht effizient cachen
3. Ihr Server kann Bereichsanfragen nicht effizient vorab abrufen
4. Das SIDX\* ist groß und das erste Laden verlangsamt den Start ein wenig
5. Sie möchten die Originaldateien sowohl für DASH als auch für andere Bereitstellungsformen (wie Microsoft Smooth Streaming) als Übergangsstrategie verwenden
6. Sie können dieselben Mediendateien sowohl für die Live-Übertragung als auch später für VOD verwenden

\*SIDX oder SegmentIndexBox ist eine Struktur, die ein Segment beschreibt, indem sie seine früheste Präsentationszeit und andere Metadaten angibt, und kann oft einen großen Teil der MPD-Datei ausmachen.

### On-Demand-Profil

Dieses Profil ermöglicht das Umschalten zwischen Streams 'on demand' - das heißt, Sie müssen nur eine Reihe von zusammenhängenden Dateien bereitstellen und die Bandbreite für jede angeben, und die geeignete Datei wird automatisch ausgewählt.

Hier ist ein Beispiel, das eine Audiowiedergabe und vier separate Videodarstellungen bietet.

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

Sobald Sie Ihre MPD-Datei generiert haben, können Sie sie im Video-Tag referenzieren.

```html
<video src="my.mpd" type="application/dash+xml"></video>
```

Es könnte sinnvoll sein, einen Fallback für Browser bereitzustellen, die MPEG-DASH noch nicht unterstützen:

```html
<video>
  <source src="my.mpd" type="application/dash+xml" />
  <!-- fallback -->
  <source src="my.mp4" type="video/mp4" />
  <source src="my.webm" type="video/webm" />
</video>
```

### LIVE-Profil

Ein nützliches Softwarewerkzeug im Umgang mit MPEG-DASH ist [Dash Encoder](https://github.com/slederer/DASHEncoder). Es verwendet [MP4Box](https://github.com/gpac/gpac/wiki/mp4box-dash-opts), um Medien im MPEG-DASH-Format zu kodieren.

> [!NOTE]
> Sie müssen sich mit Makefiles und der Installation von Abhängigkeiten wohlfühlen, um diese Software zum Laufen zu bringen.

> [!NOTE]
> Da MPEG-DASH-Decodierung teilweise mit JavaScript erfolgt und MSE-Dateien oft per XHR abgerufen werden, sollten Sie die Same-Origin-Richtlinien im Kopf behalten.

> [!NOTE]
> Wenn Sie WebM verwenden, können Sie die Methoden in diesem Tutorial [DASH Adaptive Streaming for HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming) nutzen.

Sobald Ihre Dateien kodiert sind, kann Ihre Dateistruktur folgendermaßen aussehen:

```plain
play list ->                /segments/news.mp4.mpd

main segment folder ->      /segments/main/

100 Kbps segment folder ->  /segments/main/news100 contains (1.m4s, 2.m4s, 3.m4s … )

200 Kbps segment folder ->  /segments/main/news200 contains (1.m4s, 2.m4s, 3.m4s … )

300 Kbps segment folder ->  /segments/main/news300 contains (1.m4s, 2.m4s, 3.m4s … )

400 Kbps segment folder ->  /segments/main/news400 contains (1.m4s, 2.m4s, 3.m4s … )
```

Die Playlist oder `.mpd` Datei enthält XML, das explizit aufführt, wo alle Dateien mit unterschiedlichen Bitraten liegen.

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

Die MPD-Datei teilt dem Browser mit, wo die verschiedenen Medienteile liegen. Sie enthält auch Metadaten wie mimeType und Codec und andere Details wie Byte-Bereiche. Diese Dateien werden im Allgemeinen für Sie generiert.

> [!NOTE]
> Sie können Ihre Audio- und Videostreams auch in separate Dateien aufteilen, die dann je nach Bandbreite priorisiert und separat bereitgestellt werden können.

Sobald Sie Ihre MPD-Datei generiert haben, können Sie sie wie erwartet im {{ htmlelement("video") }}-Element referenzieren:

```html
<video src="my.mpd" type="application/dash+xml"></video>
```

Es könnte sinnvoll sein, einen Fallback bereitzustellen:

```html
<video>
  <source src="my.mpd" type="application/dash+xml" />
  <!-- fallback -->
  <source src="my.mp4" type="video/mp4" />
  <source src="my.webm" type="video/webm" />
</video>
```

> [!NOTE]
> Die Wiedergabe von MPEG-DASH basiert auf [dash.js](https://github.com/Dash-Industry-Forum/dash.js/) und der Browserunterstützung für [Media Source Extensions](https://w3c.github.io/media-source/). Siehe den aktuellen [dash.js Referenz-Player](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html).

## HLS Kodierung

HTTP Live Streaming (HLS) ist ein HTTP-basiertes Medien-Streaming-Protokoll, das von Apple implementiert wurde. Es ist in iOS- und OSX-Plattformen integriert und funktioniert gut auf [mobilen und Desktop-Safari- und den meisten Android-Geräten mit einigen Vorbehalten](https://jwplayer.com/blog/http-live-streaming/).

Medien werden normalerweise als MPEG-4 (H.264 Video und AAC Audio) kodiert und in einen MPEG-2 Transportstrom verpackt, der dann in Segmente aufgebrochen und als eine oder mehrere `.ts`-Mediendateien gespeichert wird. Apple bietet Werkzeuge an, um Mediendateien in das passende Format zu konvertieren.

### HLS Kodierungswerkzeuge

Es gibt eine Reihe nützlicher Werkzeuge für die HLS-Kodierung

- Der Stream Segmenter — von Apple für Mac-Plattformen bereitgestellt — nimmt einen Medienstrom aus einem lokalen Netzwerk und teilt die Medien in gleich große Mediendateien zusammen mit einer Indexdatei.
- Apple bietet auch einen File Segmenter für Mac an — der eine passend kodierte Datei nimmt, sie in Stücke teilt und eine Indexdatei ähnlich dem Stream Segmenter produziert.

> [!NOTE]
> Weitere Details zu diesen Werkzeugen finden Sie unter [Using HTTP Live Streaming](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/UsingHTTPLiveStreaming/UsingHTTPLiveStreaming.html).

### Index-Dateien (Playlists)

Die HLS Index-Datei (ähnlich wie MPEG-DASHs `.mpd` Datei) enthält die Informationen darüber, wo alle Mediensegmente liegen, sowie andere Metadaten wie die Bandbreitenanwendung. Apple verwendet das `.m3u8`-Format (eine Erweiterung seines `.m3u`-Playlist-Formats) für Index-Dateien – siehe unten für ein Beispiel:

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
> Umfassende Informationen darüber, wie man Medien für Apples HLS-Format codiert, finden Sie auf [Apples Entwicklerseiten](https://developer.apple.com/streaming/).

## Siehe auch

Weitere Ressourcen zum adaptiven Streaming.

### Allgemeine Informationen

- [Adaptive Streaming in der Praxis](https://www.streamingmedia.com/Articles/Editorial/Featured-Articles/Adaptive-Streaming-in-the-Field-73017.aspx)

### HLS Übersicht und Referenzen

- [HTTP Live Streaming](https://developer.apple.com/streaming/)
- [Was ist HLS (HTTP-Live-Streaming)?](<https://www.streamingmedia.com/Articles/Editorial/What-Is-.../What-is-HLS-(HTTP-Live-Streaming)-78221.aspx>)
- [HTTP Live Streaming Übersicht](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/Introduction/Introduction.html)

### MPEG-DASH Übersicht und Referenzen

- [Dynamic Adaptive Streaming über HTTP Dataset](https://www-itec.uni-klu.ac.at/bib/files/p89-lederer.pdf)
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
- [Dynamic Adaptive Streaming über HTTP: Von der Erstellung bis zum Konsum](https://www.slideshare.net/slideshow/dynamic-adaptive-streaming-over-http-from-content-creation-to-consumption/14933566)

### MPEG-DASH Werkzeuge

- [DASHEncoder](https://github.com/slederer/DASHEncoder)
- [MP4Box](https://github.com/gpac/gpac/wiki/MP4Box)
- [DASH.js](https://github.com/Dash-Industry-Forum/dash.js)
- [DASH.js Google Group](https://groups.google.com/forum/#!forum/dashjs)

Beispiele für adaptives Streaming

- [ITEC – Dynamic Adaptive Streaming über HTTP](https://dash.itec.aau.at/dash-dataset/)
- [MPEG DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
