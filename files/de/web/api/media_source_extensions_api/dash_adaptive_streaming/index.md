---
title: DASH Adaptive Streaming für HTML-Video
slug: Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming
l10n:
  sourceCommit: 226c823808b3ee9f2e48fd019ca92a7b51fc474f
---

Dynamic Adaptive Streaming over HTTP (DASH) ist ein adaptives Streaming-Protokoll. Dies bedeutet, dass es ermöglicht, einen Videostream basierend auf der Netzwerkleistung zwischen Bitraten zu wechseln, um die Videowiedergabe aufrechtzuerhalten.

Zuerst müssen Sie Ihr WebM-Video in ein DASH-Manifest mit den zugehörigen Videodateien in verschiedenen Bitraten konvertieren. Zunächst benötigen Sie nur das FFmpeg-Programm von [ffmpeg.org](https://www.ffmpeg.org/) mit Unterstützung für libvpx und libvorbis für WebM-Video und -Audio, mindestens Version 2.5 (wahrscheinlich; dies wurde mit 3.2.5 getestet).

Verwenden Sie zuerst Ihre bestehende WebM-Datei, um eine Audiodatei und mehrere Videodateien zu erstellen. Im folgenden Beispiel kann die Datei **_in.video_** ein beliebiger Container mit mindestens einem Audio- und einem Videostream sein, der von FFmpeg decodiert werden kann.

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

Dann erstellen Sie die Manifestdatei.

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

Die `-map` Argumente entsprechen den Eingabedateien in der Reihenfolge, in der sie angegeben sind; Sie sollten einen für jede Datei haben. Das `-adaptation_sets` Argument ordnet sie Anpassungsmengen zu; zum Beispiel erstellt dies einen Satz (0), der die Streams 0, 1, 2 und 3 (die Videos) enthält, und einen weiteren Satz (1), der nur den Stream 4, den Audiostream, enthält.

Legen Sie das Manifest und die zugehörigen Videodateien auf Ihrem Webserver oder CDN ab. DASH funktioniert über HTTP, also solange Ihr HTTP-Server Anfragen nach Bereichsbyte unterstützt und er so konfiguriert ist, `.mpd`-Dateien mit dem `Content-Type: application/dash+xml` zu servieren, sind Sie startklar.

Um diese `.mpd`-Datei korrekt mit Ihrem `<video>`-Element zu verbinden, benötigen Sie eine JavaScript-Bibliothek wie dash.js, da kein Browser native Unterstützung für DASH hat. Lesen Sie die [dash.js Schnellstartanleitung](https://dashif.org/dash.js/pages/quickstart/), um zu erfahren, wie Sie Ihre Seite dafür einrichten.

## Siehe auch

- [WebM DASH Spezifikation beim WebM-Projekt](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification)
- [DASH Industry Forum](https://dashif.org/)
- [Beschreibung des WebM-Projekts, wie man DASH-Dateien mit FFMPEG erstellt](https://wiki.webmproject.org/adaptive-streaming/instructions-to-playback-adaptive-webm-using-dash)
