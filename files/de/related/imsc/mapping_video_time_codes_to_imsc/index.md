---
title: Zuordnung von Videotimecodes zu IMSC
slug: Related/IMSC/Mapping_video_time_codes_to_IMSC
l10n:
  sourceCommit: 95e0fbb78a16450188753d0b53ca02a9fbd2a641
---

Die Zuordnung der Zeit- oder Timecode-Werte, die in einem Video-Track oder in der Zeitleiste eines Videoeditors angezeigt werden, zu einem IMSC-Dokument kann etwas knifflig sein. Es gibt einige verschiedene Probleme, deren Sie sich bewusst sein müssen, die wir in diesem Artikel behandeln werden.

## Berücksichtigung von Startzeiten der Timecodes

Der Einfachheit halber nehmen wir an, dass die Timecode-Tracks in unseren Videodateien bei 00:00:00:00 beginnen. Standardmäßig beginnen die Werte in einem IMSC-Dokument bei 0 und erhöhen sich von dort aus automatisch.

Wenn der Timecode in einem Video-Track nicht bei 00:00:00:00 beginnt, müssen Sie den ersten Zeitstempel im Video-Track nehmen und eine Berechnung für diesen Wert und alle folgenden Werte durchführen, sodass der Anfangswert 00:00:00:00 ist. Beispielsweise, wenn der erste Timecode-Wert im Video-Track 00:59:50:00 ist, müssen Sie 00:59:50:00 von allen Timecode-Werten im Video-Track subtrahieren, um ihn mit dem IMSC-Dokument zu synchronisieren.

## Bildraten

Die Zuordnung eines IMSC-Dokuments zu einem Videobestand ist ziemlich einfach, wenn Sie mit ganzzahligen Bildraten arbeiten, wie z. B. 24fps, 25fps und 30fps. Der Wert in Ihrer Zeitleiste wird der gleiche sein wie der Wert im IMSC-Dokument. Wenn Sie jedoch mit gebrochenen Bildraten arbeiten (wie 23.976fps oder 29.97fps), wird dies etwas komplizierter.

Eine Bildrate beschreibt tatsächlich sowohl die Anzahl der Bilder pro Sekunde als auch die Geschwindigkeit dieser Bilder:

- 25fps bedeutet, dass es 25 Bilder pro Sekunde gibt (0-24), und diese Bilder in derselben Geschwindigkeit wie eine Echtzeituhr abgespielt werden.
- 24fps bedeutet, dass es 24 Bilder pro Sekunde gibt (0-23), und diese Bilder in derselben Geschwindigkeit wie eine Echtzeituhr abgespielt werden.
- 23.976fps ist dort, wo es ungewöhnlich wird. Wie 24fps beschreibt es, dass es 24 Bilder pro Sekunde gibt (0-23). Im Gegensatz zu 24fps werden diese 24 Bilder jedoch mit einer etwas langsameren Geschwindigkeit abgespielt als eine Echtzeituhr. Wie die Bildratenzahl (23.976fps) andeutet, sehen Sie in einer realen Sekunde fast 24 Bilder. Tatsächlich dauert es 1,001 Sekunden, bis 24 Bilder bei 23.976fps angezeigt werden.

In einer einzigen Sekunde ist das kein großes Problem. Wenn Sie jedoch auf ein paar Minuten erweitern, werden 24fps und 23.976fps bereits einige Bilder voneinander abweichen. Wenn Sie auf eine Stunde erweitern, werden sie sich um 3,6 Sekunden unterscheiden. Hier ist einige Mathematik, um dies zu veranschaulichen:

01:00:00:00 @ 24fps

3600 (Sekunden in 1 Stunde) \* 1.000 (Geschwindigkeit) = 3600 echte Sekunden

01:00:00:00 @ 23.976fps

3600 (Sekunden in 1 Stunde) \* 1.001 (Geschwindigkeit) = 3603,6 echte Sekunden

Dies ist besonders wichtig zu verstehen bei IMSC-Dateien, da alle Zeiten im Dokument echte Zeitwerte darstellen. Wenn Sie beispielsweise ein Ereignis beschreiben möchten, das mit einem 23.976fps-Video synchronisiert ist, das bei 01:00:00:00 Timecode im Video beginnt und 1 Sekunde später endet, würde es so aussehen:

`<p begin="3603.6s" end="3604.6s">Hallo, ich bin Mork vom Ork</p>`

Das Wichtigste hier ist, dass, wenn Sie ein Video mit einer gebrochenen Bildrate mit einem IMSC-Dokument synchronisieren, die Zeiten nicht übereinstimmen werden. Die Zeiten im IMSC-Dokument werden sich langsam weiter von den Videozeiten entfernen.

## Das Problem mildern

Es gibt jedoch einen anderen Ansatz zur Beschreibung der Zeitwerteinträge im IMSC-Dokument, der dieses Problem adressiert. Wie im [Timing in IMSC](/de/docs/Related/IMSC/Timing_in_IMSC) Leitfaden besprochen, wird durch die Verwendung einer Zeitformatausdruckssyntax in Frames eine 1:1-Korrelation der Bildnummer im IMSC-Dokument und der Bildnummer im Mediendatei ermöglicht.

Die beiden Attribute, die enthalten sein müssen, um die Methode in Frames zu verwenden, sind `frameRate` und `frameRateMultiplier`. Die Bildrate beschreibt, wie viele Bilder in einer Sekunde sind und der Multiplikator wird auf die `frameRate` angewendet, um die tatsächliche Bildrate in Echtzeitssekunden zu beschreiben. Um eine Bildrate von 23.976fps zu beschreiben, würden die folgenden Werte verwendet:

```xml
<tt ttp:frameRate="24" ttp:frameRateMultiplier="1000 1001">
  …
</tt>
```

Dies besagt, dass es 24 Bilder in einer Sekunde gibt und diese mit einer Geschwindigkeit von 23.976 Bildern pro Echtzeitssekunde abgespielt werden (24 \* (1000 / 1001)).

Indem Sie diese tatsächliche Bildrate beschreiben, können Sie nun die Zeitausdrücke in Bildern oder f beschreiben. Dies ist die tatsächliche Bildnummer, bei der das Ereignis beginnt und endet. Hier ist das gleiche Beispiel wie oben, bei dem das Ereignis bei 01:00:00:00 beginnt und eine Sekunde später endet.
