---
title: Eine E-Mail formatieren
slug: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}

Wir alle lernen irgendwann, wie man einen Brief schreibt. Es ist auch ein nützliches Beispiel, um unsere Fähigkeiten in der Textformatierung zu testen. In dieser Aufgabe haben Sie einen Brief, den Sie als Test für Ihre Fähigkeiten in der HTML-Textformatierung, sowie Verlinkungen und die richtige Verwendung des HTML `<head>`-Elements, auszeichnen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie sich an dieser Aufgabe versuchen, sollten Sie bereits
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML"
          >Was gehört in den Kopf? Metadaten in HTML</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML-Textgrundlagen</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Hyperlinks erstellen</a
        >, und
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting"
          >Fortgeschrittene Textformatierung</a
        >durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundlagen und fortgeschrittene HTML-Textformatierung, Verwendung von Hyperlinks und Nutzung des HTML&#x3C;head>.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Beginnen Sie mit dem [Rohtext, den Sie auszeichnen müssen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt), und dem [CSS, um das HTML zu stylen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/css.txt).
Erstellen Sie eine neue `.html`-Datei mit Ihrem Texteditor oder verwenden Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

In diesem Projekt ist es Ihre Aufgabe, einen Brief auszuzeichnen, der auf einem Universitäts-Intranet gehostet werden soll. Der Brief ist eine Antwort eines wissenschaftlichen Mitarbeiters an einen angehenden Doktoranden bezüglich seiner Bewerbung an der Universität.

### Block- / Strukturelle Semantik

- Verwenden Sie eine geeignete Dokumentenstruktur einschließlich Doctype, und {{htmlelement("html")}}, {{htmlelement("head")}} und {{htmlelement("body")}} Elemente.
- Im Allgemeinen sollte der Brief als Organisation von Überschriften und Absätzen ausgezeichnet werden, mit der folgenden Ausnahme. Es gibt eine Überschrift der obersten Ebene (die "Re:"-Zeile) und drei Überschriften der zweiten Ebene.
- Verwenden Sie einen geeigneten Listentyp, um die Beginntermine der Semester, Studienfächer und exotischen Tänze auszuzeichnen.
- Platzieren Sie die beiden Adressen in {{htmlelement("address")}}-Elementen. Jede Zeile der Adresse sollte in einer neuen Zeile, aber nicht in einem neuen Absatz stehen.

### Inline-Semantik

- Die Namen des Absenders und Empfängers (und _Tel_ und _Email_) sollten mit starker Bedeutung ausgezeichnet werden.
- Die vier Daten im Dokument sollten entsprechende Elemente mit maschinenlesbaren Daten enthalten.
- Die erste Adresse und das erste Datum im Brief sollten einen Klassenattributwert von _sender-column_ haben. Der später hinzugefügte CSS-Code bewirkt, dass diese rechtsbündig sind, wie es in einem klassischen Brieflayout sein sollte.
- Markieren Sie die folgenden fünf Akronyme/Abkürzungen im Haupttext des Briefs – „PhD“, „HTML“, „CSS“, „BC“ und „Esq.“ – um Erläuterungen für jedes zu bieten.
- Die sechs Sub-/Superskripte sollten entsprechend ausgezeichnet sein — in den chemischen Formeln und den Zahlen 103 und 104 (sie sollten 10 hoch 3 bzw. 4 sein).
- Versuchen Sie, mindestens zwei geeignete Wörter im Text mit starker Bedeutung/Betonung auszuzeichnen.
- Es gibt zwei Stellen, an denen der Brief einen Hyperlink haben sollte. Fügen Sie geeignete Links mit Titeln hinzu. Für den Ort, wohin die Links führen, können Sie `http://example.com` als URL verwenden.
- Markieren Sie das Motto der Universität und das Zitat mit passenden Elementen.

### Der Kopf des Dokuments

- Die Zeichencodierung des Dokuments sollte mit Hilfe des entsprechenden Meta-Tags auf utf-8 gesetzt werden.
- Der Autor des Briefes sollte in einem passenden Meta-Tag angegeben werden.
- Der bereitgestellte CSS-Code sollte innerhalb eines geeigneten Tags eingebunden werden.

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML Validator](https://validator.w3.org/), um Ihr HTML zu validieren. Belohnen Sie sich mit Bonuspunkten, wenn es validiert wird.
- Sie müssen keine CSS-Kenntnisse haben, um diese Aufgabe zu erledigen. Sie müssen den bereitgestellten CSS-Code lediglich in ein HTML-Element einfügen.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie der Brief nach der Auszeichnung aussehen könnte.

![Example](letter-update.png)

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}
