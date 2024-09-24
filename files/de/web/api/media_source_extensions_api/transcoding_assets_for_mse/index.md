---
title: Transkodierung von Inhalten für Media Source Extensions
slug: Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{DefaultAPISidebar("Media Source Extensions")}}

Wenn Sie mit Media Source Extensions arbeiten, müssen Sie wahrscheinlich Ihre Medieninhalte aufbereiten, bevor Sie diese streamen können. Dieser Artikel führt Sie durch die Anforderungen und zeigt Ihnen eine Toolchain, mit der Sie Ihre Inhalte entsprechend kodieren können.

## Erste Schritte

1. Der erste und wichtigste Schritt ist sicherzustellen, dass Ihre Dateien aus einem Container und einem Codec bestehen, die von den Browsern der Benutzer unterstützt werden.
2. Abhängig vom Codec müssen Sie möglicherweise die Datei fragmentieren, um der [ISO BMFF Spezifikation](https://www.w3.org/TR/mse-byte-stream-format-isobmff/) zu entsprechen.
3. (Optional) Wenn Sie sich entscheiden, Dynamic Adaptive Streaming over HTTP (DASH) für adaptives Bitraten-Streaming zu verwenden, müssen Sie Ihre Inhalte in mehrere Auflösungen transkodieren. Die meisten DASH-Clients erwarten eine entsprechende Media Presentation Description (MPD) Manifest-Datei, die typischerweise beim Erstellen der Dateien mit mehreren Auflösungen generiert wird.

Im Folgenden werden wir alle diese Schritte behandeln. Zuerst werfen wir jedoch einen Blick auf eine Toolchain, die wir relativ einfach nutzen können.

### Beispielmedien

Wenn Sie den hier aufgeführten Schritten folgen möchten, aber keine Medieninhalte zum Experimentieren haben, können Sie sich den [Trailer zu Big Buck Bunny](https://web.archive.org/web/20161102172252id_/http://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_1080p.mov) herunterladen. Big Buck Bunny ist urheberrechtlich von der Blender Foundation geschützt und lizenziert unter der [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) Lizenz. In diesem Tutorial wird der Dateiname trailer_1080p.mov verwendet, der dem Download entspricht.

### Erforderliche Werkzeuge

Beim Arbeiten mit MSE sind die folgenden Werkzeuge unverzichtbar:

1. [ffmpeg](https://ffmpeg.org/) — Ein Kommandozeilen-Tool zur Transkodierung Ihrer Medieninhalte in das erforderliche Format. Sie können eine Version für Ihr System auf der [Download FFmpeg Seite](https://ffmpeg.org/download.html) herunterladen. Extrahieren Sie die ausführbare Datei aus dem Archiv und fügen Sie deren Speicherort zu Ihrer PATH-Anweisung hinzu. OSX-Benutzer können auch [homebrew](https://brew.sh/) verwenden, um ffmpeg zu installieren.
2. [Bento4](https://github.com/axiomatic-systems/Bento4) — Eine Reihe von Kommandozeilen-Tools, um Metadaten von Inhalten zu erhalten und Inhalte für DASH zu erstellen. Zur Installation müssen Sie die Anwendung selbst aus den bereitgestellten Projektdateien/Quellen für Ihr Betriebssystem und Ihre Vorlieben kompilieren/bauen. Lesen Sie die [Bauanleitung](https://github.com/axiomatic-systems/Bento4#building) für weitere Details. Die vorgefertigte Datei ist [hier](https://www.bento4.com/downloads/) verfügbar. Platzieren Sie die Inhalte des `bin` Verzeichnisses am selben Ort wie ffmpeg.
3. python2 — Bento4 verwendet es.

Installieren Sie diese erfolgreich, bevor Sie zum nächsten Schritt übergehen.

Beispielmedien sollten im `utils` Verzeichnis von Bento4 platziert und dort bearbeitet werden.

> [!NOTE]
> Das vorgefertigte ffmpeg enthält aus Lizenzgründen nicht libfdk_aac. Bento4 verwendet dies standardmäßig, daher müssen Sie ffmpeg bei Bedarf kompilieren. Wenn Sie es nicht benötigen, fügen Sie `--audio-codec=aac` zur `mp4-dash-encode.py` Befehlszeile hinzu.

### Container- und Codec-Unterstützung

Wie in [Abschnitt 1.1 der MSE Spezifikation: Ziele](https://www.w3.org/TR/media-source/#goals) angegeben, verlangt MSE keine Unterstützung für ein bestimmtes Medienformat oder Codec. Obwohl dies theoretisch stimmt, variiert die Browserunterstützung für spezifische Container/Codec-Kombinationen.

Um zu überprüfen, ob der Browser einen bestimmten Container unterstützt, können Sie einen MIME-Typ-String an die Methode {{domxref("MediaSource.isTypeSupported_static", "MediaSource.isTypeSupported()")}} übergeben:

```js
MediaSource.isTypeSupported("audio/mp3"); // false
MediaSource.isTypeSupported("video/mp4"); // true
MediaSource.isTypeSupported('video/mp4; codecs="avc1.4D4028, mp4a.40.2"'); // true
```

Der String ist der MIME-Typ des Containers, optional gefolgt von einer Liste von Codecs. Während der MIME-Typ relativ einfach herauszufinden ist, können wir die Codec-Zeichenfolge mit dem [mp4info](https://nickdesaulniers.github.io/mp4info/) Dienstprogramm erhalten.

Gegenwärtig haben MP4-Container mit H.264-Video- und AAC-Audio-Codecs Unterstützung über alle modernen Browser hinweg, während andere dies nicht tun.

Um unsere Beispielmedien von einem QuickTime MOV-Container in einen MP4-Container zu konvertieren, können wir ffmpeg verwenden. Da der Audiocodec im MOV-Container bereits AAC ist und der Videocodec h.264 ist, können wir ffmpeg anweisen, keine Transkodierung durchzuführen. Stattdessen kopiert es einfach die Audio- und Videospuren, ohne eine Transkodierung durchzuführen, was relativ schneller ist als eine erforderliche Transkodierung.

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy bunny.mp4
```

### Überprüfung der Fragmentierung

Um MP4 ordnungsgemäß zu streamen, muss der Inhalt als [ISO BMF](https://www.w3.org/TR/mse-byte-stream-format-isobmff/) Format MP4 vorliegen. Ohne richtige Fragmentierung ist es nicht garantiert, dass eine beliebige MP4-Datei mit MSE funktioniert. Das bedeutet, dass Metadaten innerhalb des Containers verteilt und nicht zusammengefasst sind.

Um zu überprüfen, ob eine MP4-Datei ein ordnungsgemäßer MP4-Stream ist, können Sie erneut das [mp4info](https://nickdesaulniers.github.io/mp4info/) Dienstprogramm verwenden, um die Atome eines MP4 aufzulisten.

> [!NOTE]
> Die fragmentierte Version ist geringfügig größer als das Original, da zusätzliche Metadaten in der Datei verteilt sind. Dies führt normalerweise zu einer Dateigrößensteigerung von 1 % oder weniger.

### Fragmentierung

Wenn Sie einen Inhalt haben, der noch kein MP4 ist, kann ffmpeg ein korrekt fragmentiertes MP4 während des Transkodierungsprozesses mit dem `-movflags frag_keyframe+empty_moov` Befehlszeilenflag erzeugen:

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy -movflags frag_keyframe+empty_moov bunny_fragmented.mp4
```

Wenn Sie bereits ein MP4 haben, das jedoch nicht korrekt fragmentiert ist, können Sie erneut ffmpeg verwenden:

```bash
ffmpeg -i non_fragmented.mp4 -movflags frag_keyframe+empty_moov fragmented.mp4
```

In beiden Fällen kann es sein, dass Chrome ein zusätzliches Flag benötigt:

```bash
-movflags frag_keyframe+empty_moov+default_base_moof
```

Ein ordnungsgemäß fragmentiertes MP4 ist alles, was Sie benötigen, um zu beginnen. Wenn Sie adaptives Bitraten-Streaming einsetzen möchten, müssen Sie Codierungen in mehreren Auflösungen erstellen. Während MSE flexibel genug ist, um Ihre eigene Implementierung zuzulassen, wird dringend empfohlen, einen bestehenden DASH-Client zu verwenden, da DASH ein gut spezifiziertes Anwendungsprotokoll ist.

### Inhaltserstellung für DASH

Da Sie Zugriff auf ffmpeg und die Dienstprogramme von Bento4 über Ihren $PATH haben, können Sie das Bento4 `mp4-dash-encode.py` Python-Skript ausführen, um mehrere Codierungen Ihrer Inhalte in verschiedenen Auflösungen zu erzeugen. Bento4 `mp4-dash.py` Python-Skript kann dann verwendet werden, um die entsprechende MPD-Datei zu erstellen, die von Clients benötigt wird.

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
> Wenn `"Invalid duration specification for force_key_frames: 'expr:eq(mod(n"` als Fehlermeldung angezeigt wird, ändern Sie `mp4-dash-encode.py` und entfernen Sie zwei `"'"` aus `"-force_key_frames 'expr:eq(mod(n,%d),0)'"`.

## Zusammenfassung

Mit Ihrem ordnungsgemäß kodierten Video und generierten adaptiven Bitraten-Medien sind Sie jetzt bereit, mit adaptivem Bitraten-Streaming im Web unter Verwendung von DASH und MSE zu beginnen.
