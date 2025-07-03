---
title: "Herausforderung: Setzen einer Homepage für eine Gemeinschaftsschule"
short-title: "Herausforderung: Homepage der Gemeinschaftsschule"
slug: Learn_web_development/Core/Text_styling/Typesetting_a_homepage
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}

In dieser Herausforderung testen wir Ihr Verständnis aller Textstilisierungstechniken, die wir in diesem Modul behandelt haben, indem Sie den Text für die Homepage einer Gemeinschaftsschule stilisieren. Vielleicht haben Sie dabei auch etwas Spaß.

## Ausgangspunkt

Um mit dieser Herausforderung zu beginnen, sollten Sie:

- Die [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/style.css) Dateien für die Übung sowie das bereitgestellte [Link-Icon für externe Links](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/external-link-52.png) herunterladen.
- Eine Kopie davon auf Ihrem lokalen Computer erstellen.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden. Sie könnten den HTML-Code einfügen und das CSS in einen dieser Online-Editoren ausfüllen und dieses [Link-Icon für externe Links](https://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png) als Hintergrundbild verwenden.

> [!NOTE]
> Wenn Sie feststecken, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektanweisung

Ihnen wurde ein unverarbeiteter HTML-Code für die Homepage eines imaginären Community Colleges zur Verfügung gestellt, zusammen mit etwas CSS, das die Seite in ein dreispaltiges Layout umwandelt und eine andere rudimentäre Stilgebung bereitstellt. Sie sollen Ihre CSS-Ergänzungen unter dem Kommentar am Ende der CSS-Datei schreiben, um sicherzustellen, dass die von Ihnen vorgenommenen Änderungen leicht zu erkennen sind. Machen Sie sich keine Sorgen, wenn einige der Selektoren sich wiederholen; wir sehen Ihnen das in diesem Fall nach.

Schriften:

- Laden Sie zunächst ein paar frei verfügbare Schriften herunter. Da es sich um ein College handelt, sollten die Schriften so gewählt werden, dass sie der Seite ein recht ernstes, formales, vertrauenswürdiges Gefühl verleihen: eine serifenschriftweite Schriftart für den allgemeinen Fließtext, kombiniert mit einer Grotesk- oder Slab-Serif-Schriftart für die Überschriften könnte schön sein.
- Verwenden Sie einen geeigneten Dienst, um fehlerfreien `@font-face`-Code für diese beiden Schriftarten zu generieren.
- Wenden Sie die Körperschriftart auf die gesamte Seite an und Ihre Überschriftenschriftart auf Ihre Überschriften.

Allgemeine Textstilisierung:

- Geben Sie der Seite eine seitenweite `font-size` von `10px`.
- Geben Sie Ihren Überschriften und anderen Elementtypen geeignete Schriftgrößen, die mit einer geeigneten relativen Einheit definiert sind.
- Geben Sie Ihrem Fließtext eine geeignete `line-height`.
- Zentrieren Sie Ihre oberste Überschrift auf der Seite.
- Geben Sie Ihren Überschriften ein wenig `letter-spacing`, damit sie nicht zu zusammengedrängt sind und die Buchstaben etwas atmen können.
- Geben Sie Ihrem Fließtext etwas `letter-spacing` und `word-spacing`, wo es passend ist.
- Geben Sie dem ersten Absatz nach jeder Überschrift in der `<section>` einen kleinen Text-Einzug, sagen wir 20px.

Links:

- Geben Sie den Link-, besuchten, Fokus- und Hover-Zuständen einige Farben, die zu den Farben der horizontalen Balken oben und unten auf der Seite passen.
- Sorgen Sie dafür, dass Links standardmäßig unterstrichen sind, aber wenn Sie den Mauszeiger darauf bewegen oder den Fokus darauf setzen, verschwindet die Unterstreichung.
- Entfernen Sie die standardmäßige Fokusumrandung von ALLEN Links auf der Seite.
- Geben Sie dem aktiven Zustand ein merklich anderes Styling, sodass es sich schön abhebt, aber immer noch in das Gesamtdesign der Seite passt.
- Sorgen Sie dafür, dass _externe_ Links das externe Link-Icon neben sich haben.

Listen:

- Achten Sie darauf, dass die Abstände Ihrer Listen und Listeneinträge gut mit dem Gesamtdesign der Seite harmonieren. Jeder Listeneintrag sollte den gleichen `line-height` wie eine Absatzlinie haben, und jede Liste sollte oben und unten den gleichen Abstand haben wie zwischen Absätzen.
- Geben Sie Ihren Listeneinträgen ein nettes Symbol, das zum Design der Seite passt. Es liegt an Ihnen, ob Sie ein benutzerdefiniertes Symbolbild oder etwas anderes wählen.

Navigationsmenü:

- Stylen Sie Ihr Navigationsmenü so, dass es mit der Seite harmoniert.

## Hinweise und Tipps

- Sie müssen den HTML-Code für diese Übung in keiner Weise bearbeiten.
- Sie müssen das Navigationsmenü nicht unbedingt wie Buttons aussehen lassen, aber es muss etwas höher sein, damit es auf der Seite nicht dumm aussieht; denken Sie auch daran, dass es sich hierbei um ein vertikales Navigationsmenü handeln muss.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Ein Screenshot des fertigen Herausforderungsdesigns. Die oberste Überschrift lautet 'St Huxley's Community College'. Es gibt eine rote Linie, die den Banner-Header vom Inhalt trennt. Der Hauptinhalt hat drei Spalten, zwei enthalten Text und eine vertikale Navigationsleiste in der dritten Spalte.](example2.png)

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}
