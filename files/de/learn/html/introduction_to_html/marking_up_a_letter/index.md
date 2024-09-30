---
title: Markierung eines Briefes
slug: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}

Wir alle lernen früher oder später, einen Brief zu schreiben; es ist auch ein nützliches Beispiel, um unsere Textformatierungsfähigkeiten zu testen. In dieser Aufgabe haben Sie einen Brief, den Sie markieren sollen, um Ihre HTML-Textformatierungsfähigkeiten sowie Hyperlinks und die korrekte Verwendung des HTML-`<head>`-Elements zu testen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie sich an dieser Bewertung versuchen, sollten Sie bereits folgende Themen bearbeitet haben:
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML"
          >Was ist im Head? Metadaten in HTML</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML-Text-Grundlagen</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Erstellen von Hyperlinks</a
        >, und
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting"
          >Erweiterte Textformatierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Testen Sie grundlegende und erweiterte HTML-Textformatierung, die Verwendung von Hyperlinks und die Verwendung von HTML &#x3C;head>.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um zu beginnen, laden Sie den [rohen Text herunter, den Sie markieren müssen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt) und das [CSS zur Gestaltung des HTML](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/css.txt).
Erstellen Sie eine neue `.html`-Datei mit Ihrem Texteditor oder verwenden Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Für dieses Projekt ist es Ihre Aufgabe, einen Brief zu markieren, der auf einem Universitäts-Intranet gehostet werden muss. Der Brief ist die Antwort eines Wissenschaftlers auf eine Bewerbung eines zukünftigen Doktoranden an die Universität.

### Block-/Strukturelle Semantik

- Verwenden Sie eine geeignete Dokumentstruktur einschließlich Doctype und {{htmlelement("html")}}, {{htmlelement("head")}} und {{htmlelement("body")}} Elemente.
- Der Brief sollte im Allgemeinen als Gliederung von Überschriften und Absätzen markiert sein, mit der folgenden Ausnahme: Es gibt eine Hauptüberschrift („Betreff:“-Zeile) und drei zweite Ebene Überschriften.
- Verwenden Sie einen geeigneten Listentyp, um die Semesterstarttermine, Studienfächer und exotische Tänze zu markieren.
- Setzen Sie die beiden Adressen in {{htmlelement("address")}}-Elemente. Jede Zeile der Adresse sollte in einer neuen Zeile stehen, jedoch nicht in einem neuen Absatz.

### Inline-Semantik

- Die Namen des Absenders und des Empfängers (und _Tel_ und _Email_) sollten mit starker Wichtigkeit markiert werden.
- Die vier Daten im Dokument sollten geeignete Elemente enthalten, die maschinenlesbare Daten bereitstellen.
- Die erste Adresse und das erste Datum im Brief sollten ein class-Attribut mit dem Wert _sender-column_ haben. Das später hinzugefügte CSS wird diese rechts ausrichten, wie es in einem klassischen Brieflayout sein sollte.
- Markieren Sie die folgenden fünf Akronyme/Abkürzungen im Haupttext des Briefes — „PhD“, „HTML“, „CSS“, „BC“ und „Esq.“ — um Erweiterungen für jedes hinzuzufügen.
- Die sechs Hoch-/Tiefstellungen sollten angemessen markiert werden — in den chemischen Formeln und den Zahlen 103 und 104 (sie sollten 10 hoch 3 und 4 sein).
- Versuchen Sie, mindestens zwei geeignete Worte im Text mit starker Wichtigkeit/Betonung zu markieren.
- Es gibt zwei Stellen, an denen der Brief einen Hyperlink haben sollte. Fügen Sie geeignete Links mit Titeln hinzu. Für den Ort, zu dem die Links führen, können Sie `http://example.com` als URL verwenden.
- Markieren Sie das Universitätsmotto-Zitat und die Quelle mit geeigneten Elementen.

### Der Head des Dokuments

- Der Zeichensatz des Dokuments sollte mit dem entsprechenden Meta-Tag auf utf-8 gesetzt werden.
- Der Autor des Briefes sollte in einem geeigneten Meta-Tag angegeben werden.
- Das bereitgestellte CSS sollte in einem geeigneten Tag enthalten sein.

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML Validator](https://validator.w3.org/), um Ihr HTML zu validieren. Belohnen Sie sich mit Bonuspunkten, wenn es validiert wird.
- Sie müssen kein CSS kennen, um diese Aufgabe zu erledigen. Sie müssen das bereitgestellte CSS nur in ein HTML-Element einfügen.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie der Brief nach der Markierung aussehen könnte.

![Beispiel](letter-update.png)

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}
