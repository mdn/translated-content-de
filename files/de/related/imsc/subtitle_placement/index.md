---
title: Untertitelplatzierung in IMSC
slug: Related/IMSC/Subtitle_placement
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

IMSC ermöglicht eine sehr präzise Positionierung des Textes über dem Videoinhalt, gegen den Sie ihn anzeigen. Es gibt einige Tricks und bewährte Praktiken, die verwendet werden können, um die Platzierung des auf dem Bildschirm angezeigten Textes zu vereinfachen.

## Korrekte Textplatzierung berücksichtigen

Ein IMSC-Dokument zu erstellen, das die richtige Textplatzierung und -fluss hat, ist eine der wichtigsten Aufgaben. Im Gegensatz zu einigen anderen Untertitelformaten ermöglicht IMSC eine sehr explizite Platzierung des Textes überall auf dem Bildschirm. Trotzdem sind die heute am häufigsten verwendeten Untertitelstile unten zentriert und oben zentriert auf dem Bildschirm.

## Das \<region>-Element

Das `<region>`-Element erstellt im Wesentlichen ein Kästchen auf dem Bildschirm, in dem der Text erscheinen soll. Der auf dem Bildschirm angezeigte Text wird niemals außerhalb dieses Kästchens angezeigt. Neben der Beschreibung der Größe und Position des Kästchens, in dem der Text erscheinen kann, definiert das `<region>`-Element auch die horizontale und vertikale Ausrichtung des Textes.

Im folgenden Beispiel haben wir zwei Regionen definiert. Beide Regionenkästen haben dieselbe Größe, die 80 % der Bildbreite und 80 % der Bildhöhe beträgt. Dieses Kästchen ist mittig auf dem Bildschirm ausgerichtet.

{{EmbedGHLiveSample("imsc-examples/layout-top-bottom/layout-top-bottom.html", '100%', 1000)}}

Wichtige Aspekte, die hier zu beachten sind:

- `tts:origin` — die obere linke Ecke des Regionenkastens, angegeben als X-Y-Koordinatenwerte. Dies sollte in Prozentwerten beschrieben werden.
- `tts:extent` — beschreibt, wie weit der Regionenkasten nach rechts vom Video reicht und dann wie weit nach unten.
- `tts:backgroundColor` — beschreibt die Farbe des Regionenkastens. Diese wird meistens transparent sein, aber Sie können sie mit einer Farbe füllen, wenn dies Ihrem Design entspricht.
- `tts:showBackground` — sollte auf `whenActive` gesetzt werden. Der andere zulässige Wert ist `always`, was den IMSC-Decoder anweist, alle Regionenkästen mit dem Wert `always` gleichzeitig anzuzeigen. Dies ist sehr unwahrscheinlich etwas, das Sie tun möchten.
- `tts:textAlign` — die horizontale Textausrichtung. Ähnlich wie bei einem Textverarbeitungsprogramm kann dies auf `left`, `center` oder `right` eingestellt werden. `center` ist die häufigste Textausrichtung für Untertitel.
- `tts:displayAlign` — die vertikale Ausrichtung des Textes. Dies kann auf `before`, `center` oder `after` eingestellt werden. `before` bedeutet, dass der Text von ganz oben im Regionenkasten beginnt und nach unten fließt. `center` bedeutet, dass der Text innerhalb des Regionenkastens vertikal zentriert wird. `after` bedeutet, dass der Text von ganz unten im Regionenkasten beginnt und nach oben fließt.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
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
