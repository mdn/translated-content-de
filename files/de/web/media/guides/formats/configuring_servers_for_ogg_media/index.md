---
title: Konfiguration von Servern für Ogg-Medien
slug: Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen die Präsentation von Medien, ohne dass der Benutzer Erweiterungen oder andere Software installieren muss. Dieser Leitfaden behandelt die Serverkonfiguration, die möglicherweise erforderlich ist, um Ogg-Mediendateien korrekt bereitzustellen. Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server noch nicht zu erkennen weiß.

## Medien mit dem richtigen MIME-Typ bereitstellen

Wenn Sie nicht wissen, ob die Ogg-Datei Audio oder Video enthält, können Sie sie mit dem MIME-Typ `application/ogg` bereitstellen, und der Browser behandelt sie als Videodatei.

- `*.ogg`- und `*.ogv`-Dateien, die Video enthalten (möglicherweise auch mit einer Audiospur), sollten mit dem MIME-Typ `video/ogg` bereitgestellt werden.
- `*.oga`- und `*.ogg`-Dateien, die nur Audio enthalten, sollten mit dem MIME-Typ `audio/ogg` bereitgestellt werden.

Die meisten Server liefern Ogg-Medien standardmäßig nicht mit den korrekten MIME-Typen aus, daher müssen Sie wahrscheinlich die entsprechende Konfiguration dafür hinzufügen.

Für Apache können Sie Folgendes zu Ihrer Konfiguration hinzufügen:

```apacheconf
AddType audio/ogg .oga
AddType video/ogg .ogv
AddType application/ogg .ogg
```

Der Artikel über [Mediencontainerformate](/de/docs/Web/Media/Guides/Formats/Containers) ist besonders hilfreich, wenn Sie Server so konfigurieren, dass sie Medien korrekt hosten.

## Bereichsanfragen korrekt behandeln

Um das Suchen und Abspielen von Bereichen des Mediums zu unterstützen, die noch nicht heruntergeladen wurden, können Sie [Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) verwenden, um das Medium von der Zielposition des Suchens abzurufen. Darüber hinaus werden Byte-Bereichsanfragen verwendet, um zum Ende des Mediums zu suchen (vorausgesetzt, dass Sie den {{HTTPHeader("Content-Length")}}-Header bereitstellen), um die Dauer des Mediums zu bestimmen.

Ihr Server sollte den {{HTTPHeader("Accept-Ranges")}}-Header akzeptieren, wenn er Bereichsanfragen verarbeiten kann. Er muss {{HTTPStatus("206", "206 Partial Content")}} auf alle Bereichsanfragen zurückgeben, andernfalls können Browser nicht feststellen, ob der Server Bereichsanfragen unterstützt. Ihr Server muss auch `206: Partial Content` für die Anfrage `Range: bytes=0-` zurückgeben.

Weitere Informationen finden Sie in den [Bereichsanfragen](/de/docs/Web/HTTP/Range_requests).

## Regelmäßige Schlüsselbilder einfügen

Wenn der Browser durch Ogg-Medien zu einer bestimmten Zeit sucht, muss er bis zum nächsten Schlüsselbild vor dem Suchziel suchen und dann das Video von dort herunterladen und decodieren, bis die gewünschte Zielzeit erreicht ist. Je weiter Ihre Schlüsselbilder auseinander liegen, desto länger dauert dies, daher ist es hilfreich, Schlüsselbilder in regelmäßigen Abständen einzufügen.

Standardmäßig verwendet [`ffmpeg2theora`](https://gitlab.xiph.org/xiph/ffmpeg2theora) ein Schlüsselbild alle 64 Frames (oder etwa alle 2 Sekunden bei 30 Frames pro Sekunde), was recht gut funktioniert.

> [!NOTE]
> Natürlich gilt: Je mehr Schlüsselbilder Sie verwenden, desto größer ist Ihre Videodatei. Sie müssen möglicherweise ein wenig experimentieren, um das richtige Gleichgewicht zwischen Dateigröße und Suchleistung zu finden.

## Erwägen Sie die Verwendung des preload-Attributs

Die HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente bieten das `preload`-Attribut, das dem Browser signalisiert, zu versuchen, das gesamte Medium zu laden, wenn die Seite lädt. Ohne `preload` lädt der Browser genug des Mediums herunter, um das erste Videobild anzuzeigen und die Dauer des Mediums zu bestimmen.

- `preload` ist standardmäßig deaktiviert. Wenn das Video der Hauptzweck Ihrer Webseite ist, werden es Ihre Benutzer schätzen, wenn Sie `preload` in Ihren Videoelementen einschließen.
- Die Verwendung von `preload="metadata"` lädt die Metadaten der Mediendatei und möglicherweise die ersten paar Bilder des Videos vor. Wenn Sie `preload` auf `auto` setzen, weist dies den Browser an, das Medium automatisch herunterzuladen, sobald die Seite geladen ist, in der Annahme, dass der Benutzer es abspielen wird.

## Kein HTTP-Kompression für Ogg-Medien verwenden

Eine gängige Methode zur Reduzierung der Serverlast ist die Verwendung von [gzip oder deflate-Komprimierung](https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/), wenn ein unterstützender Webbrowser bedient wird.

Obwohl es unwahrscheinlich ist, kann es passieren, dass der Browser angibt, dass er HTTP-Komprimierung (gzip/deflate) mit dem `Accept-Encoding: gzip,deflate`-Header unterstützt, wenn er Mediendateien anfordert. Ihr Server sollte so konfiguriert sein, dies nicht zu tun. Die Daten in Mediendateien sind bereits komprimiert, sodass Sie keinen wirklichen Nutzen aus der Komprimierung ziehen werden, und die Verwendung von Komprimierung macht es dem Browser unmöglich, ordnungsgemäß im Video zu suchen oder dessen Dauer zu bestimmen.

Ein weiteres Problem bei der Erlaubnis von HTTP-Komprimierung für Medienstreaming: Apache-Server senden den {{HTTPHeader("Content-Length")}}-Antwortheader nicht, wenn gzip-Kodierung verwendet wird.

## Dauer von Ogg-Medien ermitteln

Sie können das Tool `oggz-info` verwenden, um die Mediendauer zu ermitteln; dieses Tool ist im Paket [`oggz-tools`](https://www.xiph.org/oggz/) enthalten. Die Ausgabe von `oggz-info` sieht so aus:

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

Beachten Sie, dass Sie die von `oggz-info` gemeldete Content-Duration-Zeile nicht in dieser Form bereitstellen können, da sie im `HH:MM:SS`-Format gemeldet wird. Sie müssen sie in Sekunden umrechnen und als Ihren `X-Content-Duration`-Wert ausgeben. Sie können dies tun, indem Sie die `HH`-, `MM`- und `SS`-Segmente analysieren und dann zu `(HH * 3600) + (MM * 60) + SS` als den Wert konvertieren, den Sie angeben sollten.

Es ist wichtig zu beachten, dass `oggz-info` scheinbar einen Lesedurchgang des Mediums macht, um seine Dauer zu berechnen, daher ist es eine gute Idee, den Wert der Dauer zu speichern, um lange Verzögerungen zu vermeiden, während der Wert für jede HTTP-Anfrage Ihres Ogg-Mediums berechnet wird.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
