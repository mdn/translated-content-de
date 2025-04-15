---
title: Strukturierung von Inhalten mit HTML
short-title: HTML
slug: Learn_web_development/Core/Structuring_content
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML ist die Technologie, die den Inhalt und die Struktur jeder Website definiert. Richtig geschrieben sollte sie auch die Semantik (Bedeutung) des Inhalts auf eine maschinenlesbare Weise definieren, was für Barrierefreiheit, Suchmaschinenoptimierung und die optimale Nutzung der von Browsern bereitgestellten Funktionen entscheidend ist. Dieses Modul behandelt die Grundlagen der Sprache, bevor wir uns mit Schlüsselbereichen wie Dokumentenstruktur, Links, Listen, Bildern, Formularen und mehr befassen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, benötigen Sie keine Vorkenntnisse in HTML. Sie sollten jedoch zumindest mit der grundlegenden Nutzung von Computern und dem passiven Nutzen des Webs (also das bloße Anschauen und Konsumieren von Inhalten) vertraut sein. Sie sollten eine grundlegende Arbeitsumgebung eingerichtet haben (wie in [Installation grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie in [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Beides sind Teile unseres vollständigen Einsteiger-Moduls [Erste Schritte im Web](/de/docs/Learn_web_development/Getting_started/Your_first_website).

> [!NOTE]
> Sollten Sie an einem Computer/Tablet/anderes Gerät arbeiten, an dem Sie keine eigenen Dateien erstellen können, können Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Behandelt die absoluten Grundlagen von {{Glossary("HTML", "HTML")}}, um Ihnen den Einstieg zu erleichtern — wir definieren Elemente, Attribute und andere wichtige Begriffe und zeigen, wo sie in die Sprache passen. Wir zeigen auch, wie eine typische HTML-Seite aufgebaut ist und wie ein HTML-Element strukturiert ist, und erklären andere wichtige grundlegende Sprachmerkmale. Unterwegs spielen wir mit etwas HTML, um Ihr Interesse zu wecken!
- [Was steckt im Head? Metadaten der Webseite](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : Der {{Glossary("Head", "Head")}} eines HTML-Dokuments ist der Teil, der **nicht** im Webbrowser angezeigt wird, wenn die Seite geladen ist. Er enthält Metadaten-Informationen wie den Seiten-{{htmlelement("title")}}, Links zu {{Glossary("CSS", "CSS")}} (wenn Sie Ihren HTML-Inhalt mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und Metadaten (Informationen über das HTML, wie z.B. wer es geschrieben hat und wichtige Schlüsselwörter, die das Dokument beschreiben).
- [Überschriften und Absätze](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : Eine der Hauptaufgaben von HTML ist es, dem Text Struktur zu geben, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie HTML verwendet werden kann, um eine grundlegende Seitenstruktur durch die Definition von Überschriften und Absätzen bereitzustellen.
- [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : Der vorherige Artikel behandelte, warum Semantik in HTML wichtig ist, und konzentrierte sich auf Überschriften und Absätze. Dieser Artikel setzt das Thema Semantik fort und untersucht HTML-Elemente, die Text Betonung und Wichtigkeit verleihen (entspricht kursivem und fettgedrucktem Text in Printmedien).
- [Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : Listen finden sich überall im Leben — von Ihrer Einkaufsliste über die Liste von Wegbeschreibungen, die Sie unbewusst befolgen, um täglich nach Hause zu kommen, bis hin zu den Anweisungen, denen Sie in diesen Tutorials folgen! Es überrascht vielleicht nicht, dass HTML eine praktische Reihe von Elementen hat, die es uns ermöglichen, verschiedene Arten von Listen zu definieren. Im Web gibt es drei Arten von Listen: ungeordnete, geordnete und Definitionslisten. Diese Lektion zeigt Ihnen, wie Sie die verschiedenen Typen verwenden.
- [Strukturierung von Dokumenten](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet HTML auch eine Anzahl von Blockelementen, die zur Definition von Bereichen Ihrer Website verwendet werden (wie "der Header", "das Navigationsmenü", "die Hauptinhaltsspalte"). Dieser Artikel untersucht, wie man eine grundlegende Website-Struktur plant und das HTML schreibt, um diese Struktur darzustellen.
- [Erweiterte Textfunktionen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : Es gibt viele andere Elemente in HTML zur Definition von Textsemantik, auf die wir im Artikel [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht eingegangen sind. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu wissen (und auch dies ist bei weitem keine vollständige Liste). Hier lernen Sie, wie man Zitate, Computercode und andere verwandte Texte, Tief- und Hochstellungen, Kontaktdaten und mehr auszeichnet.
- [Erstellen von Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : Links (auch bekannt als Hyperlinks) sind wirklich wichtig — sie sind es, die das Web _zu einem Netz machen_. Dieser Artikel zeigt die erforderliche Syntax, um einen Link zu erstellen, und diskutiert Best Practices für Links.
- [Markup eines Briefes](/de/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) <sup>Herausforderung</sup>
  - : Wir alle lernen früher oder später einen Brief zu schreiben; es ist auch ein nützliches Beispiel, um unsere Fähigkeiten im Textformatierungs-Bereich zu testen. In dieser Herausforderung haben Sie einen Brief, den Sie als Test für Ihre HTML-Textformatierungsfähigkeiten aufbereiten müssen, sowie Hyperlinks und den richtigen Einsatz des HTML-Elements `<head>`.
- [Strukturierung einer Inhaltsseite](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>Herausforderung</sup>
  - : Das Strukturieren einer Inhaltsseite, die bereit für die Gestaltung mit CSS ist, ist eine sehr wichtige Fähigkeit, die Sie meistern sollten. In dieser Herausforderung werden Sie auf Ihre Fähigkeit getestet, darüber nachzudenken, wie eine Seite am Ende aussehen könnte, und geeignete strukturelle Semantik auszuwählen, um darauf ein Layout aufzubauen.
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
  - : Am Anfang war das Web nur Text, und das war wirklich ziemlich langweilig. Glücklicherweise hat es nicht lange gedauert, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel schauen wir uns an, wie man das {{htmlelement("img")}}-Element ausführlich verwendet, einschließlich der Grundlagen, der Anmerkung mit Bildunterschriften mithilfe von {{htmlelement("figure")}} und der detaillierten Betrachtung, wie es sich zu {{Glossary("CSS", "CSS")}}-Hintergrundbildern verhält.
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Jetzt, da wir mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut sind, besteht der nächste Schritt darin, Videoplayer und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns genau damit beschäftigen, indem wir die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente verwenden; wir schließen dann mit einem Blick darauf ab, wie Sie Ihren Videos Untertitel hinzufügen.
- [Mozilla Splash Page](/de/docs/Learn_web_development/Core/Structuring_content/Mozilla_splash_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung testen wir Ihr Wissen über einige der in den letzten Lektionen besprochenen Techniken, indem wir Sie auffordern, einige Bilder und Videos zu einer coolen Splash-Seite über Mozilla hinzuzufügen!
- [HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : Dieser Artikel führt Sie in die Erstellung von HTML-Tabellen ein, wobei die grundlegenden Dinge wie Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen sowie das Gruppieren aller Zellen in einer Spalte zu Stilzwecken behandelt werden.
- [Zugänglichkeit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : In diesem Artikel betrachten wir weitere Zugänglichkeitsmerkmale von HTML-Tabellen wie Bildunterschriften und Zusammenfassungen, das Gliedern Ihrer Zeilen in Tabellenkopf-, -körper- und Fußbereiche sowie das Überspannen von Spalten und Zeilen.
- [Strukturierung einer Planetendatentabelle](/de/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) <sup>Herausforderung</sup>
  - : In dieser Herausforderung stellen wir Ihnen einige Daten über die Planeten in unserem Sonnensystem zur Verfügung. Ihre Aufgabe besteht darin, diese in einer zugänglichen HTML-Tabelle zu strukturieren.
- [Formulare und Schaltflächen in HTML](/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
  - : HTML-Formulare und Schaltflächen sind leistungsstarke Tools zur Interaktion mit Benutzern — am häufigsten werden sie zum Sammeln von Daten von Benutzern oder zur Steuerung einer Benutzeroberfläche verwendet. In diesem Artikel geben wir eine Einführung in die Grundlagen von Formularen und Schaltflächen.
- [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
  - : HTML zu schreiben ist gut und schön, aber was passiert, wenn etwas nicht funktioniert und Sie nicht herausfinden können, wo der Fehler im Code ist? Dieser Artikel wird Ihnen einige Tools vorstellen, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.
- [Testen Sie Ihre Fähigkeiten: HTML](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills)
  - : Diese Seite listet HTML-Tests auf, die Sie ausprobieren können, um zu überprüfen, ob Sie den Inhalt dieses Moduls verstanden haben.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber dennoch interessant — Sie sollten diese als zusätzliche Ziele betrachten, um sie optional zu studieren, wenn Sie mit den Hauptartikeln von Core fertig sind.

- [Einbinden von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : Vektorgrafiken sind in vielen Situationen sehr nützlich — sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie nicht verpixeln, wenn sie vergrößert oder auf eine große Größe aufgeblasen werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine in Ihre Webseite einbinden.
- [Von Object zu Iframe — allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : Entwickler denken häufig daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel machen wir einen kleinen Seitenschritt und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltsarten in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}-Elemente. `<iframe>`s dienen zum Einbetten anderer Webseiten, und die anderen beiden ermöglichen das Einbetten externer Ressourcen wie PDF-Dateien.

## Siehe auch

- [HTML und CSS lernen](https://v2.scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) Kurs _HTML und CSS lernen_ lehrt Ihnen HTML und CSS durch das Erstellen und Bereitstellen von fünf großartigen Projekten mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von sachkundigen Lehrern unterrichtet werden.
- [HTML lernen](https://www.codecademy.com/learn/learn-html), Codecademy
  - : Eine weitere nützliche Ressource, um HTML-Grundlagen zu lernen.
- [Die Grundlagen von semantischem HTML](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Beschreibung von HTML, mit besonderem Schwerpunkt darauf, warum der _semantische_ Aspekt davon wichtig ist.

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
