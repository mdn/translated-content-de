---
title: "Herausforderung: Eine E-Mail korrekt auszeichnen"
slug: Learn_web_development/Core/Structuring_content/Marking_up_a_letter
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}

Wir lernen alle früher oder später, wie man einen Brief schreibt; es ist auch ein nützliches Beispiel, um unsere Fähigkeiten im Textformatieren zu testen. In dieser Herausforderung werden Sie einen Brief auszeichnen, um Ihre HTML-Textformatierungsfähigkeiten sowie Hyperlinks und die korrekte Verwendung des HTML `<head>` Elements zu testen.

## Ausgangspunkt

Beginnen Sie, indem Sie sich den [rohen Text, den Sie auszeichnen müssen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt) und das [CSS zur Formatierung des HTML](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/css.txt) besorgen.
Erstellen Sie eine neue `.html`-Datei mit Ihrem Texteditor oder verwenden Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihre Aufgabe in diesem Projekt ist es, einen Brief zu markieren, der auf einem Universitätsintranet gehostet werden soll. Der Brief ist eine Antwort eines Forschungsstipendiaten an einen angehenden Doktoranden bezüglich seiner Bewerbung an der Universität.

### Block-/strukturelle Semantik

- Verwenden Sie eine geeignete Dokumentstruktur einschließlich Doctype und {{htmlelement("html")}}, {{htmlelement("head")}} und {{htmlelement("body")}} Elemente.
- Im Allgemeinen sollte der Brief als eine Organisation von Überschriften und Absätzen ausgezeichnet werden, mit der folgenden Ausnahme. Es gibt eine Überschrift der obersten Ebene (die "Re:"-Zeile) und drei Überschriften der zweiten Ebene.
- Verwenden Sie einen geeigneten Listentyp, um die Semesterstarttermine, Studienfächer und exotischen Tänze aufzuzeichnen.
- Setzen Sie die beiden Adressen in {{htmlelement("address")}} Elemente. Jede Zeile der Adresse sollte in einer neuen Zeile stehen, aber nicht in einem neuen Absatz.

### Inline-Semantik

- Die Namen des Absenders und Empfängers (und _Tel_ und _Email_) sollten mit starker Wichtigkeit ausgezeichnet werden.
- Die vier Daten im Dokument sollten geeignete Elemente mit maschinenlesbaren Daten enthalten.
- Die erste Adresse und das erste Datum im Brief sollten einen Klassenattributwert von _sender-column_ haben. Das CSS, das Sie später hinzufügen, wird diese rechtsbündig ausrichten, wie es in einem klassischen Brieflayout der Fall sein sollte.
- Markieren Sie die folgenden fünf Akronyme/Abkürzungen im Haupttext des Briefes — "PhD," "HTML," "CSS," "BC," und "Esq." — um Erweiterungen für jedes bereitzustellen.
- Die sechs Hoch-/Tiefstellungen sollten angemessen ausgezeichnet werden — in den chemischen Formeln und die Zahlen 103 und 104 (diese sollten 10 hoch 3 und 4 sein).
- Versuchen Sie, mindestens zwei geeignete Wörter im Text mit starker Wichtigkeit/Hervorhebung zu markieren.
- Es gibt zwei Stellen, an denen der Brief einen Hyperlink haben sollte. Fügen Sie geeignete Links mit Titeln hinzu. Für die Position, auf die die Links verweisen, können Sie `http://example.com` als URL verwenden.
- Markieren Sie das Universitätsmotto-Zitat und die Zitierung mit geeigneten Elementen.

### Der Kopf des Dokuments

- Der Zeichensatz des Dokuments sollte mit dem entsprechenden Meta-Tag als utf-8 festgelegt werden.
- Der Autor des Briefes sollte in einem geeigneten Meta-Tag angegeben sein.
- Das bereitgestellte CSS sollte in einem entsprechenden Tag eingebunden werden.

## Tipps und Hinweise

- Verwenden Sie den [W3C HTML Validator](https://validator.w3.org/), um Ihr HTML zu validieren. Geben Sie sich selbst Bonuspunkte, wenn es validiert.
- Sie müssen kein CSS kennen, um diese Aufgabe zu erledigen. Sie müssen das bereitgestellte CSS nur in ein HTML-Element einfügen.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie der Brief aussehen könnte, nachdem er ausgezeichnet wurde.

![Beispiel](letter-update.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}
