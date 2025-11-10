---
title: Strukturierung von Inhalten mit HTML
short-title: HTML
slug: Learn_web_development/Core/Structuring_content
l10n:
  sourceCommit: 25a3f6c781777a135143b0edd4b5e1f85857b802
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML ist die Technologie, die den Inhalt und die Struktur jeder Website definiert. Richtig geschrieben sollte es auch die Semantik (Bedeutung) des Inhalts in einer maschinenlesbaren Weise definieren, was entscheidend für Zugänglichkeit, Suchmaschinenoptimierung und die Nutzung der eingebauten Funktionen der Browser ist, damit der Inhalt optimal funktioniert. Dieses Modul behandelt die Grundlagen der Sprache, bevor es sich mit Schlüsselbereichen wie Dokumentstruktur, Links, Listen, Bildern, Formularen und mehr befasst.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, benötigen Sie keine vorherigen HTML-Kenntnisse, aber Sie sollten mindestens eine grundlegende Vertrautheit mit der Nutzung von Computern und dem passiven Surfen im Internet haben (d.h. nur anschauen und Inhalte konsumieren). Sie sollten eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installation grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Beide sind Teile unseres kompletten Anfängermoduls [Einstieg ins Web](/de/docs/Learn_web_development/Getting_started/Your_first_website).

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Grundlagen der HTML-Syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Deckt die absoluten Grundlagen von {{Glossary("HTML", "HTML")}} ab, um Ihnen den Einstieg zu erleichtern — wir definieren Elemente, Attribute und andere wichtige Begriffe und zeigen, wie sie in der Sprache zusammenpassen. Wir zeigen auch, wie eine typische HTML-Seite strukturiert ist und wie ein HTML-Element strukturiert ist, und erklären andere wichtige grundlegende Sprachmerkmale. Dabei spielen wir mit etwas HTML, um Sie zu interessieren!
- [Was ist im Kopf? Metadaten einer Webseite](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : Der {{Glossary("Head", "head")}} eines HTML-Dokuments ist der Teil, der **nicht** im Webbrowser angezeigt wird, wenn die Seite geladen ist. Er enthält Metadateninformationen wie den Seitentitel, Links zu {{Glossary("CSS", "CSS")}} (wenn Sie Ihren HTML-Inhalt mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und Metadaten (Daten über das HTML, wie z.B. wer es geschrieben hat und wichtige Schlüsselwörter, die das Dokument beschreiben).
- [Überschriften und Absätze](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : Eine der Hauptaufgaben von HTML ist es, Text eine Struktur zu geben, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es vom Entwickler beabsichtigt ist. Dieser Artikel erklärt, wie HTML verwendet werden kann, um eine grundlegende Seitenstruktur bereitzustellen, indem Überschriften und Absätze definiert werden.
- [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : Der vorherige Artikel behandelte, warum Semantik in HTML wichtig ist, und konzentrierte sich auf Überschriften und Absätze. Dieser Artikel setzt das Thema der Semantik fort und betrachtet HTML-Elemente, die Text Betonung und Wichtigkeit verleihen (parallel zu kursivem und fettem Text in Printmedien).
- [Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : Listen sind überall im Leben - von Ihrer Einkaufsliste bis zu den Anweisungen, die Sie unbewusst befolgen, um jeden Tag zu Ihrem Haus zu gelangen, bis zu den Listen von Anweisungen, denen Sie in diesen Tutorials folgen! Es wird Sie nicht überraschen, dass HTML ein praktisches Set von Elementen bietet, das es uns ermöglicht, verschiedene Arten von Listen zu definieren. Im Web haben wir drei Arten von Listen: ungeordnete, geordnete und Beschreibungslisten. Diese Lektion zeigt Ihnen, wie Sie die verschiedenen Typen verwenden.
- [Erweiterte Textfunktionen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : Es gibt viele andere Elemente in HTML zur Definition von Textsemantik, die wir im Artikel [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu kennen (und dies ist keineswegs eine vollständige Liste). Hier lernen Sie das Markieren von Zitaten, Computerprogrammcode und anderen verwandten Texten, tiefgestellte und hochgestellte Zeichen, Kontaktinformationen und mehr.

- [Befüllen eines Briefes](/de/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) <sup>Herausforderung</sup>
  - : Früher oder später lernen wir alle, einen Brief zu schreiben; es ist auch ein nützliches Beispiel, um unsere Textformatierungsfähigkeiten zu testen. In dieser Herausforderung haben Sie einen Brief zu gestalten, um Ihre HTML-Textformatierungsfähigkeiten sowie Hyperlinks und die ordnungsgemäße Verwendung des HTML-`<head>`-Elements zu testen.

- [Dokumente strukturieren](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") verfügt HTML über eine Anzahl an Blockebenen-Elementen, die zur Definition von Bereichen Ihrer Website verwendet werden (wie "der Kopfbereich", "das Navigationsmenü", "die Hauptinhaltsspalte"). Dieser Artikel befasst sich damit, wie man eine grundlegende Website-Struktur plant und das HTML schreibt, um diese Struktur darzustellen.

- [Link-Erstellung](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : Links (auch bekannt als Hyperlinks) sind sehr wichtig — sie sind es, die das Web _ein Netz_ machen. Dieser Artikel zeigt die erforderliche Syntax zum Erstellen eines Links und diskutiert bewährte Praktiken für Links.

- [Strukturierung einer Inhaltsseite](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>Herausforderung</sup>
  - : Die Strukturierung einer Inhaltsseite, um sie mit CSS zu gestalten, ist eine sehr wichtige Fähigkeit, um sie zu meistern. In dieser Herausforderung werden Sie auf Ihre Fähigkeit getestet, darüber nachzudenken, wie eine Seite möglicherweise aussieht, und geeignete strukturelle Semantiken auszuwählen, um darauf ein Layout aufzubauen.
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
  - : Am Anfang war das Web nur Text, und es war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel werden wir uns eingehend mit der Verwendung des {{htmlelement("img")}}-Elements befassen, einschließlich der Grundlagen, es mit Untertiteln zu versehen, indem {{htmlelement("figure")}} verwendet wird, und im Detail, wie es sich zu {{Glossary("CSS", "CSS")}}-Hintergrundbildern verhält.
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Jetzt, da wir uns mit dem Hinzufügen einfacher Bilder zu einer Webseite wohlfühlen, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel schauen wir uns an, wie wir mit den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen genau das tun; wir werden dann damit abschließen, wie Sie Ihren Videos Untertitel hinzufügen.
- [Abstoßende Krabbelspritzseite](/de/docs/Learn_web_development/Core/Structuring_content/Splash_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden wir Ihr Wissen über einige der in den letzten Lektionen besprochenen Techniken testen und Sie dazu bringen, einige Bilder und Videos zu einer Spritzseite über Käfer und andere krabbelnde Kreaturen hinzuzufügen.
- [HTML-Tabellengrundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : Dieser Artikel führt in HTML-Tabellen ein, indem die absoluten Grundlagen wie Zeilen, Zellen, Überschriften, das Überspannen von Zellen über mehrere Spalten und Zeilen und das Gruppieren aller Zellen in einer Spalte zu Stilzwecken behandelt werden.
- [Zugänglichkeit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : In diesem Artikel schauen wir uns weitere Merkmale zur Zugänglichkeit von HTML-Tabellen an, wie Überschriften/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Kopf-, Körper- und Fußbereichssektionen und das Scoping von Spalten und Zeilen.
- [Strukturierung einer Planetendatentabelle](/de/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) <sup>Herausforderung</sup>
  - : In dieser Herausforderung stellen wir Ihnen einige Daten zu den Planeten unseres Sonnensystems zur Verfügung. Ihre Aufgabe ist es, diese in eine zugängliche HTML-Tabelle zu strukturieren.
- [Formulare und Schaltflächen in HTML](/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
  - : HTML-Formulare und -Schaltflächen sind leistungsstarke Werkzeuge zur Interaktion mit Benutzern — am häufigsten werden sie für die Erfassung von Daten von Benutzern oder zur Steuerung einer Benutzeroberfläche verwendet. In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen.
- [Debugging von HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
  - : Das Schreiben von HTML ist in Ordnung, aber was, wenn etwas schiefgeht und Sie nicht herausfinden können, wo der Fehler im Code ist? Dieser Artikel führt Sie in einige Werkzeuge ein, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

## Testen Sie Ihre Fähigkeiten

Sie finden "Testen Sie Ihre Fähigkeiten"-Artikel, die zwischen den Tutorial-Artikeln platziert sind, um zu überprüfen, ob Sie die wichtigsten Informationen behalten haben, bevor Sie weitermachen. Wenn Sie alle zusammen erkunden möchten, finden Sie diese im [Testen Sie Ihre Fähigkeiten: HTML](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills) aufgelistet.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfades, aber sie sind dennoch interessant — Sie sollten diese als zusätzliche Ziele betrachten, die Sie optional studieren können, wenn Sie mit den Haupt-Core-Artikeln fertig sind.

- [Einbinden von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : Vektorgrafiken sind in vielen Situationen sehr nützlich — sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie nicht pixelig werden, wenn sie vergrößert oder auf große Größe aufgeblasen werden. In diesem Artikel zeigen wir Ihnen, wie man eine in Ihre Webseite einbindet.
- [Vom Objekt bis zum iframe — allgemeine Einbindungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : Entwickler denken häufig daran, Medien wie Bilder, Videos und Audio in Webseiten einzubinden. In diesem Artikel machen wir einen etwas seitlichen Schritt und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltsarten in Ihre Webseiten einzubinden: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s sind zum Einbetten anderer Webseiten gedacht, und die anderen beiden ermöglichen es Ihnen, externe Ressourcen wie PDF-Dateien einzubetten.

## Siehe auch

- [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn HTML and CSS_-Kurs von [Scrimba](https://scrimba.com?via=mdn) lehrt Ihnen HTML und CSS durch den Bau und die Bereitstellung von fünf großartigen Projekten mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern unterrichtet werden.
- [Learn HTML](https://www.codecademy.com/learn/learn-html), Codecademy
  - : Eine weitere nützliche Ressource, um die Grundlagen von HTML zu lernen.
- [Die Grundlagen von semantischem HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Beschreibung von HTML, mit besonderem Schwerpunkt darauf, warum der _semantische_ Aspekt wichtig ist.

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
