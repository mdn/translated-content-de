---
title: Strukturierung von Inhalten mit HTML
short-title: HTML
slug: Learn_web_development/Core/Structuring_content
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML ist die Technologie, die den Inhalt und die Struktur jeder Website definiert. Richtig geschrieben, sollte es auch die Semantik (Bedeutung) der Inhalte auf maschinenlesbare Weise definieren, was entscheidend für Barrierefreiheit, Suchmaschinenoptimierung und die Nutzung der integrierten Funktionen der Browser ist, damit Inhalte optimal funktionieren. Dieses Modul behandelt die Grundlagen der Sprache, bevor es sich Schlüsselaspekten wie Dokumentenstruktur, Links, Listen, Bildern, Formularen und mehr widmet.

## Voraussetzungen

Vor Beginn dieses Moduls benötigen Sie keine vorherigen HTML-Kenntnisse, aber Sie sollten zumindest eine grundlegende Vertrautheit mit der Nutzung von Computern und der passiven Nutzung des Internets haben (d.h. einfach nur anschauen und Inhalte konsumieren). Sie sollten eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Beides sind Teile unseres [Einstieg ins Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) Einsteiger-Moduls.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie die meisten der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Behandelt die absoluten Grundlagen von {{Glossary("HTML", "HTML")}}, um Ihnen den Einstieg zu erleichtern — wir definieren Elemente, Attribute und andere wichtige Begriffe und zeigen deren Rolle in der Sprache auf. Außerdem zeigen wir, wie eine typische HTML-Seite strukturiert ist und wie ein HTML-Element strukturiert ist, und erklären weitere wichtige grundlegende Sprachmerkmale. Dabei experimentieren wir mit etwas HTML, um Ihr Interesse zu wecken!
- [Was steht im head? Metadaten der Webseite](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : Der {{Glossary("Head", "head")}} eines HTML-Dokuments ist der Teil, der **nicht** im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Metadateninformationen wie den Seiten {{htmlelement("title")}}, Links zu {{Glossary("CSS", "CSS")}} (wenn Sie Ihre HTML-Inhalte mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und Metadaten (Daten über das HTML, z.B. wer es geschrieben hat und wichtige Schlüsselwörter, die das Dokument beschreiben).
- [Überschriften und Absätze](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : Eine der Hauptaufgaben von HTML besteht darin, Text zu strukturieren, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie HTML verwendet werden kann, um eine grundlegende Seitenstruktur bereitzustellen, indem Überschriften und Absätze definiert werden.
- [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : Der vorherige Artikel behandelte, warum Semantik in HTML wichtig ist, und konzentrierte sich auf Überschriften und Absätze. Dieser Artikel setzt das Thema Semantik fort und betrachtet HTML-Elemente, die Text Betonung und Wichtigkeit verleihen (vergleichbar mit Kursiv- und Fettdruck in Printmedien).
- [Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : Listen sind im Leben allgegenwärtig — von Ihrer Einkaufsliste bis zur Liste der Wegbeschreibungen, denen Sie unbewusst folgen, um jeden Tag zu Ihrem Haus zu gelangen, bis zu den Listen von Anweisungen, die Sie in diesen Tutorials befolgen! Es überrascht Sie vielleicht nicht, dass HTML eine praktische Sammlung von Elementen hat, die es uns ermöglichen, verschiedene Arten von Listen zu definieren. Im Web haben wir drei Arten von Listen: ungeordnete, geordnete und Definitionslisten. Diese Lektion zeigt Ihnen, wie Sie die verschiedenen Typen verwenden.
- [Dokumente strukturieren](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : Neben der Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet HTML auch eine Anzahl von Block-Level-Elementen, die zum Definieren von Bereichen Ihrer Website verwendet werden (wie "der Header", "das Navigationsmenü", "die Hauptinhaltsspalte"). Dieser Artikel betrachtet, wie man eine grundlegende Website-Struktur plant und das HTML schreibt, um diese Struktur darzustellen.
- [Erweiterte Textfunktionen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : Es gibt viele weitere Elemente in HTML zur Definition von Textsemantiken, die wir im Artikel [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu kennen (und dies ist immer noch keine vollständige Liste). Hier erfahren Sie, wie Sie Zitate, Computercode und andere verwandte Texte, Tief- und Hochstellung, Kontaktinformationen und mehr markieren.
- [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : Links (auch als Hyperlinks bekannt) sind wirklich wichtig — sie sind es, die das Web _ein Netz_ machen. Dieser Artikel zeigt die erforderliche Syntax, um einen Link zu erstellen, und diskutiert beste Praktiken für Links.
- [Ein Brief markieren](/de/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) <sup>Herausforderung</sup>
  - : Wir alle lernen früher oder später, einen Brief zu schreiben; es ist auch ein nützliches Beispiel, um unsere Textformatierungsfähigkeiten zu testen. In dieser Herausforderung haben Sie einen Brief, den Sie als Test für Ihre HTML-Textformatierungsfähigkeiten sowie Hyperlinks und die richtige Verwendung des HTML-Elements `<head>` markieren müssen.
- [Die Strukturierung einer Inhaltsseite](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>Herausforderung</sup>
  - : Das Strukturieren einer Inhaltsseite zur Vorbereitung auf die Layout-Erstellung mit CSS ist eine sehr wichtige Fähigkeit, die Sie beherrschen müssen. In dieser Herausforderung wird Ihre Fähigkeit getestet, darüber nachzudenken, wie eine Seite aussehen könnte, und geeignete strukturelle Semantiken auszuwählen, um darauf ein Layout aufzubauen.
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
  - : Am Anfang bestand das Web nur aus Text, und es war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzukam, Bilder (und andere interessantere Inhaltstypen) in Webseiten einzubetten. In diesem Artikel sehen wir uns an, wie das {{htmlelement("img")}}-Element in der Tiefe verwendet wird, einschließlich der Grundlagen, der Anmerkung mit Bildunterschriften mit {{htmlelement("figure")}} und der Beschreibung, wie es sich auf {{Glossary("CSS", "CSS")}}-Hintergrundbilder bezieht.
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Nachdem wir nun mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut sind, besteht der nächste Schritt darin, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns genau damit befassen, mit den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen; wir schließen damit ab, indem wir uns ansehen, wie Sie Ihren Videos Untertitel/Captions hinzufügen.
- [Mozilla-Splash-Seite](/de/docs/Learn_web_development/Core/Structuring_content/Mozilla_splash_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung testen wir Ihr Wissen über einige der in den letzten Lektionen behandelten Techniken und fordern Sie auf, einige Bilder und Videos auf einer unterhaltsamen Splash-Seite über Mozilla hinzuzufügen!
- [Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : Dieser Artikel führt Sie in HTML-Tabellen ein, indem er die absoluten Grundlagen wie Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen hinweg und das Gruppieren aller Zellen in einer Spalte zu Styling-Zwecken abdeckt.
- [HTML-Tabellen-Zugänglichkeit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : In diesem Artikel behandeln wir weitere Funktionen zur Zugänglichkeit von HTML-Tabellen, wie zum Beispiel Titel/Summaries, das Gruppieren Ihrer Zeilen in Tabellenkopf-, -körper- und -fußbereiche sowie das Scope von Spalten und Zeilen.
- [Strukturierung einer Planetendatentabelle](/de/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) <sup>Herausforderung</sup>
  - : In dieser Herausforderung stellen wir Ihnen einige Daten über die Planeten in unserem Sonnensystem zur Verfügung. Ihre Aufgabe ist es, diese in eine zugängliche HTML-Tabelle zu strukturieren.
- [Formulare und Buttons in HTML](/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
  - : HTML-Formulare und -Buttons sind mächtige Werkzeuge zur Interaktion mit Nutzern — meistens werden sie zum Sammeln von Daten von Nutzern oder zur Steuerung einer Benutzeroberfläche verwendet. In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Buttons.
- [HTML debuggen](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
  - : HTML zu schreiben ist in Ordnung, aber was, wenn etwas schiefgeht und Sie nicht herausfinden können, wo der Fehler im Code ist? Dieser Artikel wird Ihnen einige Werkzeuge vorstellen, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.
- [Testen Sie Ihre Fähigkeiten: HTML](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills)
  - : Diese Seite listet HTML-Tests auf, die Sie ausprobieren können, um zu überprüfen, ob Sie den Inhalt dieses Moduls verstanden haben.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind dennoch interessant — Sie sollten diese als zusätzliche Ziele betrachten, die Sie optional studieren können, wenn Sie mit den Hauptartikeln der Kernmodule fertig sind.

- [Vektorgrafiken in HTML einbinden](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : Vektorgrafiken sind in vielen Situationen sehr nützlich — sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie nicht pixelig werden, wenn sie vergrößert oder in großem Maßstab dargestellt werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine in Ihre Webseite einbinden.
- [Vom Objekt zum iframe — allgemeine Embedded-Technologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : Entwickler denken häufig daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel machen wir einen etwas seitlichen Schritt und schauen uns einige Elemente an, die es Ihnen erlauben, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s dienen zum Einbetten anderer Webseiten, und die anderen beiden erlauben Ihnen, externe Ressourcen wie PDF-Dateien einzubetten.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn HTML and CSS_-Kurs von [Scrimba](https://scrimba.com?via=mdn) lehrt Ihnen HTML und CSS durch das Erstellen und Bereitstellen von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, gelehrt von kompetenten Lehrern.
- [HTML lernen](https://www.codecademy.com/learn/learn-html), Codecademy
  - : Eine weitere nützliche Ressource zum Erlernen der HTML-Basics.
- [Die Grundlagen von semantischem HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Beschreibung von HTML, mit besonderem Schwerpunkt darauf, warum der _semantische_ Aspekt davon wichtig ist.

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
