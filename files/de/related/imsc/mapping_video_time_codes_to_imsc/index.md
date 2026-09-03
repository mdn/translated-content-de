---
title: Abbildung von Video-Zeitcodes auf IMSC
slug: Related/IMSC/Mapping_video_time_codes_to_IMSC
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

Die Zuordnung des Zeit- oder Zeitcode-Wertes, der in einer Videospur oder einer Videobearbeitungs-Timeline zu sehen ist, zu einem IMSC-Dokument kann etwas knifflig sein. Es gibt einige verschiedene Probleme, auf die Sie achten müssen, die wir in diesem Artikel behandeln werden.

## Berücksichtigung von Zeitcode-Startzeiten

Zur Vereinfachung gehen wir davon aus, dass die Zeitcode-Spuren innerhalb unserer Videodateien bei 00:00:00:00 beginnen. Standardmäßig beginnen die Werte in einem IMSC-Dokument bei 0 und erhöhen sich von dort aus automatisch.

Wenn der Zeitcode in einer Videospur nicht bei 00:00:00:00 beginnt, müssen Sie den ersten Zeitstempel in der Videospur nehmen und eine Berechnung auf diesen Wert und alle folgenden Werte durchführen, sodass der Anfangswert 00:00:00:00 ist. Wenn beispielsweise der erste Zeitcode-Wert in der Videospur 00:59:50:00 ist, müssen Sie 00:59:50:00 von allen Zeitcode-Werten in der Videospur abziehen, um sie mit dem IMSC-Dokument zu synchronisieren.

## Bildraten

Die Abbildung eines IMSC-Dokuments auf eine Videodatei ist relativ einfach, wenn Sie mit ganzzahligen Bildraten arbeiten, wie z.B. 24fps, 25fps und 30fps. Der Wert in Ihrer Timeline entspricht dem Wert im IMSC-Dokument. Wenn Sie jedoch mit gebrochenen Bildraten arbeiten (wie z.B. 23.976fps oder 29.97fps), wird es etwas komplizierter.

Eine Bildrate beschreibt tatsächlich sowohl die Anzahl der Bilder pro Sekunde als auch die Geschwindigkeit dieser Bilder:

- 25fps bedeutet, dass es 25 Bilder pro Sekunde gibt (0-24), und diese Bilder in der gleichen Geschwindigkeit wie eine Echtzeit-Uhr abgespielt werden.
- 24fps bedeutet, dass es 24 Bilder pro Sekunde gibt (0-23), und diese Bilder in der gleichen Geschwindigkeit wie eine Echtzeit-Uhr abgespielt werden.
- 23.976fps wird kompliziert. Wie 24fps bedeutet es, dass es 24 Bilder pro Sekunde gibt (0-23). Im Gegensatz zu 24fps werden diese 24 Bilder jedoch mit einer leicht langsameren Geschwindigkeit als eine Echtzeit-Uhr abgespielt. Wie die Bildratenzahl (23.976fps) andeutet, sehen Sie in einer Echtzeitsekunde fast 24 Bilder. Es dauert tatsächlich 1,001 Sekunden, um 24 Bilder, die mit 23.976fps abgespielt werden, anzuzeigen.

In einer einzelnen Sekunde ist das kein großes Problem. Wenn Sie sich jedoch auf einige Minuten ausdehnen, werden 24fps und 23,976fps bereits ein paar Bilder voneinander abweichen. Wenn Sie sich auf eine Stunde ausdehnen, unterscheiden sie sich um 3.6s. Hier ist etwas Mathematik zur Veranschaulichung:

01:00:00:00 @ 24fps

3600 (Sekunden in 1 Stunde) \* 1.000 (Geschwindigkeit) = 3600 Echtzeitsekunden

01:00:00:00 @ 23.976fps

3600 (Sekunden in 1 Stunde) \* 1.001 (Geschwindigkeit) = 3603.6 Echtzeitsekunden

Dies ist besonders wichtig zu verstehen bei IMSC-Dateien, da alle Zeiten im Dokument Echtzeit-Werte darstellen. Wenn Sie beispielsweise ein Ereignis beschreiben möchten, das mit einem 23.976fps-Video synchronisiert, das bei der Zeitmarke 01:00:00:00 im Video beginnt und 1 Sekunde später endet, würde es so aussehen:

`<p begin="3603.6s" end="3604.6s">Hallo, ich bin Mork vom Ork</p>`

Das wichtige Fazit daraus ist, dass die Zeiten nicht übereinstimmen, wenn Sie ein Video mit einer gebrochenen Bildrate mit einem IMSC-Dokument synchronisieren. Die Zeiten im IMSC-Dokument werden sich langsam weiter von den Videozeiten entfernen.

## Minderung des Problems

Es gibt jedoch tatsächlich eine andere Herangehensweise zur Beschreibung der Zeitangaben im IMSC-Dokument, die dieses Problem adressiert. Wie im [Timing in IMSC](/de/docs/Related/IMSC/Timing_in_IMSC) Leitfaden besprochen, wird Ihnen durch die Verwendung einer Zeitausdruck-Syntax von Frames eine 1:1-Korrelation der Bildnummer im IMSC-Dokument und der Bildnummer im Medienasset ermöglicht.

Die beiden Attribute, die enthalten sein müssen, um die Frames-Methode zu verwenden, sind `frameRate` und `frameRateMultiplier`. Die Bildrate beschreibt, wie viele Bilder in einer Sekunde sind, und der Multiplikator wird auf die `frameRate` angewendet, um die tatsächliche Bildrate in Echtzeit-Sekunden zu beschreiben. Um eine Bildrate von 23.976fps zu beschreiben, würden die folgenden Werte verwendet:

```xml
<tt ttp:frameRate="24" ttp:frameRateMultiplier="1000 1001">
  …
</tt>
```

Dies sagt aus, dass es 24 Bilder in einer Sekunde gibt, und diese mit einer Geschwindigkeit von 23.976 Bildern pro Echtzeit-Sekunde abgespielt werden (24 \* (1000 / 1001)).

Indem Sie diese tatsächliche Bildrate beschreiben, können Sie nun Zeitausdrücke in Frames oder f beschreiben. Dies ist die tatsächliche Bildnummer, bei der das Ereignis beginnt und endet. Hier ist dasselbe Beispiel wie oben, bei dem das Ereignis bei 01:00:00:00 beginnt und eine Sekunde später endet.
