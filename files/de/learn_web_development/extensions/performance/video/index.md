---
title: "Multimedia: Video"
slug: Learn_web_development/Extensions/Performance/video
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance")}}

Wie wir im vorherigen Abschnitt gelernt haben, machen Medien, nämlich Bilder und Videos, über 70% der heruntergeladenen Bytes für die durchschnittliche Website aus. Wir haben bereits einen Blick auf die Optimierung von Bildern geworfen. Dieser Artikel befasst sich mit der Optimierung von Videos zur Verbesserung der Web-Performance.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse der
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren, welche verschiedenen Videoformate existieren, wie sie die Leistung beeinflussen und wie man den Einfluss von Videos auf die gesamte Ladezeit einer Seite reduzieren kann, während die kleinste Videodateigröße basierend auf der Dateitypunterstützung jedes Browsers bereitgestellt wird.
      </td>
    </tr>
  </tbody>
</table>

## Warum sollten Sie Ihre Multimedia-Inhalte optimieren?

Für die durchschnittliche Website stammen [25% der Bandbreite von Videos](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367). Die Optimierung von Videos hat das Potenzial für sehr große Bandbreiteneinsparungen, die zu einer besseren Website-Performance führen.

## Videoauslieferung optimieren

Die folgenden Abschnitte beschreiben die folgenden Optimierungstechniken:

- [Alle Videos komprimieren](#alle_videos_komprimieren)
- [Reihenfolge der `<source>`-Elemente optimieren](#optimize_source_order)
- [Audio von stummgeschalteten Videos entfernen](#audio_von_stummgeschalteten_videos_entfernen)
- [Video-Preload optimieren](#video-preload)
- [Streaming in Betracht ziehen](#streaming_in_betracht_ziehen)

### Alle Videos komprimieren

Die meisten Videokompressionsarbeiten vergleichen aufeinanderfolgende Frames innerhalb eines Videos, um Details zu entfernen, die in beiden Frames identisch sind. Komprimieren Sie das Video und exportieren Sie es in mehrere Videoformate, einschließlich WebM und MPEG-4/H.264.

Ihre Videosoftware hat wahrscheinlich eine Funktion zur Reduzierung der Dateigröße. Wenn nicht, gibt es Online-Tools wie [FFmpeg](https://www.ffmpeg.org/) (im untenstehenden Abschnitt besprochen), die kodieren, dekodieren, konvertieren und andere Optimierungsfunktionen ausführen.

### Reihenfolge der `<source>`-Elemente optimieren

Ordnen Sie die Videoquellen von der kleinsten zur größten. Zum Beispiel, wenn Video-Kompressionen in den Formaten von 10MB und 12MB vorliegen, deklarieren Sie die 10MB-Ressource zuerst:

```html
<video width="400" height="300" controls="controls">
  <!-- WebM: 10 MB -->
  <source src="video.webm" type="video/webm" />
  <!-- MPEG-4/H.264: 12 MB -->
  <source src="video.mp4" type="video/mp4" />
</video>
```

Der Browser lädt das erste Format herunter, das er versteht. Ziel ist es, kleinere Versionen vor größeren anzubieten. Achten Sie bei der kleinsten Version darauf, dass das komprimierte Video immer noch gut aussieht. Es gibt einige Kompressionsalgorithmen, die das Video schlecht aussehen lassen können, wie ein animiertes GIF. Während ein 128 Kb Video möglicherweise eine bessere Benutzererfahrung als ein 10 MB Download bieten könnte, kann ein körniges GIF-ähnliches Video schlecht auf die Marke oder das Projekt zurückfallen.

### Audio von stummgeschalteten Videos entfernen

Für Hero-Videos oder andere Videos ohne Audio ist das Entfernen von Audio sinnvoll.

```html
<video autoplay="" loop="" muted playsinline="" id="hero-video">
  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="web_banner.mp4" type="video/mp4" />
</video>
```

Dieser Hero-Video-Code (oben) ist häufig auf Konferenzwebseiten und Unternehmens-Homepages zu finden. Er beinhaltet ein Video, das automatisch abgespielt, geloopt und stummgeschaltet wird. Es gibt keine Steuerungselemente, daher gibt es keine Möglichkeit, Audio zu hören. Das Audio ist oft leer, aber dennoch vorhanden und verbraucht immer noch Bandbreite. Es gibt keinen Grund, Audio mit einem Video bereitzustellen, das immer stummgeschaltet ist. **Das Entfernen von Audio kann 20% der Bandbreite sparen.**

Abhängig von Ihrer Softwareauswahl können Sie Audio während des Exports und der Kompression möglicherweise entfernen. Wenn nicht, kann ein kostenloses Programm namens [FFmpeg](https://www.ffmpeg.org/) dies für Sie tun. Dies ist der FFmpeg-Befehl, um Audio zu entfernen:

```bash
ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4
```

### Video-Preload

Das `preload`-Attribut hat drei verfügbare Optionen: `auto`, `metadata` und `none`. Die Standardeinstellung ist `metadata`. Diese Einstellungen steuern, wie viel von einer Videodatei beim Laden der Seite heruntergeladen wird. Sie können Daten sparen, indem Sie den Download für weniger beliebte Videos aufschieben.

Das Setzen von `preload="none"` führt dazu, dass kein Teil des Videos bis zur Wiedergabe heruntergeladen wird. Es verzögert den Start, bietet jedoch erhebliche Dateneinsparungen für Videos mit geringer Wahrscheinlichkeit der Wiedergabe.

Durch das Setzen von `preload="metadata"` können bis zu 3% des Videos beim Seitenladen heruntergeladen werden, was bescheidene Bandbreiteneinsparungen bietet. Dies ist eine nützliche Option für einige kleine oder mittelgroße Dateien.

Die Einstellung `auto` teilt dem Browser mit, das gesamte Video automatisch herunterzuladen. Tun Sie dies nur, wenn die Wiedergabe sehr wahrscheinlich ist. Andernfalls verschwendet es viel Bandbreite.

### Streaming in Betracht ziehen

[Video-Streaming ermöglicht die Bereitstellung der passenden Videogröße und -bandbreite](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/) (basierend auf der Netzwerkgeschwindigkeit) an den Endbenutzer. Ähnlich wie bei responsiven Bildern wird das richtige Videogröße an den Browser geliefert, was einen schnellen Videostart, geringes Puffern und optimierte Wiedergabe gewährleistet.

## Fazit

Die Optimierung von Videos hat das Potenzial, die Website-Performance erheblich zu verbessern. Videodateien sind im Vergleich zu anderen Website-Dateien relativ groß und erfordern immer Aufmerksamkeit. Dieser Artikel erklärt, wie man Website-Videos durch Reduzierung der Dateigröße, mit (HTML)-Download-Einstellungen und durch Streaming optimieren kann.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance")}}
