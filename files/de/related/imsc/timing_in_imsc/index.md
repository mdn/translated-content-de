---
title: Timing in IMSC
slug: Related/IMSC/Timing_in_IMSC
l10n:
  sourceCommit: 6c8d96e2744b36a2daf045420363c629f6781540
---

Wenn Sie ein IMSC-Dokument erstellen, muss jedes definierte Textstück Timing-Informationen enthalten, um festzulegen, wann es angezeigt werden soll. Es gibt mehrere Möglichkeiten, zu beschreiben, wann ein Untertitel beginnt und endet, mit Vor- und Nachteilen für jede Methode. Dieser Artikel erklärt die unterschiedlichen Methoden.

Wenn Sie den Abschnitt [IMSC-Dokument mit Timing](/de/docs/Related/IMSC/Basics#timing) im Artikel [IMSC Grundlagen](/de/docs/Related/IMSC/Basics) noch nicht gelesen haben, sollten Sie dies jetzt tun und dann hierher zurückkehren — er enthält einen ersten Überblick darüber, wie Timing-Ereignisse beschrieben werden.

## Unterschiedliche Wege, Timing zu beschreiben

Es gibt drei Hauptmethoden, um die Zeitwerte innerhalb eines IMSC-Dokuments zu beschreiben.

- [Seconds.fraction](#seconds.fraction): Einfache Sekundenwerte angeben. Dies ist der einfachste Ansatz; wir haben diesen bereits früher in der Artikelsammlung gesehen.
- [HH:MM:SS.fraction](#hhmmss.fraction): Komplexere Zeiten im Format `HH:MM:SS` angeben. Dies ist ähnlich wie die Verwendung von Sekunden und ist einer der häufigsten Zeitausdrücke in IMSC-Dateien.
- [Frames](#frames): Start- und Endzeiten werden in der Anzahl von Frames statt in Sekunden angegeben. Dies ist der andere häufige Zeitausdruck, der in IMSC-Dateien verwendet wird. Der Vorteil dieses Ansatzes ist, dass die Frame-Nummer direkt mit der Frame-Nummer in der Videodatei übereinstimmt.

### Seconds.fraction

```xml
<p begin="1s" end="2s">Hello, I am Mork from Ork</p>
```

Diese Methode zur Beschreibung der `begin`- und `end`-Werte im IMSC-Dokument ist sehr einfach — man fügt einfach eine Zahl mit "s" (Sekunden) hinzu. Der Benutzer muss die Bildrate des entsprechenden Mediums nicht angeben. Diese Werte müssen auf den Video-Frame abgebildet werden, mit dem der Text synchronisiert ist. Bruchwerte werden immer auf den nächsten Videoframe aufgerundet.

### HH:MM:SS.fraction

```xml
<p begin="00:00:01.00" end="00:00:02.00">Hello, I am Mork from Ork</p>
```

Diese Methode zur Beschreibung der Begin- und Endwerte im IMSC-Dokument ist im Wesentlichen die gleiche wie bei der Verwendung von Sekunden, mit dem Unterschied, dass Sie diese Werte als Stunden, Minuten und Sekunden ausdrücken. Dies ermöglicht es Ihnen, längere, präzisere Zeiten leicht festzulegen.

### Frames

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
  xml:lang="en"
  ttp:frameRate="24"
  ttp:frameRateMultiplier="1000 1001">
  <body>
    <div>
      <p begin="24f" end="48f">Hello, I am Mork from Ork</p>
    </div>
  </body>
</tt>
```

Diese Methode erfordert, dass die Attribute `frameRate` und `frameRateMultiplier` im Wurzelelement des IMSC-Dokuments deklariert werden. Die Bildrate beschreibt, wie viele Frames in einer Sekunde des Videos enthalten sind. Der Multiplikator wird auf die `frameRate` angewendet, um zu erklären, wie diese eine Sekunde Video mit einer Echtzeitsekunde verglichen wird.

Erklären wir dies etwas ausführlicher.

Der `frameRateMultiplier` stammt von den Problemen, die mit nicht ganzzahligen Bildraten wie 23,98fps (im Gegensatz zu einer ganzzahligen Bildrate wie 24fps) verbunden sind. 24fps bedeutet, dass jede Sekunde Video 24 Frames enthält und diese Sekunde der gleichen Echtzeitsekunde entspricht. 23,98fps bedeutet, dass jede Sekunde Video 24 Frames enthält, und diese Sekunde ist etwas länger als eine Echtzeitsekunde. Der `frameRateMultiplier` definiert die Dauer jedes Frames im Vergleich zur Echtzeit.

Stellen Sie sich vor, Sie hätten eine Stoppuhr und haben sich selbst beim Anschauen eines Films getimt. Wenn dieser Film mit einer Geschwindigkeit von 24fps abgespielt wird, würde Ihre Stoppuhr genau 01:00:00.00 anzeigen, sobald Ihr Mediaplayer sagt, dass Sie genau 1 Stunde davon gesehen haben. Wenn dieser Film jedoch mit einer Geschwindigkeit von 23,98fps abgespielt wird, zeigt Ihre Stoppuhr jetzt 01:00:03.6 an (1 Stunde × (24/23.98)).

Verstanden?

Um eine Bildrate von 23,976fps zu beschreiben, würden folgende Werte für `frameRate` und `frameRateMultiplier` verwendet:

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
  xml:lang="en"
  ttp:frameRate="24"
  ttp:frameRateMultiplier="1000 1001">
```

Dies besagt eigentlich, dass jede Sekunde von 24 Frames mit einer Geschwindigkeit von (24 \* (1000/1001)), oder 23,98fps abgespielt werden sollte.

Sobald eine Bildrate von 23,98 deklariert ist, können Sie Zeitausdrücke in Frames oder f beschreiben.

```xml
<p begin="24f" end="48f">Hello, I am Mork from Ork</p>
```

Der Vorteil dieser Methode ist, dass die Zeitausdruck-Frame-Nummer dieselbe ist wie die Frame-Nummer des Medienassets. Ein Wert von 86400f ist Frame-Nummer 86400 in der Videodatei.

> [!NOTE]
> Eine zusätzliche Erklärung zu diesen Werten finden Sie in [Mapping video time codes to IMSC](/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC).

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Using the imscJS polyfill</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videozeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
