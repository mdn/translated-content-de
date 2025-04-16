---
title: DASH Adaptive Streaming für HTML-Video
slug: Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming
l10n:
  sourceCommit: a753bfc10d401d87f72220636166b560264fa1fa
---

{{DefaultAPISidebar("Media Source Extensions")}}

Dynamic Adaptive Streaming over HTTP (DASH) ist ein adaptives Streaming-Protokoll. Das bedeutet, dass es einem Videostream ermöglicht, je nach Netzwerkleistung zwischen Bitraten zu wechseln, um das Video abspielbar zu halten.

Zuerst müssen Sie Ihr WebM-Video in ein DASH-Manifest mit den zugehörigen Videodateien in verschiedenen Bitraten konvertieren. Zu Beginn benötigen Sie nur das Programm FFmpeg von [ffmpeg.org](https://www.ffmpeg.org/) mit Unterstützung für libvpx und libvorbis für WebM-Video und -Audio, mindestens Version 2.5 (wahrscheinlich; dies wurde mit Version 3.2.5 getestet).

Verwenden Sie zunächst Ihre vorhandene WebM-Datei, um eine Audiodatei und mehrere Videodateien zu erstellen. Im folgenden Beispiel kann die Datei **_in.video_** ein beliebiger Container mit mindestens einem Audio- und einem Videostream sein, die von FFmpeg dekodiert werden können.

Erstellen Sie das Audio mit:

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

Erstellen Sie dann die Manifestdatei.

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

Die `-map` Argumente entsprechen den Eingabedateien in der Reihenfolge, in der sie angegeben sind; Sie sollten eines für jede Datei haben. Das `-adaptation_sets` Argument weist diese in Adaptationssets zu; zum Beispiel wird ein Set (0) erstellt, das die Streams 0, 1, 2 und 3 (die Videos) enthält, und ein weiteres Set (1), das nur Stream 4 enthält, den Audiostream.

Legen Sie das Manifest und die zugehörigen Videodateien auf Ihren Webserver oder Content Delivery Network (CDN). DASH funktioniert über HTTP, daher sind Sie startbereit, solange Ihr HTTP-Server Bereichsanfragen für Bytes unterstützt und so eingerichtet ist, dass er `.mpd`-Dateien mit dem `Content-Type: application/dash+xml` bereitstellt.

Um diese `.mpd`-Datei korrekt mit Ihrem `<video>`-Element zu verknüpfen, benötigen Sie eine JavaScript-Bibliothek wie dash.js, da kein Browser native Unterstützung für DASH bietet. Lesen Sie das [dash.js Quickstart](https://dashif.org/dash.js/pages/quickstart/), um zu erfahren, wie Sie Ihre Seite dafür einrichten.

## Siehe auch

- [WebM DASH-Spezifikation im WebM-Projekt](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification)
- [DASH Industry Forum](https://dashif.org/)
- [WebM-Projektbeschreibung, wie man DASH-Dateien mit FFMPEG erstellt](https://wiki.webmproject.org/adaptive-streaming/instructions-to-playback-adaptive-webm-using-dash)
