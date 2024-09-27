---
title: Konfigurieren von Servern für Ogg-Medien
slug: Web/HTTP/Configuring_servers_for_Ogg_media
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente ermöglichen die Medienwiedergabe, ohne dass der Benutzer Plug-ins oder andere Software installieren muss.
Dieser Leitfaden behandelt einige Serverkonfigurationsänderungen, die möglicherweise erforderlich sind, damit Ihr Webserver Ogg-Mediendateien korrekt bereitstellt.
Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server nicht bereits zu erkennen konfiguriert ist.

## Medien mit dem richtigen MIME-Typ bereitstellen

`*.ogg`- und `*.ogv`-Dateien, die Video (möglicherweise auch mit einer Tonspur) enthalten, sollten mit dem MIME-Typ `video/ogg` bereitgestellt werden. `*.oga`- und `*.ogg`-Dateien, die nur Audio enthalten, sollten mit dem MIME-Typ `audio/ogg` bereitgestellt werden.

Wenn Sie nicht wissen, ob die Ogg-Datei Audio oder Video enthält, können Sie sie mit dem MIME-Typ `application/ogg` bereitstellen, und der Browser behandelt sie als Videodatei.

Die meisten Server stellen standardmäßig keine Ogg-Medien mit den richtigen MIME-Typen bereit, daher müssen Sie wahrscheinlich die entsprechende Konfiguration dafür hinzufügen.

Für Apache können Sie Folgendes zu Ihrer Konfiguration hinzufügen:

```plain
AddType audio/ogg .oga
AddType video/ogg .ogv
AddType application/ogg .ogg
```

Spezifische Informationen zu möglichen Medientypen und den darin verwendeten Codecs finden Sie in unserem umfassenden [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats). Insbesondere der Artikel über [Mediencontainerformate](/de/docs/Web/Media/Formats/Containers) wird besonders hilfreich sein, wenn Sie Server richtig für das Hosten von Medien konfigurieren.

## HTTP 1.1 Byte-Range-Anfragen korrekt handhaben

Um das Suchen und Abspielen von Bereichen des Mediums zu unterstützen, die noch nicht heruntergeladen wurden, verwendet Firefox HTTP 1.1 Byte-Range-Anfragen, um das Medium von der Zielposition aus abzurufen.
Darüber hinaus verwendet es Byte-Range-Anfragen, um zum Ende des Mediums zu suchen (vorausgesetzt, Sie liefern den {{HTTPHeader("Content-Length")}} Header), um die Dauer des Mediums zu bestimmen.

Ihr Server sollte den HTTP-Header {{HTTPHeader("Accept-Ranges")}}`: bytes` akzeptieren, wenn er Byte-Range-Anfragen akzeptieren kann. Er muss {{HTTPStatus("206")}}`: Partial content` für alle Byte-Range-Anfragen zurückgeben; andernfalls können Browser nicht sicher sein, dass Sie tatsächlich Byte-Range-Anfragen unterstützen.
Ihr Server muss auch `206: Partial Content` für die Anfrage `Range: bytes=0-` zurückgeben.

Weitere Informationen finden Sie unter [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests).

## Regelmäßige Schlüsselbilder einfügen

Wenn der Browser durch Ogg-Medien zu einer bestimmten Zeit sucht, muss er bis zum nächsten Schlüsselbild vor dem Suchziel suchen, dann das Video von dort herunterladen und dekodieren, bis die gewünschte Zielzeit erreicht ist. Je weiter Ihre Schlüsselbilder auseinander liegen, desto länger dauert dies, daher ist es hilfreich, Schlüsselbilder in regelmäßigen Abständen einzufügen.

Standardmäßig verwendet [`ffmpeg2theora`](https://gitlab.xiph.org/xiph/ffmpeg2theora) ein Schlüsselbild alle 64 Bilder (oder etwa alle 2 Sekunden bei 30 Bildern pro Sekunde), was ziemlich gut funktioniert.

> [!NOTE]
> Natürlich gilt: Je mehr Schlüsselbilder Sie verwenden, desto größer ist Ihre Videodatei. Daher müssen Sie möglicherweise ein wenig experimentieren, um das richtige Gleichgewicht zwischen Dateigröße und Suchleistung zu finden.

## Erwägen Sie die Verwendung des preload-Attributs

Die HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente bieten das `preload`-Attribut, das den Browser anweist, zu versuchen, das gesamte Medium herunterzuladen, wenn die Seite geladen wird. Ohne `preload` lädt der Browser nur genug des Mediums herunter, um das erste Videobild anzuzeigen und die Dauer des Mediums zu bestimmen.

`preload` ist standardmäßig deaktiviert. Wenn das Video der Hauptinhalt Ihrer Webseite ist, könnten Ihre Benutzer es schätzen, wenn Sie `preload` in Ihren Videoelementen einschließen. Die Verwendung von `preload="metadata"` lädt die Metadaten der Mediendatei vor und möglicherweise die ersten paar Video-Frames. Wenn `payload` auf `auto` gesetzt ist, wird der Browser angewiesen, das Herunterladen des Mediums automatisch zu starten, sobald die Seite geladen ist, da angenommen wird, dass der Benutzer es abspielen wird.

## Konfiguration für ältere Firefox-Versionen

### X-Content-Duration-Header bereitstellen

> [!NOTE]
> Ab [Firefox 41](/de/docs/Mozilla/Firefox/Releases/41) wird der `X-Content-Duration`-Header nicht mehr unterstützt. Details finden Sie in [Firefox Bug 1160695](https://bugzil.la/1160695).

Das Ogg-Format kapselt die Dauer des Mediums nicht ein. Um die Fortschrittsleiste in den Videosteuerungen anzuzeigen, benötigt Gecko andere Mittel, um die Länge des Mediums zu bestimmen.

Es gibt zwei Möglichkeiten, wie Gecko dies tun kann. Der beste Weg ist die Bereitstellung eines `X-Content-Duration`-Headers, wenn Ogg-Mediendateien bereitgestellt werden. Dieser Header liefert die Dauer des Videos in Sekunden (**nicht** im HH:MM:SS-Format) als Gleitpunktwert.

Zum Beispiel, wenn das Video 1 Minute und 32,6 Sekunden lang ist, wäre dieser Header:

```http
X-Content-Duration: 92.6
```

Wenn Ihr Server den `X-Content-Duration`-Header bei der Bereitstellung von Ogg-Medien bereitstellt, muss Gecko keine zusätzlichen HTTP-Anfragen stellen, um das Ende der Datei zu erreichen, um ihre Dauer zu berechnen. Dadurch wird der gesamte Prozess viel effizienter und genauer.

Als schlechtere Alternative kann Gecko die Videolänge basierend auf der Content-Length schätzen. Siehe nächster Punkt.

### Keine HTTP-Komprimierung für Mediendateien verwenden

Eine übliche Methode, um die Belastung eines Webservers zu reduzieren, besteht darin, [gzip- oder deflate-Komprimierung](https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/) beim Bereitstellen an einen unterstützenden Webbrowser zu verwenden.

Obwohl es unwahrscheinlich ist, könnte es sein, dass der Browser beim Anfordern von Mediendateien meldet, dass er HTTP-Komprimierung (gzip/deflate) mit dem Header `Accept-Encoding: gzip,deflate` unterstützt. Ihr Server sollte so konfiguriert sein, dies nicht zu tun. Die Daten in Mediendateien sind bereits komprimiert, sodass Sie keinen wirklichen Vorteil aus der Komprimierung ziehen, und die Verwendung der Komprimierung macht es dem Browser unmöglich, das Video richtig zu durchlaufen oder seine Dauer zu bestimmen.

Ein weiteres Problem bei der Erlaubnis der HTTP-Komprimierung für Medienstreaming: Apache-Server senden den {{HTTPHeader("Content-Length")}} Antwortheader nicht, wenn gzip-Codierung verwendet wird.

### Die Dauer von Ogg-Medien ermitteln

Sie können das Tool `oggz-info` verwenden, um die Mediendauer zu ermitteln. Dieses Tool ist im [`oggz-tools`](https://www.xiph.org/oggz/) Paket enthalten. Die Ausgabe von `oggz-info` sieht wie folgt aus:

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

Beachten Sie, dass Sie die von `oggz-info` gemeldete Content-Duration-Zeile nicht bereitstellen können, da sie im HH:MM:SS-Format gemeldet wird. Sie müssen sie in Sekunden umrechnen und dann als Ihren `X-Content-Duration`-Wert bereitstellen. Teilen Sie einfach die HH, MM und SS in Zahlen um, dann machen Sie (HH\*3600)+(MM\*60)+SS, um den Wert zu erhalten, den Sie melden sollten.

Es ist wichtig zu beachten, dass es den Anschein hat, dass `oggz-info` einen Lesevorgang des Mediums durchführt, um dessen Dauer zu berechnen. Daher ist es eine gute Idee, den Dauerwert zu speichern, um lange Verzögerungen zu vermeiden, während der Wert für jede HTTP-Anfrage Ihrer Ogg-Medien berechnet wird.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
