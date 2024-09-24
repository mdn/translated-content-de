---
title: Untertitelpositionierung in IMSC
slug: Related/IMSC/Subtitle_placement
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

IMSC ermöglicht eine sehr präzise Positionierung des Textes über den Videoinhalt, den Sie anzeigen. Es gibt einige Tricks und bewährte Praktiken, die verwendet werden können, um die Platzierung des Bildschirms zu vereinfachen.

## Berücksichtigung der korrekten Textplatzierung

Das Erstellen eines IMSC-Dokuments, das die richtige Textplatzierung und -fluss hat, ist eine der wichtigsten Aufgaben. Im Gegensatz zu einigen anderen Untertitelformaten erlaubt IMSC eine sehr präzise Platzierung des Textes an beliebiger Stelle auf dem Bildschirm. Trotzdem sind die heute am häufigsten verwendeten Untertitelstile unten zentriert und oben zentriert auf dem Bildschirm.

## Das \<region> Element

Das `<region>`-Element erstellt im Wesentlichen ein Feld auf dem Bildschirm, in dem der Text angezeigt wird. Der Bildschrirmtext wird niemals außerhalb dieses Feldes angezeigt. Zusätzlich zur Beschreibung der Größe und Position des Feldes, in dem der Text erscheinen kann, definiert das `<region>`-Element auch die horizontale und vertikale Ausrichtung des Textes.

Im folgenden Beispiel haben wir zwei Regionen definiert. Beide Regionsfelder haben die gleiche Größe, nämlich 80 % der Bildbreite und 80 % der Bildhöhe. Dieses Feld ist auf dem Bildschirm zentriert.

{{EmbedGHLiveSample("imsc-examples/layout-top-bottom/layout-top-bottom.html", '100%', 1000)}}

Die wichtigsten Aspekte, die hier zu beachten sind:

- `tts:origin` — die obere linke Ecke des Regionsfeldes, angegeben als X Y-Koordinatenwerte. Dies sollte in Prozentwerten beschrieben werden.
- `tts:extent` — beschreibt, wie weit sich das Regionsfeld nach rechts vom Video ausdehnt und dann nach unten.
- `tts:backgroundColor` — beschreibt die Farbe des Regionsfeldes. Dies wird meistens transparent sein, Sie können es jedoch mit einer Farbe füllen, wenn dies zu Ihrem Design passt.
- `tts:showBackground` — sollte auf `whenActive` gesetzt werden. Der andere zulässige Wert ist `always`, was dem IMSC-Decoder mitteilt, dass alle Regionsfelder mit dem Wert `always` gleichzeitig angezeigt werden. Dies ist sehr unwahrscheinlich, dass Sie das möchten.
- `tts:textAlign` — die horizontale Textausrichtung. Wie in einem Textverarbeitungsprogramm kann dies auf `left`, `center` oder `right` gesetzt werden. `center` ist die häufigste Textausrichtung für Untertitel.
- `tts:displayAlign` — die vertikale Ausrichtung des Textes. Dies kann auf `before`, `center` oder `after` gesetzt werden. `before` bedeutet, dass der Text ganz oben im Regionsfeld beginnt und nach unten fließt. `center` bedeutet, dass der Text vertikal im Regionsfeld zentriert wird. `after` bedeutet, dass der Text vom unteren Rand des Regionsfeldes aus beginnt und nach oben fließt.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">IMSC-Dokumente stylen</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelpositionierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videozeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
