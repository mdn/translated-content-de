---
title: Multimedia und Einbettung
slug: Learn/HTML/Multimedia_and_embedding
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}

Wir haben bisher viel Text in diesem Kurs behandelt, aber das Web wäre wirklich langweilig, wenn es nur Text verwenden würde. Lassen Sie uns damit beginnen, das Web mit interessanterem Inhalt zum Leben zu erwecken! Dieses Modul untersucht, wie Sie HTML nutzen können, um Multimedia in Ihre Webseiten einzubinden, einschließlich der verschiedenen Möglichkeiten, wie Bilder eingebunden werden können, und wie man Video, Audio und sogar ganze Webseiten einbettet.

## Voraussetzungen

Bevor Sie dieses Modul beginnen, sollten Sie ein vernünftiges Verständnis der Grundlagen von HTML haben, wie es zuvor in der [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) behandelt wurde. Wenn Sie dieses Modul (oder etwas Ähnliches) noch nicht durchgearbeitet haben, sollten Sie es zuerst durcharbeiten und dann zurückkommen!

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, können Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

Dieses Modul enthält die folgenden Artikel, die Sie durch alle Grundlagen der Einbettung von Multimedia auf Webseiten führen.

- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : Es gibt andere Arten von Multimedia zu berücksichtigen, aber es ist logisch, mit dem bescheidenen {{htmlelement("img")}}-Element zu beginnen, das verwendet wird, um ein einfaches Bild in eine Webseite einzubinden. In diesem Artikel werden wir untersuchen, wie man es ausführlicher verwendet, einschließlich der Grundlagen, der Annotation mit Bildunterschriften durch {{htmlelement("figure")}} und wie es sich auf CSS-Hintergrundbilder bezieht.
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Als Nächstes werden wir uns ansehen, wie man die HTML-Elemente {{htmlelement("video")}} und {{htmlelement("audio")}} verwendet, um Video und Audio auf unseren Seiten einzubetten, einschließlich der Grundlagen, der Bereitstellung von Zugriff auf verschiedene Dateiformate für verschiedene Browser, dem Hinzufügen von Untertiteln und Bildunterschriften und wie man Rückfallebenen für ältere Browser hinzufügt.
- [Von \<object> zu \<iframe> — andere Einbettungstechnologien](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : An diesem Punkt möchten wir einen Seitenschritt machen und uns ein paar Elemente ansehen, die es Ihnen erlauben, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die Elemente {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}. `<iframe>`s sind für die Einbettung anderer Webseiten gedacht, und die beiden anderen erlauben es Ihnen, externe Ressourcen wie PDF-Dateien einzubetten.
- [Hinzufügen von Vektorgrafiken zum Web](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : Vektorgrafiken können in bestimmten Situationen sehr nützlich sein. Anders als reguläre Formate wie PNG/JPG verzerren oder pixeln sie nicht, wenn sie vergrößert werden — sie bleiben beim Skalieren glatt. Dieser Artikel führt Sie in die Welt der Vektorgrafiken ein und wie Sie das beliebte [SVG](/de/docs/Glossary/SVG)-Format in Webseiten einbinden.
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In diesem Artikel werden wir über das Konzept von responsiven Bildern sprechen — Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen und Auflösungen gut funktionieren — und uns ansehen, welche Tools HTML bereitstellt, um sie zu implementieren. Dies trägt zur Verbesserung der Leistung auf verschiedenen Geräten bei. Responsive Bilder sind nur ein Teil des [responsive Designs](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), ein zukünftiges CSS-Thema, das Sie lernen werden.

## Bewertungen

Die folgende Bewertung wird Ihr Verständnis des in den obigen Leitfäden behandelten Materials testen.

- [Mozilla-Splash-Seite](/de/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : In dieser Bewertung testen wir Ihr Wissen über einige der in den Artikeln dieses Moduls besprochenen Techniken, indem Sie einige Bilder und Videos zu einer coolen Splash-Seite über Mozilla hinzufügen!

## Siehe auch

- [Ein Hitmap über ein Bild hinzufügen](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : Bild-Maps bieten eine Mechanik, um verschiedene Teile eines Bildes mit verschiedenen Orten zu verlinken. (Denken Sie an eine Karte, die auf weitere Informationen über jedes Land, auf das Sie klicken, verlinkt.) Diese Technik kann manchmal nützlich sein.
- [Web-Literacy-Grundlagen II](https://mozilla.github.io/curriculum-final/web-lit-basics-two/session01-why-do-we-use-the-web.html#overview)
  - : Ein exzellenter Kurs der Mozilla Foundation, der einige der Fähigkeiten untersucht und testet, die in diesem Modul _Multimedia und Einbettung_ besprochen werden. Tauchen Sie tiefer in die Grundlagen des Erstellens von Webseiten, des Designs für Barrierefreiheit, des Teilens von Ressourcen, der Verwendung von Online-Medien und des offenen Arbeitens (was bedeutet, dass Ihre Inhalte frei verfügbar und von anderen teilbar sind) ein.
