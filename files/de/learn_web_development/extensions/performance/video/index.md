---
title: "Multimedia: video"
slug: Learn_web_development/Extensions/Performance/video
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance")}}

Wie wir im vorherigen Abschnitt gelernt haben, machen Medien, nämlich Bilder und Videos, über 70% der heruntergeladenen Bytes für die durchschnittliche Website aus. Wir haben bereits einen Blick auf die Optimierung von Bildern geworfen. Dieser Artikel befasst sich mit der Optimierung von Videos zur Verbesserung der Web-Performance.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >client-seitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um mehr über die verschiedenen Videoformate, deren Auswirkungen auf die Leistung und darüber zu lernen, wie man die Auswirkungen von Videos auf die gesamte Seitenladezeit verringert, während die kleinste Dateigröße des Videos abhängig von der Dateityp-Unterstützung jedes Browsers bereitgestellt wird.
      </td>
    </tr>
  </tbody>
</table>

## Warum sollten Sie Ihre Multimedia-Inhalte optimieren?

Für die durchschnittliche Website kommen [25% der Bandbreite von Videos](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367). Die Optimierung von Videos bietet das Potenzial für sehr große Einsparungen bei der Bandbreite, die in eine bessere Website-Performance umgesetzt werden können.

## Optimierung der Videoauslieferung

Die folgenden Abschnitte beschreiben die folgenden Optimierungstechniken:

- [alle Videos komprimieren](#alle_videos_komprimieren)
- [Reihenfolge der `<source>`-Elemente optimieren](#optimize_source_order)
- [Audio von stummgeschalteten Videos entfernen](#audio_von_stummgeschalteten_videos_entfernen)
- [Video-Preload optimieren](#video-preload)
- [Streaming in Betracht ziehen](#streaming_in_betracht_ziehen)

### Alle Videos komprimieren

Die meisten Videokomprimierungsarbeiten vergleichen benachbarte Frames innerhalb eines Videos, um Details zu entfernen, die in beiden Frames identisch sind. Komprimieren Sie das Video und exportieren Sie es in mehrere Videoformate, einschließlich WebM und MPEG-4/H.264.

Ihre Videobearbeitungssoftware verfügt wahrscheinlich über eine Funktion zur Reduzierung der Dateigröße. Falls nicht, gibt es Online-Tools wie [FFmpeg](https://www.ffmpeg.org/), die in einem untenstehenden Abschnitt besprochen werden, und die kodieren, dekodieren, konvertieren und andere Optimierungsfunktionen ausführen können.

### Reihenfolge der `<source>`-Elemente optimieren

Ordnen Sie die Videoquellen vom kleinsten zum größten. Zum Beispiel geben Sie bei Videokomprimierungen in den Formaten mit 10 MB und 12 MB die 10 MB-Ressource zuerst an:

```html
<video width="400" height="300" controls="controls">
  <!-- WebM: 10 MB -->
  <source src="video.webm" type="video/webm" />
  <!-- MPEG-4/H.264: 12 MB -->
  <source src="video.mp4" type="video/mp4" />
</video>
```

Der Browser lädt das erste Format, das er versteht. Das Ziel ist es, kleinere Versionen vor größeren anzubieten. Bei der kleinsten Version stellen Sie sicher, dass das am meisten komprimierte Video immer noch gut aussieht. Es gibt einige Komprimierungsalgorithmen, die ein Video wie ein animiertes GIF schlecht aussehen lassen können. Während ein 128 Kb Video wie eine bessere Benutzererfahrung als ein 10 MB Download erscheinen mag, könnte ein körniges GIF-ähnliches Video negativ auf die Marke oder das Projekt zurückfallen.

### Audio von stummgeschalteten Videos entfernen

Für Hero-Videos oder andere Videos ohne Ton ist es sinnvoll, den Ton zu entfernen.

```html
<video autoplay="" loop="" muted playsinline="" id="hero-video">
  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="web_banner.mp4" type="video/mp4" />
</video>
```

Dieser Hero-Video-Code (oben) ist auf Konferenz-Websites und Unternehmensstartseiten üblich. Es enthält ein Video, das automatisch abgespielt, in Schleife wiederholt und stummgeschaltet wird. Es gibt keine Bedienelemente, um Ton zu hören. Der Ton ist oft leer, aber trotzdem vorhanden und verbraucht weiterhin Bandbreite. Es gibt keinen Grund, Audio mit Video zu liefern, das immer stumm ist. **Das Entfernen von Audio kann 20% der Bandbreite einsparen.**

Abhängig von Ihrer Wahl der Software, können Sie den Ton möglicherweise während des Exports und der Komprimierung entfernen. Wenn nicht, kann dies ein kostenloses Dienstprogramm namens [FFmpeg](https://www.ffmpeg.org/) für Sie erledigen. Dies ist der FFmpeg-Befehlsstring, um Audio zu entfernen:

```bash
ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4
```

### Video-Preload

Das Preload-Attribut hat drei verfügbare Optionen: `auto`, `metadata` und `none`. Die Standardeinstellung ist `metadata`. Diese Einstellungen steuern, wie viel einer Videodatei mit dem Seitenladevorgang heruntergeladen wird. Sie können Daten sparen, indem Sie den Download für weniger populäre Videos aufschieben.

Das Festlegen von `preload="none"` führt dazu, dass keiner des Videos heruntergeladen wird, bis die Wiedergabe startet. Es verzögert den Start, bietet jedoch signifikante Dateneinsparungen für Videos mit einer geringen Wahrscheinlichkeit der Wiedergabe.

Das Festlegen von `preload="metadata"` bietet moderatere Bandbreiteneinsparungen und kann bis zu 3% des Videos beim Seitenladen herunterladen. Dies ist eine nützliche Option für einige kleine oder mäßig große Dateien.

Die Einstellung `auto` zu ändern, weist den Browser an, das gesamte Video automatisch herunterzuladen. Dies sollten Sie nur tun, wenn die Wiedergabe sehr wahrscheinlich ist. Ansonsten verschwendet es viel Bandbreite.

### Streaming in Betracht ziehen

[Video-Streaming ermöglicht die Lieferung der richtigen Videogröße und Bandbreite](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/) (basierend auf der Netzwerkgeschwindigkeit) an den Endnutzer. Ähnlich wie responsive Bilder wird dem Browser das korrekte Video geliefert, was einen schnellen Videostart, geringes Puffern und optimierte Wiedergabe gewährleistet.

## Fazit

Die Optimierung von Videos hat das Potenzial, die Website-Performance erheblich zu verbessern. Videodateien sind im Vergleich zu anderen Website-Dateien relativ groß und verdienen immer Aufmerksamkeit. Dieser Artikel erklärt, wie man Website-Videos durch Reduzierung der Dateigröße, mit (HTML-) Download-Einstellungen und mit Streaming optimiert.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance")}}
