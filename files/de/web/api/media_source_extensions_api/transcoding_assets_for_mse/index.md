---
title: Transkodierung von Medien für Media Source Extensions
slug: Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{DefaultAPISidebar("Media Source Extensions")}}

Beim Arbeiten mit den Media Source Extensions müssen Sie wahrscheinlich Ihre Medien vorbereiten, bevor Sie sie streamen können. Dieser Artikel führt Sie durch die Anforderungen und zeigt Ihnen eine Werkzeugkette, die Sie verwenden können, um Ihre Medien entsprechend zu kodieren.

## Erste Schritte

1. Der erste und wichtigste Schritt besteht darin sicherzustellen, dass Ihre Dateien aus einem Container und Codec bestehen, die von den Browsern der Benutzer unterstützt werden.
2. Abhängig vom Codec müssen Sie möglicherweise die Datei fragmentieren, um die [ISO BMFF-Spezifikation](https://w3c.github.io/mse-byte-stream-format-isobmff/) einzuhalten.
3. (Optional) Wenn Sie sich entscheiden, Dynamic Adaptive Streaming über HTTP (DASH) für adaptives Bitraten-Streaming zu verwenden, müssen Sie Ihre Medien in mehrere Auflösungen transkodieren. Die meisten DASH-Clients erwarten eine entsprechende Media Presentation Description (MPD)-Manifestdatei, die typischerweise beim Generieren der Dateien mit mehreren Auflösungen erzeugt wird.

Im Folgenden werden wir alle diese Schritte behandeln, aber zuerst schauen wir uns eine Werkzeugkette an, die wir relativ einfach verwenden können.

### Beispieldateien

Falls Sie die hier aufgeführten Schritte befolgen möchten, aber keine Medien zum Experimentieren haben, können Sie sich den [Trailer zu Big Buck Bunny](https://web.archive.org/web/20161102172252id_/http://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_1080p.mov) herunterladen. Big Buck Bunny ist urheberrechtlich geschützt durch die Blender Foundation und lizenziert unter der [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) Lizenz. Im gesamten Tutorial sehen Sie den Dateinamen trailer_1080p.mov, der dem Download entspricht.

### Erforderliche Werkzeuge

Bei der Arbeit mit MSE sind die folgenden Werkzeuge ein Muss:

1. [ffmpeg](https://ffmpeg.org/) — Ein Kommandozeilenprogramm zur Transkodierung Ihrer Medien in die erforderlichen Formate. Sie können eine Version für Ihr System auf der [Download FFmpeg-Seite](https://ffmpeg.org/download.html) herunterladen. Entpacken Sie die ausführbare Datei aus der Archivdatei und fügen Sie ihren Speicherort zu Ihrer PATH-Anweisung hinzu. OSX-Benutzer können auch [homebrew](https://brew.sh/) verwenden, um ffmpeg zu installieren.
2. [Bento4](https://github.com/axiomatic-systems/Bento4) — Eine Sammlung von Kommandozeilenprogrammen zum Abrufen von Metadaten von Medien und zum Erstellen von Inhalten für DASH. Zum Installieren müssen Sie die Anwendung aus den bereitgestellten Projektdateien/Quellen selbst erstellen/kompilieren, abhängig von Ihrem Betriebssystem und Ihren Vorlieben. Weitere Informationen finden Sie in den [Build-Anweisungen](https://github.com/axiomatic-systems/Bento4#building) oder laden Sie die [vorkompilierte Datei](https://www.bento4.com/downloads/) herunter. Legen Sie die Inhalte des `bin`-Verzeichnisses an denselben Ort wie ffmpeg.
3. python2 — Bento4 nutzt es.

Installieren Sie diese erfolgreich, bevor Sie zum nächsten Schritt übergehen.

Beispieldateien sollten im `utils`-Verzeichnis von Bento4 platziert und dort bearbeitet werden.

> [!NOTE]
> Das vorkompilierte ffmpeg enthält aus Lizenzgründen nicht libfdk_aac. Bento4 verwendet dies standardmäßig, daher müssen Sie, falls erforderlich, ffmpeg selbst kompilieren. Wenn Sie es nicht benötigen, fügen Sie `--audio-codec=aac` zur `mp4-dash-encode.py`-Befehlszeile hinzu.

### Unterstützung von Containern und Codecs

Wie in [Abschnitt 1.1 der MSE-Spezifikation: Ziele](https://w3c.github.io/media-source/#goals) angegeben, erfordert MSE keine Unterstützung für ein bestimmtes Medienformat oder Codec. Obwohl dies theoretisch zutrifft, variiert die Browser-Unterstützung für bestimmte Container/Codec-Kombinationen.

Um zu überprüfen, ob der Browser einen bestimmten Container unterstützt, können Sie eine Zeichenkette des MIME-Typs an die Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) übergeben:

```js
MediaSource.isTypeSupported("audio/mp3"); // false
MediaSource.isTypeSupported("video/mp4"); // true
MediaSource.isTypeSupported('video/mp4; codecs="avc1.4D4028, mp4a.40.2"'); // true
```

Die Zeichenkette ist der MIME-Typ des Containers, gefolgt von einer optionalen Liste von Codecs. Während der MIME-Typ relativ einfach zu identifizieren ist, können wir die Codec-Zeichenkette mit dem [mp4info](https://nickdesaulniers.github.io/mp4info/)-Werkzeug erhalten.

Derzeit haben MP4-Container mit H.264-Video- und AAC-Audio-Codecs Unterstützung in allen modernen Browsern, während andere das nicht tun.

Um unsere Beispieldateien von einem QuickTime MOV-Container in einen MP4-Container zu konvertieren, können wir ffmpeg verwenden. Da der Audio-Codec im MOV-Container bereits AAC ist und der Video-Codec h.264 ist, können wir ffmpeg anweisen, keine Transkodierung durchzuführen. Stattdessen kopiert ffmpeg einfach die Audio- und Videospuren, ohne eine Transkodierung durchzuführen, was relativ schneller ist als eine Transkodierung.

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy bunny.mp4
```

### Überprüfung der Fragmentierung

Um MP4 korrekt zu streamen, muss das Medium das [ISO BMF](https://w3c.github.io/mse-byte-stream-format-isobmff/)-Format MP4 sein. Ohne ordnungsgemäße Fragmentierung ist keine gegebene MP4-Datei garantiert, mit MSE zu funktionieren. Dies bedeutet, dass Metadaten innerhalb des Containers verteilt und nicht zusammengefasst sind.

Um zu überprüfen, ob eine MP4-Datei ein korrekter MP4-Stream ist, können Sie erneut das [mp4info](https://nickdesaulniers.github.io/mp4info/)-Werkzeug verwenden, um die Atome einer MP4 aufzulisten.

> [!NOTE]
> Die fragmentierte Version ist aufgrund der zusätzlichen Metadaten, die über die Datei verteilt sind, etwas größer als das Original. Dies führt in der Regel zu einer Dateigrößensteigerung von 1 Prozent oder weniger.

### Fragmentierung

Wenn Sie ein Medium haben, das noch nicht im MP4-Format vorliegt, kann ffmpeg ein korrekt fragmentiertes MP4 während des Transkodierungsprozesses mit dem `-movflags frag_keyframe+empty_moov`-Befehlszeilenflag ausgeben:

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy -movflags frag_keyframe+empty_moov bunny_fragmented.mp4
```

Wenn Sie bereits ein MP4 haben, das aber nicht korrekt fragmentiert ist, können Sie ffmpeg erneut verwenden:

```bash
ffmpeg -i non_fragmented.mp4 -movflags frag_keyframe+empty_moov fragmented.mp4
```

In beiden Fällen kann es erforderlich sein, dass Chrome ein zusätzliches Movie-Flag gesetzt hat:

```bash
-movflags frag_keyframe+empty_moov+default_base_moof
```

Ein korrekt fragmentiertes MP4 ist alles, was Sie benötigen, um zu beginnen. Wenn Sie adaptives Bitraten-Streaming nutzen möchten, müssen Sie Codierungen in mehreren Auflösungen erstellen. Während MSE flexibel genug ist, um Ihre eigene Implementierung zu ermöglichen, wird dringend empfohlen, einen vorhandenen DASH-Client zu verwenden, da DASH ein gut spezifiziertes Anwendungsprotokoll ist.

### Erstellung von Inhalten für DASH

Angenommen, Sie haben ffmpeg und die Dienste von Bento4 über Ihren $PATH zugänglich, können Sie das Python-Skript `mp4-dash-encode.py` von Bento4 ausführen, um mehrere Codierungen Ihrer Inhalte in verschiedenen Auflösungen zu erstellen. Das Python-Skript `mp4-dash.py` von Bento4 kann dann verwendet werden, um die entsprechende MPD-Datei zu generieren, die von den Clients benötigt wird.

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

> **Hinweis:** `mp4-dash-encode.py` zeigt keine ffmpeg-Fehlermeldungen an. Sie können sie sehen, indem Sie die `-d`-Option angeben.

> [!NOTE]
> Wenn als Fehlermeldung `"Invalid duration specification for force_key_frames: 'expr:eq(mod(n"` angezeigt wird, bearbeiten Sie `mp4-dash-encode.py` und entfernen Sie zwei `"'"` aus `"-force_key_frames 'expr:eq(mod(n,%d),0)'"`.

## Zusammenfassung

Mit Ihrem korrekt kodierten Video und den generierten adaptiven Bitratenmedien sind Sie nun bereit, adaptives Bitraten-Streaming im Web mit DASH und MSE zu starten.
