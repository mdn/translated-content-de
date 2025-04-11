---
title: Strukturierung von Inhalten mit HTML
short-title: HTML
slug: Learn_web_development/Core/Structuring_content
l10n:
  sourceCommit: b679a45d0d6d524ce827cc1c7479321ed6a63c62
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML ist die Technologie, die den Inhalt und die Struktur jeder Website definiert. Wenn es korrekt geschrieben ist, sollte es auch die Semantik (Bedeutung) der Inhalte in maschinenlesbarer Weise definieren, was entscheidend für Barrierefreiheit, Suchmaschinenoptimierung und die Nutzung der eingebauten Funktionen von Browsern ist, damit Inhalte optimal funktionieren. In diesem Modul werden die Grundlagen der Sprache behandelt, bevor wir uns mit wichtigen Bereichen wie Dokumentenstruktur, Links, Listen, Bilder, Formulare und mehr befassen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, benötigen Sie keine vorherigen HTML-Kenntnisse, aber Sie sollten zumindest grundlegende Kenntnisse in der Nutzung von Computern und im passiven Umgang mit dem Web haben (d.h. es lediglich betrachten und Inhalte konsumieren). Sie sollten eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Beides ist Teil unseres [Erste Schritte im Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) Moduls für komplette Anfänger.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) der Code-Beispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Grundlegende HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Behandelt die absoluten Grundlagen von {{Glossary("HTML", "HTML")}}, um Sie an den Anfang zu bringen — wir definieren Elemente, Attribute und andere wichtige Begriffe und zeigen, wo sie in der Sprache passen. Wir zeigen auch, wie eine typische HTML-Seite strukturiert ist und wie ein HTML-Element aufgebaut ist, und erklären andere wichtige grundlegende Sprachfunktionen. Unterwegs spielen wir mit etwas HTML, um Ihr Interesse zu wecken!
- [Was ist im Kopf? Metadaten von Webseiten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : Der {{Glossary("Head", "Kopf")}} eines HTML-Dokuments ist der Teil, der **nicht** im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Metadateninformationen wie den Seitentitel {{htmlelement("title")}}, Links zu {{Glossary("CSS", "CSS")}} (wenn Sie Ihren HTML-Inhalt mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und Metadaten (Daten über das HTML, wie z.B. wer es geschrieben hat und wichtige Schlüsselwörter, die das Dokument beschreiben).
- [Überschriften und Absätze](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : Eine der Hauptaufgaben von HTML ist es, Text eine Struktur zu geben, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es der Entwickler beabsichtigt hat. Dieser Artikel erklärt, wie HTML verwendet werden kann, um eine grundlegende Seitenstruktur zu bieten, indem Überschriften und Absätze definiert werden.
- [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : Der vorherige Artikel hat erörtert, warum Semantik in HTML wichtig ist, und sich auf Überschriften und Absätze konzentriert. Dieser Artikel setzt das Thema der Semantik fort und betrachtet HTML-Elemente, die Betonung und Wichtigkeit auf Text anwenden (analog zu kursivem und fettgedrucktem Text in Printmedien).
- [Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : Listen sind überall im Leben — von Ihrer Einkaufsliste bis zur Liste der Richtungen, denen Sie unbewusst folgen, um jeden Tag nach Hause zu kommen, bis hin zu den Listen von Anweisungen, denen Sie in diesen Tutorials folgen! Es dürfte Sie nicht überraschen, dass HTML ein praktisches Set von Elementen hat, das es uns ermöglicht, verschiedene Arten von Listen zu definieren. Im Web haben wir drei Arten von Listen: ungeordnete, geordnete und Definitionslisten. Diese Lektion zeigt Ihnen, wie Sie die verschiedenen Typen verwenden.
- [Dokumente strukturieren](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") verfügt HTML auch über eine Reihe von Blockelementen, die zum Definieren von Bereichen Ihrer Website verwendet werden (wie "die Kopfzeile", "das Navigationsmenü", "die Hauptinhaltsspalte"). Dieser Artikel befasst sich mit der Planung einer grundlegenden Website-Struktur und dem Schreiben des HTML, um diese Struktur darzustellen.
- [Erweiterte Textfunktionen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : Es gibt viele andere Elemente in HTML zur Definition von Textsemantiken, die wir im Artikel [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu kennen (und dies ist bei weitem keine vollständige Liste). Hier lernen Sie mehr über das Markieren von Zitaten, Computercode und anderem verwandten Text, Tief- und Hochstellen, Kontaktinformationen und mehr.
- [Erstellen von Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : Links (auch als Hyperlinks bekannt) sind wirklich wichtig — sie sind es, was das Web _ein Netz_ macht. Dieser Artikel zeigt die Syntax, die benötigt wird, um einen Link zu erstellen, und diskutiert die besten Praktiken für Links.
- [Ein Brief markieren](/de/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) <sup>Herausforderung</sup>
  - : Früher oder später lernen wir alle, einen Brief zu schreiben; er ist auch ein nützliches Beispiel, um unsere Textformatierungsfähigkeiten zu testen. In dieser Herausforderung haben Sie einen Brief zur Markierung als Test für Ihre HTML-Textformatierungsfähigkeiten, sowie Hyperlinks und den korrekten Einsatz des HTML-`<head>`-Elements.
- [Eine Inhaltsseite strukturieren](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>Herausforderung</sup>
  - : Eine Seite mit Inhalten für die Layoutplanung mit CSS zu strukturieren, ist eine sehr wichtige Fähigkeit, die es zu meistern gilt, daher werden Sie in dieser Herausforderung darauf getestet, wie gut Sie darüber nachdenken können, wie eine Seite letztendlich aussehen könnte, und geeignete strukturelle Semantiken zu wählen, um darauf ein Layout zu bauen.
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
  - : Am Anfang war das Web nur Text, und es war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten, hinzugefügt wurde. In diesem Artikel werden wir untersuchen, wie man das {{htmlelement("img")}}-Element eingehend verwendet, einschließlich der Grundlagen, das Annotieren mit Beschriftungen unter Verwendung von {{htmlelement("figure")}}, und detaillieren, wie es sich zu {{Glossary("CSS", "CSS")}}-Hintergrundbildern verhält.
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Da wir nun mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut sind, ist der nächste Schritt, Videoplayer und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir genau das mit den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen betrachten; wir werden dann mit einem Blick darauf abschließen, wie man Untertitel/Untertitel zu Ihren Videos hinzufügt.
- [Mozilla-Splash-Seite](/de/docs/Learn_web_development/Core/Structuring_content/Mozilla_splash_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung testen wir Ihr Wissen über einige der in den letzten Lektionen besprochenen Techniken, indem Sie einige Bilder und Videos zu einer trendigen Splash-Seite über Mozilla hinzufügen!
- [Grundlagen der HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : Dieser Artikel führt Sie in HTML-Tabellen ein und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Erstellen von Zellen, die mehrere Spalten und Zeilen überspannen, und wie man alle Zellen in einer Spalte zusammenfasst, um sie zu stylen.
- [Barrierefreiheit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : In diesem Artikel betrachten wir weitere Barrierefreiheitsfunktionen von HTML-Tabellen wie Beschriftungen/Summen, das Gruppieren Ihrer Zeilen in Kopf-, Körper- und Fußbereiche der Tabelle und das Abgrenzen von Spalten und Zeilen.
- [Eine Planeten-Datentabelle strukturieren](/de/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) <sup>Herausforderung</sup>
  - : In dieser Herausforderung stellen wir Ihnen einige Daten über die Planeten in unserem Sonnensystem zur Verfügung. Ihre Aufgabe ist es, diese in eine zugängliche HTML-Tabelle zu strukturieren.
- [Formulare und Schaltflächen in HTML](/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
  - : HTML-Formulare und -Schaltflächen sind leistungsstarke Werkzeuge zur Interaktion mit Benutzern — am häufigsten werden sie zum Sammeln von Daten von Benutzern oder zur Steuerung einer Benutzeroberfläche verwendet. In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen.
- [HTML debuggen](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
  - : HTML zu schreiben ist in Ordnung, aber was ist, wenn etwas schief geht und Sie nicht herausfinden können, wo der Fehler im Code liegt? Dieser Artikel stellt Ihnen einige Werkzeuge vor, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.
- [Testen Sie Ihre Fähigkeiten: HTML](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills)
  - : Diese Seite listet HTML-Tests auf, die Sie ausprobieren können, um zu überprüfen, ob Sie den Inhalt dieses Moduls verstanden haben.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind trotzdem interessant — Sie sollten diese als Stretch-Ziele betrachten, um sie optional zu studieren, wenn Sie mit den wichtigsten Kernartikeln fertig sind.

- [Einbinden von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : Vektorgrafiken sind in vielen Situationen sehr nützlich — sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie nicht pixelig werden, wenn sie hinein- oder herausgezoomt werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine in Ihre Webseite einbinden können.
- [Vom Objekt zum iFrame — allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : Entwickler denken häufig daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel machen wir einen etwas seitlichen Schritt und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die Elemente {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}. `<iframe>`s dienen zum Einbetten anderer Webseiten, und die beiden anderen ermöglichen Ihnen das Einbetten externer Ressourcen wie PDF-Dateien.

## Siehe auch

- [Learn HTML](https://www.codecademy.com/learn/learn-html), Codecademy
  - : Eine nützliche (und kostenlose) Ressource, um die HTML-Grundlagen zu lernen.
- [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup>
  - : Der _Learn HTML and CSS_-Kurs von [Scrimba](https://scrimba.com/?via=mdn) lehrt Ihnen HTML und CSS durch den Bau und die Bereitstellung von fünf tollen Projekten mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von sachkundigen Lehrern unterrichtet werden.
- [Die Grundlagen von semantischem HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup>
  - : Diese interaktive Lektion bietet eine nützliche Beschreibung von HTML mit besonderem Augenmerk darauf, warum der _semantische_ Aspekt davon wichtig ist.

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
