---
title: DASH Adaptive Streaming für HTML 5 Video
slug: Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video
l10n:
  sourceCommit: 9f325923caffac2d0239773d4562303fd02ea30a
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Dynamic Adaptive Streaming over HTTP (DASH) ist ein adaptives Streaming-Protokoll. Dies bedeutet, dass es einem Videostream ermöglicht, basierend auf der Netzwerkperformance zwischen Bitraten zu wechseln, um das Abspielen eines Videos aufrechtzuerhalten.

## Browser-Kompatibilität

Firefox 21 beinhaltet eine Implementierung von DASH für HTML WebM Video, die standardmäßig deaktiviert ist. Sie kann über "about:config" und die Einstellung "media.dash.enabled" aktiviert werden.

Firefox 23 hat den Support für DASH für HTML WebM Video entfernt. Es wird durch eine Implementierung der [Media Source Extensions API](https://www.w3.org/TR/media-source/) ersetzt, die den Support für DASH über JavaScript-Bibliotheken wie dash.js ermöglichen wird. Siehe Bug [778617](https://bugzil.la/778617) für Details.

## Verwendung von DASH - Serverseitig

Zuerst müssen Sie Ihr WebM-Video in eine DASH-Manifestdatei mit den zugehörigen Videodateien in verschiedenen Bitraten konvertieren. Zuerst benötigen Sie nur das FFmpeg-Programm von [ffmpeg.org](https://www.ffmpeg.org/), mit libvpx- und libvorbis-Unterstützung für WebM-Video und -Audio, mindestens Version 2.5 (höchstwahrscheinlich; dies wurde mit Version 3.2.5 getestet).

### 1. Verwenden Sie Ihre vorhandene WebM-Datei, um eine Audiodatei und mehrere Videodateien zu erstellen

Beispielsweise:

Die Datei **_in.video_** kann ein beliebiger Container mit mindestens einem Audio- und einem Videostream sein, der von FFmpeg decodiert werden kann.

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

### 2. Erstellen Sie die Manifestdatei

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

Die `-map` Argumente entsprechen den Eingabedateien in der Reihenfolge, in der sie angegeben werden; Sie sollten eines für jede Datei haben. Das `-adaptation_sets` Argument weist sie Adapationssets zu; zum Beispiel wird hier ein Set (0) erstellt, das die Streams 0, 1, 2 und 3 (die Videos) enthält, und ein weiteres Set (1), das nur Stream 4, den Audiostream, enthält.

Legen Sie das Manifest und die zugehörigen Videodateien auf Ihrem Webserver oder CDN ab. DASH funktioniert über HTTP, sodass Ihre HTTP-Server Byte-Range-Anfragen unterstützen sollte und es so konfiguriert sein muss, `.mpd` Dateien mit `mimetype="application/dash+xml"` auszuliefern. Dann sind Sie einsatzbereit.

## Verwendung von DASH - Clientseitig

Sie sollten Ihre Webseite zuerst so modifizieren, dass sie auf das DASH-Manifest zeigt, anstatt direkt auf eine bestimmte Videodatei:

```html
<video>
  <source src="movie.mpd" />
  <source src="movie.webm" />
  Your browser does not support the video tag.
</video>
```

Das war's! Wenn DASH vom Browser unterstützt wird, wird Ihr Video nun adaptiv gestreamt.

## Links

[WebM DASH Spezifikation beim WebM Projekt](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification)

[DASH Industry Forum](https://dashif.org/)

[Beschreibung des WebM-Projekts zur Erstellung von DASH-Dateien mit FFMPEG](https://wiki.webmproject.org/adaptive-streaming/instructions-to-playback-adaptive-webm-using-dash)
