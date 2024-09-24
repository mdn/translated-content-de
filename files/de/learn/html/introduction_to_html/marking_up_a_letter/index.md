---
title: Gestaltung eines Briefes
slug: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}

Wir alle lernen früher oder später, wie man einen Brief schreibt; es ist auch ein nützliches Beispiel, um unsere Fähigkeiten in der Textformatierung zu testen. In dieser Aufgabe haben Sie einen Brief, den Sie als Test für Ihre HTML-Textformatierungsfähigkeiten, sowie für Hyperlinks und die richtige Verwendung des HTML-`<head>`-Elements, gestalten müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie sich an dieser Bewertung versuchen, sollten Sie bereits folgende Themen durchgearbeitet haben:
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einführung in HTML</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML"
          >Was steht im Kopf? Metadaten in HTML</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >Grundlagen der HTML-Textformatierung</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Hyperlinks erstellen</a
        >, und
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting"
          >Erweiterte Textformatierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Testen der grundlegenden und erweiterten HTML-Textformatierung, der Verwendung von Hyperlinks und der Verwendung von HTML-&#x3C;head>.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um zu beginnen, besorgen Sie sich den [Rohtext, den Sie auszeichnen müssen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt), und das [CSS, um das HTML zu gestalten](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/css.txt).
Erstellen Sie eine neue `.html` Datei mit Ihrem Texteditor oder verwenden Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) melden.

## Projektbeschreibung

Für dieses Projekt ist es Ihre Aufgabe, einen Brief zu kennzeichnen, der auf einem Universitäts-Intranet gehostet werden muss. Der Brief ist eine Antwort von einem Forschungsstipendiaten an einen angehenden PhD-Studenten bezüglich ihrer Bewerbung an der Universität.

### Block-/Struktursemantik

- Verwenden Sie eine geeignete Dokumentstruktur einschließlich doctype, und {{htmlelement("html")}}, {{htmlelement("head")}} und {{htmlelement("body")}} Elemente.
- Im Allgemeinen sollte der Brief als eine Organisation von Überschriften und Absätzen gekennzeichnet werden, mit folgender Ausnahme. Es gibt eine Hauptüberschrift (die "Re:"-Zeile) und drei zweite Ebene Überschriften.
- Verwenden Sie einen geeigneten Listentyp, um die Semesteranfangszeiten, Studienfächer und exotischen Tänze zu kennzeichnen.
- Setzen Sie die beiden Adressen in {{htmlelement("address")}} Elemente. Jede Zeile der Adresse sollte in einer neuen Zeile, aber nicht in einem neuen Absatz stehen.

### Inline-Semantik

- Die Namen des Absenders und Empfängers (sowie _Tel_ und _Email_) sollten mit starker Bedeutung gekennzeichnet werden.
- Die vier Daten im Dokument sollten geeignete Elemente mit maschinenlesbaren Daten enthalten.
- Die erste Adresse und das erste Datum im Brief sollten ein class-Attribut mit dem Wert _sender-column_ haben. Das später hinzufügte CSS wird dafür sorgen, dass diese rechtsbündig sind, wie es im klassischen Brief-Layout der Fall sein sollte.
- Kennzeichnen Sie die folgenden fünf Akronyme/Abkürzungen im Haupttext des Briefes - "PhD", "HTML", "CSS", "BC", und "Esq." - um die Erweiterungen von jedem bereitstellen.
- Die sechs Unter-/Hochstellungen sollten angemessen gekennzeichnet werden — in den chemischen Formeln und den Zahlen 103 und 104 (sie sollten 10 hoch 3 und 4 sein).
- Versuchen Sie, mindestens zwei geeignete Worte im Text mit starker Wichtigkeit/Betonung zu kennzeichnen.
- Es gibt zwei Stellen, an denen der Brief einen Hyperlink enthalten sollte. Fügen Sie geeignete Links mit Titeln hinzu. Für den Ort, auf den die Links verweisen, können Sie `http://example.com` als URL verwenden.
- Kennzeichnen Sie das Universitätsmotto und das Zitat mit geeigneten Elementen.

### Der Kopf des Dokuments

- Der Zeichensatz des Dokuments sollte als utf-8 mit dem geeigneten Meta-Tag gesetzt werden.
- Der Autor des Briefes sollte in einem geeigneten Meta-Tag spezifiziert werden.
- Das bereitgestellte CSS sollte in einem geeigneten Tag enthalten sein.

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML Validator](https://validator.w3.org/), um Ihr HTML zu validieren. Belohnen Sie sich mit Bonuspunkten, wenn es validiert wird.
- Sie müssen kein CSS kennen, um diese Aufgabe zu erledigen. Sie müssen lediglich das bereitgestellte CSS in ein HTML-Element einfügen.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie der Brief aussehen könnte, nachdem er ausgezeichnet wurde.

![Beispiel](letter-update.png)

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}
