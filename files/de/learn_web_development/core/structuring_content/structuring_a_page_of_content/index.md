---
title: "Herausforderung: Strukturierung einer Inhaltsseite"
short-title: "Herausforderung: Vogelbeobachtungsseite"
slug: Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}

Die Strukturierung einer Inhaltsseite, bereit zum Layouten mit CSS, ist eine sehr wichtige Fähigkeit, die es zu meistern gilt. In dieser Herausforderung werden Sie in Ihrer Fähigkeit getestet, darüber nachzudenken, wie eine Seite letztendlich aussehen könnte, und geeignete strukturelle Semantiken auszuwählen, um darauf ein Layout aufzubauen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie die [Zip-Datei mit allen Startassets](https://raw.githubusercontent.com/mdn/learning-area/main/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip) herunterladen.

Die Zip-Datei enthält:

- Das HTML, dem Sie Strukturmarkierungen hinzufügen müssen.
- CSS zur Gestaltung Ihrer Markierung.
- Bilder, die auf der Seite verwendet werden.

Erstellen Sie das Beispiel auf Ihrem lokalen Computer oder verwenden Sie alternativ einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Für dieses Projekt besteht Ihre Aufgabe darin, den Inhalt für die Startseite einer Vogelbeobachtungs-Website zu nehmen und strukturelle Elemente hinzuzufügen, damit ein Seitenlayout darauf angewendet werden kann. Es muss Folgendes enthalten:

- Eine Kopfzeile über die gesamte Breite der Seite, die den Haupttitel der Seite, das Site-Logo und das Navigationsmenü enthält. Der Titel und das Logo erscheinen nebeneinander, sobald das Styling angewandt wird, und die Navigation erscheint unterhalb dieser beiden Elemente.
- Ein Hauptinhaltsbereich, der zwei Spalten enthält - einen Hauptblock zur Aufnahme des Begrüßungstextes und eine Seitenleiste zur Aufnahme von Bildminiaturen.
- Eine Fußzeile, die Urheberrechtsinformationen und Credits enthält.

Sie müssen einen geeigneten Wrapper hinzufügen für:

- Die Kopfzeile
- Das Navigationsmenü
- Den Hauptinhalt
- Den Begrüßungstext
- Die Bild-Seitenleiste
- Die Fußzeile

Sie sollten auch:

- Das bereitgestellte CSS auf die Seite anwenden, indem Sie ein weiteres {{htmlelement("link")}}-Element direkt unter dem vorhandenen am Anfang hinzufügen.

## Hinweise und Tipps

- Verwenden Sie den [W3C Nu HTML Checker](https://validator.w3.org/nu/), um unbeabsichtigte Fehler in Ihrem HTML, CSS und SVG zu erkennen - Fehler, die Sie sonst möglicherweise übersehen hätten - damit Sie sie beheben können.
- Sie müssen kein CSS kennen, um diese Herausforderung zu bestehen; Sie müssen lediglich das bereitgestellte CSS in ein HTML-Element einfügen.
- Das bereitgestellte CSS ist so gestaltet, dass, wenn die richtigen Strukturelemente zur Markierung hinzugefügt werden, sie auf der gerenderten Seite grün erscheinen.
- Wenn Sie feststecken und nicht sehen können, welche Elemente wo platziert werden sollen, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts und notieren Sie darauf, welche Elemente Ihrer Meinung nach jeden Block umschließen sollten. Das ist äußerst hilfreich.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie die Startseite nach der Auszeichnung aussehen könnte.

![Das fertige Beispiel für die Herausforderung; eine einfache Webseite über Vogelbeobachtung, einschließlich einer Überschrift "Birdwatching", Vogelbilder und einer Willkommensnachricht](example-page.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}
