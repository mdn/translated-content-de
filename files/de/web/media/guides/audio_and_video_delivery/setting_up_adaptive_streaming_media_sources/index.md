---
title: Einrichten adaptiver Streaming-Medienquellen
slug: Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

Angenommen, Sie wollen eine adaptive Streaming-Medienquelle auf einem Server einrichten, um sie innerhalb eines HTML-Medienelements zu nutzen. Wie würden Sie das tun? Dieser Artikel erklärt es anhand zweier der häufigsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).

## Formate auswählen

In Bezug auf adaptive Streaming-Formate gibt es viele zur Auswahl; wir haben uns entschieden, die folgenden beiden zu wählen, da sie die meisten modernen Browser unterstützen können.

- MPEG-DASH
- HLS (HTTP Live Streaming)

Um Medien adaptiv zu streamen, müssen wir die Medien in Stücke aufteilen. Wir müssen mehrere verschiedene Qualitätsdateien bereitstellen, die über mehrere Zeitpunkte verteilt sind. Je mehr Qualitäten und Zeitpunkte es gibt, desto 'adaptiver' wird Ihr Stream sein, aber wir wollen in der Regel ein pragmatisches Gleichgewicht zwischen Größe, Codierungszeit und Adaptivität finden.

Die gute Nachricht ist, dass, sobald wir unsere Medien im entsprechenden Format kodiert haben, wir bereit sind loszulegen. Für adaptives Streaming über HTTP sind keine speziellen serverseitigen Komponenten erforderlich.

Sowohl MPEG-DASH als auch HLS verwenden ein Playlist-Format, um die Einzelstücke der Medien zu strukturieren, die die möglichen Streams bilden. Verschiedene Bitraten-Streams werden in Segmente aufgeteilt und in entsprechende Serverordner gestellt — wir müssen unseren Mediaplayern einen Link zur Verfügung stellen, um Dateien oder Playlists nachzuschlagen, die den Namen und Standort dieser Stream-Ordner angeben.

## MPEG-DASH Kodierung

MPEG-DASH ist eine adaptive Bitrate-Streaming-Technik, die das Streaming von Medieninhalten über das Internet ermöglicht, die von herkömmlichen HTTP-Webservern geliefert werden.

Eine Media Presentation Description (MPD) Datei wird verwendet, um die Informationen zu den verschiedenen Streams und den damit verbundenen Bandbreiten zu speichern. In Ihrem Video-Quellattribut (src) verweisen Sie auf die MPD anstelle der Mediendatei, wie Sie es bei nicht-adaptiven Medien tun würden.

Die MPD-Datei sagt dem Browser, wo die verschiedenen Medienstücke zu finden sind, sie enthält auch Metadaten wie mimeType und Codecs, und es gibt dort weitere Details wie Byte-Bereiche - es ist ein XML-Dokument und in vielen Fällen wird es für Sie generiert.

Es gibt einige Profile, die wir verwenden können. Wir werden uns das Ondemand-Profil für Video on Demand (VOD) und das LIVE-Profil ansehen.

Für Live-Streaming-Dienste ist das LIVE-Profil eine Anforderung. Die Stream-Switching-Fähigkeiten sind bei beiden Profilen identisch.

Weitere Gründe, das LIVE-Profil gegenüber Ondemand für VOD-Inhalte zu verwenden, könnten sein:

1. Ihr Client oder Server unterstützt keine [Range Requests](/de/docs/Web/HTTP/Guides/Range_requests)
2. Ihr Server kann Range Requests nicht effizient zwischenspeichern
3. Ihr Server kann Range Requests nicht effizient vorab abfragen
4. Der SIDX\* ist groß und das Laden vorab verlangsamt den Start ein wenig
5. Sie möchten die Originaldateien sowohl für DASH als auch für andere Lieferformen (wie Microsoft Smooth Streaming) als Übergangsstrategie verwenden
6. Sie können die gleichen Mediendateien sowohl für die Live-Übertragung als auch später für VOD verwenden

\*SIDX oder SegmentIndexBox ist eine Struktur, die ein Segment beschreibt, indem sie dessen früheste Präsentationszeit und andere Metadaten angibt und häufig einen großen Teil der MPD-Datei ausmacht.

### Ondemand-Profil

Dieses Profil ermöglicht das Umschalten zwischen Streams 'auf Abruf' - das heißt, Sie müssen nur eine Reihe aufeinanderfolgender Dateien bereitstellen und die Bandbreite für jede angeben, und die entsprechende Datei wird automatisch ausgewählt.

Hier ist ein Beispiel, das eine Audiotrack-Darstellung und vier separate Videodarstellungen bietet.

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

Es könnte ratsam sein, einen Fallback für Browser bereitzustellen, die MPEG-DASH noch nicht unterstützen:

```html
<video>
  <source src="my.mpd" type="application/dash+xml" />
  <!-- fallback -->
  <source src="my.mp4" type="video/mp4" />
  <source src="my.webm" type="video/webm" />
</video>
```

### LIVE-Profil

Ein nützliches Software-Tool beim Umgang mit MPEG-DASH ist [Dash Encoder](https://github.com/slederer/DASHEncoder). Dieses verwendet [MP4Box](https://github.com/gpac/gpac/wiki/mp4box-dash-opts), um Medien im MPEG-DASH-Format zu kodieren.

> [!NOTE]
> Sie müssen sich mit Make-Dateien und der Installation von Abhängigkeiten wohlfühlen, um diese Software zum Laufen zu bringen.

> [!NOTE]
> Da die MPEG-DASH-Decodierung teilweise mit JavaScript erfolgt und MSE-Dateien häufig über XHR abgerufen werden, sollten Sie die Same-Origin-Richtlinien beachten.

> [!NOTE]
> Wenn Sie WebM verwenden, können Sie die Methoden in diesem Tutorial verwenden: [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming).

Sobald die Kodierung abgeschlossen ist, könnte Ihre Dateistruktur wie folgt aussehen:

```plain
play list ->                /segments/news.mp4.mpd

main segment folder ->      /segments/main/

100 Kbps segment folder ->  /segments/main/news100 contains (1.m4s, 2.m4s, 3.m4s … )

200 Kbps segment folder ->  /segments/main/news200 contains (1.m4s, 2.m4s, 3.m4s … )

300 Kbps segment folder ->  /segments/main/news300 contains (1.m4s, 2.m4s, 3.m4s … )

400 Kbps segment folder ->  /segments/main/news400 contains (1.m4s, 2.m4s, 3.m4s … )
```

Die Playlist- oder `.mpd`-Datei enthält XML, das explizit angibt, wo alle verschiedenen Bitraten-Dateien sich befinden.

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

Die MPD-Datei sagt dem Browser, wo die verschiedenen Medienstücke sich befinden; sie enthält auch Metadaten wie mimeType und Codecs, sowie weitere Details wie Byte-Bereiche. Diese Dateien werden in der Regel für Sie generiert.

> [!NOTE]
> Sie können auch Ihre Audio- und Videostreams in separate Dateien aufteilen, die dann basierend auf der Bandbreite priorisiert und getrennt geliefert werden können.

Sobald Sie Ihre MPD-Datei erstellt haben, können Sie sie wie erwartet im {{ htmlelement("video") }}-Element referenzieren:

```html
<video src="my.mpd" type="application/dash+xml"></video>
```

Es könnte ratsam sein, einen Fallback bereitzustellen:

```html
<video>
  <source src="my.mpd" type="application/dash+xml" />
  <!-- fallback -->
  <source src="my.mp4" type="video/mp4" />
  <source src="my.webm" type="video/webm" />
</video>
```

> [!NOTE]
> MPEG-DASH-Wiedergabe erfordert [dash.js](https://github.com/Dash-Industry-Forum/dash.js/) und Browserunterstützung für [Media Source Extensions](https://w3c.github.io/media-source/), siehe den neuesten [dash.js Referenzplayer](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html).

## HLS Kodierung

HTTP Live Streaming (HLS) ist ein HTTP-basiertes Medien-Streaming-Protokoll, das von Apple implementiert wurde. Es ist in iOS- und OSX-Plattformen integriert und funktioniert gut auf [mobilen und Desktop-Safari und den meisten Android-Geräten](https://caniuse.com/?search=hls).

Medien werden normalerweise als MPEG-4 (H.264 Video und AAC Audio) kodiert und zu einem MPEG-2 Transportstream verpackt, der dann in Segmente unterteilt und als eine oder mehrere `.ts`-Mediendateien gespeichert wird. Apple bietet Tools zum Konvertieren von Mediendateien in das entsprechende Format an.

### HLS Kodierungstools

Es gibt eine Reihe nützlicher Tools zur HLS Kodierung:

- Der Stream Segmenter — von Apple für Mac-Plattformen bereitgestellt — nimmt einen Medienstream aus einem lokalen Netzwerk und teilt die Medien in gleich große Mediendateien zusammen mit einer Indexdatei auf.
- Apple stellt auch einen File Segmenter für Mac zur Verfügung — dieser nimmt eine entsprechend kodierte Datei, teilt sie auf und erstellt eine Indexdatei, ähnlich wie der Stream Segmenter.

> [!NOTE]
> Weitere Details zu diesen Tools finden Sie unter [Using HTTP Live Streaming](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/UsingHTTPLiveStreaming/UsingHTTPLiveStreaming.html).

### Indexdateien (Playlists)

Die HLS-Indexdatei (ähnlich wie MPEG-DASHs `.mpd`-Datei) enthält die Informationen darüber, wo sich alle Mediensegmente befinden, sowie andere Metadaten wie Bandbreitenanwendung. Apple verwendet für Indexdateien das `.m3u8`-Format (eine Erweiterung seines `.m3u`-Playlist-Formats) — siehe unten für ein Beispiel:

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
> Umfassende Informationen darüber, wie man Medien für Apples HLS-Format kodiert, finden Sie auf [Apples Entwicklerseiten](https://developer.apple.com/streaming/).

## Siehe auch

Weitere Ressourcen zum Thema adaptives Streaming.

### Allgemeine Informationen

- [Adaptive Streaming in the Field](https://www.streamingmedia.com/Articles/Editorial/Featured-Articles/Adaptive-Streaming-in-the-Field-73017.aspx)

### HLS-Übersicht und Referenzen

- [HTTP Live Streaming](https://developer.apple.com/streaming/)
- [Was ist HLS (HTTP-Live-Streaming)?](<https://www.streamingmedia.com/Articles/Editorial/What-Is-.../What-is-HLS-(HTTP-Live-Streaming)-78221.aspx>)
- [HTTP Live Streaming Übersicht](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/Introduction/Introduction.html)

### MPEG-DASH-Übersicht und Referenzen

- [Dynamic Adaptive Streaming over HTTP Dataset](https://www-itec.uni-klu.ac.at/bib/files/p89-lederer.pdf)
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
- [Dynamic Adaptive Streaming over HTTP: From Content Creation to Consumption](https://www.slideshare.net/slideshow/dynamic-adaptive-streaming-over-http-from-content-creation-to-consumption/14933566)

### MPEG-DASH-Tools

- [DASHEncoder](https://github.com/slederer/DASHEncoder)
- [MP4Box](https://github.com/gpac/gpac/wiki/MP4Box)
- [DASH.js](https://github.com/Dash-Industry-Forum/dash.js)
- [DASH.js Google Group](https://groups.google.com/forum/#!forum/dashjs)

Adaptive Streaming Beispiele

- [ITEC – Dynamic Adaptive Streaming over HTTP](https://dash.itec.aau.at/dash-dataset/)
- [MPEG DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
