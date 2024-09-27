---
title: Timing in IMSC
slug: Related/IMSC/Timing_in_IMSC
l10n:
  sourceCommit: 6c8d96e2744b36a2daf045420363c629f6781540
---

Bei der Erstellung eines IMSC-Dokuments muss jedes definierte Textstück Zeitsteuerungsinformationen enthalten, um anzugeben, wann es angezeigt werden soll. Es gibt mehrere Möglichkeiten, zu beschreiben, wann ein Untertitel beginnen und aufhören soll, angezeigt zu werden, jeweils mit Vor- und Nachteilen. Dieser Artikel erklärt diese verschiedenen Methoden.

Wenn Sie den Abschnitt [IMSC-Dokument mit Timing](/de/docs/Related/IMSC/Basics#timing) im Artikel [IMSC-Grundlagen](/de/docs/Related/IMSC/Basics) noch nicht gelesen haben, sollten Sie dies jetzt tun und dann hierher zurückkehren — er enthält einen ersten Überblick darüber, wie man Timing-Ereignisse beschreibt.

## Verschiedene Möglichkeiten zur Beschreibung des Timings

Es gibt drei Hauptmethoden, um die Zeitwert-Ausdrücke innerhalb eines IMSC-Dokuments zu beschreiben.

- [Seconds.fraction](#seconds.fraction): Angabe einfacher Sekundenwerte. Dies ist der einfachste Ansatz; wir haben diese Methode bereits früher in der Artikelserie verwendet.
- [HH:MM:SS.fraction](#hhmmss.fraction): Angabe komplexerer Zeiten im Format `HH:MM:SS`. Dies ist ähnlich wie die Verwendung von Sekunden und ist eine der häufigsten Zeitwert-Ausdrücke in IMSC-Dateien.
- [Frames](#frames): Angabe von Start- und Endzeiten in Form von Bildnummern anstelle von Sekunden. Dies ist der andere am häufigsten verwendete Zeitwert-Ausdruck in IMSC-Dateien. Der Vorteil dieses Ansatzes ist, dass die Bildnummer direkt der Bildnummer im Videodatei entspricht.

### Seconds.fraction

```xml
<p begin="1s" end="2s">Hello, I am Mork from Ork</p>
```

Diese Methode zur Beschreibung der `begin`- und `end`-Werte im IMSC-Dokument ist sehr einfach — Sie fügen einfach eine Zahl mit "s" (Sekunden) hinzu. Es erfordert nicht, dass der Benutzer die Bildrate des zugehörigen Mediums angibt. Diese Werte müssen auf den Videorahmen abgebildet werden, mit dem der Text synchronisiert ist. Bruchwerte werden immer auf den nächsten Video-Rahmen aufgerundet.

### HH:MM:SS.fraction

```xml
<p begin="00:00:01.00" end="00:00:02.00">Hello, I am Mork from Ork</p>
```

Diese Methode zur Beschreibung der Start- und Endwerte im IMSC-Dokument ist im Wesentlichen dieselbe wie die Verwendung von Sekunden, mit dem Unterschied, dass Sie diese Werte in Stunden, Minuten und Sekunden ausdrücken. Damit können Sie problemlos längere, präzisere Zeiten einstellen.

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

Diese Methode erfordert, dass die Attribute `frameRate` und `frameRateMultiplier` im Wurzelelement des IMSC-Dokuments angegeben werden. Die Bildrate beschreibt, wie viele Bilder in einer Sekunde des Videos enthalten sind. Der Multiplikator wird auf die `frameRate` angewendet, um zu erklären, wie diese eine Sekunde Video im Vergleich zu einer realen Sekunde steht.

Lassen Sie uns dies etwas genauer erklären.

Der `frameRateMultiplier` hängt mit den Problemen zusammen, die mit nicht ganzzahligen Bildraten wie 23,98fps verbunden sind (im Gegensatz zu einer ganzzahligen Bildrate wie 24fps). 24fps bedeuten, dass jede Sekunde des Videos 24 Bilder enthält, und diese Sekunde ist dieselbe wie eine reale Sekunde. 23,98fps bedeuten, dass jede Sekunde des Videos 24 Bilder enthält, und diese Sekunde ist etwas länger als eine reale Sekunde. Der `frameRateMultiplier` definiert die Dauer jedes Bildes im Vergleich zur realen Zeit.

Stellen Sie sich vor, Sie hätten eine Stoppuhr und würden die Zeitmessung selbst durchführen, während Sie einen Film ansehen. Wenn dieser Film mit einer Geschwindigkeit von 24fps abgespielt würde, würde Ihre Stoppuhr nach genau 1 Stunde den Wert 01:00:00.00 anzeigen. Wenn dieser Film mit einer Geschwindigkeit von 23,98fps abgespielt würde, würde Ihre Stoppuhr nach genau 1 Stunde den Wert 01:00:03.6 anzeigen (1 Stunde × (24/23.98)).

Verstanden?

Um eine Bildrate von 23,976fps zu beschreiben, würden die folgenden Werte für `frameRate` und `frameRateMultiplier` verwendet:

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
  xml:lang="en"
  ttp:frameRate="24"
  ttp:frameRateMultiplier="1000 1001">
```

Dies bedeutet tatsächlich, dass jede Sekunde von 24 Bildern mit einer Geschwindigkeit von (24 \* (1000/1001)), oder 23,98fps, abgespielt werden sollte.

Nachdem eine Bildrate von 23,98 deklariert ist, können Sie nun Zeitwerte in Bildern oder f beschreiben.

```xml
<p begin="24f" end="48f">Hello, I am Mork from Ork</p>
```

Der Vorteil dieser Methode ist, dass die Zeitwert-Bildnummer dieselbe ist wie die Bildnummer des Medienassets. Ein Wert von 86400f ist die Bildnummer 86400 in der Videodatei.

> [!NOTE]
> Eine zusätzliche Erklärung dieser Werte finden Sie unter [Mapping video time codes to IMSC](/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC).

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Using the imscJS polyfill</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Mapping von Video-Zeitcodes zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
