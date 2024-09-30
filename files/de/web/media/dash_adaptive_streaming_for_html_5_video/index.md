---
title: DASH Adaptive Streaming für HTML 5 Video
slug: Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video
l10n:
  sourceCommit: 9f325923caffac2d0239773d4562303fd02ea30a
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Dynamic Adaptive Streaming über HTTP (DASH) ist ein adaptives Streaming-Protokoll. Das bedeutet, dass es ermöglicht, zwischen Bitraten eines Videostreams basierend auf der Netzwerkleistung zu wechseln, um die Wiedergabe eines Videos fortzusetzen.

## Browser-Unterstützung

Firefox 21 beinhaltet eine Implementierung von DASH für HTML WebM Video, die standardmäßig deaktiviert ist. Sie kann über "about:config" und die Einstellung "media.dash.enabled" aktiviert werden.

Firefox 23 entfernte die Unterstützung für DASH für HTML WebM Video. Diese wird durch eine Implementierung der [Media Source Extensions API](https://www.w3.org/TR/media-source/) ersetzt, die Unterstützung für DASH über JavaScript-Bibliotheken wie dash.js ermöglicht. Einzelheiten finden Sie in Fehler [778617](https://bugzil.la/778617).

## Verwendung von DASH - Serverseitig

Zuerst müssen Sie Ihr WebM-Video in eine DASH-Manifeste-Datei mit den dazugehörigen Videodateien in verschiedenen Bitraten umwandeln. Dafür benötigen Sie nur das FFmpeg-Programm von [ffmpeg.org](https://www.ffmpeg.org/) mit Unterstützung für libvpx und libvorbis für WebM-Video und -Audio, mindestens in der Version 2.5 (wahrscheinlich; getestet wurde mit 3.2.5).

### 1. Verwenden Sie Ihre vorhandene WebM-Datei, um eine Audiodatei und mehrere Videodateien zu erstellen

Zum Beispiel:

Die Datei **_in.video_** kann jeder Container sein, der mindestens einen Audio- und einen Videostream enthält, den FFmpeg dekodieren kann.

Erstellen Sie die Audiodatei mit:

```bash
ffmpeg -i in.video -vn -acodec libvorbis -ab 128k -dash 1 my_audio.webm
```

Erstellen Sie jede Video-Variante.

```bash
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1 -f webm -dash 1 \
-an -vf scale=160:90 -b:v 250k -dash 1 video_160x90_250k.webm
```

```bash
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=320:180 -b:v 500k -dash 1 video_320x180_500k.webm
```

```bash
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=640:360 -b:v 750k -dash 1 video_640x360_750k.webm
```

```bash
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm
```

```bash
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
```

Oder machen Sie alles in einem Befehl.

```bash
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 \
-g 150 -tile-columns 4 -frame-parallel 1 -f webm -dash 1 \
-an -vf scale=160:90 -b:v 250k -dash 1 video_160x90_250k.webm \
-an -vf scale=320:180 -b:v 500k -dash 1 video_320x180_500k.webm \
-an -vf scale=640:360 -b:v 750k -dash 1 video_640x360_750k.webm \
-an -vf scale=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm \
-an -vf scale=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
```

### 2. Erstellen Sie die Manifeste-Datei

```bash
ffmpeg \
  -f webm_dash_manifest -i video_160x90_250k.webm \
  -f webm_dash_manifest -i video_320x180_500k.webm \
  -f webm_dash_manifest -i video_640x360_750k.webm \
  -f webm_dash_manifest -i video_1280x720_1500k.webm \
  -f webm_dash_manifest -i my_audio.webm \
  -c copy \
  -map 0 -map 1 -map 2 -map 3 -map 4 \
  -f webm_dash_manifest \
  -adaptation_sets "id=0,streams=0,1,2,3 id=1,streams=4" \
  my_video_manifest.mpd
```

Die `-map` Argumente entsprechen den Eingabedateien in der Reihenfolge, in der sie angegeben sind; Sie sollten für jede Datei eines haben. Das `-adaptation_sets` Argument ordnet sie Anpassungsgruppen zu; zum Beispiel wird damit eine Gruppe (0) erstellt, die die Streams 0, 1, 2 und 3 (die Videos) enthält, und eine andere Gruppe (1), die nur den Stream 4, den Audiostream, enthält.

Legen Sie das Manifeste und die zugehörigen Videodateien auf Ihrem Webserver oder CDN ab. DASH funktioniert über HTTP, also, solange Ihr HTTP-Server Byte-Range-Anfragen unterstützt und so eingerichtet ist, `.mpd`-Dateien mit `mimetype="application/dash+xml"` auszuliefern, sind Sie bereit.

## Verwendung von DASH - Clientseitig

Sie sollten Ihre Webseite zuerst ändern, um auf die DASH-Manifeste zu verweisen, anstatt direkt auf eine bestimmte Videodatei:

```html
<video>
  <source src="movie.mpd" />
  <source src="movie.webm" />
  Your browser does not support the video tag.
</video>
```

Das war's! Wenn DASH vom Browser unterstützt wird, wird Ihr Video jetzt adaptiv gestreamt.

## Links

[WebM DASH-Spezifikation beim WebM-Projekt](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification)

[DASH Industry Forum](https://dashif.org/)

[Beschreibung des WebM-Projekts zur Erstellung von DASH-Dateien mit FFMPEG](https://wiki.webmproject.org/adaptive-streaming/instructions-to-playback-adaptive-webm-using-dash)
