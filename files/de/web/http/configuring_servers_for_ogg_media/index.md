---
title: Konfiguration von Servern für Ogg-Medien
slug: Web/HTTP/Configuring_servers_for_Ogg_media
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen die Medienpräsentation, ohne dass der Benutzer zusätzliche Plug-ins oder Software installieren muss.
Dieser Leitfaden behandelt einige Konfigurationsänderungen, die möglicherweise für Ihren Webserver erforderlich sind, um Ogg-Mediendateien korrekt bereitzustellen.
Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server nicht bereits erkennt.

## Medien mit dem richtigen MIME-Typ bereitstellen

`*.ogg`- und `*.ogv`-Dateien, die Videos (möglicherweise auch mit einer Audiospur) enthalten, sollten mit dem MIME-Typ `video/ogg` bereitgestellt werden. `*.oga`- und `*.ogg`-Dateien, die nur Audio enthalten, sollten mit dem MIME-Typ `audio/ogg` bereitgestellt werden.

Wenn Sie nicht wissen, ob die Ogg-Datei Audio oder Video enthält, können Sie sie mit dem MIME-Typ `application/ogg` bereitstellen, und der Browser wird sie als Videodatei behandeln.

Die meisten Server stellen standardmäßig Ogg-Medien nicht mit den richtigen MIME-Typen bereit, sodass Sie wahrscheinlich die entsprechende Konfiguration hinzufügen müssen.

Für Apache können Sie Folgendes zu Ihrer Konfiguration hinzufügen:

```plain
AddType audio/ogg .oga
AddType video/ogg .ogv
AddType application/ogg .ogg
```

Spezifische Informationen über mögliche Medientypen und die in ihnen verwendeten Codecs finden Sie in unserem umfassenden [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats). Insbesondere der Artikel über [Mediencontainerformate](/de/docs/Web/Media/Formats/Containers) wird beim Konfigurieren von Servern zur ordnungsgemäßen Bereitstellung von Medien besonders hilfreich sein.

## HTTP 1.1-Bytebereichsanfragen korrekt bearbeiten

Um das Suchen und Abspielen von noch nicht heruntergeladenen Bereichen der Medien zu unterstützen, verwendet Firefox HTTP 1.1-Bytebereichsanfragen, um die Medien ab der Zielposition abzurufen.
Zusätzlich verwendet es Bytebereichsanfragen, um zum Ende des Mediums zu springen (sofern Sie den {{HTTPHeader("Content-Length")}}-Header bereitstellen), um die Dauer des Mediums zu bestimmen.

Ihr Server sollte den HTTP-Header {{HTTPHeader("Accept-Ranges")}}`: bytes` akzeptieren, wenn er Bytebereichsanfragen verarbeiten kann. Er muss auf alle Bytebereichsanfragen {{HTTPStatus("206")}}`: Partial Content` zurückgeben; andernfalls können sich Browser nicht sicher sein, dass Sie tatsächlich Bytebereichsanfragen unterstützen.
Ihr Server muss auch `206: Partial Content` für die Anfrage `Range: bytes=0-` zurückgeben.

Weitere Informationen finden Sie unter [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests).

## Regelmäßige Schlüsselbilder einschließen

Wenn der Browser durch Ogg-Medien zu einer bestimmten Zeit sucht, muss er zum nächstgelegenen Schlüsselbild vor dem Zielpunkt springen und das Video von dort aus herunterladen und decodieren, bis die gewünschte Zielzeit erreicht ist. Je weiter Ihre Schlüsselbilder voneinander entfernt sind, desto länger dauert dies, sodass es hilfreich ist, Schlüsselbilder in regelmäßigen Abständen einzufügen.

Standardmäßig verwendet [`ffmpeg2theora`](https://gitlab.xiph.org/xiph/ffmpeg2theora) ein Schlüsselbild alle 64 Bilder (oder etwa alle 2 Sekunden bei 30 Bildern pro Sekunde), was ziemlich gut funktioniert.

> [!NOTE]
> Je mehr Schlüsselbilder Sie verwenden, desto größer ist Ihre Videodatei, sodass Sie möglicherweise ein wenig experimentieren müssen, um das richtige Gleichgewicht zwischen Dateigröße und Suchleistung zu finden.

## Verwenden Sie das Attribut preload

Die HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente bieten das `preload`-Attribut, das dem Browser mitteilt, beim Laden der Seite zu versuchen, das gesamte Medium herunterzuladen. Ohne `preload` lädt der Browser nur genügend Medien herunter, um das erste Videobild anzuzeigen und die Dauer des Mediums zu bestimmen.

`preload` ist standardmäßig deaktiviert, daher könnten Ihre Benutzer es zu schätzen wissen, wenn das Ziel Ihrer Webseite das Video ist und Sie `preload` in Ihre Video-Elemente aufnehmen. Die Verwendung von `preload="metadata"` lädt die Metadaten der Mediendatei und möglicherweise die ersten Bilder des Videos vor. `preload` auf `auto` setzen, sagt dem Browser, das Medium automatisch herunterzuladen, sobald die Seite geladen ist, in der Annahme, dass der Benutzer es abspielen möchte.

## Konfiguration für ältere Firefox-Versionen

### Serve X-Content-Duration Header

> [!NOTE]
> Ab [Firefox 41](/de/docs/Mozilla/Firefox/Releases/41) wird der `X-Content-Duration`-Header nicht mehr unterstützt. Weitere Informationen finden Sie im [Firefox-Fehler 1160695](https://bugzil.la/1160695).

Das Ogg-Format kapselt die Dauer der Medien nicht ein. Damit die Fortschrittsleiste auf den Videosteuerungen die Dauer des Videos anzeigt, muss Gecko die Länge der Medien auf andere Weise bestimmen.

Gecko kann dies auf zwei Arten tun. Der beste Weg ist es, einen `X-Content-Duration`-Header bereitzustellen, wenn Ogg-Mediendateien bereitgestellt werden. Dieser Header gibt die Dauer des Videos in Sekunden (**nicht** im HH:MM:SS-Format) als Gleitkommawert an.

Beispielsweise, wenn das Video 1 Minute und 32,6 Sekunden lang ist, würde dieser Header lauten:

```http
X-Content-Duration: 92.6
```

Wenn Ihr Server den `X-Content-Duration`-Header beim Bereitstellen von Ogg-Medien liefert, muss Gecko keine zusätzlichen HTTP-Anfragen stellen, um zum Ende der Datei zu springen und deren Dauer zu berechnen. Dies macht den gesamten Prozess viel effizienter und genauer.

Als schlechtere Alternative kann Gecko die Länge des Videos basierend auf der Content-Length schätzen. Siehe nächsten Punkt.

### Verwenden Sie keine HTTP-Kompression für Mediendateien

Ein häufiger Weg, um die Last auf einem Webserver zu reduzieren, ist die Verwendung von [Gzip oder Deflate-Kompression](https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/) beim Bereitstellen an einen unterstützenden Webbrowser.

Auch wenn es unwahrscheinlich ist, könnte es sein, dass der Browser angibt, dass er HTTP-Kompression (gzip/deflate) unterstützt, indem er den `Accept-Encoding: gzip,deflate`-Header verwendet, wenn er Mediendateien anfordert. Ihr Server sollte so konfiguriert sein, dass dies nicht geschieht. Die Daten in Mediendateien sind bereits komprimiert, sodass Sie keinen wirklichen Nutzen durch Kompression erzielen, und die Verwendung von Kompression macht es unmöglich für den Browser, richtig nach dem Video zu suchen oder dessen Dauer zu bestimmen.

Ein weiteres Problem mit der Zulassung von HTTP-Kompression für Medienstreaming: Apache-Server senden nicht den {{HTTPHeader("Content-Length")}}-Header, wenn gzip-Codierung verwendet wird.

### Die Dauer von Ogg-Medien ermitteln

Sie können das `oggz-info`-Tool verwenden, um die Dauer der Medien zu ermitteln; dieses Tool ist im [`oggz-tools`](https://www.xiph.org/oggz/) Paket enthalten. Die Ausgabe von `oggz-info` sieht so aus:

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

Beachten Sie, dass Sie die von `oggz-info` gemeldete Content-Duration-Zeile nicht so bereitstellen können, wie sie gemeldet wird, da sie im HH:MM:SS-Format gemeldet wird. Sie müssen es nur in Sekunden umrechnen und dann als `X-Content-Duration`-Wert bereitstellen. Parsen Sie einfach HH, MM und SS als Zahlen und berechnen Sie (HH\*3600)+(MM\*60)+SS, um den Wert zu ermitteln, den Sie melden sollten.

Es ist wichtig zu beachten, dass es scheint, dass `oggz-info` einen Lesedurchlauf des Mediums macht, um dessen Dauer zu berechnen, sodass es sinnvoll ist, den Dauerwert zu speichern, um lange Verzögerungen zu vermeiden, während der Wert für jede HTTP-Anfrage Ihrer Ogg-Medien berechnet wird.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
