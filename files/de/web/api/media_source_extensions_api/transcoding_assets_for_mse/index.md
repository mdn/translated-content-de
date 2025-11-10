---
title: Transkodierung von Medien für Media Source Extensions
slug: Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE
l10n:
  sourceCommit: dc9d517589ac7b74bc205f49492b0450dfdb78de
---

{{DefaultAPISidebar("Media Source Extensions")}}

Bei der Arbeit mit Media Source Extensions müssen Sie wahrscheinlich Ihre Medieninhalte vorbereiten, bevor Sie diese streamen können. Dieser Artikel führt Sie durch die Anforderungen und zeigt Ihnen eine Werkzeugkette, die Sie zum geeigneten Codieren Ihrer Inhalte verwenden können.

## Erste Schritte

1. Der erste und wichtigste Schritt besteht darin sicherzustellen, dass Ihre Dateien aus einem Container und einem Codec bestehen, die von den Browsern der Benutzer unterstützt werden.
2. Abhängig vom Codec müssen Sie möglicherweise die Datei fragmentieren, um der [ISO BMFF Spezifikation](https://w3c.github.io/mse-byte-stream-format-isobmff/) zu entsprechen.
3. (Optional) Wenn Sie sich entscheiden, Dynamic Adaptive Streaming über HTTP (DASH) für adaptives Bitraten-Streaming zu verwenden, müssen Sie Ihre Inhalte in mehrere Auflösungen transkodieren. Die meisten DASH-Clients erwarten eine entsprechende Media Presentation Description (MPD) Manifestdatei, die typischerweise beim Erstellen der Assets in mehreren Auflösungen generiert wird.

Im Folgenden behandeln wir alle diese Schritte, doch zunächst schauen wir uns eine Werkzeugkette an, die wir hierfür relativ einfach nutzen können.

### Beispielmedien

Wenn Sie die hier aufgeführten Schritte nachvollziehen möchten, aber keine Medien zum Experimentieren haben, können Sie den [Trailer zu Big Buck Bunny](https://web.archive.org/web/20161102172252id_/http://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_1080p.mov) herunterladen. Big Buck Bunny ist urheberrechtlich geschützt von der Blender Foundation und lizenziert unter der [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) Lizenz. Im gesamten Tutorial werden Sie den Dateinamen trailer_1080p.mov sehen, der dem Download entspricht.

### Benötigte Werkzeuge

Bei der Arbeit mit MSE sind die folgenden Werkzeuge unerlässlich:

1. [ffmpeg](https://ffmpeg.org/) — Ein Kommandozeilenprogramm zur Transkodierung Ihrer Medien in die erforderlichen Formate. Sie können eine Version für Ihr System auf der [Download FFmpeg Seite](https://ffmpeg.org/download.html) herunterladen. Extrahieren Sie die ausführbare Datei aus dem Archiv und fügen Sie deren Speicherort zu Ihrer PATH-Anweisung hinzu. macOS-Benutzer können auch [homebrew](https://brew.sh/) verwenden, um ffmpeg zu installieren.
2. [Bento4](https://github.com/axiomatic-systems/Bento4) — Eine Reihe von Kommandozeilenprogrammen zur Ermittlung von Metadaten von Medien und zur Erstellung von Inhalten für DASH. Zur Installation müssen Sie die Anwendung selbst aus den bereitgestellten Projektdaten/Quellcodes kompilieren, je nach Betriebssystem und Vorlieben. Siehe die [Build-Anweisungen](https://github.com/axiomatic-systems/Bento4#building) für weitere Details, oder laden Sie die [vorkompilierte Datei](https://www.bento4.com/downloads/) herunter. Platzieren Sie den Inhalt des `bin`-Verzeichnisses am gleichen Ort wie ffmpeg.
3. python2 — Bento4 verwendet dies.

Installieren Sie diese erfolgreich, bevor Sie zum nächsten Schritt übergehen.

Beispielmedien sollten im Bento4-`utils`-Verzeichnis platziert und hier bearbeitet werden.

> [!NOTE]
> Das vorkompilierte ffmpeg enthält aus lizenzrechtlichen Gründen nicht libfdk_aac. Bento4 verwendet dies standardmäßig, daher müssen Sie ffmpeg bei Bedarf selbst kompilieren. Wenn Sie es nicht benötigen, fügen Sie `--audio-codec=aac` zur `mp4-dash-encode.py` Kommandozeile hinzu.

### Container- und Codec-Unterstützung

Wie in [Abschnitt 1.1 der MSE Spezifikation: Ziele](https://w3c.github.io/media-source/#goals) angegeben, erfordert MSE keine Unterstützung für ein bestimmtes Medienformat oder Codec. Während dies theoretisch korrekt ist, variiert die Browserunterstützung für spezifische Container-/Codec-Kombinationen.

Um zu überprüfen, ob der Browser einen bestimmten Container unterstützt, können Sie einen String des MIME-Typs an die [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) Methode übergeben:

```js
MediaSource.isTypeSupported("audio/mp3"); // false
MediaSource.isTypeSupported("video/mp4"); // true
MediaSource.isTypeSupported('video/mp4; codecs="avc1.4D4028, mp4a.40.2"'); // true
```

Der String ist der MIME-Typ des Containers, optional gefolgt von einer Liste von Codecs. Während der MIME-Typ relativ einfach zu bestimmen ist, können wir den Codec-String mit dem [mp4info](https://nickdesaulniers.github.io/mp4info/) Dienstprogramm ermitteln.

Derzeit haben MP4-Container mit H.264-Video- und AAC-Audiocodecs in allen modernen Browsern Unterstützung, während andere dies nicht tun.

Um unser Beispielmedium von einem QuickTime MOV-Container in einen MP4-Container zu konvertieren, können wir ffmpeg verwenden. Da der Audiocodec im MOV-Container bereits AAC ist und der Videocodec h.264, können wir ffmpeg anweisen, keine Transkodierung durchzuführen. Stattdessen werden die Audio- und Videospuren nur kopiert, ohne eine Transkodierung durchzuführen, was relativ schneller ist, als eine Transkodierung durchzuführen.

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy bunny.mp4
```

### Fragmentierungsüberprüfung

Um MP4 richtig streamen zu können, benötigen wir das Asset im [ISO BMF](https://w3c.github.io/mse-byte-stream-format-isobmff/) Format. Ohne ordnungsgemäße Fragmentierung ist es nicht garantiert, dass eine gegebene MP4-Datei mit MSE funktioniert. Dies bedeutet, dass Metadaten innerhalb des Containers verteilt und nicht zusammengefasst sind.

Um zu überprüfen, ob eine MP4-Datei ein ordnungsgemäßer MP4-Stream ist, können Sie wieder das [mp4info](https://nickdesaulniers.github.io/mp4info/) Dienstprogramm verwenden, um die Atomstruktur einer MP4 aufzulisten.

> [!NOTE]
> Die fragmentierte Version ist aufgrund zusätzlicher Metadaten, die in der Datei verteilt sind, geringfügig größer als das Original. Normalerweise ist dies ein Dateigrößenzuwachs von 1 Prozent oder weniger.

### Fragmentierung

Wenn Sie ein Asset haben, das nicht bereits ein MP4 ist, kann ffmpeg ein richtig fragmentiertes MP4 während des Transcodierungsprozesses mit dem Kommandozeilenflag `-movflags frag_keyframe+empty_moov` erzeugen:

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy -movflags frag_keyframe+empty_moov bunny_fragmented.mp4
```

Wenn Sie bereits ein MP4 haben, das jedoch nicht richtig fragmentiert ist, können Sie erneut ffmpeg verwenden:

```bash
ffmpeg -i non_fragmented.mp4 -movflags frag_keyframe+empty_moov fragmented.mp4
```

In beiden Fällen kann es sein, dass Chrome ein zusätzliches Filmflag erfordert:

```bash
-movflags frag_keyframe+empty_moov+default_base_moof
```

Ein richtig fragmentiertes MP4 ist alles, was Sie benötigen, um loszulegen. Wenn Sie adaptives Bitraten-Streaming verwenden möchten, müssen Sie Codierungen in mehreren Auflösungen erstellen. Obwohl MSE flexibel genug ist, um eigene Implementierungen zu ermöglichen, wird dringend empfohlen, einen bestehenden DASH-Client zu verwenden, da DASH ein gut spezifiziertes Anwendungsprotokoll ist.

### Erstellen von Inhalten für DASH

Da Sie ffmpeg und die Dienstprogramme von Bento4 über Ihren $PATH verfügbar haben, können Sie das Python-Skript `mp4-dash-encode.py` von Bento4 ausführen, um mehrere Codierungen Ihrer Inhalte in verschiedenen Auflösungen zu erstellen. Das Python-Skript `mp4-dash.py` von Bento4 kann dann verwendet werden, um die entsprechende MPD-Datei zu erzeugen, die von Clients benötigt wird.

Führen Sie die folgenden Befehle aus:

```bash
python mp4-dash-encode.py -b 5 -v bunny_fragmented.mp4
python mp4-dash.py video_0*
```

Dies sollte die folgenden Dateien ausgeben:

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
> `mp4-dash-encode.py` zeigt keine ffmpeg-Fehlermeldungen an. Sie können diese sehen, indem Sie die `-d` Option angeben.

> [!NOTE]
> Wenn die Fehlermeldung `"Invalid duration specification for force_key_frames: 'expr:eq(mod(n"` angezeigt wird, ändern Sie `mp4-dash-encode.py` und entfernen Sie zwei `"'"` von `"-force_key_frames 'expr:eq(mod(n,%d),0)'"`.

## Zusammenfassung

Mit Ihrem korrekt kodierten Video und den generierten adaptiven Bitratenmedien sind Sie nun bereit, adaptives Bitraten-Streaming im Web mit DASH und MSE zu starten.
