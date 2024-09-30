---
title: Die Strukturierung einer Seite mit Inhalt
slug: Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

Das Strukturieren einer Content-Seite für die spätere Gestaltung mit CSS ist eine sehr wichtige Fähigkeit, die es zu meistern gilt. In dieser Bewertung wird Ihre Fähigkeit getestet, darüber nachzudenken, wie eine Seite letztendlich aussehen könnte und geeignete semantische Strukturen zu wählen, um darauf ein Layout aufzubauen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie bereits den Rest des Kurses durchgearbeitet haben, mit besonderem Schwerpunkt auf
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
          >Dokument- und Webseitenstruktur</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ihr Wissen über Webseitenstrukturen zu testen und wie Sie ein potenzielles Layout-Design im Markup darstellen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie die [Zip-Datei mit allen Start-Assets](https://raw.githubusercontent.com/mdn/learning-area/main/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip) herunterladen.

Die Zip-Datei enthält:

- Das HTML, dem Sie Struktur-Markup hinzufügen müssen.
- CSS, um Ihr Markup zu stylen.
- Bilder, die auf der Seite verwendet werden.

Erstellen Sie das Beispiel auf Ihrem lokalen Computer oder verwenden Sie alternativ einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Für dieses Projekt besteht Ihre Aufgabe darin, den Inhalt für die Startseite einer Vogelbeobachtungs-Website zu nehmen und strukturelle Elemente hinzuzufügen, damit ein Seitenlayout darauf angewendet werden kann. Es muss Folgendes enthalten:

- Eine Kopfzeile, die die volle Breite der Seite einnimmt und den Haupttitel der Seite, das Logo der Website und das Navigationsmenü enthält. Der Titel und das Logo erscheinen nebeneinander, wenn das Styling angewendet wird, und die Navigation erscheint unter diesen beiden Elementen.
- Einen Hauptinhaltbereich, der aus zwei Spalten besteht: einem Hauptblock für den Begrüßungstext und eine Seitenleiste für Bildvorschauen.
- Eine Fußzeile, die Copyright-Informationen und Credits enthält.

Sie müssen einen geeigneten Wrapper hinzufügen für:

- Die Kopfzeile
- Das Navigationsmenü
- Den Hauptinhalt
- Den Begrüßungstext
- Die Bildseitenleiste
- Die Fußzeile

Sie sollten auch:

- Das bereitgestellte CSS auf die Seite anwenden, indem Sie ein weiteres {{htmlelement("link")}}-Element direkt unter dem bereits vorhandenen Element am Anfang hinzufügen.

## Hinweise und Tipps

- Verwenden Sie den [W3C Nu HTML Checker](https://validator.w3.org/nu/), um unbeabsichtigte Fehler in Ihrem HTML, CSS und SVG zu erkennen – Fehler, die Sie sonst möglicherweise übersehen hätten – damit Sie sie beheben können.
- Sie müssen keine CSS-Kenntnisse haben, um diese Bewertung abzulegen; Sie müssen nur das bereitgestellte CSS in ein HTML-Element einfügen.
- Das bereitgestellte CSS ist so konzipiert, dass, wenn die richtigen strukturellen Elemente zum Markup hinzugefügt werden, diese in der gerenderten Seite grün erscheinen.
- Wenn Sie nicht weiterkommen und sich nicht vorstellen können, welche Elemente wo hingehören, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts und notieren Sie darauf die Elemente, die Ihrer Meinung nach jeweils eingefügt werden sollten. Dies ist äußerst hilfreich.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie die Startseite nach dem Markieren aussehen könnte.

![Das fertige Beispiel für die Bewertung; eine einfache Webseite über Vogelbeobachtung, einschließlich einer Überschrift mit "Birdwatching", Vogelbildern und einer Begrüßungsnachricht](example-page.png)

{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}
