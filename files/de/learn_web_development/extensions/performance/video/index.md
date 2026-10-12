---
title: "Multimedia: Video"
slug: Learn_web_development/Extensions/Performance/video
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance")}}

Wie wir im vorherigen Abschnitt erfahren haben, entfallen bei einer durchschnittlichen Website über 70 % der heruntergeladenen Datenmenge auf Medien, insbesondere Bilder und Videos. Wir haben uns bereits mit der Optimierung von Bildern befasst. Dieser Artikel behandelt die Optimierung von Videos, um die Web-Performance zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Installierte grundlegende Software</a
        > und Grundkenntnisse der
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die verschiedenen Videoformate und ihre Auswirkungen auf die Performance
        kennenlernen sowie erfahren, wie sich die Auswirkungen von Videos auf die
        gesamte Ladezeit einer Seite verringern lassen, indem je nach unterstützten
        Dateitypen des Browsers die kleinstmögliche Videodatei bereitgestellt wird.
      </td>
    </tr>
  </tbody>
</table>

## Warum sollten Sie Ihre Multimedia-Inhalte optimieren?

Bei einer durchschnittlichen Website [entfallen 25 % der Bandbreite auf Videos](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367). Die Optimierung von Videos kann erhebliche Bandbreite einsparen und so die Performance der Website verbessern.

## Videobereitstellung optimieren

Die folgenden Abschnitte beschreiben diese Optimierungstechniken:

- [alle Videos komprimieren](#alle_videos_komprimieren)
- [die Reihenfolge von `<source>` optimieren](#optimize_source_order)
- [Audio aus stummgeschalteten Videos entfernen](#audio_aus_stummgeschalteten_hero-videos_entfernen)
- [das Vorladen von Videos optimieren](#videos_vorladen)
- [Streaming in Betracht ziehen](#streaming_in_betracht_ziehen)

### Alle Videos komprimieren

Bei der Videokomprimierung werden meist benachbarte Frames eines Videos verglichen, um Details zu entfernen, die in beiden Frames identisch sind. Komprimieren Sie das Video und exportieren Sie es in mehrere Videoformate, darunter WebM und MPEG-4/H.264.

Ihre Videobearbeitungssoftware bietet wahrscheinlich eine Funktion zum Verringern der Dateigröße. Falls nicht, gibt es Tools wie [FFmpeg](https://www.ffmpeg.org/) (siehe unten), mit denen Sie Videos kodieren, dekodieren, konvertieren und auf andere Weise optimieren können.

### Reihenfolge von `<source>` optimieren

Ordnen Sie die Videoquellen von der kleinsten zur größten Datei. Wenn ein Video beispielsweise in zwei Formaten mit Dateigrößen von 10 MB und 12 MB vorliegt, geben Sie die 10-MB-Datei zuerst an:

```html
<video width="400" height="300" controls>
  <!-- WebM: 10 MB -->
  <source src="video.webm" type="video/webm" />
  <!-- MPEG-4/H.264: 12 MB -->
  <source src="video.mp4" type="video/mp4" />
</video>
```

Der Browser lädt das erste Format herunter, das er unterstützt. Ziel ist es, kleinere Versionen vor größeren anzubieten. Achten Sie darauf, dass auch die am stärksten komprimierte Version noch gut aussieht. Manche Komprimierungsalgorithmen können ein Video (im negativen Sinne) wie ein animiertes GIF aussehen lassen. Ein 128-KB-Video mag zwar eine bessere Benutzererfahrung versprechen als ein Download von 10 MB, doch ein körniges, GIF-artiges Video kann einen schlechten Eindruck von der Marke oder dem Projekt vermitteln.

### Audio aus stummgeschalteten Hero-Videos entfernen

Bei Hero-Videos oder anderen Videos ohne Ton ist es sinnvoll, die Audiospur zu entfernen.

```html
<video autoplay loop muted playsinline id="hero-video">
  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="web_banner.mp4" type="video/mp4" />
</video>
```

Der obige Code für ein Hero-Video ist auf Konferenz-Websites und Unternehmensstartseiten häufig zu finden. Das Video wird automatisch abgespielt, wiederholt und ist stummgeschaltet. Da es keine Steuerelemente gibt, lässt sich der Ton nicht einschalten. Die Audiospur ist oft leer, aber dennoch vorhanden und verbraucht weiterhin Bandbreite. Es gibt keinen Grund, eine Audiospur mitzuliefern, wenn das Video immer stummgeschaltet ist. **Durch das Entfernen der Audiospur lassen sich 20 % der Bandbreite einsparen.**

Je nach verwendeter Software können Sie die Audiospur möglicherweise beim Exportieren und Komprimieren entfernen. Falls nicht, können Sie dafür das kostenlose Tool [FFmpeg](https://www.ffmpeg.org/) verwenden. Mit folgendem FFmpeg-Befehl entfernen Sie die Audiospur:

```bash
ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4
```

### Videos vorladen

Für das `preload`-Attribut gibt es drei Optionen: `auto`, `metadata` und `none`. Der Standardwert ist `metadata`. Diese Einstellungen steuern, wie viel von einer Videodatei beim Laden der Seite heruntergeladen wird. Sie können Daten sparen, indem Sie den Download von Videos aufschieben, die voraussichtlich seltener abgespielt werden.

Mit `preload="none"` wird bis zum Beginn der Wiedergabe kein Teil des Videos heruntergeladen. Dadurch verzögert sich der Start der Wiedergabe, bei Videos mit geringer Wiedergabewahrscheinlichkeit lassen sich aber erhebliche Datenmengen einsparen.

Mit `preload="metadata"` können beim Laden der Seite bis zu 3 % des Videos heruntergeladen werden. Die Bandbreiteneinsparung ist geringer, doch für manche kleinen oder mittelgroßen Dateien ist dies eine sinnvolle Option.

Mit `auto` weisen Sie den Browser an, das gesamte Video automatisch herunterzuladen. Verwenden Sie diese Einstellung nur, wenn eine Wiedergabe sehr wahrscheinlich ist. Andernfalls wird viel Bandbreite verschwendet.

### Streaming in Betracht ziehen

Beim [Video-Streaming können die passende Videogröße und Bandbreite](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/) abhängig von der Netzwerkgeschwindigkeit für die Nutzer bereitgestellt werden. Ähnlich wie bei responsiven Bildern erhält der Browser ein Video in der passenden Größe. Das ermöglicht einen schnellen Wiedergabestart, wenig Pufferung und eine optimierte Wiedergabe.

## Fazit

Die Optimierung von Videos kann die Performance einer Website erheblich verbessern. Videodateien sind im Vergleich zu anderen Dateien einer Website relativ groß und verdienen daher immer besondere Aufmerksamkeit. Dieser Artikel erläutert, wie Sie Videos auf Websites durch kleinere Dateien, HTML-Einstellungen für den Download und Streaming optimieren können.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance")}}
