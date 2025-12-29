---
title: "CSS: Cascading Style Sheets"
short-title: CSS
slug: Web/CSS
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die verwendet wird, um die Darstellung eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekten wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschrieben ist. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprachwiedergabe oder auf anderen Medien dargestellt werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist in Webbrowsern gemäß den [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) standardisiert. Früher wurde die Entwicklung verschiedener Teile der CSS-Spezifikation synchron durchgeführt, was die Versionierung der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird niemals ein CSS3 oder ein CSS4 geben; vielmehr wird nun alles einfach als „CSS“ bezeichnet, wobei einzelne CSS-Module Versionsnummern haben.

Nach CSS 2.1 nahm der Umfang der Spezifikation erheblich zu und der Fortschritt in den verschiedenen CSS-Modulen begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, erstellt das W3C nun periodisch einen Snapshot [des neuesten stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts einzelner Module. CSS-Module haben jetzt Versionsnummern oder Stufen, wie beispielsweise das [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Tutorials für Anfänger

Unsere [Kernmodule zum Erlernen der Webentwicklung](/de/docs/Learn_web_development/Core) enthalten moderne, aktuelle Tutorials, die die Grundlagen von CSS abdecken.

- [Ihre erste Website: Gestaltung des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung in CSS und seine Verwendung, speziell für Personen, die völlig neu in der Webentwicklung sind.
- [Grundlagen der CSS-Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Dieses Modul bietet alle grundlegenden CSS-Konzepte, die Sie benötigen, um die Technologie effektiv zu erlernen, einschließlich Syntax, Funktionen und Techniken.
- [CSS Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier befassen wir uns mit den Grundlagen der CSS-Textgestaltung, einschließlich Schriftart, Fettdruck, Kursivschrift, Zeilen- und Buchstabenabstand sowie Schlagschatten. Am Ende des Moduls betrachten wir das Anwenden benutzerdefinierter Schriftarten auf Ihre Seite sowie das Gestalten von Listen und Links.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Dieses Modul behandelt Floats, Positionierung, andere moderne Layout-Tools und den Aufbau responsiver Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Leitfaden

CSS-Leitfäden sind nach Modulen organisiert und helfen Ihnen zu lernen, was Sie mit CSS erreichen können. Stöbern Sie in der vollständigen Liste der [CSS-Leitfäden](/de/docs/Web/CSS/Guides), die Themen wie folgende enthält:

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction) einschließlich Deklarationen und Regelsätze.
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity), [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) und [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Verschachtelung](/de/docs/Web/CSS/Guides/Nesting), [Scoping](/de/docs/Web/CSS/Guides/Scoping) und [Shadow Parts](/de/docs/Web/CSS/Guides/Shadow_parts)
- [Media](/de/docs/Web/CSS/Guides/Media_queries) und [Container](/de/docs/Web/CSS/Guides/Containment) Queries
- [Numerische](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) und [textuelle](/de/docs/Web/CSS/Guides/Values_and_units/Textual_data_types) Datentypen
- [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) und [Margin Collapse](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Containing Block](/de/docs/Web/CSS/Guides/Display/Containing_block)
- [Stapeln](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) und Block-Formatierungskontexte [block-formatting](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Eigenschaftswertverarbeitung](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing)
- [Kurzschrift-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- Layouts mit [flexiblem Kasten](/de/docs/Web/CSS/Guides/Flexible_box_layout), [mehreren Spalten](/de/docs/Web/CSS/Guides/Multicol_layout) und [Gitternetz](/de/docs/Web/CSS/Guides/Grid_layout)
- [Animationen](/de/docs/Web/CSS/Guides/Animations/Using), [Übergänge](/de/docs/Web/CSS/Guides/Transitions/Using), und [Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)

## Anleitung

- [CSS-Layout-Kochbuch](/de/docs/Web/CSS/How_to/Layout_cookbook)
  - : Rezepte für gängige Layout-Muster, die Sie möglicherweise in Ihren Webseiten umsetzen müssen. Diese Rezepte liefern Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können. Diese Rezepte heben auch die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.

## Werkzeuge

- [Rand-Bild-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - : Generieren Sie CSS- {{cssxref("border-image")}}-Werte.
- [Radius-Generator für Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - : Generieren Sie CSS- {{cssxref("border-radius")}}-Effekte.
- [Box-Schatten-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
  - : Fügen Sie {{cssxref("box-shadow")}}-Effekte zu Ihren CSS-Objekten hinzu.
- [Farbformat-Konverter](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
  - : Geben Sie eine Farbe ein oder wählen Sie eine und kopieren Sie den entsprechenden Wert in jedes CSS-[Farbformat](/de/docs/Web/CSS/Reference/Values/color_value).
- [Farbmischer](/de/docs/Web/CSS/Guides/Colors/Color_mixer)
  - : Mischen Sie zwei Farben in jedem Farbraum mit der {{cssxref("color_value/color-mix", "color-mix()")}}-Funktion und kopieren Sie die resultierende Farbe in jedem CSS-Farbformat.
- [Form-Generator](/de/docs/Web/CSS/Guides/Shapes/Shape_generator)
  - : Definieren Sie Koordinaten und Syntax für {{cssxref("basic-shape")}}-Funktionen.

Sie können auch die folgenden Ressourcen nutzen:

- [W3C CSS-Validierungsdienst](https://jigsaw.w3.org/css-validator/): Um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unverzichtbares Debugging-Tool.
- [Firefox-Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html): Um das Live-CSS einer Seite mit den [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und den [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html)-Werkzeugen anzuzeigen und zu bearbeiten.
- [Web-Developer-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/web-developer/): Um Live-CSS auf Webseiten in Firefox zu verfolgen und zu bearbeiten.

## Referenz

Durchstöbern Sie die vollständige [CSS-Referenz](/de/docs/Web/CSS/Reference) -Dokumentation.

- [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties)
  - : Referenz für alle CSS-Eigenschaften.
- [CSS-Selektoren](/de/docs/Web/CSS/Reference/Selectors)
  - : Referenz für CSS-Selektoren, [Kombinatoren](/de/docs/Web/CSS/Reference/Selectors/Combinators), [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) und [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).
- [CSS-At-Regeln](/de/docs/Web/CSS/Reference/At-rules)
  - : Referenz für CSS-At-Regeln einschließlich Media-Queries.
- [CSS-Werte](/de/docs/Web/CSS/Reference/Values)
  - : Referenz für CSS-Schlüsselwörter, [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types) und [Funktionen](/de/docs/Web/CSS/Reference/Values/Functions).

## Siehe auch

- Web-Sprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow-Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)
