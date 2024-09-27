---
title: Strukturierung einer Inhaltsseite
slug: Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

Das Strukturieren einer Inhaltsseite, die bereit ist, mit CSS gestaltet zu werden, ist eine sehr wichtige Fähigkeit. In dieser Bewertung wird getestet, wie gut Sie darüber nachdenken können, wie eine Seite letztendlich aussehen könnte, und geeignete strukturelle Semantiken wählen, um ein Layout darauf aufzubauen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung angehen, sollten Sie den Rest des Kurses durchgearbeitet haben, mit besonderem Schwerpunkt auf
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
          >Dokument- und Website-Struktur</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Wissen über Webseitenstrukturen zu testen und wie ein geplantes Layout-Design im Markup dargestellt werden kann.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie sich die [Zip-Datei mit allen Startressourcen](https://raw.githubusercontent.com/mdn/learning-area/main/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip) besorgen.

Die Zip-Datei enthält:

- Das HTML, zu dem Sie strukturelles Markup hinzufügen müssen.
- CSS, um Ihr Markup zu stylen.
- Bilder, die auf der Seite verwendet werden.

Erstellen Sie das Beispiel auf Ihrem lokalen Computer, oder verwenden Sie alternativ einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Für dieses Projekt besteht Ihre Aufgabe darin, Strukturierungselemente zur Homepage eines Vogelbeobachtungs-Webauftritts hinzuzufügen, damit ein Seitenlayout darauf angewendet werden kann. Es muss Folgendes enthalten:

- Eine Kopfzeile, die die volle Breite der Website einnimmt und den Haupttitel der Seite, das Site-Logo und das Navigationsmenü enthält. Der Titel und das Logo erscheinen nebeneinander, sobald das Styling angewendet wird, und die Navigation erscheint unter diesen beiden Elementen.
- Einen Hauptinhaltsbereich mit zwei Spalten — einen Hauptblock für den Begrüßungstext und eine Seitenleiste für Bildminiaturen.
- Eine Fußzeile, die Urheberrechtsinformationen und Quellenangaben enthält.

Sie müssen einen geeigneten Wrapper hinzufügen für:

- Die Kopfzeile
- Das Navigationsmenü
- Den Hauptinhalt
- Den Begrüßungstext
- Die Bildseitenleiste
- Die Fußzeile

Sie sollten auch:

- Das bereitgestellte CSS auf die Seite anwenden, indem Sie ein weiteres {{htmlelement("link")}}-Element direkt unterhalb des bestehenden am Anfang hinzufügen.

## Hinweise und Tipps

- Verwenden Sie den [W3C Nu HTML-Checker](https://validator.w3.org/nu/), um unbeabsichtigte Fehler in Ihrem HTML, CSS und SVG zu erkennen — Fehler, die Sie möglicherweise übersehen haben — damit Sie sie beheben können.
- Sie müssen keine CSS-Kenntnisse haben, um diese Bewertung durchzuführen; Sie müssen nur das bereitgestellte CSS in ein HTML-Element einfügen.
- Das bereitgestellte CSS ist so gestaltet, dass, wenn die richtigen strukturellen Elemente zum Markup hinzugefügt werden, diese auf der gerenderten Seite grün erscheinen.
- Wenn Sie nicht weiterkommen und sich nicht vorstellen können, welche Elemente wohin gehören, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts und schreiben Sie die Elemente auf, von denen Sie denken, dass sie jeden Block umwickeln sollten. Dies ist äußerst hilfreich.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie die Homepage nach dem Markup aussehen könnte.

![Das fertige Beispiel für die Bewertung; eine einfache Webseite über Vogelbeobachtung, einschließlich einer Überschrift "Birdwatching", Vogelbilder und einer Begrüßungsnachricht](example-page.png)

{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}
