---
title: "Multimedia: Video"
slug: Learn/Performance/video
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/Multimedia", "Learn/Performance/javascript_performance", "Learn/Performance")}}

Wie wir im vorherigen Abschnitt gelernt haben, machen Medien, nämlich Bilder und Videos, über 70 % der heruntergeladenen Bytes für die durchschnittliche Website aus. Wir haben bereits die Optimierung von Bildern betrachtet. Dieser Artikel befasst sich mit der Optimierung von Videos, um die Web-Performance zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, und Grundkenntnisse in
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen Sie die verschiedenen Videoformate kennen, deren Einfluss auf die Leistung, und wie Sie die Auswirkungen von Videos auf die gesamte Ladezeit der Seite reduzieren können, während Sie die kleinste Videodateigröße basierend auf dem Dateityp-Support jedes Browsers bereitstellen.
      </td>
    </tr>
  </tbody>
</table>

## Warum sollten Sie Ihr Multimedia optimieren?

Bei der durchschnittlichen Website stammen [25 % der Bandbreite von Videos](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367). Das Optimieren von Videos kann zu sehr großen Einsparungen bei der Bandbreite führen, die sich in einer besseren Website-Performance übersetzen.

## Optimierung der Video-Bereitstellung

Die folgenden Abschnitte beschreiben die Optimierungstechniken:

- [Alle Videos komprimieren](#alle_videos_komprimieren)
- [Reihenfolge der `<source>`-Elemente optimieren](#optimize_source_order)
- [Audio von stummen Videos entfernen](#audio_von_stummen_videos_entfernen)
- [Video-Preload optimieren](#video-preload)
- [Streaming in Betracht ziehen](#streaming_in_betracht_ziehen)

### Alle Videos komprimieren

Die meiste Videokompressionsarbeit vergleicht benachbarte Frames innerhalb eines Videos, um Details zu entfernen, die in beiden Frames identisch sind. Komprimieren Sie das Video und exportieren Sie es in mehrere Videoformate, einschließlich WebM und MPEG-4/H.264.

Ihre Videobearbeitungssoftware hat wahrscheinlich eine Funktion zur Reduzierung der Dateigröße. Wenn nicht, gibt es Online-Tools wie [FFmpeg](https://www.ffmpeg.org/) (im folgenden Abschnitt besprochen), die kodieren, dekodieren, konvertieren und andere Optimierungsfunktionen ausführen.

### Reihenfolge der `<source>`-Elemente optimieren

Ordnen Sie Videoquellen von klein nach groß. Zum Beispiel, wenn Videos in den Formaten mit 10MB und 12MB komprimiert sind, deklarieren Sie die 10MB-Ressource zuerst:

```html
<video width="400" height="300" controls="controls">
  <!-- WebM: 10 MB -->
  <source src="video.webm" type="video/webm" />
  <!-- MPEG-4/H.264: 12 MB -->
  <source src="video.mp4" type="video/mp4" />
</video>
```

Der Browser lädt das erste Format herunter, das er versteht. Das Ziel ist es, kleinere Versionen vor größeren Versionen anzubieten. Bei der kleinsten Version stellen Sie sicher, dass das am meisten komprimierte Video immer noch gut aussieht. Es gibt einige Kompressionsalgorithmen, bei denen das Video (schlecht) wie ein animiertes GIF aussehen kann. Während ein 128 Kb Video besser als ein 10 MB Download erscheinen mag, könnte ein körniges GIF-ähnliches Video schlecht auf die Marke oder das Projekt zurückfallen.

### Audio von stummen Videos entfernen

Für Hero-Videos oder andere Videos ohne Ton ist das Entfernen von Audio sinnvoll.

```html
<video autoplay="" loop="" muted playsinline="" id="hero-video">
  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="web_banner.mp4" type="video/mp4" />
</video>
```

Dieser Hero-Video-Code (oben) ist auf Konferenzwebsites und Unternehmens-Homepages häufig. Es enthält ein Video, das automatisch abgespielt, wiederholt und stummgeschaltet ist. Es gibt keine Bedienelemente, daher gibt es keine Möglichkeit, Audio zu hören. Das Audio ist oft leer, aber immer noch vorhanden und verbraucht weiterhin Bandbreite. Es gibt keinen Grund, Audio mit Videos bereitzustellen, die immer stummgeschaltet sind. **Das Entfernen von Audio kann 20 % der Bandbreite einsparen.**

Je nach Ihrer Wahl der Software können Sie Audio möglicherweise während des Exports und der Kompression entfernen. Wenn nicht, kann ein kostenloses Hilfsprogramm namens [FFmpeg](https://www.ffmpeg.org/) dies für Sie erledigen. Dies ist die FFmpeg-Befehlsfolge zum Entfernen von Audio:

```bash
ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4
```

### Video-Preload

Das Attribut `preload` hat drei verfügbare Optionen: `auto`, `metadata` und `none`. Die Standardeinstellung ist `metadata`. Diese Einstellungen steuern, wie viel von einer Videodatei mit der Seitenladung heruntergeladen wird. Sie können Daten sparen, indem Sie den Download für weniger beliebte Videos aufschieben.

Das Setzen von `preload="none"` führt dazu, dass kein Teil des Videos bis zur Wiedergabe heruntergeladen wird. Es verzögert den Start, bietet aber erhebliche Dateneinsparungen für Videos mit geringer Wahrscheinlichkeit der Wiedergabe.

Durch das Setzen von `preload="metadata"` können bis zu 3 % des Videos bei der Seitenladung heruntergeladen werden, was moderate Bandbreiteneinsparungen bietet. Dies ist eine nützliche Option für einige kleine oder mittelgroße Dateien.

Die Änderung der Einstellung auf `auto` weist den Browser an, das gesamte Video automatisch herunterzuladen. Tun Sie dies nur, wenn die Wiedergabe sehr wahrscheinlich ist. Andernfalls verschwendet es viel Bandbreite.

### Streaming in Betracht ziehen

[Video-Streaming ermöglicht es, die richtige Videogröße und Bandbreite](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/) (basierend auf der Netzwerkgeschwindigkeit) für den Endbenutzer bereitzustellen. Ähnlich wie bei responsiven Bildern wird das richtige Größen-Video an den Browser geliefert, was schnellen Video-Start, geringes Buffering und optimierte Wiedergabe gewährleistet.

## Fazit

Das Optimieren von Videos hat das Potenzial, die Website-Performance erheblich zu verbessern. Videodateien sind im Vergleich zu anderen Website-Dateien relativ groß und immer einer Überlegung wert. Dieser Artikel erklärt, wie Sie Website-Videos durch die Reduzierung der Dateigröße, mit (HTML)-Download-Einstellungen und durch Streaming optimieren können.

{{PreviousMenuNext("Learn/Performance/Multimedia", "Learn/Performance/javascript_performance", "Learn/Performance")}}
