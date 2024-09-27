---
title: Zuordnung von Video-Zeitcodes zu IMSC
slug: Related/IMSC/Mapping_video_time_codes_to_IMSC
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

Die Zuordnung des Zeit- oder Zeitcode-Wertes, der innerhalb einer Videospur oder Zeitleiste eines Videoeditors sichtbar ist, zu einem IMSC-Dokument kann etwas knifflig sein. Es gibt einige unterschiedliche Probleme, die Sie beachten müssen und die wir in diesem Artikel behandeln werden.

## Berücksichtigung von Startzeiten der Zeitcodes

Zur Vereinfachung nehmen wir an, dass die Zeitcodestrecken innerhalb unserer Videoressourcen bei 00:00:00:00 beginnen. Standardmäßig beginnen die Werte innerhalb eines IMSC-Dokuments bei 0 und erhöhen sich automatisch von dort.

Sollte der Zeitcode in einer Videospur nicht bei 00:00:00:00 beginnen, müssen Sie den ersten Zeitstempel in der Videospur hernehmen und eine Berechnung an diesem Wert und allen nachfolgenden durchführen, sodass der Anfangswert 00:00:00:00 ist. Wenn beispielsweise der erste Zeitcode-Wert in der Videospur 00:59:50:00 ist, müssen Sie 00:59:50:00 von allen Zeitcode-Werten in der Videospur subtrahieren, um diese mit dem IMSC-Dokument zu synchronisieren.

## Bildraten

Die Zuordnung eines IMSC-Dokuments zu einer Videodatei ist ziemlich einfach, wenn Sie mit ganzzahligen Bildraten arbeiten, wie z.B. 24fps, 25fps und 30fps. Der Wert in Ihrer Zeitleiste wird derselbe sein wie der Wert im IMSC-Dokument. Wenn Sie jedoch mit gebrochenen Bildraten arbeiten (wie 23.976fps oder 29.97fps), wird es etwas komplizierter.

Eine Bildrate beschreibt tatsächlich sowohl die Anzahl der Bilder pro Sekunde als auch die Geschwindigkeit dieser Bilder:

- 25fps beschreibt, dass es 25 Bilder pro Sekunde gibt (0-24), und diese Bilder mit derselben Geschwindigkeit wie eine Echtzeituhr abgespielt werden.
- 24fps beschreibt, dass es 24 Bilder pro Sekunde gibt (0-23), und diese Bilder mit derselben Geschwindigkeit wie eine Echtzeituhr abgespielt werden.
- 23.976fps ist der Punkt, an dem es seltsam wird. Wie bei 24fps wird beschrieben, dass es 24 Bilder pro Sekunde gibt (0-23). Im Gegensatz zu 24fps spielen diese 24 Bilder jedoch etwas langsamer als eine Echtzeituhr ab. Wie die Bildratenzahl (23.976fps) impliziert, sieht man in einer Echtzeitsekunde fast 24 Bilder. Tatsächlich dauert es 1,001 Sekunden, bis 24 Bilder, die mit 23.976fps abgespielt werden, angezeigt werden.

In einer einzigen Sekunde ist das kein großes Problem. Wenn Sie jedoch auf einige Minuten verlängern, werden 24fps und 23.976fps bereits einige Bilder voneinander abweichen. Verlängern Sie auf eine Stunde, unterscheiden sie sich um 3,6 Sekunden. Hier ist etwas Mathematik, um dies zu veranschaulichen:

01:00:00:00 @ 24fps

3600 (Sekunden in 1 Stunde) \* 1,000 (Geschwindigkeit) = 3600 Echtzeitsekunden

01:00:00:00 @ 23.976fps

3600 (Sekunden in 1 Stunde) \* 1,001 (Geschwindigkeit) = 3603,6 Echtzeitsekunden

Dies ist besonders wichtig für das Verständnis von IMSC-Dateien, da alle Zeitangaben im Dokument Echtzeitwerte darstellen. Wenn Sie beispielsweise ein Ereignis beschreiben möchten, das mit 23.976fps-Video synchronisiert ist, das bei 01:00:00:00 Zeitcode im Video beginnt und 1 Sekunde später endet, würde es so aussehen:

`<p begin="3603.6s" end="3604.6s">Hallo, ich bin Mork vom Ork</p>`

Das Wichtigste dabei ist, dass wenn Sie ein Video mit gebrochener Bildrate mit einem IMSC-Dokument synchronisieren, die Zeitangaben nicht übereinstimmen. Die Zeiten im IMSC-Dokument werden sich langsam immer weiter von den Videozeiten entfernen.

## Das Problem mildern

Das gesagt, gibt es tatsächlich einen anderen Ansatz zur Beschreibung der Zeitwertausdrücke im IMSC-Dokument, der dieses Problem adressiert. Wie im [Timing in IMSC](/de/docs/Related/IMSC/Timing_in_IMSC)-Leitfaden besprochen, bringt die Verwendung einer Zeit-Ausdrucksyntax in Frames eine 1:1-Korrelation der Bildnummer im IMSC-Dokument und der Bildnummer im Medien-Asset.

Die beiden Attribute, die enthalten sein müssen, um die Frame-Methode zu verwenden, sind `frameRate` und `frameRateMultiplier`. Die Bildrate beschreibt, wie viele Bilder in einer Sekunde sind, und der Multiplikator wird auf die `frameRate` angewendet, um die tatsächliche Bildrate in Echtzeit-Sekunden zu beschreiben. Um eine Bildrate von 23.976fps zu beschreiben, würden die folgenden Werte verwendet:

```xml
<tt ttp:frameRate="24" ttp:frameRateMultiplier="1000 1001">
  …
</tt>
```

Dies besagt, dass es 24 Bilder in einer Sekunde gibt und diese mit einer Geschwindigkeit von 23.976 Bildern pro Echtzeitsekunde (24 \* (1000 / 1001)) abgespielt werden.

Durch die Beschreibung dieser tatsächlichen Bildrate können Sie nun Zeitausdrücke in Frames oder f beschreiben. Dies ist die tatsächliche Bildnummer, bei der das Ereignis beginnt und endet. Hier ist dasselbe Beispiel wie oben, bei dem das Ereignis bei 01:00:00:00 beginnt und eine Sekunde später endet.

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
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Video-Zeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
