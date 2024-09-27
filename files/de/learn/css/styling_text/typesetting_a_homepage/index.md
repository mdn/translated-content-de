---
title: Satzgestaltung einer Community-Schule-Homepage
slug: Learn/CSS/Styling_text/Typesetting_a_homepage
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

In dieser Bewertung testen wir Ihr Verständnis aller Textstyling-Techniken, die wir in diesem Modul behandelt haben, indem Sie den Text für die Homepage einer Community-Schule gestalten. Vielleicht haben Sie dabei sogar etwas Spaß.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie sich an dieser Bewertung versuchen, sollten Sie alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis der CSS-Textstyling-Techniken prüfen.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie:

- Die [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/index.html)- und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/style.css)-Dateien für die Übung sowie das bereitgestellte [externe Link-Icon](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/external-link-52.png) herunterladen.
- Eine Kopie davon auf Ihrem lokalen Computer anlegen.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten den HTML-Code einfügen und das CSS in einen dieser Online-Editoren ausfüllen und dieses [externe Link-Icon](https://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png) als Hintergrundbild verwenden.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie haben etwas Roh-HTML für die Homepage eines imaginären Community-Colleges erhalten, zusätzlich zu etwas CSS, das die Seite in ein dreispaltiges Layout verwandelt und einige grundlegende Stylings bereitstellt. Sie sollen Ihre CSS-Ergänzungen unterhalb des Kommentars am Ende der CSS-Datei schreiben, damit es einfach ist, die von Ihnen vorgenommenen Änderungen zu markieren. Machen Sie sich keine Sorgen, wenn einige der Selektoren wiederholend sind; wir lassen das in diesem Fall durchgehen.

Schriften:

- Laden Sie zunächst ein paar kostenlose, nutzbare Schriften herunter. Da es sich um ein College handelt, sollten die Schriften so ausgewählt werden, dass sie der Seite ein ziemlich ernsthaftes, formales, vertrauenswürdiges Gefühl verleihen: eine serifenbetonte Schrift für den allgemeinen Fließtext, gekoppelt mit einer serifenlosen Schrift oder einer Slab-Serif für die Überschriften, wäre vielleicht schön.
- Verwenden Sie einen geeigneten Service, um bombensicheren `@font-face`-Code für diese beiden Schriften zu generieren.
- Wenden Sie Ihre Fließtext-Schriftart auf die gesamte Seite und Ihre Überschriften-Schriftart auf die Überschriften an.

Allgemeine Textformatierung:

- Geben Sie der Seite eine seitenweite `font-size` von `10px`.
- Geben Sie Ihren Überschriften und anderen Elementtypen geeignete Schriftgrößen, die mit einer geeigneten relativen Einheit definiert sind.
- Geben Sie Ihrem Fließtext eine geeignete `line-height`.
- Zentrieren Sie Ihre oberste Überschrift auf der Seite.
- Geben Sie Ihren Überschriften etwas `letter-spacing`, damit sie nicht zu zusammengeklebt wirken und die Buchstaben etwas mehr Luft zum Atmen haben.
- Geben Sie Ihrem Fließtext etwas `letter-spacing` und `word-spacing`, wie angemessen.
- Geben Sie dem ersten Absatz nach jeder Überschrift im `<section>` eine kleine Text-Einrückung, sagen wir 20px.

Links:

- Geben Sie den Link-, Besuchs-, Fokus- und Hover-Staaten einige Farben, die zu den Farben der horizontalen Balken oben und unten auf der Seite passen.
- Stellen Sie sicher, dass Links standardmäßig unterstrichen sind, aber wenn Sie über sie fahren oder sie fokussieren, die Unterstreichung verschwindet.
- Entfernen Sie den Standard-Fokusrahmen von ALLEN Links auf der Seite.
- Geben Sie dem aktiven Zustand ein deutlich anderes Styling, damit es sich gut abhebt, aber immer noch in das Gesamtdesign der Seite passt.
- Sorgen Sie dafür, dass _externe_ Links das externe Link-Icon neben sich eingefügt haben.

Listen:

- Stellen Sie sicher, dass der Abstand Ihrer Listen und Listenelemente gut mit dem Stil der gesamten Seite funktioniert. Jedes Listenelement sollte die gleiche `line-height` wie eine Absatzzeile haben, und jede Liste sollte den gleichen Abstand an ihrem oberen und unteren Rand haben, wie Sie ihn zwischen Absätzen haben.
- Geben Sie Ihren Listenelementen ein schönes Bullet, das zum Design der Seite passt. Es liegt bei Ihnen, ob Sie ein benutzerdefiniertes Bullet-Bild oder etwas anderes wählen.

Navigationsmenü:

- Stylen Sie Ihr Navigationsmenü so, dass es mit der Seite harmoniert.

## Hinweise und Tipps

- Sie müssen den HTML-Code für diese Übung in keiner Weise bearbeiten.
- Sie müssen das Navigationsmenü nicht unbedingt wie Tasten aussehen lassen, aber es muss etwas höher sein, damit es nicht albern an der Seite der Seite aussieht; denken Sie auch daran, dass Sie dieses zu einem vertikalen Navigationsmenü machen müssen.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das fertige Design aussehen könnte:

![Ein Screenshot des fertigen Designs der 'Community School Website Homepage' Textstyling-Bewertung. Die Überschrift lautet 'St Huxley's Community College'. Eine rote Linie trennt den Banner-Header vom Inhalt. Der Hauptinhalt hat drei Spalten. Die erste, breiteste Spalte enthält einige Absätze, die die Bedeutung des Colleges für die Studenten implizieren. Die zweite Spalte enthält eine Liste von Links zu den wichtigsten Kurswahlen, die das College anbietet. Die dritte Spalte enthält eine vertikale Navigationsleiste mit rechteckigen, umrandeten Schaltflächenlinks zu verschiedenen Bereichen der Website.](example2.png)

{{PreviousMenu("Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}
