---
title: Setzen einer Community-Schul-Startseite
slug: Learn/CSS/Styling_text/Typesetting_a_homepage
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

In dieser Bewertung testen wir Ihr Verständnis aller im Laufe dieses Moduls behandelten Techniken zur Textgestaltung, indem Sie den Text für die Startseite einer Community-Schule gestalten. Möglicherweise haben Sie dabei auch etwas Spaß.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis der CSS-Textgestaltungstechniken zu testen.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie:

- Die [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/style.css) Dateien für die Übung sowie das bereitgestellte [Externe Link Symbol](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/external-link-52.png) herunterladen.
- Eine Kopie davon auf Ihrem lokalen Computer erstellen.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML einfügen und das CSS in einem dieser Online-Editoren ausfüllen und [dieses externe Link-Symbol](https://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png) als Hintergrundbild verwenden.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich an uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## Projektbeschreibung

Sie haben einige unverarbeitete HTML-Daten für die Startseite eines imaginären Community-Colleges sowie einige CSS-Daten erhalten, die die Seite in ein dreispaltiges Layout umwandeln und einige grundlegende Stile bieten. Sie sollen Ihre CSS-Ergänzungen unterhalb des Kommentars am Ende der CSS-Datei schreiben, um es einfach zu machen, die von Ihnen erstellten Teile zu markieren. Machen Sie sich keine Sorgen, wenn einige der Selektoren sich wiederholen; wir lassen das in diesem Fall durchgehen.

Schriften:

- Laden Sie zunächst ein paar kostenlos nutzbare Schriften herunter. Da es sich um ein College handelt, sollten die Schriften ausgewählt werden, um der Seite ein relativ seriöses, formales und vertrauenswürdiges Gefühl zu verleihen: Eine Serifenschrift für den allgemeinen Fließtext, gepaart mit einer serifenlosen oder Slab-Serif-Schrift für die Überschriften könnte schön sein.
- Verwenden Sie einen geeigneten Dienst, um kugelsicheren `@font-face`-Code für diese beiden Schriftarten zu generieren.
- Wenden Sie Ihre Fließtextschrift auf die ganze Seite an und Ihre Überschriftenschrift auf Ihre Überschriften.

Allgemeine Textgestaltung:

- Geben Sie der Seite eine einheitliche `font-size` von `10px`.
- Geben Sie Ihren Überschriften und anderen Elementtypen geeignete Schriftgrößen, die mit einer geeigneten relativen Einheit definiert sind.
- Geben Sie Ihrem Fließtext eine geeignete `line-height`.
- Zentrieren Sie Ihre oberste Überschrift auf der Seite.
- Geben Sie Ihren Überschriften ein wenig `letter-spacing`, damit sie nicht zu gequetscht wirken und die Buchstaben etwas atmen können.
- Geben Sie Ihrem Fließtext bei Bedarf etwas `letter-spacing` und `word-spacing`.
- Geben Sie dem ersten Absatz nach jeder Überschrift im `<section>` einen kleinen Texteinzug, sagen wir 20px.

Links:

- Geben Sie den Link-, Besuchs-, Fokus- und Hover-Zuständen Farben, die mit der Farbe der horizontalen Balken oben und unten auf der Seite harmonieren.
- Stellen Sie sicher, dass Links standardmäßig unterstrichen sind, aber wenn Sie darauf hover oder focus, soll das Unterstreichen verschwinden.
- Entfernen Sie die voreingestellte Fokuskontur von ALLEN Links auf der Seite.
- Geben Sie dem aktiven Zustand eine deutlich andere Gestaltung, sodass er sich schön abhebt, aber dennoch zum Gesamtdesign der Seite passt.
- Stellen Sie sicher, dass _externe_ Links das externe Link-Symbol neben sich eingefügt haben.

Listen:

- Stellen Sie sicher, dass der Abstand Ihrer Listen und Listenelemente gut zum Gesamtdesign der Seite passt. Jedes Listenelement sollte dieselbe `line-height` wie eine Absatzzeile haben, und jede Liste sollte oben und unten denselben Abstand haben wie zwischen den Absätzen.
- Geben Sie Ihren Listenelementen ein schönes Aufzählungszeichen, das zum Design der Seite passt. Es bleibt Ihnen überlassen, ob Sie ein benutzerdefiniertes Aufzählungsbild oder etwas anderes verwenden.

Navigationsmenü:

- Gestalten Sie Ihr Navigationsmenü so, dass es mit der Seite harmoniert.

## Tipps und Hinweise

- Sie müssen den HTML-Code für diese Übung in keiner Weise bearbeiten.
- Sie müssen das Navigationsmenü nicht unbedingt wie Schaltflächen aussehen lassen, aber es sollte etwas höher sein, damit es nicht albern an der Seite der Seite aussieht; denken Sie daran, dass Sie dieses Menü zu einem vertikalen Navigationsmenü machen müssen.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Ein Screenshot des fertigen Designs der Bewertungsseite 'Community school website homepage' für die Textgestaltung. Die Überschrift lautet 'St Huxley's Community College'. Es gibt eine rote Linie, die den Bannerkopf vom Inhalt trennt. Der Hauptinhalt hat drei Spalten. Die erste, breiteste Spalte enthält einige Absätze, die die Bedeutung des College für Studenten implizieren. Die zweite Spalte enthält eine Liste von Links zu den Top-Kursangeboten des College. Die dritte Spalte enthält eine vertikale Navigationsleiste mit rechteckigen, umrissenen Schaltflächenlinks zu verschiedenen Abschnitten der Website.](example2.png)

{{PreviousMenu("Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}
