---
title: "Herausforderung: Strukturierung einer Inhaltsseite"
short-title: "Herausforderung: Website zur Vogelbeobachtung"
slug: Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}

Das Strukturieren einer Inhaltsseite, die bereit ist, mit CSS gestaltet zu werden, ist eine sehr wichtige Fähigkeit, die Sie beherrschen sollten. In dieser Herausforderung werden Sie auf Ihre Fähigkeit getestet, sich vorzustellen, wie eine Seite aussehen könnte, und geeignete strukturelle Semantiken zu wählen, auf denen ein Layout aufgebaut werden kann.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie sich die [ZIP-Datei mit allen Startmaterialien](https://raw.githubusercontent.com/mdn/learning-area/main/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip) besorgen.

Die ZIP-Datei enthält:

- Das HTML, zu dem Sie strukturelles Markup hinzufügen müssen.
- CSS, um Ihr Markup zu gestalten.
- Bilder, die auf der Seite verwendet werden.

Erstellen Sie das Beispiel auf Ihrem lokalen Computer oder alternativ mit einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).

> [!NOTE]
> Wenn Sie feststecken, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Für dieses Projekt besteht Ihre Aufgabe darin, den Inhalt für die Startseite einer Website zur Vogelbeobachtung zu nehmen und strukturelle Elemente hinzuzufügen, damit darauf ein Seitenlayout angewendet werden kann. Es muss folgendes umfassen:

- Eine Kopfzeile, die sich über die gesamte Breite der Website erstreckt und den Haupttitel der Seite, das Site-Logo und das Navigationsmenü enthält. Der Titel und das Logo erscheinen nebeneinander, sobald das Styling angewendet wird, und die Navigation erscheint unter diesen beiden Elementen.
- Ein Hauptinhaltsbereich, der zwei Spalten enthält — einen Hauptblock, um den Begrüßungstext zu enthalten, und eine Seitenleiste, um Bildminiaturen zu enthalten.
- Eine Fußzeile mit Urheberrechtsinformationen und Danksagungen.

Sie müssen einen geeigneten Wrapper hinzufügen für:

- Die Kopfzeile
- Das Navigationsmenü
- Den Hauptinhalt
- Den Begrüßungstext
- Die Bildseitenleiste
- Die Fußzeile

Sie sollten außerdem:

- Das bereitgestellte CSS auf die Seite anwenden, indem Sie ein weiteres {{htmlelement("link")}}-Element direkt unter dem bereits zu Beginn bereitgestellten hinzufügen.

## Hinweise und Tipps

- Verwenden Sie den [W3C Nu HTML Checker](https://validator.w3.org/nu/), um unbeabsichtigte Fehler in Ihrem HTML, CSS und SVG zu erkennen — Fehler, die Ihnen sonst entgangen wären — damit Sie diese beheben können.
- Sie müssen kein CSS kennen, um diese Herausforderung zu meistern; Sie müssen das bereitgestellte CSS nur in ein HTML-Element setzen.
- Das bereitgestellte CSS ist so konzipiert, dass, wenn die korrekten strukturellen Elemente zum Markup hinzugefügt werden, sie auf der gerenderten Seite grün erscheinen.
- Wenn Sie sich festgefahren fühlen und sich nicht vorstellen können, welche Elemente wohin gehören, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts und schreiben Sie die Elemente darauf, die Ihrer Meinung nach jeden Block umschließen sollten. Dies ist äußerst hilfreich.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie die Startseite nach der Markierung aussehen könnte.

![Das fertige Beispiel für die Herausforderung; eine einfache Webseite über Vogelbeobachtung, einschließlich einer Überschrift "Birdwatching", Vogelfotos und einer Begrüßungsnachricht](example-page.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}
