---
title: Inhalte mit HTML strukturieren
short-title: HTML
slug: Learn_web_development/Core/Structuring_content
l10n:
  sourceCommit: 456c370394c0cd8869feb60c4e9926f35422beaf
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML ist die Technologie, die den Inhalt und die Struktur jeder Website definiert. Bei korrekter Verwendung sollte sie auch die Semantik (Bedeutung) der Inhalte maschinenlesbar definieren. Dies ist entscheidend für Barrierefreiheit, Suchmaschinenoptimierung und die Nutzung der integrierten Browserfunktionen, damit Inhalte optimal funktionieren. Dieses Modul behandelt die Grundlagen der Sprache, bevor wichtige Bereiche wie Dokumentstruktur, Links, Listen, Bilder, Formulare und mehr betrachtet werden.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, benötigen Sie keine Vorkenntnisse in HTML. Sie sollten jedoch zumindest grundlegende Erfahrung im Umgang mit Computern und in der passiven Nutzung des Webs haben (d.h. es nur betrachten und Inhalte konsumieren). Sie sollten eine grundlegende Arbeitsumgebung eingerichtet haben (wie unter [Grundlegende Software installieren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie Dateien erstellt und verwaltet werden (wie unter [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Beides ist Teil unseres Moduls für absolute Anfänger:innen [Erste Schritte im Web](/de/docs/Learn_web_development/Getting_started/Your_first_website).

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Behandelt die absoluten Grundlagen von {{Glossary("HTML", "HTML")}}, damit Sie loslegen können — wir definieren Elemente, Attribute und andere wichtige Begriffe und zeigen, wo sie in der Sprache einzuordnen sind. Außerdem zeigen wir, wie eine typische HTML-Seite und ein HTML-Element strukturiert sind, und erklären weitere wichtige grundlegende Sprachfunktionen. Dabei experimentieren wir mit etwas HTML, um Ihr Interesse zu wecken!
- [Was befindet sich im head? Metadaten von Webseiten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : Der {{Glossary("Head", "head")}} eines HTML-Dokuments ist der Teil, der beim Laden der Seite **nicht** im Webbrowser angezeigt wird. Er enthält Metadaten wie das {{htmlelement("title")}} der Seite, Verknüpfungen zu {{Glossary("CSS", "CSS")}} (wenn Sie Ihre HTML-Inhalte mit CSS gestalten möchten), Verknüpfungen zu benutzerdefinierten Favicons sowie Metadaten (Daten über das HTML, etwa wer es geschrieben hat und wichtige Schlüsselwörter, die das Dokument beschreiben).
- [Überschriften und Absätze](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : Eine der Hauptaufgaben von HTML besteht darin, Text zu strukturieren, sodass ein Browser ein HTML-Dokument so darstellen kann, wie es von seinen Entwickler:innen beabsichtigt ist. Dieser Artikel erklärt, wie HTML zur Bereitstellung einer grundlegenden Seitenstruktur verwendet werden kann, indem Überschriften und Absätze definiert werden.
- [Hervorhebung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : Der vorherige Artikel erläuterte, warum Semantik in HTML wichtig ist, und konzentrierte sich auf Überschriften und Absätze. Dieser Artikel setzt das Thema Semantik fort und betrachtet HTML-Elemente, die Text hervorheben und ihm Wichtigkeit verleihen (entsprechend Kursiv- und Fettdruck in Printmedien).
- [Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : Listen sind überall im Leben vorhanden – von Ihrer Einkaufsliste über die Wegbeschreibung, der Sie unbewusst täglich folgen, um nach Hause zu gelangen, bis zu den Anweisungslisten, denen Sie in diesen Tutorials folgen! Es überrascht Sie vielleicht nicht, dass HTML eine praktische Sammlung von Elementen bietet, mit denen sich verschiedene Listentypen definieren lassen. Im Web gibt es drei Arten von Listen: ungeordnete, geordnete und Beschreibungslisten. Diese Lektion zeigt Ihnen, wie Sie die verschiedenen Typen verwenden.
- [Erweiterte Textfunktionen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : HTML bietet viele weitere Elemente zur Definition von Textsemantik, die wir im Artikel [Hervorhebung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich (und dies ist keineswegs eine vollständige Liste). Hier erfahren Sie mehr über das Auszeichnen von Zitaten, Computercode und anderem verwandten Text, Tief- und Hochstellungen, Kontaktinformationen und mehr.

- [Einen Brief auszeichnen](/de/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) <sup>Herausforderung</sup>
  - : Früher oder später lernen wir alle, einen Brief zu schreiben; außerdem ist dies ein nützliches Beispiel, um unsere Fähigkeiten zur Textformatierung zu testen. In dieser Herausforderung erhalten Sie einen Brief, den Sie als Test Ihrer HTML-Textformatierungsfähigkeiten auszeichnen sollen, sowie Hyperlinks und die korrekte Verwendung des HTML-Elements `<head>`.

- [Dokumente strukturieren](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : Neben der Definition einzelner Teile Ihrer Seite (etwa „ein Absatz“ oder „ein Bild“) bietet HTML auch eine Reihe von Blockelementen, die zum Definieren von Bereichen Ihrer Website verwendet werden (etwa „die Kopfzeile“, „das Navigationsmenü“, „die Hauptinhaltsspalte“). Dieser Artikel untersucht, wie Sie eine grundlegende Website-Struktur planen und das HTML schreiben können, das diese Struktur darstellt.

- [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : Links (auch Hyperlinks genannt) sind äußerst wichtig — sie machen das Web _zu einem Web_. Dieser Artikel zeigt die Syntax, die zum Erstellen eines Links erforderlich ist, und behandelt bewährte Vorgehensweisen für Links.

- [Eine Inhaltsseite strukturieren](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>Herausforderung</sup>
  - : Eine Inhaltsseite so zu strukturieren, dass sie mit CSS gestaltet werden kann, ist eine sehr wichtige Fähigkeit. In dieser Herausforderung werden daher Ihre Fähigkeiten getestet, darüber nachzudenken, wie eine Seite letztendlich aussehen könnte, und passende strukturelle Semantik auszuwählen, auf der ein Layout aufgebaut werden kann.
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
  - : Zu Beginn bestand das Web nur aus Text, und das war ziemlich langweilig. Glücklicherweise wurde schon bald die Möglichkeit hinzugefügt, Bilder (und andere interessantere Inhaltstypen) in Webseiten einzubetten. In diesem Artikel betrachten wir ausführlich die Verwendung des Elements {{htmlelement("img")}}, einschließlich der Grundlagen, der Beschriftung mit Bildunterschriften mithilfe von {{htmlelement("figure")}} und der Beziehung zu {{Glossary("CSS", "CSS")}}-Hintergrundbildern.
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Nachdem wir nun mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut sind, besteht der nächste Schritt darin, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel sehen wir uns genau dies mit den Elementen {{htmlelement("video")}} und {{htmlelement("audio")}} an; anschließend betrachten wir, wie Sie Untertitel zu Ihren Videos hinzufügen.
- [Startseite über Krabbeltiere](/de/docs/Learn_web_development/Core/Structuring_content/Splash_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung testen wir Ihr Wissen über einige der in den letzten Lektionen behandelten Techniken. Sie fügen einer Startseite über Käfer und andere Krabbeltiere Bilder und Videos hinzu.
- [Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : Dieser Artikel vermittelt Ihnen den Einstieg in HTML-Tabellen und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Überspannen mehrerer Spalten und Zeilen durch Zellen sowie das Gruppieren aller Zellen einer Spalte zu Gestaltungszwecken.
- [Barrierefreiheit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : In diesem Artikel betrachten wir weitere Funktionen für die Barrierefreiheit von HTML-Tabellen, etwa Beschriftungen/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Tabellenkopf-, Tabellenkörper- und Tabellenfußabschnitte sowie die Zuordnung von Spalten und Zeilen.
- [Eine Tabelle mit Planetendaten strukturieren](/de/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) <sup>Herausforderung</sup>
  - : In dieser Herausforderung stellen wir Ihnen Daten zu den Planeten unseres Sonnensystems zur Verfügung. Ihre Aufgabe ist es, diese in einer barrierefreien HTML-Tabelle zu strukturieren.
- [Formulare und Schaltflächen in HTML](/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
  - : HTML-Formulare und -Schaltflächen sind leistungsstarke Werkzeuge für die Interaktion mit Benutzer:innen — sie werden meist verwendet, um Daten von Benutzer:innen zu erfassen oder ihnen die Steuerung einer Benutzeroberfläche zu ermöglichen. Dieser Artikel bietet eine Einführung in die Grundlagen von Formularen und Schaltflächen.
- [HTML debuggen](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
  - : HTML zu schreiben ist schön und gut, aber was geschieht, wenn etwas schiefläuft und Sie nicht herausfinden können, wo sich der Fehler im Code befindet? Dieser Artikel stellt Ihnen einige Werkzeuge vor, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

## Testen Sie Ihre Fähigkeiten

Zwischen den Tutorial-Artikeln finden Sie Artikel zum „Testen Sie Ihre Fähigkeiten“, mit denen Sie prüfen können, ob Sie die wichtigsten Informationen behalten haben, bevor Sie fortfahren. Wenn Sie alle zusammen erkunden möchten, finden Sie sie unter [Testen Sie Ihre Fähigkeiten: HTML](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills).

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber dennoch interessant — Sie sollten sie als weiterführende Ziele betrachten, die Sie optional bearbeiten können, nachdem Sie die wichtigsten Core-Artikel abgeschlossen haben.

- [Vektorgrafiken in HTML einbinden](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : Vektorgrafiken sind in vielen Situationen sehr nützlich — sie haben kleine Dateigrößen und sind stark skalierbar, sodass sie beim Vergrößern oder beim Aufziehen auf eine große Größe nicht verpixeln. In diesem Artikel zeigen wir Ihnen, wie Sie eine solche Grafik in Ihre Webseite einbinden.
- [Von object zu iframe — allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : Entwickler:innen denken beim Einbetten meist an Medien wie Bilder, Videos und Audio in Webseiten. In diesem Artikel gehen wir einen etwas anderen Weg und betrachten einige Elemente, mit denen Sie eine Vielzahl von Inhaltstypen in Ihre Webseiten einbetten können: die Elemente {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}. Mit diesen Elementen können Sie externe Ressourcen wie andere Webseiten und PDF-Dateien einbetten.

## Siehe auch

- [HTML und CSS lernen](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der Kurs _HTML und CSS lernen_ von [Scrimba](https://scrimba.com?via=mdn) vermittelt Ihnen HTML und CSS durch das Erstellen und Bereitstellen von fünf großartigen Projekten – mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von sachkundigen Lehrkräften unterrichtet werden.
- [HTML lernen](https://www.codecademy.com/learn/learn-html), Codecademy
  - : Eine weitere nützliche Ressource zum Erlernen der HTML-Grundlagen.
- [Die Grundlagen von semantischem HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Beschreibung von HTML und legt dabei besonderen Wert darauf, warum der _semantische_ Aspekt davon wichtig ist.

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
