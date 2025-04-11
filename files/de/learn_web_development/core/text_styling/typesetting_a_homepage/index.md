---
title: "Herausforderung: Das Layout einer Schul-Homepage gestalten"
short-title: "Herausforderung: Schul-Homepage"
slug: Learn_web_development/Core/Text_styling/Typesetting_a_homepage
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}

In dieser Herausforderung werden wir Ihr Verständnis für alle im Verlauf dieses Moduls behandelten Techniken zum Textstyling testen, indem wir Sie die Texte für die Homepage einer Gemeinschaftsschule gestalten lassen. Vielleicht haben Sie dabei sogar ein wenig Spaß.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- Die [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/style.css) Dateien für die Übung sowie das bereitgestellte [externes Link-Icon](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/external-link-52.png) herunterladen.
- Machen Sie eine Kopie davon auf Ihrem lokalen Computer.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten den HTML-Code einfügen und das CSS in einen dieser Online-Editoren schreiben und das [externes Link-Icon](https://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png) als Hintergrundbild nutzen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbrief

Sie haben einen Roh-HTML-Code für die Homepage eines fiktiven Community Colleges sowie CSS, das die Seite in einem Drei-Spalten-Layout mit einigen grundlegenden Styles gestaltet, erhalten. Sie sollen Ihre zusätzlichen CSS-Änderungen unter dem Kommentar am Ende der CSS-Datei schreiben, um sicherzustellen, dass klar erkennbar ist, welche Teile von Ihnen stammen. Machen Sie sich keine Sorgen, wenn einige der Selektoren wiederholt werden; in diesem Fall sehen wir darüber hinweg.

Schriften:

- Laden Sie zuerst ein paar frei verfügbare Schriften herunter. Da es sich um ein College handelt, sollten die Schriften so gewählt werden, dass sie der Seite ein ernstes, formelles, vertrauenswürdiges Gefühl verleihen: eine serifenbetonte Schrift für den allgemeinen Fließtext und eine serifenlose oder Slab-Serif für die Überschriften könnte passend sein.
- Verwenden Sie einen geeigneten Dienst, um `@font-face`-Code für diese beiden Schriften zu generieren, der in verschiedenen Browsern funktioniert.
- Wenden Sie Ihre Fließtext-Schrift global auf die Seite an und Ihre Überschrift-Schrift auf die Überschriften.

Allgemeines Textstyling:

- Vergeben Sie eine globale `font-size` von `10px`.
- Vergeben Sie Ihren Überschriften und anderen Elementtypen geeignete Schriftgrößen, definiert mit einer passenden relativen Einheit.
- Vergeben Sie Ihrem Fließtext einen geeigneten `line-height`.
- Zentrieren Sie Ihre oberste Überschrift auf der Seite.
- Geben Sie Ihren Überschriften ein wenig `letter-spacing`, damit sie nicht zu gedrückt wirken und die Buchstaben atmen können.
- Geben Sie Ihrem Fließtext etwas `letter-spacing` und `word-spacing`, wie es passend ist.
- Vergeben Sie dem ersten Absatz nach jeder Überschrift in einem `<section>` etwas Einzug, z. B. 20px.

Links:

- Vergeben Sie den Link-, Besucht-, Fokus- und Hover-Zuständen Farben, die zu den Farben der horizontalen Balken am oberen und unteren Rand der Seite passen.
- Stellen Sie sicher, dass Links standardmäßig unterstrichen sind, aber wenn Sie darüber fahren oder sie fokussieren, das Unterstrichen-Sein verschwindet.
- Entfernen Sie den standardmäßigen Fokusrahmen von ALLEN Links auf der Seite.
- Vergeben Sie dem aktiven Zustand ein merklich anderes Styling, damit es sich gut abhebt und dennoch in das Gesamtdesign passt.
- Stellen Sie sicher, dass _externe_ Links das externe Link-Icon neben sich haben.

Listen:

- Achten Sie darauf, dass der Abstand Ihrer Listen und Listenelemente gut zum Gesamtstyling der Seite passt. Jedes Listenelement sollte die gleiche `line-height` haben wie eine Zeile des Fließtextes, und jede Liste sollte oben und unten den gleichen Abstand haben wie zwischen den Absätzen.
- Vergeben Sie Ihren Listenelementen ein schönes Aufzählungszeichen, das zum Design der Seite passt. Es steht Ihnen frei, ein benutzerdefiniertes Aufzählungsbild oder etwas anderes zu wählen.

Navigationsmenü:

- Gestalten Sie Ihr Navigationsmenü so, dass es mit der Seite harmoniert.

## Tipps und Hinweise

- Sie müssen den HTML-Code für diese Übung nicht bearbeiten.
- Sie müssen das Navigationsmenü nicht unbedingt wie Schaltflächen aussehen lassen, aber es sollte etwas höher sein, damit es nicht seltsam an der Seite der Seite wirkt; denken Sie auch daran, dass dies ein vertikales Navigationsmenü sein muss.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das fertige Design aussehen könnte:

![Ein Screenshot des fertigen Design-Challenges. Der obere Titel lautet 'St Huxley's Community College'. Es gibt eine rote Linie, die den Banner-Header vom Inhalt trennt. Der Hauptinhalt hat drei Spalten, zwei davon enthalten Text und eine vertikale Navigationsleiste in der dritten Spalte.](example2.png)

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}
