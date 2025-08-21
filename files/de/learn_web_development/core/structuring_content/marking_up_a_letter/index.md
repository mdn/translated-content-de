---
title: "Herausforderung: Markierung eines Briefes"
short-title: "Herausforderung: Brief-Markup"
slug: Learn_web_development/Core/Structuring_content/Marking_up_a_letter
l10n:
  sourceCommit: 27f34d8b137f9bb2b467f9f9a1c4e1d04e12ed89
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}

Früher oder später lernt jeder von uns, wie man einen Brief schreibt; es ist auch ein nützliches Beispiel, um unsere Fähigkeiten im Textformatieren zu testen. In dieser Herausforderung haben Sie einen Brief zu markieren, um Ihre HTML-Textformatierungsfähigkeiten sowie Hyperlinks und den korrekten Gebrauch des `<head>`-HTML-Elements zu testen.

## Ausgangspunkt

Um zu beginnen, holen Sie sich den [Rohtext, den Sie markieren müssen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt) und das [CSS, um das HTML zu stylen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/css.txt). Erstellen Sie eine neue `.html`-Datei mit Ihrem Texteditor oder verwenden Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/).

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Für dieses Projekt besteht Ihre Aufgabe darin, einen Brief zu markieren, der auf einem Universitätsintranet gehostet werden muss. Der Brief ist eine Antwort von einem wissenschaftlichen Mitarbeiter an einen angehenden Doktoranden bezüglich seiner Bewerbung an der Universität.

### Block-/Strukturelle Semantik

- Verwenden Sie eine geeignete Dokumentstruktur, einschließlich Doctype, und {{htmlelement("html")}}, {{htmlelement("head")}} und {{htmlelement("body")}} Elemente.
- Im Allgemeinen sollte der Brief als Organisation von Überschriften und Absätzen ausgezeichnet werden, mit folgender Ausnahme. Es gibt eine Überschrift der obersten Ebene (die "Re:"-Zeile) und drei Überschriften der zweiten Ebene.
- Verwenden Sie einen geeigneten Listentyp, um die Semesteranfangstermine, Studienfächer und exotischen Tänze zu markieren.
- Setzen Sie die beiden Adressen in {{htmlelement("address")}} Elemente. Jede Zeile der Adresse sollte in einer neuen Zeile stehen, aber nicht in einem neuen Absatz.

### Inline-Semantik

- Die Namen des Absenders und Empfängers (sowie _Tel_ und _Email_) sollten mit starkem Gewicht markiert werden.
- Die vier Daten im Dokument sollten geeignete Elemente mit maschinenlesbaren Daten enthalten.
- Die erste Adresse und das erste Datum im Brief sollten einen Klassenattributwert von _sender-column_ haben. Das CSS, das Sie später hinzufügen, wird diese rechts ausrichten, wie es in einem klassischen Brieflayout der Fall sein sollte.
- Markieren Sie die folgenden fünf Akronyme/Abkürzungen im Haupttext des Briefes – "PhD", "HTML", "CSS", "BC" und "Esq." – um Erweiterungen für jedes zu bieten.
- Die sechs Sub-/Superskripte sollten angemessen markiert werden – in den chemischen Formeln und den Zahlen 103 und 104 (sie sollten 10 hoch 3 bzw. 4 sein).
- Versuchen Sie, mindestens zwei geeignete Wörter im Text mit starker Bedeutung/Betonung zu markieren.
- An zwei Stellen sollte der Brief einen Hyperlink enthalten. Fügen Sie geeignete Links mit Titeln hinzu. Für den Ort, auf den die Links verweisen, können Sie `http://example.com` als URL verwenden.
- Markieren Sie das Universitätsmottozitat und die Zitation mit geeigneten Elementen.

### Der Kopf des Dokuments

- Der Zeichensatz des Dokuments sollte mit dem entsprechenden Meta-Tag als utf-8 gesetzt werden.
- Der Autor des Briefes sollte in einem geeigneten Meta-Tag angegeben werden.
- Das bereitgestellte CSS sollte innerhalb eines geeigneten Tags eingebunden werden.

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML-Validator](https://validator.w3.org/), um Ihr HTML zu validieren. Belohnen Sie sich mit Bonuspunkten, wenn es validiert wird.
- Sie müssen keine CSS-Kenntnisse haben, um diese Aufgabe zu erledigen. Sie müssen lediglich das bereitgestellte CSS in ein HTML-Element einfügen.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie der Brief nach dem Markup aussehen könnte.

![Beispiel](letter-update.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}
