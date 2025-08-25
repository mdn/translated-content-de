---
title: Strukturierung von Inhalten mit HTML
short-title: HTML
slug: Learn_web_development/Core/Structuring_content
l10n:
  sourceCommit: 65c873fda639b035b94db77dd0f9373f38549aa0
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML ist die Technologie, die den Inhalt und die Struktur jeder Website definiert. Richtig geschrieben, sollte es auch die Semantik (Bedeutung) des Inhalts auf maschinenlesbare Weise definieren, was entscheidend für Barrierefreiheit, Suchmaschinenoptimierung und die Nutzung der integrierten Funktionen ist, die Browser bieten, damit Inhalte optimal funktionieren. Dieses Modul behandelt die Grundlagen der Sprache, bevor es sich auf Schlüsselbereiche wie Dokumentstruktur, Links, Listen, Bilder, Formulare und mehr konzentriert.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, benötigen Sie keine Vorkenntnisse in HTML, sollten jedoch zumindest Grundkenntnisse im Umgang mit Computern und der passiven Nutzung des Internets (d.h. nur darauf zu schauen und Inhalte zu konsumieren) haben. Sie sollten eine grundlegende Arbeitsumgebung eingerichtet haben (wie im Abschnitt [Grundlegende Software installieren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie im Abschnitt [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Beide sind Teile unseres kompletten Anfänger-Moduls [Einstieg ins Web](/de/docs/Learn_web_development/Getting_started/Your_first_website).

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Behandelt die absoluten Grundlagen von {{Glossary("HTML", "HTML")}}, um Ihnen den Einstieg zu erleichtern — wir definieren Elemente, Attribute und andere wichtige Begriffe und zeigen, wo sie in der Sprache passen. Wir zeigen auch, wie eine typische HTML-Seite aufgebaut ist und wie ein HTML-Element strukturiert ist, und erklären andere wichtige Grundfunktionen der Sprache. Unterwegs werden wir mit etwas HTML spielen, um Ihr Interesse zu wecken!
- [Was ist im Head? Meta-Daten einer Webseite](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : Der {{Glossary("Head", "Kopf")}} eines HTML-Dokuments ist der Teil, der **nicht** im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Meta-Daten wie den {{htmlelement("title")}} der Seite, Links zu {{Glossary("CSS", "CSS")}} (wenn Sie Ihr HTML mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und Metadaten (Daten über das HTML, wie z.B. wer es geschrieben hat, und wichtige Schlüsselwörter, die das Dokument beschreiben).
- [Überschriften und Absätze](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : Eine der Hauptaufgaben von HTML ist es, Text eine Struktur zu geben, damit ein Browser ein HTML-Dokument so darstellen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie HTML verwendet werden kann, um eine grundlegende Seitenstruktur bereitzustellen, indem Überschriften und Absätze definiert werden.
- [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : Der vorherige Artikel behandelte, warum Semantik in HTML wichtig ist, und konzentrierte sich auf Überschriften und Absätze. Dieser Artikel setzt das Thema Semantik fort und untersucht HTML-Elemente, die Texten Betonung und Wichtigkeit verleihen (ähnlich wie Kursivschrift und Fettschrift in Printmedien).
- [Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : Listen gibt es überall im Leben — von Ihrer Einkaufsliste über die Liste von Anweisungen, denen Sie unbewusst jeden Tag folgen, um zu Ihrem Haus zu gelangen, bis hin zu den Listen von Anweisungen, denen Sie in diesen Tutorials folgen! Es wird Sie vielleicht nicht überraschen, dass HTML eine praktische Reihe von Elementen bietet, mit denen wir verschiedene Arten von Listen definieren können. Im Web haben wir drei Arten von Listen: ungeordnete, geordnete und Beschreibungslisten. Diese Lektion zeigt Ihnen, wie Sie die verschiedenen Typen verwenden.
- [Erweiterte Textfunktionen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : Es gibt viele andere Elemente in HTML zur Definition von Textsemantik, die wir im Artikel [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu wissen (und das ist noch lange keine vollständige Liste). Hier erfahren Sie, wie Sie Zitate, Computercode und andere verwandte Texte, Hoch- und Tiefschrift, Kontaktinformationen und mehr markieren können.

- [Ein Brief formatieren](/de/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) <sup>Herausforderung</sup>
  - : Wir lernen alle früher oder später, einen Brief zu schreiben; es ist auch ein nützliches Beispiel, um unsere Textformatierungsfähigkeiten zu testen. In dieser Herausforderung haben Sie einen Brief zu formatieren, um Ihre Fähigkeiten in der HTML-Textformatierung sowie in Hyperlinks und der richtigen Verwendung des HTML-`<head>`-Elements zu testen.

- [Dokumente strukturieren](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : Neben der Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet HTML auch eine Reihe von Block-Elementen, die zum Definieren von Bereichen Ihrer Website verwendet werden (wie "der Header", "das Navigationsmenü", "die Hauptinhalts-Spalte"). Dieser Artikel befasst sich damit, wie man eine grundlegende Webseitenstruktur plant und den HTML-Code schreibt, um diese Struktur darzustellen.

- [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : Links (auch als Hyperlinks bekannt) sind wirklich wichtig — sie sind das, was das Web zu _einem Netz_ macht. Dieser Artikel zeigt die erforderliche Syntax, um einen Link zu erstellen, und diskutiert bewährte Praktiken für Links.

- [Eine Inhaltsseite strukturieren](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>Herausforderung</sup>
  - : Das Strukturieren einer Inhaltsseite, damit sie mit CSS gestaltet werden kann, ist eine sehr wichtige Fähigkeit, die es zu meistern gilt. In dieser Herausforderung wird Ihr Können getestet, darüber nachzudenken, wie eine Seite letztendlich aussehen könnte und geeignete strukturelle Semantik auszuwählen, um ein Layout darauf aufzubauen.
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
  - : Zu Beginn war das Web nur Text, und es war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzukam, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel betrachten wir, wie man das {{htmlelement("img")}}-Element ausführlich verwendet, einschließlich der Grundlagen, der Anmerkung mit Bildunterschriften unter Verwendung von {{htmlelement("figure")}}, und detailliert, wie es sich auf {{Glossary("CSS", "CSS")}} Hintergrundbilder bezieht.
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Jetzt, da wir uns mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut gemacht haben, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel betrachten wir genau das mit den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen; wir werden dann abschließend betrachten, wie Sie Untertitel zu Ihren Videos hinzufügen.
- [Mozilla-Splash-Seite](/de/docs/Learn_web_development/Core/Structuring_content/Mozilla_splash_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung testen wir Ihr Wissen über einige der in den letzten Lektionen besprochenen Techniken und fordern Sie auf, einige Bilder und Videos zu einer coolen Splash-Seite über Mozilla hinzuzufügen!
- [HTML Tabellen Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : Dieser Artikel macht Sie mit HTML-Tabellen vertraut und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Zusammenführen von Zellen über mehrere Spalten und Zeilen hinweg und wie man alle Zellen in einer Spalte für Styling-Zwecke gruppiert.
- [HTML Tabellenbarrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : In diesem Artikel betrachten wir mehr Funktionen zur Barrierefreiheit von HTML-Tabellen, wie Bildunterschriften/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Kopf-, Körper- und Fußabschnitte der Tabelle, sowie das Festlegen von Spalt- und Zeilenbereichen.
- [Eine Tabelle mit Planeten-Daten strukturieren](/de/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) <sup>Herausforderung</sup>
  - : In dieser Herausforderung stellen wir Ihnen einige Daten über die Planeten unseres Sonnensystems zur Verfügung. Ihre Aufgabe ist es, sie in eine barrierefreie HTML-Tabelle zu strukturieren.
- [Formulare und Schaltflächen in HTML](/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
  - : HTML-Formulare und Schaltflächen sind leistungsstarke Werkzeuge zur Interaktion mit Benutzern — sie werden am häufigsten verwendet, um Daten von Benutzern zu sammeln oder ihnen die Steuerung einer Benutzeroberfläche zu ermöglichen. In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen.
- [HTML Debugging](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
  - : HTML zu schreiben ist in Ordnung, aber was, wenn etwas schief geht und Sie den Fehler im Code nicht ausfindig machen können? Dieser Artikel wird Sie in einige Werkzeuge einführen, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

## Testen Sie Ihr Wissen

Sie werden "Testen Sie Ihr Wissen"-Artikel zwischen den Tutorial-Artikeln finden, um zu überprüfen, ob Sie die wichtigsten Informationen behalten haben, bevor Sie fortfahren. Wenn Sie alle diese zusammen erkunden möchten, können Sie sie unter [Testen Sie Ihr Wissen: HTML](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills) finden.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind dennoch interessant — Sie sollten diese als zusätzliche Ziele betrachten, die optional studiert werden können, wenn Sie mit den Hauptartikeln des Core-Moduls fertig sind.

- [Einbinden von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : Vektorgrafiken sind in vielen Fällen sehr nützlich — sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie beim Vergrößern oder Aufblasen nicht pixelig werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine in Ihre Webseite einbinden können.
- [Von Objekt zu iframe — allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : Entwickler denken häufig daran, Medien wie Bilder, Videos und Audios in Webseiten einzubetten. In diesem Artikel machen wir einen kleinen Abstecher und betrachten einige Elemente, mit denen Sie eine Vielzahl von Inhaltstypen in Ihre Webseiten einbetten können: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}-Elemente. `<iframe>`s sind zum Einbetten anderer Webseiten da, und die anderen beiden ermöglichen das Einbinden externer Ressourcen wie PDF-Dateien.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _Lernen Sie HTML und CSS_-Kurs lehrt Ihnen HTML und CSS durch den Aufbau und das Veröffentlichen von fünf tollen Projekten mit unterhaltsamen interaktiven Lektionen und Herausforderungen geleitet von erfahrenen Lehrern.
- [HTML lernen](https://www.codecademy.com/learn/learn-html), Codecademy
  - : Eine weitere nützliche Ressource zum Erlernen der HTML-Grundlagen.
- [Die Grundlagen von semantischem HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Beschreibung von HTML, mit besonderem Schwerpunkt darauf, warum der _semantische_ Aspekt davon wichtig ist.

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
