---
title: "Multimedia: video"
slug: Learn/Performance/video
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/Multimedia", "Learn/Performance/javascript_performance", "Learn/Performance")}}

Wie wir im vorherigen Abschnitt gelernt haben, machen Medien, hauptsächlich Bilder und Videos, über 70% der heruntergeladenen Bytes einer durchschnittlichen Website aus. Wir haben bereits einen Blick darauf geworfen, wie Bilder optimiert werden können. Dieser Artikel befasst sich mit der Optimierung von Videos zur Verbesserung der Web-Performance.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, und grundlegende Kenntnisse in
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie lernen die verschiedenen Videoformate kennen, deren Einfluss auf die Leistung und wie man die Auswirkungen von Videos auf die gesamte Ladezeit der Seite reduzieren kann, während die kleinste Videodateigröße basierend auf der Dateityp-Unterstützung jedes Browsers bereitgestellt wird.
      </td>
    </tr>
  </tbody>
</table>

## Warum sollte man Multimedia optimieren?

Für die durchschnittliche Website kommen [25 % der Bandbreite von Videos](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367). Die Optimierung von Videos bietet ein großes Potenzial für erhebliche Bandbreiteneinsparungen, die zu einer besseren Website-Performance führen.

## Optimierung der Videoübertragung

Die folgenden Abschnitte beschreiben die folgenden Optimierungstechniken:

- [Alle Videos komprimieren](#alle_videos_komprimieren)
- [Reihenfolge der `<source>`-Elemente optimieren](#optimize_source_order)
- [Audio von stummgeschalteten Videos entfernen](#audio_von_stummgeschalteten_videos_entfernen)
- [Video Preload optimieren](#video_preload)
- [Streaming in Betracht ziehen](#streaming_in_betracht_ziehen)

### Alle Videos komprimieren

Die meisten Videokomprimierungen vergleichen benachbarte Frames innerhalb eines Videos, um Details zu entfernen, die in beiden Frames identisch sind. Komprimieren Sie das Video und exportieren Sie es in mehrere Videoformate, einschließlich WebM und MPEG-4/H.264.

Ihre Videosoftware verfügt wahrscheinlich über eine Funktion zur Reduzierung der Dateigröße. Falls nicht, gibt es Online-Tools wie [FFmpeg](https://www.ffmpeg.org/) (im folgenden Abschnitt besprochen), die kodieren, dekodieren, konvertieren und andere Optimierungsfunktionen durchführen.

### Reihenfolge der `<source>`-Elemente optimieren

Reihen Sie die Videoquellen vom kleinsten zum größten. Zum Beispiel: Bei Video-Komprimierungen im Format von 10MB und 12MB deklarieren Sie die 10MB-Ressource zuerst:

```html
<video width="400" height="300" controls="controls">
  <!-- WebM: 10 MB -->
  <source src="video.webm" type="video/webm" />
  <!-- MPEG-4/H.264: 12 MB -->
  <source src="video.mp4" type="video/mp4" />
</video>
```

Der Browser lädt das erste Format herunter, das er versteht. Das Ziel ist es, kleinere Versionen größeren Versionen vorzuziehen. Achten Sie darauf, dass auch die am meisten komprimierte Version des Videos noch gut aussieht. Manche Komprimierungsalgorithmen können Videos aussehen lassen wie animierte GIFs. Auch wenn ein 128 Kb Video wie eine bessere Benutzererfahrung als ein 10 MB Download wirken könnte, kann ein körniges GIF-ähnliches Video das Marken- oder Projektimage schädigen.

### Audio von stummgeschalteten Videos entfernen

Für Hero-Videos oder andere Videos ohne Audio ist das Entfernen von Audio sinnvoll.

```html
<video autoplay="" loop="" muted playsinline="" id="hero-video">
  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="web_banner.mp4" type="video/mp4" />
</video>
```

Der oben gezeigte Hero-Video-Code ist häufig auf Konferenzwebsites und Unternehmens-Homepages zu finden. Er enthält ein Video, das automatisch abgespielt, in einer Schleife wiedergegeben und stummgeschaltet ist. Es gibt keine Steuerelemente, sodass es nicht möglich ist, Audio zu hören. Oft ist das Audio leer, aber trotzdem vorhanden und belastet trotzdem die Bandbreite. Es gibt keinen Grund, Audio mit einem Video bereitzustellen, das immer stumm ist. **Das Entfernen von Audio kann 20 % der Bandbreite sparen.**

Je nach Ihrer Softwareauswahl können Sie möglicherweise Audio während des Exportierens und Komprimierens entfernen. Wenn nicht, kann ein kostenloses Hilfsprogramm namens [FFmpeg](https://www.ffmpeg.org/) dies für Sie tun. Dies ist der FFmpeg-Befehl, um Audio zu entfernen:

```bash
ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4
```

### Video Preload

Das `preload`-Attribut hat drei verfügbare Optionen: `auto`, `metadata` und `none`. Die Standardeinstellung ist `metadata`. Diese Einstellungen steuern, wie viel von einer Videodatei beim Laden der Seite heruntergeladen wird. Sie können Daten sparen, indem Sie den Download für weniger populäre Videos aufschieben.

Mit der Einstellung `preload="none"` wird kein Video heruntergeladen, bis die Wiedergabe beginnt. Dies verzögert den Start, bietet jedoch signifikante Dateneinsparungen für Videos mit einer geringen Wiedergabewahrscheinlichkeit.

Eine bescheidenere Einsparung bietet die Einstellung `preload="metadata"`, bei der bis zu 3 % des Videos beim Laden der Seite heruntergeladen werden können. Dies ist eine nützliche Option für einige kleine oder mäßig große Dateien.

Wenn Sie die Einstellung auf `auto` ändern, wird dem Browser mitgeteilt, das gesamte Video automatisch herunterzuladen. Dies sollte nur dann erfolgen, wenn die Wiedergabe sehr wahrscheinlich ist. Andernfalls verschwendet es viel Bandbreite.

### Streaming in Betracht ziehen

[Video-Streaming ermöglicht es, die richtige Videogröße und Bandbreite](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/) (basierend auf der Netzwerkgeschwindigkeit) an den Endbenutzer zu liefern. Ähnlich wie bei responsiven Bildern, wird das Video in der korrekten Größe an den Browser geliefert, was einen schnellen Video-Start, geringes Puffern und optimierte Wiedergabe gewährleistet.

## Fazit

Die Optimierung von Videos hat das Potenzial, die Leistungsfähigkeit von Websites erheblich zu verbessern. Videodateien sind im Vergleich zu anderen Website-Dateien relativ groß und verdienen immer Aufmerksamkeit. Dieser Artikel erklärt, wie Sie Website-Videos durch Reduzierung der Dateigröße, mit (HTML-)Download-Einstellungen und durch Streaming optimieren können.

{{PreviousMenuNext("Learn/Performance/Multimedia", "Learn/Performance/javascript_performance", "Learn/Performance")}}
