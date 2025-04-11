---
title: "Herausforderung: Das Markieren eines Briefes"
short-title: "Herausforderung: Brief-Markup"
slug: Learn_web_development/Core/Structuring_content/Marking_up_a_letter
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}

Wir alle lernen früher oder später, wie man einen Brief schreibt; es ist auch ein nützliches Beispiel, um unsere Fähigkeiten im Textformatieren zu testen. In dieser Herausforderung haben Sie einen Brief zu markieren, um Ihre HTML-Textformatierungsfähigkeiten sowie Hyperlinks und die ordnungsgemäße Verwendung des HTML-Elements `<head>` zu testen.

## Ausgangspunkt

Um zu beginnen, laden Sie sich den [Rohtext, den Sie markieren müssen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt), und das [CSS zum Stylen des HTML](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/css.txt).
Erstellen Sie eine neue `.html`-Datei mit Ihrem Texteditor oder nutzen Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), oder [Glitch](https://glitch.com/).

> [!NOTE]
> Wenn Sie feststecken, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektauftrag

Bei diesem Projekt besteht Ihre Aufgabe darin, einen Brief zu markieren, der auf einem Universitätsintranet gehostet werden muss. Der Brief ist eine Antwort eines wissenschaftlichen Mitarbeiters an einen angehenden Doktoranden bezüglich deren Bewerbung an der Universität.

### Block-/strukturelle Semantik

- Verwenden Sie eine geeignete Dokumentstruktur, einschließlich Doctype und {{htmlelement("html")}}, {{htmlelement("head")}} und {{htmlelement("body")}} Elemente.
- Im Allgemeinen sollte der Brief als Organisation von Überschriften und Absätzen markiert werden, mit folgender Ausnahme. Es gibt eine Hauptüberschrift (die "Re:"-Zeile) und drei Überschriften der zweiten Ebene.
- Verwenden Sie einen geeigneten Listentyp, um die Semesterstarttermine, Studienfächer und exotischen Tänze zu markieren.
- Platzieren Sie die beiden Adressen in {{htmlelement("address")}} Elementen. Jede Zeile der Adresse sollte in einer neuen Zeile stehen, jedoch nicht in einem neuen Absatz.

### Inline-Semantik

- Die Namen des Absenders und des Empfängers (und _Tel_ und _Email_) sollten mit starker Wichtigkeit markiert werden.
- Die vier Daten im Dokument sollten geeignete Elemente enthalten, die maschinenlesbare Daten bereitstellen.
- Die erste Adresse und das erste Datum im Brief sollten ein Klassenattribut `sender-column` haben. Das später hinzuzufügende CSS wird dazu führen, dass diese rechtsbündig ausgerichtet sind, wie es in einem klassischen Briefaufbau der Fall sein sollte.
- Markieren Sie die folgenden fünf Akronyme/Abkürzungen im Haupttext des Briefes – "PhD", "HTML", "CSS", "BC" und "Esq." – um Erweiterungen für jedes anzubieten.
- Die sechs Unter-/Hochstellungen sollten angemessen markiert werden – in den chemischen Formeln und den Zahlen 103 und 104 (sie sollten 10 hoch 3 bzw. 4 sein).
- Versuchen Sie, mindestens zwei geeignete Wörter im Text mit starker Wichtigkeit/Betonung zu markieren.
- Es gibt zwei Stellen, an denen der Brief einen Hyperlink haben sollte. Fügen Sie geeignete Links mit Titeln hinzu. Für den Ort, auf den die Links zeigen, können Sie `http://example.com` als URL verwenden.
- Markieren Sie das Universitätsmotto-Zitat und -Zitation mit geeigneten Elementen.

### Der Kopf des Dokuments

- Der Zeichensatz des Dokuments sollte mit dem entsprechenden Meta-Tag auf utf-8 gesetzt werden.
- Der Autor des Briefes sollte in einem geeigneten Meta-Tag angegeben werden.
- Das bereitgestellte CSS sollte in einem geeigneten Tag enthalten sein.

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML Validator](https://validator.w3.org/), um Ihr HTML zu validieren. Geben Sie sich Bonuspunkte, wenn es validiert.
- Sie müssen kein CSS kennen, um diese Aufgabe zu erledigen. Sie müssen nur das bereitgestellte CSS in einem HTML-Element platzieren.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie der Brief nach dem Markieren aussehen könnte.

![Beispiel](letter-update.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}
