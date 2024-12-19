---
title: Strukturierung von Inhalten mit HTML
slug: Learn_web_development/Core/Structuring_content
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML ist die Technologie, die den Inhalt und die Struktur jeder Website definiert. Richtig geschrieben, sollte es auch die Semantik (Bedeutung) des Inhalts auf eine maschinenlesbare Weise definieren, was entscheidend für Barrierefreiheit, Suchmaschinenoptimierung und die Nutzung der integrierten Funktionen der Browser ist, damit Inhalte optimal funktionieren. Dieses Modul behandelt die Grundlagen der Sprache, bevor es sich wichtigen Bereichen wie Dokumentenstruktur, Links, Listen, Bildern, Formularen und mehr widmet.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, benötigen Sie keine Vorkenntnisse in HTML, aber Sie sollten zumindest eine grundlegende Vertrautheit mit der Nutzung von Computern und der passiven Nutzung des Internets (d. h. nur darauf schauen und Inhalte konsumieren) haben. Sie sollten eine grundlegende Arbeitsumgebung eingerichtet haben (wie im Abschnitt [Installation grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie im Abschnitt [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Beide sind Teile unseres [Erste Schritte mit dem Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) vollständigen Anfänger-Moduls.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, an dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Behandelt die absoluten Grundlagen von {{Glossary("HTML", "HTML")}}, um Ihnen den Einstieg zu erleichtern — wir definieren Elemente, Attribute und andere wichtige Begriffe und zeigen, wo sie in der Sprache passen. Wir zeigen auch, wie eine typische HTML-Seite und ein HTML-Element strukturiert sind und erklären andere wichtige grundlegende Sprachmerkmale. Unterwegs werden wir mit etwas HTML spielen, um Ihr Interesse zu wecken!
- [Was ist im Head? Webpage-Metadaten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : Der {{Glossary("Head", "Head")}} eines HTML-Dokuments ist der Teil, der **nicht** im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Metadaten wie die {{htmlelement("title")}}, Links zu {{Glossary("CSS", "CSS")}} (wenn Sie Ihre HTML-Inhalte mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und Metadaten (Daten über das HTML, wie z. B. wer es geschrieben hat, und wichtige Schlüsselwörter, die das Dokument beschreiben).
- [Überschriften und Absätze](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : Eine der Hauptaufgaben von HTML ist es, Text zu strukturieren, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie HTML verwendet werden kann, um eine grundlegende Seitenstruktur zu bieten, indem Überschriften und Absätze definiert werden.
- [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : Der vorherige Artikel befasste sich damit, warum Semantik in HTML wichtig ist, und konzentrierte sich auf Überschriften und Absätze. Dieser Artikel setzt das Thema der Semantik fort und befasst sich mit HTML-Elementen, die Texten Betonung und Wichtigkeit verleihen (analog zu Kursiv- und Fettdruck in Printmedien).
- [Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : Listen sind überall im Leben – von Ihrer Einkaufsliste bis hin zur Liste der Anweisungen, denen Sie unbewusst folgen, um täglich nach Hause zu kommen, bis hin zu den Anweisungen, die Sie in diesen Tutorials befolgen! Es überrascht Sie vielleicht nicht, dass HTML eine praktische Reihe von Elementen hat, die es uns ermöglichen, verschiedene Arten von Listen zu definieren. Im Web haben wir drei Arten von Listen: ungeordnete, geordnete und Definitionslisten. Diese Lektion zeigt Ihnen, wie Sie die verschiedenen Typen verwenden.
- [Strukturierung von Dokumenten](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet HTML auch eine Reihe von Blockelementen, die verwendet werden, um Bereiche Ihrer Website zu definieren (wie "den Header", "das Navigationsmenü", "die Hauptinhaltskolonne"). Dieser Artikel untersucht, wie man eine grundlegende Webseitenstruktur plant und das HTML schreibt, um diese Struktur darzustellen.
- [Erweiterte Textfunktionen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : Es gibt viele andere Elemente in HTML zur Definition von Textsemantik, die wir im Artikel [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu wissen (und dies ist kein vollständiger Liste bei weitem). Hier lernen Sie, wie man Zitate, Definitionslisten, Computercode und andere verwandte Texte, Schriftunter- und hochstellungen, Kontaktinformationen und mehr kennzeichnet.
- [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : Links (auch als Hyperlinks bekannt) sind wirklich wichtig — sie sind es, die das Web zu _einem Netz_ machen. Dieser Artikel zeigt die Syntax, die erforderlich ist, um einen Link zu erstellen, und diskutiert Best Practices für Links.
- [Kennzeichnung eines Briefes](/de/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) <sup>Herausforderung</sup>
  - : Wir lernen alle früher oder später, einen Brief zu schreiben; er ist auch ein nützliches Beispiel, um unsere Textformatierungsfähigkeiten zu testen. In dieser Herausforderung haben Sie einen Brief zu kennzeichnen, als Test für Ihre HTML-Textformatierungsfähigkeiten, sowie Hyperlinks und korrekte Verwendung des HTML `<head>` Elements.
- [Strukturierung einer Inhaltsseite](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>Herausforderung</sup>
  - : Die Strukturierung einer Inhaltsseite zur Vorbereitung der Gestaltung mit CSS ist eine sehr wichtige Fähigkeit zu beherrschen, daher werden Sie in dieser Herausforderung auf Ihre Fähigkeit getestet, darüber nachzudenken, wie eine Seite letztendlich aussehen könnte, und geeignete strukturelle Semantik auszuwählen, um ein Layout darüber aufzubauen.
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
  - : Am Anfang war das Web nur Text, und es war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel werden wir uns eingehend mit dem {{htmlelement("img")}} Element befassen, einschließlich der Grundlagen, der Anmerkung mit Bildunterschriften mit {{htmlelement("figure")}} und der Erklärung, wie es sich auf {{Glossary("CSS", "CSS")}} Hintergrundbilder bezieht.
- [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Da wir jetzt mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut sind, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns damit befassen, genau das mit den {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen zu tun; wir werden dann mit einem Blick darauf abschließen, wie Sie Ihren Videos Untertitel hinzufügen können.
- [Mozilla-Startseite](/de/docs/Learn_web_development/Core/Structuring_content/Mozilla_splash_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung testen wir Ihr Wissen über einige der in den letzten Lektionen besprochenen Techniken, indem wir Ihnen auftragen, einige Bilder und ein Video zu einer funky Startseite über Mozilla hinzuzufügen!
- [Grundlagen der HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : Dieser Artikel bringt Ihnen die Grundlagen von HTML-Tabellen näher, wobei die Grundlagen wie Zeilen, Zellen, Überschriften, das Dehnen von Zellen über mehrere Spalten und Zeilen, und wie man alle Zellen einer Spalte für Styling-Zwecke gruppiert, behandelt werden.
- [HTML-Tabellenbarrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : In diesem Artikel untersuchen wir mehr HTML-Tabellen-Barrierefreiheitsfunktionen wie Bildunterschriften/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Tabellenkopf-, Körper- und Fußabschnitte und das Einteilen von Spalten und Zeilen.
- [Strukturierung einer Planetendatentabelle](/de/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) <sup>Herausforderung</sup>
  - : In dieser Herausforderung stellen wir Ihnen einige Daten zu den Planeten in unserem Sonnensystem zur Verfügung. Ihre Aufgabe ist es, diese in einer zugänglichen HTML-Tabelle zu strukturieren.
- [Formulare und Buttons in HTML](/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
  - : HTML-Formulare und Buttons sind leistungsstarke Werkzeuge zur Interaktion mit Benutzern — sie werden am häufigsten verwendet, um Daten von Benutzern zu sammeln oder ihnen die Kontrolle über eine Benutzeroberfläche zu ermöglichen. In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Buttons.
- [Debugging von HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
  - : HTML zu schreiben ist schön, aber was, wenn etwas schiefgeht und Sie den Fehler im Code nicht lokalisieren können? Dieser Artikel wird Ihnen einige Werkzeuge vorstellen, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfades, aber sie sind trotzdem interessant — Sie sollten diese als erweiterte Ziele betrachten, die Sie optional studieren können, wenn Sie mit den Hauptartikeln des Core abgeschlossen haben.

- [Einfügen von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : Vektorgrafiken sind in vielen Fällen sehr nützlich — sie haben kleine Dateigrößen und sind hochskalierbar, so dass sie nicht pixelig werden, wenn man hineinzoomt oder sie auf eine große Größe vergrößert. In diesem Artikel zeigen wir Ihnen, wie Sie eine in Ihre Webseite einfügen.
- [Von Objekt zu iframe — allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : Entwickler denken häufig daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel machen wir einen etwas seitlichen Schritt und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s sind zum Einbetten anderer Webseiten gedacht, und die anderen beiden ermöglichen das Einbetten externer Ressourcen wie PDF-Dateien.

## Siehe auch

- [Learn HTML and CSS](https://v2.scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>_MDN Curriculum-Partner_</sup>
  - : Der [Learn HTML and CSS](https://scrimba.com?via=mdn) Kurs von Scrimba lehrt Sie HTML und CSS durch den Aufbau und die Bereitstellung von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von sachkundigen Lehrern unterrichtet werden.
- [Die Grundlagen von semantischem HTML](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>_MDN Curriculum-Partner_</sup>
  - : Diese interaktive Lektion bietet eine nützliche Beschreibung von HTML, mit besonderem Schwerpunkt darauf, warum der _semantische_ Aspekt davon wichtig ist.
- [Learn HTML](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Codecademy
  - : Eine weitere nützliche (und kostenlose) Ressource, um die Grundlagen von HTML zu lernen.

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
