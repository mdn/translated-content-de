---
title: Platzierung von Untertiteln in IMSC
slug: Related/IMSC/Subtitle_placement
l10n:
  sourceCommit: 95e0fbb78a16450188753d0b53ca02a9fbd2a641
---

IMSC ermöglicht eine sehr präzise Positionierung des Textes über dem Videoinhalt, gegen den Sie ihn anzeigen. Es gibt einige Tricks und bewährte Praktiken, die verwendet werden können, um die Platzierung des auf dem Bildschirm angezeigten Textes zu vereinfachen.

## Berücksichtigung der korrekten Textplatzierung

Ein IMSC-Dokument zu erstellen, das die richtige Textplatzierung und den richtigen Fluss hat, ist eine der entscheidenden Aufgaben. Im Gegensatz zu einigen anderen Untertitelformaten erlaubt IMSC eine sehr explizite Platzierung des Textes an jeder Stelle auf dem Bildschirm. Dennoch sind die gängigsten Untertitelstile heutzutage unten zentriert und oben zentriert auf dem Bildschirm.

## Das \<region>-Element

Das `<region>`-Element erstellt im Wesentlichen ein Feld auf dem Bildschirm, in dem der Text erscheinen soll. Der auf dem Bildschirm angezeigte Text wird niemals außerhalb dieses Feldes angezeigt. Zusätzlich zur Beschreibung der Größe und Position des Feldes, in dem der Text erscheinen kann, definiert das `<region>`-Element auch die horizontale und vertikale Ausrichtung des Textes.

Im folgenden Beispiel haben wir zwei Regionen definiert. Beide Regionsfelder haben die gleiche Größe, die 80 % der Bildbreite und 80 % der Bildhöhe beträgt. Dieses Feld ist zentriert auf dem Bildschirm.

{{EmbedGHLiveSample("imsc-examples/layout-top-bottom/layout-top-bottom.html", '100%', 1000)}}

Die wichtigen Punkte, die hier zu beachten sind, sind:

- `tts:origin` — die obere linke Ecke des Regionsfeldes, angegeben als X Y-Koordinatenwerte. Dies sollte in Prozentwerten angegeben werden.
- `tts:extent` — beschreibt, wie weit das Regionsfeld nach rechts geht, dann wie weit nach unten.
- `tts:backgroundColor` — beschreibt die Farbe des Regionsfeldes. Dies wird meistens transparent sein, Sie können es jedoch mit einer Farbe füllen, wenn das Ihrem Design entspricht.
- `tts:showBackground` — sollte auf `whenActive` gesetzt werden. Der andere zulässige Wert ist `always`, was dem IMSC-Decoder sagt, alle Regionsfelder gleichzeitig mit dem Wert `always` anzuzeigen. Dies ist sehr unwahrscheinlich etwas, das Sie tun möchten.
- `tts:textAlign` — die horizontale Textausrichtung. Wie in einem Textverarbeitungsprogramm kann dies auf `left`, `center` oder `right` gesetzt werden. `center` ist die gebräuchlichste Textausrichtung für Untertitel.
- `tts:displayAlign` — die vertikale Ausrichtung des Textes. Dies kann auf `before`, `center` oder `after` gesetzt werden. `before` bedeutet, dass der Text am oberen Rand des Regionsfeldes beginnt und nach unten fließt. `center` bedeutet, dass der Text innerhalb des Regionsfeldes vertikal zentriert wird. `after` bedeutet, dass der Text am unteren Rand des Regionsfeldes beginnt und nach oben fließt.
