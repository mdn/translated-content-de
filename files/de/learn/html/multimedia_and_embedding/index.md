---
title: Multimedia und Einbettung
slug: Learn/HTML/Multimedia_and_embedding
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}

Wir haben in diesem Kurs bisher viel Text betrachtet, aber das Web wäre wirklich langweilig, wenn es nur Text verwenden würde. Lassen Sie uns damit beginnen, zu erkunden, wie Sie das Web mit interessanterem Inhalt zum Leben erwecken können! Dieses Modul untersucht, wie man HTML verwendet, um Multimedia in Ihre Webseiten einzubinden, einschließlich der verschiedenen Möglichkeiten, Bilder einzufügen, und wie man Video, Audio und sogar ganze Webseiten einbettet.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie ein vernünftiges Verständnis der Grundlagen von HTML haben, wie sie zuvor in der [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) behandelt wurden. Wenn Sie dieses Modul (oder etwas Ähnliches) noch nicht durchgearbeitet haben, arbeiten Sie es zuerst durch und kehren Sie dann zurück!

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie nicht die Möglichkeit haben, Ihre eigenen Dateien zu erstellen, können Sie die meisten der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

Dieses Modul enthält die folgenden Artikel, die Ihnen alle Grundlagen der Einbettung von Multimedia auf Webseiten näher bringen.

- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : Es gibt andere Arten von Multimedia zu berücksichtigen, aber es ist logisch, mit dem bescheidenen {{htmlelement("img")}}-Element zu beginnen, das verwendet wird, um ein einfaches Bild in eine Webseite einzubetten. In diesem Artikel werden wir uns eingehender mit seiner Verwendung befassen, einschließlich der Grundlagen, der Annotation mit Bildunterschriften mithilfe von {{htmlelement("figure")}} und der Beziehung zu CSS-Hintergrundbildern.
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Als nächstes schauen wir uns an, wie die HTML-Elemente {{htmlelement("video")}} und {{htmlelement("audio")}} verwendet werden, um Video- und Audioinhalte auf unseren Seiten einzubetten, einschließlich der Grundlagen, der Bereitstellung verschiedener Dateiformate für verschiedene Browser, dem Hinzufügen von Untertiteln und der Implementierung von Fallback-Lösungen für ältere Browser.
- [Von \<object> zu \<iframe> — andere Einbettungstechnologien](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : An diesem Punkt möchten wir einen etwas seitlichen Schritt machen und uns einige Elemente ansehen, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die Elemente {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}. `<iframe>`s dienen zum Einbetten anderer Webseiten, während die anderen beiden es Ihnen erlauben, externe Ressourcen wie PDF-Dateien einzubetten.
- [Vektorgrafiken zum Web hinzufügen](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : Vektorgrafiken können in bestimmten Situationen sehr nützlich sein. Im Gegensatz zu regulären Formaten wie PNG/JPG verzerren oder pixellieren sie nicht beim Vergrößern — sie bleiben glatt, wenn sie skaliert werden. Dieser Artikel führt Sie in die Grundlagen von Vektorgrafiken ein und zeigt, wie man das beliebte [SVG](/de/docs/Glossary/SVG)-Format in Webseiten integriert.
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept von responsiven Bildern kennen — Bilder, die auf Geräten mit unterschiedlichsten Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren — und schauen uns an, welche Werkzeuge HTML bietet, um sie zu implementieren. Dies trägt zur Verbesserung der Performance auf verschiedenen Geräten bei. Responsive Bilder sind nur ein Teil des [Responsive Designs](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), einem zukünftigen CSS-Thema, das Sie lernen werden.

## Bewertungen

Die folgende Bewertung testet Ihr Verständnis des in den oben genannten Leitfäden behandelten Materials.

- [Mozilla Splash-Seite](/de/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : In dieser Bewertung testen wir Ihr Wissen über einige der Techniken, die in den Artikeln dieses Moduls besprochen werden, indem wir Sie dazu bringen, einige Bilder und Videos zu einer funkigen Splash-Seite über Mozilla hinzuzufügen!

## Siehe auch

- [Eine Heatmap über ein Bild legen](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : Bild-Maps bieten einen Mechanismus, um verschiedene Teile eines Bildes mit verschiedenen Orten zu verlinken. (Denken Sie an eine Karte, die zu weiteren Informationen über jedes angeklickte Land führt.) Diese Technik kann manchmal nützlich sein.
- [Grundlagen der Webkompetenz II](https://mozilla.github.io/curriculum-final/web-lit-basics-two/session01-why-do-we-use-the-web.html#overview)
  - : Ein hervorragender Kurs der Mozilla Foundation, der einige der in diesem _Multimedia und Einbettung_-Modul behandelten Fähigkeiten erforscht und testet. Tauchen Sie tiefer in die Grundlagen der Webseitengestaltung ein, lernen Sie, barrierefreie Designs zu entwerfen, Ressourcen zu teilen, Online-Medien zu nutzen und offen zu arbeiten (was bedeutet, dass Ihre Inhalte frei verfügbar und mit anderen teilbar sind).
