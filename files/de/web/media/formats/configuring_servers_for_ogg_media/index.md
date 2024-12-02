---
title: Konfigurieren von Servern für Ogg-Medien
slug: Web/Media/Formats/Configuring_servers_for_Ogg_media
l10n:
  sourceCommit: 4d12b3e4f9afb311f2656641260e42c0b6f8f4c6
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen die Medienwiedergabe, ohne dass der Benutzer Erweiterungen oder andere Software installieren muss. Dieser Leitfaden behandelt die Serverkonfiguration, die möglicherweise erforderlich ist, um Ogg-Mediendateien korrekt bereitzustellen. Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server noch nicht zu erkennen vermag.

## Medien mit dem richtigen MIME-Typ bereitstellen

Wenn Sie nicht wissen, ob die Ogg-Datei Audio oder Video enthält, können Sie sie mit dem MIME-Typ `application/ogg` bereitstellen, und der Browser behandelt sie als Videodatei.

- `*.ogg`- und `*.ogv`-Dateien, die Video (möglicherweise auch mit einer Audiospur) enthalten, sollten mit dem MIME-Typ `video/ogg` bereitgestellt werden.
- `*.oga`- und `*.ogg`-Dateien, die nur Audio enthalten, sollten mit dem MIME-Typ `audio/ogg` bereitgestellt werden.

Die meisten Server liefern Ogg-Medien standardmäßig nicht mit den richtigen MIME-Typen aus, daher müssen Sie wahrscheinlich die entsprechende Konfiguration hinzufügen.

Für Apache können Sie die folgende Konfiguration verwenden:

```apacheconf
AddType audio/ogg .oga
AddType video/ogg .ogv
AddType application/ogg .ogg
```

Der Artikel zu [Mediencontainerformaten](/de/docs/Web/Media/Formats/Containers) ist besonders hilfreich, um Server korrekt für das Hosten von Medien zu konfigurieren.

## Range-Anfragen korrekt bearbeiten

Um das Suchen und Abspielen von Teilen der Medien zu unterstützen, die noch nicht heruntergeladen wurden, können Sie [Range-Anfragen](/de/docs/Web/HTTP/Range_requests) verwenden, um die Medien ab der Suchzielposition abzurufen. Außerdem wird die Byte-Range-Anfrage verwendet, um bis zum Ende der Medien zu suchen (vorausgesetzt, Sie liefern den {{HTTPHeader("Content-Length")}}-Header), um die Dauer der Medien zu bestimmen.

Ihr Server sollte den {{HTTPHeader("Accept-Ranges")}}-Header akzeptieren, wenn er Range-Anfragen annehmen kann. Er muss {{HTTPStatus("206", "206 Partial Content")}} für alle Range-Anfragen zurückgeben, da Browser sonst nicht feststellen können, ob der Server Range-Anfragen unterstützt. Ihr Server muss auch `206: Partial Content` für die Anfrage `Range: bytes=0-` zurückgeben.

Weitere Informationen finden Sie unter [Range-Anfragen](/de/docs/Web/HTTP/Range_requests).

## Regelmäßige Keyframes einfügen

Wenn der Browser durch Ogg-Medien zu einer bestimmten Zeit sucht, muss er zum nächsten Keyframe vor dem Suchziel suchen, dann das Video von dort herunterladen und dekodieren, bis die gewünschte Zielzeit erreicht ist. Je weiter Ihre Keyframes voneinander entfernt sind, desto länger dauert dies, daher ist es hilfreich, Keyframes in regelmäßigen Abständen einzufügen.

Standardmäßig verwendet [`ffmpeg2theora`](https://gitlab.xiph.org/xiph/ffmpeg2theora) alle 64 Frames ein Keyframe (oder etwa alle 2 Sekunden bei 30 Frames pro Sekunde), was ziemlich gut funktioniert.

> [!NOTE]
> Natürlich gilt: Je mehr Keyframes Sie verwenden, desto größer ist Ihre Videodatei, daher müssen Sie möglicherweise ein wenig experimentieren, um die richtige Balance zwischen Dateigröße und Suchleistung zu finden.

## Verwenden Sie das Preload-Attribut

Die HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente bieten das `preload`-Attribut, das dem Browser anweist, beim Laden der Seite zu versuchen, das gesamte Medium herunterzuladen. Ohne `preload` lädt der Browser genug vom Medium herunter, um den ersten Videoframe anzuzeigen und die Dauer des Mediums zu bestimmen.

- `preload` ist standardmäßig deaktiviert. Wenn das Abspielen des Videos der Zweck Ihrer Webseite ist, könnten Ihre Benutzer es begrüßen, wenn Sie `preload` in Ihre Videoelemente einfügen.
- Mit `preload="metadata"` wird die Metadaten der Mediendatei vorgeladen und möglicherweise die ersten paar Videoframes. Wenn Sie `payload` auf `auto` setzen, weist dies den Browser an, das Medium automatisch zu laden, sobald die Seite geladen ist, in der Annahme, dass der Benutzer es abspielen wird.

## Verwenden Sie keine HTTP-Komprimierung für Ogg-Medien

Eine gängige Methode, um die Serverlast zu reduzieren, ist die Verwendung von [gzip- oder Deflate-Komprimierung](https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/), wenn Sie an einen unterstützenden Webbrowser ausliefern.

Obwohl es unwahrscheinlich ist, ist es möglich, dass der Browser angibt, dass er HTTP-Komprimierung (gzip/deflate) unterstützt, indem er den `Accept-Encoding: gzip,deflate`-Header sendet, wenn er Mediendateien anfordert. Ihr Server sollte so konfiguriert werden, dass dies nicht geschieht. Die Daten in Mediendateien sind bereits komprimiert, sodass Sie von einer Komprimierung keinen wirklichen Vorteil haben werden, und die Verwendung von Komprimierung macht es für den Browser unmöglich, das Video ordnungsgemäß zu suchen oder dessen Dauer zu bestimmen.

Ein weiteres Problem beim Zulassen von HTTP-Komprimierung für Medienstreaming: Apache-Server senden den {{HTTPHeader("Content-Length")}}-Antwortheader nicht, wenn die gzip-Codierung verwendet wird.

## Ermitteln der Dauer von Ogg-Medien

Sie können das `oggz-info`-Tool verwenden, um die Spieldauer der Medien zu ermitteln; dieses Tool ist im [`oggz-tools`](https://www.xiph.org/oggz/)-Paket enthalten. Die Ausgabe von `oggz-info` sieht folgendermaßen aus:

```bash
$ oggz-info /g/media/bruce_vs_ironman.ogv
Content-Duration: 00:01:00.046

Skeleton: serialno 1976223438
        4 packets in 3 pages, 1.3 packets/page, 27.508% Ogg overhead
        Presentation-Time: 0.000
        Basetime: 0.000

Theora: serialno 0170995062
        1790 packets in 1068 pages, 1.7 packets/page, 1.049% Ogg overhead
        Video-Framerate: 29.983 fps
        Video-Width: 640
        Video-Height: 360

Vorbis: serialno 0708996688
        4531 packets in 167 pages, 27.1 packets/page, 1.408% Ogg overhead
        Audio-Samplerate: 44100 Hz
        Audio-Channels: 2
```

Beachten Sie, dass Sie die von `oggz-info` gemeldete Content-Duration-Zeile nicht bereitstellen können, da sie im `HH:MM:SS`-Format gemeldet wird. Sie müssen sie in Sekunden umwandeln und diese als Ihren `X-Content-Duration`-Wert bereitstellen. Dazu können Sie die `HH`, `MM` und `SS`-Segmente analysieren und dann in `(HH * 3600) + (MM * 60) + SS` umwandeln, als den Wert, den Sie melden sollten.

Es ist wichtig zu beachten, dass `oggz-info` anscheinend einen Lesevorgang des Mediums durchführt, um dessen Dauer zu berechnen, daher ist es eine gute Idee, den Dauerwert zu speichern, um lange Verzögerungen zu vermeiden, während der Wert für jede HTTP-Anfrage Ihres Ogg-Mediums berechnet wird.

## Siehe auch

- [Video- und Audiocontent](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
