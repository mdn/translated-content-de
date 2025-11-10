---
title: Timing in IMSC
slug: Related/IMSC/Timing_in_IMSC
l10n:
  sourceCommit: 95e0fbb78a16450188753d0b53ca02a9fbd2a641
---

Beim Erstellen eines IMSC-Dokuments muss jedes definierte Textstück Timing-Informationen enthalten, um anzugeben, wann es angezeigt werden soll. Es gibt mehrere Möglichkeiten zu beschreiben, wann ein Untertitel beginnen und enden soll, wobei jede Methode Vor- und Nachteile hat. Dieser Artikel erklärt diese verschiedenen Methoden.

Wenn Sie den Abschnitt [IMSC-Dokument mit Timings](/de/docs/Related/IMSC/Basics#timing) im Artikel [IMSC-Grundlagen](/de/docs/Related/IMSC/Basics) noch nicht gelesen haben, sollten Sie dies jetzt tun und dann hierher zurückkehren — er enthält einen ersten Überblick darüber, wie Timing-Ereignisse beschrieben werden.

## Verschiedene Arten, Timing zu beschreiben

Es gibt drei Hauptmethoden, um die Zeitwert-Angaben in einem IMSC-Dokument zu beschreiben.

- [Sekunden.Bruchteil](#sekunden.bruchteil): Angabe einfacher Sekundenwerte. Dies ist der einfachste Ansatz; wir haben diese Methode bereits früher in der Artikelserie gesehen.
- [HH:MM:SS.Bruchteil](#hhmmss.fraction): Angabe komplexerer Zeiten im Format `HH:MM:SS`. Dies ähnelt der Verwendung von Sekunden und ist eine der gängigsten Zeitwert-Angaben in IMSC-Dateien.
- [Frames](#frames): Angabe von Start- und Endzeiten in Form von Frame-Anzahlen anstelle von Sekunden. Dies ist die andere häufigste Zeitwert-Angabe in IMSC-Dateien. Der Vorteil dieses Ansatzes besteht darin, dass die Frame-Nummer direkt der Frame-Nummer in der Videodatei entspricht.

### Sekunden.Bruchteil

```xml
<p begin="1s" end="2s">Hello, I am Mork from Ork</p>
```

Diese Methode zur Beschreibung der `begin`- und `end`-Werte im IMSC-Dokument ist sehr einfach — Sie fügen einfach eine Zahl mit "s" (Sekunden) hinzu. Es ist nicht erforderlich, die Bildrate des entsprechenden Mediums anzugeben. Diese Werte müssen dem Video-Frame zugeordnet werden, mit dem der Text synchronisiert wird. Bruchwerte werden immer auf den nächsten Video-Frame aufgerundet.

### HH:MM:SS.Bruchteil

```xml
<p begin="00:00:01.00" end="00:00:02.00">Hello, I am Mork from Ork</p>
```

Diese Methode zur Beschreibung der Anfangs- und Endwerte im IMSC-Dokument ist im Wesentlichen identisch mit der Verwendung von Sekunden, außer dass Sie diese Werte als Stunden, Minuten und Sekunden ausdrücken. Dies ermöglicht es Ihnen, längere, präzisere Zeiten einfach festzulegen.

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

Diese Methode erfordert, dass die Attribute `frameRate` und `frameRateMultiplier` im Wurzelelement des IMSC-Dokuments deklariert werden. Die Bildrate beschreibt, wie viele Frames in einer Sekunde des Videos vorhanden sind. Der Multiplikator wird auf die `frameRate` angewendet, um anzugeben, wie diese eine Sekunde Video mit einer Echtzeit-Sekunde verglichen wird.

Wir erklären dies etwas ausführlicher.

Der `frameRateMultiplier` resultiert aus den Problemen im Zusammenhang mit nicht ganzzahligen Bildraten wie 23,98fps (im Gegensatz zu einer ganzzahligen Bildrate wie 24fps). 24fps bedeutet, dass jede Sekunde Video 24 Frames enthält und diese Sekunde der gleichen Zeitspanne einer Echtzeit-Sekunde entspricht. 23,98fps bedeutet, dass jede Sekunde Video 24 Frames enthält und diese Sekunde etwas länger als eine Echtzeit-Sekunde ist. Der `frameRateMultiplier` definiert die Dauer jedes Frames im Vergleich zur Echtzeit.

Stellen Sie sich vor, Sie hätten eine Stoppuhr und würden sich beim Ansehen eines Films zeitlich messen. Wenn dieser Film mit einer Geschwindigkeit von 24fps abgespielt würde, würde Ihre Stoppuhr nach genau 1 Stunde eine Zeit von 01:00:00.00 anzeigen. Nun, wenn dieser Film mit einer Geschwindigkeit von 23,98fps abgespielt würde, würde Ihre Stoppuhr nach genau 1 Stunde eine Zeit von 01:00:03.6 (1 Stunde × (24/23.98)) anzeigen.

Verstanden?

Um eine Bildrate von 23,976fps zu beschreiben, würden die folgenden `frameRate`- und `frameRateMultiplier`-Werte verwendet:

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
  xml:lang="en"
  ttp:frameRate="24"
  ttp:frameRateMultiplier="1000 1001">
```

Dies bedeutet tatsächlich, dass jede Sekunde der 24 Frames mit einer Geschwindigkeit von (24 \* (1000/1001)) oder 23,98fps abgespielt werden sollte.

Sobald eine Bildrate von 23,98 deklariert ist, können Sie Zeitwerte in Frames oder f beschreiben.

```xml
<p begin="24f" end="48f">Hello, I am Mork from Ork</p>
```

Der Vorteil der Verwendung dieser Methode besteht darin, dass die Zeitwert-Angabe durch die Bildnummer mit der Bildnummer des Medieninhalts übereinstimmt. Ein Wert von 86400f entspricht dem Frame Nummer 86400 in der Videodatei.

> [!NOTE]
> Eine zusätzliche Erklärung zu diesen Werten finden Sie in [Zuordnung von Videocodes zu IMSC](/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC).
