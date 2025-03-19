---
title: "Herausforderung: Satz von Schulwebseiten einer Gemeinschaft"
short-title: "Herausforderung: Schulwebseite einer Gemeinschaft"
slug: Learn_web_development/Core/Text_styling/Typesetting_a_homepage
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}

In dieser Herausforderung werden wir Ihr Verständnis für alle Textstyling-Techniken testen, die wir in diesem Modul behandelt haben, indem Sie den Text für die Webseite einer Gemeinschaftsschule gestalten. Dabei könnten Sie sogar Spaß haben.

## Ausgangspunkt

Um diese Herausforderung zu starten, sollten Sie:

- Die [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/style.css) Dateien für die Übung sowie das bereitgestellte [Externes Link-Symbol](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/external-link-52.png) besorgen.
- Erstellen Sie eine Kopie davon auf Ihrem lokalen Computer.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie können das HTML einfügen und das CSS in einen dieser Online-Editoren ausfüllen und verwenden [dieses Externlinksymbol](https://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png) als Hintergrundbild.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektauftrag

Ihnen wurde ein rohes HTML für die Homepage eines imaginären Community College gegeben, sowie etwas CSS, das die Seite in ein dreispaltiges Layout verwandelt und einige andere grundlegende Stilgebungen bietet. Sie sollen Ihre CSS-Ergänzungen unterhalb des Kommentars am Ende der CSS-Datei schreiben, um sicherzustellen, dass es einfach ist, die von Ihnen durchgeführten Teile zu markieren. Machen Sie sich keine Sorgen, wenn einige der Selektoren repetitiv sind; bei diesem Fall lassen wir das durchgehen.

Schriftarten:

- Laden Sie zunächst ein paar frei verwendbare Schriftarten herunter. Da es sich um ein College handelt, sollten die Schriftarten so gewählt werden, dass die Seite einen eher seriösen, formellen, vertrauenswürdigen Eindruck macht: Eine serifenbetonte Schriftart für den allgemeinen Fließtext, gekoppelt mit einer serifenlosen oder slab-serif-Schriftart für die Überschriften, könnte schön sein.
- Verwenden Sie einen geeigneten Dienst, um `@font-face`-Code für diese beiden Schriftarten zu generieren.
- Wenden Sie Ihre Schriftart für den Fließtext auf die gesamte Seite an und Ihre Schriftart für Überschriften auf Ihre Überschriften.

Allgemeines Textstyling:

- Geben Sie der Seite eine allgemeine `font-size` von `10px`.
- Geben Sie Ihren Überschriften und anderen Elementtypen geeignete Schriftgrößen, die mit einer geeigneten relativen Einheit definiert sind.
- Geben Sie Ihrem Fließtext einen geeigneten `line-height`.
- Zentrieren Sie Ihre oberste Überschrift auf der Seite.
- Geben Sie Ihren Überschriften ein wenig `letter-spacing`, damit sie nicht zu gedrängt wirken und die Buchstaben ein wenig atmen können.
- Geben Sie Ihrem Fließtext ein gewisses `letter-spacing` und `word-spacing`, wo es angebracht ist.
- Geben Sie dem ersten Absatz nach jeder Überschrift in der `<section>` etwas Text-Einrückung, sagen wir 20px.

Links:

- Geben Sie den Link-, besuchten, Fokus- und Hover-Zuständen einige Farben, die zu den Farben der horizontalen Balken oben und unten auf der Seite passen.
- Stellen Sie sicher, dass Links standardmäßig unterstrichen sind, aber bei Hover oder Fokus verschwindet das Unterstreichen.
- Entfernen Sie die Standard-Fokus-Kontur von ALLEN Links auf der Seite.
- Geben Sie dem aktiven Zustand einen deutlich anderen Stil, damit er sich gut abhebt, aber immer noch in das Gesamtdesign der Seite passt.
- Stellen Sie sicher, dass _externe_ Links das Externlinksymbol neben sich haben.

Listen:

- Stellen Sie sicher, dass der Abstand Ihrer Listen und Listenelemente gut zum Styling der Gesamtseite passt. Jedes Listenelement sollte die gleiche `line-height` wie eine Absatzzeile haben, und jede Liste sollte den gleichen Abstand oben und unten haben, wie Sie ihn zwischen Absätzen haben.
- Geben Sie Ihren Listenelementen ein schönes Bulletpoint, das dem Design der Seite entspricht. Es liegt bei Ihnen, ob Sie ein benutzerdefiniertes Bulletpoint-Bild oder etwas anderes wählen.

Navigationsmenü:

- Gestalten Sie Ihr Navigationsmenü so, dass es sich harmonisch in die Seite einfügt.

## Hinweise und Tipps

- Sie müssen das HTML für diese Aufgabe nicht bearbeiten.
- Es ist nicht unbedingt erforderlich, dass das Navigationsmenü wie Schaltflächen aussieht, aber es muss etwas höher sein, damit es an der Seite der Seite nicht albern aussieht; denken Sie auch daran, dass dies ein vertikales Navigationsmenü sein muss.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Ein Screenshot des fertigen Herausforderungsdesigns. Die oberste Überschrift lautet 'St Huxley's Community College'. Es gibt eine rote Linie, die den Bannerkopf vom Inhalt trennt. Der Hauptinhalt hat drei Spalten, zwei mit Text und eine vertikale Navigationsleiste in der dritten Spalte.](example2.png)

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}
