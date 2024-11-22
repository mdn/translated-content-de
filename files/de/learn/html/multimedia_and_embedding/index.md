---
title: Multimedia und Einbettung
slug: Learn/HTML/Multimedia_and_embedding
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}

Wir haben in diesem Kurs bisher viel über Text gesprochen, aber das Web wäre wirklich langweilig, wenn es nur aus Text bestünde. Lassen Sie uns damit beginnen, das Web mit interessanterem Inhalt zum Leben zu erwecken! Dieses Modul untersucht, wie HTML verwendet werden kann, um Multimedia in Ihre Webseiten einzubinden, einschließlich der verschiedenen Möglichkeiten, Bilder einzubinden und Videos, Audio und sogar ganze Webseiten zu embedden.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie ein vernünftiges Verständnis der Grundlagen von HTML haben, wie es zuvor in der [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) behandelt wurde. Wenn Sie dieses Modul (oder etwas Ähnliches) noch nicht durchgearbeitet haben, arbeiten Sie es zuerst durch und kehren Sie dann zurück!

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) der Code-Beispiele in einem Online-Codierungsprogramm wie [JS Bin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

Dieses Modul enthält die folgenden Artikel, die Ihnen alle Grundlagen zur Einbettung von Multimedia auf Webseiten näherbringen.

- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : Es gibt andere Arten von Multimedia zu berücksichtigen, aber es ist logisch, mit dem bescheidenen {{htmlelement("img")}}-Element zu beginnen, das verwendet wird, um ein Bild in eine Webseite einzubinden. In diesem Artikel werden wir uns genauer ansehen, wie Sie es verwenden können, einschließlich der Grundlagen, der Beschriftung mit {{htmlelement("figure")}}, und wie es sich auf CSS-Hintergrundbilder bezieht.
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Als nächstes schauen wir uns an, wie die HTML-Elemente {{htmlelement("video")}} und {{htmlelement("audio")}} verwendet werden, um Video und Audio auf unseren Seiten einzubetten, einschließlich der Grundlagen, Bereitstellung unterschiedlicher Dateiformate für verschiedene Browser, Hinzufügen von Untertiteln und wie man Fallbacks für ältere Browser hinzufügt.
- [Von `<object>` zu `<iframe>` — andere Einbettungstechnologien](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : An dieser Stelle möchten wir einen kleinen Seitenblick wagen und uns einige Elemente ansehen, die es ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}-Elemente. `<iframe>`s dienen zum Einbetten anderer Webseiten, während die anderen beiden das Einbetten externer Ressourcen wie PDF-Dateien ermöglichen.
- [Vektorgrafiken zum Web hinzufügen](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : Vektorgrafiken können in bestimmten Situationen sehr nützlich sein. Anders als reguläre Formate wie PNG/JPG verzerren/pixeln sie nicht beim Vergrößern – sie bleiben glatt, wenn sie skaliert werden. Dieser Artikel führt Sie in das Thema Vektorgrafiken ein und wie das beliebte {{Glossary("SVG", "SVG")}}-Format in Webseiten eingebettet werden kann.
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In diesem Artikel werden wir das Konzept der responsiven Bilder erlernen – Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren – und uns ansehen, welche Werkzeuge HTML bietet, um diese zu implementieren. Dies trägt zur Verbesserung der Leistung auf verschiedenen Geräten bei. Responsive Bilder sind nur ein Teil des [responsiven Designs](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), ein zukünftiges CSS-Thema, das Sie lernen werden.

## Bewertungen

Die folgende Bewertung wird Ihr Verständnis des in den Leitfäden behandelten Materials testen.

- [Mozilla-Startseite](/de/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : In dieser Bewertung testen wir Ihr Wissen über einige der in den Artikeln dieses Moduls besprochenen Techniken, indem Sie dazu gebracht werden, einige Bilder und Videos zu einer coolen Startseite über Mozilla hinzuzufügen!

## Siehe auch

- [Eine Hitmap auf ein Bild legen](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : Bildkarten bieten einen Mechanismus, um verschiedene Teile eines Bildes mit verschiedenen Orten zu verknüpfen. (Denken Sie an eine Karte, die Sie zu weiteren Informationen über jedes Land verlinkt, auf das Sie klicken.) Diese Technik kann manchmal nützlich sein.
- [Web Literacy Basics II](https://mozilla.github.io/curriculum-final/web-lit-basics-two/session01-why-do-we-use-the-web.html#overview)
  - : Ein ausgezeichneter Kurs der Mozilla Foundation, der einige der im Modul _Multimedia und Einbettung_ besprochenen Fähigkeiten erkundet und testet. Tauchen Sie tiefer in die Grundlagen der Webseiten-Komposition, des Designs für Zugänglichkeit, des Teilens von Ressourcen, der Nutzung von Online-Medien und der offenen Arbeit ein (was bedeutet, dass Ihre Inhalte frei verfügbar und von anderen teilbar sind).
