---
title: Multimedia und Einbettung
slug: Learn/HTML/Multimedia_and_embedding
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}

Wir haben in diesem Kurs bisher viel Text betrachtet, aber das Web wäre wirklich langweilig, wenn es nur Text nutzen würde. Lassen Sie uns beginnen, wie Sie das Web mit interessanterem Inhalt zum Leben erwecken können! Dieses Modul untersucht, wie Sie HTML verwenden, um Multimedia in Ihre Webseiten einzubinden, einschließlich der verschiedenen Möglichkeiten, wie Bilder eingebunden werden können, und wie Sie Video, Audio und sogar ganze Webseiten einbetten können.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie ein vernünftiges Verständnis der Grundlagen von HTML haben, wie sie zuvor in der [Einführung zu HTML](/de/docs/Learn/HTML/Introduction_to_HTML) behandelt wurden. Wenn Sie dieses Modul (oder etwas Ähnliches) noch nicht bearbeitet haben, arbeiten Sie es zuerst durch und kommen Sie dann zurück!

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie nicht die Möglichkeit haben, eigene Dateien zu erstellen, können Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

Dieses Modul enthält die folgenden Artikel, die Ihnen alle Grundlagen der Einbettung von Multimedia auf Webseiten vermitteln.

- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : Es gibt andere Arten von Multimedia zu berücksichtigen, aber es ist logisch, mit dem einfachen {{htmlelement("img")}}-Element zu beginnen, das verwendet wird, um ein Bild in eine Webseite einzubetten. In diesem Artikel werden wir uns damit befassen, wie man es tiefergehend nutzt, einschließlich der Grundlagen, das Annotieren mit Beschriftungen mithilfe von {{htmlelement("figure")}} und wie es sich zu CSS-Hintergrundbildern verhält.
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Als Nächstes schauen wir uns an, wie Sie die HTML-Elemente {{htmlelement("video")}} und {{htmlelement("audio")}} verwenden, um Video- und Audiomaterial auf unseren Seiten einzubetten, einschließlich der Grundlagen, der Bereitstellung verschiedener Dateiformate für verschiedene Browser, dem Hinzufügen von Untertiteln und wie man Fallbacks für ältere Browser hinzufügt.
- [Von `<object>` zu `<iframe>` — andere Einbettungstechnologien](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : An diesem Punkt möchten wir einen kleinen Seitenschritt machen und uns einige Elemente ansehen, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}-Elemente. `<iframe>`s dienen zum Einbetten anderer Webseiten, und die anderen beiden ermöglichen es Ihnen, externe Ressourcen wie PDF-Dateien einzubetten.
- [Vektorgrafiken zum Web hinzufügen](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : Vektorgrafiken können in bestimmten Situationen sehr nützlich sein. Im Gegensatz zu regulären Formaten wie PNG/JPG verzerren oder pixeln sie nicht, wenn man hineinzoomt — sie bleiben beim Skalieren glatt. Dieser Artikel führt Sie in die Welt der Vektorgrafiken ein und wie Sie das beliebte {{Glossary("SVG", "SVG")}}-Format in Webseiten einbinden können.
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen — Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren — und schauen uns an, welche Werkzeuge HTML bietet, um sie umzusetzen. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern. Responsive Bilder sind nur ein Teil des [responsive Designs](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), ein zukünftiges CSS-Thema, das Sie lernen können.

## Bewertungen

Der folgende Test wird Ihr Verständnis des in den Leitfäden behandelten Materials überprüfen.

- [Mozilla-Splash-Seite](/de/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : In dieser Bewertung testen wir Ihr Wissen über einige der in den Artikeln dieses Moduls diskutierten Techniken, indem wir Sie dazu bringen, einige Bilder und Videos auf einer funky Splash-Seite über Mozilla hinzuzufügen!

## Siehe auch

- [Eine Bildkarte über einem Bild hinzufügen](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : Bildkarten bieten eine Möglichkeit, unterschiedliche Teile eines Bildes mit unterschiedlichen Orten zu verlinken. (Denken Sie an eine Karte, die zu weiteren Informationen über jedes verschiedene Land verlinkt, auf das Sie klicken.) Diese Technik kann manchmal nützlich sein.
- [Grundlagen der Web-Kompetenz II](https://mozilla.github.io/curriculum-final/web-lit-basics-two/session01-why-do-we-use-the-web.html#overview)
  - : Ein hervorragender Kurs der Mozilla Foundation, der einige der im _Multimedia und Einbettung_ Modul besprochenen Fähigkeiten untersucht und testet. Tauchen Sie tiefer in die Grundlagen des Komponierens von Webseiten ein, gestalten Sie für die Barrierefreiheit, teilen Sie Ressourcen, nutzen Sie Online-Medien und arbeiten Sie offen (was bedeutet, dass Ihre Inhalte frei verfügbar und von anderen teilbar sind).
