---
title: "Multimedia: video"
slug: Learn_web_development/Extensions/Performance/video
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance")}}

Wie wir im vorherigen Abschnitt gelernt haben, machen Medien, nämlich Bilder und Videos, über 70 % der heruntergeladenen Bytes einer durchschnittlichen Website aus. Wir haben bereits einen Blick auf die Optimierung von Bildern geworfen. Dieser Artikel befasst sich mit der Optimierung von Videos, um die Webleistung zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen der verschiedenen Videoformate, ihres Einflusses auf die Leistung und wie man den Videoeinfluss auf die gesamte Ladezeit der Seite reduzieren kann, während man die kleinste Videodateigröße basierend auf dem Dateitypunterstützung jedes Browsers bereitstellt.
      </td>
    </tr>
  </tbody>
</table>

## Warum sollte man Multimedia optimieren?

Bei einer durchschnittlichen Website stammen [25 % der Bandbreite von Videos](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367). Die Optimierung von Videos bietet Potenzial für sehr große Bandbreiteneinsparungen, die sich in einer besseren Website-Performance niederschlagen.

## Optimierung der Videobereitstellung

Die folgenden Abschnitte beschreiben die nachstehenden Optimierungstechniken:

- [alle Videos komprimieren](#alle_videos_komprimieren)
- [`<source>`-Reihenfolge optimieren](#optimize_source_order)
- [Audio von stummgeschalteten Videos entfernen](#audio_von_stummgeschalteten_hero-videos_entfernen)
- [Video-Preload optimieren](#video-preload)
- [Streaming in Betracht ziehen](#streaming_in_betracht_ziehen)

### Alle Videos komprimieren

Die meisten Videokompressionsverfahren vergleichen benachbarte Frames innerhalb eines Videos, mit dem Ziel, Details zu entfernen, die in beiden Frames identisch sind. Komprimieren Sie das Video und exportieren Sie es in mehrere Videoformate, einschließlich WebM und MPEG-4/H.264.

Ihre Videobearbeitungssoftware verfügt wahrscheinlich über eine Funktion zur Dateigrößenreduzierung. Falls nicht, gibt es Online-Tools wie [FFmpeg](https://www.ffmpeg.org/) (im unten stehenden Abschnitt besprochen), die kodieren, dekodieren, konvertieren und andere Optimierungsfunktionen durchführen können.

### `<source>`-Reihenfolge optimieren

Ordnen Sie die Videoquellen von der kleinsten zur größten. Wenn Sie beispielsweise Videokompressionen in den Formaten 10 MB und 12 MB haben, geben Sie zuerst die 10 MB-Ressource an:

```html
<video width="400" height="300" controls="controls">
  <!-- WebM: 10 MB -->
  <source src="video.webm" type="video/webm" />
  <!-- MPEG-4/H.264: 12 MB -->
  <source src="video.mp4" type="video/mp4" />
</video>
```

Der Browser lädt das erste Format herunter, das er versteht. Ziel ist es, kleinere Versionen vor größeren Versionen anzubieten. Bei der kleinsten Version sollten Sie sicherstellen, dass das am stärksten komprimierte Video immer noch gut aussieht. Es gibt einige Kompressionsalgorithmen, die Video wie ein animiertes GIF aussehen lassen (schlecht). Auch wenn ein 128 Kb-Video wie eine bessere Benutzererfahrung als ein 10 MB-Download erscheinen mag, kann ein körniges, GIF-ähnliches Video schlecht auf die Marke oder das Projekt zurückfallen.

### Audio von stummgeschalteten Hero-Videos entfernen

Für Hero-Videos oder andere Videos ohne Audio ist das Entfernen von Audio sinnvoll.

```html
<video autoplay="" loop="" muted playsinline="" id="hero-video">
  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="web_banner.mp4" type="video/mp4" />
</video>
```

Dieses Hero-Video-Code (oben) ist typisch für Konferenzwebsites und Unternehmens-Homepages. Es enthält ein Video, das automatisch abgespielt, geloopt und stummgeschaltet ist. Es gibt keine Bedienelemente, daher gibt es keine Möglichkeit, das Audio zu hören. Das Audio ist oft leer, aber immer noch vorhanden und verbraucht Bandbreite. Es gibt keinen Grund, Audio mit Video zu servieren, das immer stummgeschaltet ist. **Das Entfernen von Audio kann 20 % der Bandbreite sparen.**

Abhängig von Ihrer Softwareauswahl können Sie Audio während des Exports und der Komprimierung möglicherweise entfernen. Wenn nicht, kann ein kostenloses Dienstprogramm namens [FFmpeg](https://www.ffmpeg.org/) dies für Sie erledigen. Dies ist der FFmpeg-Befehlsstring, um Audio zu entfernen:

```bash
ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4
```

### Video-Preload

Das `preload`-Attribut hat drei verfügbare Optionen: `auto`, `metadata` und `none`. Die Standardeinstellung ist `metadata`. Diese Einstellungen steuern, wie viel von einer Videodatei mit dem Seitenaufruf heruntergeladen wird. Sie können Daten sparen, indem Sie den Download für weniger populäre Videos verzögern.

Die Einstellung `preload="none"` führt dazu, dass nichts vom Video heruntergeladen wird, bis die Wiedergabe beginnt. Dies verzögert den Start, bietet jedoch erhebliche Dateneinsparungen für Videos mit einer geringen Wahrscheinlichkeit der Wiedergabe.

Wenn man mehr bescheidene Bandbreiteneinsparungen bieten möchte, kann man mit `preload="metadata"` bis zu 3 % des Videos bei Seitenaufruf herunterladen. Dies ist eine nützliche Option für einige kleine oder mittelgroße Dateien.

Wenn Sie die Einstellung auf `auto` ändern, weist dies den Browser an, das gesamte Video automatisch herunterzuladen. Tun Sie dies nur, wenn die Wiedergabe sehr wahrscheinlich ist. Andernfalls verschwendet es viel Bandbreite.

### Streaming in Betracht ziehen

[Video-Streaming ermöglicht die Bereitstellung der richtigen Video-Größe und Bandbreite](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/) (basierend auf der Netzwerkgeschwindigkeit) für den Endbenutzer. Ähnlich wie bei responsiven Bildern wird das richtige Videoformat an den Browser geliefert, was einen schnellen Videostart, geringes Puffern und optimierte Wiedergabe gewährleistet.

## Schlussfolgerung

Die Optimierung von Video hat das Potenzial, die Leistung der Website erheblich zu verbessern. Videodateien sind im Vergleich zu anderen Website-Dateien relativ groß und erfordern immer Aufmerksamkeit. Dieser Artikel erklärt, wie man Website-Videos durch Reduzierung der Dateigröße, mit (HTML-) Download-Einstellungen und mit Streaming optimieren kann.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance")}}
