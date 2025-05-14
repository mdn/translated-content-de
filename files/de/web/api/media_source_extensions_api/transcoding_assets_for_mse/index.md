---
title: Transkodierung von Medien für Media Source Extensions
slug: Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{DefaultAPISidebar("Media Source Extensions")}}

Wenn Sie mit Media Source Extensions arbeiten, müssen Sie möglicherweise Ihre Medien vorbereiten, bevor Sie sie streamen können. Dieser Artikel führt Sie durch die Anforderungen und zeigt Ihnen einen Werkzeugschatz, den Sie verwenden können, um Ihre Medien richtig zu kodieren.

## Erste Schritte

1. Der erste und wichtigste Schritt ist sicherzustellen, dass Ihre Dateien aus einem Container und Codec bestehen, den die Browser der Benutzer unterstützen.
2. Abhängig vom Codec müssen Sie die Datei möglicherweise fragmentieren, um mit den [ISO BMFF Spezifikationen](https://www.w3.org/TR/mse-byte-stream-format-isobmff/) übereinzustimmen.
3. (Optional) Wenn Sie sich entscheiden, Dynamic Adaptive Streaming über HTTP (DASH) für adaptives Bitraten-Streaming zu verwenden, müssen Sie Ihre Medien in mehrere Auflösungen transkodieren. Die meisten DASH-Clients erwarten eine entsprechende Media Presentation Description (MPD) Manifest-Datei, die typischerweise beim Generieren der Dateien in mehreren Auflösungen erstellt wird.

Im Folgenden werden wir all diese Schritte behandeln, aber zuerst schauen wir uns einen Werkzeugschatz an, den wir dafür relativ einfach verwenden können.

### Beispielmedien

Wenn Sie die hier aufgeführten Schritte nachvollziehen möchten, aber keine Medien zum Experimentieren haben, können Sie den [Trailer zu Big Buck Bunny](https://web.archive.org/web/20161102172252id_/http://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_1080p.mov) herunterladen. Big Buck Bunny ist urheberrechtlich geschützt von der Blender Foundation und lizenziert unter der [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) Lizenz. Im Verlauf dieses Tutorials werden Sie den Dateinamen trailer_1080p.mov sehen, der dem Download entspricht.

### Erforderliche Werkzeuge

Bei der Arbeit mit MSE sind die folgenden Werkzeuge unverzichtbar:

1. [ffmpeg](https://ffmpeg.org/) — Ein Befehlszeilenprogramm zum Transkodieren Ihrer Medien in die erforderlichen Formate. Sie können eine Version für Ihr System auf der [Download FFmpeg Seite](https://ffmpeg.org/download.html) herunterladen. Extrahieren Sie die ausführbare Datei aus dem Archiv und fügen Sie ihren Speicherort zu Ihrer PATH-Umgebungsvariable hinzu. MacOS-Benutzer können auch [homebrew](https://brew.sh/) verwenden, um ffmpeg zu installieren.
2. [Bento4](https://github.com/axiomatic-systems/Bento4) — Eine Reihe von Befehlszeilenprogrammen zum Abrufen von Metadaten von Medien und zum Erstellen von Inhalten für DASH. Um es zu installieren, müssen Sie die Anwendung selbst aus den bereitgestellten Projektdateien/Quellcodes abhängig von Ihrem Betriebssystem und Ihren Vorlieben erstellen/kompilieren. Weitere Einzelheiten finden Sie in den [Bauanleitungen](https://github.com/axiomatic-systems/Bento4#building) oder laden Sie die [vorgefertigte Datei](https://www.bento4.com/downloads/) herunter. Legen Sie die Inhalte des `bin`-Verzeichnisses an denselben Ort wie ffmpeg.
3. Python2 — Bento4 verwendet es.

Installieren Sie diese erfolgreich, bevor Sie zum nächsten Schritt übergehen.

Beispielmedien sollten im `utils`-Verzeichnis von Bento4 platziert und hier bearbeitet werden.

> [!NOTE]
> Das vorgefertigte ffmpeg enthält aus Lizenzgründen nicht libfdk_aac. Bento4 verwendet dies standardmäßig, daher müssen Sie ffmpeg bei Bedarf selbst kompilieren. Wenn Sie es nicht benötigen, fügen Sie `--audio-codec=aac` zur Befehlszeile von `mp4-dash-encode.py` hinzu.

### Container- und Codec-Unterstützung

Wie in [Abschnitt 1.1 der MSE Spezifikation: Ziele](https://www.w3.org/TR/media-source/#goals) angegeben, erfordert MSE keine Unterstützung für ein bestimmtes Medienformat oder Codec. Während dies auf dem Papier wahr ist, variiert die Browserunterstützung für bestimmte Container-/Codec-Kombinationen.

Um zu überprüfen, ob der Browser einen bestimmten Container unterstützt, können Sie einen String des MIME-Typs an die Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) übergeben:

```js
MediaSource.isTypeSupported("audio/mp3"); // false
MediaSource.isTypeSupported("video/mp4"); // true
MediaSource.isTypeSupported('video/mp4; codecs="avc1.4D4028, mp4a.40.2"'); // true
```

Der String ist der MIME-Typ des Containers, optional gefolgt von einer Liste von Codecs. Während der MIME-Typ relativ einfach zu bestimmen ist, können wir den Codec-String mit dem [mp4info](https://nickdesaulniers.github.io/mp4info/) Dienstprogramm ermitteln.

Derzeit haben MP4-Container mit H.264-Video und AAC-Audio-Codecs Unterstützung in allen modernen Browsern, während andere dies nicht tun.

Um unsere Beispielmedien von einem QuickTime MOV-Container in einen MP4-Container zu konvertieren, können wir ffmpeg verwenden. Da der Audiocodec im MOV-Container bereits AAC ist und der Videocodec h.264, können wir ffmpeg anweisen, keine Transkodierung durchzuführen. Stattdessen wird es nur die Audio- und Videospuren kopieren, ohne eine Transkodierung durchzuführen, was relativ schneller ist als eine Transkodierung.

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy bunny.mp4
```

### Überprüfung der Fragmentierung

Um MP4 korrekt zu streamen, benötigen wir das Medium im [ISO BMF](https://www.w3.org/TR/mse-byte-stream-format-isobmff/) Format MP4. Ohne korrekte Fragmentierung ist nicht garantiert, dass eine beliebige MP4-Datei mit MSE funktioniert. Dies bedeutet, dass Metadaten innerhalb des Containers verteilt und nicht zusammengeballt sind.

Um zu überprüfen, ob eine MP4-Datei ein korrekter MP4-Stream ist, können Sie erneut das [mp4info](https://nickdesaulniers.github.io/mp4info/) Dienstprogramm verwenden, um die Atome einer MP4 aufzulisten.

> [!NOTE]
> Die fragmentierte Version ist geringfügig größer als das Original aufgrund zusätzlicher Metadaten, die über die Datei verteilt sind. Dies ist in der Regel eine Dateigrößenzunahme von 1 Prozent oder weniger.

### Fragmentierung

Wenn Sie ein Medium haben, das noch kein MP4 ist, kann ffmpeg ein korrekt fragmentiertes MP4 während des Transkodierungsprozesses mit dem Kommandozeilen-Flag `-movflags frag_keyframe+empty_moov` ausgeben:

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy -movflags frag_keyframe+empty_moov bunny_fragmented.mp4
```

Wenn Sie bereits ein MP4 haben, das jedoch nicht richtig fragmentiert ist, können Sie erneut ffmpeg verwenden:

```bash
ffmpeg -i non_fragmented.mp4 -movflags frag_keyframe+empty_moov fragmented.mp4
```

In beiden Fällen kann Chrome ein zusätzliches Film-Flag erfordern:

```bash
-movflags frag_keyframe+empty_moov+default_base_moof
```

Ein korrekt fragmentiertes MP4 ist alles, was Sie zum Starten benötigen. Wenn Sie adaptives Bitraten-Streaming verwenden möchten, müssen Sie Kodierungen in mehreren Auflösungen erstellen. Während MSE flexibel genug ist, um Ihnen zu ermöglichen, Ihre Implementierung zu erstellen, wird dringend empfohlen, einen bestehenden DASH-Client zu verwenden, da DASH ein gut spezifiziertes Anwendungsprotokoll ist.

### Erstellung von Inhalten für DASH

Angenommen, Sie haben ffmpeg und Bento4s Werkzeuge über Ihre $PATH zugänglich, können Sie Bento4s `mp4-dash-encode.py` Python-Skript ausführen, um mehrere Kodierungen Ihrer Inhalte in verschiedenen Auflösungen zu erzeugen. Das `mp4-dash.py` Python-Skript von Bento4 kann dann verwendet werden, um die entsprechende MPD-Datei zu erzeugen, die von Clients benötigt wird.

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

> **Hinweis:** `mp4-dash-encode.py` zeigt keine ffmpeg-Fehlermeldungen an. Sie können sie sehen, indem Sie die `-d` Option angeben.

> [!NOTE]
> Wenn `"Invalid duration specification for force_key_frames: 'expr:eq(mod(n"` als Fehlermeldung angezeigt wird, ändern Sie `mp4-dash-encode.py` und entfernen Sie zwei `"'"` von `"-force_key_frames 'expr:eq(mod(n,%d),0)'"`.

## Zusammenfassung

Mit Ihrem korrekt kodierten Video und den generierten adaptiven Bitraten-Medien sind Sie nun bereit, mit dem adaptiven Bitraten-Streaming im Web mit DASH und MSE zu beginnen.
