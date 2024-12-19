---
title: Konfiguration von Servern für Ogg-Medien
slug: Web/Media/Formats/Configuring_servers_for_Ogg_media
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen die Medienpräsentation, ohne dass der Benutzer Erweiterungen oder andere Software installieren muss.
Dieser Leitfaden behandelt die Serverkonfiguration, die möglicherweise erforderlich ist, um Ogg-Mediendateien korrekt bereitzustellen.
Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server noch nicht erkennt.

## Medien mit dem richtigen MIME-Typ bereitstellen

Wenn Sie nicht wissen, ob die Ogg-Datei Audio oder Video enthält, können Sie sie mit dem MIME-Typ `application/ogg` bereitstellen, und der Browser behandelt sie als Videodatei.

- `*.ogg`- und `*.ogv`-Dateien, die Video enthalten (möglicherweise auch mit einer Audiospur), sollten mit dem MIME-Typ `video/ogg` bereitgestellt werden.
- `*.oga`- und `*.ogg`-Dateien, die nur Audio enthalten, sollten mit dem MIME-Typ `audio/ogg` bereitgestellt werden.

Die meisten Server liefern standardmäßig keine Ogg-Medien mit den richtigen MIME-Typen aus, daher müssen Sie wahrscheinlich die entsprechende Konfiguration dafür hinzufügen.

Für Apache können Sie Folgendes zu Ihrer Konfiguration hinzufügen:

```apacheconf
AddType audio/ogg .oga
AddType video/ogg .ogv
AddType application/ogg .ogg
```

Der Artikel über [Medien-Containerformate](/de/docs/Web/Media/Formats/Containers) ist besonders hilfreich, wenn es darum geht, Server richtig für die Bereitstellung von Medien zu konfigurieren.

## Range-Anfragen korrekt behandeln

Um die Suche und Wiedergabe von nicht heruntergeladenen Medienbereichen zu unterstützen, können Sie [Range-Anfragen](/de/docs/Web/HTTP/Range_requests) verwenden, um die Medien von der Zielposition aus abzurufen.
Zusätzlich werden Byte-Range-Anfragen verwendet, um zum Ende der Medien zu navigieren (vorausgesetzt, Sie liefern den {{HTTPHeader("Content-Length")}}-Header), um die Dauer der Medien zu bestimmen.

Ihr Server sollte den {{HTTPHeader("Accept-Ranges")}}-Header akzeptieren, wenn er Range-Anfragen annehmen kann.
Er muss {{HTTPStatus("206", "206 Partial Content")}} für alle Range-Anfragen zurückgeben, andernfalls können Browser nicht feststellen, ob der Server Range-Anfragen unterstützt.
Ihr Server muss auch `206: Partial Content` für die Anfrage `Range: bytes=0-` zurückgeben.

Weitere Informationen finden Sie unter [Range-Anfragen](/de/docs/Web/HTTP/Range_requests).

## Regelmäßige Key-Frames einfügen

Wenn der Browser bei Ogg-Medien zu einer bestimmten Zeit sucht, muss er zum nächsten Key-Frame vor dem Suchziel navigieren, dann das Video von dort herunterladen und decodieren, bis die angeforderte Zielzeit erreicht ist. Je weiter Ihre Key-Frames auseinander liegen, desto länger dauert dies, daher ist es hilfreich, Key-Frames in regelmäßigen Abständen einzufügen.

Standardmäßig verwendet [`ffmpeg2theora`](https://gitlab.xiph.org/xiph/ffmpeg2theora) einen Key-Frame alle 64 Frames (oder etwa alle 2 Sekunden bei 30 Frames pro Sekunde), was ziemlich gut funktioniert.

> [!NOTE]
> Natürlich gilt: Je mehr Key-Frames Sie verwenden, desto größer wird Ihre Videodatei, daher müssen Sie möglicherweise ein wenig experimentieren, um das richtige Gleichgewicht zwischen Dateigröße und Suchleistung zu finden.

## Erwägen, das preload-Attribut zu verwenden

Die HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente bieten das `preload`-Attribut, das dem Browser mitteilt, dass er versuchen soll, das gesamte Medium herunterzuladen, wenn die Seite geladen wird. Ohne `preload` lädt der Browser genug von den Medien herunter, um das erste Videobild anzuzeigen und die Dauer der Medien zu bestimmen.

- `preload` ist standardmäßig ausgeschaltet. Wenn das Video der Schwerpunkt Ihrer Webseite ist, könnten Ihre Benutzer es schätzen, wenn Sie `preload` in Ihren Videoelementen enthalten.
- Die Verwendung von `preload="metadata"` wird die Metadaten der Mediendatei und möglicherweise die ersten paar Videoframes vorladen. Das Setzen von `payload` auf `auto` teilt dem Browser mit, dass er das Medium automatisch mit dem Laden der Seite herunterladen soll, in der Annahme, dass der Benutzer es abspielen wird.

## Verwenden Sie keine HTTP-Komprimierung für Ogg-Medien

Eine weit verbreitete Methode, um die Belastung eines Webservers zu verringern, besteht darin, [gzip- oder Deflate-Komprimierung](https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/) zu verwenden, wenn auf einen unterstützenden Webbrowser zugegriffen wird.

Obwohl es unwahrscheinlich ist, könnte es sein, dass der Browser anzeigt, dass er die HTTP-Komprimierung (gzip/deflate) unterstützt, indem er den `Accept-Encoding: gzip,deflate`-Header verwendet, wenn er Mediendateien anfordert. Ihr Server sollte so konfiguriert sein, dass dies nicht der Fall ist. Die Daten in Mediendateien sind bereits komprimiert, sodass Sie keinen wirklichen Vorteil aus der Komprimierung ziehen, und die Verwendung der Komprimierung macht es unmöglich, dass der Browser das Video richtig durchsucht oder dessen Dauer bestimmt.

Ein weiteres Problem bei der Erlaubnis der HTTP-Komprimierung für das Medien-Streaming: Apache-Server senden den {{HTTPHeader("Content-Length")}}-Antwort-Header nicht, wenn die gzip-Codierung verwendet wird.

## Dauer von Ogg-Medien ermitteln

Sie können das `oggz-info`-Tool verwenden, um die Mediendauer zu ermitteln; dieses Tool ist im [`oggz-tools`](https://www.xiph.org/oggz/)-Paket enthalten. Die Ausgabe von `oggz-info` sieht so aus:

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

Beachten Sie, dass Sie die von `oggz-info` gemeldete Content-Dauerzeile nicht direkt verwenden können, da sie im `HH:MM:SS`-Format angegeben wird.
Sie müssen sie in Sekunden umrechnen und dann als Ihren `X-Content-Duration`-Wert bereitstellen.
Sie können dies tun, indem Sie die `HH`, `MM` und `SS`-Segmente auslesen und dann in `(HH * 3600) + (MM * 60) + SS` umrechnen als den Wert, den Sie angeben sollten.

Es ist wichtig zu beachten, dass `oggz-info` scheinbar einen Lesedurchgang des Mediums durchführt, um seine Dauer zu berechnen. Daher ist es eine gute Idee, den Dauerwert zu speichern, um lange Verzögerungen zu vermeiden, während der Wert für jede HTTP-Anfrage Ihres Ogg-Mediums berechnet wird.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
