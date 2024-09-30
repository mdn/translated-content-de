---
title: Mapping video time codes to IMSC
slug: Related/IMSC/Mapping_video_time_codes_to_IMSC
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

Das Zuordnen des Zeit- oder Zeitcode-Wertes, der in einem Videospur- oder Video-Editor-Zeitstrahl angezeigt wird, zu einem IMSC-Dokument kann ein wenig knifflig sein. Es gibt einige verschiedene Probleme, die Sie beachten müssen, die wir in diesem Artikel behandeln werden.

## Berücksichtigung von Startzeiten von Zeitcodes

Der Einfachheit halber gehen wir davon aus, dass die Zeitcode-Spuren in unseren Videomaterialien bei 00:00:00:00 beginnen. Standardmäßig beginnen die Werte in einem IMSC-Dokument bei 0 und erhöhen sich von dort automatisch.

Wenn der Zeitcode in einer Videospur nicht bei 00:00:00:00 beginnt, müssen Sie den ersten Zeitstempel in der Videospur nehmen und eine Berechnung für diesen Wert und alle folgenden Werte durchführen, sodass der Anfangswert 00:00:00:00 ist. Zum Beispiel, wenn der erste Zeitcode-Wert in der Videospur 00:59:50:00 ist, dann müssen Sie 00:59:50:00 von allen Zeitcode-Werten in der Videospur subtrahieren, um ihn mit dem IMSC-Dokument zu synchronisieren.

## Bildraten

Die Zuordnung eines IMSC-Dokuments zu einem Videomaterial ist ziemlich einfach, wenn Sie mit ganzen Bildraten arbeiten, wie 24fps, 25fps und 30fps. Der Wert in Ihrer Zeitleiste wird der gleiche sein wie der Wert im IMSC-Dokument. Wenn Sie jedoch mit gebrochenen Bildraten arbeiten (wie 23,976fps oder 29,97fps), wird dies etwas komplizierter.

Eine Bildrate beschreibt tatsächlich sowohl die Anzahl der Bilder pro Sekunde als auch die Geschwindigkeit dieser Bilder:

- 25fps beschreibt, dass es 25 Bilder pro Sekunde gibt (0-24) und diese Bilder mit der gleichen Geschwindigkeit wie eine Echtzeituhr abgespielt werden.
- 24fps beschreibt, dass es 24 Bilder pro Sekunde gibt (0-23) und diese Bilder mit der gleichen Geschwindigkeit wie eine Echtzeituhr abgespielt werden.
- 23,976fps ist, wo es kompliziert wird. Wie bei 24fps beschreibt es, dass es 24 Bilder pro Sekunde gibt (0-23). Im Gegensatz zu 24fps werden diese 24 Bilder jedoch mit einer etwas langsameren Geschwindigkeit als eine Echtzeituhr abgespielt. Wie die Bildrate (23,976fps) impliziert, sehen Sie in einer Echtzeitsekunde fast 24 Bilder. Tatsächlich dauert es 1,001 Sekunden, um 24 Bilder bei 23,976fps anzuzeigen.

In einer einzigen Sekunde ist das nicht dramatisch. Wenn Sie jedoch auf einige Minuten verlängern, sind 24fps und 23,976fps bereits um einige Bilder voneinander abweichend. Wenn Sie auf eine Stunde verlängern, unterscheiden sie sich um 3,6s. Hier ist ein bisschen Mathematik, um dies zu veranschaulichen:

01:00:00:00 @ 24fps

3600 (Sekunden in 1 Stunde) \* 1.000 (Geschwindigkeit) = 3600 Echtzeitsekunden

01:00:00:00 @ 23,976fps

3600 (Sekunden in 1 Stunde) \* 1,001 (Geschwindigkeit) = 3603,6 Echtzeitsekunden

Dies zu verstehen ist besonders wichtig bei IMSC-Dateien, da alle Zeitangaben im Dokument Echtzeitwerte darstellen. Wenn Sie beispielsweise ein Ereignis beschreiben möchten, das mit 23,976fps-Video synchronisiert ist und bei Zeitcode 01:00:00:00 beginnt und 1 Sekunde später endet, würde es folgendermaßen aussehen:

`<p begin="3603.6s" end="3604.6s">Hallo, ich bin Mork vom Ork</p>`

Wichtig ist, dass wenn Sie ein Video mit gebrochener Bildrate mit einem IMSC-Dokument synchronisieren, die Zeiten nicht übereinstimmen werden. Die Zeiten im IMSC-Dokument entfernen sich langsam immer weiter von den Videozeiten.

## Behebung des Problems

Davon abgesehen gibt es tatsächlich einen anderen Ansatz, um die Zeit-Ausdruckswerte in der IMSC-Datei zu beschreiben, der dieses Problem adressiert. Wie im [Timing in IMSC](/de/docs/Related/IMSC/Timing_in_IMSC) Leitfaden diskutiert, wird durch die Verwendung einer Zeit-Ausdruckssyntax von Bildern eine 1:1-Korrelation zwischen der Bildnummer in der IMSC-Datei und der Bildnummer im Medienmaterial hergestellt.

Die beiden Attribute, die enthalten sein müssen, um die Bildmethode zu verwenden, sind `frameRate` und `frameRateMultiplier`. Die Bildrate beschreibt, wie viele Bilder in einer Sekunde sind, und der Multiplikator wird auf die `frameRate` angewendet, um die tatsächliche Bildrate in Echtzeitsekunden zu beschreiben. Um eine Bildrate von 23,976fps zu beschreiben, würden folgende Werte verwendet:

```xml
<tt ttp:frameRate="24" ttp:frameRateMultiplier="1000 1001">
  …
</tt>
```

Damit wird angegeben, dass es 24 Bilder in einer Sekunde gibt und diese mit einer Geschwindigkeit von 23,976 Bildern pro Echtzeitsekunde abgespielt werden (24 \* (1000 / 1001)).

Durch die Beschreibung dieser tatsächlichen Bildrate können Sie nun Zeitausdrücke in Bildern, oder f, beschreiben. Dies ist die tatsächliche Bildnummer, bei der das Ereignis beginnt und endet. Hier ist dasselbe Beispiel wie oben, wobei das Ereignis bei 01:00:00:00 beginnt und eine Sekunde später endet.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Das imscJS Polyfill verwenden</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Mapping video time codes to IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
