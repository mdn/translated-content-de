---
title: Server für Ogg-Medien konfigurieren
slug: Web/HTTP/Configuring_servers_for_Ogg_media
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen die Medienpräsentation, ohne dass der Benutzer dazu Plug-ins oder andere Software installieren muss. Dieser Leitfaden behandelt einige Änderungen an der Serverkonfiguration, die möglicherweise notwendig sind, damit Ihr Webserver Ogg-Mediendateien korrekt bereitstellt. Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server nicht bereits zu erkennen weiß.

## Medien mit dem korrekten MIME-Typ bereitstellen

Dateien `*.ogg` und `*.ogv`, die Video enthalten (möglicherweise auch mit einer Tonspur), sollten mit dem MIME-Typ `video/ogg` bereitgestellt werden. Dateien `*.oga` und `*.ogg`, die nur Audio enthalten, sollten mit dem MIME-Typ `audio/ogg` bereitgestellt werden.

Wenn Sie nicht wissen, ob die Ogg-Datei Audio oder Video enthält, können Sie sie mit dem MIME-Typ `application/ogg` bereitstellen, und der Browser behandelt sie als Videodatei.

Die meisten Server stellen Ogg-Medien standardmäßig nicht mit den korrekten MIME-Typen bereit, sodass Sie höchstwahrscheinlich die entsprechende Konfiguration dafür hinzufügen müssen.

Für Apache können Sie Folgendes zu Ihrer Konfiguration hinzufügen:

```plain
AddType audio/ogg .oga
AddType video/ogg .ogv
AddType application/ogg .ogg
```

Spezifische Informationen über mögliche Medientypen und die darin verwendeten Codecs finden Sie in unserem umfassenden [Leitfaden zu Medienarten und -formaten im Web](/de/docs/Web/Media/Formats). Insbesondere der Artikel über [Mediencontainerformate](/de/docs/Web/Media/Formats/Containers) wird besonders hilfreich sein, wenn Sie Server richtig für Medien konfigurieren möchten.

## HTTP 1.1-Bytebereichsanfragen korrekt behandeln

Um das Suchen und Abspielen von Bereichen der Medien zu unterstützen, die noch nicht heruntergeladen wurden, verwendet Firefox HTTP 1.1-Bytebereichsanfragen, um die Medien von der Zielposition des Suchvorgangs abzurufen. Zusätzlich verwendet er Bytebereichsanfragen, um zum Ende der Medien zu suchen (vorausgesetzt, Sie geben den {{HTTPHeader("Content-Length")}}-Header an), um die Dauer der Medien zu bestimmen.

Ihr Server sollte den HTTP-Header {{HTTPHeader("Accept-Ranges")}}`: bytes` akzeptieren, wenn er Bytebereichsanfragen akzeptieren kann. Er muss auf alle Bytebereichsanfragen {{HTTPStatus("206")}}`: Partial content` zurückgeben; andernfalls können Browser nicht sicher sein, dass Sie Bytebereichsanfragen tatsächlich unterstützen. Ihr Server muss auch `206: Partial Content` für die Anfrage `Range: bytes=0-` zurückgeben.

Weitere Informationen finden Sie in [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests).

## Regelmäßige Schlüsselbilder einfügen

Wenn der Browser durch Ogg-Medien zu einer bestimmten Zeit sucht, muss er zum nächstgelegenen Schlüsselbild vor dem Suchziel springen und das Video von dort aus herunterladen und dekodieren, bis die angeforderte Zielzeit erreicht ist. Je weiter Ihre Schlüsselbilder auseinander liegen, desto länger dauert dies, daher ist es hilfreich, Schlüsselbilder in regelmäßigen Abständen einzuschließen.

Standardmäßig verwendet [`ffmpeg2theora`](https://gitlab.xiph.org/xiph/ffmpeg2theora) ein Schlüsselbild alle 64 Bilder (oder etwa alle 2 Sekunden bei 30 Bildern pro Sekunde), was recht gut funktioniert.

> [!NOTE]
> Natürlich gilt: Je mehr Schlüsselbilder Sie verwenden, desto größer ist Ihre Videodatei, daher sollten Sie vielleicht ein wenig experimentieren, um das richtige Gleichgewicht zwischen Dateigröße und Suchleistung zu finden.

## Überlegen Sie sich, das preload-Attribut zu verwenden

Die HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente bieten das `preload`-Attribut, das den Browser anweist, zu versuchen, die gesamte Media herunterzuladen, wenn die Seite geladen wird. Ohne `preload` lädt der Browser nur genügend Medien herunter, um den ersten Videoframe anzuzeigen und die Dauer der Medien zu bestimmen.

`preload` ist standardmäßig deaktiviert, daher könnten Ihre Benutzer es schätzen, wenn Sie `preload` in Ihre Videoelemente einfügen, falls das Video der Hauptzweck Ihrer Webseite ist. Mit `preload="metadata"` wird die Metadaten der Mediendatei und möglicherweise die ersten Bilder des Videos vorab geladen. Die Einstellung von `preload` auf `auto` weist den Browser an, automatisch mit dem Herunterladen der Medien zu beginnen, sobald die Seite geladen ist, in der Annahme, dass der Benutzer sie abspielen wird.

## Konfiguration für ältere Firefox-Versionen

### X-Content-Duration-Header bereitstellen

> [!NOTE]
> Ab [Firefox 41](/de/docs/Mozilla/Firefox/Releases/41) wird der `X-Content-Duration`-Header nicht länger unterstützt. Siehe [Firefox-Bug 1160695](https://bugzil.la/1160695) für weitere Details.

Das Ogg-Format kapselt die Dauer der Medien nicht ein, sodass Gecko die Länge der Medien auf andere Weise bestimmen muss, damit die Fortschrittsleiste in den Videosteuerungen die Dauer des Videos anzeigen kann.

Es gibt zwei Möglichkeiten, wie Gecko dies tun kann. Der beste Weg ist die Bereitstellung eines `X-Content-Duration`-Headers, wenn Ogg-Medien bereitgestellt werden. Dieser Header gibt die Dauer des Videos in Sekunden (**nicht** im HH:MM:SS-Format) als Gleitkommawert an.

Zum Beispiel, wenn das Video 1 Minute und 32,6 Sekunden lang ist, wäre dieser Header:

```http
X-Content-Duration: 92.6
```

Wenn Ihr Server den `X-Content-Duration`-Header bereitstellt, während Ogg-Medien bereitgestellt werden, muss Gecko keine zusätzlichen HTTP-Anfragen an das Ende der Datei senden, um deren Dauer zu berechnen. Dies macht den gesamten Prozess viel effizienter und genauer.

Als minderwertige Alternative kann Gecko die Videolänge basierend auf der Content-Length schätzen. Siehe den nächsten Punkt.

### Keine HTTP-Komprimierung für Mediendateien verwenden

Eine übliche Methode, um die Last auf einem Webserver zu reduzieren, besteht darin, [gzip- oder deflate-Komprimierung](https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/) beim Bereitstellen an einen unterstützenden Webbrowser zu verwenden.

Obwohl es unwahrscheinlich ist, kann der Browser möglicherweise angeben, dass er HTTP-Komprimierung (gzip/deflate) unterstützt, indem er den Header `Accept-Encoding: gzip,deflate` sendet, wenn er Mediendateien anfordert. Ihr Server sollte so konfiguriert sein, dass er dies nicht tut. Die Daten in Mediendateien sind bereits komprimiert, sodass Sie keinen wirklichen Vorteil aus der Komprimierung ziehen werden, und die Verwendung der Komprimierung macht es dem Browser unmöglich, das Video richtig zu durchsuchen oder dessen Dauer zu bestimmen.

Ein weiteres Problem mit der Erlaubnis von HTTP-Komprimierung für Medienstreaming: Apache-Server senden den {{HTTPHeader("Content-Length")}}-Antwortheader nicht, wenn gzip-Codierung verwendet wird.

### Dauer von Ogg-Medien ermitteln

Sie können das Tool `oggz-info` verwenden, um die Mediendauer zu ermitteln; dieses Tool ist im [`oggz-tools`](https://www.xiph.org/oggz/)-Paket enthalten. Die Ausgabe von `oggz-info` sieht folgendermaßen aus:

```plain
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

Beachten Sie, dass Sie die gemeldete Content-Duration-Zeile, die von `oggz-info` ausgegeben wird, nicht direkt bereitstellen können, da sie im HH:MM:SS-Format vorliegt. Sie müssen sie lediglich in Sekunden umwandeln und dann diesen Wert als Ihren `X-Content-Duration`-Wert bereitstellen. Einfach die HH, MM und SS in Zahlen aufteilen und dann (HH\*3600)+(MM\*60)+SS berechnen, um den Wert zu erhalten, den Sie angeben sollten.

Es ist wichtig zu beachten, dass `oggz-info` offenbar einen Lesevorgang der Medien vornimmt, um deren Dauer zu bestimmen, sodass es sinnvoll sein könnte, den Dauerwert zu speichern, um lange Verzögerungen zu vermeiden, während der Wert für jede HTTP-Anfrage Ihrer Ogg-Medien berechnet wird.

## Siehe auch

- [Leitfaden zu Medienarten und -formaten im Web](/de/docs/Web/Media/Formats)
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
