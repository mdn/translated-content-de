---
title: Typografie einer Homepage für eine Gemeinschaftsschule
slug: Learn/CSS/Styling_text/Typesetting_a_homepage
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

In dieser Bewertung testen wir Ihr Verständnis aller Textstyling-Techniken, die wir in diesem Modul behandelt haben, indem Sie den Text für die Homepage einer Gemeinschaftsschule stylen. Vielleicht haben Sie dabei auch etwas Spaß.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie mit dieser Bewertung beginnen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis von CSS-Textstyling-Techniken zu testen.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie:

- Die [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/index.html)- und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/style.css)-Dateien für das Übungsbeispiel sowie das bereitgestellte [externe Link-Symbol](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/external-link-52.png) holen.
- Eine Kopie davon auf Ihrem lokalen Computer erstellen.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie können den HTML-Code einfügen und den CSS-Code in einen dieser Online-Editoren einfügen und [dieses externe Link-Symbol](https://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png) als Hintergrundbild verwenden.

> [!NOTE]
> Wenn Sie feststecken, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurde ein rohes HTML für die Homepage eines fiktiven Community Colleges bereitgestellt, sowie ein CSS, das die Seite in ein dreispaltiges Layout verwandelt und ein weiteres grundlegendes Styling bietet. Sie sollen Ihre CSS-Ergänzungen unterhalb des Kommentars am Ende der CSS-Datei schreiben, um sicherzustellen, dass die von Ihnen erstellten Teile leicht erkennbar sind. Machen Sie sich keine Sorgen, wenn einige Selektoren sich wiederholen; das lassen wir in diesem Fall durchgehen.

Schriftarten:

- Laden Sie zunächst ein paar frei nutzbare Schriftarten herunter. Da es sich um ein College handelt, sollten die Schriftarten so gewählt werden, dass die Seite einen ziemlich ernsten, formellen und vertrauenswürdigen Eindruck macht: eine Serifenschrift für den allgemeinen Fließtext der Seite, kombiniert mit einer Sans-Serif- oder Slab-Serif-Schrift für die Überschriften.
- Verwenden Sie einen geeigneten Dienst, um den „bulletproof“ `@font-face`-Code für diese beiden Schriftarten zu generieren.
- Wenden Sie Ihre Fließtext-Schrift auf die gesamte Seite an und Ihre Überschrift-Schrift auf Ihre Überschriften.

Allgemeines Textstyling:

- Geben Sie der Seite eine siteweite `font-size` von `10px`.
- Geben Sie Ihren Überschriften und anderen Elementtypen angemessene Schriftgrößen, die mit einer geeigneten relativen Einheit definiert sind.
- Geben Sie Ihrem Fließtext eine geeignete `line-height`.
- Zentrieren Sie Ihre oberste Überschrift auf der Seite.
- Geben Sie Ihren Überschriften ein wenig `letter-spacing`, damit sie nicht zu eng beieinander stehen und die Buchstaben etwas atmen können.
- Geben Sie Ihrem Fließtext etwas `letter-spacing` und `word-spacing`, wie es angemessen ist.
- Geben Sie dem ersten Absatz nach jeder Überschrift in den `<section>`-Tags etwas Texteinrückung, zum Beispiel 20px.

Links:

- Geben Sie den Link-States (Link, besucht, Fokus und Hover) Farben, die mit den Farben der horizontalen Balken oben und unten auf der Seite harmonieren.
- Sorgen Sie dafür, dass Links standardmäßig unterstrichen sind, aber wenn Sie darüber fahren oder sie fokussieren, die Unterstreichung verschwindet.
- Entfernen Sie die Standard-Fokusumrandung von ALLEN Links auf der Seite.
- Geben Sie dem aktiven Zustand ein fühlbar anderes Styling, sodass er schön hervorsticht, sich aber immer noch in das Gesamtdesign der Seite einfügt.
- Stellen Sie sicher, dass _externe_ Links das externe Link-Symbol neben ihnen eingefügt haben.

Listen:

- Sorgen Sie dafür, dass das Layout Ihrer Listen und Listenelemente gut mit dem Styling der Gesamtseite harmoniert. Jedes Listenelement sollte die gleiche `line-height` wie eine Absatzzeile haben, und jede Liste sollte den gleichen Abstand oben und unten haben wie zwischen Absätzen.
- Geben Sie Ihren Listenelementen ein schönes Bullet, das zum Design der Seite passt. Es liegt an Ihnen, ob Sie ein benutzerdefiniertes Bulletbild oder etwas anderes verwenden.

Navigationsmenü:

- Stylen Sie Ihr Navigationsmenü so, dass es mit der Seite harmoniert.

## Hinweise und Tipps

- Sie müssen den HTML-Code für diese Übung in keiner Weise bearbeiten.
- Sie müssen das Navigationsmenü nicht unbedingt wie Schaltflächen aussehen lassen, aber es muss etwas höher sein, damit es an der Seite der Seite nicht seltsam aussieht; denken Sie auch daran, dass dies ein vertikales Navigationsmenü sein muss.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Ein Screenshot des fertigen Designs der Textstyling-Bewertung „Community School Website Homepage“. Die Überschrift lautet „St Huxley's Community College“. Eine rote Linie trennt die Bannerüberschrift vom Inhalt. Der Hauptinhalt hat drei Spalten. Die erste, breiteste Spalte enthält einige Absätze, die die Bedeutung des Colleges für die Studierenden andeuten. Die zweite Spalte enthält eine Liste von Links zu den besten Studiengängen, die das College anbietet. Die dritte Spalte enthält eine vertikale Navigationsleiste mit rechteckigen, umrissenen Schaltflächen-Links zu verschiedenen Abschnitten der Website.](example2.png)

{{PreviousMenu("Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}
