---
title: Konfiguration von Servern für Ogg-Medien
slug: Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTML {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen die Medienpräsentation, ohne dass der Benutzer Erweiterungen oder andere Software installieren muss.
Dieser Leitfaden behandelt die Serverkonfiguration, die möglicherweise erforderlich ist, um Ogg-Mediendateien korrekt zu liefern.
Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server noch nicht erkennt.

## Medien mit dem korrekten MIME-Typ bereitstellen

Wenn Sie nicht wissen, ob die Ogg-Datei Audio oder Video enthält, können Sie sie mit dem MIME-Typ `application/ogg` bereitstellen, und der Browser behandelt sie als Videodatei.

- `*.ogg` und `*.ogv`-Dateien, die Video enthalten (möglicherweise natürlich auch mit einem Audiotrack), sollten mit dem MIME-Typ `video/ogg` bereitgestellt werden.
- `*.oga` und `*.ogg`-Dateien, die nur Audio enthalten, sollten mit dem MIME-Typ `audio/ogg` bereitgestellt werden.

Die meisten Server liefern Ogg-Medien standardmäßig nicht mit den korrekten MIME-Typen, daher müssen Sie wahrscheinlich die entsprechende Konfiguration hinzufügen.

Für Apache können Sie Folgendes zu Ihrer Konfiguration hinzufügen:

```apacheconf
AddType audio/ogg .oga
AddType video/ogg .ogv
AddType application/ogg .ogg
```

Der Artikel zu [Media-Container-Formaten](/de/docs/Web/Media/Guides/Formats/Containers) ist besonders hilfreich, um Server für die ordnungsgemäße Bereitstellung von Medien zu konfigurieren.

## Range-Anfragen korrekt behandeln

Um das Suchen und Abspielen von Medienabschnitten zu unterstützen, die noch nicht heruntergeladen wurden, können Sie [Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) verwenden, um die Medien ab der Zielposition der Suche abzurufen.
Zusätzlich werden Byte-Bereichs-Anfragen verwendet, um ans Ende der Medien zu gelangen (vorausgesetzt, Sie liefern den {{HTTPHeader("Content-Length")}}-Header), um die Dauer der Medien zu bestimmen.

Ihr Server sollte den {{HTTPHeader("Accept-Ranges")}}-Header akzeptieren, wenn er Range-Anfragen verarbeiten kann.
Er muss {{HTTPStatus("206", "206 Partial Content")}} auf alle Range-Anfragen zurückgeben, andernfalls können Browser nicht feststellen, ob der Server Range-Anfragen unterstützt.
Ihr Server muss auch `206: Partial Content` für die Anfrage `Range: bytes=0-` zurückgeben.

Weitere Informationen finden Sie unter [Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests).

## Regelmäßige Keyframes einfügen

Wenn der Browser durch Ogg-Medien zu einem bestimmten Zeitpunkt navigiert, muss er zum nächsten Keyframe vor dem Zielpunkt der Suche springen, dann das Video von dort herunter- und dekodieren, bis die angeforderte Zielzeit erreicht ist. Je weiter Ihre Keyframes auseinanderliegen, desto länger dauert das, daher ist es hilfreich, Keyframes in regelmäßigen Abständen einzufügen.

Standardmäßig verwendet [`ffmpeg2theora`](https://gitlab.xiph.org/xiph/ffmpeg2theora) einen Keyframe alle 64 Frames (oder etwa alle 2 Sekunden bei 30 Frames pro Sekunde), was ziemlich gut funktioniert.

> [!NOTE]
> Natürlich gilt: Je mehr Keyframes Sie verwenden, desto größer ist Ihre Videodatei, daher müssen Sie möglicherweise ein wenig experimentieren, um die richtige Balance zwischen Dateigröße und Suchleistung zu finden.

## Erwägen Sie die Verwendung des preload-Attributs

Die HTML {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente bieten das `preload`-Attribut, das dem Browser mitteilt, zu versuchen, das gesamte Medium beim Laden der Seite herunterzuladen. Ohne `preload` lädt der Browser nur so viel des Mediums herunter, um das erste Videoframe anzuzeigen und die Dauer des Mediums zu bestimmen.

- `preload` ist standardmäßig deaktiviert, daher könnten Ihre Benutzer es schätzen, wenn Sie `preload` in Ihren Videoelementen einschließen, wenn das Abspielen des Videos der Zweck Ihrer Webseite ist.
- Die Verwendung von `preload="metadata"` lädt die Metadaten der Mediendatei und möglicherweise die ersten Video-Frames vor. Wenn Sie `preload` auf `auto` setzen, lädt der Browser automatisch das Medium, sobald die Seite geladen ist, in der Annahme, dass der Benutzer es abspielen wird.

## Verwenden Sie keine HTTP-Komprimierung für Ogg-Medien

Eine übliche Methode zur Entlastung eines Webservers ist die Verwendung von [gzip oder deflate Komprimierung](https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/) bei der Bereitstellung an einen unterstützenden Webbrowser.

Obwohl es unwahrscheinlich ist, kann es sein, dass der Browser meldet, dass er HTTP-Komprimierung (gzip/deflate) unterstützt, indem er den `Accept-Encoding: gzip,deflate`-Header sendet, wenn er Mediendateien anfordert. Ihr Server sollte so konfiguriert sein, dies nicht zu tun. Die Daten in Mediendateien sind bereits komprimiert, sodass Sie durch Komprimierung keinen wirklichen Nutzen erzielen, und die Verwendung von Komprimierung macht es dem Browser unmöglich, das Video richtig zu suchen oder dessen Dauer zu bestimmen.

Ein weiteres Problem bei der Aktivierung von HTTP-Komprimierung für Medien-Streaming: Apache-Server senden den {{HTTPHeader("Content-Length")}}-Antwortheader nicht, wenn gzip-Codierung verwendet wird.

## Die Dauer von Ogg-Medien bestimmen

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

Beachten Sie, dass Sie die von `oggz-info` gemeldete Content-Duration-Zeile nicht bereitstellen können, da sie im `HH:MM:SS`-Format gemeldet wird.
Sie müssen sie in Sekunden umwandeln und dann als Ihren `X-Content-Duration`-Wert bereitstellen.
Sie können dies tun, indem Sie die Segmente `HH`, `MM` und `SS` analysieren und dann zu `(HH * 3600) + (MM * 60) + SS` umwandeln, um den Wert zu erhalten, den Sie melden sollten.

Es ist wichtig zu beachten, dass `oggz-info` scheinbar einen Lesevorgang des Mediums ausführt, um dessen Dauer zu berechnen. Daher ist es eine gute Idee, den Dauerwert zu speichern, um lange Verzögerungen zu vermeiden, während der Wert bei jeder HTTP-Anfrage an Ihre Ogg-Medien berechnet wird.

## Siehe auch

- [Leitfaden zu Medienarten und Formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
