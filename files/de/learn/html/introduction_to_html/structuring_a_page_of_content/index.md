---
title: Strukturierung einer Inhaltsseite
slug: Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

Die Strukturierung einer Inhaltsseite, die bereit ist, mit CSS gestaltet zu werden, ist eine sehr wichtige Fähigkeit, die es zu meistern gilt. In dieser Bewertung wird Ihre Fähigkeit getestet, darüber nachzudenken, wie eine Seite letztendlich aussehen könnte, und geeignete strukturelle Semantiken auszuwählen, um darauf ein Layout aufzubauen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie dieses Assessment versuchen, sollten Sie den Rest des Kurses durchgearbeitet haben, mit besonderem Schwerpunkt auf
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
          >Dokumenten- und Webseitenstruktur</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Kenntnisse über Webseitenstrukturen zu testen und wie ein zukünftiges Layout-Design in Markup dargestellt wird.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit diesem Assessment zu beginnen, sollten Sie die [Zip-Datei mit allen Startressourcen](https://raw.githubusercontent.com/mdn/learning-area/main/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip) herunterladen.

Die Zip-Datei enthält:

- Das HTML, dem Sie strukturelles Markup hinzufügen müssen.
- CSS, um Ihr Markup zu stylen.
- Bilder, die auf der Seite verwendet werden.

Erstellen Sie das Beispiel auf Ihrem lokalen Computer, oder nutzen Sie alternativ einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbrief

Für dieses Projekt besteht Ihre Aufgabe darin, den Inhalt der Homepage einer Vogelbeobachtungs-Website zu nehmen und ihr strukturelle Elemente hinzuzufügen, damit darauf ein Seitenlayout angewendet werden kann. Es muss Folgendes enthalten:

- Einen Header, der die gesamte Breite der Seite einnimmt und den Haupttitel der Seite, das Webseitenlogo und das Navigationsmenü enthält. Der Titel und das Logo erscheinen nebeneinander, sobald das Styling angewendet wird, und die Navigation erscheint unter diesen beiden Elementen.
- Einen Hauptinhaltsbereich, der zwei Spalten enthält — einen Hauptblock, der den Willkommenstext enthält, und eine Seitenleiste, die Vorschaubilder enthält.
- Einen Footer, der Urheberrechtsinformationen und Credits enthält.

Sie müssen einen geeigneten Wrapper hinzufügen für:

- Den Header
- Das Navigationsmenü
- Den Hauptinhalt
- Den Willkommenstext
- Die Bildseitenleiste
- Den Footer

Sie sollten auch:

- Das bereitgestellte CSS auf die Seite anwenden, indem Sie ein weiteres {{htmlelement("link")}}-Element direkt unterhalb des bereits vorhandenen am Anfang hinzufügen.

## Hinweise und Tipps

- Verwenden Sie den [W3C Nu HTML Checker](https://validator.w3.org/nu/), um unbeabsichtigte Fehler in Ihrem HTML, CSS und SVG zu erkennen — Fehler, die Sie möglicherweise ansonsten übersehen hätten —, damit Sie sie beheben können.
- Sie müssen kein CSS kennen, um dieses Assessment zu bestehen; Sie müssen lediglich das bereitgestellte CSS in ein HTML-Element einfügen.
- Das bereitgestellte CSS ist so konzipiert, dass die richtigen strukturellen Elemente im Markup grün auf der gerenderten Seite erscheinen.
- Wenn Sie nicht weiterkommen und sich nicht vorstellen können, welche Elemente wohin gehören, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts und schreiben Sie auf, welche Elemente Ihrer Meinung nach jeden Block umschließen sollten. Dies ist äußerst hilfreich.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie die Homepage nach dem Hinzufügen von Markup aussehen könnte.

![Das fertige Beispiel für die Bewertung; eine einfache Webseite über Vogelbeobachtung, inklusive einer Überschrift "Birdwatching", Vogelbildern und einer Willkommensnachricht](example-page.png)

{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}
