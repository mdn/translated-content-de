---
title: Transkodierung von Assets für Media Source Extensions
slug: Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("Media Source Extensions")}}

Wenn Sie mit Media Source Extensions arbeiten, ist es wahrscheinlich, dass Sie Ihre Assets vorbereiten müssen, bevor Sie sie streamen können. Dieser Artikel führt Sie durch die Anforderungen und zeigt Ihnen eine Toolchain, mit der Sie Ihre Assets entsprechend kodieren können.

## Erste Schritte

1. Der erste und wichtigste Schritt ist sicherzustellen, dass Ihre Dateien aus einem Container und einem Codec bestehen, die von den Browsern der Nutzer unterstützt werden.
2. Abhängig vom Codec müssen Sie möglicherweise die Datei fragmentieren, um der [ISO BMFF Spezifikation](https://w3c.github.io/mse-byte-stream-format-isobmff/) zu entsprechen.
3. (Optional) Wenn Sie sich für das Dynamic Adaptive Streaming über HTTP (DASH) für adaptives Bitraten-Streaming entscheiden, müssen Sie Ihre Assets in mehreren Auflösungen transkodieren. Die meisten DASH-Clients erwarten eine entsprechende Media Presentation Description (MPD) Manifestdatei, die typischerweise beim Erstellen der Asset-Dateien in mehreren Auflösungen generiert wird.

Im Folgenden behandeln wir all diese Schritte, aber zunächst schauen wir uns eine Toolchain an, die uns dies relativ einfach ermöglicht.

### Beispielmedien

Wenn Sie die hier aufgeführten Schritte befolgen möchten, aber keine Medien zum Experimentieren haben, können Sie sich den [Trailer zu Big Buck Bunny](https://web.archive.org/web/20161102172252id_/http://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_1080p.mov) herunterladen. Big Buck Bunny ist urheberrechtlich geschützt durch die Blender Foundation und ist unter der [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) Lizenz lizenziert. In diesem Tutorial wird der Dateiname trailer_1080p.mov verwendet, was dem Download entspricht.

### Benötigte Werkzeuge

Bei der Arbeit mit MSE sind die folgenden Werkzeuge unverzichtbar:

1. [ffmpeg](https://ffmpeg.org/) — Ein Kommandozeilenprogramm zur Transkodierung Ihrer Medien in die erforderlichen Formate. Sie können eine Version für Ihr System auf der [Download FFmpeg Seite](https://ffmpeg.org/download.html) herunterladen. Extrahieren Sie das ausführbare Programm aus der Archivdatei und fügen Sie den Speicherort zu Ihrer PATH-Deklaration hinzu. OSX-Benutzer können auch [homebrew](https://brew.sh/) verwenden, um ffmpeg zu installieren.
2. [Bento4](https://github.com/axiomatic-systems/Bento4) — Eine Sammlung von Kommandozeilenprogrammen, um Asset-Metadaten zu erhalten und Inhalte für DASH zu erstellen. Zur Installation müssen Sie die Anwendung selbst aus den bereitgestellten Projektdateien/Quellcode-Dateien entsprechend Ihrem Betriebssystem und Ihren Vorlieben erstellen/kompilieren. Weitere Details finden Sie in den [Bauanleitungen](https://github.com/axiomatic-systems/Bento4#building), oder laden Sie die [vorgefertigte Datei](https://www.bento4.com/downloads/) herunter. Legen Sie die Inhalte des `bin` Verzeichnisses an derselben Stelle ab wie ffmpeg.
3. python2 — Bento4 verwendet es.

Installieren Sie diese erfolgreich, bevor Sie zum nächsten Schritt übergehen.

Beispielmedien sollten im `utils` Verzeichnis von Bento4 abgelegt und dort bearbeitet werden.

> [!NOTE]
> Das vorgefertigte ffmpeg enthält aus lizenzrechtlichen Gründen nicht libfdk_aac. Bento4 verwendet dies standardmäßig, daher müssen Sie ffmpeg bei Bedarf kompilieren. Falls Sie es nicht benötigen, fügen Sie `--audio-codec=aac` zur `mp4-dash-encode.py` Befehlszeile hinzu.

### Container- und Codec-Unterstützung

Wie in [Abschnitt 1.1 der MSE-Spezifikation: Ziele](https://w3c.github.io/media-source/#goals) angegeben, ist MSE so konzipiert, dass keine Unterstützung für ein bestimmtes Medienformat oder einen bestimmten Codec erforderlich ist. Während dies theoretisch zutrifft, variiert die Browserunterstützung für bestimmte Container-/Codec-Kombinationen.

Um zu überprüfen, ob der Browser einen bestimmten Container unterstützt, können Sie einen MIME-Typ-String an die Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) übergeben:

```js
MediaSource.isTypeSupported("audio/mp3"); // false
MediaSource.isTypeSupported("video/mp4"); // true
MediaSource.isTypeSupported('video/mp4; codecs="avc1.4D4028, mp4a.40.2"'); // true
```

Der String ist der MIME-Typ des Containers, der optional von einer Liste von Codecs gefolgt wird. Während der MIME-Typ relativ einfach herauszufinden ist, können wir den Codec-String mithilfe des [mp4info](https://nickdesaulniers.github.io/mp4info/) Tools ermitteln.

Derzeit haben MP4-Container mit H.264-Video- und AAC-Audio-Codecs Unterstützung in allen modernen Browsern, während andere nicht unterstützt werden.

Um unsere Beispielmedien von einem QuickTime MOV-Container in einen MP4-Container zu konvertieren, können wir ffmpeg verwenden. Da der Audiocodec im MOV-Container bereits AAC und der Videocodec h.264 ist, können wir ffmpeg anweisen, keine Transkodierung durchzuführen. Stattdessen wird es die Audio- und Videospuren einfach kopieren, ohne eine Transkodierung durchzuführen, was im Allgemeinen schneller ist als eine Transkodierung.

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy bunny.mp4
```

### Überprüfung der Fragmentierung

Um MP4 korrekt streamen zu können, muss das Asset im [ISO BMF](https://w3c.github.io/mse-byte-stream-format-isobmff/) Format MP4 vorliegen. Ohne eine ordnungsgemäße Fragmentierung ist nicht garantiert, dass eine gegebene MP4-Datei mit MSE funktioniert. Das bedeutet, dass Metadaten innerhalb des Containers verteilt sind und nicht zusammengefasst werden.

Um zu überprüfen, ob eine MP4-Datei ein ordnungsgemäßer MP4-Stream ist, können Sie erneut das [mp4info](https://nickdesaulniers.github.io/mp4info/) Tool verwenden, um die Atome eines MP4 aufzulisten.

> [!NOTE]
> Die fragmentierte Version ist aufgrund zusätzlicher Metadaten, die sich über die Datei verteilen, etwas größer als das Original. Dies ist normalerweise eine Dateigrößenzunahme von 1 Prozent oder weniger.

### Fragmentierung

Wenn Sie ein Asset haben, das noch kein MP4 ist, kann ffmpeg ein ordnungsgemäßes fragmentiertes MP4 während des Transkodierungsprozesses mit dem `-movflags frag_keyframe+empty_moov` Befehlszeilenparameter erzeugen:

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy -movflags frag_keyframe+empty_moov bunny_fragmented.mp4
```

Wenn Sie bereits ein MP4 haben, das jedoch nicht ordnungsgemäß fragmentiert ist, können Sie erneut ffmpeg verwenden:

```bash
ffmpeg -i non_fragmented.mp4 -movflags frag_keyframe+empty_moov fragmented.mp4
```

In beiden Fällen erfordert Chrome möglicherweise, dass ein zusätzliches Movie-Flag gesetzt wird:

```bash
-movflags frag_keyframe+empty_moov+default_base_moof
```

Ein ordnungsgemäß fragmentiertes MP4 ist alles, was Sie benötigen, um loszulegen. Wenn Sie adaptives Bitraten-Streaming verwenden möchten, müssen Sie Encodings in mehreren Auflösungen erstellen. Während MSE flexibel genug ist, um Ihnen die Möglichkeit zu geben, Ihre Implementierung zu erstellen, wird dringend empfohlen, einen vorhandenen DASH-Client zu verwenden, da DASH ein gut spezifiziertes Anwendungsprotokoll ist.

### Erstellung von Inhalten für DASH

Da Sie ffmpeg und die Dienstprogramme von Bento4 über Ihr $PATH-Verzeichnis zugänglich haben, können Sie das `mp4-dash-encode.py` Python-Skript von Bento4 ausführen, um mehrere Encodings Ihrer Inhalte in verschiedenen Auflösungen zu generieren. Das `mp4-dash.py` Python-Skript von Bento4 kann dann verwendet werden, um die entsprechende MPD-Datei zu generieren, die von Clients benötigt wird.

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

> [!NOTE] > `mp4-dash-encode.py` zeigt keine ffmpeg-Fehlermeldungen an. Sie können es sehen, indem Sie die `-d` Option angeben.

> [!NOTE]
> Wenn die Fehlermeldung `"Invalid duration specification for force_key_frames: 'expr:eq(mod(n"` angezeigt wird, ändern Sie `mp4-dash-encode.py` und entfernen Sie zwei `"'"` aus `"-force_key_frames 'expr:eq(mod(n,%d),0)'"`.

## Zusammenfassung

Mit Ihren korrekt kodierten Videos und den erzeugten adaptiven Bitraten-Medien sind Sie nun bereit, auf das Web mit DASH und MSE zu streamen.
