---
title: "Herausforderung: Einen Brief auszeichnen"
short-title: "Herausforderung: Briefauszeichnung"
slug: Learn_web_development/Core/Structuring_content/Marking_up_a_letter
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}

Wir lernen alle früher oder später, einen Brief zu schreiben; es ist auch ein nützliches Beispiel, um unsere Textformatierungsfähigkeiten zu testen. In dieser Herausforderung haben Sie einen Brief, den Sie als Test für Ihre HTML-Textformatierungsfähigkeiten sowie Hyperlinks und den richtigen Gebrauch des HTML-`<head>`-Elements auszeichnen müssen.

## Ausgangspunkt

Zu Beginn sollten Sie sich den [Rohtext, den Sie auszeichnen müssen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt), und das [CSS zur Gestaltung des HTML](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/css.txt) besorgen. Erstellen Sie eine neue `.html`-Datei mit Ihrem Texteditor oder verwenden Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/).

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektauftrag

Für dieses Projekt besteht Ihre Aufgabe darin, einen Brief auszuzeichnen, der im Intranet einer Universität gehostet werden soll. Der Brief ist eine Antwort von einem wissenschaftlichen Mitarbeiter an einen angehenden Doktoranden bezüglich seiner Bewerbung an der Universität.

### Block-/Strukturelle Semantik

- Verwenden Sie die geeignete Dokumentstruktur einschließlich Doctype und {{htmlelement("html")}}, {{htmlelement("head")}} und {{htmlelement("body")}} Elemente.
- Im Allgemeinen sollte der Brief als Organisation von Überschriften und Absätzen ausgezeichnet werden, mit der folgenden Ausnahme. Es gibt eine Überschrift auf oberster Ebene (die "Re:"-Zeile) und drei Überschriften auf zweiter Ebene.
- Verwenden Sie einen geeigneten Listentyp, um die Semesterbeginntermine, Studienfächer und exotischen Tänze auszuzeichnen.
- Setzen Sie die beiden Adressen in {{htmlelement("address")}} Elemente. Jede Zeile der Adresse sollte auf einer neuen Zeile stehen, aber nicht in einem neuen Absatz.

### Inline-Semantik

- Die Namen des Absenders und Empfängers (und _Tel_ und _Email_) sollten mit starker Wichtigkeit ausgezeichnet werden.
- Die vier Daten im Dokument sollten geeignete Elemente mit maschinenlesbaren Daten enthalten.
- Die erste Adresse und das erste Datum im Brief sollten einen Klassenattributwert von _sender-column_ haben. Das CSS, das Sie später hinzufügen, wird diese rechtsbündig ausrichten, wie es in einem klassischen Briefaufbau der Fall sein sollte.
- Markieren Sie die folgenden fünf Akronyme/Abkürzungen im Haupttext des Briefes — "PhD", "HTML", "CSS", "BC" und "Esq." — um Erklärungen für jedes davon bereitzustellen.
- Die sechs Tief-/Hochstellungen sollten angemessen ausgezeichnet werden — in den chemischen Formeln und den Zahlen 103 und 104 (sie sollten 10 hoch 3 und 4 sein).
- Versuchen Sie, mindestens zwei geeignete Wörter im Text mit starker Wichtigkeit/Betonung zu markieren.
- Es gibt zwei Stellen, an denen der Brief einen Hyperlink haben sollte. Fügen Sie geeignete Links mit Titeln hinzu. Für die Adresse, auf die die Links verweisen, können Sie `http://example.com` als URL verwenden.
- Markieren Sie das Zitat und die Zitation des Universitätsmottos mit geeigneten Elementen.

### Der Kopf des Dokuments

- Der Zeichensatz des Dokuments sollte mit dem entsprechenden Meta-Tag als utf-8 festgelegt werden.
- Der Autor des Briefes sollte in einem entsprechenden Meta-Tag angegeben werden.
- Das bereitgestellte CSS sollte innerhalb eines geeigneten Tags eingebunden werden.

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML Validator](https://validator.w3.org/), um Ihr HTML zu validieren. Belohnen Sie sich mit Bonuspunkten, wenn es validiert.
- Sie müssen kein CSS kennen, um diese Aufgabe zu erledigen. Sie müssen das bereitgestellte CSS nur innerhalb eines HTML-Elements platzieren.

## Beispiel

Das folgende Bildschirmfoto zeigt ein Beispiel, wie der Brief nach dem Auszeichnen aussehen könnte.

![Beispiel](letter-update.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}
