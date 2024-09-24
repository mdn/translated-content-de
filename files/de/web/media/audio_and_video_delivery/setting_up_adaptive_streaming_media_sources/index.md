---
title: Einrichten adaptiver Streaming-Medienquellen
slug: Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die in einem HTML-Medienelement verwendet werden soll. Wie würden Sie das tun? Dieser Artikel erklärt dies anhand zweier der gebräuchlichsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).

## Formate wählen

Es gibt viele adaptive Streaming-Formate zur Auswahl; wir haben uns für die folgenden zwei entschieden, da wir damit die meisten modernen Browser unterstützen können.

- MPEG-DASH
- HLS (HTTP Live Streaming)

Um Medien adaptiv zu streamen, müssen wir die Medien in Stücke aufteilen. Es ist notwendig, mehrere verschiedene Qualitätsdateien bereitzustellen, die über mehrere Zeitpunkte verteilt sind. Je mehr Qualitäten und Zeitpunkte es gibt, desto "adaptiver" ist Ihr Stream. In der Regel möchten wir jedoch ein pragmatisches Gleichgewicht zwischen Größe, Kodierungszeit und Adaptivität finden.

Die gute Nachricht ist, dass wir, sobald wir unsere Medien im geeigneten Format kodiert haben, im Grunde startklar sind. Für adaptives Streaming über HTTP sind keine speziellen serverseitigen Komponenten erforderlich.

Sowohl MPEG-DASH als auch HLS verwenden ein Playlist-Format, um die Medienkomponenten zu strukturieren, aus denen die möglichen Streams bestehen. Verschiedene Bitraten-Streams werden in Segmente unterteilt und in geeignete Serverordner gelegt — wir müssen unseren Mediaplayern einen Link zur Verfügung stellen, um Dateien oder Playlists mit den Namen und Standorten dieser Stream-Ordner nachzuschlagen.

## MPEG-DASH Kodierung

MPEG-DASH ist eine Technik für adaptives Bitraten-Streaming, die es ermöglicht, Mediendaten über das Internet von konventionellen HTTP-Webservern zu streamen.

Eine Media Presentation Description (MPD)-Datei wird verwendet, um Informationen über die verschiedenen Streams und die damit verbundenen Bandbreiten zu speichern. Im Quellattribut (src) des Videos verweisen Sie auf die MPD statt auf die Mediendatei, wie Sie es bei nicht-adaptiven Medien tun würden.

Die MPD-Datei informiert den Browser darüber, wo sich die verschiedenen Mediendateien befinden. Sie enthält auch Metadaten wie mimeType und codecs, und es gibt weitere Details wie Byte-Bereiche — es handelt sich um ein XML-Dokument, das in vielen Fällen für Sie generiert wird.

Es gibt einige Profile, die wir verwenden können. Wir werden uns das Ondemand-Profil für Video-on-Demand (VOD) und das LIVE-Profil ansehen.

Für das Streaming von Live-Diensten ist das LIVE-Profil erforderlich. Die Fähigkeit zum Umschalten von Streams ist zwischen den Profilen identisch.

Andere Gründe, das LIVE-Profil gegenüber dem Ondemand-Profil für VOD-Inhalte zu verwenden, können sein:

1. Ihr Client oder Server unterstützt [Range-Anfragen](/de/docs/Web/HTTP/Range_requests) nicht
2. Ihr Server kann Range-Anfragen nicht effizient zwischenspeichern
3. Ihr Server kann Range-Anfragen nicht effizient vorabrufen
4. Das SIDX\* ist groß und das Laden verzögert den Start etwas
5. Sie möchten die Originaldateien sowohl für DASH als auch für andere Lieferformen (wie Microsoft Smooth Streaming) als Übergangsstrategie verwenden
6. Sie können dieselben Mediendateien sowohl für die Live-Übertragung als auch für VOD zu einem späteren Zeitpunkt verwenden

\*SIDX oder SegmentIndexBox ist eine Struktur, die ein Segment beschreibt, indem sie seine früheste Präsentationszeit und andere Metadaten angibt und oft einen großen Teil der MPD-Datei ausmacht.

### Ondemand-Profil

Dieses Profil ermöglicht das Umschalten zwischen Streams "on demand" - das heißt, Sie müssen nur eine Reihe zusammenhängender Dateien bereitstellen und die Bandbreite für jede angeben, und die passende Datei wird automatisch ausgewählt.

Hier ist ein einfaches Beispiel, das eine Audioträgerdarstellung und vier separate Videodarstellungen bereitstellt.

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

Sobald Sie Ihre MPD-Datei erstellt haben, können Sie sie im Video-Tag referenzieren.

```html
<video src="my.mpd" type="application/dash+xml"></video>
```

Es könnte klug sein, einen Fallback für Browser bereitzustellen, die MPEG-DASH noch nicht unterstützen:

```html
<video>
  <source src="my.mpd" type="application/dash+xml" />
  <!-- Fallback -->
  <source src="my.mp4" type="video/mp4" />
  <source src="my.webm" type="video/webm" />
</video>
```

### LIVE-Profil

Ein nützliches Softwaretool bei der Arbeit mit MPEG-DASH ist [Dash Encoder](https://github.com/slederer/DASHEncoder). Dieses nutzt [MP4Box](https://github.com/gpac/gpac/wiki/mp4box-dash-opts) zur Kodierung von Medien in das MPEG-DASH-Format.

> [!NOTE]
> Sie sollten sich mit make-Files und dem Installieren von Abhängigkeiten wohlfühlen, um diese Software zum Laufen zu bringen.

> [!NOTE]
> Da die MPEG-DASH-Dekodierung teilweise mit JavaScript erfolgt und MSE-Dateien oft mit XHR abgerufen werden, beachten Sie die gleiche Herkunftsregel.

> [!NOTE]
> Wenn Sie WebM verwenden, können Sie die in diesem Tutorial gezeigten Methoden [DASH Adaptive Streaming for HTML 5 Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video) nutzen.

Sobald Ihre Dateien kodiert sind, kann Ihre Ordnerstruktur wie folgt aussehen:

```plain
Playliste ->                /segments/news.mp4.mpd

Hauptsegmentordner ->       /segments/main/

100 Kbps Segmentordner ->   /segments/main/news100 enthält (1.m4s, 2.m4s, 3.m4s … )

200 Kbps Segmentordner ->   /segments/main/news200 enthält (1.m4s, 2.m4s, 3.m4s … )

300 Kbps Segmentordner ->   /segments/main/news300 enthält (1.m4s, 2.m4s, 3.m4s … )

400 Kbps Segmentordner ->   /segments/main/news400 enthält (1.m4s, 2.m4s, 3.m4s … )
```

Die Playliste oder `.mpd`-Datei enthält XML, das ausdrücklich angibt, wo sich die verschiedenen Bitraten-Dateien befinden.

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

Die MPD-Datei informiert den Browser darüber, wo sich die verschiedenen Mediendateien befinden. Sie enthält auch Metadaten wie mimeType und codecs, und es gibt weitere Details wie Byte-Bereiche. In der Regel werden diese Dateien für Sie generiert.

> [!NOTE]
> Sie können Ihre Audio- und Videostreams auch in separate Dateien aufteilen, die dann je nach Bandbreite priorisiert und separat bereitgestellt werden können.

Sobald Sie Ihre MPD-Datei erstellt haben, können Sie sie wie erwartet im {{ htmlelement("video") }}-Element referenzieren:

```html
<video src="my.mpd" type="application/dash+xml"></video>
```

Es könnte klug sein, einen Fallback bereitzustellen:

```html
<video>
  <source src="my.mpd" type="application/dash+xml" />
  <!-- Fallback -->
  <source src="my.mp4" type="video/mp4" />
  <source src="my.webm" type="video/webm" />
</video>
```

> [!NOTE]
> Die Wiedergabe von MPEG-DASH hängt von [dash.js](https://github.com/Dash-Industry-Forum/dash.js/) und der Unterstützung von [Media Source Extensions](https://w3c.github.io/media-source) im Browser ab, siehe den neuesten [dash.js Referenzplayer](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html).

## HLS Kodierung

HTTP Live Streaming (HLS) ist ein HTTP-basiertes Medien-Streaming-Protokoll, das von Apple implementiert wurde. Es ist in die iOS- und OSX-Plattformen integriert und funktioniert gut auf [mobilen und Desktop-Safari- sowie den meisten Android-Geräten mit einigen Einschränkungen](https://jwplayer.com/blog/http-live-streaming/).

Medien werden in der Regel als MPEG-4 (H.264 Video und AAC Audio) kodiert und in einem MPEG-2-Transportstrom verpackt, der dann in Segmente unterteilt und als eine oder mehrere `.ts`-Mediendateien gespeichert wird. Apple bietet Tools an, um Mediendateien in das entsprechende Format zu konvertieren.

### HLS Kodierungswerkzeuge

Es gibt eine Reihe nützlicher Werkzeuge zur HLS-Kodierung

- Der Stream Segmenter — bereitgestellt von Apple für Mac-Plattformen — nimmt einen Medienstrom aus einem lokalen Netzwerk und teilt die Medien in gleich große Mediendateien zusammen mit einer Indexdatei auf.
- Apple bietet auch einen File Segmenter für Mac an — dieser nimmt eine entsprechend kodierte Datei, teilt sie auf und erstellt eine Indexdatei, ähnlich wie der Stream Segmenter.

> [!NOTE]
> Weitere Details zu diesen Tools finden Sie unter [Verwendung von HTTP Live Streaming](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/UsingHTTPLiveStreaming/UsingHTTPLiveStreaming.html).

### Indexdateien (Playlists)

Die HLS-Indexdatei (ähnlich der `.mpd`-Datei von MPEG-DASH) enthält Informationen darüber, wo sich alle Mediensegmente befinden, sowie andere Metadaten wie die Bandbreitenanwendung. Apple verwendet für Indexdateien das `.m3u8`-Format (eine Erweiterung seines `.m3u`-Playlist-Formats) — siehe unten für ein Beispiel:

```plain
#EXT-X-VERSION:3
#EXTM3U
#EXT-X-TARGETDURATION:10
#EXT-X-MEDIA-SEQUENCE:1

# Alte Ganzzahl-Dauer; vermeiden Sie diese bei neueren Clients.
#EXTINF:10,
http://media.example.com/segment0.ts

# Neue Gleitkomma-Dauer; verwenden Sie diese für moderne Clients.
#EXTINF:10.0,
http://media.example.com/segment1.ts
#EXTINF:9.5,
http://media.example.com/segment2.ts
#EXT-X-ENDLIST
```

> [!NOTE]
> Umfassende Informationen dazu, wie Sie Medien für das HLS-Format von Apple kodieren, finden Sie auf den [Entwicklerseiten von Apple](https://developer.apple.com/streaming/).

## Siehe auch

Weitere Ressourcen zum adaptiven Streaming.

### Allgemeine Informationen

- [Adaptive Streaming in der Praxis](https://www.streamingmedia.com/Articles/Editorial/Featured-Articles/Adaptive-Streaming-in-the-Field-73017.aspx)

### HLS Überblick und Referenzen

- [HTTP Live Streaming](https://developer.apple.com/streaming/)
- [Was ist HLS (HTTP-Live-Streaming)?](<https://www.streamingmedia.com/Articles/Editorial/What-Is-.../What-is-HLS-(HTTP-Live-Streaming)-78221.aspx>)
- [HTTP Live Streaming Überblick](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/Introduction/Introduction.html)

### MPEG-DASH Überblick und Referenzen

- [Dynamic Adaptive Streaming über HTTP Dataset](https://www-itec.uni-klu.ac.at/bib/files/p89-lederer.pdf)
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
- [Dynamic Adaptive Streaming über HTTP: Von der Inhaltserstellung bis zum Konsum](https://www.slideshare.net/slideshow/dynamic-adaptive-streaming-over-http-from-content-creation-to-consumption/14933566)

### MPEG-DASH Werkzeuge

- [DASHEncoder](https://github.com/slederer/DASHEncoder)
- [MP4Box](https://github.com/gpac/gpac/wiki/MP4Box)
- [DASH.js Wiki](https://github.com/Dash-Industry-Forum/dash.js/wiki)
- [DASH.js Google-Gruppe](https://groups.google.com/forum/#!forum/dashjs)

Beispiele für adaptives Streaming

- [ITEC – Dynamic Adaptive Streaming über HTTP](https://dash.itec.aau.at/dash-dataset/)
- [MPEG DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
