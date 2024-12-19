---
title: "Herausforderung: Strukturierung einer Inhaltsseite"
slug: Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}

Die Strukturierung einer Inhaltsseite, die bereit ist, mit CSS gestaltet zu werden, ist eine sehr wichtige Fähigkeit, die Sie beherrschen müssen. In dieser Herausforderung werden Sie auf Ihre Fähigkeit getestet, darüber nachzudenken, wie eine Seite letztendlich aussehen könnte, und geeignete strukturelle Semantiken auszuwählen, um ein Layout darauf aufzubauen.

## Ausgangspunkt

Um diese Herausforderung zu starten, sollten Sie sich die [Zip-Datei mit allen Anfangsmaterialien](https://raw.githubusercontent.com/mdn/learning-area/main/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip) herunterladen.

Die Zip-Datei enthält:

- Das HTML, dem Sie strukturelle Markierungen hinzufügen müssen.
- CSS, um Ihr Markup zu stylen.
- Bilder, die auf der Seite verwendet werden.

Erstellen Sie das Beispiel auf Ihrem lokalen Computer, oder verwenden Sie alternativ einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).

> [!NOTE]
> Wenn Sie feststecken, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Für dieses Projekt besteht Ihre Aufgabe darin, den Inhalt der Startseite einer Vogelbeobachtungs-Website zu nehmen und strukturelle Elemente hinzuzufügen, damit ein Seitenlayout darauf angewendet werden kann. Es muss Folgendes enthalten:

- Ein Header, der die gesamte Breite der Seite einnimmt und den Haupttitel der Seite, das Logo der Website und das Navigationsmenü enthält. Der Titel und das Logo erscheinen nebeneinander, nachdem das Styling angewendet wurde, und die Navigation erscheint unter diesen beiden Elementen.
- Ein Hauptinhaltsbereich mit zwei Spalten — einem Hauptblock, der den Begrüßungstext enthält, und einer Seitenleiste, die Bildthumbnails enthält.
- Einen Footer, der Urheberrechtsinformationen und Credits enthält.

Sie müssen eine geeignete Umrandung hinzufügen für:

- Den Header
- Das Navigationsmenü
- Den Hauptinhalt
- Den Begrüßungstext
- Die Bildseitenleiste
- Den Footer

Sie sollten außerdem:

- Das bereitgestellte CSS auf die Seite anwenden, indem Sie ein weiteres {{htmlelement("link")}}-Element direkt unter dem vorhandenen hinzufügen, das zu Beginn bereitgestellt wird.

## Hinweise und Tipps

- Verwenden Sie den [W3C Nu HTML Checker](https://validator.w3.org/nu/), um unbeabsichtigte Fehler in Ihrem HTML, CSS und SVG zu erkennen – Fehler, die Sie sonst möglicherweise übersehen hätten – damit Sie diese beheben können.
- Sie müssen kein CSS kennen, um diese Herausforderung zu bewältigen; Sie müssen nur das bereitgestellte CSS in ein HTML-Element einfügen.
- Das bereitgestellte CSS ist so gestaltet, dass beim Hinzufügen der korrekten strukturellen Elemente zum Markup diese grün auf der gerenderten Seite erscheinen.
- Wenn Sie feststecken und sich nicht vorstellen können, welche Elemente wo platziert werden sollen, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts und schreiben Sie die Elemente darauf, von denen Sie denken, dass sie jeden Block umhüllen sollten. Dies ist äußerst hilfreich.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie die Startseite nach der Markup-Verarbeitung aussehen könnte.

![Das fertige Beispiel für die Herausforderung; eine einfache Webseite über Vogelbeobachtung, einschließlich einer Überschrift "Birdwatching", Vogelfotos und einer Begrüßungsnachricht](example-page.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}
