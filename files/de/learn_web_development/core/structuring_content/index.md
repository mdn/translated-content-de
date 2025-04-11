---
title: Strukturierung von Inhalten mit HTML
short-title: HTML
slug: Learn_web_development/Core/Structuring_content
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML ist die Technologie, die den Inhalt und die Struktur jeder Webseite definiert. Wenn es richtig geschrieben ist, sollte es auch die Semantik (Bedeutung) des Inhalts auf eine maschinenlesbare Weise definieren, was entscheidend für Barrierefreiheit, Suchmaschinenoptimierung und die Nutzung der integrierten Funktionen von Browsern ist, damit Inhalte optimal funktionieren. Dieses Modul behandelt die Grundlagen der Sprache, bevor es sich Schlüsselbereichen wie Dokumentstruktur, Links, Listen, Bildern, Formularen und mehr zuwendet.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, benötigen Sie keine vorherigen HTML-Kenntnisse, aber Sie sollten zumindest grundlegende Vertrautheit mit der Nutzung von Computern und der passiven Nutzung des Internets (d.h. nur Ansehen und Konsumieren von Inhalten) haben. Sie sollten eine grundlegende Arbeitsumgebung eingerichtet haben (wie im Abschnitt [Grundlegende Software installieren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie im Abschnitt [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Beides sind Teile unseres [Einstieg in das Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) kompletten Anfänger-Moduls.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, können Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Anleitungen und Herausforderungen

- [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Behandelt die absoluten Grundlagen von {{Glossary("HTML", "HTML")}}, um Ihnen den Einstieg zu erleichtern — wir definieren Elemente, Attribute und andere wichtige Begriffe und zeigen, wo sie in der Sprache vorkommen. Wir zeigen auch, wie eine typische HTML-Seite strukturiert ist und wie ein HTML-Element aufgebaut ist, und erklären andere wichtige grundlegende Sprachmerkmale. Unterwegs werden wir mit etwas HTML spielen, um Ihr Interesse zu wecken!
- [Was ist im Kopf? Metadaten von Webseiten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : Der {{Glossary("Head", "Kopf")}} eines HTML-Dokuments ist der Teil, der **nicht** im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Metadateninformationen wie den Seitentitel {{htmlelement("title")}}, Links zu {{Glossary("CSS", "CSS")}} (wenn Sie Ihren HTML-Inhalt mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und Metadaten (Daten über das HTML, z.B. wer es geschrieben hat und wichtige Schlüsselwörter, die das Dokument beschreiben).
- [Überschriften und Absätze](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : Eine der Hauptaufgaben von HTML ist es, Text so zu strukturieren, dass ein Browser ein HTML-Dokument so anzeigen kann, wie es von seinem Entwickler beabsichtigt ist. In diesem Artikel wird erklärt, wie HTML verwendet werden kann, um eine grundlegende Seitenstruktur zu bieten, indem Überschriften und Absätze definiert werden.
- [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : Der vorherige Artikel behandelte, warum Semantik in HTML wichtig ist und konzentrierte sich auf Überschriften und Absätze. Dieser Artikel setzt das Thema Semantik fort und betrachtet HTML-Elemente, die Text Betonung und Wichtigkeit geben (parallelen zu Kursiv- und Fettdruck in Printmedien).
- [Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : Listen sind überall im Leben — von Ihrer Einkaufsliste bis zu der Liste von Anweisungen, die Sie unbewusst befolgen, um zu Ihrem Haus zu gelangen, bis zu den Anweisungen, die Sie in diesen Anleitungen befolgen! Es überrascht nicht, dass HTML ein bequemes Set von Elementen hat, das uns ermöglicht, verschiedene Arten von Listen zu definieren. Im Web haben wir drei Arten von Listen: ungeordnete, geordnete und Definitionslisten. Diese Lektion zeigt Ihnen, wie Sie die verschiedenen Typen verwenden können.
- [Strukturierung von Dokumenten](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie „ein Absatz“ oder „ein Bild“) bietet HTML auch eine Reihe von Block-Ebenen-Elementen, die verwendet werden, um Bereiche Ihrer Webseite zu definieren (wie „der Kopf“, „das Navigationsmenü“, „die Hauptinhaltsspalte“). Dieser Artikel untersucht, wie man eine grundlegende Website-Struktur plant und das HTML schreibt, um diese Struktur darzustellen.
- [Erweiterte Textmerkmale](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : Es gibt viele andere Elemente in HTML zur Definition der Textsemantik, die wir im Artikel [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht abgedeckt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber immer noch nützlich zu wissen (und dies ist noch lange keine vollständige Liste). Hier lernen Sie, wie Sie Zitate, Computercode und andere verwandte Texte, Tief- und Hochstellungen, Kontaktdaten und mehr markieren.
- [Erstellen von Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : Links (auch als Hyperlinks bekannt) sind wirklich wichtig – sie sind das, was das Web zu einem Netz macht. Dieser Artikel zeigt die Syntax zum Erstellen eines Links und diskutiert bewährte Praktiken für Links.
- [Markieren eines Briefes](/de/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) <sup>Herausforderung</sup>
  - : Wir lernen alle irgendwann, einen Brief zu schreiben; es ist auch ein nützliches Beispiel, um unsere Fähigkeiten zur Textformatierung zu testen. In dieser Herausforderung haben Sie einen Brief, den Sie als Test für Ihre HTML-Textformatierungsfähigkeiten und die richtige Nutzung des HTML-Elements `<head>` markieren müssen.
- [Strukturierung einer Seite mit Inhalten](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>Herausforderung</sup>
  - : Eine Seite mit Inhalten so zu strukturieren, dass sie mit CSS gestaltet werden kann, ist eine sehr wichtige Fähigkeit, die Sie meistern sollten. In dieser Herausforderung werden Sie auf Ihre Fähigkeit getestet, sich Gedanken darüber zu machen, wie eine Seite aussehen könnte, und die geeigneten strukturellen Semantiken auszuwählen, um darauf ein Layout aufzubauen.
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
  - : Am Anfang war das Web nur Text, und es war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit, Bilder (und andere interessantere Inhaltsarten) in Webseiten einzubetten, hinzugefügt wurde. In diesem Artikel werden wir uns genauer ansehen, wie man das {{htmlelement("img")}}-Element verwendet, einschließlich der Grundlagen, der Annotation mit Bildunterschriften mit {{htmlelement("figure")}} und der detaillierten Beschreibung, wie es sich auf {{Glossary("CSS", "CSS")}} Hintergrundbilder bezieht.
- [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Jetzt, da wir uns mit dem Hinzufügen einfacher Bilder in eine Webseite wohlfühlen, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns genau damit befassen, indem wir die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente verwenden; wir schließen dann mit einem Blick darauf ab, wie Sie Ihren Videos Untertitel hinzufügen können.
- [Mozilla-Splash-Seite](/de/docs/Learn_web_development/Core/Structuring_content/Mozilla_splash_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung testen wir Ihr Wissen über einige der in den letzten Lektionen besprochenen Techniken und fordern Sie auf, Bilder und Videos zu einer aufregenden Splash-Seite über Mozilla hinzuzufügen!
- [Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : Dieser Artikel gibt Ihnen einen Einstieg in HTML-Tabellen und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen und wie man alle Zellen in einer Spalte für Styling-Zwecke gruppiert.
- [Barrierefreiheit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : In diesem Artikel betrachten wir weitere Funktionen zur Barrierefreiheit von HTML-Tabellen, wie Bildunterschriften/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Kopf-, Körper- und Fußbereiche der Tabelle und das Festlegen des Geltungsbereichs von Spalten und Zeilen.
- [Strukturierung einer Planeten-Datentabelle](/de/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) <sup>Herausforderung</sup>
  - : In dieser Herausforderung stellen wir Ihnen einige Daten über die Planeten in unserem Sonnensystem zur Verfügung. Ihre Aufgabe ist es, diese in eine zugängliche HTML-Tabelle zu strukturieren.
- [Formulare und Schaltflächen in HTML](/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
  - : HTML-Formulare und -Schaltflächen sind mächtige Werkzeuge zur Interaktion mit Nutzern – sie werden am häufigsten zum Sammeln von Daten von Nutzern oder zur Steuerung einer Benutzeroberfläche verwendet. In diesem Artikel geben wir eine Einführung in die Grundlagen von Formularen und Schaltflächen.
- [Debugging von HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
  - : HTML zu schreiben ist in Ordnung, aber was, wenn etwas schiefgeht und Sie den Fehler im Code nicht finden können? Dieser Artikel führt Sie in einige Werkzeuge ein, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.
- [Testen Sie Ihr Können: HTML](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills)
  - : Diese Seite listet HTML-Tests auf, die Sie ausprobieren können, um zu überprüfen, ob Sie den Inhalt dieses Moduls verstanden haben.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfades, aber dennoch interessant — Sie sollten diese als zusätzliche Ziele betrachten, die Sie optional studieren können, wenn Sie mit den Hauptartikeln des Kerns fertig sind.

- [Einbinden von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : Vektorgrafiken sind in vielen Fällen sehr nützlich – sie haben kleine Dateigrößen und sind stark skalierbar, sodass sie nicht pixelig werden, wenn sie vergrößert oder auf eine große Größe aufgeblasen werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine in Ihre Webseite einbinden können.
- [Von Objekt zu iframe – Allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : Entwickler denken oft daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel nehmen wir einen etwas anderen Ansatz und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}-Elemente. `<iframe>`s dienen zum Einbetten anderer Webseiten, und die anderen beiden ermöglichen es Ihnen, externe Ressourcen wie PDF-Dateien einzubetten.

## Siehe auch

- [Lernen Sie HTML](https://www.codecademy.com/learn/learn-html), Codecademy
  - : Eine nützliche (und kostenlose) Ressource zum Erlernen der HTML-Grundlagen.
- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>_MDN-Lernpartner_</sup>
  - : Der Kurs _Learn HTML and CSS_ von [Scrimba](https://scrimba.com/?via=mdn) lehrt Ihnen HTML und CSS durch den Bau und das Deployment von fünf tollen Projekten, mit spannenden interaktiven Lektionen und Herausforderungen, die von kompetenten Lehrern unterrichtet werden.
- [Die Grundlagen von semantischem HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>_MDN-Lernpartner_</sup>
  - : Diese interaktive Lektion bietet eine nützliche Beschreibung von HTML, mit besonderem Schwerpunkt darauf, warum der _semantische_ Aspekt davon wichtig ist.

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
