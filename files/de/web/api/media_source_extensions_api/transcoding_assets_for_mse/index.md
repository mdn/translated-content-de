---
title: Transkodierung von Assets für Media Source Extensions
slug: Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{DefaultAPISidebar("Media Source Extensions")}}

Bei der Arbeit mit Media Source Extensions ist es wahrscheinlich, dass Sie Ihre Assets vorbereiten müssen, bevor Sie diese streamen können. Dieser Artikel führt Sie durch die Anforderungen und zeigt Ihnen eine Toolchain, die Sie verwenden können, um Ihre Assets entsprechend zu kodieren.

## Erste Schritte

1. Der erste und wichtigste Schritt ist es sicherzustellen, dass Ihre Dateien aus einem Container und Codec bestehen, die von den Browsern der Benutzer unterstützt werden.
2. Abhängig vom Codec müssen Sie eventuell die Datei fragmentieren, um der [ISO BMFF-Spezifikation](https://www.w3.org/TR/mse-byte-stream-format-isobmff/) zu entsprechen.
3. (Optional) Wenn Sie sich entscheiden, Dynamic Adaptive Streaming über HTTP (DASH) für adaptives Bitratestreaming zu verwenden, müssen Sie Ihre Assets in mehrere Auflösungen transkodieren. Die meisten DASH-Clients erwarten eine entsprechende Media Presentation Description (MPD) Manifest-Datei, die typischerweise beim Erstellen der Asset-Dateien in mehreren Auflösungen generiert wird.

Im Folgenden werden wir alle diese Schritte besprechen, aber zuerst schauen wir uns eine Toolchain an, die wir relativ einfach verwenden können.

### Beispielmedien

Wenn Sie die hier aufgeführten Schritte befolgen möchten, aber keine Medien haben, mit denen Sie experimentieren können, können Sie sich den [Trailer zu Big Buck Bunny](https://web.archive.org/web/20161102172252id_/http://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_1080p.mov) herunterladen. Big Buck Bunny ist urheberrechtlich geschützt durch die Blender Foundation und lizenziert unter der [Creative Commons Namensnennung 3.0](https://creativecommons.org/licenses/by/3.0/) Lizenz. In diesem Tutorial sehen Sie den Dateinamen trailer_1080p.mov, was dem Download entspricht.

### Benötigte Werkzeuge

Folgende Werkzeuge sind bei der Arbeit mit MSE unverzichtbar:

1. [ffmpeg](https://ffmpeg.org/) — Ein Kommandozeilen-Tool zur Transkodierung Ihrer Medien in die erforderlichen Formate. Sie können eine Version für Ihr System auf der [FFmpeg-Download-Seite](https://ffmpeg.org/download.html) herunterladen. Extrahieren Sie die ausführbare Datei aus dem Archiv und fügen Sie deren Speicherort zu Ihrer PATH-Erklärung hinzu. OSX-Benutzer können auch [homebrew](https://brew.sh/) verwenden, um ffmpeg zu installieren.
2. [Bento4](https://github.com/axiomatic-systems/Bento4) — Eine Sammlung von Kommandozeilen-Tools zum Abrufen von Asset-Metadaten und Erstellen von Inhalten für DASH. Um die Anwendung zu installieren, müssen Sie diese selbst aus den bereitgestellten Projekt-/Quelldateien je nach Betriebssystem und Vorlieben erstellen/kompilieren. Lesen Sie die [Bauanleitungen](https://github.com/axiomatic-systems/Bento4#building) für weitere Details. Die vorgefertigte Datei befindet sich [hier](https://www.bento4.com/downloads/). Legen Sie den Inhalt des `bin` Verzeichnisses am gleichen Ort wie ffmpeg ab.
3. python2 — Bento4 nutzt es.

Installieren Sie diese erfolgreich, bevor Sie zum nächsten Schritt übergehen.

Beispielmedien sollten im Bento4 `utils`-Verzeichnis platziert und hier bearbeitet werden.

> [!NOTE]
> Das vorgefertigte ffmpeg enthält libfdk_aac aus Lizenzgründen nicht. Bento4 verwendet dies standardmäßig, daher müssen Sie ffmpeg bei Bedarf kompilieren. Wenn Sie es nicht benötigen, fügen Sie `--audio-codec=aac` zur `mp4-dash-encode.py` Befehlszeile hinzu.

### Container- und Codec-Unterstützung

Wie in [Abschnitt 1.1 der MSE-Spezifikation: Ziele](https://www.w3.org/TR/media-source/#goals) angegeben, ist MSE so konzipiert, dass keine Unterstützung für ein bestimmtes Medienformat oder Codec erforderlich ist. Auch wenn dies auf dem Papier zutrifft, variiert die Browserunterstützung für bestimmte Container-/Codec-Kombinationen.

Um zu überprüfen, ob der Browser einen bestimmten Container unterstützt, können Sie eine Zeichenkette des MIME-Typs an die [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) Methode übergeben:

```js
MediaSource.isTypeSupported("audio/mp3"); // false
MediaSource.isTypeSupported("video/mp4"); // true
MediaSource.isTypeSupported('video/mp4; codecs="avc1.4D4028, mp4a.40.2"'); // true
```

Die Zeichenkette ist der MIME-Typ des Containers, optional gefolgt von einer Liste von Codecs. Während der MIME-Typ relativ einfach zu ermitteln ist, können wir die Codec-Zeichenkette mit dem [mp4info](https://nickdesaulniers.github.io/mp4info/) Tool erhalten.

Aktuell haben MP4-Container mit H.264-Video- und AAC-Audiocodecs Unterstützung in allen modernen Browsern, während andere dies nicht haben.

Um unsere Beispielmedien von einem QuickTime MOV-Container in einen MP4-Container zu konvertieren, können wir ffmpeg verwenden. Da der Audiocodec im MOV-Container bereits AAC und der Videocodec H.264 ist, können wir ffmpeg anweisen, keine Transkodierung vorzunehmen. Stattdessen kopiert es lediglich die Audio- und Videospuren, ohne eine Transkodierung durchzuführen, was relativ schneller ist als eine vollständige Transkodierung.

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy bunny.mp4
```

### Fragmentierungsüberprüfung

Um MP4 ordnungsgemäß zu streamen, muss das Asset ein MP4 im [ISO BMF](https://www.w3.org/TR/mse-byte-stream-format-isobmff/)-Format sein. Ohne ordnungsgemäße Fragmentierung ist eine MP4-Datei möglicherweise nicht mit MSE kompatibel. Das bedeutet, dass Metadaten innerhalb des Containers verteilt und nicht zusammengefasst sind.

Um zu überprüfen, ob eine MP4-Datei ein ordnungsgemäßer MP4-Stream ist, können Sie erneut das [mp4info](https://nickdesaulniers.github.io/mp4info/) Tool verwenden, um die Atome einer MP4 aufzulisten.

> [!NOTE]
> Die fragmentierte Version ist aufgrund zusätzlicher Metadaten, die im gesamten Datei verteilt sind, etwas größer als das Original. Dies ist normalerweise eine Erhöhung der Dateigröße um 1 Prozent oder weniger.

### Fragmentierung

Wenn Sie ein Asset haben, das noch kein MP4 ist, kann ffmpeg ein korrekt fragmentiertes MP4 während des Transkodierungsprozesses mit dem `-movflags frag_keyframe+empty_moov` Befehlszeilen-Flag ausgeben:

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy -movflags frag_keyframe+empty_moov bunny_fragmented.mp4
```

Wenn Sie bereits ein MP4 haben, es aber nicht ordnungsgemäß fragmentiert ist, können Sie erneut ffmpeg verwenden:

```bash
ffmpeg -i non_fragmented.mp4 -movflags frag_keyframe+empty_moov fragmented.mp4
```

In beiden Fällen kann ein zusätzlicher Movie-Flag in Chrome erforderlich sein:

```bash
-movflags frag_keyframe+empty_moov+default_base_moof
```

Ein richtig fragmentiertes MP4 ist alles, was Sie für den Anfang benötigen. Wenn Sie adaptives Bitratestreaming einsetzen möchten, müssen Sie Encodings in mehreren Auflösungen erstellen. Während MSE flexibel genug ist, um Ihnen eine eigene Implementierung zu ermöglichen, wird dringend empfohlen, einen bestehenden DASH-Client zu verwenden, da DASH ein gut spezifiziertes Anwendungsprotokoll ist.

### Inhaltserstellung für DASH

Unter der Voraussetzung, dass Sie ffmpeg und die Bento4-Utilities über Ihren $PATH zugänglich haben, können Sie das Python-Skript `mp4-dash-encode.py` von Bento4 ausführen, um mehrere Codierungen Ihrer Inhalte in verschiedenen Auflösungen zu erzeugen. Das Python-Skript `mp4-dash.py` von Bento4 kann dann verwendet werden, um die entsprechende MPD-Datei zu erzeugen, die von Clients benötigt wird.

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

> **Hinweis:** `mp4-dash-encode.py` zeigt keine ffmpeg-Fehlermeldungen an. Diese können durch Angabe der `-d` Option sichtbar gemacht werden.

> [!NOTE]
> Wenn `"Invalid duration specification for force_key_frames: 'expr:eq(mod(n"` als Fehlermeldung angezeigt wird, modifizieren Sie `mp4-dash-encode.py` und entfernen Sie zwei `"'"` von `"-force_key_frames 'expr:eq(mod(n,%d),0)'"`.

## Zusammenfassung

Mit Ihrem korrekt kodierten Video und generierten adaptiven Bitratemedien sind Sie nun bereit, adaptives Bitratestreaming im Web mit DASH und MSE zu starten.
