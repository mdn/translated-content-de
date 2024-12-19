---
title: "Herausforderung: Setzen einer Startseite für eine Gemeinschaftsschule"
slug: Learn_web_development/Core/Text_styling/Typesetting_a_homepage
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}

In dieser Herausforderung testen wir Ihr Verständnis für alle im Modul behandelten Textstyling-Techniken, indem Sie den Text für die Startseite einer Gemeinschaftsschule gestalten. Vielleicht haben Sie dabei sogar ein wenig Spaß.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- Die [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/style.css) Dateien für die Übung sowie das bereitgestellte [Externes Link Icon](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/external-link-52.png) herunterladen.
- Eine Kopie davon auf Ihrem lokalen Computer speichern.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML einfügen und das CSS ausfüllen und dieses [Externe Link Icon](https://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png) als Hintergrundbild verwenden.

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Ihnen wurde etwas roher HTML-Code für die Startseite eines fiktiven Community Colleges zur Verfügung gestellt, plus etwas CSS, das die Seite in ein dreispaltiges Layout bringt und einige grundlegende Styles bereitstellt. Sie sollen Ihre CSS-Ergänzungen unterhalb des Kommentars am Ende der CSS-Datei schreiben, um es einfach nachzuvollziehen, welche Teile Sie gemacht haben. Machen Sie sich keine Sorgen, wenn einige der Selektoren repetitiv sind; wir sehen davon in diesem Fall ab.

Schriftarten:

- Laden Sie zuerst ein paar kostenlos nutzbare Schriftarten herunter. Da es sich um ein College handelt, sollten die Schriftarten gewählt werden, um der Seite ein ernstes, formelles, vertrauenswürdiges Gefühl zu geben: Eine serifene Schriftart für den gesamten Fließtext, gepaart mit einer sans-serif oder Slab-Serif für die Überschriften könnte schön sein.
- Verwenden Sie einen geeigneten Dienst, um stabilen `@font-face` Code für diese beiden Schriftarten zu erzeugen.
- Wenden Sie Ihre Fließtext-Schriftart auf die gesamte Seite und Ihre Überschriftenschriftart auf die Überschriften an.

Allgemeines Textstyling:

- Geben Sie der Seite eine site-weite `font-size` von `10px`.
- Geben Sie Ihren Überschriften und anderen Elementtypen geeignete Schriftgrößen, die mit einer passenden relativen Einheit definiert sind.
- Geben Sie Ihrem Fließtext eine passende `line-height`.
- Zentrieren Sie Ihre oberste Überschrift auf der Seite.
- Geben Sie Ihren Überschriften etwas `letter-spacing`, um sie nicht zu dicht erscheinen zu lassen, und erlauben Sie den Buchstaben ein wenig zu "atmen".
- Geben Sie Ihrem Fließtext etwas `letter-spacing` und `word-spacing`, wie es angemessen ist.
- Geben Sie dem ersten Absatz nach jeder Überschrift im `<section>` ein wenig Text-Indentation, sagen wir 20px.

Links:

- Geben Sie dem Link, besuchten, Focus- und Hover-Zustand einige Farben, die mit der Farbe der horizontalen Balken oben und unten auf der Seite harmonieren.
- Stellen Sie sicher, dass Links standardmäßig unterstrichen sind, aber wenn Sie über sie hovern oder sie fokussieren, verschwindet die Unterstreichung.
- Entfernen Sie den Standardfokus-Rahmen von ALLEN Links auf der Seite.
- Geben Sie dem aktiven Zustand eine auffallend andere Gestaltung, damit er schön heraussticht, aber trotzdem zum Gesamtdesign der Seite passt.
- Stellen Sie sicher, dass _externe_ Links das externe Link Icon neben sich haben.

Listen:

- Stellen Sie sicher, dass der Abstand Ihrer Listen und Listenelemente gut zum Gesamtdesign der Seite passt. Jedes Listenelement sollte die gleiche `line-height` wie eine Absatzzeile haben und jede Liste sollte den gleichen Abstand oben und unten haben wie zwischen den Absätzen.
- Geben Sie Ihren Listenelementen ein schönes Aufzählungszeichen, das zum Design der Seite passt. Es steht Ihnen frei, ob Sie ein benutzerdefiniertes Aufzählungsbild wählen oder etwas anderes.

Navigationsmenü:

- Gestalten Sie Ihr Navigationsmenü so, dass es mit der Seite im Einklang steht.

## Hinweise und Tipps

- Sie müssen das HTML für diese Übung in keiner Weise bearbeiten.
- Sie müssen das Navigationsmenü nicht unbedingt wie Buttons aussehen lassen, aber es muss ein bisschen höher sein, damit es nicht albern an der Seite der Seite aussieht; denken Sie auch daran, dass dieses ein vertikal ausgerichtetes Navigationsmenü sein muss.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das fertige Design aussehen könnte:

![Ein Screenshot des fertigen Herausforderungsdesigns. Die oberste Überschrift lautet 'St Huxley's Community College'. Eine rote Linie trennt die Bannerüberschrift vom Inhalt. Der Hauptinhalt hat drei Spalten, zwei enthalten Text und eine vertikale Navigationsleiste in der dritten Spalte.](example2.png)

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}
