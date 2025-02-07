---
title: Strukturierung von Inhalten mit HTML
slug: Learn_web_development/Core/Structuring_content
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML ist die Technologie, die den Inhalt und die Struktur jeder Website definiert. Richtig geschrieben, sollte es auch die Semantik (Bedeutung) der Inhalte auf maschinenlesbare Weise definieren, was entscheidend für Barrierefreiheit, Suchmaschinenoptimierung und die Nutzung der von Browsern bereitgestellten integrierten Funktionen ist, damit Inhalte optimal funktionieren. Dieses Modul behandelt die Grundlagen der Sprache, bevor es sich wichtigen Bereichen wie Dokumentenstruktur, Links, Listen, Bilder, Formulare und mehr widmet.

## Voraussetzungen

Vor Beginn dieses Moduls benötigen Sie keine Vorkenntnisse in HTML, aber Sie sollten zumindest grundlegende Kenntnisse im Umgang mit Computern und die passive Nutzung des Internets haben (z. B. das Betrachten und Konsumieren von Inhalten). Sie sollten eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Beide Themen sind Teil unseres Moduls [Erste Schritte mit dem Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) für absolute Anfänger.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, mit dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Behandelt die absoluten Grundlagen von {{Glossary("HTML", "HTML")}}, um Ihnen den Einstieg zu erleichtern — wir definieren Elemente, Attribute und andere wichtige Begriffe und zeigen, wo diese in der Sprache passen. Außerdem zeigen wir die Struktur einer typischen HTML-Seite und eines HTML-Elements und erklären weitere wichtige grundlegende Sprachmerkmale. Unterwegs werden wir ein wenig mit HTML experimentieren, um Ihr Interesse zu wecken!
- [Was steht im `<head>`? Metadaten der Webseite](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : Der {{Glossary("Head", "head")}} eines HTML-Dokuments ist der Teil, der **nicht** im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Metadaten wie den {{htmlelement("title")}} der Seite, Links zu {{Glossary("CSS", "CSS")}} (wenn Sie HTML-Inhalte mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und Metadaten (Informationen über das HTML wie den Autoren oder wichtige Schlüsselwörter, die das Dokument beschreiben).
- [Überschriften und Absätze](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : Eine der Hauptaufgaben von HTML ist es, Text so zu strukturieren, dass ein Browser ein HTML-Dokument wie vom Entwickler intendiert anzeigen kann. Dieser Artikel erklärt, wie HTML verwendet werden kann, um eine grundlegende Seitenstruktur zu bieten, indem Überschriften und Absätze definiert werden.
- [Hervorhebung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : Der vorherige Artikel untersuchte, warum Semantik in HTML wichtig ist und konzentrierte sich auf Überschriften und Absätze. Dieser Artikel führt das Thema Semantik weiter und betrachtet HTML-Elemente, die Text Hervorhebung und Wichtigkeit verleihen (vergleichbar mit Kursiv- und Fettschrift in der Printmedienwelt).
- [Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : Listen begegnen uns überall im Leben — von Ihrer Einkaufsliste über die Wegbeschreibung, der Sie beinahe unbewusst folgen, bis hin zu den Anleitungen, die Sie in diesen Tutorials verfolgen! Es wird nicht überraschen, dass HTML eine nützliche Menge an Elementen zur Verfügung stellt, um verschiedene Arten von Listen zu definieren. Im Web gibt es drei Listentypen: ungeordnete, geordnete und Definitionslisten. Diese Lektion zeigt Ihnen, wie man die verschiedenen Typen verwendet.
- [Strukturierung von Dokumenten](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet HTML auch eine Reihe von Block-Elementen zur Definition von Bereichen Ihrer Webseite (wie "die Kopfzeile", "das Navigationsmenü", "die Hauptinhaltespalte"). Dieser Artikel untersucht, wie man eine grundlegende Webseitenstruktur plant und das HTML schreibt, um diese Struktur darzustellen.
- [Erweiterte Textfunktionen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : Es gibt viele andere HTML-Elemente zur Definition von Textsemantiken, die im Artikel [Hervorhebung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt wurden. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, jedoch nützlich. Sie lernen das Markieren von Zitaten, Definitionslisten, Computercode und anderen verwandten Texten, Tief- und Hochstellungen, Kontaktinformationen und mehr.
- [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : Links (auch bekannt als Hyperlinks) sind von großer Bedeutung — sie machen das Web zu einem "Netz". Dieser Artikel zeigt die Syntax, die erforderlich ist, um einen Link zu erstellen, und diskutiert bewährte Praktiken für Links.
- [Eine Seite Inhalt strukturieren](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>Herausforderung</sup>
  - : Die Strukturierung einer Inhaltsseite, um sie mit CSS zu gestalten, ist eine sehr wichtige Fähigkeit. Bei dieser Herausforderung wird getestet, wie gut Sie darüber nachdenken können, wie eine Seite letztendlich aussehen soll, und geeignete strukturelle Semantik auswählen, um darauf ein Layout aufzubauen.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernweges, aber dennoch interessant — Sie können diese als zusätzliche Lernziele betrachten, die Sie optional studieren können, nachdem Sie die Hauptartikel des Kerns abgeschlossen haben.

- [Vektorgrafiken in HTML einfügen](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : Vektorgrafiken sind in vielen Fällen sehr nützlich — sie haben geringe Dateigrößen und sind hoch skalierbar, sodass sie beim Vergrößern oder Hochskalieren nicht verpixeln. In diesem Artikel zeigen wir Ihnen, wie Sie eine in Ihre Webseite einfügen können.
- [Von object zu iframe — allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : Entwickler denken oft daran, Medien wie Bilder, Videos und Audiodateien in Webseiten einzubetten. In diesem Artikel beleuchten wir einige andere Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhalten in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s dienen dazu, andere Webseiten einzubetten, während die anderen beiden das Einbetten externer Ressourcen wie PDF-Dateien ermöglichen.

## Siehe auch

- [HTML lernen](https://www.codecademy.com/learn/learn-html), Codecademy
  - : Eine nützliche (und kostenlose) Ressource, um die Grundlagen von HTML zu lernen.
- [HTML und CSS lernen](https://v2.scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup>
  - : [Scrimba](https://scrimba.com?via=mdn)‘s _Learn HTML and CSS_ Kurs lehrt Ihnen HTML und CSS durch den Aufbau und die Bereitstellung von fünf großartigen Projekten mit interaktiven und unterhaltsamen Lektionen, die von erfahrenen Lehrern unterrichtet werden.
- [Die Grundlagen von semantischem HTML](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup>
  - : Diese interaktive Lektion bietet eine nützliche Beschreibung von HTML, wobei ein besonderer Schwerpunkt auf der Bedeutung des _semantischen_ Aspekts liegt.

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
