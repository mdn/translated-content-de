---
title: Einrichten adaptiver Streaming-Medienquellen
slug: Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die in einem HTML-Medienelement konsumiert werden soll. Wie würden Sie das tun? Dieser Artikel erklärt, wie es geht, indem er zwei der gebräuchlichsten Formate betrachtet: MPEG-DASH und HLS (HTTP Live Streaming).

## Formate wählen

In Bezug auf adaptive Streaming-Formate gibt es viele zur Auswahl; wir haben uns entschieden, folgende zwei auszuwählen, da sie zusammen die meisten modernen Browser unterstützen können.

- MPEG-DASH
- HLS (HTTP Live Streaming)

Um Medien adaptiv zu streamen, müssen wir die Medien in Stücke aufteilen. Wir sind verpflichtet, mehrere verschiedene Qualitätsdateien über mehrere Zeitpunkte verteilt bereitzustellen. Je mehr Qualitäten und Zeitpunkte es gibt, desto "adaptiver" wird Ihr Stream sein, aber in der Regel möchten wir ein pragmatisches Gleichgewicht zwischen Größe, Kodierungszeit und Anpassungsfähigkeit finden.

Die gute Nachricht ist, dass wir, sobald wir unsere Medien im entsprechenden Format kodiert haben, größtenteils bereit sind. Für adaptives Streaming über HTTP sind keine speziellen serverseitigen Komponenten erforderlich.

Sowohl MPEG-DASH als auch HLS verwenden ein Playlist-Format, um die Bestandteile der Medien zu strukturieren, die die möglichen Streams bilden. Verschiedene Bitraten-Streams werden in Segmente unterteilt und in entsprechende Serverordner abgelegt — wir müssen unseren Mediaplayern einen Link zur Verfügung stellen, um Dateien oder Playlists aufzurufen, die den Namen und den Ort dieser Stream-Ordner angeben.

## MPEG-DASH Kodierung

MPEG-DASH ist eine adaptive Bitraten-Streaming-Technik, die das Streaming von Medieninhalten über das Internet ermöglicht, die von herkömmlichen HTTP-Webservern geliefert werden.

Eine Media Presentation Description (MPD) Datei wird verwendet, um die Informationen über die verschiedenen Streams und die damit verbundenen Bandbreiten zu halten. In Ihrem Video-Source (`src`) Attribut verweisen Sie auf die MPD anstelle der Mediendatei, wie Sie es bei nicht-adaptiven Medien tun würden.

Die MPD-Datei teilt dem Browser mit, wo sich die verschiedenen Stücke der Medien befinden. Sie enthält auch Metadaten wie `mimeType` und `codecs` sowie andere Details wie Byte-Bereiche - es handelt sich um ein XML-Dokument und wird in vielen Fällen für Sie generiert.

Es gibt einige Profile, die wir verwenden können. Wir werden uns das On-Demand-Profil für Video On Demand (VOD) und das LIVE-Profil ansehen.

Für Live-Streaming-Dienste ist das LIVE-Profil erforderlich. Die Stream-Umschaltmöglichkeiten sind bei den Profilen identisch.

Andere Gründe, das LIVE-Profil über On-Demand für VOD-Inhalte zu verwenden, können sein:

1. Ihr Client oder Server unterstützt keine [Range Requests](/de/docs/Web/HTTP/Range_requests)
2. Ihr Server kann Range Requests nicht effizient zwischenspeichern
3. Ihr Server kann Range Requests nicht effizient vorladen
4. Der SIDX\* ist groß und das Laden verlangsamt den Start etwas
5. Sie möchten die Originaldateien sowohl für DASH als auch für andere Lieferformen (wie Microsoft Smooth Streaming) als Übergangsstrategie verwenden
6. Sie können dieselben Mediendateien sowohl für die Live-Übertragung als auch für VOD in einer späteren Phase verwenden

\*SIDX oder SegmentIndexBox ist eine Struktur, die ein Segment beschreibt, indem sie dessen früheste Präsentationszeit und andere Metadaten angibt, und kann oft einen großen Teil der MPD-Datei ausmachen.

### On-Demand-Profil

Dieses Profil erlaubt das Umschalten zwischen Streams "auf Abruf" - das heißt, Sie müssen nur eine Reihe zusammenhängender Dateien bereitstellen und die Bandbreite für jede angeben, und die entsprechende Datei wird automatisch ausgewählt.

Hier ist ein Beispiel, das eine Audiotrack-Darstellung und vier separate Video-Darstellungen bereitstellt.

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

Sobald Sie Ihre MPD-Datei generiert haben, können Sie sie innerhalb des Video-Tags referenzieren.

```html
<video src="my.mpd" type="application/dash+xml"></video>
```

Es könnte ratsam sein, einen Rückfall für Browser bereitzustellen, die MPEG-DASH noch nicht unterstützen:

```html
<video>
  <source src="my.mpd" type="application/dash+xml" />
  <!-- fallback -->
  <source src="my.mp4" type="video/mp4" />
  <source src="my.webm" type="video/webm" />
</video>
```

### LIVE-Profil

Ein nützliches Softwaretool im Umgang mit MPEG-DASH ist [Dash Encoder](https://github.com/slederer/DASHEncoder). Dieses verwendet [MP4Box](https://github.com/gpac/gpac/wiki/mp4box-dash-opts), um Medien ins MPEG-DASH-Format zu kodieren.

> [!NOTE]
> Sie müssen vertraut mit make-Files und der Installation von Abhängigkeiten sein, um diese Software zum Laufen zu bringen.

> [!NOTE]
> Da MPEG-DASH-Dekodierung teilweise mit JavaScript erfolgt und MSE-Dateien häufig mit XHR abgerufen werden, denken Sie an die Same-Origin-Regeln.

> [!NOTE]
> Wenn Sie WebM verwenden, können Sie die in diesem Tutorial gezeigten Methoden verwenden [DASH Adaptive Streaming for HTML 5 Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video).

Sobald codiert, kann Ihre Dateistruktur wie folgt aussehen:

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

Die MPD-Datei teilt dem Browser mit, wo sich die verschiedenen Stücke der Medien befinden, sie enthält auch Metadaten wie `mimeType` und `codecs` und es gibt auch andere Details wie Byte-Bereiche darin. In der Regel werden diese Dateien für Sie generiert.

> [!NOTE]
> Sie können Ihre Audio- und Videostreams auch in separate Dateien aufteilen, welche dann je nach Bandbreite priorisiert und separat bereitgestellt werden können.

Sobald Sie Ihre MPD-Datei generiert haben, können Sie wie erwartet von innerhalb des {{ htmlelement("video") }} Elements darauf verweisen:

```html
<video src="my.mpd" type="application/dash+xml"></video>
```

Es könnte ratsam sein, einen Rückfall bereitzustellen:

```html
<video>
  <source src="my.mpd" type="application/dash+xml" />
  <!-- fallback -->
  <source src="my.mp4" type="video/mp4" />
  <source src="my.webm" type="video/webm" />
</video>
```

> [!NOTE]
> MPEG-DASH-Wiedergabe basiert auf [dash.js](https://github.com/Dash-Industry-Forum/dash.js/) und dem Browser-Support für [Media Source Extensions](https://w3c.github.io/media-source/), sehen Sie sich den neuesten [dash.js Referenz-Player](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html) an.

## HLS Kodierung

HTTP Live Streaming (HLS) ist ein HTTP-basiertes Medien-Streaming-Protokoll, das von Apple implementiert wurde. Es ist in iOS- und OSX-Plattformen integriert und funktioniert gut auf [mobile und Desktop Safari sowie den meisten Android-Geräten mit einigen Vorbehalten](https://jwplayer.com/blog/http-live-streaming/).

Medien werden in der Regel als MPEG-4 (H.264 Video und AAC Audio) kodiert und in einen MPEG-2-Transportstrom verpackt, der dann in Segmente unterteilt und als ein oder mehrere `.ts` Mediafiles gespeichert wird. Apple stellt Tools zur Verfügung, um Mediendateien ins entsprechende Format zu konvertieren.

### HLS Kodierungswerkzeuge

Es gibt eine Reihe nützlicher Tools für die HLS-Kodierung:

- Der Stream Segmenter — bereitgestellt von Apple für Mac-Plattformen — nimmt einen Medienstream aus einem lokalen Netzwerk und teilt Medien in gleich große Mediendateien auf, zusammen mit einer Indexdatei.
- Apple stellt auch einen File Segmenter für Mac bereit — der eine geeignet kodierte Datei nimmt, sie aufteilt und eine Indexdatei erstellt, ähnlich wie der Stream Segmenter.

> [!NOTE]
> Sie können mehr Details über diese Tools bei [Verwendung von HTTP Live Streaming](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/UsingHTTPLiveStreaming/UsingHTTPLiveStreaming.html) finden.

### Indexdateien (Playlists)

Die HLS-Indexdatei (ähnlich der `.mpd`-Datei von MPEG-DASH) enthält die Informationen darüber, wo sich alle Mediensegmente befinden, sowie andere Metadaten wie etwa die Anwendung der Bandbreite. Apple verwendet das `.m3u8` Format (eine Erweiterung seines `.m3u` Playlist-Formats) für Indexdateien — siehe unten ein Beispiel:

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
> Umfassende Informationen darüber, wie man Medien für das HLS-Format von Apple kodiert, finden Sie auf [Apples Entwicklerseiten](https://developer.apple.com/streaming/).

## Siehe auch

Weitere Ressourcen über adaptives Streaming.

### Allgemeine Informationen

- [Adaptive Streaming in the Field](https://www.streamingmedia.com/Articles/Editorial/Featured-Articles/Adaptive-Streaming-in-the-Field-73017.aspx)

### HLS Überblick und Referenzen

- [HTTP Live Streaming](https://developer.apple.com/streaming/)
- [Was ist HLS (HTTP-Live-Streaming)?](<https://www.streamingmedia.com/Articles/Editorial/What-Is-.../What-is-HLS-(HTTP-Live-Streaming)-78221.aspx>)
- [HTTP Live Streaming Übersicht](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/Introduction/Introduction.html)

### MPEG-DASH Überblick und Referenzen

- [Dynamic Adaptive Streaming over HTTP Dataset](https://www-itec.uni-klu.ac.at/bib/files/p89-lederer.pdf)
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
- [Dynamic Adaptive Streaming over HTTP: Von der Inhaltserstellung bis zum Konsum](https://www.slideshare.net/slideshow/dynamic-adaptive-streaming-over-http-from-content-creation-to-consumption/14933566)

### MPEG-DASH Werkzeuge

- [DASHEncoder](https://github.com/slederer/DASHEncoder)
- [MP4Box](https://github.com/gpac/gpac/wiki/MP4Box)
- [DASH.js Wiki](https://github.com/Dash-Industry-Forum/dash.js/wiki)
- [DASH.js Google Group](https://groups.google.com/forum/#!forum/dashjs)

Beispiele für adaptives Streaming

- [ITEC – Dynamic Adaptive Streaming over HTTP](https://dash.itec.aau.at/dash-dataset/)
- [MPEG DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
