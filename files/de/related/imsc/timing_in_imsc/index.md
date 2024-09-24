---
title: Timing in IMSC
slug: Related/IMSC/Timing_in_IMSC
l10n:
  sourceCommit: 6c8d96e2744b36a2daf045420363c629f6781540
---

Beim Aufbau eines IMSC-Dokuments muss jedes definierte Textstück Timing-Informationen enthalten, um anzugeben, wann es erscheinen soll. Es gibt mehrere Methoden, um zu beschreiben, wann ein Untertitel starten und stoppen soll, wobei jede Methode Vor- und Nachteile hat. Dieser Artikel erklärt diese verschiedenen Methoden.

Wenn Sie den Abschnitt [IMSC-Dokument mit Timing](/de/docs/Related/IMSC/Basics#timing) im Artikel [IMSC-Grundlagen](/de/docs/Related/IMSC/Basics) noch nicht gelesen haben, sollten Sie dies jetzt tun und dann hierher zurückkehren — er enthält einen ersten Überblick darüber, wie Timereignisse beschrieben werden.

## Verschiedene Möglichkeiten zur Beschreibung des Timings

Es gibt drei Hauptmethoden, um die Werte für Zeitausdrücke in einem IMSC-Dokument zu beschreiben.

- [Seconds.fraction](#seconds.fraction): Einfache Sekundenwerte angeben. Dies ist der einfachste Ansatz. Wir haben bereits gesehen, wie diese Methode in der Artikelserie verwendet wurde.
- [HH:MM:SS.fraction](#hhmmss.fraction): Komplexere Zeiten im Format `HH:MM:SS` angeben. Dies ähnelt der Verwendung von Sekunden und ist eine der häufigsten Zeitausdrücke in IMSC-Dateien.
- [Frames](#frames): Start- und Endzeiten in Form von Bildanzahlen anstatt Sekunden angeben. Dies ist die andere häufig verwendete Zeitausdrucksmethode in IMSC-Dateien. Der Vorteil dieses Ansatzes ist, dass die Bildnummer direkt der Bildnummer in der Videodatei entspricht.

### Seconds.fraction

```xml
<p begin="1s" end="2s">Hello, I am Mork from Ork</p>
```

Diese Methode zur Beschreibung der `begin`- und `end`-Werte im IMSC-Dokument ist sehr einfach — Sie fügen einfach eine Zahl mit dem angehängten "s" (Sekunden) hinzu. Es ist nicht erforderlich, die Bildrate des entsprechenden Mediums anzugeben. Diese Werte müssen dem Videorahmen zugeordnet werden, mit dem der Text synchronisiert wird. Bruchwerte werden immer zum nächstgelegenen Videorahmen aufgerundet.

### HH:MM:SS.fraction

```xml
<p begin="00:00:01.00" end="00:00:02.00">Hello, I am Mork from Ork</p>
```

Diese Methode zur Beschreibung der Beginnen- und End-Werte im IMSC-Dokument entspricht im Wesentlichen der Verwendung von Sekunden, außer dass Sie diese Werte als Stunden, Minuten und Sekunden ausdrücken. Dies ermöglicht es Ihnen, leicht längere, präzisere Zeiten zu setzen.

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

Diese Methode erfordert, dass die Attribute `frameRate` und `frameRateMultiplier` im Wurzelelement des IMSC-Dokuments deklariert werden. Die Bildrate gibt an, wie viele Bilder in einer Sekunde des Videos vorhanden sind. Der Multiplikator wird auf die `frameRate` angewandt, um zu erklären, wie diese eine Sekunde Video mit einer realen Sekunde verglichen wird.

Lassen Sie uns dies etwas ausführlicher erklären.

Der `frameRateMultiplier` resultiert aus den Problemen, die mit nicht-ganzzahligen Bildraten wie 23.98fps verbunden sind (im Gegensatz zu einer ganzzahligen Bildrate wie 24fps). 24fps bedeutet, dass jede Sekunde Video 24 Bilder enthält und diese Sekunde genauso lang wie eine reale Sekunde ist. 23.98fps bedeutet, dass jede Sekunde Video 24 Bilder enthält und diese Sekunde etwas länger ist als eine reale Sekunde. Der `frameRateMultiplier` definiert die Dauer jedes Bildes im Vergleich zur Echtzeit.

Stellen Sie sich vor, Sie hätten eine Stoppuhr und würden sich selbst beim Anschauen eines Films timen. Wenn dieser Film mit einer Geschwindigkeit von 24fps wiedergegeben würde, würde Ihre Stoppuhr, sobald Ihr Medienplayer sagt, dass Sie genau 1 Stunde davon gesehen haben, 01:00:00.00 anzeigen. Wenn dieser Film jedoch mit einer Geschwindigkeit von 23.98fps wiedergegeben würde, würde Ihre Stoppuhr 01:00:03.6 anzeigen (1 Stunde × (24/23.98)), nachdem Ihr Medienplayer gesagt hat, dass Sie genau 1 Stunde davon gesehen haben.

Verstanden?

Um eine Bildrate von 23.976fps zu beschreiben, würden die folgenden `frameRate`- und `frameRateMultiplier`-Werte verwendet werden:

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
  xml:lang="en"
  ttp:frameRate="24"
  ttp:frameRateMultiplier="1000 1001">
```

Dies besagt tatsächlich, dass jede Sekunde von 24 Bildern mit einer Geschwindigkeit von (24 \* (1000/1001)) oder 23.98fps abgespielt werden soll.

Sobald eine Bildrate von 23.98 deklariert ist, können Sie Zeitausdrücke in Bildern oder f beschreiben.

```xml
<p begin="24f" end="48f">Hello, I am Mork from Ork</p>
```

Der Vorteil dieser Methode besteht darin, dass die Zeitangabe der Bildnummer der Bildnummer des Medieninhalts entspricht. Ein Wert von 86400f ist Bildnummer 86400 in der Videodatei.

> [!NOTE]
> Eine zusätzliche Erklärung dieser Werte finden Sie unter [Zuordnung von Videotimecodes zu IMSC](/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC).

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">IMSC-Dokumente stylen</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videotimecodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
