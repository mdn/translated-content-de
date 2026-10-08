---
title: Mediendateien für Media Source Extensions transkodieren
slug: Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{DefaultAPISidebar("Media Source Extensions")}}

Wenn Sie mit Media Source Extensions arbeiten, müssen Sie Ihre Mediendateien wahrscheinlich aufbereiten, bevor Sie sie streamen können. Dieser Artikel erläutert die Anforderungen und zeigt eine Toolchain, mit der Sie Ihre Dateien passend kodieren können.

## Erste Schritte

1. Der erste und wichtigste Schritt besteht darin, sicherzustellen, dass Ihre Dateien einen Container und einen Codec verwenden, die von den Browsern Ihrer Nutzer unterstützt werden.
2. Je nach Codec müssen Sie die Datei möglicherweise fragmentieren, damit sie der [ISO-BMFF-Spezifikation](https://w3c.github.io/mse-byte-stream-format-isobmff/) entspricht.
3. (Optional) Wenn Sie Dynamic Adaptive Streaming over HTTP (DASH) für Streaming mit adaptiver Bitrate verwenden möchten, müssen Sie Ihre Mediendateien in mehreren Auflösungen transkodieren. Die meisten DASH-Clients erwarten eine zugehörige Media-Presentation-Description-Manifestdatei (MPD), die üblicherweise beim Erstellen der Dateien in den verschiedenen Auflösungen generiert wird.

Im Folgenden behandeln wir alle diese Schritte. Zunächst sehen wir uns jedoch eine Toolchain an, mit der sie sich recht einfach durchführen lassen.

### Beispielmedium

Wenn Sie die hier aufgeführten Schritte nachvollziehen möchten, aber kein Medium zum Experimentieren haben, können Sie den [Trailer von Big Buck Bunny](https://web.archive.org/web/20161102172252id_/http://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_1080p.mov) herunterladen. Das Urheberrecht an Big Buck Bunny liegt bei der Blender Foundation; das Werk ist unter der Lizenz [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) lizenziert. In diesem Tutorial wird durchgehend der Dateiname trailer_1080p.mov für diese heruntergeladene Datei verwendet.

### Benötigte Werkzeuge

Für die Arbeit mit MSE benötigen Sie folgende Werkzeuge:

1. [ffmpeg](https://ffmpeg.org/) — Ein Befehlszeilenprogramm, mit dem Sie Ihre Mediendateien in die erforderlichen Formate transkodieren können. Auf der Seite [FFmpeg herunterladen](https://ffmpeg.org/download.html) können Sie eine Version für Ihr System herunterladen. Extrahieren Sie die ausführbare Datei aus dem Archiv und fügen Sie ihren Speicherort zu Ihrer PATH-Umgebungsvariablen hinzu. Nutzer von macOS können ffmpeg auch mit [Homebrew](https://brew.sh/) installieren.
2. [Bento4](https://github.com/axiomatic-systems/Bento4) — Eine Sammlung von Befehlszeilenprogrammen zum Auslesen von Metadaten aus Mediendateien und zum Erstellen von Inhalten für DASH. Für die Installation müssen Sie die Anwendung je nach Betriebssystem und Ihren Präferenzen selbst aus den bereitgestellten Projekt- oder Quelldateien erstellen und kompilieren. Weitere Informationen finden Sie in der [Build-Anleitung](https://github.com/axiomatic-systems/Bento4#building). Alternativ können Sie eine [vorkompilierte Version](https://www.bento4.com/downloads/) herunterladen. Legen Sie den Inhalt des Verzeichnisses `bin` am selben Ort wie ffmpeg ab.
3. python2 — Wird von Bento4 verwendet.

Installieren Sie diese Werkzeuge, bevor Sie mit dem nächsten Schritt fortfahren.

Legen Sie das Beispielmedium im Verzeichnis `utils` von Bento4 ab und führen Sie die folgenden Schritte dort aus.

> [!NOTE]
> Die vorkompilierte Version von ffmpeg enthält libfdk_aac aus Lizenzgründen nicht. Bento4 verwendet diese Bibliothek standardmäßig. Kompilieren Sie ffmpeg daher bei Bedarf selbst. Wenn Sie libfdk_aac nicht benötigen, fügen Sie beim Aufruf von `mp4-dash-encode.py` die Option `--audio-codec=aac` hinzu.

### Unterstützung für Container und Codecs

Wie in [Abschnitt 1.1 der MSE-Spezifikation: Ziele](https://w3c.github.io/media-source/#goals) festgelegt, ist MSE so konzipiert, dass keine Unterstützung für ein bestimmtes Medienformat oder einen bestimmten Codec erforderlich ist. In der Praxis variiert jedoch die Browser-Unterstützung für bestimmte Kombinationen aus Container und Codec.

Um zu prüfen, ob der Browser einen bestimmten Container unterstützt, können Sie der Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) einen String mit dem MIME-Typ übergeben:

```js
MediaSource.isTypeSupported("audio/mp3"); // false
MediaSource.isTypeSupported("video/mp4"); // true
MediaSource.isTypeSupported('video/mp4; codecs="avc1.4D4028, mp4a.40.2"'); // true
```

Der String enthält den MIME-Typ des Containers, optional gefolgt von einer Liste der Codecs. Während sich der MIME-Typ recht einfach ermitteln lässt, können wir den Codec-String mit dem Dienstprogramm [mp4info](https://nickdesaulniers.github.io/mp4info/) bestimmen.

MP4-Container mit H.264-Video und AAC-Audio werden derzeit von allen modernen Browsern unterstützt; bei anderen Kombinationen ist das nicht der Fall.

Um unser Beispielmedium von einem QuickTime-MOV-Container in einen MP4-Container umzuwandeln, können wir ffmpeg verwenden. Da der Audio-Codec im MOV-Container bereits AAC und der Video-Codec bereits H.264 ist, können wir ffmpeg anweisen, die Daten nicht zu transkodieren. Stattdessen kopiert es lediglich die Audio- und Videospuren. Das geht vergleichsweise schneller als eine Transkodierung.

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy bunny.mp4
```

### Fragmentierung prüfen

Damit ein MP4-Stream ordnungsgemäß funktioniert, muss die Mediendatei eine MP4-Datei im [ISO-BMFF-Format](https://w3c.github.io/mse-byte-stream-format-isobmff/) sein. Ohne korrekte Fragmentierung ist nicht gewährleistet, dass eine MP4-Datei mit MSE funktioniert. Bei der Fragmentierung werden die Metadaten über den Container verteilt, statt an einer Stelle gebündelt zu sein.

Um zu prüfen, ob eine MP4-Datei als Stream geeignet ist, können Sie erneut das Dienstprogramm [mp4info](https://nickdesaulniers.github.io/mp4info/) verwenden und sich die Atome der MP4-Datei auflisten lassen.

> [!NOTE]
> Die fragmentierte Version ist etwas größer als das Original, weil zusätzliche Metadaten über die Datei verteilt sind. Die Dateigröße nimmt dadurch normalerweise um höchstens ein Prozent zu.

### Fragmentieren

Wenn Ihre Mediendatei noch keine MP4-Datei ist, kann ffmpeg beim Transkodieren mit dem Befehlszeilenparameter `-movflags frag_keyframe+empty_moov` eine korrekt fragmentierte MP4-Datei erzeugen:

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy -movflags frag_keyframe+empty_moov bunny_fragmented.mp4
```

Wenn Sie bereits eine MP4-Datei haben, diese aber nicht korrekt fragmentiert ist, können Sie ebenfalls ffmpeg verwenden:

```bash
ffmpeg -i non_fragmented.mp4 -movflags frag_keyframe+empty_moov fragmented.mp4
```

In beiden Fällen kann es für Chrome erforderlich sein, ein zusätzliches Movie-Flag zu setzen:

```bash
-movflags frag_keyframe+empty_moov+default_base_moof
```

Für den Einstieg benötigen Sie lediglich eine korrekt fragmentierte MP4-Datei. Wenn Sie Streaming mit adaptiver Bitrate einsetzen möchten, müssen Sie Versionen in mehreren Auflösungen kodieren. MSE ist zwar flexibel genug für eine eigene Implementierung, es empfiehlt sich jedoch nachdrücklich, einen vorhandenen DASH-Client zu verwenden, da DASH ein klar spezifiziertes Anwendungsprotokoll ist.

### Inhalte für DASH erstellen

Wenn ffmpeg und die Dienstprogramme von Bento4 über Ihre $PATH-Umgebungsvariable erreichbar sind, können Sie das Python-Skript `mp4-dash-encode.py` von Bento4 ausführen, um mehrere Versionen Ihrer Inhalte in verschiedenen Auflösungen zu kodieren. Anschließend können Sie mit dem Python-Skript `mp4-dash.py` von Bento4 die zugehörige MPD-Datei generieren, die Clients benötigen.

Führen Sie die folgenden Befehle aus:

```bash
python mp4-dash-encode.py -b 5 -v bunny_fragmented.mp4
python mp4-dash.py video_0*
```

Dabei sollten folgende Dateien erzeugt werden:

```plain
output
├── audio
│   └── und
├── stream.mpd
└── video
    ├── 1
    ├── 2
    ├── 3
    ├── 4
    └── 5
```

> [!NOTE]
> `mp4-dash-encode.py` zeigt Fehlermeldungen von ffmpeg nicht an. Mit der Option `-d` können Sie diese sichtbar machen.

> [!NOTE]
> Wenn `"Invalid duration specification for force_key_frames: 'expr:eq(mod(n"` als Fehlermeldung angezeigt wird, bearbeiten Sie `mp4-dash-encode.py` und entfernen Sie die beiden `"'"` aus `"-force_key_frames 'expr:eq(mod(n,%d),0)'"`.

## Zusammenfassung

Nachdem Ihr Video korrekt kodiert ist und die Mediendateien für adaptive Bitraten erstellt wurden, können Sie mit DASH und MSE auf Ihrer Website Streaming mit adaptiver Bitrate anbieten.
