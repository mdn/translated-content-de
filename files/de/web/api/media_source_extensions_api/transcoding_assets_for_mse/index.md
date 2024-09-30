---
title: Transkodierung von Assets für Media Source Extensions
slug: Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{DefaultAPISidebar("Media Source Extensions")}}

Bei der Arbeit mit Media Source Extensions müssen Sie wahrscheinlich Ihre Assets vorbereiten, bevor Sie sie streamen können. Dieser Artikel führt Sie durch die Anforderungen und zeigt Ihnen eine Toolchain, die Sie verwenden können, um Ihre Assets entsprechend zu kodieren.

## Erste Schritte

1. Der erste und wichtigste Schritt besteht darin sicherzustellen, dass Ihre Dateien aus einem Container und Codec bestehen, den die Browser der Benutzer unterstützen.
2. Je nach Codec müssen Sie möglicherweise die Datei fragmentieren, um den [ISO BMFF-Spezifikationen](https://www.w3.org/TR/mse-byte-stream-format-isobmff/) zu entsprechen.
3. (Optional) Wenn Sie sich entscheiden, Dynamic Adaptive Streaming über HTTP (DASH) für adaptives Bitraten-Streaming zu verwenden, müssen Sie Ihre Assets in mehrere Auflösungen transkodieren. Die meisten DASH-Clients erwarten eine entsprechende Media Presentation Description (MPD)-Manifestdatei, die normalerweise bei der Erstellung der mehrauflösenden Asset-Dateien generiert wird.

Im Folgenden decken wir all diese Schritte ab, aber zuerst schauen wir uns eine Toolchain an, die wir hierfür relativ einfach verwenden können.

### Beispielmedien

Wenn Sie die hier aufgelisteten Schritte nachvollziehen möchten, aber keine Medien zum Experimentieren haben, können Sie sich den [Trailer zu Big Buck Bunny](https://web.archive.org/web/20161102172252id_/http://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_1080p.mov) herunterladen. Big Buck Bunny ist urheberrechtlich geschützt von der Blender Foundation und lizenziert unter der [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) Lizenz. Während dieses Tutorials werden Sie den Dateinamen trailer_1080p.mov sehen, das ist der Download.

### Erforderliche Werkzeuge

Bei der Arbeit mit MSE sind die folgenden Werkzeuge ein Muss:

1. [ffmpeg](https://ffmpeg.org/) — Ein Kommandozeilen-Tool zur Transkodierung Ihrer Medien in die erforderlichen Formate. Sie können eine Version für Ihr System auf der [Download FFmpeg-Seite](https://ffmpeg.org/download.html) herunterladen. Extrahieren Sie die ausführbare Datei aus der Archivdatei und fügen Sie ihren Speicherort Ihrer PATH-Anweisung hinzu. OSX-Benutzer können auch [homebrew](https://brew.sh/) verwenden, um ffmpeg zu installieren.
2. [Bento4](https://github.com/axiomatic-systems/Bento4) — Eine Sammlung von Kommandozeilen-Utilities zur Gewinnung von Asset-Metadaten und zur Erstellung von Inhalten für DASH. Zur Installation müssen Sie je nach Ihrem Betriebssystem und Präferenzen die Anwendung selbst aus den bereitgestellten Projekt-/Quellendateien bauen/kompilieren. Siehe die [Bauanweisungen](https://github.com/axiomatic-systems/Bento4#building) für weitere Details. Die vorgefertigte Datei ist [hier](https://www.bento4.com/downloads/) zu finden. Legen Sie den Inhalt des `bin`-Verzeichnisses an den gleichen Ort wie ffmpeg.
3. python2 — Bento4 nutzt dies.

Installieren Sie diese erfolgreich, bevor Sie zum nächsten Schritt übergehen.

Beispielmedien sollten im Bento4 `utils`-Verzeichnis platziert und dort bearbeitet werden.

> [!NOTE]
> Das vorgefertigte ffmpeg enthält aufgrund von Lizenzgründen nicht libfdk_aac. Bento4 verwendet dies standardmäßig, daher müssen Sie ffmpeg bei Bedarf selbst kompilieren. Wenn Sie es nicht benötigen, fügen Sie `--audio-codec=aac` zur Kommandozeile des `mp4-dash-encode.py` hinzu.

### Container- und Codec-Unterstützung

Wie in [Abschnitt 1.1 der MSE-Spezifikation: Ziele](https://www.w3.org/TR/media-source/#goals) angegeben, ist MSE so konzipiert, dass keine Unterstützung für ein bestimmtes Medienformat oder einen bestimmten Codec erforderlich ist. Während dies auf dem Papier stimmt, variiert die Browser-Unterstützung für bestimmte Container/Codec-Kombinationen.

Um zu überprüfen, ob der Browser einen bestimmten Container unterstützt, können Sie einen MIME-Typ-String an die Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) übergeben:

```js
MediaSource.isTypeSupported("audio/mp3"); // false
MediaSource.isTypeSupported("video/mp4"); // true
MediaSource.isTypeSupported('video/mp4; codecs="avc1.4D4028, mp4a.40.2"'); // true
```

Der String ist der MIME-Typ des Containers, optional gefolgt von einer Liste von Codecs. Während der MIME-Typ relativ leicht zu ermitteln ist, können wir den Codec-String mit dem [mp4info](https://nickdesaulniers.github.io/mp4info/) Utility erhalten.

Derzeit haben MP4-Container mit H.264-Video und AAC-Audio-Codecs Unterstützung in allen modernen Browsern, während andere dies nicht haben.

Um unsere Beispielmedien von einem QuickTime MOV-Container in einen MP4-Container zu konvertieren, können wir ffmpeg verwenden. Da der Audio-Codec im MOV-Container bereits AAC ist und der Video-Codec h.264, können wir ffmpeg anweisen, keine Transkodierung durchzuführen. Stattdessen wird es die Audio- und Videospuren einfach kopieren, ohne eine Transkodierung durchzuführen, was relativ schneller ist als eine Transkodierung.

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy bunny.mp4
```

### Fragmentierungsüberprüfung

Um MP4 richtig zu streamen, müssen wir sicherstellen, dass das Asset ein [ISO BMF](https://www.w3.org/TR/mse-byte-stream-format-isobmff/) Format-MP4 ist. Ohne richtige Fragmentierung ist garantiert kein MP4-Dateiformat mit MSE kompatibel. Das bedeutet, dass Metadaten innerhalb des Containers verteilt und nicht zusammengefasst sind.

Um zu überprüfen, ob eine MP4-Datei ein richtiges MP4-Stream ist, können Sie erneut das [mp4info](https://nickdesaulniers.github.io/mp4info/) Utility verwenden, um die Atome eines MP4 aufzulisten.

> [!NOTE]
> Die fragmentierte Version ist leicht größer als das Original, aufgrund der zusätzlichen Metadaten, die im gesamten File verteilt sind. Dies ist normalerweise eine Dateigrößenzunahme von 1 Prozent oder weniger.

### Fragmentierung

Wenn Sie ein Asset haben, das noch kein MP4 ist, kann ffmpeg ein ordnungsgemäß fragmentiertes MP4 während des Transkodierungsprozesses mit dem Kommandozeilenflag `-movflags frag_keyframe+empty_moov` erzeugen:

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy -movflags frag_keyframe+empty_moov bunny_fragmented.mp4
```

Wenn Sie bereits ein MP4 haben, das aber nicht richtig fragmentiert ist, können Sie erneut ffmpeg verwenden:

```bash
ffmpeg -i non_fragmented.mp4 -movflags frag_keyframe+empty_moov fragmented.mp4
```

In beiden Fällen kann Chrome ein zusätzliches Film-Flag erforderlich machen:

```bash
-movflags frag_keyframe+empty_moov+default_base_moof
```

Ein richtig fragmentiertes MP4 ist alles, was Sie benötigen, um loszulegen. Wenn Sie adaptives Bitraten-Streaming verwenden möchten, müssen Sie Kodierungen in mehreren Auflösungen erstellen. Während MSE flexibel genug ist, um Ihre eigene Implementierung zu ermöglichen, wird dringend empfohlen, einen vorhandenen DASH-Client zu verwenden, da DASH ein gut spezifiziertes Anwendungsprotokoll ist.

### Erstellung von Inhalten für DASH

Angenommen, Sie haben ffmpeg und die Utilities von Bento4 über Ihren $PATH zugänglich, können Sie das Python-Skript `mp4-dash-encode.py` von Bento4 ausführen, um mehrere Codierungen Ihres Inhalts in verschiedenen Auflösungen zu erzeugen. Das Python-Skript `mp4-dash.py` von Bento4 kann dann verwendet werden, um die entsprechende MPD-Datei zu erzeugen, die von den Clients benötigt wird.

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

> **Hinweis:** `mp4-dash-encode.py` zeigt keine ffmpeg-Fehlermeldungen an. Sie können es sehen, indem Sie die `-d` Option angeben.

> [!NOTE]
> Wenn die Fehlermeldung `"Invalid duration specification for force_key_frames: 'expr:eq(mod(n"` angezeigt wird, modifizieren Sie `mp4-dash-encode.py` und entfernen Sie zwei `"'"` von `"-force_key_frames 'expr:eq(mod(n,%d),0)'"`.

## Zusammenfassung

Mit Ihrem korrekt kodierten Video und dem generierten adaptiven Bitraten-Medien sind Sie nun bereit, adaptives Bitraten-Streaming im Web mit DASH und MSE zu beginnen.
