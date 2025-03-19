---
title: "Herausforderung: Formatierung eines Briefes"
short-title: "Herausforderung: Brief-Markup"
slug: Learn_web_development/Core/Structuring_content/Marking_up_a_letter
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}

Früher oder später lernen wir alle, einen Brief zu schreiben; es ist auch ein nützliches Beispiel, um unsere Fähigkeiten in der Textformatierung zu testen. In dieser Herausforderung haben Sie einen Brief, den Sie als Test für Ihre HTML-Textformatierungsfähigkeiten, Hyperlinks und den ordnungsgemäßen Gebrauch des HTML-Elements `<head>` formatieren müssen.

## Ausgangspunkt

Besorgen Sie sich zunächst den [Rohtext, den Sie formatieren müssen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt), und das [CSS zur Gestaltung des HTML](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/css.txt).
Erstellen Sie eine neue `.html`-Datei mit Ihrem Texteditor oder verwenden Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektauftrag

Für dieses Projekt besteht Ihre Aufgabe darin, einen Brief zu formatieren, der auf einem Universitäts-Intranet gehostet werden soll. Der Brief ist eine Antwort von einem Forschungsstipendiaten an einen angehenden Doktoranden bezüglich seiner Bewerbung an der Universität.

### Block-/Struktursemantik

- Verwenden Sie eine geeignete Dokumentenstruktur einschließlich Doctype und den Elementen {{htmlelement("html")}}, {{htmlelement("head")}} und {{htmlelement("body")}}.
- Im Allgemeinen sollte der Brief als Organisation von Überschriften und Absätzen formatiert werden, mit folgender Ausnahme: Es gibt eine Hauptüberschrift (die "Re:"-Zeile) und drei zweite Ebene-Überschriften.
- Verwenden Sie einen geeigneten Listentyp, um die Semesteranfangsdaten, Studienfächer und exotischen Tänze zu markieren.
- Setzen Sie die beiden Adressen in {{htmlelement("address")}}-Elemente. Jede Zeile der Adresse sollte auf einer neuen Zeile stehen, jedoch nicht in einem neuen Absatz.

### Inline-Semantik

- Die Namen des Absenders und Empfängers (und _Tel_ und _Email_) sollten mit starker Wichtigkeit formatiert werden.
- Die vier Daten im Dokument sollten geeignete Elemente mit maschinenlesbaren Daten enthalten.
- Die erste Adresse und das erste Datum im Brief sollten den Klassenattributwert _sender-column_ haben. Das später hinzugefügte CSS sorgt dafür, dass diese rechtsbündig sind, wie es bei einem klassischen Brieflayout der Fall sein sollte.
- Markieren Sie die folgenden fünf Akronyme/Abkürzungen im Haupttext des Briefes — "PhD," "HTML," "CSS," "BC," und "Esq." — um Erweiterungen für jedes zu bieten.
- Die sechs Unter-/Hochschriften sollten angemessen formatiert werden — in den chemischen Formeln und den Zahlen 103 und 104 (sie sollten 10 hoch 3 bzw. 4 sein).
- Versuchen Sie, mindestens zwei geeignete Wörter im Text mit starker Wichtigkeit/Betonung zu formatieren.
- Es gibt zwei Stellen, an denen der Brief einen Hyperlink aufweisen sollte. Fügen Sie geeignete Links mit Titeln hinzu. Für den Ort, zu dem die Links führen, können Sie `http://example.com` als URL verwenden.
- Markieren Sie das Zitat und die Quelle des Universitätsmottos mit geeigneten Elementen.

### Der Kopf des Dokuments

- Der Zeichensatz des Dokuments sollte mithilfe des entsprechenden Meta-Tags auf utf-8 gesetzt werden.
- Der Autor des Briefes sollte in einem entsprechenden Meta-Tag angegeben werden.
- Das bereitgestellte CSS sollte in einem geeigneten Tag eingebunden werden.

## Hinweise und Tipps

- Verwenden Sie den [HTML-Validator des W3C](https://validator.w3.org/), um Ihr HTML zu validieren. Belohnen Sie sich mit Bonuspunkten, wenn es validiert wird.
- Sie müssen keine CSS-Kenntnisse haben, um diese Aufgabe zu erledigen. Sie müssen nur das bereitgestellte CSS in ein HTML-Element einfügen.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie der Brief nach der Formatierung aussehen könnte.

![Beispiel](letter-update.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}
