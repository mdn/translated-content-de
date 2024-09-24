---
title: "Multimedia: Video"
slug: Learn/Performance/video
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/Multimedia", "Learn/Performance/javascript_performance", "Learn/Performance")}}

Wie wir im vorherigen Abschnitt gelernt haben, machen Medien, namentlich Bilder und Videos, über 70 % der heruntergeladenen Bytes für die durchschnittliche Website aus. Wir haben bereits einen Blick darauf geworfen, Bilder zu optimieren. Dieser Artikel befasst sich mit der Optimierung von Videos, um die Web-Performance zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren, welche verschiedenen Videoformate es gibt, welchen Einfluss sie auf die Performance haben und wie man die Auswirkung von Videos auf die gesamte Ladezeit der Seite reduziert, während man die kleinste Videodateigröße basierend auf der Dateitypunterstützung jedes Browsers bereitstellt.
      </td>
    </tr>
  </tbody>
</table>

## Warum sollten Sie Ihre Multimedia-Inhalte optimieren?

Für die durchschnittliche Website stammen [25 % der Bandbreite von Videos](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367). Die Optimierung von Videos bietet großes Potenzial für erhebliche Bandbreiteneinsparungen, die zu einer besseren Performance der Website führen.

## Optimierung der Videoauslieferung

Die folgenden Abschnitte beschreiben die folgenden Optimierungstechniken:

- [Alle Videos komprimieren](#alle_videos_komprimieren)
- [Reihenfolge der `<source>` optimieren](#optimize_source_order)
- [Audio von stummgeschalteten Videos entfernen](#audio_von_stummgeschalteten_hero-videos_entfernen)
- [Video Preload optimieren](#video_preload)
- [Streaming in Betracht ziehen](#streaming_in_betracht_ziehen)

### Alle Videos komprimieren

Die meisten Video-Kompressionsarbeiten vergleichen benachbarte Frames innerhalb eines Videos, um Details zu entfernen, die in beiden Frames identisch sind. Komprimieren Sie das Video und exportieren Sie es in mehrere Videoformate, einschließlich WebM und MPEG-4/H.264.

Ihre Videosoftware verfügt wahrscheinlich über eine Funktion zur Reduzierung der Dateigröße. Falls nicht, gibt es Online-Tools, wie [FFmpeg](https://www.ffmpeg.org/) (im untenstehenden Abschnitt behandelt), die kodieren, dekodieren, konvertieren und andere Optimierungsfunktionen ausführen.

### Reihenfolge der `<source>` optimieren

Ordnen Sie die Videoquellen von der kleinsten zur größten. Zum Beispiel, bei gegebenen Videokompressionen in den Formaten mit 10 MB und 12 MB, deklarieren Sie zuerst die 10 MB-Ressource:

```html
<video width="400" height="300" controls="controls">
  <!-- WebM: 10 MB -->
  <source src="video.webm" type="video/webm" />
  <!-- MPEG-4/H.264: 12 MB -->
  <source src="video.mp4" type="video/mp4" />
</video>
```

Der Browser lädt das erste Format herunter, das er versteht. Das Ziel ist es, kleinere Versionen vor größeren anzubieten. Bei der kleinsten Version sollten Sie sicherstellen, dass das am meisten komprimierte Video immer noch gut aussieht. Es gibt einige Kompressionsalgorithmen, die das Video schlecht aussehen lassen können (wie ein animiertes GIF). Während ein 128 Kb-Video im Vergleich zu einem 10 MB-Download eine bessere Benutzererfahrung bieten könnte, kann ein körniges, gif-ähnliches Video dem Marken- oder Projektimage schaden.

### Audio von stummgeschalteten Hero-Videos entfernen

Für Hero-Videos oder andere Videos ohne Ton ist es klug, den Ton zu entfernen.

```html
<video autoplay="" loop="" muted playsinline="" id="hero-video">
  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="web_banner.mp4" type="video/mp4" />
</video>
```

Dieser Hero-Video-Code (oben) ist typisch für Konferenzwebsites und Unternehmens-Homepages. Er enthält ein Video, das automatisch abgespielt, geloopt und stummgeschaltet wird. Es gibt keine Steuerungsmöglichkeiten, sodass Audio nicht gehört werden kann. Der Ton ist oft leer, aber dennoch vorhanden und beansprucht Bandbreite. Es gibt keinen Grund, Audio mit einem Video zu liefern, das immer stummgeschaltet ist. **Das Entfernen von Audio kann 20 % der Bandbreite einsparen.**

Abhängig von Ihrer Softwarewahl können Sie möglicherweise während des Exports und der Komprimierung den Ton entfernen. Falls nicht, kann ein kostenloses Programm namens [FFmpeg](https://www.ffmpeg.org/) dies für Sie tun. Dies ist der FFmpeg-Befehlsstring, um den Ton zu entfernen:

```bash
ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4
```

### Video Preload

Das Attribut preload hat drei verfügbare Optionen: `auto`, `metadata` und `none`. Die Standardeinstellung ist `metadata`. Diese Einstellungen steuern, wie viel von einer Videodatei beim Laden der Seite heruntergeladen wird. Sie können Daten sparen, indem Sie den Download für weniger beliebte Videos verschieben.

Das Setzen von `preload="none"` führt dazu, dass kein Teil des Videos bis zur Wiedergabe heruntergeladen wird. Es verzögert den Start, bietet aber erhebliche Dateneinsparungen für Videos mit geringer Abspielwahrscheinlichkeit.

Das Setzen von `preload="metadata"` bietet bescheidenere Bandbreiteneinsparungen und kann bis zu 3 % des Videos beim Laden der Seite herunterladen. Diese Option ist für einige kleine oder mittelgroße Dateien nützlich.

Das Ändern der Einstellung auf `auto` weist den Browser an, das gesamte Video automatisch herunterzuladen. Dies sollten Sie nur tun, wenn die Wiedergabe sehr wahrscheinlich ist. Andernfalls verschwendet es viel Bandbreite.

### Streaming in Betracht ziehen

[Video-Streaming ermöglicht es, die richtige Videogröße und Bandbreite](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/) (basierend auf der Netzwerkgeschwindigkeit) an den Endbenutzer zu liefern. Ähnlich wie bei responsiven Bildern wird das korrekte Größenformat des Videos an den Browser geliefert, was einen schnellen Videostart, geringes Puffern und optimierte Wiedergabe sicherstellt.

## Fazit

Die Optimierung von Videos hat das Potenzial, die Website-Performance erheblich zu verbessern. Videodateien sind vergleichsweise groß im Vergleich zu anderen Website-Dateien und verdienen immer Aufmerksamkeit. Dieser Artikel erklärt, wie Sie Videos auf Websites optimieren können, indem Sie die Dateigröße reduzieren, (HTML-)Download-Einstellungen verwenden und Streaming anwenden.

{{PreviousMenuNext("Learn/Performance/Multimedia", "Learn/Performance/javascript_performance", "Learn/Performance")}}
