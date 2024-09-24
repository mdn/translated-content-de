---
title: Multimedia und Einbettung
slug: Learn/HTML/Multimedia_and_embedding
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}

Wir haben in diesem Kurs bisher viel Text betrachtet, aber das Web wäre wirklich langweilig, wenn es nur Text verwenden würde. Lassen Sie uns beginnen, wie man das Web mit interessanteren Inhalten zum Leben erweckt! Dieses Modul untersucht, wie man HTML verwendet, um Multimedia in Ihre Webseiten einzufügen, einschließlich der verschiedenen Methoden, mit denen Bilder eingebettet werden können, und wie man Video, Audio und sogar ganze Webseiten einbettet.

## Voraussetzungen

Bevor Sie dieses Modul beginnen, sollten Sie ein angemessenes Verständnis der Grundlagen von HTML haben, wie es zuvor im [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) behandelt wurde. Wenn Sie dieses Modul (oder etwas Ähnliches) noch nicht durchgearbeitet haben, sollten Sie dies zuerst tun und dann zurückkommen!

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

Dieses Modul enthält die folgenden Artikel, die Sie durch alle Grundlagen der Einbettung von Multimedia auf Webseiten führen.

- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : Es gibt andere Arten von Multimedia zu berücksichtigen, aber es ist logisch, mit dem bescheidenen {{htmlelement("img")}}-Element zu beginnen, das verwendet wird, um ein einfaches Bild in eine Webseite einzubetten. In diesem Artikel werden wir uns eingehender ansehen, wie es benutzt wird, einschließlich der Grundlagen, der Beschriftung mit {{htmlelement("figure")}} und wie es mit CSS-Hintergrundbildern zusammenhängt.
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Als Nächstes betrachten wir, wie man die HTML-Elemente {{htmlelement("video")}} und {{htmlelement("audio")}} verwendet, um Video und Audio auf unseren Seiten einzubetten, einschließlich der Grundlagen, der Bereitstellung verschiedener Dateiformate für verschiedene Browser, dem Hinzufügen von Untertiteln und der Bereitstellung von Fallbacks für ältere Browser.
- [Von \<object> zu \<iframe> — andere Einbettungstechnologien](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : An diesem Punkt machen wir einen Seitenschritt und schauen uns ein paar Elemente an, mit denen Sie eine Vielzahl von Inhaltstypen in Ihre Webseiten einbetten können: das {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}-Element. `<iframe>`s sind zum Einbetten anderer Webseiten gedacht, und die anderen beiden ermöglichen das Einbetten externer Ressourcen wie PDF-Dateien.
- [Hinzufügen von Vektorgrafiken zum Web](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : Vektorgrafiken können in bestimmten Situationen sehr nützlich sein. Im Gegensatz zu regulären Formaten wie PNG/JPG verzerren oder pixelieren sie nicht, wenn sie vergrößert werden – sie bleiben glatt beim Skalieren. Dieser Artikel führt Sie in das Konzept von Vektorgrafiken ein und wie das beliebte {{glossary("SVG")}}-Format in Webseiten eingebunden wird.
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept von responsiven Bildern – Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Eigenschaften gut funktionieren – und betrachten, welche Werkzeuge HTML bereitstellt, um diese zu implementieren. Dies hilft, die Performance über verschiedene Geräte hinweg zu verbessern. Responsive Bilder sind nur ein Teil des [responsive Designs](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), einem zukünftigen CSS-Thema, das Sie lernen sollten.

## Bewertungen

Die folgende Bewertung wird Ihr Verständnis des in den oben genannten Leitfäden behandelten Materials testen.

- [Mozilla-Splash-Seite](/de/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : In dieser Bewertung werden wir Ihr Wissen über einige der in den Artikeln dieses Moduls besprochenen Techniken testen, indem wir Sie dazu bringen, einige Bilder und Videos zu einer originellen Splash-Seite über Mozilla hinzuzufügen!

## Siehe auch

- [Fügen Sie eine Trefferkarte über ein Bild hinzu](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : Bildkarten bieten eine Möglichkeit, verschiedene Teile eines Bildes mit verschiedenen Orten zu verknüpfen. (Denken Sie an eine Karte, die Sie durch Klicken auf ein Land zu weiteren Informationen über dieses Land führt.) Diese Technik kann manchmal nützlich sein.
- [Grundlagen der Web-Kompetenz II](https://mozilla.github.io/curriculum-final/web-lit-basics-two/session01-why-do-we-use-the-web.html#overview)
  - : Ein exzellenter Mozilla-Grundkurs, der einige der in diesem Modul _Multimedia und Einbettung_ besprochenen Fähigkeiten erkundet und testet. Tauchen Sie tiefer ein in die Grundlagen des Erstellens von Webseiten, Design für Barrierefreiheit, Teilen von Ressourcen, Nutzung von Online-Medien und die Arbeit im offenen Modus (bedeutet, dass Ihre Inhalte frei zugänglich und von anderen teilbar sind).
