---
title: Zuordnung von Video-Zeitcodes zu IMSC
slug: Related/IMSC/Mapping_video_time_codes_to_IMSC
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

Die Zuordnung des Zeit- oder Zeitcode-Werts, der innerhalb eines Videotracks oder einer Videobearbeitungs-Zeitleiste zu sehen ist, zu einem IMSC-Dokument kann etwas knifflig sein. Es gibt ein paar verschiedene Probleme, die Ihnen bewusst sein müssen, die wir in diesem Artikel behandeln werden.

## Überlegungen zu Startzeiten von Zeitcodes

Zur Vereinfachung gehen wir davon aus, dass die Zeitcodetracks innerhalb unserer Videodateien bei 00:00:00:00 beginnen. Standardmäßig beginnen die Werte in einem IMSC-Dokument bei 0 und erhöhen sich von dort aus automatisch.

Wenn der Zeitcode in einem Videotrack nicht bei 00:00:00:00 beginnt, müssen Sie den ersten Zeitstempel im Videotrack nehmen und eine Berechnung dieses Werts und aller folgenden Werte durchführen, sodass der Anfangswert 00:00:00:00 ist. Wenn zum Beispiel der erste Zeitcode-Wert im Videotrack 00:59:50:00 ist, müssen Sie 00:59:50:00 von allen Zeitcode-Werten im Videotrack abziehen, um diesen mit dem IMSC-Dokument zu synchronisieren.

## Bildraten

Die Zuordnung eines IMSC-Dokuments zu einer Videodatei ist ziemlich einfach, wenn Sie mit ganzzahligen Bildraten arbeiten, wie beispielsweise 24fps, 25fps und 30fps. Der Wert in Ihrer Zeitleiste entspricht dem Wert im IMSC-Dokument. Wenn Sie jedoch mit Bruchbildraten arbeiten (wie 23,976fps oder 29,97fps), wird dies etwas komplizierter.

Eine Bildrate beschreibt tatsächlich sowohl die Anzahl der Bilder pro Sekunde als auch die Geschwindigkeit dieser Bilder:

- 25fps beschreibt, dass es 25 Bilder pro Sekunde (0-24) gibt und diese Bilder mit der gleichen Geschwindigkeit wie eine Echtzeituhr abgespielt werden.
- 24fps beschreibt, dass es 24 Bilder pro Sekunde (0-23) gibt und diese Bilder mit der gleichen Geschwindigkeit wie eine Echtzeituhr abgespielt werden.
- Bei 23,976fps wird es kompliziert. Wie 24fps beschreibt es, dass es 24 Bilder pro Sekunde (0-23) gibt. Anders als bei 24fps spielen diese 24 Bilder jedoch etwas langsamer als eine Echtzeituhr. Wie die Bildratenzahl (23,976fps) impliziert, sehen Sie in einer echten Sekunde fast 24 Bilder. Tatsächlich dauert es 1,001 Sekunden, bis 24 Bilder mit 23,976fps angezeigt werden.

In einer einzigen Sekunde ist dies nicht sehr problematisch. Wenn Sie jedoch einige Minuten weiter gehen, werden 24fps und 23,976fps bereits ein paar Bilder auseinander liegen. Wenn Sie eine Stunde weiter gehen, unterscheiden sie sich um 3,6s. Hier ist eine mathematische Darstellung dazu:

01:00:00:00 @ 24fps

3600 (Sekunden in 1 Stunde) \* 1,000 (Geschwindigkeit) = 3600 Echtzeitsekunden

01:00:00:00 @ 23,976fps

3600 (Sekunden in 1 Stunde) \* 1,001 (Geschwindigkeit) = 3603,6 Echtzeitsekunden

Dies ist besonders wichtig zu verstehen bei IMSC-Dateien, da alle Zeitangaben im Dokument Echtzeitwerte darstellen. Wenn Sie beispielsweise ein Ereignis beschreiben möchten, das mit 23,976fps Video synchronisiert, das bei 01:00:00:00 Zeitcode im Video beginnt und 1 Sekunde später endet, sähe es so aus:

`<p begin="3603.6s" end="3604.6s">Hello, I am Mork from Ork</p>`

Die wichtige Erkenntnis daraus ist, dass, wenn Sie ein Video mit einer Bruchbildrate mit einem IMSC-Dokument synchronisieren, die Zeitangaben nicht übereinstimmen. Die Zeitangaben im IMSC-Dokument werden sich langsam immer weiter von den Videotimings entfernen.

## Das Problem abmildern

Das gesagt, gibt es tatsächlich einen anderen Ansatz, um die Zeitangabewerte im IMSC-Datei zu beschreiben, der dieses Problem anspricht. Wie im Leitfaden [Timing in IMSC](/de/docs/Related/IMSC/Timing_in_IMSC) besprochen, gibt Ihnen die Verwendung einer Zeit-Ausdruckssyntax von Frames eine 1:1-Korrelation zwischen der Frame-Nummer im IMSC-Datei und der Frame-Nummer im Medienobjekt.

Die beiden Attribute, die enthalten sein müssen, um die Frame-Methode zu verwenden, sind `frameRate` und `frameRateMultiplier`. Die Bildrate beschreibt, wie viele Frames in einer Sekunde sind, und der Multiplikator wird auf die `frameRate` angewendet, um die tatsächliche Bildrate in Echtzeitsekunden zu beschreiben. Um eine Bildrate von 23,976fps zu beschreiben, würden die folgenden Werte verwendet:

```xml
<tt ttp:frameRate="24" ttp:frameRateMultiplier="1000 1001">
  …
</tt>
```

Dies besagt, dass es 24 Frames in einer Sekunde gibt und diese mit einer Geschwindigkeit von 23,976 Frames pro Echtzeitsekunde wiedergegeben werden (24 \* (1000 / 1001)).

Indem Sie diese tatsächliche Bildrate beschreiben, können Sie nun Zeitangaben in Frames oder f beschreiben. Dies ist die tatsächliche Frame-Nummer, bei der das Ereignis beginnt und endet. Hier ist dasselbe Beispiel wie oben, bei dem das Ereignis bei 01:00:00:00 beginnt und eine Sekunde später endet.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Video-Zeitcodes zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
